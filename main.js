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

    const article = document.getElementById('article_text_div');
    fetch('articles/test.txt')
    .then((res) => res.text())
    .then((text) => {
        article.innerHTML = text;
    })
    .catch((e) => console.error(e));

    var img = document.createElement('img');
    img.src = 'images/test.jpg';
    img.width = 885.6;

    var src = document.getElementById('image_div');
    src.appendChild(img);
})