import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel} from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
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
    this.getProducts()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    /**
   * function will fetch Products from API
   */
  getProducts() 
  {
      this.productService.getAll().subscribe(res => {
        this.products = res;
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }

  /**
   * function For Deleting Products from API
   */
  deleteModel(rowObject: ProductModel, event: Event) {
    event.stopPropagation();
    this.productService.delete(rowObject._id).subscribe(res => {
      this.dataSource.data = this.dataSource.data.filter(i => i !== rowObject);
      this.alertService.success('Deleted Successfully');
    });
  }

  /**
   * function For Navigating to Edit Page
   */
  editModel(rowObject: ProductModel) {
    this.router.navigate(['product/edit/', rowObject._id]);
  }
}
