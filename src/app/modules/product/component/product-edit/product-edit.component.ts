import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  @Input() item: any = null;
  formBuilder: FormBuilder = new FormBuilder();

  formGroup: FormGroup = this.formBuilder.group({
    id: [null, []],
    nome: [null, [Validators.required]],
    descricao: [null, [Validators.required]],
    valor: [null, [Validators.required]],
    marca: [null, [Validators.required]]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private readonly productService: ProductService,
    private readonly toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getCurrentProduct();
    this.updateForm();
    if (this.item?.id) {
      this.formGroup.get('nome')?.disable();
    }
  }

  getCurrentProduct(): void {
    this.productService.getProductById(this.item?.id).subscribe((result: any) => {
      this.item = result;
    });
  }

  updateForm(): void {
    if (this.item && this.item?.id) {
      this.formGroup.get('id')?.setValue(this.item?.id);
      this.formGroup.get('nome')?.setValue(this.item?.nome);
      this.formGroup.get('descricao')?.setValue(this.item?.descricao);
      this.formGroup.get('valor')?.setValue(this.item?.valor);
      this.formGroup.get('marca')?.setValue(this.item?.marca);

    }
  }

  save(): void {
    this.insertOrUpdate().subscribe(
      {
        next: (result: any) => {
          if (!this.item?.id) {
            this.toastrService.success('Produto salvo com sucesso')
          } else {
            this.toastrService.success('Produto editado com sucesso')
          }
          this.activeModal.close(true);
        },
        error: (error: any) => {
          this.toastrService.error(error.message);
        }
      }
    );
  }

  protected insertOrUpdate(): Observable<any> {
    const form: any = this.formGroup.value;
    if (!this.item?.id) {
      delete form.id;
    }

    return this.item?.id
      ? this.productService.putProduct(form)
      : this.productService.postProduct(form)
  }

}
