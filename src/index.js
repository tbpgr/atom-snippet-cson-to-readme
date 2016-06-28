'use strict';
var CSON = require('cson');

const TYPES_H2 = '## Types';
const SNIPPET_H2 = '## Snippets';

class SnippetCsonToReadme {

  constructor(cson) {
    this._cson = cson;
  }

  run() {
    let snippetCson = CSON.parseCSONString(this._cson);
    let fileTypes = Object.keys(snippetCson)[0].split(',');
    let fileTypeList = fileTypes.map(e => `* ${e}`).join('\n');
    let snippets = snippetCson[Object.keys(snippetCson)[0]];
    let rows = [];
    for(let name in snippets) {
      let escapedName = this._escape(name);
      let prefix = this._escape(snippets[name]['prefix']);
      let body = this._escape(snippets[name]['body']);
      let row = `
### ${escapedName}
prefix: ${prefix}  
body:

~~~
${body}
~~~`;
      rows.push(row);
    }

    let table = `
${TYPES_H2}
${fileTypeList}

${SNIPPET_H2}${rows.join('\n')}`;

    return table;
  }

  _escape(text) {
    return text.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
  }
}

module.exports = SnippetCsonToReadme;
