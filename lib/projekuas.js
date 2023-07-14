//Nama  : Nadya Andriani Puspita Sari
//NIM   : 09021182025015
//Kelas : 4 REG B

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 5;

const geo_nad = new THREE.BufferGeometry();
let vertices = new Float32Array([
    -1.0, -1.0, 1.0, //0
    1.0, 1.0, 1.0, //1
    -1.0, 1.0, 1.0, //2
    1.0, -1.0, 1.0, //3
    
    -1.0, -1.0, -1.0, //4
    1.0, 1.0, -1.0, //5
    -1.0, 1.0, -1.0, //6
    1.0, -1.0, -1.0 //7
]);

let colors = new Float32Array([
    1.0, 0.0, 1.0, // vertex 0
    1.0, 0.0, 1.0, //ungu
    1.0, 1.0, 1.0, //putih
    1.0, 1.0, 1.0, 


    1.0, 0.0, 1.0, // vertex 4
    1.0, 0.0, 1.0, 
    1.0, 1.0, 1.0, 
    1.0, 1.0, 1.0
    
]);

geo_nad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geo_nad.setAttribute('color', new THREE.BufferAttribute(colors, 3));
geo_nad.setIndex([
    // sisi depan
    0,3,1,
    1,2,0,

    // sisi belakang
    4,6,5,
    5,7,4,

    // sisi kiri
    4,0,2,
    2,6,4,

    // sisi kanan
    5,1,3,
    3,7,5,

    // sisi atas
    1,5,6,
    6,2,1,

    // sisi bawah
    0,4,7,
    7,3,0
]);
const mat_nad = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});
let mesh_nad = new THREE.Mesh(geo_nad, mat_nad);
scene.add(mesh_nad);


window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    cam.aspect = width / height;
    cam.updateProjectionMatrix();
});

function update() {
    //mesh.rotation.y += 0.1;
    mesh_nad.rotation.y += 0.01;
    mesh_nad.rotation.x += 0.01;
    requestAnimationFrame(update);
    renderer.render(scene, cam);
}

update();