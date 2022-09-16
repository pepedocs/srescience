import{_ as e,c as a,o as r,d as i}from"./app.411b39d2.js";const p=JSON.parse('{"title":"Service Variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Observable, Partially Observable, Hidden","slug":"observable-partially-observable-hidden","link":"#observable-partially-observable-hidden","children":[]}],"relativePath":"documentation/service-variable.md"}'),t={name:"documentation/service-variable.md"},s=i('<h1 id="service-variable" tabindex="-1">Service Variable <a class="header-anchor" href="#service-variable" aria-hidden="true">#</a></h1><blockquote><p><strong>Formal Definition</strong>: A service variable is a mutable attribute of a service state.</p></blockquote><h2 id="observable-partially-observable-hidden" tabindex="-1">Observable, Partially Observable, Hidden <a class="header-anchor" href="#observable-partially-observable-hidden" aria-hidden="true">#</a></h2><p>A service variable can be <strong>Observable</strong> which means it can be observed all the time by a service observer, <strong>Partially Observable</strong> if there are instances where it is impossible to observe it by a service observer, or <strong>Hidden</strong> if it is impossible to observe it by a service observer in all of its instances in a service state. <br></p><p>In practice, service variables are what <a href="./monitoring.html">monitoring</a> observes to infer a service state. Usually, a combination of these service variables&#39; values is enough to infer that a service state is active or inactive. <br></p>',5),o=[s];function l(n,b,c,v,d,h){return r(),a("div",null,o)}const m=e(t,[["render",l]]);export{p as __pageData,m as default};
