import { Component, OnInit } from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  posts: Array<IPost> = [
    {
      title: 'title',
      subtitle: 'subtitle',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolor exercitationem iure neque nisi nobis omnis' +
        ' similique suscipit tenetur.',
    },
    {
      title: 'title',
      subtitle: 'subtitle',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolor exercitationem iure neque nisi nobis omnis' +
        ' similique suscipit tenetur.',
    },
  ];
}
