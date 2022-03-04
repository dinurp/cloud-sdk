"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[981],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(87462),n=a(67294),i=a(72389),o=a(29548),l=a(86010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),g=k.tabGroupChoices,z=k.setTabGroupChoices,T=(0,n.useState)(y),D=T[0],w=T[1],S=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==D&&h.some((function(e){return e.value===C}))&&w(C)}var E=function(e){var t=e.currentTarget,a=S.indexOf(t),r=h[a].value;r!==D&&(N(t),w(r),null!=m&&z(m,r))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;a=S[r]||S[0];break;case"ArrowLeft":var n=S.indexOf(e.currentTarget)-1;a=S[n]||S[S.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return S.push(e)},onKeyDown:j,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),u?(0,n.cloneElement)(v.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function c(e){var t=(0,i.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},8527:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(9877),l=a(58215),s=["components"],u={},c=void 0,d={unversionedId:"js/features/odata/common/entity/custom-de-serializers",id:"js/features/odata/common/entity/custom-de-serializers",title:"custom-de-serializers",description:"Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is deserialized and serialize when sending it back to the service.",source:"@site/docs/js/features/odata/common/entity/custom-de-serializers.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/custom-de-serializers",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/custom-de-serializers",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/custom-de-serializers.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646388462,formattedLastUpdatedAt:"3/4/2022",frontMatter:{}},p=[{value:"Using (De-)Serializers for Temporal",id:"using-de-serializers-for-temporal",children:[],level:4}],m={toc:p};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("p",null,"Since version 2 of the SAP Cloud SDK you can customize how the data you get from a service is ",(0,i.kt)("em",{parentName:"p"},"deserialized")," and ",(0,i.kt)("em",{parentName:"p"},"serialize")," when sending it back to the service."),(0,i.kt)("p",null,"To influence (de-)serialization you have to provide your custom (de-)serializers to a service."),(0,i.kt)("p",null,"A (de-)serializer is an object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DeSerializer")," that defines the following callback functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deserialize"),": Takes a value as given by the service and returns a deserialized value, i.e. its represenation in code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serialize"),": Takes a deserialized value and transforms it to the format and type expected by the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serializeToUri")," (optional): For some EDM types the serialized format differs between values in a payload and URI.\nThis function takes a deserialized value and transforms it to a string with the format expected by the service for URIs.\nThe second parameter of this callback function references the ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize")," function, which can optionally be used as a basis for URI serialization.\nIf this function is not specified, the URI serialization defaults to the ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize")," function.")),(0,i.kt)("p",null,"The type ",(0,i.kt)("inlineCode",{parentName:"p"},"DeSerializer")," has one generic parameter, that represents the deserialized type."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const doubleDeSerializer: DeSerializer<number> = {\n  deserialize: (val: string) => Number(val),\n  serialize: (val: number) => val.toString(),\n  serializeToUri: (value, serialize) => `${serialize(value)}D`\n};\n")),(0,i.kt)("p",null,"The example above shows a simplified version of the SAP Cloud SDK default (de-)serializer for the EDM type ",(0,i.kt)("inlineCode",{parentName:"p"},"Edm.Double"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"deserialize")," function converts the raw value to a number.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"serialize")," function converts the deserialized value to a string.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"serializeToUri")," function makes use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"serialize"),' function and appends a "D" at the end of the string.'),(0,i.kt)("p",null,"To specify custom (de-)serializers for a service, you have to pass an object to the service function, that maps from EDM type(s) to your custom (de-)serializer.\nAll unspecified EDM types are still (de-)serialized using the SAP Cloud SDK defaults."),(0,i.kt)("p",null,"Example, using the above ",(0,i.kt)("inlineCode",{parentName:"p"},"doubleDeSerializer")," for the business partner service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const customDeSerializers = { 'Edm.Double': doubleDeSerializer };\nconst { businessPartnerApi } = businessPartnerService(customDeSerializers);\n")),(0,i.kt)("p",null,"All requests against the ",(0,i.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," will now use the custom (de-)serializers for ",(0,i.kt)("inlineCode",{parentName:"p"},'"Edm.Double"')," and the default (de-)serializers for all other EDM types."),(0,i.kt)("h4",{id:"using-de-serializers-for-temporal"},"Using (De-)Serializers for Temporal"),(0,i.kt)("p",null,"The SAP Cloud SDK currently uses Moment.js to handle dates and time.\nMoment.js makes up a major portion of the SAP Cloud SDK's dependencies and it is not actively developed anymore.\nWe did't want to replace Moment.js with another library, but rather use the capabilities of the JavaScript language.\n",(0,i.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-temporal/docs/"},"Temporal")," is a stage 3 proposal for a date/time API in ECMAScript.\nAt the time, there is polyfill available, but it is not recommended for productive use.\nOnce it is recommended for productive use, the SAP Cloud SDK will adapt it as a default.\nHowever, for non-productive use cases, you can exchange the default date/time handling with Temporal-based (de-)serializers as of today.\nFor this we provide the Temporal-based (de-)serializers as a separate npm package, ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/temporal-de-serializers"),"."),(0,i.kt)("p",null,"Adapt your code to use this package, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { temporalDeSerializersV2 } from '@sap-cloud-sdk/temporal-de-serializers';\nconst { businessPartnerApi } = businessPartnerService(temporalDeSerializersV2);\n\nbusinessPartnerApi\n  .entityBuilder()\n  .organizationFoundationDate(\n    Temporal.PlainDateTime.from('1995-12-07T03:24:30')\n  )\n  .build();\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},"Custom (de-)serialization is available starting with version 2 of the SAP Cloud SDK for JavaScript.")))}f.isMDXComponent=!0}}]);