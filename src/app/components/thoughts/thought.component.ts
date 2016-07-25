import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from 'angular2/router';
import {Thought} from './thought';
import {ThoughtService} from './thought.service';
import {Url} from "../../urls";
import {InfiniteScroll} from 'angular2-infinite-scroll';

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES, InfiniteScroll],
    providers: [ThoughtService, Url],
    templateUrl: 'app/components/thoughts/thoughts.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

/*
 * Thought Component for List of Thought Page
 */
export class ThoughtComponent implements OnInit {

    thoughts: Thought[] = [];
    thought: Thought;
    sub: any;
    errorMessage: string;
    successMessage: string = '';

    //Create and initialize all require variable
    constructor(private thoughtService: ThoughtService, private router: Router, private route: ActivatedRoute) {}

    //On page load below method call
    ngOnInit() {
        this.getThoughts();

        this.router
            .routerState
            .queryParams
            .subscribe(params => {
                let a = params['a'];
                if(a) {
                    this.successMessage = "Added Record Successfully";
                    setTimeout(() => {
                        this.successMessage = '';
                    }, 5000);
                }
            });
    }

    //Get All Thoughts
    getThoughts() {
        this.thoughtService.getThoughts()
            .subscribe(
            thought => this.thoughts = thought,
            error => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    //Get Add Thought Page
    getAddThoughtPage() {
        this.router.navigateByUrl('/thoughts/add');
    }

    //Get More details for specific thought
    getMoreDetails(thought: Thought) {
        this.router.navigateByUrl('/thoughts/details/'+thought._id);
    }

    //Add upvote for specific thought
    addUpvote(thought: Thought) {
        this.thoughtService.addUpvote(thought._id)
            .subscribe(
                res => {
                    this.getThoughts();
                },
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }

    onScroll() {
        console.log("event");
    }
}
