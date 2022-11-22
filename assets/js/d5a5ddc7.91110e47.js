"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(i,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,c={unversionedId:"features/odata/common/batch/changeset",id:"version-v2/features/odata/common/batch/changeset",title:"changeset",description:"The order of execution within a changeset is not defined.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/batch/changeset.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/batch/changeset.mdx",tags:[],version:"v2",frontMatter:{}},i={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore, the requests within one changeset should not depend on each other.\nIf the execution of any request within a changeset fails, the whole changeset will be reflected as an error in the response.\nThe changeset will not be applied, much like a database transaction."),(0,o.kt)("p",null,"Unlike retrieve requests, you can not pass change requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"batch()")," function directly.\nYou have to wrap them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset()")," function, which in turn can be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"batch()")," function.\nOnce a batch request is executed, it returns a list of ",(0,o.kt)("a",{parentName:"p",href:"#responses"},(0,o.kt)("inlineCode",{parentName:"a"},"BatchResponse"))," objects."),(0,o.kt)("p",null,"If a changeset was executed successfully, its corresponding response is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteResponses")," and contains a collection of all raw responses to the requests in the changeset.\nIf the execution fails, the response is an ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," instance."),(0,o.kt)("p",null,"In the example below, you create a list of ",(0,o.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder")," instances")," from a list of addresses.\nCombine these change requests into one changeset and pass it to the batch request, which you execute against a destination."),(0,o.kt)("p",null,"Once you execute the batch request, you get a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchResponse")," instances, which in this example contains one response only, i.e. the one for the changeset."))}p.isMDXComponent=!0}}]);