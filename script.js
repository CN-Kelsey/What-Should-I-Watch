let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
// write your for loop here
    for(let movies of horror){
        $(".horror-recommend").append("<p>" + movies + "</p>");
    }
});

//declare your new array here

let action = ["Avengers", "Batman", "Star Wars"];

$(".action").click(function() {
    for (let movies of action){
        $(".action-recommend").append("<li>" + movies + "</li>");
    }
});

//How can you display just one movie from each array using the array index?
let comedy = ["Anchorman", "Step Brothers", "I Love You Man"];

$(".comedy").click(function() {
    for (let movies of comedy){
        $(".comedy-recommend").text( comedy[0]);
    }
});