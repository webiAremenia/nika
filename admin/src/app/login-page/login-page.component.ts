import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    validateForm: FormGroup;
    flagMsg = false;
    msg = '';

    submitForm() {
        for (const i in this.validateForm.controls) {
            if (this.validateForm.hasOwnProperty(i)) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        this.data.login(this.validateForm.value).subscribe(
            (data: any) => {
                localStorage.setItem('token', data.token);
                const txt = JSON.stringify(data.user);
                localStorage.setItem('user', txt);
                this.router.navigate(['post']);
            },
            (err) => {
                console.log(err);
                this.msg = err.error.msg;
                this.flagMsg = true;
            }
        );
    }

    constructor(private fb: FormBuilder, private data: DataService, private router: Router) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

}
