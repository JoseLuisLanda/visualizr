//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];
console.log('Add markers to the scene');
AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<=3; i++)
		{
			var url="../../../assets/presets/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k=0; k<3; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var textEl = document.createElement('a-image');
			
			//textEl.setAttribute('id','text');
			//textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
			textEl.setAttribute('id','image');
			textEl.setAttribute('class','clickable');
			textEl.setAttribute('gesture-handler',{minScale: '0.25', maxScale: '10'});
			textEl.setAttribute('geometry',{width:'4', heigh:'3'});
			textEl.setAttribute('material',{src: '#menu-img', color: '#FFF'});
			textEl.object3D.position.set(0, 1, 0);
			textEl.object3D.rotation.set(-90, 0, 0);

/*
class="clickable"
      gesture-handler="minScale: 0.25; maxScale: 10"

 <a-assets>
      <img id="earth-sphere" src="../../../assets/images/earth-sphere.jpeg" />
          <a-asset-item id="back" src="../../../assets/models/hoverboard.glb"></a-asset-item>
    </a-assets>
  <a-plane id="followerPlane"
          position="0 0 0"
          position="0 1 0"
          rotation="-90 0 0"
          material="src:#earth-sphere;">
   </a-plane>
*/

			markerEl.appendChild(textEl);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				//window.location = 'https://www.google.com/';  //works
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});