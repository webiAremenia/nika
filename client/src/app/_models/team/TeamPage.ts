import {Introduce} from './Introduce';
import {ElementList} from './ElementList';
import {BlockList} from './BlockList';
import {Remark} from './Remark';
import {Lidership} from './Lidership';

export interface TeamPage {
    introduces: Introduce;
    elements: ElementList;
    clients: BlockList;
    remarks: Remark;
    leaderships: Lidership;
    awards: any;
}
