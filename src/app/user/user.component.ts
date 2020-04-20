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
    // users/1/posts
    this.router.navigate([user.id, 'posts'],
      {
        state: {user},
        queryParams: {idOfUser: user.id},

        relativeTo: this.activatedRoute  // ця стрічка дозволить нам продовжити від батьківської url
      });
  }
}
