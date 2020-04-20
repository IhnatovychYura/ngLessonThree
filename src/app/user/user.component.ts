import {Component, EventEmitter, Input} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  navigate(user: UserModel) {
    this.router.navigate([user.id, 'posts'],
      {
        state: {user},
        queryParams: {idOfUser: user.id},
        relativeTo: this.activatedRoute
      });
  }
}
