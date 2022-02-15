"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return A}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),A=i,m=p["".concat(s,".").concat(A)]||p[A]||d[A]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function A(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),i=n(67294),r=n(72389),o=n(29548),l=n(86010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,A=e.groupId,m=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,o.UB)(),v=I.tabGroupChoices,E=I.setTabGroupChoices,y=(0,i.useState)(k),C=y[0],b=y[1],R=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=A){var B=v[A];null!=B&&B!==C&&g.some((function(e){return e.value===B}))&&b(B)}var J=function(e){var t=e.currentTarget,n=R.indexOf(t),a=g[n].value;a!==C&&(S(t),b(a),null!=A&&E(A,a))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;n=R[a]||R[0];break;case"ArrowLeft":var i=R.indexOf(e.currentTarget)-1;n=R[i]||R[R.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return R.push(e)},onKeyDown:N,onFocus:J,onClick:J},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},20807:function(e,t,n){var a=n(67294),i=n(63081);t.Z=function(e){var t=e.slug,n=e.name;return a.createElement("a",{href:"/cloud-sdk/api/"+i.Z[0]+"/"+t},n)}},63081:function(e,t){t.Z=["2.0.0","1.54.0","1.53.1","1.53.0","1.52.0","1.51.0","1.50.0","1.49.0","1.48.1","1.48.0","1.47.1","1.47.0","1.46.0","1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},23083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return A},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(20807),l=n(9877),s=n(58215),u=["components"],c={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},d=void 0,p={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",title:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/generic-http-client.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1644913186,formattedLastUpdatedAt:"2/15/2022",frontMatter:{title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},A=[{value:"What Is the Generic HTTP Client?",id:"what-is-the-generic-http-client",children:[],level:2},{value:"How to Use It",id:"how-to-use-it",children:[],level:2},{value:"When to Use It",id:"when-to-use-it",children:[],level:2}],m={toc:A};function h(e){var t=e.components,c=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-the-generic-http-client"},"What Is the Generic HTTP Client?"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the Generic HTTP client of the SAP Cloud SDK.\nFor the final HTTP calls, we have decided to use the axios library."),(0,r.kt)("img",{alt:"The layers of HTTP clients in the SDK.",src:n(96329).Z,class:"center",width:"50%"}),(0,r.kt)("p",null,"In this document, we explain when and how to use the middle layer directly.\nDifferent clients serve different purposes:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OData Client:"),"\nProvides strong typing for the request (payload, select, filter, etc.) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generic HTTP Client:"),"\nAdds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service-specific information.\nThe client handles connectivity related issues such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"Destination lookup")),(0,r.kt)("li",{parentName:"ul"},"Connections to ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"SAP S/4HANA On-premise")," via the connectivity service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"Web proxies"),".")),(0,r.kt)("p",null,"In the end, all information from the destination, connectivity service, and proxy configuration ends up in header-fields and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/proxy-agent"},"proxy-agents"),".\nThe information goes one level down to the axios client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"axios HTTP Client:"),"\nIs a widely used open source ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),(0,r.kt)("h2",{id:"how-to-use-it"},"How to Use It"),(0,r.kt)("p",null,"To make a request using the Generic HTTP client use the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," argument is either a full ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_core.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"}),", that you have already fetched or an ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_core.DestinationNameAndJwt",name:"object containing a destination name and an optional JWT",mdxType:"LinkToLatestJsApiDocs"}),".\nIn the latter case, the SAP Cloud SDK fetches the destination for you.\nTo learn more, check the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination documentation"),". It provides more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," parameter.\nThe ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_core.HttpRequestConfig",name:"request configuration",mdxType:"LinkToLatestJsApiDocs"})," argument contains the request configuration.\nA minimal configuration would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n  method: 'get',\n  params: {\n    a: 'a',\n    b: 'b'\n  },\n  ...\n}\n")),(0,r.kt)("p",null,"Note that you can also give values for ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," in the request configuration.\nThe values you give in the request configuration ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/core/src/http-client/http-client.ts#L136-L148"},"will be merged")," with ones related to the destination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),(0,r.kt)("p",null,"For keys which exist for both object the value from the custom request configuration will be used.\nFor example, a request configuration with ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),(0,r.kt)("p",null,"You can also pass an optional third parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRequestOptions"),", where you can indicate for example whether the SAP Cloud SDK should fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token for a non-GET request.\nFor a get request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not fetched and this option is ignored."),(0,r.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,r.kt)("p",null,"By default, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is true."),(0,r.kt)("p",null,"For some non-GET requests, fetching the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required, and can be skipped.\nYou can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," to false like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, { fetchCsrfToken: false });\n"))),(0,r.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,r.kt)("p",null,"Below is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRequestOptions")," to delegate the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token fetching to the SAP Cloud SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n     fetchCsrfToken: true\n}\n")),(0,r.kt)("p",null,"By default, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is false."))),(0,r.kt)("h2",{id:"when-to-use-it"},"When to Use It"),(0,r.kt)("p",null,"You should consider the Generic HTTP client if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need to use an unsupported feature by the typed OData Client like ",(0,r.kt)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this, you can profit from the aforementioned convenience in connectivity."),(0,r.kt)("li",{parentName:"ul"},"You want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),(0,r.kt)("li",{parentName:"ul"},"You want to call a non-OData service that has no service definition.")),(0,r.kt)("p",null,"You should consider the OData client if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have to build complicated filter, selection, and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),(0,r.kt)("li",{parentName:"ul"},"You want to update or create new entities.\nThe OData Client has built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling.\nWith the generic client, you have to manage versions on your own.")))}h.isMDXComponent=!0},96329:function(e,t){t.Z="data:image/png;base64,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Wbt2rZWvX7++ffv25cqVQ5jq16/vYje7muX70KFDzYcBAwb86le/8mVp5Pnnn8cZ3G7atCnBIHPqa6+99osvvkht/84776SQWM+E0gxOPfXU2267jRaIrL1VfH184IEHGjZsSCjdrFkzN2d/4oknqPjyyy+fe+65hxxyCN0vLCwkHCYEpnzjxo2zZs0iMWfOHG/LSsePgLQyfmOapkf85TMP7dy5c+PGjZmcOkVDGn75y1+iQX/961+pdscddxCOXXjhhYcddtiOHTuWLl26c+dOyufOnYtILV68+OKLLz7//POfeeYZ1OGdd97hErrJ7J7ym2666auvvurRo8e8efPSeJCxiID32GOPxaRy5coIri9LOVqPM+jpZ599xvz6uOOOQ9dat26d2irq36BBAxrxXRo0aBALtSidt9zbRwzQXwz69u378ccfc6+JEye6WyOULK1eddVVBx100K233spKK7pZp06dUqVKIcok9tZihdc9pcNFgG9Ixv6HdaN9+gqDD9kDiJa39AtBRF+sg2gBH8FXXnnFsuyi1KhRo2zZsizt8ZfPjNXK2WnBjOiJ7BlnnMF+CEuKdum5557jEvpoStqxY0crf//999lOIaazrPcdNaEKguJ90SaFTJmxJHAj/fjjj1stX9aivCZNmnz55ZdmcMUVV2BPvOm9C1f3339/1NxbmJpG9a6//nrKXR/XrVtXunTpyy+/3Ixp56STTiJ6JTtmzBhu1L17d7u0cuVKsjC0LBLPMqulI/QerQ9wGLzFB61X8smP+evVH19XX331Rx99RFdZpBsxYgTLl8SGZMuUKTN+/HjCxlatWrGIyWqmD8fnn3/OBPyiiy4yveMqk/HTTjvthRdeILYigkNxkBJm4miZb5LrbYpY1U32rfytt95iH9lrkzndp08fFM1sCGPZQMcHIj5Xy9SKCNqVZJmYP38+QfHxxx/PF4ZVITgFyxtvvGFZ4mVLsJtfqVKl7du3Z9myzGJDQFoZm6EssiM24+YYDS9n9NhjjxEAWmR35plnEjm++OKLzZs3JzB0NpbgHA8axJ64txxZITJlN5nlPCbFzOL/9re/EdO1bNly9OjRRx11lNfY0syvmTh7y5kU75ZWEui56sTCpFktdSUk6A4rDASJ3kJLEwujff369SNgTL1q6wnor++Sk36WBdwlwlKXViI5BKSVMR9r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"}}]);