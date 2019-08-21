import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../shared/services/profile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    validateForm: FormGroup;
    msg;

    constructor(private fb: FormBuilder, private service: ProfileService, private router: Router) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            old: ['', Validators.required],
            new: ['', Validators.required]
        });
    }

    handleUpload() {
        this.service.changePass(this.validateForm.value).subscribe((data: any) => {
            this.msg = data.msg;
            if (data.success) {
                setTimeout(() => {
                    this.router.navigate(['profile']);
                }, 1000);
            }
        }, e => console.log(e));
    }

}
