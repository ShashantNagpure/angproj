import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() tog=new EventEmitter<string>();

  setFeature(feature:string)
  { 
    this.tog.emit(feature);
  }

  }

