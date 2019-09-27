import {LiderPerson} from './LiderPerson';
import {TeamText} from './TeamText';

export interface Lidership {
    title: TeamText;
    description: TeamText;
    first: LiderPerson;
    second: LiderPerson;
}
