(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=n(2);n(3);function s(e){return r.a.createElement("div",{className:"firstbody"},r.a.createElement("div",{className:"firstpage"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/390/390933.png"}),r.a.createElement("h1",null,"Quizzical"),r.a.createElement("h3",null,"Quiz for the fun"),r.a.createElement("button",{onClick:e.toggle},"Start Quiz")))}var u=n(10),l=n(1);function m(e){if(1===e.stage)return r.a.createElement("div",null,r.a.createElement("button",{className:!0===e.isSelected?"single-button-blue":"single-button-white",onClick:e.toggleSelected},e.answer));var t=1;return!0===e.isSelected?t=!0===e.isCorrect?2:3:!0===e.isCorrect&&(t=2),r.a.createElement("div",null,r.a.createElement("button",{className:1===t?"single-button-white":2===t?"correct-button":"wrong-button"},e.answer))}var d=n(6),f=n(9),b=n.n(f);function g(e){var t=r.a.useState([]),n=Object(o.a)(t,2),a=(n[0],n[1],r.a.useState([])),c=Object(o.a)(a,2),i=c[0],s=c[1],f=r.a.useState(1),g=Object(o.a)(f,2),p=g[0],E=g[1];function v(e){return i.map(function(t){if(t.id===e)return t.answers.map(function(e){return r.a.createElement(m,{id:e.id,answer:e.answer,stage:p,isCorrect:e.isCorrect,isSelected:e.isSelected,toggleSelected:function(){return n=e.id,a=t.id,void s(function(e){return e.map(function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:e.answers.map(function(t){return t.id===n?Object(l.a)(Object(l.a)({},t),{},{isSelected:!t.isSelected}):t.id!==n&&e.id===a?Object(l.a)(Object(l.a)({},t),{},{isSelected:!1}):t})})})});var n,a}})})})}r.a.useEffect(function(){fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple").then(function(e){return e.json()}).then(function(e){var t=e.results.map(function(e){return{question:e.question,difficulty:e.difficulty,category:e.category,id:Object(d.a)(),answers:[].concat(Object(u.a)(e.incorrect_answers.map(function(e){return{answer:e,isCorrect:!1,isSelected:!1,id:Object(d.a)()}})),[{answer:e.correct_answer,isCorrect:!0,isSelected:!1,id:Object(d.a)()}]).sort(function(){return Math.random()-.5})}});s(t)})},[]);var w=i.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"question"},e.question),r.a.createElement("div",{className:"buttons-set"},v(e.id)))});if(1===p)return r.a.createElement("div",{className:"secondpage"},w,r.a.createElement("div",{className:"checkbutton"},r.a.createElement("button",{onClick:function(){E(2)}},"Check answers")));var S=function(){var e=0;return i.map(function(t){t.answers.map(function(t){!0===t.isCorrect&&!0===t.isSelected&&e++})}),e}();return r.a.createElement("div",{className:"secondpage"},5===S&&r.a.createElement(b.a,null),w,r.a.createElement("div",{className:"footer"},r.a.createElement("h2",{className:"score"},"You Scored ",S,"/5 Correct Answers"),r.a.createElement("button",{onClick:e.toggle},"Play Again")))}function p(){var e=r.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];function c(){a(function(e){return!e})}return r.a.createElement("div",null,!0===n?r.a.createElement(g,{toggle:function(){return c()}}):r.a.createElement(s,{toggle:function(){return c()}}))}i.a.render(r.a.createElement(p,null),document.getElementById("root"))},3:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.02ea0acc.chunk.js.map