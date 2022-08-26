import{_ as e,c as a,o as r,d as i}from"./app.316cf983.js";const p=JSON.parse('{"title":"Service Variable","description":"","frontmatter":{},"headers":[{"level":3,"title":"Axioms","slug":"axioms"}],"relativePath":"documentation/service-variable.md"}'),t={name:"documentation/service-variable.md"},s=i('<h1 id="service-variable" tabindex="-1">Service Variable <a class="header-anchor" href="#service-variable" aria-hidden="true">#</a></h1><blockquote><p><strong>Formal Definition</strong>: A service variable is a feature of a service state.</p></blockquote><h3 id="axioms" tabindex="-1">Axioms <a class="header-anchor" href="#axioms" aria-hidden="true">#</a></h3><ol><li><p>A service variable&#39;s value can change within a particular state.</p></li><li><p>A service variable can be <strong>Observable</strong>, <strong>Partially Observable</strong>, or <strong>Hidden</strong>. <br></p></li></ol><p>In practice, service variables are what <a href="./monitoring.html">monitoring</a> observes to infer a particular service state. Usually, a pattern of these service variables&#39; values or behavior is enough to infer a service state. <br></p>',5),o=[s];function n(c,l,v,d,_,b){return r(),a("div",null,o)}const m=e(t,[["render",n]]);export{p as __pageData,m as default};