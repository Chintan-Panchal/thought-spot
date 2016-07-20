import {Comment} from './comment'

//Thought Bean
export class Thought {
    constructor() { }

    _id:string;
    name: string;
    title: string;
    description: string;
    upvotes: number;
    noOfCommment: number;
    comments: Comment[];
}
