'use strict';
const assert = require('power-assert');
const SnippetCsonToReadme = require('../../src/index.js');
// import SnippetCsonToReadme from '../../src/index.js';

describe('Snippet.cson to README', () => {
  it('crystal snippet', () => {
    const cson = `
'.source.crystal,.source.ruby':
  'if … else … end':
    'prefix': 'if else'
    'body': 'if (\${1:condition})\\n\\t$2\\nelse\\n\\t$3\\nend'
  'if … end':
    'prefix': 'if'
    'body': 'if (\${1:condition})\\n\\t$0\\nend'
    `;
    const expected = `\n## Types\n* .source.crystal\n* .source.ruby\n\n## Snippets\n### if … else … end\nprefix: if else  \nbody:\n\n~~~\nif (\${1:condition})\n\t$2\nelse\n\t$3\nend\n~~~\n\n### if … end\nprefix: if  \nbody:\n\n~~~\nif (\${1:condition})\n\t$0\nend\n~~~`;

    let actual = new SnippetCsonToReadme(cson).run();
    assert(expected === actual);
  });
});
