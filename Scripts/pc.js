let camera, scene, renderer, loader;

//Objects of the PC
let gabinete, tarjetaMadre, bios, chipset, cpu, discoDuro, disipador, fuenteDePoder, ram, tarjetaDeAudio;

//texture of Objects
var gabineteTexture = Array();
var tarjetaMadreTexture = Array();
var biosTexture = Array();
var chipsetTexture = Array();
var cpuTexture = Array();
var discoDuroTexture = Array();
var disipadorTexture = Array();
var fuenteDePoderTexture = Array();
var ramTexture = Array();
var tarjetaDeAudioTexture = Array();


//start the scene
function initScene(camX, camY, camZ)
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)

    loader = new THREE.TextureLoader();

    camera.position.x = camX;
    camera.position.y = camY;
    camera.position.z = camZ;

    window.addEventListener( 'resize', onWindowResize, false );

}


//resize the canvas when the window size change
function onWindowResize() 
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


//start the infinity loop
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    gabinete.rotation.y -= 0.01;
    gabinete.rotation.x += 0.005;
} 


function createObject(sizeX, sizeY, sizeZ, texture, object)
{
    var geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
    if (object == 'gabinete')
        gabinete = new THREE.Mesh(geometry, texture);
    if (object == 'tarjetaMadre')//, bios, chipset, cpu, discoDuro, disipador, fuenteDePoder, ram, tarjetaDeAudio;
        tarjetaMadre = new THREE.Mesh(geometry, texture);
    if (object == 'bios')
        bios = new THREE.Mesh(geometry, texture);
    if (object == 'chipset')
        chipset = new THREE.Mesh(geometry, texture);
    if (object == 'cpu')
        cpu = new THREE.Mesh(geometry, texture);
    if (object == 'discoDuro')
        discoDuro = new THREE.Mesh(geometry, texture);
    if (object == 'disipador')
        disipador = new THREE.Mesh(geometry, texture);
    if (object == 'fuenteDePoder')
        fuenteDePoder = new THREE.Mesh(geometry, texture);
    if (object == 'ram')
        ram = new THREE.Mesh(geometry, texture);
    if (object == 'tarjetaDeAudio')
        tarjetaDeAudio = new THREE.Mesh(geometry, texture);
}





//initialize the scene
initScene(0, 0, 6);


//gabinete setup
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/2.png')})); //right
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/4.png')})); //left
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/6.png')})); //top
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/5.png')})); //botton
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/3.png')})); //front
gabineteTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Gabinete/1.png')})); //back
//create the gabinete object
createObject(5, 5, 2, gabineteTexture, 'gabinete');
//Add to scene
scene.add(gabinete);

//tarjetaMadre setup
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //botton
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Tarjeta%20Madre/1.png') })) //front
tarjetaMadreTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Tarjeta%20Madre/2.png') })) //back
//create the gabinete object
createObject(5, 5, 0.125, tarjetaMadreTexture, 'tarjetaMadre');
//Add to scene
//scene.add(tarjetaMadre);

//bios setup
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top 
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //botton
biosTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/BIOS/1.png')})); //front
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //back
//create the bios object
createObject(2, 2, 2, biosTexture, 'bios');
//Add to scene
//scene.add(bios);

//chipset setup
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //bottom
chipsetTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Chipset/1.png')})); //front
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //back
//create the chipset object
createObject(2, 2, 2, chipsetTexture, 'chipset');
//Add to scene
//scene.add(chipset);

//cpu
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 } )); //bottom
cpuTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/CPU/1.png') })); //front
cpuTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/CPU/2.png') })); //back
//create the cpu object
createObject(2, 2, 2, cpuTexture, 'cpu');
//Add to scene
//scene.add(cpu);

//discoDuro setup
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/2.png')})); //right //
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/4.png')})); //left
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/5.png')})); //top
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/6.png')})); //bottom
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/1.png')})); //front 
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/3.png')})); //back
//create the discoDuro object
createObject(5, 1, 3, discoDuroTexture, 'discoDuro');
//Add to scene
//scene.add(discoDuro);


//disipador
//fuenteDePoder setup
//ram setup
//tarjetaDeAudio



animate();