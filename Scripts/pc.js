let camera, scene, renderer, loader;

//Objects of the PC
let gabinete, tarjetaMadre, bios, chipset, cpu, discoDuro, disipador, fuenteDePoder, ram, tarjetaDeAudio;

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



}

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
} 


function createImageArray(xa,xl,ya,yl,za,zl)
{
    var textureArray = new Array();
    for (var i=0; i < arguments.length; i++)
        textureArray.push(arguments[i])
    return textureArray;
}

function addElement(sizeX, sizeY, sizeZ, positionX, positionY,positionZ, imageArray)
{
    var cubeMaterialArray = new Array();
    for (i=0; i<5; i++)
    {
        var image = loader.load(imageArray[i]);
        cubeMaterialArray.push( new THREE.MeshBasicMaterial( { map: image} ));
    }
    var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );
    var cubeGeometry = new THREE.CubeGeometry(sizeX, sizeY, sizeZ);

    cube = new THREE.Mesh( cubeGeometry, cubeMaterials );

    return cube;
}





initScene(0, 0, 5);

var geometry = new THREE.BoxGeometry(4, 4, 4);

var texture = loader.load('./Carbon.png');
var material = new THREE.MeshBasicMaterial({ map: texture });

	// Create mesh with geo and material
	var cube = new THREE.Mesh(geometry, material);
	// Add to scene
	scene.add(cube);

	// Position camera
	camera.position.z = 5;




animate();