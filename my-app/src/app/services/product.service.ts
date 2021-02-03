import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../network/http-error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ProductModel } from 'app/models/product';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private handleError: HandleError;
  private urlCreate: string;
  private urlGetAll: string;
  private urlUpdate:string;
  private urlDelete:string;
  private urlShow:string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.urlCreate =`${environment.ApiHost}/product/create`;
    this.urlGetAll =`${environment.ApiHost}/product/all`;
    this.urlDelete= `${environment.ApiHost}/product`;
    this.urlShow=`${environment.ApiHost}/product`;
    this.urlUpdate=`${environment.ApiHost}/product/update`;
    this.handleError = httpErrorHandler.createHandleError('ProductService');


}

 /**
   * GET API request to index vehicle model records
   */
  getAll(): Observable<ProductModel[]> {
    const url = `${this.urlGetAll}`;
    return this.http.get<ApiResponseModel<ProductModel[]>>(url).pipe(
      map(res => res.data),
      catchError(this.handleError('get', null))
    );
  }

  /**
   * @param id 
   * Fetch Data according to the given ID
   */
  getOne(id: string): Observable<ProductModel[]> {
    const url = `${this.urlShow}/${id}`;
    return this.http.get<ApiResponseModel<ProductModel[]>>(url).pipe(
      map(res => res.data),
      catchError(this.handleError('get', null))
    );
  }
/**
 * 
 * @param id 
 * Delete Data according to the ID
 */

 delete(id: string): Observable<ProductModel> {
   const url = `${this.urlDelete}/${id}`;
   return this.http.delete<ApiResponseModel<ProductModel>>(url).pipe(catchError(this.handleError('delete', null))
   );
 }

public createOrUpdate(ProductModel: ProductModel) {
  if (ProductModel._id) {
    return this.update(ProductModel);
  } else {
    return this.create(ProductModel);
  }
}
  /**
   *  
   * Function For Creating new Product
   */

create(productModel: ProductModel): Observable<ProductModel> {
  const inputData = productModel
  return this.http.post<ApiResponseModel<ProductModel>>(this.urlCreate, inputData).pipe(
    map(res => res.data),
    catchError(this.handleError('create', null))
  );
}
 /**
   * @param id 
   * Update  Data according to the given ID
   */
update(productModel: ProductModel): Observable<ProductModel> {
  const inputData = productModel;
  const url = `${this.urlUpdate}/${productModel._id}`;
  return this.http.put<ApiResponseModel<ProductModel>>(url, inputData).pipe(
    map(res => res.data), catchError(this.handleError('update', null))
  );
}

}
