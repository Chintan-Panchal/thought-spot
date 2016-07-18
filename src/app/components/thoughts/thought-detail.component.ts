import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Control, Validators, ControlGroup, CORE_DIRECTIVES, NgForm, NgFormControl, NgFormModel} from 'angular2/common';
import {ThoughtService} from './thought.service';
import {Observable} from 'rxjs/Rx';
import {Thought} from './thought';
import {Comment} from './comment';

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ThoughtService],
    templateUrl: 'app/components/thoughts/thought-detail.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

export class ThoughtDetailComponent implements OnInit, OnDestroy {

    thought: Thought;
    comment: Comment;
    form : ControlGroup;
    sub: any;

    constructor(private router: Router, private route: ActivatedRoute, private thoughtService: ThoughtService, public builder: FormBuilder){
        this.thought = new Thought();
        this.comment = new Comment();
        this.form = builder.group({
            'Comment': new Control(this.comment.comment, Validators.required)
        });
    }

    onsubmit(event, comment:Comment) {

        event.preventDefault();
        console.log('testing!!');
        this.comment.name = "username";
        console.log("user" +JSON.stringify(this.comment));
        let body = JSON.stringify(this.comment);
        console.log(body);
        this.thoughtService.addComment(this.comment);
        this.comment = new Comment();
    }

    goToThoughtsPage() {
        this.router.navigateByUrl('/thoughts');
    }

    getMoreDetails(thought: Thought) {
        this.router.navigateByUrl('/thoughts/details/'+thought.id);
    }

    addUpvote(thought: Thought) {
        this.thoughtService.addUpvote(thought.id);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
            this.thought = this.thoughtService.getThought(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
