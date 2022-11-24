let imagenes = [
    "avengers.jpeg",
    "boba.jpeg",
    "hawkeye.jpeg",
    "monsters.jpeg",
    "luca.jpeg"
];
var i;
// $(".img1").html("<img src='"+imagenes[0]+">")


// imagenes.forEach(function(element,index){
//     $(".img"+index).html("Hola");
// })

for (let i = 0; i < imagenes.length; i++) {
    // const element = array[index];
    $(".img"+i).html("<img src='img/"+imagenes[i]+"'class='imgs'>");
    console.log("img"+i);
}

// $(".img"+1).html("<img src='img/"+imagenes[1]+"'>");