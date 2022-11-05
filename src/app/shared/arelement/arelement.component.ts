import { Component, Input, OnInit } from '@angular/core';
import { ElementId } from 'src/app/collections/element';

@Component({
  selector: 'app-arelement',
  templateUrl: './arelement.component.html',
  styleUrls: ['./arelement.component.css']
})
export class ARElementComponent implements OnInit {
  @Input() item: ElementId = 
  {name:"../../../assets/models/alien.glb"} as ElementId;
  
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.item));
  }

}
