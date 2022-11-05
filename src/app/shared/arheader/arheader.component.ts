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
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fsuperman.glb?alt=media&token=51a46dc0-a0c4-418a-81f0-7d2d51489fc5",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fdelorean_highpoly.glb?alt=media&token=9ddf38f1-e710-4c48-811b-48a6214130cc",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fdelorean_dmc_12.glb?alt=media&token=09ec2d84-977e-46d5-a141-2e13ed9d4dbd",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fnasi_lemak.glb?alt=media&token=f3238115-9690-4267-bb05-e3097e5c1460",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fdelorean__dmc-12.glb?alt=media&token=8ba93035-ad82-443b-ace1-56e8ccb8ff13",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fparzivals_delorean_dmc-12.glb?alt=media&token=bc99d9cf-61f3-47c2-a0eb-375f34ff7415",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2F2018_venom.glb?alt=media&token=b14e219b-bca2-49fa-8c51-091a7aa5c34f",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Ftlaloc.glb?alt=media&token=4369bb36-248c-4c98-8a92-2905ab7a2eb5",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Falien1.glb?alt=media&token=8311c2b5-608e-41ec-a6a7-8d4d20e8addd",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fjaguar_staircase_at_the_east_court_of_copan.glb?alt=media&token=3813bbf7-1c5f-4264-a540-3eb854849f46",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fbatman_photogrammetry_scan.glb?alt=media&token=915aaac3-e38e-40a9-b1f6-b675f96d9cf7",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fufo_doodle.glb?alt=media&token=b119ca4d-630f-4017-954b-7faeb1f9dbc3",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fjaguar.glb?alt=media&token=9658983c-0149-41c1-a9c9-8f24714e7bfd",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fpuma_gray.glb?alt=media&token=ec88a2a0-805c-487d-8d5e-d3f38ae8203b",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fjaguar_animation.glb?alt=media&token=4586be98-e02d-461b-be1f-e26627e97acc",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fegyptian_pyramid.glb?alt=media&token=be5a5782-7f53-47dd-858c-2cfc5882264a",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Falien.glb?alt=media&token=8e9368b3-2db2-404d-ab1e-1def3eb6e8e8",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fmayan_jaguar.glb?alt=media&token=3623eacf-49bd-4665-9088-9c075de55595",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fvenom_marvel_super_war.glb?alt=media&token=0ea4091e-2567-469a-91ec-5332235ae69a",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fpiramide.glb?alt=media&token=09517c74-6da8-4c2d-b43e-2d66fda33052",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fcaptain_marvel.glb?alt=media&token=0d6d481e-798e-4a00-80ec-032631a48e04",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fovni_low_poly.glb?alt=media&token=38026b44-cc5d-4769-a586-17c86f686eb4",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fpiramid.glb?alt=media&token=12d5d7e5-89c7-4618-a246-c34561470a3f",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fspider-man_-_hybrid_suit.glb?alt=media&token=2ae4b6db-f657-48e3-9b9c-bf181811b1b2",
  "https://firebasestorage.googleapis.com/v0/b/visualizr.appspot.com/o/3DModels%2Fplato_volador_amina.glb?alt=media&token=1f7408a7-9b50-48cd-8699-8258cb7ef7e6",
  ""];
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
