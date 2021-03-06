import {WorkDetails} from './WorkDetails';
import {TextData} from '../TextData';

export  interface Work {
    title: TextData;
    subTitle: TextData;
    color: string;
    created: string;
    updated: string;
    _id: string;
    description: TextData;
    slug: string;
    img: string;
    details: Array<WorkDetails>;
}
