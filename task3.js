var fs = require("fs");
// Asynchronous read
//fs.readFile('welcome.txt', function (err, data) {
  // if (err) {
    //  return console.error(err);
   //}
   //console.log("Asynchronous read: " + data.toString());
//});
fs.appendFileSync("welcomeee.txt","hello node")
