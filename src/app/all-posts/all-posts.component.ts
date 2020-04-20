import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
  {
//    this.activatedRoute
//      .params
//      .subscribe(params =>
//      this.postService
//        .getPosts(params.id)
//        .subscribe(postsFromServer => this.posts = postsFromServer));
//    this.activatedRoute.queryParams.subscribe(queryParams => console.log(queryParams));
//    this.activatedRoute.params.subscribe(params => console.log(params));
//    console.log(this.router.getCurrentNavigation().extras.state.user, '!!!!');

    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {
  }

}
