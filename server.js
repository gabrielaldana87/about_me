

var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{
  var path = request.url;
  var handle = path.split("/");
  console.log( request.url );
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
    this.h1tag=name+"_h1",
    this.render="render.js";

  }

  var about_me = new elements("about_me","gabriel.png","toprightquad");
  var projects_div = new elements("projectsdiv","filler","topleftquad");
  var resume = new elements("resume", "resume.png", "bottomsleftquad");
  var contact_me = new elements("contact_me", "filler", "bottomrightquad");
  var homepage = new elements("homepage","filler","filler");
  var array = [about_me,projects_div,resume,contact_me,homepage];

if(path==="/")
    {
      fs.readFile("homepage.html", function(err,data)
      {
        var convert = data.toString();
        response.end(convert);
      })
    }

    if(path==="/stylesheet.css")
      {
        fs.readFile("./stylesheet.css", function(err,data)
        {
          var convert = data.toString();
          response.end(convert);
        })
      }

      if(path==="/render.js")
        {
          fs.readFile("./render.js", function(err,data)
          {
            var convert = data.toString();
            response.end(convert);
          })
        }

          for(i=0;i<array.length;i++)
        {
        if(handle[1]===array[i]["name"])
          {
            var textreader = array[i]["text"];
            var renderingfile = array[i]["render"];

            fs.readFile(array[i]["url"], function(err,datafirst)
            {
              var convert = datafirst.toString();
              fs.readFile(renderingfile,function(err,datasecond)
              {
                var converender = datasecond.toString();
                fs.readFile(textreader,function(err,datathird)
                {
                  var converttext = datathird.toString().trim();
                  var testhis = converender.replace("REPLACEME",converttext);
                  fs.writeFile(renderingfile,testhis,function(e)
                  {
                    console.log("converted to data!");
                    console.log(convert);
                  })
                  response.end(convert);
                })

              })

              //response.end(convert);

            })
          }
          if(handle[1]===array[i]["img"])
            {
              fs.readFile(array[i]["img"], function(err,data)
              {
                var convert = data.toString();
                response.end(data);
              })
            }
            if(handle[1]===array[i]["text"])
              {
                fs.readFile(array[i]["text"], function(err,data)
                {
                  var convert = data.toString();
                  response.end(data);
                })
              }
        }
  })
  server.listen( 3000 );
