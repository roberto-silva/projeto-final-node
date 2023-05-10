import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {HttpResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  product: any[] = [];
  constructor(
    private readonly productService: ProductService,
    private readonly toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct(): void {
    this.productService.getAllProduct().subscribe({
      next: (value: any) =>  {
        this.product = value;
        this.toastrService.success("Loading products");
      },
      error:(error: any) => {
        this.toastrService.error(error.message);
      }
    });
  }
}
