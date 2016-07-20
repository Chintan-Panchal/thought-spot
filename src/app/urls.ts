import {Injectable} from "@angular/core";

@Injectable()
export class Url {

    constant
        rootUrl: string = 'http://localhost:3001/';
        handleThoughtUrl: string = this.rootUrl+'thoughts';
        thoughtsUrl: string = this.rootUrl+'thoughts';
        getThoughtUrl: string = this.rootUrl+'thoughts/:id';
        commentUrl: string = this.rootUrl+'thoughts/:id/comments';
}