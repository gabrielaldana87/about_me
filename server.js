/*
var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{
  path = request.url;
  var handle = path.split("/");
  console.log( request.url );
  // fs.readFile( "index.js", function ( err, data1 ) {
  fs.readFile( "homepage.html", function ( err, data1 )
  {
    response.end(data1);

    if(path==="/render.js")
      {
        fs.readFile("./render.js", function(err,data)
        {
          var convert = data.toString();
          console.log("hello");
          response.end(convert);
        })
      }
      response.end(data1);
      if(path==="/render.js")
        {
          fs.readFile("./render.js", function(err,data)
          {
            var convert = data.toString();
            console.log("hello");
            console.log(convert);
            response.end(convert);
          })
        }
  })

  if(path==="/render.js")
    {
      fs.readFile("./render.js", function(err,data)
      {
        var convert = data.toString();
        console.log("hello");
        console.log(convert);
        response.end(convert);
      })
    }
})
  server.listen( 3000 );



var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{
  path = request.url;
  var handle = path.split("/");
  console.log( request.url );
  // fs.readFile( "index.js", function ( err, data1 ) {
  fs.readFile( "homepage.html", function ( err, data1 )
  {
    response.end(data1);
      })

      if(path==="/render.js")
        {
          fs.readFile("./render.js", function(err,data)
          {
            var convert = data.toString();
            console.log("hello");
            console.log(convert);
            response.end(convert);
          })
        }
      })
      server.listen( 3000 );
*/

var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{
  path = request.url;
  var handle = path.split("/");
  console.log( request.url );
  // fs.readFile( "index.js", function ( err, data1 ) {

  if(path==="/")
    {
      fs.readFile("./homepage.html", function(err,data)
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

  })
  server.listen( 3000 );
