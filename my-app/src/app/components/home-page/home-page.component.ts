import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel} from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { AlertActionModel } from 'app/shared/models/alert-action-model';
import { Router } from '@angular/router';

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
    private alertService:AlertService) { }
    

  ngOnInit(): void {
  }

 /**
   * function For Creating new Product
   */
  saveForm() {
    this.productService.createOrUpdate(this.productModel).subscribe(res => {
      if (res && res._id) {
        this.alertService.success(
          `Product ${this.productModel._id ? 'Updated' : 'Added'} successfully`, 'AddorUpdate'
        );
        const alertListener = this.alertService.getAction('AddorUpdate').subscribe((alertActionModel: AlertActionModel) => {
          if (alertActionModel.actionId === 1 && alertActionModel.functionName === 'AddorUpdate') {
            alertListener.unsubscribe();
            this.action()
          
          }
        });
      }
    });
  }

   /**
   * function For Navigating to Product List Page
   */
  public action() {
    this.router.navigateByUrl('product');
  }



}
