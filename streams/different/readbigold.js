const fs = require("fs");
fs.readFile("bigFile.txt","utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
