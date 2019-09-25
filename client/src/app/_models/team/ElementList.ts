import {ElementBlock} from './ElementBlock';
import {TeamText} from './TeamText';

export  interface ElementList {
    title: TeamText;
    blocks: Array<ElementBlock>;
}
