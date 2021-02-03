import { Component, OnInit } from '@angular/core';
import { ProductModel} from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { AlertActionModel } from 'app/shared/models/alert-action-model';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit {
  productModel: any = {};

  constructor(private router:Router,
    private productService: ProductService,
    private alertService:AlertService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getOne(params['id']).subscribe(res => {
        this.productModel = res;
    });
  });
}
saveForm() {
  this.productService.createOrUpdate(this.productModel).subscribe(res => {
    if (res && res._id) {
      this.alertService.success(
        `${this.productModel._id ? 'Updated' : 'Added'} successfully`
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

public action() {
  this.router.navigateByUrl('product');
}
}



