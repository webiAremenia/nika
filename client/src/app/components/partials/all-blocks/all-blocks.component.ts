import {Component, OnInit} from '@angular/core';
import {ComponentService} from '../../../_services/component.service';
import {Block} from '../../../_models/block';
import {FooterService} from '../../../_services/footer.service';
import {Group} from '../../../_models/group';

@Component({
    selector: 'app-all-blocks',
    templateUrl: './all-blocks.component.html',
    styleUrls: ['./all-blocks.component.scss']
})
export class AllBlocksComponent implements OnInit {

    blocks: Block[];
    ggg: Group[];

    constructor(
        private componentService: ComponentService,
        private footerService: FooterService
    ) {}

    ngOnInit() {
        this.getGroups();
    }
    getGroups() {
        this.ggg = this.footerService.groups;
    }


}
