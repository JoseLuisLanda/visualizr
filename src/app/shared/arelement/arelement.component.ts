import { Component, Input, OnInit } from '@angular/core';
import { ElementId } from 'src/app/collections/element';

@Component({
  selector: 'app-arelement',
  templateUrl: './arelement.component.html',
  styleUrls: ['./arelement.component.css']
})
export class ARElementComponent implements OnInit {
  @Input() item: ElementId = 
  {name:"https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fspideblack.glb?alt=media&token=ae87bd64-5dc5-49b7-b1c1-bab8e6bad996"} as ElementId;
  
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.item));
  }

}
