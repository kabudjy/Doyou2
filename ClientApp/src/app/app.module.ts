import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { HomeboxesComponent } from './homeboxes/homeboxes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { RecipesManagementComponent } from './recipes-management/recipes-management.component';
import { ManagementComponent } from './management/management.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AdminGuard } from 'src/api-authorization/admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HomeboxesComponent,
    RecipesComponent,
    SearchBarComponent,
    AddRecipesComponent,
    UsersManagementComponent,
    RecipesManagementComponent,
    ManagementComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'recipes', component: RecipesComponent },
      { path: 'add-recipes', component: AddRecipesComponent, },
      { path: 'users-management', component: UsersManagementComponent, canActivate: [AdminGuard] },
      { path: 'recipes-management', component: RecipesManagementComponent, canActivate: [AdminGuard] },
      { path: 'management', component: ManagementComponent, canActivate: [AdminGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
