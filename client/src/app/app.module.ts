import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './services/product.service';
import {NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux';
import {IAppState, INITIAL_STATE, rootReducer} from './store/store';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './guards/interceptors';
import { ProfileModule } from './profile/profile.module';
import { TransactionService } from './services/transaction.service';



const appRoutes: Routes = [
  {path: 'shop', component: HomeComponent},
  {path: '', redirectTo: '/shop', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AuthModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, ProductService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
