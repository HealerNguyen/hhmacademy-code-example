//Sử dụng thư viện fs
const fs = require("fs");
//Sử dụng thư viện zlib dùng để nén file
const zlib = require('zlib')
//Phương thức có nhiệm vụ nén file
const gzip = zlib.createGzip()
//Đọc streams để lấy kết quả đầu ra
const readStream = fs.createReadStream('input.txt', 'utf8')
//Ghi streams ra file mới
const writeStream = fs.createWriteStream('output.txt.gz')
//Sử dụng kỹ thuật piping Chaining
readStream.pipe(gzip).pipe(writeStream)
