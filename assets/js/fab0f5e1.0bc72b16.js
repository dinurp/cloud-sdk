"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7005],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15925:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],s={title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to Applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},l="Introduction",c={unversionedId:"js/guides/how-to-add-resilience",id:"js/guides/how-to-add-resilience",title:"How to Make Applications more Resilient?",description:"This article describes how you can add a layer of resilience to Applications",source:"@site/docs/js/guides/how-to-add-resilience.mdx",sourceDirName:"js/guides",slug:"/js/guides/how-to-add-resilience",permalink:"/cloud-sdk/docs/js/guides/how-to-add-resilience",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/how-to-add-resilience.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1655382586,formattedLastUpdatedAt:"6/16/2022",frontMatter:{title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to Applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Using the SAP Application Router",permalink:"/cloud-sdk/docs/js/guides/how-to-use-the-approuter"},next:{title:"How to retrieve JWTs",permalink:"/cloud-sdk/docs/js/guides/how-to-retrieve-jwt"}},u={},p=[{value:"Cache",id:"cache",level:2},{value:"Circuit-Breaker",id:"circuit-breaker",level:2},{value:"Retries",id:"retries",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this article we will talk about resilience and what are easy ways to add resilience on top of the SAP Cloud SDK.\nIn contrast to Java, for JavaScript there is no standard framework the handle resilience.\nHence, we have not included resilience features within the SAP Cloud SDK, but leave it up to you which framework you want to use.\nWe have prepared examples on the resilience topic in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/samples/resilience-examples"},"samples repository")," which illustrate the concepts and pick some widely used ",(0,n.kt)("inlineCode",{parentName:"p"},"npm")," packages."),(0,n.kt)("p",null,"There is one exception to this approach.\nWe introduced a circuit-breaker for all calls going to SAP BTP services like XSUAA and the destination service.\nThe circuit breaker is enabled by default to protect the services and you can disable it via the ",(0,n.kt)("inlineCode",{parentName:"p"},"enableCircuitBreaker")," option on the ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," methods."),(0,n.kt)("h2",{id:"cache"},"Cache"),(0,n.kt)("p",null,"This is actually not a classical resilience topic, but could help to improve stability of your application as well.\nThe idea behind a cache is to reduce the load caused by expensive requests.\nExpensive means, that for example you need to do a lot of computation (RAM, CPU, disk I/O) or many calls to external systems.\nInstead of doing the work every time, the method response is stored in the cache after the first execution and taken from there afterwards.\nAssume a load issue where requests time out, because to many requests are send to the system.\nIn such a case, a cache could reduce the number of calls and therefore improve resilience."),(0,n.kt)("p",null,"The introduction of a cache is most effective in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The execution of a method is expense i.e. it consumes a lot of resources"),(0,n.kt)("li",{parentName:"ul"},"The method is a pure function or close to it. This means all information is contained in the function arguments and no hidden state effects the result of the function"),(0,n.kt)("li",{parentName:"ul"},"The function is invoked multiple times for the same arguments or context"),(0,n.kt)("li",{parentName:"ul"},"The system behind the cache has known downtime or limited availability mitigated by the cache")),(0,n.kt)("p",null,"Typically a cache implementation has an interface like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface Cache<T> {\n  get: (key: string) => T;\n  set: (key: string, value: T, expires: TimeStamp) => void;\n  clear: () => void;\n}\n")),(0,n.kt)("p",null,"It provides methods to ",(0,n.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"clear")," the cached entries.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," represents the arguments passed to your cached method.\nIt is used to set and get a value from the cache."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If your cached method relies on authentication/authorization like an HTTP call, be sure your cache preserves user isolation.\nThis means that the cache key must include the user making the request.\nAlso ensure that it is not possible to manipulate the cache key generation to retrieve results related to other users.\nThe same rules apply if you create a multi-tenant application with respect to tenant isolation."))),(0,n.kt)("p",null,"Note that the ",(0,n.kt)("a",{parentName:"p",href:"https://nodeshift.dev/opossum/"},"opossum")," circuit-breaker also provides a cache option."),(0,n.kt)("h2",{id:"circuit-breaker"},"Circuit-Breaker"),(0,n.kt)("p",null,"In electronics, a circuit-breaker is a safety device preventing your wires to melt in case too much power is consumed.\nIn software development, the circuit-breaker does not protect actual wires from melting but resources from overloading, while helping them recover.\nYou should include a circuit-breaker if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The resource is essential in your infrastructure and should be protected."),(0,n.kt)("li",{parentName:"ul"},"The resource reacts poorly to heavy load."),(0,n.kt)("li",{parentName:"ul"},"Your application creates a high number of requests.")),(0,n.kt)("p",null,"Circuit-breakers are typically used for HTTP requests and behave in the following way:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The circuit-breaker monitors the HTTP requests and tracks failing and successful requests."),(0,n.kt)("li",{parentName:"ul"},"The circuit-breaker calculates an average percentage of failing requests."),(0,n.kt)("li",{parentName:"ul"},"If this average is above some threshold the breaker opens."),(0,n.kt)("li",{parentName:"ul"},"From this moment on, requests are immediately blocked and not executed.\nThis prevents the system from getting too many requests if it is in an unhealthy state."),(0,n.kt)("li",{parentName:"ul"},"After a reset time the breaker closes and requests can reach the target system again.")),(0,n.kt)("p",null,"Many circuit-breakers do not go into a complete closed state, but go into a half-open state..\nIn this state every failing request will directly cause the breaker to open again.\nThe reason for this is, that you do not overburden systems in the recovery phase."),(0,n.kt)("p",null,"Typical parameters to configure a circuit-breaker are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"failure threshold": Failure rate above which the circuit-breaker will open.'),(0,n.kt)("li",{parentName:"ul"},'"reset timeout": Time after which the circuit-breaker will close.'),(0,n.kt)("li",{parentName:"ul"},"Fallback: Some alternative action you want to perform when the breaker is open."),(0,n.kt)("li",{parentName:"ul"},"Options to calculate the failure rate.")),(0,n.kt)("p",null,"You can find an example using the ",(0,n.kt)("a",{parentName:"p",href:"https://nodeshift.dev/opossum/"},"opossum")," circuit-breaker ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/samples/resilience-examples"},"here"),"."),(0,n.kt)("h2",{id:"retries"},"Retries"),(0,n.kt)("p",null,"An other approach to add resilience to your application is to retry failed requests.\nor retries there are libraries available like ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/async-retry"},"async-retry")," which make every asynchronous function perform some retries if they do not resolve.\nHowever, this pattern needs to be used with caution, because it is often mitigating a problem which should be solved properly.\nAlso, if something fails consistently, it does not help to press the same button multiple times.\nYou should consider some rules for implementing retries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The error should be the exception not the default."),(0,n.kt)("li",{parentName:"ul"},"The error should happen randomly so a second call has a high likelihood of giving something."),(0,n.kt)("li",{parentName:"ul"},"The source of the error is out of your domain to fix."),(0,n.kt)("li",{parentName:"ul"},"Consistent errors should not trigger a retry. For example an HTTP request failing with 401 should not trigger a retry because the user is simply unauthorized."),(0,n.kt)("li",{parentName:"ul"},"The number of retires should be limited to a low digit number and there should be some appropriate waiting time between retries.")),(0,n.kt)("p",null,"Typical options for a retry library are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Retries: How many attempts should be done."),(0,n.kt)("li",{parentName:"ul"},'"minimum timeout": initial waiting time for the first retry'),(0,n.kt)("li",{parentName:"ul"},'"maximum timeout": What is the maximal time for all retires to execute.'),(0,n.kt)("li",{parentName:"ul"},"Distribution: How the retires are distributes over time.\nAn exponential waiting time is a good option.\nAlso adding some random time deviation is distributing the load of parallel retries."),(0,n.kt)("li",{parentName:"ul"},"Bail: An option to stop the retry for certain failure cases is useful in many cases.")),(0,n.kt)("p",null,"You can find an example using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/async-retry"},"async-retry")," library ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/samples/resilience-examples"},"here"),"."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you use retries together with a circuit-breaker choose the options for the two accordingly.\nThe waiting time between requests of the retry should be large enough to not trigger the circuit-breaker to open."))))}h.isMDXComponent=!0}}]);