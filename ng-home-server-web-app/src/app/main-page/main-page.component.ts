import { Component } from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  posts: Array<IPost> = [];
  editedPostData: IPost | undefined = undefined;

  addNewPost(newPost: IPost) {
    // fetch('api/weather/').then(r => (
    //   console.log(r)
    // ));
    this.posts.push(newPost);
  }

  onRemovePost($event: { id: string }) {
    this.posts = this.posts.filter((post: IPost) => post.id !== $event.id);
  }

  loadDataToUpdate($event: { id: string }) {
    this.editedPostData = this.posts.find((post: IPost) => post.id === $event.id);
  }

  updatePost($event: IPost) {
    const updatedPostIndex = this.posts.findIndex((post: IPost) => post.id === $event.id);

    this.posts = [
      ...this.posts.slice(0, updatedPostIndex),
      $event,
      ...this.posts.slice(updatedPostIndex + 1),
    ];
  }
}
