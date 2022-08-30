"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},r=void 0,l={unversionedId:"announcing-version-2",id:"version-v1/announcing-version-2",title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",description:"This announcement only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs-js_versioned_docs/version-v1/announcing-version-2.mdx",sourceDirName:".",slug:"/announcing-version-2",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2",draft:!1,tags:[],version:"v1",frontMatter:{title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},sidebar:"docsJsSidebar",previous:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/v1/release-policy"},next:{title:"Announcing Version 2 Beta",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2-beta"}},s={},c=[{value:"Timeline for the Version 2.x",id:"timeline-for-the-version-2x",level:2},{value:"What Will Change in Version 2?",id:"what-will-change-in-version-2",level:2},{value:"Replace <code>Moment.js</code> With a Flexible Middleware Approach for Deserialization",id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization",level:3},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"What Will the Upgrade Look Like?",id:"what-will-the-upgrade-look-like",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"relevance",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This announcement only applies to the SAP Cloud SDK for JavaScript.\nIt is not relevant for the SAP Cloud SDK for Java.")),(0,o.kt)("admonition",{title:"Release Policy",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/release-policy"},"general release policy"),".")),(0,o.kt)("h2",{id:"timeline-for-the-version-2x"},"Timeline for the Version 2.x"),(0,o.kt)("p",null,"The planned timeline looks as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"September/October: Start of development"),(0,o.kt)("li",{parentName:"ol"},"November: Publish beta versions and start of feedback cycle"),(0,o.kt)("li",{parentName:"ol"},"December: Publish release candidate"),(0,o.kt)("li",{parentName:"ol"},"January 2022: Release of SAP Cloud SDK 2.0.0")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will continuously publish beta versions and would appreciate feedback from early adopters."),(0,o.kt)("li",{parentName:"ul"},"Constructive suggestions will be included in the ongoing beta releases."),(0,o.kt)("li",{parentName:"ul"},"Once the ",(0,o.kt)("a",{parentName:"li",href:"#what-will-change-in-version-2"},"scope of version 2.x")," is implemented, a release candidate will be published for end-to-end evaluation."),(0,o.kt)("li",{parentName:"ul"},"The final release will happen after the evaluation of the release candidate is completed.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"During development time, we may postpone changes that have a workaround in version 1.x or are not time-critical.\nImportant and time-critical issues will be resolved within our usual SLA.")),(0,o.kt)("h2",{id:"what-will-change-in-version-2"},"What Will Change in Version 2?"),(0,o.kt)("p",null,"The planned list of changes is:"),(0,o.kt)("h3",{id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization"},"Replace ",(0,o.kt)("inlineCode",{parentName:"h3"},"Moment.js")," With a Flexible Middleware Approach for Deserialization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," used to be somewhat of a standard for JavaScript date handling, but is now in ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/moment#project-status"},"maintenance mode"),".\nIt is also a rather large dependency and not optimized for tree shaking.\nWe will remove the direct dependency to ",(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," and allow you to choose a middleware that suits your project.\nWe will provide a few popular options including a ",(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," - based middleware for the easiest possible migration.\nThis gives you flexibility while reducing package size dramatically."),(0,o.kt)("h3",{id:"split-packages-and-export-only-the-public-interface"},"Split Packages and Export Only the Public Interface"),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript exports many functions that are used across our packages, but are not supposed to be part of the public interface.\nWe will clean up these exports and are expecting a better experience when using IntelliSense or similar auto-completion tools.\nAs long as you don't use undocumented methods, this change should not need any changes on your side."),(0,o.kt)("h3",{id:"increase-compilation-target-to-ecmascript-2019"},"Increase Compilation Target to ECMAScript 2019"),(0,o.kt)("p",null,"We are currently compiling to meet the ECMAScript 5 standard.\nThis is not needed anymore as ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," fully supports ECMAScript 2019 in both the Maintenance LTS (v12) and Active LTS (v14).\nWe expect a reduction in package size and a slight performance improvement.\nNo changes to your projects will be necessary unless it depends on ECMAScript 5 compatibility."),(0,o.kt)("h3",{id:"remove-deprecated-functionality"},"Remove Deprecated Functionality"),(0,o.kt)("p",null,"We marked outdated functionality as deprecated.\nThese functions will be removed during the major version increase.\nWe expect a minor reduction in package size.\nIf you still use a deprecated function, you should start replacing any occurrence with the proposed alternative as mentioned in the release notes."),(0,o.kt)("h2",{id:"what-will-the-upgrade-look-like"},"What Will the Upgrade Look Like?"),(0,o.kt)("p",null,"Applying an upgrade is an additional effort.\nWe want to minimize this effort on the customer's side.\nOur team will provide a detailed upgrade guide for each major release.\nThe guide will include step-by-step changes to resolve any incompatibilities.\nUpgrading should be possible in less than a day regardless of the project size."),(0,o.kt)("admonition",{title:"Looking For Feedback",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To achieve this, we will need your feedback during the beta and release candidate phase.\nPlease let us know if you want to collaborate with us on finding problems and solutions for the upgrade guide.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/discussions/1518"},"Reach out to us")," with your feedback, suggestions, or improvement ideas.")))}p.isMDXComponent=!0}}]);