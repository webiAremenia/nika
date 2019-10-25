import {Prevalent} from './prevalent';

export interface Client {
    _id: string;
    title: Prevalent;
    description: Prevalent;
    blocks: any[];
}
