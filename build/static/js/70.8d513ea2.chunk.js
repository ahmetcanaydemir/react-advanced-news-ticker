(this["webpackJsonpreact-advanced-news-ticker"]=this["webpackJsonpreact-advanced-news-ticker"]||[]).push([[70],{98:function(e,r,o){!function(e){"use strict";e.defineMode("mllike",(function(r,o){var t={as:"keyword",do:"keyword",else:"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword",if:"keyword",in:"keyword",include:"keyword",let:"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword",while:"keyword",with:"keyword"},n=o.extraWords||{};for(var i in n)n.hasOwnProperty(i)&&(t[i]=o.extraWords[i]);var d=[];for(var k in t)d.push(k);function w(e,r){var n=e.next();if('"'===n)return r.tokenize=y,r.tokenize(e,r);if("{"===n&&e.eat("|"))return r.longString=!0,r.tokenize=a,r.tokenize(e,r);if("("===n&&e.eat("*"))return r.commentLevel++,r.tokenize=l,r.tokenize(e,r);if("~"===n||"?"===n)return e.eatWhile(/\w/),"variable-2";if("`"===n)return e.eatWhile(/\w/),"quote";if("/"===n&&o.slashComments&&e.eat("/"))return e.skipToEnd(),"comment";if(/\d/.test(n))return"0"===n&&e.eat(/[bB]/)&&e.eatWhile(/[01]/),"0"===n&&e.eat(/[xX]/)&&e.eatWhile(/[0-9a-fA-F]/),"0"===n&&e.eat(/[oO]/)?e.eatWhile(/[0-7]/):(e.eatWhile(/[\d_]/),e.eat(".")&&e.eatWhile(/[\d]/),e.eat(/[eE]/)&&e.eatWhile(/[\d\-+]/)),"number";if(/[+\-*&%=<>!?|@\.~:]/.test(n))return"operator";if(/[\w\xa1-\uffff]/.test(n)){e.eatWhile(/[\w\xa1-\uffff]/);var i=e.current();return t.hasOwnProperty(i)?t[i]:"variable"}return null}function y(e,r){for(var o,t=!1,n=!1;null!=(o=e.next());){if('"'===o&&!n){t=!0;break}n=!n&&"\\"===o}return t&&!n&&(r.tokenize=w),"string"}function l(e,r){for(var o,t;r.commentLevel>0&&null!=(t=e.next());)"("===o&&"*"===t&&r.commentLevel++,"*"===o&&")"===t&&r.commentLevel--,o=t;return r.commentLevel<=0&&(r.tokenize=w),"comment"}function a(e,r){for(var o,t;r.longString&&null!=(t=e.next());)"|"===o&&"}"===t&&(r.longString=!1),o=t;return r.longString||(r.tokenize=w),"string"}return e.registerHelper("hintWords","mllike",d),{startState:function(){return{tokenize:w,commentLevel:0,longString:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:o.slashComments?"//":null}})),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{and:"keyword",assert:"keyword",begin:"keyword",class:"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword",function:"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword",new:"keyword",nonrec:"keyword",object:"keyword",private:"keyword",sig:"keyword",to:"keyword",try:"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin",true:"builtin",false:"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",int:"type",float:"type",bool:"type",char:"type",string:"type",unit:"type",List:"builtin"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",assert:"keyword",base:"keyword",begin:"keyword",class:"keyword",default:"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword",finally:"keyword",for:"keyword",function:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword","return!":"keyword",return:"keyword",select:"keyword",static:"keyword",to:"keyword",try:"keyword",upcast:"keyword","use!":"keyword",use:"keyword",void:"keyword",when:"keyword","yield!":"keyword",yield:"keyword",atomic:"keyword",break:"keyword",checked:"keyword",component:"keyword",const:"keyword",constraint:"keyword",constructor:"keyword",continue:"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword",protected:"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword",volatile:"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin",int:"builtin",string:"builtin",not:"builtin",true:"builtin",false:"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),e.defineMIME("text/x-sml",{name:"mllike",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword",case:"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword",true:"keyword",false:"keyword",int:"builtin",real:"builtin",string:"builtin",char:"builtin",bool:"builtin"},slashComments:!0})}(o(4))}}]);
//# sourceMappingURL=70.8d513ea2.chunk.js.map