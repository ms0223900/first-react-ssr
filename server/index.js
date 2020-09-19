import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import express from 'express';
import App from '../src/App';
import renderer from '../src/lib/functions/renderer';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('*', (req, res) => {
  const reactApp = renderer(req);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, {
    encoding: 'utf-8',
  }, (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('File is not ready yet!');
    }
    // console.log(reactApp);
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
