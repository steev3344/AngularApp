import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel} from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { AlertActionModel } from 'app/shared/models/alert-action-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productModel: ProductModel = {};
  productID: string;

  constructor(
    private router:Router,
    private productService: ProductService,
    private alertService:AlertService,
    private route: ActivatedRoute) { }
    

  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('productID');
    if (this.productID != null) {
      this.get(this.productID);
    }

  
  }
  get(id: string) {
    this.productService.getOne(id).subscribe(res => {
      this.productModel = res;
    });
  }

  saveForm() {
    this.productService.createOrUpdate(this.productModel).subscribe(res => {
      if (res && res._id) {
        this.alertService.success(
          `Vehicle Brand ${this.productModel._id ? 'Updated' : 'Added'} successfully`, 'BrandAddorUpdate'
        );
        const alertListener = this.alertService.getAction('BrandAddorUpdate').subscribe((alertActionModel: AlertActionModel) => {
          if (alertActionModel.actionId === 1 && alertActionModel.functionName === 'BrandAddorUpdate') {
            alertListener.unsubscribe();
            this.action()
          
          }
        });
      }
    });
  }

  
  public action() {
    this.router.navigateByUrl('product');
  }



}
