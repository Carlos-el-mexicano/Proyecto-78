var images = [
    "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/11/16496598545466.jpg",
    "https://media.glamour.mx/photos/61a5602b72142b6f063c09c8/16:9/w_2560%2Cc_limit/encantoposter.jpg",
    "https://ca-times.brightspotcdn.com/dims4/default/2f097f3/2147483647/strip/true/crop/4096x2212+0+0/resize/840x454!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa3%2Fb2%2F66aa8eaa4505b2c5e74df41161e3%2F201875b82bbb6c0990bffb1674f6d811-4096x2212-820c4022.jpeg",
    "https://ricardoacosta52.files.wordpress.com/2017/05/imagen-5.png?w=1000&h=553"
];
var nombres = [
"Libro Familiar","Todos los integrantes (Incluidas mis mascotas)","Mis familiares que viven en otro país,ciudad o pueblo","Mis Hermanos,primos/as, tíos/as etc."
];
var i = 0;
function next(){
    i++;
    var numero_familiares = 3;
    if(i>numero_familiares){
        i=0;
    }
    var update_img = images[i];
    var update_nombres = nombres[i];
    document.getElementById("family_member_image").src = update_img;
    document.getElementById("nombre_familiar").innerHTML = update_nombres;
}