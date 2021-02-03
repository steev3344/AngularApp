import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel} from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { AlertActionModel } from 'app/shared/models/alert-action-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: ProductModel[];
  dataSource: MatTableDataSource<ProductModel>;
  displayedColumns: string[] = ['productname', 'price', 'action'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router:Router,
    private productService: ProductService,
    private alertService:AlertService
  ) { }
  productModel:ProductModel = {};
  ngOnInit(): void {
    this.getModels()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //get All
    /**
   * function will perform on form load to fetch Model Data from API
   */
  getModels() 
  {
      this.productService.getAll().subscribe(res => {
        this.products = res;
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  
  deleteModel(rowObject: ProductModel, event: Event) {
    event.stopPropagation();
    this.productService.delete(rowObject._id).subscribe(res => {
      this.dataSource.data = this.dataSource.data.filter(i => i !== rowObject);
      this.alertService.success('Deleted Successfully');
    });
  }
  editModel(rowObject: ProductModel) {
    this.router.navigate(['product', rowObject._id]);
  }
}
