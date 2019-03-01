import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open')private toggle:boolean=false;
  constructor(private elref:ElementRef,private renderer:Renderer2) { 

  }
  ngOnInit(){
  }
  @HostListener('click') onclick(){
    this.toggle=!this.toggle;
   
  }
}
