import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arheader',
  templateUrl: './arheader.component.html',
  styleUrls: ['./arheader.component.css']
})
export class ARHeaderComponent implements OnInit, OnChanges {
  @Output() changeModel: EventEmitter<string> = new EventEmitter<string>();
  nombreModelo: string[] = [
//models tuzo
    "../../../assets/modelstuzofari/armadillo.glb",//8    0
    "../../../assets/modelstuzofari/bengal_cat.glb",//5   1
    "../../../assets/modelstuzofari/lagarto.glb",//13     2 dif
    "../../../assets/modelstuzofari/lobo_anim.glb",//1    3 ok gde
    //"../../../assets/modelstuzofari/lobo.glb",//5         4 n
    //"../../../assets/modelstuzofari/lobopup.glb",//6.6    5 n
    "../../../assets/modelstuzofari/pinguino.glb",//.900   6
    "../../../assets/modelstuzofari/siberian_husky.glb",//.925    7
//models dino
    //"../../../assets/modelsjurassic/alienverde.glb",//2    8 n
    //"../../../assets/modelsjurassic/ankylosaurus.glb",//2   9 n
    "../../../assets/modelsjurassic/ceratosaurus.glb",//3     10  ok
    "../../../assets/modelsjurassic/gallimimus.glb",//3    11 heavy ojos mal
    //"../../../assets/modelsjurassic/megalodon.glb",//5         12 new version
   // "../../../assets/modelsjurassic/mosasaurus.glb",//7    13  dificil
    //"../../../assets/modelsjurassic/paluxysaurus.glb",//26   14 new ver
    "../../../assets/modelsjurassic/quetzalcoatlus.glb",//21    15 ok muy grande
    "../../../assets/modelsjurassic/spinosaurus.glb",//7    16 ok gde
    //"../../../assets/modelsjurassic/stygimoloch.glb",//7   17 chico dif
    "../../../assets/modelsjurassic/suchomimus.glb",//2.6     18  ok
    "../../../assets/modelsjurassic/torosaurus.glb",//1    19   ok
    //"../../../assets/modelsjurassic/triceratops.glb",//6         20  no
    "../../../assets/modelsjurassic/velociraptor.glb",//4    21   ok


    "../../../assets/models/spideblack.glb",//4.16    22
    "../../../assets/models/superman.glb",//9.94    23
    "../../../assets/models/batman_photogrammetry_scan.glb",//10.54   24
    "../../../assets/models/captain_marvel.glb",//1.91                25 
    "../../../assets/models/2018_venom.glb",//10.89                   26
    "../../../assets/models/venom_marvel_super_war.glb",//2.07        27
    "../../../assets/models/spider-man_-_hybrid_suit.glb",//1.24      28

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
  
  "../../../assets/models/plato_volador_amina.glb",

  "../../../assets/models/t-shirt_m.glb",
  "../../../assets/models/t-shirt_mask.glb",
  "../../../assets/models/t-shirt.glb",
  "../../../assets/models/t-shirtone.glb",
  "../../../assets/models/skirt_and_t-shirt.glb",
  "../../../assets/models/std_t-shirt.glb",
  "../../../assets/models/tenis_surrado.glb",
  "../../../assets/models/hoverboard.glb",
  "../../../assets/models/hover_board_low_poly.glb",
  "../../../assets/models/charging_bull.glb",
  "../../../assets/models/bull_man.glb",
  "../../../assets/models/bull_for_3d_printing.glb",
  "../../../assets/models/bull_basemesh.glb",
  "../../../assets/models/blue_bull_miniature.glb",
  "../../../assets/models/marty_mcfly.glb",
];
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
