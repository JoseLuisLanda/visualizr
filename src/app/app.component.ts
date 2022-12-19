import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ElementId } from './collections/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges  {
  @Output() item: EventEmitter<ElementId> = new EventEmitter<ElementId>();
  switchTemp: boolean  = false;
  title = 'Visualiz-AR';
  itemAR:ElementId={uid:"sky",name:"../../../assets/models/sky.usdz"};
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.item
  }
  receiveModel(modelName: string){
    console.log("otro modelo received: " + modelName);
    this.itemAR.name = modelName;
  }
  switchTemplate(){
    this.switchTemp = !this.switchTemp;
  }
}
