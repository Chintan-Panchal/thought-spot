import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Thought} from './thought';
import {ThoughtService} from './thought.service';

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ThoughtService],
    templateUrl: 'app/components/thoughts/thoughts.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

export class ThoughtComponent implements OnInit {

    thoughts: Thought[] = [];
    thought: Thought;
    errorMessage: string;
    //noOfUpvote: number = 0;

    constructor(private thoughtService: ThoughtService, private router: Router) {}

    getThoughts() {

        this.thoughtService.getThoughts()
                      .map(
                       thought => this.thoughts.push(thought));
    }

    getAddThoughtPage() {
        this.router.navigateByUrl('/thoughts/add');
    }

    ngOnInit() {
        this.getThoughts();
    }

    getMoreDetails(thought: Thought) {
        this.router.navigateByUrl('/thoughts/details/'+thought.id);
    }

    /*addUpvote(noOfUpvote: number, thought: Thought) {
      noOfUpvote = ++noOfUpvote;
    }*/

    addUpvote(thought: Thought) {
        this.thoughtService.addUpvote(thought.id);
    }
}
