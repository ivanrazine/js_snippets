var inx = document.getElementById("index"),
sections = document.querySelectorAll("h2");

[].forEach.call(sections, function (el,i,arr) {

    var id = el.id,
        content = el.textContent;
        sep = " / "

    if (i === arr.length - 1){ 
        sep = "";
    }

    inx.innerHTML += "<a href='#" + id +"'>" + content + "</a>" + sep;    

    el.onclick = function() {

        scroll(0,0);

    }

});  
 

var app = new Vue({
    el: '#snippet-app',
    data: {
        title: 'JavaScript<br> Snippets'
    }
})

 