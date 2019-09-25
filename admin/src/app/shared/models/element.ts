import {Prevalent} from './prevalent';

export interface Element {
    _id: string;
    title: Prevalent;
    blocks: [Prevalent, Prevalent];
}
