import {Injectable} from '@angular/core';

import {Thought} from './thought';
import {Comment} from './comment';
import {THOUGHTS} from './mock-thought';
import { Observable } from 'rxjs/Observable';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class ThoughtService {

    thoughtsUrl: string = '';
    handleThoughtUrl: string = '';
    getThoughtUrl: string = '';
    commentUrl: string = '';

    constructor(public http:Http) {}

    getThoughts() {
        return THOUGHTS;
        //return this.http.get(this.thoughtsUrl)
        //              .map(this.extractData.bind(this))
        //            .catch(this.handleError.bind(this));
    }

    handleThought(thought: Thought) {
        let body = JSON.stringify(thought);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        /*  this.http.post(this.handleThoughtUrl, body, options)
              .subscribe(response => {

              },
              error => {

              });*/
    }

    addUpvote(thoughtId: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        /*  this.http.post(this.addVoteUrl, body, options)
                .subscribe(response => {

                },
                error => {

                });*/
    }

    addComment(comment: Comment) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        /*  this.http.post(this.commentUrl, body, options)
         .subscribe(response => {

         },
         error => {

         });*/
    }

    getThought(id: number) {
        console.log(THOUGHTS[id-1]);
        return THOUGHTS[id-1];
        //return this.http.get(this.getThoughtUrl)
        //              .map(this.extractData.bind(this))
        //            .catch(this.handleError.bind(this));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
