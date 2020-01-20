import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output,
} from '@angular/core';
import {IPost} from '../../types';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {

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
      title: new FormControl(null, Validators.required),
      subtitle: new FormControl(null, Validators.required),
      body: new FormControl(null, [Validators.required, Validators.minLength(20)]),
    });
  }

  submitForm = () => {
    if (this.form.invalid) {
      console.log(this.form);

      return;
    }

    if (this.form.value.id) {
      this.update.emit(this.form.value);
    } else {
      this.form.setValue({
        ...this.form.value,
        id: new Date().valueOf().toString()
      });

      this.add.emit(this.form.value);
    }

    this.form.reset();
  }

}
