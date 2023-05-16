import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {ToastrService} from "ngx-toastr";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {
  ModalActionAdapterComponent
} from "../../../../core/component/modal-action-adapter/modal-action-adapter.component";
import {ProductEditComponent} from "../product-edit/product-edit.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  modalRef: NgbModalRef | any = null;
  product: any[] = [];
  constructor(
    private readonly productService: ProductService,
    private readonly toastrService: ToastrService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct(): void {
    this.productService.getAllProduct().subscribe({
      next: (value: any) => {
        this.product = value;
        this.toastrService.success("Loading products");
      },
      error: (error: any) => {
        this.toastrService.error(error.message);
      }
    });
  }

  goToNewProduct(): void {
    this.modalRef = this.modalService.open(ProductEditComponent, {
      centered: true,
      size: 'xl'
    });
    this.modalRef.componentInstance.item = null;
    this.onClosedModal();
  }

  gotToEditProduct(item: any): void {
    this.modalRef = this.modalService.open(ProductEditComponent, {
      centered: true,
      size: 'xl'
    });
    this.modalRef.componentInstance.item = item;
    this.onClosedModal();
  }

  gotToRemoveProduct(item: any): void {
    this.modalRef = this.modalService.open(ModalActionAdapterComponent, {
      centered: true
    });
    this.modalRef.componentInstance.title = 'Remover um produto';
    this.modalRef.componentInstance.body = 'Você tem certeza que deseja remover?';
    this.modalRef.result.then((results: any) => {
        if (results) {
          this.productService.deleteProduct(item?.id).subscribe({
            next: (value: any) => {
              this.toastrService.success("Produto removido com sucesso!");
            }
          });
        }
      })
      .catch(() => {
      });
    this.onClosedModal();
  }

  private onClosedModal(): void {
    this.modalRef.result
      .then((results: any) => {
        if (results) {
          this.loadAllProduct();
        }
      })
      .catch(() => {
      });
  }
}
