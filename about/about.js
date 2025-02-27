var basePath = '';
var urlPath = '';

document.addEventListener('DOMContentLoaded', function (){
    basePath = '../layouts/base.html';
    urlPath = '../layouts/about.html';
    loadPage(basePath,urlPath);
})

function homePage(){
    window.top.location = '../index.html';
    page = 'home';
}