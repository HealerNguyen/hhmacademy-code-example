const fs = require("fs");
// Đọc file bằng streams bằng phương thức createReadStream
const readerStream = fs.createReadStream('bigFile.txt');
// Kiểu mã hóa dùng là UTF8
readerStream.setEncoding('UTF8');
// Sự kiện khi đọc data
readerStream.on('data', function(chunk) {
   console.log(chunk)
});
