import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arheader',
  templateUrl: './arheader.component.html',
  styleUrls: ['./arheader.component.css']
})
export class ARHeaderComponent implements OnInit, OnChanges {
  @Output() changeModel: EventEmitter<string> = new EventEmitter<string>();
  nombreModelo: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fspideblack.glb?alt=media&token=ae87bd64-5dc5-49b7-b1c1-bab8e6bad996",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fdelorean_dmc_12.glb?alt=media&token=09ec2d84-977e-46d5-a141-2e13ed9d4dbd"
];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
  }
  sendModel(modelName: number){
    this.changeModel.emit(this.nombreModelo[modelName]);

  }
  
}
