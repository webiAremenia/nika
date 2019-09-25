import {Introduce} from './Introduce';
import {ElementList} from './ElementList';
import {ClientList} from './ClientList';
import {Remark} from './Remark';
import {Lidership} from './Lidership';

export interface TeamPage {
    introduces: Introduce;
    elements: ElementList;
    clients: ClientList;
    remarks: Remark;
    leaderships: Lidership;
    awards: any;
}
