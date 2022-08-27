import{_ as e,c as a,o as i,d as t}from"./app.53feaaf7.js";const _=JSON.parse('{"title":"Service Variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Axioms","slug":"axioms","link":"#axioms","children":[]}],"relativePath":"documentation/service-variable.md"}'),r={name:"documentation/service-variable.md"},s=t('<h1 id="service-variable" tabindex="-1">Service Variable <a class="header-anchor" href="#service-variable" aria-hidden="true">#</a></h1><blockquote><p><strong>Formal Definition</strong>: A service variable (Sv) is a mutable attribute of a service state where its values are said to be <a href="./service-variable-acceptability.html">acceptable</a> by a service state.</p><ul><li><p><code>Sv = { x | A(x, Sv) == 1 }</code></p></li><li><p><code>A(x, Sv) = Acceptability function</code></p></li></ul></blockquote><h2 id="axioms" tabindex="-1">Axioms <a class="header-anchor" href="#axioms" aria-hidden="true">#</a></h2><ol><li><p>A service variable&#39;s value can change within a service state.</p></li><li><p>A change in a service variable&#39;s value may cause a service state to transition to another service state.</p></li><li><p>A service variable can be <strong>Observable</strong>, <strong>Partially Observable</strong>, or <strong>Hidden</strong>. <br></p></li></ol><p>In practice, service variables are what <a href="./monitoring.html">monitoring</a> observes to infer a service state. Usually, a combination of these service variables&#39; values is enough to infer that a service state is active or inactive. <br></p>',5),o=[s];function c(l,n,v,b,d,h){return i(),a("div",null,o)}const m=e(r,[["render",c]]);export{_ as __pageData,m as default};
