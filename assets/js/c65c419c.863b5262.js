"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"features/odata/common/query-parameter/filter",id:"version-v2/features/odata/common/query-parameter/filter",title:"filter",description:"When operating on a collection of entities, the API offers filter( ... ) on the builders.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/query-parameter/filter.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/filter",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/query-parameter/filter.mdx",tags:[],version:"v2",frontMatter:{}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When operating on a collection of entities, the API offers ",(0,a.kt)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders.\nIt directly corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter")," parameter of the request."),(0,a.kt)("p",null,"Filters are built via the fields available on the schema property of the entities API class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n        businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n      ),\n      businessPartnerApi.schema.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n")),(0,a.kt)("p",null,"The EDM primitive types support all six comparison operators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lessThan()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lessOrEqual()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equals()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notEquals()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"greaterOrEqual()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"greaterThan()"))),(0,a.kt)("p",null,"The example above will translate to this filter parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),(0,a.kt)("p",null,"Take note of the order of ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"or"),".\nAs ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",(0,a.kt)("inlineCode",{parentName:"p"},"or"),"."),(0,a.kt)("p",null,"In addition, the negation operator ",(0,a.kt)("inlineCode",{parentName:"p"},"not")," can also be used for wrapping any filter expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that do not match any of the cases:\n    - Have first name 'Alice'\n    - Have last name 'Bob'\n*/\n.filter(\n  not(\n    or(\n      businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n      businessPartnerApi.schema.LAST_NAME.equals('Bob')\n    )\n  )\n)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter")," parameter will then be generated like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=not (FirstName eq 'Alice') or (LastName eq 'Bob'))\n")),(0,a.kt)("p",null,"It is also possible to pass multiple filters to the same filter function without concatenating them with ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"or"),".\nThey will be concatenated with ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," by default.\nThe two following examples are equal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  and(\n    businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n    businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n  )\n)\n")),(0,a.kt)("p",null,"The example above can be shortened to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n  businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n)\n")))}c.isMDXComponent=!0}}]);