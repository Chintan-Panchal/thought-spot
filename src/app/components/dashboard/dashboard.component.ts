import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
    selector: 'thoughts',
    templateUrl: 'app/components/dashboard/dashboard.html',
    styleUrls: ['app/components/dashboard/dashboard.css'],
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

/*
 * Dashboard Component
 */
export class DashboardComponent {

}
