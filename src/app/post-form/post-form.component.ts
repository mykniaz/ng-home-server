import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() set editedPost(post: IPost | undefined) {
    if (post) {
      this.postFormModel = postModel(post);
    }
  }

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() onUpdate: EventEmitter<IPost> = new EventEmitter<IPost>();

  postFormModel: IPost = postModel();

  submitForm = () => {
    if (this.postFormModel.title.trim() && this.postFormModel.subtitle.trim() && this.postFormModel.body.trim()) {
      if (this.postFormModel.id !== '') {
        this.onUpdate.emit(this.postFormModel);
      } else {
        this.onAdd.emit(postModel({
          ...this.postFormModel,
          id: (new Date()).valueOf().toString()
        }));
      }

      this.postFormModel = {
        ...postModel()
      };
    }
  }

}
