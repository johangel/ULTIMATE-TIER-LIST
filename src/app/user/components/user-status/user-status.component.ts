import { TLUser } from 'src/app/user/models/user.models';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  submitForm() {
    const user = {
      name: this.userForm.get('name')?.value,
    };
    this.userService.setUserName(user);
  }

  toggleOnlineStatus(event: MatSlideToggleChange) {
    this.userService.toggleOnlineStatus({ onlineStatus: event.checked });
  }
}
