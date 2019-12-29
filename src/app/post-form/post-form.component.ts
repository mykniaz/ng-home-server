import { Component, OnInit } from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {

  postFormModel: IPost = {
    title: '',
    subtitle: '',
    body: '',
  };

}
