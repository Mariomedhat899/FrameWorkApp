import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:ErrorComponent}
];
