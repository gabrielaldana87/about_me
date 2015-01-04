var testbody = document.querySelector("body");

var elements = function(name,img,parent)
{
  this.name= name,
  this.link="/"+name,
  this.url=name+".html",
  this.text=name+".txt",
  this.img=img,
  this.class="."+name,
  this.parent="#"+parent,
  this.body=name+"_body",
  this.idSelect="#"+this.body,
  this.navdivsid=name+"navdivsid",
  this.h1tag=name+"_h1"
}

var about_me = new elements("about_me","gabriel.png","toprightquad");
var projects_div = new elements("projectsdiv","filler","topleftquad");
var resume = new elements("resume", "resume.png", "bottomsleftquad");
var contact_me = new elements("contact_me", "filler", "bottomrightquad");
var homepage = new elements("homepage","filler","filler");
var array = [about_me,projects_div,resume,contact_me,homepage];

if(testbody.id==="body")
{
var body = document.querySelector("#body");

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
}

for(i=0;i<array.length;i++)
  {
if(testbody.id===array[i]["body"])
{
    var am_body = document.querySelector(array[i]["idSelect"]);
    am_body.setAttribute("class","pages_back");
    var nav = document.createElement("nav");
    am_body.appendChild(nav);
    var divvy = document.createElement("div");
    nav.appendChild(divvy);
    divvy.setAttribute("class","navdiv");
    var h1_nav = document.createElement("h1");
    divvy.appendChild(h1_nav);
    h1_nav.setAttribute("class",array[i]["h1tag"])
    h1_nav.innerText=array[i]["name"];
    var pardiv = document.createElement("div");
    am_body.appendChild(pardiv);
    pardiv.id="pardiv";
    var colordiv = document.createElement("div");
    pardiv.appendChild(colordiv);
    colordiv.id="colordiv";
    var container = document.createElement("div");
    pardiv.appendChild(container);
    container.id="container";
    var image = document.createElement("img");
    container.appendChild(image);
    image.src=array[i]["img"];
    var textdiv = document.createElement("div");
    pardiv.appendChild(textdiv);
    textdiv.id="textdiv";
    var h1_gabriel = document.createElement("h1");
    textdiv.appendChild(h1_gabriel);
    var divbelowintro = document.createElement("div");
    textdiv.appendChild(divbelowintro);
    divbelowintro.setAttribute("class","divbelow");
    var paragraph = document.createElement("p");
    textdiv.appendChild(paragraph);
    paragraph.innerText="REPLACEME";


    h1_gabriel.innerText="gabriel aldana";
    h1_gabriel.setAttribute("class",array[i]["h1tag"]);


    var div = document.createElement("div");
    nav.appendChild(div);
    div.setAttribute("class","navdiv");
    div.id="testme";
    var neworder = ["first","second","third","fourth"]

    for(j=0;j<array.length;j++)
      {
      if(array[j]!==array[i])
        {
    var nav_divs = document.createElement("div");
    div.appendChild(nav_divs);
    nav_divs.id=neworder[j-1];
    nav_divs.setAttribute("class","right-to-left");
    var atags = document.createElement("a");
    div.appendChild(atags);
    var testme = atags.appendChild(nav_divs);
    atags.href=array[j]["link"];
    nav_divs.innerText=array[j]["name"];
      }
    }

}
  }
//console.log(document.querySelector("#about_me_body"));
