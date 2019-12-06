let camera, scene, renderer, loader, controls;

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

//controls.update() must be called after any manual changes to the camera's transform


//initialize the selection var as universal var
var selection = document.getElementsByName('componente');


//start the scene
function initScene(camX, camY, camZ)
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x9197AE );

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    renderer = new THREE.WebGLRenderer();
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

    rotateObjects();
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

function changeComponente()
{
    

    scene.remove(gabinete);
    scene.remove(tarjetaMadre);
    scene.remove(bios);
    scene.remove(chipset);
    scene.remove(cpu);
    scene.remove(discoDuro);
    scene.remove(disipador);
    scene.remove(fuenteDePoder);
    scene.remove(ram);
    scene.remove(tarjetaDeAudio);
    

    if(selection[0].checked)
    {
        data('es la estructura metálica o plástica, cuya función consiste en albergar y proteger los componentes unidad central de procesamiento (CPU), la memoria de acceso aleatorio (RAM), la placa madre, la fuente de alimentación, la/s placas de expansión y los dispositivos o unidades de almacenamiento: disquetera, unidad de disco rígido, unidad de disco óptico (lectora o grabadora de: CD, DVD, BD)');
        scene.add(gabinete);
    }
    else if(selection[1].checked)
    {
        scene.add(tarjetaMadre);
        data('es una tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora.Es una parte fundamental para montar cualquier computadora personal de escritorio o portátil o algún dispositivo. Tiene instalados una serie de circuitos integrados, entre los que se encuentra el circuito integrado auxiliar (chipset), que sirve como centro de conexión entre el microprocesador (CPU), la memoria de acceso aleatorio (RAM), las ranuras de expansión y otros dispositivos. ');
    }
    else if(selection[2].checked)
    {
        scene.add(bios);
        data('El propósito fundamental del BIOS es iniciar y probar el hardware del sistema y cargar un gestor de arranque o un sistema operativo desde un dispositivo de almacenamiento de datos. Además, el BIOS provee una capa de abstracción para el hardware, por ejemplo, que consiste en una vía para que los programas de aplicaciones y los sistemas operativos interactúen con el teclado, el monitor y otros dispositivos de entrada/salida. Las variaciones que ocurren en el hardware del sistema quedan ocultos por el BIOS, ya que los programas usan servicios de BIOS en lugar de acceder directamente al hardware.');
    }
    else if(selection[3].checked)
    {
        scene.add(chipset);
        data('es el conjunto de circuitos integrados diseñados con base en la arquitectura de un procesador (en algunos casos, diseñados como parte integral de esa arquitectura), permitiendo que ese tipo de procesadores funcionen en una placa base. Sirven de puente de comunicación con el resto de componentes de la placa, como son la memoria, las tarjetas de expansión, los puertos USB, ratón, teclado, etc.');
    }
    else if(selection[4].checked)
    {
        scene.add(cpu);
        data('es el hardware dentro de un ordenador u otros dispositivos programables, que interpreta las instrucciones de un programa informático mediante la realización de las operaciones básicas aritméticas, lógicas y de entrada/salida del sistema. El término, y su acrónimo, han estado en uso en la industria de la Informática por lo menos desde el principio de los años 1960');
    }
    else if(selection[5].checked)
    {
        scene.add(discoDuro);
        data('es un dispositivo de almacenamiento de datos que emplea un sistema de grabación magnética para almacenar y recuperar archivos digitales. Se compone de uno o más platos o discos rígidos, recubiertos con material magnético y unidos por un mismo eje que gira a gran velocidad dentro de una caja metálica sellada');
    }
    else if(selection[6].checked)
    {
        scene.add(disipador);
        data('se utiliza para bajar la temperatura de algunos componentes electrónicos. Su funcionamiento se basa en la ley cero de la termodinámica, transfiriendo el calor de la parte caliente que se desea disipar al aire. Este proceso se propicia aumentando la superficie de contacto con el aire, permitiendo una eliminación más rápida del calor excedente. ');
    }
    else if(selection[7].checked)
    {
        scene.add(fuenteDePoder);
        data('es un componente del computador que se encarga de transformar una corriente eléctrica alterna en una corriente eléctrica continua transmitiendo la corriente eléctrica imprescindible y necesaria a los ordenadores para el buen funcionamiento y protección de estos.');
    }
    else if(selection[8].checked)
    {
        scene.add(ram);
        data(' se utiliza como memoria de trabajo de computadoras y otros dispositivos para el sistema operativo, los programas y la mayor parte del software. En la RAM se cargan todas las instrucciones que ejecuta la unidad central de procesamiento (procesador) y otras unidades del computador, además de contener los datos que manipulan los distintos programas. ');
    }
    else if(selection[9].checked)
    {
        scene.add(tarjetaDeAudio);
        data('es una tarjeta de expansión para computadoras que permite la salida de audio controlada por un programa informático llamado controlador (driver). ');
    }
    
}

