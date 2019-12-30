import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from '../../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post: IPost;

  @Output() onRemove: EventEmitter<{id: string}> = new EventEmitter<{id: string}>();

  onRemovePost = (id: string) => {
    this.onRemove.emit({id});
  }
}
