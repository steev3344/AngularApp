export interface ResponseModel {
}

export interface PagedResponseModel<T> {
    totalCount?: number;
    totalPages?: number;
    currentPage?: number;
    pageItems?: number;
    data?: T;
}