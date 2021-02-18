const fs = require("fs");
// Đọc stream đầu vào là file input bằng phương thức createReadStream
let readerStream = fs.createReadStream('input.txt');
// Ghi stream đầu ra là file input bằng phương thức createWriteStream
let writerStream = fs.createWriteStream('output.txt');
//Sử dụng khái niệm về Pipping để dùng dữ liệu đầu ra của readerStream làm giá trị đầu ra của writerStream
readerStream.pipe(writerStream);
