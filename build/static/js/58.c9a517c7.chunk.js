(this["webpackJsonpreact-advanced-news-ticker"]=this["webpackJsonpreact-advanced-news-ticker"]||[]).push([[58],{83:function(e,t,n){!function(e){"use strict";e.defineMode("groovy",(function(t){function n(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var r,i=n("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),a=n("catch class def do else enum finally for if interface switch trait try while"),o=n("return break continue"),s=n("null true false this");function l(e,t){var n=e.next();if('"'==n||"'"==n)return u(n,e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return r=n,null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if("/"==n){if(e.eat("*"))return t.tokenize.push(f),f(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";if(p(t.lastToken,!1))return u(n,e,t)}if("-"==n&&e.eat(">"))return r="->",null;if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta";if("."==t.lastToken)return"property";if(e.eat(":"))return r="proplabel","property";var l=e.current();return s.propertyIsEnumerable(l)?"atom":i.propertyIsEnumerable(l)?(a.propertyIsEnumerable(l)?r="newstatement":o.propertyIsEnumerable(l)&&(r="standalone"),"keyword"):"variable"}function u(e,t,n){var r=!1;if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string";r=!0}function i(t,n){for(var i,a=!1,o=!r;null!=(i=t.next());){if(i==e&&!a){if(!r)break;if(t.match(e+e)){o=!0;break}}if('"'==e&&"$"==i&&!a&&t.eat("{"))return n.tokenize.push(c()),"string";a=!a&&"\\"==i}return o&&n.tokenize.pop(),"string"}return n.tokenize.push(i),i(t,n)}function c(){var e=1;function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++;return l(t,n)}return t.isBase=!0,t}function f(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop();break}r="*"==n}return"comment"}function p(e,t){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!t}function d(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function m(e,t,n){return e.context=new d(e.indented,t,n,null,e.context)}function k(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return l.isBase=!0,{startState:function(e){return{tokenize:[l],context:new d((e||0)-t.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||p(t.lastToken,!0)||(k(t),n=t.context)),e.eatSpace())return null;r=null;var i=t.tokenize[t.tokenize.length-1](e,t);if("comment"==i)return i;if(null==n.align&&(n.align=!0),";"!=r&&":"!=r||"statement"!=n.type)if("->"==r&&"statement"==n.type&&"}"==n.prev.type)k(t),t.context.align=!1;else if("{"==r)m(t,e.column(),"}");else if("["==r)m(t,e.column(),"]");else if("("==r)m(t,e.column(),")");else if("}"==r){for(;"statement"==n.type;)n=k(t);for("}"==n.type&&(n=k(t));"statement"==n.type;)n=k(t)}else r==n.type?k(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==r)&&m(t,e.column(),"statement");else k(t);return t.startOfLine=!1,t.lastToken=r||i,i},indent:function(n,r){if(!n.tokenize[n.tokenize.length-1].isBase)return e.Pass;var i=r&&r.charAt(0),a=n.context;"statement"!=a.type||p(n.lastToken,!0)||(a=a.prev);var o=i==a.type;return"statement"==a.type?a.indented+("{"==i?0:t.indentUnit):a.align?a.column+(o?0:1):a.indented+(o?0:t.indentUnit)},electricChars:"{}",closeBrackets:{triples:"'\""},fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),e.defineMIME("text/x-groovy","groovy")}(n(4))}}]);
//# sourceMappingURL=58.c9a517c7.chunk.js.map