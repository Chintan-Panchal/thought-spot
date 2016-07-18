import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Control, Validators, ControlGroup, CORE_DIRECTIVES, NgForm, NgFormControl, NgFormModel} from 'angular2/common';
import {Thought} from './thought';
import {ThoughtService} from './thought.service';

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ThoughtService],
    templateUrl: 'app/components/thoughts/add-thoughts.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

export class AddThoughtComponent {

    thought: Thought;
    form : ControlGroup;

    constructor(public builder: FormBuilder, public thoughtService: ThoughtService, public router: Router) {
        this.thought = new Thought();
        this.form = builder.group({
            'Name': new Control(this.thought.name, Validators.required),
            'Title': new Control(this.thought.title, Validators.required),
            'Description': new Control(this.thought.description, Validators.required)
        });
    }

    onsubmit(event, thought:Thought) {

        event.preventDefault();
        console.log('testing!!');
        console.log("user" +JSON.stringify(this.thought));

        let body = JSON.stringify(this.thought);
        console.log(body);
        this.thoughtService.handleThought(this.thought);
    }

    resetForm() {
        this.thought = new Thought();
    }

    goToThoughtsPage() {
        this.router.navigateByUrl('/thoughts');
    }
}
