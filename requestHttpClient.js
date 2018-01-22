var request = require('request');
var fs = require('fs');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        throw err;
      })
      .on('response', function(response) {
        console.log('Downloading image..');
        console.log('Response.status:', response.statusMessage);
        console.log('Response Status Code:', response.headers['content-type']);
      })
      .on('end', function(){
        console.log('Download Complete.');
      })
      .pipe(fs.createWriteStream('./future.jpg'));
