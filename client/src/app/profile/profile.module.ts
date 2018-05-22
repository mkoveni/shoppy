import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TopupsComponent } from './components/topups/topups.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from '../guards/guards';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopupHistoryComponent } from './components/topup-history/topup-history.component';
import { PurchaseHistoryComponent } from './components/purchase--history/purchase--history.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'profile/account',
        component: AccountComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'profile/topups',
        component: TopupsComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'profile/transactions',
        component: TransactionsComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'profile/history/purchase',
        component: PurchaseHistoryComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: 'profile/history/topup',
        component: TopupHistoryComponent,
        canActivate: [AuthenticatedGuard]
      }
    ]),

    SharedModule
  ],
  declarations: [AccountComponent, TransactionsComponent, TopupsComponent, SidebarComponent, TopupHistoryComponent, PurchaseHistoryComponent],
  exports: [SharedModule, RouterModule]
})
export class ProfileModule { }
