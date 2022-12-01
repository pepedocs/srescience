import{_ as a,c as s,o as i,a as e,b as t}from"./app.7e97e3a5.js";const $=JSON.parse('{"title":"Service Reliability","description":"","frontmatter":{},"headers":[{"level":2,"title":"Axiom 5: Tr_Expected","slug":"axiom-5-tr-expected","link":"#axiom-5-tr-expected","children":[]},{"level":2,"title":"Tr_Actual","slug":"tr-actual","link":"#tr-actual","children":[]}],"relativePath":"documentation/service-reliability.md"}'),r={name:"documentation/service-reliability.md"},n=e("h1",{id:"service-reliability",tabindex:"-1"},[t("Service Reliability "),e("a",{class:"header-anchor",href:"#service-reliability","aria-hidden":"true"},"#")],-1),o=e("p",null,"Before we can define service reliability we have to define first a few other building blocks.",-1),c=e("h2",{id:"axiom-5-tr-expected",tabindex:"-1"},[t("Axiom 5: Tr_Expected "),e("a",{class:"header-anchor",href:"#axiom-5-tr-expected","aria-hidden":"true"},"#")],-1),l=e("p",null,"A set of service state transitions that are expected to happen during a service\u2019s lifetime.",-1),d=e("p",{"TrE\u2080,":"","TrE\u2081,\u2026,TrE\u1D62":""},[e("strong",null,"Tr_Expected"),t(" =")],-1),h=e("p",null,"Each service state transition TrE\u1D62 is a triple composed of the start state, end state, and the input which when consumed by the start state will cause it to transition to the end state.",-1),_=e("p",{"TrE_StartState\u1D62,":"","TrE_EndState\u1D62,":"","TrE_Input\u1D62":""},[e("strong",null,"TrE\u1D62"),t(" =")],-1),p=e("p",null,"In practice, these expected service state transitions are the expected behavior of any aspect of a service due to how it was designed as a software service solving a particular business problem. For example, an online banking website must enable its users to log in (start state) using a login form, and when the login was successful it must present the user with a home page (end state) that contains a summary of his or her transactions.",-1),u=e("h2",{id:"tr-actual",tabindex:"-1"},[t("Tr_Actual "),e("a",{class:"header-anchor",href:"#tr-actual","aria-hidden":"true"},"#")],-1),m=e("p",null,"The set of service state transitions that have happened during a service\u2019s lifetime.",-1),f=e("p",{"TrA\u2080,":"","TrA\u2081,\u2026,TrA\u1D62":""},[e("strong",null,"Tr_Actual"),t(" =")],-1),T=e("p",{"TrA_Instance\u2080,":"","TrA_Instance\u2081,":"","\u2026,":"","TrA_Instance\u1D62":""},[e("strong",null,"TrA\u1D62"),t(" =")],-1),v=e("p",null,"Tr_Actual\u2019s member TrA\u1D62 is a set of service state transitions that have happened in a service\u2019s lifetime. Each of these state transitions is called a TrA_Instance.",-1),x=e("p",null,[e("strong",null,"Theorem 1")],-1),b=e("p",null,"TrE\u1D62 expects compliance for every TrA_Instance\u1D62. Below is the compliance function that will be defined in further paragraphs.",-1),g=[n,o,c,l,d,h,_,p,u,m,f,T,v,x,b];function A(E,w,y,I,k,S){return i(),s("div",null,g)}const N=a(r,[["render",A]]);export{$ as __pageData,N as default};