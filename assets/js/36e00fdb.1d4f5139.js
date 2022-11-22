"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||n;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},27104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(87462),a=(r(67294),r(3905));const n={id:"resilience",title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},o="Introduction",s={unversionedId:"guides/resilience",id:"guides/resilience",title:"How to Make Applications more Resilient?",description:"This article describes how you can add a layer of resilience to applications",source:"@site/docs-js/guides/how-to-add-resilience.mdx",sourceDirName:"guides",slug:"/guides/resilience",permalink:"/cloud-sdk/docs/js/v3/guides/resilience",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/how-to-add-resilience.mdx",tags:[],version:"current",frontMatter:{id:"resilience",title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Using the SAP Application Router",permalink:"/cloud-sdk/docs/js/v3/guides/approuter"},next:{title:"How to retrieve JWTs",permalink:"/cloud-sdk/docs/js/v3/guides/retrieve-jwt"}},l={},c=[{value:"Cache",id:"cache",level:2},{value:"Circuit-Breaker",id:"circuit-breaker",level:2},{value:"Retries",id:"retries",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this article, we will talk about resilience and how to add resilience when using the SAP Cloud SDK.\nIn contrast to Java, for JavaScript, there is no standard framework to handle resilience.\nHence, we have not included resilience features within the SAP Cloud SDK, but leave it up to you which framework you want to use.\nWe have prepared examples on the resilience topic in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples"},"samples repository")," which illustrate the concepts and pick some widely used ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," packages."),(0,a.kt)("p",null,"There is one exception to this approach.\nWe introduced a circuit-breaker for all calls going to SAP BTP services like XSUAA and the destination service.\nThe circuit breaker is enabled by default to protect the services and you can disable it via the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableCircuitBreaker")," option on the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," methods."),(0,a.kt)("h2",{id:"cache"},"Cache"),(0,a.kt)("p",null,"This is usually not a resilience topic, but could help to improve the stability of your application.\nThe idea behind a cache is to reduce the load caused by expensive requests.\nExpensive means, for example, that you need to do a lot of computation (RAM, CPU, disk I/O) or many calls to external systems.\nInstead of doing the work every time, the method response is stored in the cache after the first execution and taken from there afterwards.\nAssume a load issue where requests time out, because too many requests are sent to the system.\nIn such a case, a cache could reduce the number of calls and therefore improve resilience."),(0,a.kt)("p",null,"The introduction of a cache is most effective in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The execution of a method consumes a lot of resources"),(0,a.kt)("li",{parentName:"ul"},"The method is a pure function, meaning the function arguments contain all the information and no hidden state affects the result of the function"),(0,a.kt)("li",{parentName:"ul"},"The function is invoked multiple times for the same arguments or context"),(0,a.kt)("li",{parentName:"ul"},"The system behind the cache has known downtime or limited availability mitigated by the cache")),(0,a.kt)("p",null,"Typically, a cache implementation has an interface like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Cache<T> {\n  get: (key: string) => T;\n  set: (key: string, value: T, expires: TimeStamp) => void;\n  clear: () => void;\n}\n")),(0,a.kt)("p",null,"It provides methods to ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," the cached entries.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," represents the arguments passed to your cached method.\nIt is used to set and get a value from the cache."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your cached method relies on authentication/authorization like an HTTP call, be sure your cache preserves user isolation.\nThis means that the cache key must include the user making the request.\nAlso, ensure that it is impossible to manipulate the cache key generation to retrieve results related to other users.\nThe same rules apply if you create a multi-tenant application with respect to tenant isolation.")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("a",{parentName:"p",href:"https://nodeshift.dev/opossum/"},"opossum")," circuit-breaker also provides a cache option."),(0,a.kt)("h2",{id:"circuit-breaker"},"Circuit-Breaker"),(0,a.kt)("p",null,"In electronics, a circuit breaker is a safety device that prevents your wires from melting in case of too much power consumption.\nIn software development, the circuit-breaker does not protect actual wires from melting but resources from overloading while helping them recover.\nYou should include a circuit-breaker if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The resource is essential in your infrastructure and should be protected."),(0,a.kt)("li",{parentName:"ul"},"The resource reacts poorly to heavy load."),(0,a.kt)("li",{parentName:"ul"},"Your application creates a high number of requests.")),(0,a.kt)("p",null,"Circuit-breakers are typically used for HTTP requests and behave in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The circuit-breaker monitors the HTTP requests and tracks failing and successful requests."),(0,a.kt)("li",{parentName:"ul"},"The circuit-breaker calculates an average percentage of failing requests."),(0,a.kt)("li",{parentName:"ul"},"If this average is above some threshold, the breaker opens."),(0,a.kt)("li",{parentName:"ul"},"From this moment on, requests are immediately blocked and not executed.\nThis prevents the system from getting too many requests if it is in an unhealthy state."),(0,a.kt)("li",{parentName:"ul"},"After a reset time the breaker closes and requests can reach the target system again.")),(0,a.kt)("p",null,"Many circuit breakers do not go into a completely closed state but go into a half-open state.\nIn this state, every failing request will directly cause the breaker to open again.\nThe reason for this is, that you do not overburden systems in the recovery phase."),(0,a.kt)("p",null,"Typical parameters to configure a circuit-breaker are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"failure threshold": Failure rate above which the circuit-breaker will open.'),(0,a.kt)("li",{parentName:"ul"},'"reset timeout": The time after which the circuit-breaker will close.'),(0,a.kt)("li",{parentName:"ul"},"Fallback: Some alternative actions you want to perform when the breaker is open."),(0,a.kt)("li",{parentName:"ul"},"Options to calculate the failure rate.")),(0,a.kt)("p",null,"You can find an example using the ",(0,a.kt)("a",{parentName:"p",href:"https://nodeshift.dev/opossum/"},"opossum")," circuit-breaker ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples"},"here"),"."),(0,a.kt)("h2",{id:"retries"},"Retries"),(0,a.kt)("p",null,"Another approach to add resilience to your application is to retry failed requests.\nFor retries, there are libraries available like ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/async-retry"},"async-retry")," which make every asynchronous function perform some retries if they do not resolve.\nHowever, this pattern needs to be used with caution, because it is often mitigating a problem that should be solved properly.\nAlso, if something fails consistently, it does not help to press the same button multiple times.\nYou should consider some rules for implementing retries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The error should be the exception, not the default."),(0,a.kt)("li",{parentName:"ul"},"The error should happen randomly so a second call has a high likelihood of giving something."),(0,a.kt)("li",{parentName:"ul"},"The source of the error is out of your domain to fix."),(0,a.kt)("li",{parentName:"ul"},"Consistent errors should not trigger a retry.\nFor example, an HTTP request failing with 401 should not trigger a retry because the user is unauthorized."),(0,a.kt)("li",{parentName:"ul"},"The number of retries should be limited to a low digit number.\nThere should be some appropriate waiting time between retries.")),(0,a.kt)("p",null,"Typical options for a retry library are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Retries: How many attempts should be made."),(0,a.kt)("li",{parentName:"ul"},'"minimum timeout": Initial waiting time for the first retry.'),(0,a.kt)("li",{parentName:"ul"},'"maximum timeout": What is the maximal time for all retries to execute.'),(0,a.kt)("li",{parentName:"ul"},"Distribution: How the retries are distributed over time.\nAn exponential waiting time is a good option.\nAlso, adding some random time deviation is distributing the load of parallel retries."),(0,a.kt)("li",{parentName:"ul"},"Bail: An option to stop the retry for certain failure cases is useful in many cases.")),(0,a.kt)("p",null,"You can find an example using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/async-retry"},"async-retry")," library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples"},"here"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you use retries together with a circuit-breaker, choose the options for the two accordingly.\nThe waiting time between requests of the retry should be large enough not to trigger the circuit-breaker to open.")))}p.isMDXComponent=!0}}]);