const fs = require('fs');
const file = fs.createWriteStream('bigfile.txt');
for(let i=0; i<= 1e6; i++) {
  file.write(`hhmacademy.vn - Đào tạo các khóa học lập trình,thiết kế đồ họa chuyên nghiệp. Học lập trình PHP, Java, Android, Python, Nodejs, Vuejs, Reactjs, Ryby, Ruby on Rails....\n`);
}
file.end();
