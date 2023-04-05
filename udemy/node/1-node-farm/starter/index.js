const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./module/replaceTemplate');
// const slugify = require('slugify');
// const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
// console.log(slugs);

///////////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we konw about the avocado: ${textIn}\nCreated on ${Date()}`;
// fs.writeFileSync('./txt/output.txt', textOut, 'utf-8');
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log(`ERROR!🔥 ${err}`);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         console.log('Your file has been written😀');
//       });
//     });
//   });
// });
// fs.readFile();
// console.log('wait');

///////////////////////////////////////
// SERVER
// create server
// start server

// 실행 시 한 번만 실행됨
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// // 요청이 있을 때마다 실행됨
// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   if (pathName === '/' || pathName === '/overview') {
//     res.end('This is the OVERVIEW');
//   } else if (pathName === '/product') {
//     res.end('This is the PRODUCT');
//   } else if (pathName === '/api') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(data);
//   } else {
//     // header code는 항상 응답 컨텐츠 전에 보내야 한다.
//     // 뒤에는 보낼 수 없음.
//     // 즉, 상태 코드는 응답을 보내기 전에 항상 설정돼야 한다.
//     res.writeHead(404, {
//       'Content-type': 'text/html', // 이렇게 하면 브라우저는 HTML을 기대하고 있다. 그래서 아래에 h1을 적어줘야 함.
//       'my-own-header': 'hello-world',
//     });
//     res.end('<h1>Page not found!</h1>');
//   }
// });
// // !!오 진짜 우리가 받은 url은 폴더나 파일 시스템과는 전~~혀 관련 없다.
// // 그러고 싶다면 개발자가 라우터안에서 그걸 정의해야만 된다.
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });

/**
 * 1. create server
 * 2. listen
 * 3. url별로 routin하기
 * 4. api왔을 때 ./dev-data/data.json 파일 보여주기
 * - url: /, overview & product & api & else
 * great
 *
 ***************************************************
 *
 * data 요청 코드는 createServer 위에다가 쓴다. 왜?
 * createServer는 요청이 있을 때마다 실행되 는데 요청이 백만건이 동시에 오면
 * 데이터 요청도 각각 백만번 해야되니까 서버 터짐.
 * 아래 코드 1. html을 string으로 가져오고 placeholder를 실제 데이터로 바꿔줌.
 * 그리고 바꿔준 걸 html(in head)로 res.end해주면 끝
 */
const data = fs.readFileSync('./dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
console.log(typeof tempOverview); // string
const tempCard = fs.readFileSync(`${__dirname}/templates/template-Card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Ovreview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.end(output);
    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);
    //  API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data); // string 형식으로만 보낼 수 있다. 일단 string으로 보내고 위에 writeHead에 적어주면 알아서 파싱하나보다

    // Not found
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8080, () => {
  console.log('Start server at the port 8080');
});
