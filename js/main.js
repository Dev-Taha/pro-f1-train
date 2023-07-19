var imageSources = [
    'img/girl_light.png',
    'img/man_dark.png',
    'img/glass_dark.png'
];
var currentIndex = 0;

function previousImage() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateImage();
}

function updateImage() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');

    image1.src = imageSources[currentIndex];
    image2.src = imageSources[currentIndex];
    image3.src = imageSources[currentIndex];
}

var text = document.getElementById("myText");
var rectangle = document.getElementById("rect")

function toggleText() {
    if (text.style.display === "none") {
        text.style.display = "block";
        rectangle.style.height = "200px";
        rectangle.style.width = "540px";
    } else {
        text.style.display = "none";
        rectangle.style.height = "30px";
    }
}

var text2 = document.getElementById("myText2");
var rectangle2 = document.getElementById("rect2")

function toggleText2() {
    if (text2.style.display === "none") {
        text2.style.display = "block";
        rectangle2.style.height = "200px";
        rectangle2.style.width = "540px";
    } else {
        text2.style.display = "none";
        rectangle2.style.height = "30px";
    }
}

var text3 = document.getElementById("myText3");
var rectangle3 = document.getElementById("rect3")

function toggleText3() {
    if (text3.style.display === "none") {
        text3.style.display = "block";
        rectangle3.style.height = "200px";
        rectangle3.style.width = "540px";
    } else {
        text3.style.display = "none";
        rectangle3.style.height = "30px";
    }
}

var text4 = document.getElementById("myText4");
var rectangle4 = document.getElementById("rect4")

function toggleText4() {
    if (text4.style.display === "none") {
        text4.style.display = "block";
        rectangle4.style.height = "200px";
        rectangle4.style.width = "540px";
    } else {
        text4.style.display = "none";
        rectangle4.style.height = "30px";
    }
}

var text5 = document.getElementById("myText5");
var rectangle5 = document.getElementById("rect5")

function toggleText5() {
    if (text5.style.display === "none") {
        text5.style.display = "block";
        rectangle5.style.height = "200px";
        rectangle5.style.width = "540px";
    } else {
        text5.style.display = "none";
        rectangle5.style.height = "30px";
    }
}
var text6 = document.getElementById("myText6");
var rectangle6 = document.getElementById("rect6")

function toggleText6() {
    if (text6.style.display === "none") {
        text6.style.display = "block";
        rectangle6.style.height = "200px";
        rectangle6.style.width = "540px";
    } else {
        text6.style.display = "none";
        rectangle6.style.height = "30px";
    }
}

