import{_ as e,c as t,o as r,d as s}from"./app.7e97e3a5.js";const p=JSON.parse('{"title":"Service Modifier","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/service-modifier.md"}'),a={name:"documentation/service-modifier.md"},o=s('<h1 id="service-modifier" tabindex="-1">Service Modifier <a class="header-anchor" href="#service-modifier" aria-hidden="true">#</a></h1><blockquote><p><strong>Formal Definition</strong>: A service modifier is anything that can cause a service&#39;s state to transition to another service state, or cause a change of value in at least one of the service variables in a service state. <br></p></blockquote><p>In practice, service actors such as a <strong>customer</strong>, an <strong>engineer</strong> such as an <strong>SRE engineer</strong>, <strong>another service</strong> that operates on a service, or the <strong>service</strong> acting on itself are all considered service modifiers because they can cause a service state to transition to another service state, or cause a change of value in at least one of the service variables in a service state.</p><p>In other words, service modifiers mutate service variables.</p><p>Using the cloud storage service example, when a user uploads a file, such service will probably transition from <strong>UploadRequested</strong> service state to <strong>UploadInProgress</strong> service state while updating the <strong>totalUploadedBytes</strong> service variable. <br><br></p><blockquote><p><em>Speaking and listening was never a chicken-and-egg situation, the latter must go first to fill the brain.</em>\u200A-\u200AAnonymous</p></blockquote>',6),i=[o];function n(c,d,l,v,g,h){return r(),t("div",null,i)}const f=e(a,[["render",n]]);export{p as __pageData,f as default};