//
// *
// *  Jeu en 3D avec Three.js fixe
// *
// * */

import createTimer from "../game/timer";

// Gestion des cinématiques
let actualCinematic = 0;
let cin = document.getElementById('Cinematic');
let game = null;


//Cinématique au démarrage
$( document ).ready(function() {
    displayCinematic();
});

function displayCinematic(){
    let cinematics = Array('Beginning','Success','Defeat');

    let video = document.createElement("video");
    video.id="Video";
    video.width=document.body.clientWidth;
    video.height=document.body.clientHeight;
    video.preload = true;
    video.onclick = function(){
        this.play();
    };

    let webm = document.createElement("source");
    webm.id="webm";
    webm.type="video/webm";
    webm.src="./resources/cinematic/" + cinematics[actualCinematic] + ".webm";

    let mp4 = document.createElement("source");
    mp4.id="mp4";
    mp4.type="video/mp4";
    mp4.src="./resources/cinematic/" + cinematics[actualCinematic] + ".mp4";

    let ogg = document.createElement("source");
    ogg.id="ogg";
    ogg.type="video/ogg";
    ogg.src="./resources/cinematic/" + cinematics[actualCinematic] + ".ogv";

    video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        webm.remove();
        mp4.remove();
        ogg.remove();
        video.remove();

        if (actualCinematic === 0){
            game = new BasicWorldDemo();
        } else {
            endGame(actualCinematic);
        }
        //displayCinematic();
    }

    video.appendChild(webm);
    video.appendChild(mp4);
    video.appendChild(ogg);
    cin.appendChild(video);

}


const THREE = require('three')
const OrbitControls = require('three-orbitcontrols')

class BasicWorldDemo {
    constructor() {
        this._Initialize();
        createTimer();
    }

    _Initialize() {
        this._threejs = new THREE.WebGLRenderer({
            antialias: true,
        });
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threejs.setPixelRatio(window.devicePixelRatio);
        this._threejs.setSize(window.innerWidth, window.innerHeight);

        document.getElementById("Game").appendChild(this._threejs.domElement)

        window.addEventListener('resize', () => {
            this._OnWindowResize();
        }, false);

        const fov = 80;
        const aspect = 1920 / 1080;
        const near = 1.0;
        const far = 1000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(75, 20, 0);

        this._scene = new THREE.Scene();

        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(20, 100, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 100;
        light.shadow.camera.right = -100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        this._scene.add(light);

        light = new THREE.AmbientLight(0x101010);
        this._scene.add(light);

        const controls = new OrbitControls(
            this._camera, this._threejs.domElement);
        controls.target.set(0, 20, 0);
        controls.update();
        controls.enableRotate=false;
        controls.enablePan=false;


        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            './resources/game/posx.jpg',
            './resources/game/negx.jpg',
            './resources/game/posy.jpg',
            './resources/game/negy.jpg',
            './resources/game/posz.jpg',
            './resources/game/negz.jpg',
        ]);
        this._scene.background = texture;

        // const plane = new THREE.Mesh(
        //     new THREE.PlaneGeometry(100, 100, 10, 10),
        //     new THREE.MeshStandardMaterial({
        //         color: 0xFFFFFF,
        //     }));
        // plane.castShadow = false;
        // plane.receiveShadow = true;
        // plane.rotation.x = -Math.PI / 2;
        // this._scene.add(plane);


        this._RAF();
    }

    _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
    }

    _RAF() {
        requestAnimationFrame(() => {
            this._threejs.render(this._scene, this._camera);
            this._RAF();
        });
    }
}










function endGame(num){

}



//Gestions des salles
let actual_room = 1;

let rooms = Array('corridor','radio','children','water');
/*
 * corridor = 0
 * radio = 1
 * children = 2
 * water = 3
 */


function resetAllObjects(){
    for(let i=0;i<rooms.length;i++){
        hideObject(rooms[i]+'.png');
    }
}

function hideObject(id){
    let toHide = document.getElementById(id);
    if (toHide){
        toHide.style.display='none';
    }
}

function showObject(id){
    let toHide = document.getElementById(id);
    if (toHide){
        toHide.style.display='block';
    }
}

function getRoom(){

    return rooms[actual_room];

}

function zoomObject(id){

}
