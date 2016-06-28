## atom-snippet-cson-to-readme
Generate Atom Package README from snippet.cson.

[![Build Status][travis-image]][travis-url]
[![NPM package][npm-image]][npm-url]
[![License][license-image]][license-url]

## Usage
### Install
```shell
$ npm install -g atom-snippet-cson-to-readme
```

### Run
```bash
$ cson2readme <filepath>
```

## Example
```bash
$ cson2readme <filepath>
```

### From CSON
```coffee
'.source.crystal,.source.ruby':
  'if … else … end':
    'prefix': 'if else'
    'body': 'if (\${1:condition})\\n\\t$2\\nelse\\n\\t$3\\nend'
  'if … end':
    'prefix': 'if'
    'body': 'if (\${1:condition})\\n\\t$0\\nend'
```

### To Markdown
```markdown
## Types
* .source.crystal
* .source.ruby

## Snippets
### if … else … end
prefix: if else  
body:

~~~
if (${1:condition})
	$2
else
	$3
end
~~~
```

[atom-snippet-cson-to-readme-url]: https://github.com/tbpgr/atom-snippet-cson-to-readme

[npm-url]: https://www.npmjs.com/package/atom-snippet-cson-to-readme
[npm-image]: https://badge.fury.io/js/atom-snippet-cson-to-readme.svg

[travis-url]: https://travis-ci.org/tbpgr/atom-snippet-cson-to-readme
[travis-image]: https://secure.travis-ci.org/tbpgr/atom-snippet-cson-to-readme.svg?branch=master

[license-url]: https://github.com/tbpgr/atom-snippet-cson-to-readme/blob/master/MIT-LICENSE.txt
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat

