// Global Variables
//------------------------------------------------------------
const speed = 500;

function loadPage(basePath,
                  urlPath) {
    const myContainerDiv = document.getElementsByClassName('myContainer')[0];
    fetch(basePath).then((res) => res.text())
                                     .then((text) => {
                                        myContainerDiv.innerHTML = text;
                                        
                                        terminalBlink(speed);
                                        go2Page(urlPath);
                                     })
                                     .catch((e) => console.error(e));
}

function terminalBlink(speed) {
    const canvas = document.getElementById('terminal');
    const context = canvas.getContext('2d');
    let counter = 0;

    setInterval(function() {
        context.fillStyle = (counter % 2 === 0) ? '#000000' : '#3EFC03';
        context.fillRect(0, 0, canvas.width, canvas.height);
        counter++;
    }, speed);
}

function articlePage(imagePath,
                     imageWidth,
                     date,
                     subtitle,
                     articlePath,
                     articleTitle){
    const containerDiv = document.getElementById('container');
    fetch('layouts/article.html').then((res) => res.text())
                                 .then((text) => {
                                    // Add article text
                                    containerDiv.innerHTML = text;
                                    const article = document.getElementById('article_text_div');
                                    console.log(article)
                                    fetch(articlePath).then((res) => res.text())
                                                      .then((text) => {
                                                        article.innerHTML = '<iframe id="article_body" src="'+articlePath+'" onload="resizeIframe(this)" style="width:100%;" title="'+articleTitle+'"></iframe>';
                                                      })
                                                      .catch((e) => console.error(e));
                                    
                                    // Add title
                                    const titleDiv = document.getElementById('title_div');
                                    titleDiv.innerText = articleTitle
                                    
                                    // Add date
                                    const dateDiv = document.getElementById('date_div');
                                    dateDiv.innerText = date
                                    
                                    // Add subtitle
                                    const subtitleDiv = document.getElementById('subtitle_div');
                                    subtitleDiv.innerText = subtitle

                                    // Add image
                                    var img = document.createElement('img');
                                    img.src = imagePath;
                                    img.width = imageWidth;

                                    var src = document.getElementById('image_div');
                                    src.appendChild(img);
                                 })
                                 .catch((e) => console.error(e));
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function go2Page(htmlPath){
    const containerDiv = document.getElementById('container');
    fetch(htmlPath).then((res) => res.text())
                   .then((text) => {
                    containerDiv.innerHTML = text;
                   })
                   .catch((e) => console.error(e));
}

function homePage(){}