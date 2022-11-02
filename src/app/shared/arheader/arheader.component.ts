import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arheader',
  templateUrl: './arheader.component.html',
  styleUrls: ['./arheader.component.css']
})
export class ARHeaderComponent implements OnInit, OnChanges {
  @Output() changeModel: EventEmitter<string> = new EventEmitter<string>();
  nombreModelo: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2FAstronaut.glb?alt=media&token=59ec4dd0-2b0f-479c-bfa3-99f8a5d64c41",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2FToyCar.glb?alt=media&token=29ec3d81-165b-4c29-ab86-b1db63e66987",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2FBarramundiFish.mixed.glb?alt=media&token=ab09c0e0-0262-47be-b699-5d7803a4dbdf",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fodd-shape.glb?alt=media&token=5e7c13bb-bb80-469d-aa6c-5c7b93ab599c",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fradiance.glb?alt=media&token=9e6c34a7-9542-430f-9e06-9bcb29632d3a",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fshishkebab.glb?alt=media&token=6a9f08ff-e221-43d6-8700-6cc238ce9c57",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2FRobotExpressive.glb?alt=media&token=2fd7f75a-1649-44e0-81b0-be7f09c70de5",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fodd-shape-labeled.glb?alt=media&token=c9f56000-653d-4e70-99c1-d2ee418bc8a2",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fspideblack.glb?alt=media&token=65e647bc-159d-4b5c-9945-d35839037a27",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fsanta_clauss_sleigh.glb?alt=media&token=90eb339c-354a-4c55-8bd1-2fad1d009ece",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fcatrina_girl.glb?alt=media&token=89afc89d-20c2-4c43-b2d0-214356406f56",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Faltar_de_dia_de_muertos.glb?alt=media&token=234a9642-8602-4887-a03b-b234e39b51f9",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fthe_day_of_the_dead.glb?alt=media&token=32207436-c768-403f-879a-d43ce698d71f",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fsuperman.glb?alt=media&token=51a46dc0-a0c4-418a-81f0-7d2d51489fc5"];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges arheader");
    
  }

  ngOnInit(): void {
  }
  sendModel(modelName: number){
    //console.log("otro modelo: " + modelName);
    this.changeModel.emit(this.nombreModelo[modelName]);

  }
  
}
