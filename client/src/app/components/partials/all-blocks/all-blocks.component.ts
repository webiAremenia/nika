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
    groups;
    ggg: Group[];
    ggDone = false;

    constructor(
        private componentService: ComponentService,
        private footerService: FooterService
    ) {
    }

    ngOnInit() {
        this.getBlocks();
        this.getGroups();
    }

    getBlocks() {
        this.blocks = this.componentService.getBlocks();
    }

    getGroups() {
        // this.groups = this.componentService.getGroup();
        this.ggg = this.footerService.groups;
    }


}
