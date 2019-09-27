import {ClientBlock} from './ClientBlock';
import {TextData} from '../TextData';

export interface ClientList {
    title: TextData;
    description: TextData;
    blocks: Array<ClientBlock>;
}
