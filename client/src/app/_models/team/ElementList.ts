import {ElementBlock} from './ElementBlock';
import {TextData} from '../TextData';

export  interface ElementList {
    title: TextData;
    blocks: Array<ElementBlock>;
}
