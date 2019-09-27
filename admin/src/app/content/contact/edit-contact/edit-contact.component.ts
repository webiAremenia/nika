import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../../shared/services/contact.service';
import {Contact} from '../../../shared/models/contact';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

    contacts: Contact[] = [];
    options;
    isVisible = false;
    isOkLoading = false;

    modalContent = '';
    fontFamily = 'Open Sans';
    fontSize = 3;
    lineHeight = 3;


    fontSizeMin = 10;
    fontSizeMax = 100;

    lineHeightMin = 10;
    lineHeightMax = 100;

    contactId: number;
    contactIndex: string;
    field: string;

    constructor(
        private contactService: ContactService,
        private modalService: NzModalService
    ) {
    }

    ngOnInit() {
        this.contactService.getContact().subscribe((data: any) => {
            this.contacts = data.contacts;
            console.log(data.contacts);
        }, e => console.log(e))
    }

    edit(value, field, index, id) {
        this.contactId = id;
        this.contactIndex = index;
        this.field = field;
        this.modalContent = value.text;
        this.fontSize = value.fontSize;
        this.lineHeight = value.lineHeight;
        this.fontFamily = value.fontFamily;
        this.isVisible = true;
    }


    handleOk(): void {
        this.isOkLoading = true;

        if (this.modalContent) {
            this.contacts[this.contactIndex][this.field] = {
                fontSize: this.fontSize,
                lineHeight: this.lineHeight,
                fontFamily: this.fontFamily,
                text: this.modalContent
            };

            const obj = {
                [this.field]: this.contacts[this.contactIndex][this.field]
            };

            this.contactService.putContact(this.contactId, obj).subscribe(data => {
            }, e => console.log(e))
        }

        setTimeout(() => {
            this.isVisible = false;
            this.isOkLoading = false;
        }, 0);
    }

    handleCancel(): void {
        this.isVisible = false;
    }

}
