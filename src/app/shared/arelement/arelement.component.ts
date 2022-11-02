import { Component, Input, OnInit } from '@angular/core';
import { ElementId } from 'src/app/collections/element';

@Component({
  selector: 'app-arelement',
  templateUrl: './arelement.component.html',
  styleUrls: ['./arelement.component.css']
})
export class ARElementComponent implements OnInit {
  @Input() item: ElementId = 
  {name:"https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Flion_sculpture_processed.glb?alt=media&token=00e3d0fc-0744-4108-8f5a-702273c5471d"} as ElementId;
  
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.item));
  }

}
