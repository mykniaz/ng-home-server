import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output,
} from '@angular/core';
import {IPost} from '../../types';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit{

  @Input() set editedPost(post: IPost | undefined) {
    if (post) {
      this.form.patchValue(post);
    }
  }

  form: FormGroup;

  @Output() add: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() update: EventEmitter<IPost> = new EventEmitter<IPost>();

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      subtitle: new FormControl(null),
      body: new FormControl(null)
    });
  }

  submitForm = () => {
    console.log(this.form)

    if (this.form.value.id) {
      this.update.emit(this.form.value);
    } else {
      this.form.setValue({
        ...this.form.value,
        id: new Date().valueOf().toString()
      })

      this.add.emit(this.form.value);
    }

    this.form.reset();

    console.log(this.form)
  }
}
