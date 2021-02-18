const fs = require("fs");
let data = `hhmacademy.vn - Đào tạo các khóa học lập trình,
thiết kế đồ họa chuyên nghiệp. 
Học lập trình PHP, Java, Android, Python, Nodejs, Vuejs, Reactjs, Ryby, Ruby on Rails...`;
//Sử dụng phương thức createWriteStream
const writerStream = fs.createWriteStream('output.txt');
// Ghi dữ liệu vào file
writerStream.write(data);
// Đánh dấu đây là cuối file
writerStream.end();
// Bắt sự kiện finish của Streams
writerStream.on('finish', function() {
    console.log("Write done.");
});
// Bắt sự kiện error khi xảy ra lỗi
writerStream.on('error', function(err){
   console.log(err.stack);
});
