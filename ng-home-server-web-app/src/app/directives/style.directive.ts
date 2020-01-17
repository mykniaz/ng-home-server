import {
  Directive,
  HostBinding,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('dStyle') dStyle: {color?: string, fontWeight?: string} = null;

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.fontWeight') elFontWeight = null;

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    this.elColor = this.dStyle.color;
    this.elFontWeight = this.dStyle.fontWeight;
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.elColor = null;
    this.elFontWeight = null;
  }
}
