"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1073],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return o?a.createElement(h,r(r({ref:t},c),{},{components:o})):a.createElement(h,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},89482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));o(44996);const i={id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,l={unversionedId:"overview-cloud-sdk",id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/about.mdx",sourceDirName:".",slug:"/overview-cloud-sdk",permalink:"/cloud-sdk/docs/overview/overview-cloud-sdk",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/about.mdx",tags:[],version:"current",frontMatter:{id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsCommonSidebar",next:{title:"Feature Matrix",permalink:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"License",id:"license",level:2},{value:"Products Using the SAP Cloud SDK",id:"products-using-the-sap-cloud-sdk",level:2},{value:"SAP Cloud Application Programming Model",id:"sap-cloud-application-programming-model",level:2},{value:"SAP Cloud SDK &amp; SAP Cloud Application Programming Model",id:"sap-cloud-sdk--sap-cloud-application-programming-model",level:3}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The SAP Cloud SDK is a set of libraries and tools for developers to build cloud-native applications on the SAP Business Technology Platform (SAP BTP).\nIt abstracts the complexities of the SAP BTP, thus allowing you to focus on the application's business logic.\nThe SAP Cloud SDK is available in two flavors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/java/overview-cloud-sdk-for-java"},"SAP Cloud SDK for Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/js/overview-cloud-sdk-for-javascript"},"SAP Cloud SDK for JavaScript"))),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simplify development using connectivity abstractions for SAP BTP: handling destinations, proxies, and authentication for Cloud and On-premise systems"),(0,n.kt)("li",{parentName:"ul"},"Prevent cascading failures through common resiliency patterns such as retry and circuit-breaker"),(0,n.kt)("li",{parentName:"ul"},"Improve application performance through configurable and tenant-aware caching solutions"),(0,n.kt)("li",{parentName:"ul"},"Access application logs using standard logging frameworks integrations"),(0,n.kt)("li",{parentName:"ul"},"Build multi-tenant applications on supported environments like Cloud Foundry, Kubernetes and Kyma"),(0,n.kt)("li",{parentName:"ul"},"Generate typed clients for OData and OpenAPI services that integrate seamlessly with the above features")),(0,n.kt)("p",null,"For a complete overview of supported features, check out the ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"},"feature matrix"),"."),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"The SAP Cloud SDK for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"JavaScript / TypeScript")," is open-source and available under the Apache 2.0 license.\nThe SAP Cloud SDK for Java is closed source and the libraries are distributed under the ",(0,n.kt)("a",{parentName:"p",href:"https://tools.eu1.hana.ondemand.com/developer-license-3_1.txt"},"SAP Developer License"),"."),(0,n.kt)("h2",{id:"products-using-the-sap-cloud-sdk"},"Products Using the SAP Cloud SDK"),(0,n.kt)("p",null,"A few prominent products using the SAP Cloud SDK are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.sap.com/en/alm.html"},"SAP Cloud Application Lifecycle Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/products/real-estate-facilities-mgmt-cloud.html"},"SAP Cloud for Real Estate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/germany/products/project-portfolio-management.html"},"SAP Portfolio and Project Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US"},"SAP Business Technology Platform Workflow"))),(0,n.kt)("h2",{id:"sap-cloud-application-programming-model"},"SAP Cloud Application Programming Model"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model (CAP)")," is a framework of languages, libraries, and tools for building enterprise-grade services and applications.\nWith CAP, you can model an application's business domains and services in Core Data Services (CDS), add the business logic and automatically expose it via service APIs.\nCAP is recommended for building APIs (OData, REST, Messaging) and consuming and emitting Enterprise Messages for SAP S/4HANA."),(0,n.kt)("h3",{id:"sap-cloud-sdk--sap-cloud-application-programming-model"},"SAP Cloud SDK & SAP Cloud Application Programming Model"),(0,n.kt)("p",null,"CAP plays on the API and service publishing side, while SAP Cloud SDK deals with API consumption and deployment of applications to SAP BTP.\nThe SAP Cloud SDK is also used internally by CAP for consuming remote services of SAP and other solutions.\nIf you do not interact with other services or SAP solutions, you may not need the capabilities of the SAP Cloud SDK."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cap.cloud.sap/docs/assets/overview.png",alt:"CAP project diagram"})),(0,n.kt)("p",null,"Depending on your use case, you can use SAP Cloud SDK and SAP Cloud Application Programming Model individually or in combination."))}u.isMDXComponent=!0}}]);