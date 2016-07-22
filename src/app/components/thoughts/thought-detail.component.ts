import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Control, Validators, ControlGroup, CORE_DIRECTIVES, NgForm, NgFormControl, NgFormModel} from 'angular2/common';
import {ThoughtService} from './thought.service';
import {Observable} from 'rxjs/Rx';
import {Thought} from './thought';
import {Comment} from './comment';
import {Url} from "../../urls";
import * as moment from 'moment';

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ThoughtService, Url],
    templateUrl: 'app/components/thoughts/thought-detail.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

/*
 * Thought Details Component for show specific thought and add comment
 */
export class ThoughtDetailComponent implements OnInit, OnDestroy {

    thought: Thought;
    comment: Comment;
    form : ControlGroup;
    sub: any;
    thoughtId: string = '';

    //When page load below method call
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            console.log(id);
            this.thoughtId = id;
            this.getThoughtById(id);
        });
    }

    //When page close below method call
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    //Create and initialize require variable
    constructor(private router: Router, private route: ActivatedRoute, private thoughtService: ThoughtService, public builder: FormBuilder){
        this.thought = new Thought();
        this.comment = new Comment();
        //Add validation in form
        this.form = builder.group({
            'Comment': new Control(this.comment.comment, Validators.required)
        });
    }

    //Get Thought By thoughtId
    getThoughtById(id: string) {
        this.thoughtService.getThought(id)
            .subscribe(
                thought => {
                    this.thought = thought;
                },
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }

    //Handle comment form
    onsubmit(event, thought: Thought, comment:Comment) {

        event.preventDefault();
        console.log('testing!!');
        this.comment.author = "username";
        console.log("user" +JSON.stringify(this.comment));
        let body = JSON.stringify(this.comment);
        console.log(body);
        this.thoughtService.addComment(thought._id, this.comment)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.getThoughtById(thought._id);
                }
            );
        this.comment = new Comment();
    }

    //Go to thought page
    goToThoughtsPage() {
        this.router.navigateByUrl('/thoughts');
    }

    //Get More details for specific thought
    getMoreDetails(thought: Thought) {
        this.router.navigateByUrl('/thoughts/details/'+thought._id)
    }

    //Add upvote for specific thought
    addUpvote(thought: Thought) {
        this.thoughtService.addUpvote(thought._id)
            .subscribe(
                (data) => {
                    this.getThoughtById(thought._id);
                }
            );
    }

    getDiffBtwDate(createdDate: Date) {
        let now = new Date();
        console.log(moment());
        console.log(now)
    }
}
