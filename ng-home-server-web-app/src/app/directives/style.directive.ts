import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
