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
    this.activatedRoute
      .params
      .subscribe(params =>
      this.postService
        .getPosts(params.id)
        .subscribe(postsFromServer => this.posts = postsFromServer));
//
//    Варіант 1 - з queryParams
//    this.activatedRoute.queryParams.subscribe(queryParams =>
//      this.postService.getPosts(queryParams.idOfUser).subscribe(value = console.log(value))
//      );
//    Варіант 2 - з params
//    this.activatedRoute.params.subscribe(params =>
//      this.postService.getPosts(params.id).subscribe(value = console.log(value))
//      );
//    Варіант 3 - із state
//    this.PostService.getPosts(this.router.getCurrentNavigation().extras.state.user.id)
//    .subscribe(value = console.log(value));

//    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {
  }

}
