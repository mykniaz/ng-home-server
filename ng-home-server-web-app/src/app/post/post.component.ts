import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post: IPost;

  @Output() remove: EventEmitter<{id: string}> = new EventEmitter<{id: string}>();
  @Output() update: EventEmitter<{id: string}> = new EventEmitter<{id: string}>();

  onRemovePost = (id: string) => {
    this.remove.emit({id});
  }

  onUpdatePost = (id: string) => {
    this.update.emit({id});
  }
}
