const fs = require("fs");
let data = '';
// Đọc file bằng streams bằng phương thức createReadStream
const readerStream = fs.createReadStream('input.txt');
// Kiểu mã hóa dùng là UTF8
readerStream.setEncoding('UTF8');
// Sự kiện khi đọc data
readerStream.on('data', function(chunk) {
   data += chunk;
});
//Khi kết thúc đọc data và in ra nội dung đã đọc
readerStream.on('end',function(){
   console.log(data)
});
//Khi xảy ra lỗi in ra lỗi
readerStream.on('error', function(err){
   console.log(err.stack);
});
