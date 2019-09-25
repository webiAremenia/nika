import {TeamText} from './TeamText';

export interface Awards {
    title: TeamText;
    description: TeamText;
    blocks: Array<string>;
    first: Array<TeamText>;
}
