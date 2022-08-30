"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8310],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,v=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return n?t.createElement(v,i(i({ref:r},l),{},{components:n})):t.createElement(v,i({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99086:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var t=n(87462),o=(n(67294),n(3905)),a=n(97305),i=n(12245);const c={title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",sidebar_label:"Currency Conversion",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",keywords:["sap","cloud","sdk","cloud sdk","sap cloud sdk","currency conversion","extension"]},s=void 0,u={unversionedId:"extensions/currency-conversion",id:"extensions/currency-conversion",title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",source:"@site/docs-js/extensions/currency-conversion.mdx",sourceDirName:"extensions",slug:"/extensions/currency-conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion",draft:!1,tags:[],version:"current",frontMatter:{title:"SAP Cloud SDK Currency Conversion Libraries for JavaScript",sidebar_label:"Currency Conversion",description:"The currency conversion libraries are an extension to the SAP Cloud SDK. You can use this library to facilitate currency exchange rate conversion.",keywords:["sap","cloud","sdk","cloud sdk","sap cloud sdk","currency conversion","extension"]},sidebar:"docsJsSidebar",previous:{title:"Change Address Data",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/change-addresses"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/release-policy"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"SAP Cloud SDK Currency Conversion Library Versions",id:"sap-cloud-sdk-currency-conversion-library-versions",level:2}],p={toc:d};function y(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Currency Conversion Library is deprecated",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK Currency Conversion library is no longer maintained and will not receive any further updates.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Currency Conversion is an extension library built on SAP Cloud SDK.\nYou can use this library to facilitate currency exchange rate conversions."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The library does not provide any market data out-of-the-box.\nYou must provide the currency exchange rates to the library from your own data sources.\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.sap.com/products/market-rates-management.html"},"SAP Market Rates Management")," service or any other of your choice.")),(0,o.kt)("p",null,"You can use the library for the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Direct one-to-one conversions, from a source currency to a target currency."),(0,o.kt)("li",{parentName:"ul"},'Indirect conversions by using inverse rates or a "reference currency".'),(0,o.kt)("li",{parentName:"ul"},"Fixed rate conversions, for when you have the exact currency exchange rate that you want to use in your conversion operations."),(0,o.kt)("li",{parentName:"ul"},'Non-fixed rate conversions, for when you have a set of exchange rates, as opposed to the exact rate.\nThe library will pick the "best rate" from the set depending on various factors.')),(0,o.kt)("h2",{id:"sap-cloud-sdk-currency-conversion-library-versions"},"SAP Cloud SDK Currency Conversion Library Versions"),(0,o.kt)(i.Z,{versions:a.Z,basePath:"currency-conversion/api",mdxType:"ApiReleaseList"}))}y.isMDXComponent=!0},12245:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(67294),o=n(44996);const a=function(e){let{versions:r,basePath:n}=e;return t.createElement("ul",null,r.map(((e,r)=>t.createElement("li",{key:""+e},t.createElement("a",{href:(0,o.Z)(n+"/"+e+"/")},""+e),r?"":t.createElement("strong",null,t.createElement("em",null," - latest "))))))}},97305:(e,r,n)=>{n.d(r,{Z:()=>t});const t=["0.1.1"]}}]);