import{_ as e,c as i,o as t,d as a}from"./app.5ad39f65.js";const u=JSON.parse('{"title":"Conventions","description":"","frontmatter":{},"headers":[{"level":3,"title":"Writing service names","slug":"writing-service-names","link":"#writing-service-names","children":[]},{"level":3,"title":"Practical service data format","slug":"practical-service-data-format","link":"#practical-service-data-format","children":[]},{"level":3,"title":"Choice of Service Reliability Perspective","slug":"choice-of-service-reliability-perspective","link":"#choice-of-service-reliability-perspective","children":[]}],"relativePath":"documentation/conventions.md"}'),r={name:"documentation/conventions.md"},s=a('<h1 id="conventions" tabindex="-1">Conventions <a class="header-anchor" href="#conventions" aria-hidden="true">#</a></h1><p>Throughout this website, global conventions are used to encourage consistency in the documentation. The following are these conventions.</p><h3 id="writing-service-names" tabindex="-1">Writing service names <a class="header-anchor" href="#writing-service-names" aria-hidden="true">#</a></h3><p>A service state name is written in <em>camelCase</em> form and is an identifier that must be descriptive to a service state such as <strong>UploadInProgress</strong>, <strong>UploadError</strong>, or <strong>UploadFinalizing</strong>. Avoid service names that only describe a service state variable such as <strong>CPUUsage</strong>.</p><h3 id="practical-service-data-format" tabindex="-1">Practical service data format <a class="header-anchor" href="#practical-service-data-format" aria-hidden="true">#</a></h3><p>Practical examples for service data such as service, service states, etc are presented in YAML format for usability and machine interoperability purposes.</p><h3 id="choice-of-service-reliability-perspective" tabindex="-1">Choice of Service Reliability Perspective <a class="header-anchor" href="#choice-of-service-reliability-perspective" aria-hidden="true">#</a></h3><p>Most of the time, we choose the service reliability perspective of a typical human end user or &quot;the customer&quot; as a business would call it. The reason for this is that this user&#39;s service requirements are the ultimate reason why software services exist and consequently why service reliability is necessary.</p>',8),n=[s];function c(o,l,h,d,v,p){return t(),i("div",null,n)}const f=e(r,[["render",c]]);export{u as __pageData,f as default};