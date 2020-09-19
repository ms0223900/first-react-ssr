import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path';
import fs from 'fs';
import express from 'express';
import App from '../src/App'

const PORT = process.env.PORT || 3006;
const app = express()

const ROUTES = {
  homepage: '/'
}

app.get(ROUTES.homepage, (req, res) => {
  const reactApp = ReactDOMServer.renderToString(<App />)

  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, {
    encoding: 'utf-8',
  }, (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  })
})

app.use(express.static('./build'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})