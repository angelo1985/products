import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective implements OnInit {

  @Input() myColor: string = 'red';

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', this.myColor);
    // this.elementRef.nativeElement.style.backgroundColor = 'red';

  }

}
