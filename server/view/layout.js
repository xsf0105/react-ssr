'use strict';

import common from '../../common.json';

exports.layout = function(content, data) {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charSet='utf-8'/>
    <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='renderer' content='webkit'/>
    <meta name='keywords' content='demo'/>
    <meta name='description' content='demo'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <link rel="stylesheet" href="/dist/css/style.css">
  </head>
  <body>
    <div id="root"><div>${content}</div></div>
  <script>
  window.__REDUX_DATA__ = ${JSON.stringify(data)};
  </script>
  <script src="${common.publicPath}dist/js/manifest.js"></script>
  <script src="${common.publicPath}dist/js/vendor.js"></script>
  <script src="${common.publicPath}dist/js/index.js"></script>
  </body>
  </html>
`;
};
