import {WorkDetails} from './WorkDetails';

export  interface Work {
    title: string;
    created: string;
    updated: string;
    _id: string;
    description: string;
    slug: string;
    img: string;
    details: Array<WorkDetails>;
}
