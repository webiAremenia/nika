import {Introduce} from './Introduce';
import {ElementList} from './ElementList';
import {ClientList} from './ClientList';
import {Remark} from './Remark';
import {Lidership} from './Lidership';

export interface TeamPage {
    introduce: Introduce;
    element: ElementList;
    client: ClientList;
    remark: Remark;
    leadership: Lidership;
    awards: any;
}
