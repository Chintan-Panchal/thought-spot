import {Component} from 'angular2/core';

@Component({
    selector: 'footer',
    templateUrl: 'app/components/footer/footer.html',
    styleUrls: ['app/components/footer/footer.css'],
})

/*
 * Footer Component
 */
export class FooterComponent {

    date: Date = new Date();
    footer: string = 'Copyright Ⓒ ';
}
