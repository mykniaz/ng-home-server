import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../types';

const postModel = (data = {}) => ({
  id: '',
  title: '',
  subtitle: '',
  body: '',
  ...data
});

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Input() set editedPost(post: IPost | undefined) {
    if (post) {
      this.postFormModel = postModel(post);
    }
  }

  @ContentChild('formTitle', {static: true}) formTitleRef: ElementRef;

  @Output() add: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() update: EventEmitter<IPost> = new EventEmitter<IPost>();

  postFormModel: IPost = postModel();

  ngOnInit() {
    console.log(this.formTitleRef);
  }

  submitForm = () => {
    console.log(this.formTitleRef);
    if (this.postFormModel.title.trim() && this.postFormModel.subtitle.trim() && this.postFormModel.body.trim()) {
      if (this.postFormModel.id !== '') {
        this.update.emit(this.postFormModel);
      } else {
        this.add.emit(postModel({
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