function rotateObjects()
{
    gabinete.rotation.y -= 0.005;
    gabinete.rotation.x += 0.0005;

    tarjetaMadre.rotation.y -= 0.005;
    tarjetaMadre.rotation.x += 0.0005;

    bios.rotation.y -= 0.005;
    bios.rotation.x += 0.0005;

    chipset.rotation.y -= 0.005;
    chipset.rotation.x += 0.0005;

    cpu.rotation.y -= 0.005;
    cpu.rotation.x += 0.0005;

    discoDuro.rotation.y -= 0.005;
    discoDuro.rotation.x += 0.0005;

    disipador.rotation.y -= 0.005;
    disipador.rotation.x += 0.0005;

    fuenteDePoder.rotation.y -= 0.005;
    fuenteDePoder.rotation.x += 0.0005;

    ram.rotation.y -= 0.005;
    ram.rotation.x += 0.0005;

    tarjetaDeAudio.rotation.y -= 0.005;
    tarjetaDeAudio.rotation.x += 0.0005;
}

function data(message)
{
    var p = document.getElementById('data');
    p.innerHTML = message;
}


selection[0].checked = true;


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

//bios setup
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top 
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //botton
biosTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/BIOS/1.png')})); //front
biosTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //back
//create the bios object
createObject(2, 2, 0.125, biosTexture, 'bios');

//chipset setup
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //bottom
chipsetTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Chipset/1.png')})); //front
chipsetTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //back
//create the chipset object
createObject(2, 2, 0.25, chipsetTexture, 'chipset');

//cpu
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //right
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //left
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 })); //top
cpuTexture.push( new THREE.MeshBasicMaterial({ color: 0x000000 } )); //bottom
cpuTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/CPU/1.png') })); //front
cpuTexture.push( new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/CPU/2.png') })); //back
//create the cpu object
createObject(2, 2, 0.25, cpuTexture, 'cpu');

//discoDuro setup
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/2.png')})); //right //
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/4.png')})); //left
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/5.png')})); //top
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/6.png')})); //bottom
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/1.png')})); //front 
discoDuroTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disco%20Duro/3.png')})); //back
//create the discoDuro object
createObject(5, 1, 3, discoDuroTexture, 'discoDuro');

//disipador setup
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/1.png')})); //right
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/2.png')})); //left
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/5.png')})); //top
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/6.png')})); //bottom
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/3.png')})); //front
disipadorTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Disipador/4.png')})); //back
//create the disipador object
createObject(3, 2, 3, disipadorTexture, 'disipador');

//fuenteDePoder setup
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/3.png')})); //right
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/1.png')})); //left
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/6.png')})); //top
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/5.png')})); //bottom
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/2.png')})); //front
fuenteDePoderTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Fuente%20de%20Poder/4.png')})); //back //cambiar en photoshop 
//create the fuenteDePoder object
createObject(4, 2.5, 3, fuenteDePoderTexture, 'fuenteDePoder');

//ram setup
ramTexture.push(new THREE.MeshBasicMaterial({ color: 0x034454 })); //right
ramTexture.push(new THREE.MeshBasicMaterial({ color: 0x034454 })); //left
ramTexture.push(new THREE.MeshBasicMaterial({ color: 0x034454 })); //top 
ramTexture.push(new THREE.MeshBasicMaterial({ color: 0x034454 })); //bottom
ramTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/RAM/1.png') })); //front
ramTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/RAM/2.png') })); //back
//create the ram object
createObject(4, 1, 0.125, ramTexture, 'ram');

//tarjetaDeAudio
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ color: 0x002122 })); //right
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ color: 0x002122 })); //left
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ color: 0x002122 })); //top
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ color: 0x002122 })); //bottom
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Tarjeta%20de%20Audio/1.png') })); //front
tarjetaDeAudioTexture.push(new THREE.MeshBasicMaterial({ map: loader.load('https://raw.githubusercontent.com/andreslopezr/arquitectura-de-computadoras-lab/master/Resources/pc/Tarjeta%20de%20Audio/2.png') })); //back
//create the tarjetaDeAudio object
createObject(4, 1.5, 0.125, tarjetaDeAudioTexture, 'tarjetaDeAudio');

animate();