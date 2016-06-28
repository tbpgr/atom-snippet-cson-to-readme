'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CSON = require('cson');

var TYPES_H2 = '## Types';
var SNIPPET_H2 = '## Snippets';

var SnippetCsonToReadme = function () {
  function SnippetCsonToReadme(cson) {
    _classCallCheck(this, SnippetCsonToReadme);

    this._cson = cson;
  }

  _createClass(SnippetCsonToReadme, [{
    key: 'run',
    value: function run() {
      var snippetCson = CSON.parseCSONString(this._cson);
      var fileTypes = Object.keys(snippetCson)[0].split(',');
      var fileTypeList = fileTypes.map(function (e) {
        return '* ' + e;
      }).join('\n');
      var snippets = snippetCson[Object.keys(snippetCson)[0]];
      var rows = [];
      for (var name in snippets) {
        var escapedName = this._escape(name);
        var prefix = this._escape(snippets[name]['prefix']);
        var body = this._escape(snippets[name]['body']);
        var row = '\n### ' + escapedName + '\nprefix: ' + prefix + '  \nbody:\n\n~~~\n' + body + '\n~~~';
        rows.push(row);
      }

      var table = '\n' + TYPES_H2 + '\n' + fileTypeList + '\n\n' + SNIPPET_H2 + rows.join('\n');

      return table;
    }
  }, {
    key: '_escape',
    value: function _escape(text) {
      return text.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }
  }]);

  return SnippetCsonToReadme;
}();

module.exports = SnippetCsonToReadme;