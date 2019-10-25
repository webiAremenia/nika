import {ClientBlock} from './ClientBlock';
import {TextData} from '../TextData';

export interface BlockList {
    title: TextData;
    description: TextData;
    blocks: Array<ClientBlock>;
}
