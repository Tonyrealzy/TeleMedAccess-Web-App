// import Logger from '../components/Logger';

// const http = require('http');
// // const { response } = require('express');

// const targetUrl = 'http://api.endlessmedical.com/v1/dx';
// // Run localtunnel like `lt -s rscraper -p 8080 --print-requests`; then visit https://yourname.loca.lt/todos/1 .

// const proxyServerPort = 8080;

// // eslint-disable-next-line max-lines-per-function
// app.use('/', function (clientRequest, clientResponse) {
//   const parsedHost = targetUrl.split('/').splice(2).splice(0, 1).join('/');
//   let parsedPort;
//   let parsedSSL;
//   if (targetUrl.startsWith('https://')) {
//     parsedPort = 443;
//     parsedSSL = https;
//   } else if (targetUrl.startsWith('http://')) {
//     parsedPort = 80;
//     parsedSSL = http;
//   }
//   const options = {
//     hostname: parsedHost,
//     port: parsedPort,
//     path: clientRequest.url,
//     method: clientRequest.method,
//     headers: {
//       'User-Agent': clientRequest.headers['user-agent'],
//     },
//   };

//   const serverRequest = parsedSSL.request(options, function (serverResponse) {
//     let body = '';
//     if (String(serverResponse.headers['content-type']).indexOf('text/html') !== -1) {
//       serverResponse.on('data', function (chunk) {
//         body += chunk;
//       });

//       serverResponse.on('end', function () {
//         // Make changes to HTML files when they're done being read.
//         // body = body.replace(`example`, `Cat!`);

//         clientResponse.writeHead(serverResponse.statusCode, serverResponse.headers);
//         clientResponse.end(body);
//       });
//     } else {
//       serverResponse.pipe(clientResponse, {
//         end: true,
//       });
//       clientResponse.contentType(serverResponse.headers['content-type']);
//     }
//   });

//   serverRequest.end();
// });

// app.listen(proxyServerPort);
// Logger(`Proxy server listening on port ${proxyServerPort}`);


// // import { createProxyMiddleware } from "http-proxy-middleware";

// // const setUpProxy = (app) => {
// //   app.use(
// //     "/dx",
// //     createProxyMiddleware({
// //       target: "http://localhost:3000",
// //       changeOrigin: true,
// //     })
// //   );
// //   app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
// //     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
// //     next();
// //   });
// // };

// // export default setUpProxy;

