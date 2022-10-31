import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserService } from './services/user.service';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UserStatusComponent, UsersListComponent],
  exports: [UserStatusComponent, UsersListComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
})
export class UserModule {}
