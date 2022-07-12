"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4489],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),u=n(7094),s=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,O=N.setTabGroupChoices,E=(0,r.useState)(k),w=E[0],T=E[1],D=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var A=x[v];null!=A&&A!==w&&y.some((function(e){return e.value===A}))&&T(A)}var j=function(e){var t=e.currentTarget,n=D.indexOf(t),a=y[n].value;a!==w&&(I(t),T(a),null!=v&&O(v,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;n=null!=(o=D[l])?o:D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return D.push(e)},onKeyDown:S,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},83682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(65488),i=n(85162),u=["components"],s={},c=void 0,p={unversionedId:"js/features/odata/v4/expand-select",id:"js/features/odata/v4/expand-select",title:"expand-select",description:"In contrast to the OData v2 implementation, you have to select and expand separately.",source:"@site/docs/js/features/odata/v4/expand-select.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/expand-select",permalink:"/cloud-sdk/docs/js/features/odata/v4/expand-select",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/expand-select.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657613886,formattedLastUpdatedAt:"7/12/2022",frontMatter:{}},d={},m=[],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In contrast to the OData v2 implementation, you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"expand")," separately.\nIn other words, selected properties are not expanded automatically as in v2."),(0,o.kt)("p",null,"The reason for this difference originates in the way select and expand work in OData v4.\nIn OData v4 you select within the expand-argument ",(0,o.kt)("inlineCode",{parentName:"p"},"$expand=Friends($select=FirstName)")," whereas in OData v2 you select via a path ",(0,o.kt)("inlineCode",{parentName:"p"},"$select=Friends/FirstName&$expand=Friends"),".\nThat's why we mimic this behavior for ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"expand")," operations in our API for OData v4 type-safe client."),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .select(peopleApi.schema.LAST_NAME)\n  .expand(\n    peopleApi.schema.FRIENDS.select(\n      peopleApi.schema.FIRST_NAME,\n      peopleApi.schema.ADDRESS_INFO\n    )\n  );\n"))),(0,o.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .select(People.LAST_NAME)\n  .expand(People.FRIENDS.select(People.FIRST_NAME, People.ADDRESS_INFO));\n")))),(0,o.kt)("p",null,"In the example above you select the ",(0,o.kt)("inlineCode",{parentName:"p"},"LAST_NAME")," of the root entity and expand the navigation property ",(0,o.kt)("inlineCode",{parentName:"p"},"FRIENDS"),".\nIn the expanded entity the selected fields are ",(0,o.kt)("inlineCode",{parentName:"p"},"FIRST_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS_INFO"),"."),(0,o.kt)("p",null,"The generated URL for this request will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"/People?$select=LastName&$expand=Friends($select=FirstName,AddressInfo)\n")),(0,o.kt)("p",null,"If no ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," is given, all non-navigational properties are included in the response."))}v.isMDXComponent=!0}}]);