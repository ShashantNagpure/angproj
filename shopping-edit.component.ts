import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amtip')amt: ElementRef;
  @ViewChild('nameip')name: ElementRef;
  @Output()add=new EventEmitter<Ingredient>()
  constructor() { }
  onadd()
  {
    this.add.emit(new Ingredient(this.name.nativeElement.value,this.amt.nativeElement.value));
  }
  ngOnInit() {
  }

}
