import {Thought} from './thought';

export const THOUGHTS: Thought[] = [
    {_id: "1", name: 'Mr. Nice', title: 'Title 1', description: 'Description 1, Description 1, Description 1', upvotes: 10, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its' +
        ' awesome'}]},
    {_id: "2", name: 'Mr. Nice', title: 'Title 2', description: 'Description 2, Description 2, Description 2', upvotes: 20, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its awesome'}]},
    {_id: "3", name: 'Mr. Nice', title: 'Title 3', description: 'Description 3, Description 3, Description 3', upvotes: 30, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its awesome'}]},
    {_id: "4", name: 'Mr. Nice', title: 'Title 4', description: 'Description 4, Description 4, Description 4', upvotes: 40, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its awesome'}]},
    {_id: "5", name: 'Mr. Nice', title: 'Title 5', description: 'Description 5, Description 5, Description 5', upvotes: 30, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its awesome'}]},
    {_id: "6", name: 'Mr. Nice', title: 'Title 6', description: 'Description 6, Description 6, Description 6', upvotes: 20, noOfCommment: 0,
        comments: [{_id:"1", author: 'username', comment: 'its nice'}, {_id:"2", author: 'username', comment: 'its' +
        ' awesome'}]}
];
