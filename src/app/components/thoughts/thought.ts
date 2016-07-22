import {Comment} from './comment'

//Thought Bean
export class Thought {
    _id:string;
    name: string;
    title: string;
    description: string;
    upvotes: number;
    noOfCommment: number;
    comments: Comment[];
    createdDate: Date;
    modifiedDate: Date;

    constructor() { }
}
