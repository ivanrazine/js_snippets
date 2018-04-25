/*********************************************************************************

  From JQuery to Vanilla

 *********************************************************************************/

/*

$(".block").css("background","red");

*/
/*
var blocks = document.querySelectorAll(".block");
var block = document.querySelector(".block");

[].forEach.call(blocks, function (el) {
    el.style.backgroundColor = "red";
});
*/
/*

$(".block").addClass("blue");
$(".block").removeClass("block");
$(".block").toggleClass("toggled");

*/
/*
[].forEach.call(blocks, function (el) {
    el.classList.add("blue");
    el.classList.remove("block");
    el.classList.toggle("toggled");
});
*/
/*

$(".block").attr("title","My fancy block");
$(".block").data("title","My fancy block");

*/
/*
[].forEach.call(blocks, function (el) {
    el.setAttribute("title","My fancy block");
    el.dataset.title = "Another title";
});
*/
/*

$(".block").text("Hello World");
$(".block").html("<span>Hello World</span>");

*/
/*
[].forEach.call(blocks, function (el) {
    el.textContent = "Hello World";
    el.innerHTML = "<span>Hello World</span>";
});
*/
/*

$(".block").after("<div>Hello Mars</div>");
$(".block").before("<div>Hello Jupiter</div>");

*/
/*
[].forEach.call(blocks, function (el) {
    el.insertAdjacentHTML('afterend', "<div>Hello Mars</div>");
    el.insertAdjacentHTML('beforebegin', "<div>Hello Jupiter</div>");
});
*/
/*

$(".block").append("<span>*-- </span>");
$(".block").prepend("<span> --*</span>");

*/
/*
[].forEach.call(blocks, function (el) {
    el.innerHTML += " --*";
});

[].forEach.call(blocks, function (el) {
    var oldHTML = el.innerHTML;
    el.innerHTML = "*-- " + oldHTML;
});
*/
/*

$(".block").remove();

*/
/*
[].forEach.call(blocks, function (el) {
    el.remove();
})
*/
/* FIRST / LAST */
/*
var lastDiv = document.querySelectorAll(".block");
var firstDiv = document.querySelectorAll(".block");

console.log(lastDiv[lastDiv.length- 1]);
console.log(firstDiv[0]);
*/

var firstDiv = document.querySelectorAll(".block")[0],
    html = document.createElement("div"),
    txt = document.createTextNode("CLICK ME");

html.appendChild(txt);
firstDiv.appendChild(html);
html.classList.add("clickme");

html.addEventListener("click", function(){
    console.log("I was clicked");
});
/*
html.addEventListener("click", () => {
    console.log("I was clicked");
});
*/

