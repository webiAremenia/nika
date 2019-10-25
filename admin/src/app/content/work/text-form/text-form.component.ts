import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-text-form',
    templateUrl: './text-form.component.html',
    styleUrls: ['./text-form.component.css']
})
export class TextFormComponent implements OnInit {
    @Output() textForm: FormGroup;

    fontSizeMin = 10;
    fontSizeMax = 100;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.textForm = this.fb.group({
            text: ['', Validators.required],
            fontSize: 15,
            fontFamily: null
        });
    }

}
