import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-invoiceing-section',
  templateUrl: './invoiceing-section.component.html',
  styleUrls: ['./invoiceing-section.component.css']
})
export class InvoiceingSectionComponent implements OnInit {
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {id: 2, class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
 
    this.modalRef.hide();
    this.modalRef = null;
  }
  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }
}

