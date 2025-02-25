// Global Variables
//------------------------------------------------------------
var speed = 500;

document.addEventListener('DOMContentLoaded', function (){
    const canvas = document.getElementById('terminal');
    const context = canvas.getContext('2d');
    let counter = 0;
    
    setInterval(function() {
        context.fillStyle = (counter % 2 === 0) ? '#000000' : '#3EFC03';
        context.fillRect(0, 0, canvas.width, canvas.height);
        counter++;
    }, speed);

    // const conatinerDiv = document.getElementById('container');
    // fetch('layouts/home.html').then((res) => res.text())
    //                           .then((text) => {
    //                             conatinerDiv.innerHTML = text;
    //                           })
    //                           .catch((e) => console.error(e));

    //articlePage('images/test.jpg',885.6,'articles/test.txt');

    //document.location = 'about'
    const conatinerDiv = document.getElementById('container');
    fetch('layouts/about.html').then((res) => res.text())
                              .then((text) => {
                                conatinerDiv.innerHTML = text;
                              })
                              .catch((e) => console.error(e));
})

function articlePage(imagePath,
                     imageWidth,
                     articlePath){
    const containerDiv = document.getElementById('container');
    fetch('layouts/article.html').then((res) => res.text())
                                 .then((text) => {
                                    containerDiv.innerHTML = text;
                                    const article = document.getElementById('article_text_div');
                                    console.log(article)
                                    fetch(articlePath).then((res) => res.text())
                                                      .then((text) => {
                                                        article.innerHTML = text;
                                                      })
                                                      .catch((e) => console.error(e));

                                    var img = document.createElement('img');
                                    img.src = imagePath;
                                    img.width = imageWidth;

                                    var src = document.getElementById('image_div');
                                    src.appendChild(img);
                                 })
                                 .catch((e) => console.error(e));
}

function homePage(){
    const containerDiv = document.getElementById('container');
    fetch('layouts/home.html').then((res) => res.text())
                              .then((text) => {
                                containerDiv.innerHTML = text;
                              })
                              .catch((e) => console.error(e));
}

function aboutPage(){
    const conatinerDiv = document.getElementById('container');
    fetch('layouts/about.html').then((res) => res.text())
                              .then((text) => {
                                conatinerDiv.innerHTML = text;
                              })
                              .catch((e) => console.error(e));
}