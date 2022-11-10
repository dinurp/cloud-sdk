"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,i={unversionedId:"features/odata/v4/filter-parent-child",id:"version-v1/features/odata/v4/filter-parent-child",title:"filter-parent-child",description:"Depending on the context of the filter it will either filter the parent or the children.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/v4/filter-parent-child.mdx",sourceDirName:"features/odata/v4",slug:"/features/odata/v4/filter-parent-child",permalink:"/cloud-sdk/docs/js/v1/features/odata/v4/filter-parent-child",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/v4/filter-parent-child.mdx",tags:[],version:"v1",frontMatter:{}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depending on the context of the filter it will either filter the parent or the children.\nIn our example, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"PERSON")," related to zero to N ",(0,o.kt)("inlineCode",{parentName:"p"},"FRIENDS")," which are both of type people."),(0,o.kt)("p",null,"If you want to get all people with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder().getAll().filter(People.FIRST_NAME.equals('John'));\n")),(0,o.kt)("p",null,"If you want to get all people who have at least one friend with the first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .filter(People.FRIENDS.filter(any(People.FIRST_NAME.equals('John'))));\n")),(0,o.kt)("p",null,"The lambda ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," would enforce that all friends must have the first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John"),".\nThe two queries above filter the parent entity person."),(0,o.kt)("p",null,"In case you want to get all people but reduce the friends in the response, the filter has to be inside the expand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .expand(People.FRIENDS.filter(People.FIRST_NAME.equals('John')));\n")),(0,o.kt)("p",null,"This will return all people but only the friends with the first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," will be included in the response."))}u.isMDXComponent=!0}}]);