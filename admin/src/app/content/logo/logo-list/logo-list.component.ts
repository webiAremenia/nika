import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {LogoService} from '../../../shared/services/logo.service';

@Component({
    selector: 'app-logo-list',
    templateUrl: './logo-list.component.html',
    styleUrls: ['./logo-list.component.css']
})
export class LogoListComponent implements OnInit {

    logos: any[] = [];
    url;

    constructor(private service: LogoService, private modalService: NzModalService, private router: Router) {
    }

    ngOnInit() {
        this.url = this.service.url + '/uploads/medias/';
        this.service.getLogos().subscribe((data: any[]) => {
            this.logos = data;
        });
    }

    edit(logo) {
        this.service.candidateLogo = logo;
        this.router.navigate(['logo/changeLogo']);
    }

    delete(logo) {
        this.service.candidateLogo = logo;
        this.service.deleteLogo(logo).subscribe((data) => {
            this.logos = this.logos.filter(items => items._id !== logo._id);
        });
    }

    addLogo() {
        this.router.navigate(['logo/addLogo']);
    }
}
