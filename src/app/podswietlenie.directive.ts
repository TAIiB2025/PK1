import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPodswietlenie]'
})
export class PodswietlenieDirective {
  @HostBinding('class.najechany') najechany = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.najechany = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.najechany = false;
  }

  constructor() { }

}
