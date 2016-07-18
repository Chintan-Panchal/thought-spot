import {Comment} from './comment'

export class Thought {
    constructor() { }

    id:number;
    name: string;
    title: string;
    description: string;
    upvote: number;
    noOfCommment: number;
    comments: Comment[];
}
