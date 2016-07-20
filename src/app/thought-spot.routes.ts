import {provideRouter, RouterConfig} from 'angular2/router';
import {ThoughtSpotComponent} from 'app/thought-spot.component'
import {DashboardComponent} from 'app/components/dashboard/dashboard.component'
import {ThoughtComponent} from 'app/components/thoughts/thought.component'
import {AddThoughtComponent} from 'app/components/thoughts/add-thought.component'
import {ThoughtDetailComponent} from 'app/components/thoughts/thought-detail.component'

// Dashbard Routes
const DashboardRoutes: RouterConfig = [
    {path: 'thoughts', component: DashboardComponent,
    children: [
        {path: '', component: ThoughtComponent},
        {path: 'add', component: AddThoughtComponent},
        {path: 'details/:id', component: ThoughtDetailComponent}
        ]
    }
];

//Default Routes
const DefaultRoutes = [
  // {path: 'health', component: Dashboard, index : true},
    {path: '', redirectTo: 'thoughts'}
];

// App level Routes
export const routes: RouterConfig = [
    ... DefaultRoutes,
    ...DashboardRoutes
];
export const ThoughtSpotRouter = [
    provideRouter(routes),
];
