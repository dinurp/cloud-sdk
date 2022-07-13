"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4578,450,6355,9197,8847,2262],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35364:function(e,t,n){n.d(t,{Ol:function(){return l},WD:function(){return p},Xc:function(){return m},nc:function(){return d},zl:function(){return c}});var a=n(67294),r=n(9037),o=n(75847),i=n(82182),s=n(47406),u=n(75668);function l(){return a.createElement(r.default,null)}function d(){return a.createElement(o.default,null)}function p(){return a.createElement(i.default,null)}function c(){return a.createElement(s.default,null)}function m(){return a.createElement(u.default,null)}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),u=n(7094),l=n(12466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,f=e.values,y=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var q=(0,u.U)(),N=q.tabGroupChoices,w=q.setTabGroupChoices,x=(0,r.useState)(b),C=x[0],T=x[1],S=[],A=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var j=N[y];null!=j&&j!==C&&v.some((function(e){return e.value===j}))&&T(j)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==C&&(A(t),T(a),null!=y&&w(y,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;n=null!=(o=S[i])?o:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},75847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config-note",id:"js/features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, we do not allow overriding the following options:",source:"@site/docs/js/features/common/custom-request-config-note.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config-note.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To ensure API consistency, we do not allow overriding the following options:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")))))}m.isMDXComponent=!0},9037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config",id:"js/features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs/js/features/common/custom-request-config.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options like ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases, passing additional options to axios might be required.\nTo achieve this, you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}m.isMDXComponent=!0},82182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-overview",id:"js/features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs/js/features/common/execute-raw-overview.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-overview.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")," - the response headers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," - the response body"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request")," - the original request")))}m.isMDXComponent=!0},47406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Typical cases, where you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,o.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method, or request headers."),(0,o.kt)("li",{parentName:"ul"},"The function ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,o.kt)("li",{parentName:"ul"},"Debugging purposes.")))}m.isMDXComponent=!0},75668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"js/features/common/skip-csrf-token",id:"js/features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-get requests.",source:"@site/docs/js/features/common/skip-csrf-token.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/skip-csrf-token.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{}},d={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For some services, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-get requests.\nTherefore, skipping fetching the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,o.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}m.isMDXComponent=!0},67020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(65488)),s=n(85162),u=n(35364),l=["components"],d={title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},p=void 0,c={unversionedId:"js/features/odata/execute-odata-request",id:"js/features/odata/execute-odata-request",title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs/js/features/odata/execute-odata-request.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/execute-odata-request.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657710028,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},sidebar:"someSidebar",previous:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"}},m={},f=[{value:"General Request Structure",id:"general-request-structure",level:2},{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",level:3},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",level:3},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",level:3},{value:"Setting a Custom Timeout",id:"setting-a-custom-timeout",level:3},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Deserialize Nested Navigation Properties",id:"deserialize-nested-navigation-properties",level:4}],y={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pregenerated OData clients for SAP S/4HANA, you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, which we refer to as ",(0,o.kt)("em",{parentName:"p"},"entities"),"."),(0,o.kt)("p",null,"To request an entity set, entities offer a fluent API."),(0,o.kt)("h2",{id:"general-request-structure"},"General Request Structure"),(0,o.kt)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { myEntityService } from './outputDir/my-service';\n\nconst { myEntityApi } = myEntityService();\nreturn myEntityApi.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,o.kt)("p",null,"If you are using an OData client, that you generated on your own, import the service function, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"myEntityService"),", from the generated service directory (",(0,o.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,o.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,o.kt)("p",null,"If you are using one of the pregenerated OData clients, import it from the npm package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { pregeneratedEntityService } from '@sap/cloud-sdk-vdm-pregenerated-service';\n")),(0,o.kt)("p",null,"Destructure the service to get the API of the entity you want to make requests for - ",(0,o.kt)("inlineCode",{parentName:"p"},"myEntityApi")," in the example above."),(0,o.kt)("p",null,"Every entity API has a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"myEntityApi.requestBuilder().getAll()")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll")," request type.")),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,o.kt)("p",null,"If you are using an OData client, that you generated on your own, import an entity from the generated service directory (",(0,o.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,o.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,o.kt)("p",null,"If you are using one of the pregenerated OData clients, import it from the npm package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PregeneratedEntity } from '@sap/cloud-sdk-vdm-pregenerated-service';\n")),(0,o.kt)("p",null,"Every entity has a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll")," request type."))),(0,o.kt)("p",null,"See the list below for details on all available request types (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),(0,o.kt)(i.Z,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"v2",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,o.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,o.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#create-request-builder"},(0,o.kt)("code",null,"create"))," ","Build requests to create entities (OData v2)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#update-request-builder"},(0,o.kt)("code",null,"update"))," ","Build requests to update entities (OData v2)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,o.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),(0,o.kt)(s.Z,{value:"v4",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,o.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,o.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#create-request-builder"},(0,o.kt)("code",null,"create"))," ","Build requests to create entities (OData v4)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#update-request-builder"},(0,o.kt)("code",null,"update"))," ","Build requests to update entities (OData v4)"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,o.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some entities do not support all the request types, which in turn won't be available through the API.")),(0,o.kt)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",(0,o.kt)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",(0,o.kt)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",(0,o.kt)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),(0,o.kt)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",(0,o.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," requests, ETag handling for ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getByKey")," requests."),(0,o.kt)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," function and pass a ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),(0,o.kt)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),(0,o.kt)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,o.kt)("inlineCode",{parentName:"p"},"addCustomHeaders")," function:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")))),(0,o.kt)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, and custom headers keep the case they were set in.\nIn the example above we pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Setting an ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do.")),(0,o.kt)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),(0,o.kt)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),(0,o.kt)("p",null,"In the example below an additional query parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want to set a query parameter in quotes (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),".")),(0,o.kt)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),(0,o.kt)("p",null,"If a service specification contains a specification for the ",(0,o.kt)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,o.kt)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")))),(0,o.kt)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",(0,o.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),(0,o.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,o.kt)(u.Ol,{mdxType:"CustomRequestConfig"}),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")))),(0,o.kt)(u.nc,{mdxType:"CustomRequestConfigNote"}),(0,o.kt)("h3",{id:"appending-paths-to-the-request-url-built-by-the-request-builders"},"Appending Paths to the Request URL Built by the Request Builders"),(0,o.kt)("p",null,"Usually, our request builders construct the request URL for you automatically.\nHowever, for certain OData features like ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation properties"),", we do not yet provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, we added a non-typed API to our request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw(destination)")," method to get results because we can't deserialize a response in a type-safe way."),(0,o.kt)("p",null,"The example below shows how to query a navigation property from a given entity."),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n")))),(0,o.kt)("p",null,"It will build the request URL like below:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2"),"\nwhere:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2")," is the additional path that you provide from the parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://my.s4-system.com/service-path/MyEntity(key='123')")," is the path of the original request URL built by the SAP Cloud SDK.")),(0,o.kt)("h3",{id:"setting-a-custom-timeout"},"Setting a Custom Timeout"),(0,o.kt)("p",null,"You can specify a timeout for the request via the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout()")," method on the request builder:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .timeout(1000)\n  .execute(destination);\n")))),(0,o.kt)("p",null,"The value is in milliseconds and the default value is 10000 (10 seconds)\nThis timeout applies to the request sent to the target system given in the destination.\nIf a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is fetched from the target system the timeout applies also to this call.\nNote that there is also a second timeout option on the destination fetch options.\nThis relates to the calls made to SAP BTP services like ",(0,o.kt)("inlineCode",{parentName:"p"},"destination-service")," or XSUAA."),(0,o.kt)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),(0,o.kt)(u.WD,{mdxType:"ExecuteRawOverview"}),(0,o.kt)("p",null,"Example:"),(0,o.kt)(i.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")))),(0,o.kt)(u.zl,{mdxType:"ExecuteRawUseCases"}),(0,o.kt)("ul",{style:{"margin-top":"-16px"}},(0,o.kt)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as a return type, and this entity type is shared by multiple `EntitySet`s. Without further information, it is unclear which ",(0,o.kt)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",(0,o.kt)("code",null,"executeRaw")," and use the ",(0,o.kt)("code",null,"deserialize")," function on the response data.")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"deserialize-nested-navigation-properties"},"Deserialize Nested Navigation Properties"),(0,o.kt)("p",null,"When deserializing an OData response that contains nested navigation properties, a user reported an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/2606"},"issue")," about some missing navigation properties.\nThis might happen if you don't use the object destructuring for getting multiple APIs.\nWhat you should do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n")),(0,o.kt)("p",null,"What you should avoid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const businessPartnerApi = businessPartnerService().businessPartnerApi;\nconst businessPartnerAddressApi =\n  businessPartnerService().businessPartnerAddressApi;\n")))}h.isMDXComponent=!0}}]);