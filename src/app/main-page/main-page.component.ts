import { Component, OnInit } from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  posts: Array<IPost> = [];

  addNewPost(newPost: IPost) {
    this.posts.push(newPost);
  }

  onRemovePost($event: { id: string }) {
    this.posts = this.posts.filter((post: IPost) => post.id !== $event.id);
  }
}
