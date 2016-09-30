import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent}

];
