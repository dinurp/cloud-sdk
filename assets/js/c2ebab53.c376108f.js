"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7942],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),v=n,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79881:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},l=void 0,d={unversionedId:"js/features/odata/overview",id:"js/features/odata/overview",title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",source:"@site/docs/js/features/odata/overview.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/overview",permalink:"/cloud-sdk/docs/js/features/odata/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/overview.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"}},c={},p=[{value:"What OData Protocol Versions Are Supported?",id:"what-odata-protocol-versions-are-supported",level:2},{value:"What Is OData?",id:"what-is-odata",level:2},{value:"Pregenerated OData Clients",id:"pregenerated-odata-clients",level:2},{value:"Links",id:"links",level:3},{value:"Legal",id:"legal",level:3},{value:"Code Generator",id:"code-generator",level:2},{value:"Connectivity",id:"connectivity",level:2}],u={toc:p};function v(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-odata-protocol-versions-are-supported"},"What OData Protocol Versions Are Supported?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"OData protocol version"),(0,o.kt)("th",{parentName:"tr",align:null},"SAP Cloud SDK for JavaScript"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"},"OData v2")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript"},"OData v4")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,o.kt)("h2",{id:"what-is-odata"},"What Is OData?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),(0,o.kt)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with more and improved functionality.\nFull details on the standards are to be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"documentation"),"."),(0,o.kt)("h2",{id:"pregenerated-odata-clients"},"Pregenerated OData Clients"),(0,o.kt)("p",null,"The SAP Cloud SDK includes pregenerated JavaScript/TypeScript clients for all OData-based SAP S/4HANA Cloud and On-Premise services.\nThose clients simplify service consumption by exposing a typed and fluent API.\nThis API allows you to explore and autocomplete requests against the SAP S/4HANA services."),(0,o.kt)("p",null,"There are more than 400 pregenerated clients with the following naming patterns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SAP S/4HANA Cloud: ",(0,o.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-vdm-<service name>-service")),(0,o.kt)("li",{parentName:"ul"},"SAP S/4HANA On-Premise: ",(0,o.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-op-vdm-<service name>-service"))),(0,o.kt)("admonition",{title:"Virtual Data Model (VDM)",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Sometimes the pregenerated clients for SAP S/4HANA are referred to as ",(0,o.kt)("em",{parentName:"p"},"Virtual Data Model (VDM)"),".\nThis is why the naming pattern for the pregenerated clients contains ",(0,o.kt)("inlineCode",{parentName:"p"},"vdm")," as well.")),(0,o.kt)("h3",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/js/features/odata/execute-odata-request"},"How to use the clients")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"Release Notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com/products/SAPS4HANACloud/overview"},"SAP S/4HANA Cloud on the SAP Business Hub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com/products/SAPS4HANA/overview"},"SAP S/4HANA On-Premise on the SAP Business Hub"))),(0,o.kt)("h3",{id:"legal"},"Legal"),(0,o.kt)("p",null,"All SAP Cloud SDK's pregenerated client libraries are distributed under the ",(0,o.kt)("a",{parentName:"p",href:"https://tools.eu1.hana.ondemand.com/developer-license-3_1.txt"},"SAP developer license agreement"),".\nThis limits the use of the pregenerated clients to development purposes only."),(0,o.kt)("h2",{id:"code-generator"},"Code Generator"),(0,o.kt)("p",null,"If you want to use an OData service, that has no pregenerated client, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},"client generator")," to generate your own client.\nYou can do it for any service either developed by yourself, provided by SAP, or by other 3rd parties."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service definition usually comes in form of the ",(0,o.kt)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it if you have access to the service is by navigating to the ",(0,o.kt)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any 3rd party service or a service that you have built on your own."),(0,o.kt)("li",{parentName:"ul"},"You can invoke the code generator via our command-line interface (CLI).")),(0,o.kt)("h2",{id:"connectivity"},"Connectivity"),(0,o.kt)("p",null,"We simplify connectivity to SAP-enabled OData services via type-safe abstractions over ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/destination"},"Destinations"),", Authentication, and some other related concepts."))}v.isMDXComponent=!0}}]);