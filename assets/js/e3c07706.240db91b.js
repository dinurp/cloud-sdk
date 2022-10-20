"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,p={unversionedId:"features/odata/v4/expand-select",id:"features/odata/v4/expand-select",title:"expand-select",description:"In contrast to the OData v2 implementation, you have to select and expand separately.",source:"@site/docs-js/features/odata/v4/expand-select.mdx",sourceDirName:"features/odata/v4",slug:"/features/odata/v4/expand-select",permalink:"/cloud-sdk/docs/js/features/odata/v4/expand-select",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/v4/expand-select.mdx",tags:[],version:"current",frontMatter:{}},l={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In contrast to the OData v2 implementation, you have to ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"expand")," separately.\nIn other words, selected properties are not expanded automatically as in v2."),(0,r.kt)("p",null,"The reason for this difference originates in the way select and expand work in OData v4.\nIn OData v4 you select within the expand-argument ",(0,r.kt)("inlineCode",{parentName:"p"},"$expand=Friends($select=FirstName)")," whereas in OData v2 you select via a path ",(0,r.kt)("inlineCode",{parentName:"p"},"$select=Friends/FirstName&$expand=Friends"),".\nThat's why we mimic this behavior for ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"expand")," operations in our API for OData v4 type-safe client."),(0,r.kt)("p",null,"In the example above you select the ",(0,r.kt)("inlineCode",{parentName:"p"},"LAST_NAME")," of the root entity and expand the navigation property ",(0,r.kt)("inlineCode",{parentName:"p"},"FRIENDS"),".\nIn the expanded entity the selected fields are ",(0,r.kt)("inlineCode",{parentName:"p"},"FIRST_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ADDRESS_INFO"),"."),(0,r.kt)("p",null,"The generated URL for this request will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/People?$select=LastName&$expand=Friends($select=FirstName,AddressInfo)\n")),(0,r.kt)("p",null,"If no ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," is given, all non-navigational properties are included in the response."))}d.isMDXComponent=!0}}]);