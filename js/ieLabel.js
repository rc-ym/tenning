(function(){
    var element=['header','footer','article','aside','section','nav','menu','details','dialog','figure','figcaption'];
    for (var i=0;i<element.length; i++){
        var iean=document.createElement(element[i]);
        window.body.appendchild(iean);
    }
})();