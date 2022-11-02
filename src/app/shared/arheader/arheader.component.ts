import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arheader',
  templateUrl: './arheader.component.html',
  styleUrls: ['./arheader.component.css']
})
export class ARHeaderComponent implements OnInit, OnChanges {
  @Output() changeModel: EventEmitter<string> = new EventEmitter<string>();
  nombreModelo: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fthe_day_of_the_dead.glb?alt=media&token=32207436-c768-403f-879a-d43ce698d71f",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Faltar_de_dia_de_muertos.glb?alt=media&token=234a9642-8602-4887-a03b-b234e39b51f9"
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
