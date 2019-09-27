import {LiderPerson} from './LiderPerson';
import {TextData} from '../TextData';

export interface Lidership {
    title: TextData;
    description: TextData;
    first: LiderPerson;
    second: LiderPerson;
}
