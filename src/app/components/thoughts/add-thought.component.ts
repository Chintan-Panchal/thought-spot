import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FormBuilder, Control, Validators, ControlGroup, NgForm, NgFormControl, NgFormModel} from 'angular2/common';
import {Thought} from './thought';
import {ThoughtService} from './thought.service';
import {Url} from "../../urls";

@Component({
    selector: 'thoughts',
    directives: [ROUTER_DIRECTIVES],
    providers: [ThoughtService, Url],
    templateUrl: 'app/components/thoughts/add-thoughts.html',
    styleUrls: ['app/components/thoughts/thoughts.css']
})

/*
 * Add Thought Component for handle thought form
 */
export class AddThoughtComponent {

    thought: Thought;
    form : ControlGroup;
    successMessage: string = '';
    errorMessage: string = '';

    //create and initialize all require variable
    constructor(public builder: FormBuilder, public thoughtService: ThoughtService, public router: Router) {
        this.thought = new Thought();
        //Add validation require in form
        this.form = builder.group({
            'Name': new Control(this.thought.name, Validators.required),
            'Title': new Control(this.thought.title, Validators.required),
            'Description': new Control(this.thought.description, Validators.required)
        });
    }

    //Handle Thought
    //get Thought form value and pass to backend
    onsubmit(event, thought:Thought) {

        event.preventDefault();
        console.log('testing!!');
        console.log("user" +JSON.stringify(this.thought));

        let body = JSON.stringify(this.thought);
        console.log(body);
        this.thoughtService.handleThought(this.thought)
            .subscribe(
                (data) => {
                    this.successMessage = "Added Record Successfully";
                    this.thought = new Thought();
                }
            );
    }

    //reset Form
    resetForm() {
        this.thought = new Thought();
        this.successMessage = '';
    }

    //Go to Thoughts page
    goToThoughtsPage() {
        this.router.navigateByUrl('/thoughts');
    }
}
