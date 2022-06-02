"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),i=n(72389),o=n(67392),l=n(7094),s=n(12466),u=n(86010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,h=e.block,f=e.defaultValue,m=e.values,k=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==T&&!y.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,x=(0,r.useState)(T),O=x[0],P=x[1],j=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=N[k];null!=S&&S!==O&&y.some((function(e){return e.value===S}))&&P(S)}var q=function(e){var t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==O&&(D(t),P(a),null!=k&&C(k,a))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":h},v)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:H,onFocus:q,onClick:q},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function h(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},20807:function(e,t,n){var a=n(67294),r=n(63081);t.Z=function(e){var t=e.slug,n=e.name;return a.createElement("a",{href:"/cloud-sdk/api/"+r.Z[0]+"/"+t},n)}},63081:function(e,t){t.Z=["2.4.0","2.3.0","2.2.0","2.1.0","2.0.0","1.54.0","1.53.1","1.53.0","1.52.0","1.51.0","1.50.0","1.49.0","1.48.1","1.48.0","1.47.1","1.47.0","1.46.0","1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},23083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(20807),l=n(9877),s=n(72360),u=["components"],c={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},p=void 0,d={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",title:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/generic-http-client.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1654156473,formattedLastUpdatedAt:"6/2/2022",frontMatter:{title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"Query Parameters",permalink:"/cloud-sdk/docs/js/features/connectivity/query-parameters"}},h={},f=[{value:"What Is the Generic HTTP Client?",id:"what-is-the-generic-http-client",level:2},{value:"How to Use It",id:"how-to-use-it",level:2},{value:"When to Use It",id:"when-to-use-it",level:2}],m={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-generic-http-client"},"What Is the Generic HTTP Client?"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the generic HTTP client of the SAP Cloud SDK.\nFor the final HTTP calls the SAP Cloud SDK for JavaScript uses the axios library."),(0,i.kt)("p",null,"In this document, we explain when and how to use the middle layer directly.\nDifferent clients serve different purposes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OData Client:"),"\nProvides strong typing for the request (payload, select, filter, etc.) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Generic HTTP Client:"),"\nAdds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service-specific information.\nThe client handles connectivity related issues such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"Destination lookup")),(0,i.kt)("li",{parentName:"ul"},"Connections to ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"SAP S/4HANA On-premise")," via the connectivity service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"Web proxies"),".")),(0,i.kt)("p",null,"In the end, all information from the destination, connectivity service, and proxy configuration ends up in header-fields and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/proxy-agent"},"proxy-agents"),".\nThe information goes one level down to the axios client."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"axios HTTP Client:"),"\nIs a widely used open source ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),(0,i.kt)("h2",{id:"how-to-use-it"},"How to Use It"),(0,i.kt)("p",null,"To make a request using the Generic HTTP client use the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," argument is either a full ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"}),", that you have already fetched or an ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.DestinationNameAndJwt",name:"object containing a destination name and an optional JWT",mdxType:"LinkToLatestJsApiDocs"}),".\nIn the latter case, the SAP Cloud SDK fetches the destination for you.\nFor more details, see ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"here"),".\nThe ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_http_client#HttpRequestConfig",name:"request configuration",mdxType:"LinkToLatestJsApiDocs"})," argument contains the request configuration.\nA minimal configuration would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n  method: 'get',\n  params: {\n    a: 'a',\n    b: 'b'\n  },\n  ...\n}\n")),(0,i.kt)("p",null,"Note that you can also give values for ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," in the request configuration.\nThe values you give in the request configuration ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/core/src/http-client/http-client.ts#L136-L148"},"will be merged")," with ones related to the destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),(0,i.kt)("p",null,"For keys which exist for both object the value from the custom request configuration will be used.\nFor example, a request configuration with ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),(0,i.kt)("p",null,"You can also pass an optional third parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"httpRequestOptions"),", where you can indicate for example whether the SAP Cloud SDK should fetch ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token for a non-GET request.\nFor a get request, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not fetched and this option is ignored."),(0,i.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("p",null,"By default, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is true."),(0,i.kt)("p",null,"For some non-GET requests, fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required, and can be skipped.\nYou can disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," to false like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, { fetchCsrfToken: false });\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("p",null,"Below is an example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpRequestOptions")," to delegate the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token fetching to the SAP Cloud SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n     fetchCsrfToken: true\n}\n")),(0,i.kt)("p",null,"By default, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is false."))),(0,i.kt)("h2",{id:"when-to-use-it"},"When to Use It"),(0,i.kt)("p",null,"You should consider the Generic HTTP client if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to use an unsupported feature by the typed OData Client like ",(0,i.kt)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this, you can profit from the aforementioned convenience in connectivity."),(0,i.kt)("li",{parentName:"ul"},"You want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),(0,i.kt)("li",{parentName:"ul"},"You want to call a non-OData service that has no service definition.")),(0,i.kt)("p",null,"You should consider the OData client if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have to build complicated filter, selection, and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),(0,i.kt)("li",{parentName:"ul"},"You want to update or create new entities.\nThe OData Client has built-in ",(0,i.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling.\nWith the generic client, you have to manage versions on your own.")))}k.isMDXComponent=!0}}]);