import {Prevalent} from './prevalent';
import {Person} from './person';

export interface Leadership {
    _id: string;
    title: Prevalent;
    description: Prevalent;
    first: Person;
    second: Person;
}
