import {Prevalent} from './prevalent';

export interface Awards {
    _id: string;
    title: Prevalent;
    description: Prevalent;
    first: Prevalent[];
    blocks: string[];
}
