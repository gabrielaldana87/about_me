var elements = function(name,img,parent)
{
  this.name= name,
  this.link="/"+name,
  this.url=name+".html",
  this.img="'"+img+"'",
  this.class="."+name,
  this.parent="#"+parent
}

var about_me = new elements("about_me","gabriel,png","toprightquad");
var projects_div = new elements("projectsdiv","filler","topleftquad");
var resume = new elements("resume", "filler", "bottomsleftquad");
var contact_me = new elements("contact_me", "filler", "bottomrightquad");
var array = [about_me,projects_div,resume,contact_me];

var body = document.querySelector("body");

var div = document.createElement("div");
var div2 = document.createElement("div");

var div3 = document.createElement("div");
var div4 = document.createElement("div");
var test4 = document.createElement("h1");
var div5 = document.createElement("div");
var div6 = document.createElement("div");
var test6 = document.createElement("h1");
var div7 = document.createElement("div");
var div8 = document.createElement("div");
var test8 = document.createElement("h1");
var div9 = document.createElement("div");
var div10 = document.createElement("div");
var test10 = document.createElement("h1");
// var gabriel = document.createElement("img");

body.appendChild(div);
body.appendChild(div2);
div.appendChild(div3);
div3.appendChild(div4);
div4.appendChild(test4);
div.appendChild(div5);

div5.appendChild(div6);
div6.appendChild(test6);
div2.appendChild(div7);

div7.appendChild(div8);
div8.appendChild(test8);
// div8.appendChild(gabriel);
div2.appendChild(div9);

div9.appendChild(div10);
div10.appendChild(test10);

div.className="backdiv";
div2.className="backdiv";
div3.id="topleftquad";
div4.id="projectsdiv";
div5.id="bottomsleftquad";
div7.id="toprightquad";
div8.setAttribute("class","about_me bottom-to-top");
div4.setAttribute("class","projectsdiv right-to-left");
div6.setAttribute("class","resume top-to-bottom");
div10.setAttribute("class", "contact_me left-to-right");

div9.id="bottomrightquad";
//div10.id="contact_me";
//gabriel.src="./gabriel.png"


test4.innerText="projectsdiv";
test6.innerText="resume";
test8.innerText="about_me";
test10.innerText="contact_me";
test10.id="contact_corner";

for(i=0;i<array.length;i++)
  {
    var boo = document.createElement("a");
    var parent = document.querySelector(array[i]["parent"]);
    parent.appendChild(boo);
    var select = document.querySelector(array[i]["class"]);
    boo.appendChild(select);
    boo.href=array[i]["link"];
  }
