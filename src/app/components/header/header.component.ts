import {Component} from 'angular2/core';

@Component({
  selector: 'header',
  templateUrl: 'app/components/header/header.html',
  styleUrls: ['app/components/header/header.css'],
})

export class HeaderComponent {

  header: string = 'Thought-Spot App';
}
