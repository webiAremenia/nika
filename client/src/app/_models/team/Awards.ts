import {TextData} from '../TextData';

export interface Awards {
    title: TextData;
    description: TextData;
    blocks: Array<string>;
    first: Array<TextData>;
}
