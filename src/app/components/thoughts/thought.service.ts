import {Injectable} from '@angular/core';

import {Thought} from './thought';
import {Comment} from './comment';
import {THOUGHTS} from './mock-thought';
import {Observable} from 'rxjs/Observable';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from '@angular/http';
import {Url} from './../../urls';

/*
 * Thought Service
 */
@Injectable()
export class ThoughtService {

    //Create and initialize required variable
    constructor(public http:Http, private url: Url) {}

    //Get All thoughts
    getThoughts(): Observable<Thought[]> {
        //return THOUGHTS;
        return this.http.get(this.url.thoughtsUrl)
            .map(response => response = response.json());
    }

    //Handle Thought Form
    handleThought(thought: Thought) {
        let body = JSON.stringify(thought);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url.handleThoughtUrl, body, options)
            .map(res => res.json());
             /* .subscribe(response => {
                  return response;//console.log(response);
              },
              error => {
                  return error;//console.log(error);
              });*/
    }

    //Add upvote for specific thought
    addUpvote(thoughtId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        /*  this.http.post(this.addVoteUrl, body, options)
                .subscribe(response => {

                },
                error => {

                });*/
    }

    //Add Comment for specific thought
    addComment(thoughtId: string, comment: Comment) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(comment);

        let url = this.url.commentUrl.replace(':id', thoughtId);
        return this.http.post(url, body, options)
            .map(res => res.json());
    }

    //Get Thought by thoughtId
    getThought(id: string): Observable<Thought> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let url = this.url.getThoughtUrl.replace(':id', id);
        return this.http.get(url, options)
                      .map(res => res.json());
    }

    //Extract Data from response
    private extractData(res: Response){
        let body = res.json();
        return body.data || { };
    }

    //Handle error message
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
