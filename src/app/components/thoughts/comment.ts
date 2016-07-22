//Comment Bean
export class Comment {
    _id: string;
    author: string;
    comment: string;
    createdDate: Date;
    modifiedDate: Date;
    upvote: number;

    constructor() { }
}