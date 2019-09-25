import {ClientBlock} from './ClientBlock';
import {TeamText} from './TeamText';

export interface ClientList {
    title: TeamText;
    description: TeamText;
    blocks: Array<ClientBlock>;
}
