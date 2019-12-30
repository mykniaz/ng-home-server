import {Component, EventEmitter, Output} from '@angular/core';
import {IPost} from '../../types';

const postModel = (data = {}) => ({
  id: '',
  title: '',
  subtitle: '',
  body: '',
  ...data
})

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  postFormModel: IPost = {
    ...postModel()
  };

  addNewPost = () => {
    if (this.postFormModel.title.trim() && this.postFormModel.subtitle.trim() && this.postFormModel.body.trim()) {
      this.onAdd.emit(postModel({
        ...this.postFormModel,
        id: (new Date()).valueOf().toString()
      }));

      this.postFormModel = {
        ...postModel()
      };
    }
  }

}
