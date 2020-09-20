import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import express from 'express';
import App from '../src/App';
import renderer from '../src/lib/functions/renderer';

const PORT = process.env.PORT || 3006;
const app = express();

// 可以取消註解這邊來看如果直接使用build的檔案會發生什麼事
// app.use(express.static('./build'));
app.use(express.static('dist'));

export const getHtml = (appHtml='') => (
  `
    <html>
      <head></head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
);

app.get('*', (req, res) => {
  console.log(req.path);
  const reactApp = renderer(req);
  console.log(reactApp);

  // 可以取消註解這邊來看如果直接使用build的檔案會發生什麼事
  // const indexFile = path.resolve('./build/index.html');
  // fs.readFile(indexFile, {
  //   encoding: 'utf-8',
  // }, (err, data) => {
  //   if (err) {
  //     console.error('Something went wrong:', err);
  //     return res.status(500).send('File is not ready yet!');
  //   };
  //   return res.send(
  //     data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
  //   );
  // });
  const appRes = getHtml(reactApp);
  res.send(appRes);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
