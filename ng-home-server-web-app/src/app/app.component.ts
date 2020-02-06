import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import MockTodoService from './services/mock-todo.service';
import {ModalComponent} from './ui/modal/modal.component';
import {RefDirective} from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MockTodoService]
})

export class AppComponent {
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective

  constructor(private resolver: ComponentFactoryResolver) {}

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear();

    const modalComponent = this.refDir.containerRef.createComponent(modalFactory);

    modalComponent.instance.title = 'DinamicTitle';
    modalComponent.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
