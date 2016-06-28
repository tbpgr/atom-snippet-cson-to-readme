## atom-snippet-cson-to-readme
Generate Atom Package README from snippet.cson.

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
```
