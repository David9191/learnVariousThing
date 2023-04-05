const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceUserData = require('./module/replaceUserData');

const data = fs.readFileSync('./dev-data/allUserData.json', 'utf-8');
const dataObj = JSON.parse(data);
dataObj.map((item, idx) => (item.no = idx + 1)); // 원래 없던 no 추가.

const allUserData = fs.readFileSync('./templates/allUserList.html', 'utf-8');
const tempAllUserData = fs.readFileSync('./templates/template-allUserList.html', 'utf-8');
const userDetail = fs.readFileSync('./templates/userDetail.html', 'utf-8');
const tempUserDetail = fs.readFileSync('./templates/template-userDetail.html', 'utf-8');

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/') {
    res.writeHead(200, { ContentType: 'text/html' });
    let output = dataObj.map((item) => replaceUserData(tempAllUserData, item)).join('');
    output = allUserData.replace('{%USERLISTS%}', output);
    res.end(output);
  } else if (pathname === '/detail') {
    let user = dataObj[query.no - 1];
    let output = replaceUserData(tempUserDetail, user);
    output = userDetail.replace('{%USERDETAIL%}', output);
    res.end(output);
  }
});

server.listen(8080, () => {
  console.log('START SERVER AT 8080');
});
