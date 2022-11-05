import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arheader',
  templateUrl: './arheader.component.html',
  styleUrls: ['./arheader.component.css']
})
export class ARHeaderComponent implements OnInit, OnChanges {
  @Output() changeModel: EventEmitter<string> = new EventEmitter<string>();
  nombreModelo: string[] = [
    "../../../assets/models/spideblack.glb",//4.16
    "../../../assets/models/superman.glb",//9.94
    "../../../assets/models/batman_photogrammetry_scan.glb",//10.54
    "../../../assets/models/captain_marvel.glb",//1.91
    "../../../assets/models/2018_venom.glb",//10.89
    "../../../assets/models/venom_marvel_super_war.glb",//2.07
    "../../../assets/models/spider-man_-_hybrid_suit.glb",//1.24

    "../../../assets/models/ufo_doodle.glb",//9.12
    "../../../assets/models/alien.glb",//3.17
    "../../../assets/models/Astronaut.glb",//2.74
    "../../../assets/models/egyptian_pyramid.glb",//4.41
    "../../../assets/models/jaguar_staircase_at_the_east_court_of_copan.glb",//11.22
  
  "../../../assets/models/ToyCar.glb",//5.74
  "../../../assets/models/shishkebab.glb",//1.53
  "../../../assets/models/RobotExpressive.glb",//520 kb
   "../../../assets/models/santa_clauss.glb",//17.58
  "../../../assets/models/catrina_girl.glb",//19.56

  "../../../assets/models/altar_de_dia_de_muertos.glb",
  "../../../assets/models/the_day_of_the_dead.glb",
  
  "../../../assets/models/delorean_highpoly.glb",
  "../../../assets/models/delorean_dmc_12.glb",
  "../../../assets/models/nasi_lemak.glb",
  "../../../assets/models/delorean__dmc-12.glb",
  "../../../assets/models/parzivals_delorean_dmc-12.glb",
  
  
 
  
  "../../../assets/models/jaguar.glb",
  "../../../assets/models/puma_gray.glb",
  "../../../assets/models/jaguar_animation.glb",
 
  
  "../../../assets/models/mayan_jaguar.glb",
  
  "../../../assets/models/piramide.glb",
  
  "../../../assets/models/ovni_low_poly.glb",
  "../../../assets/models/piramid.glb",
  
  "../../../assets/models/plato_volador_amina.glb"];
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
