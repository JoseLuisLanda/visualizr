import { Component, Input, OnInit } from '@angular/core';
import { ElementId } from 'src/app/collections/element';

@Component({
  selector: 'app-arelement',
  templateUrl: './arelement.component.html',
  styleUrls: ['./arelement.component.css']
})
export class ARElementComponent implements OnInit {
  @Input() item: ElementId = 
  {name:"https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fthe_day_of_the_dead.glb?alt=media&token=32207436-c768-403f-879a-d43ce698d71f"} as ElementId;
  
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.item));
  }

}
