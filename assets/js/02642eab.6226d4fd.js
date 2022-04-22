"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6104],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),o=n(67294),i=n(72389),l=n(5979),r=n(86010),s="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,d=e.block,c=e.defaultValue,u=e.values,m=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),N=y.tabGroupChoices,b=y.setTabGroupChoices,C=(0,o.useState)(v),w=C[0],A=C[1],S=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=N[m];null!=j&&j!==w&&f.some((function(e){return e.value===j}))&&A(j)}var T=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==w&&(P(t),A(a),null!=m&&b(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return S.push(e)},onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},43689:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.align;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js"},a.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},15767:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.align;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},a.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}},41218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return k}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),l=n(43689),r=n(15767),s=n(9877),p=n(58215),d=["components"],c={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},u=void 0,m={unversionedId:"js/getting-started",id:"js/getting-started",title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",source:"@site/docs/js/getting-started.mdx",sourceDirName:"js",slug:"/js/getting-started",permalink:"/cloud-sdk/docs/js/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1650623525,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/overview-cloud-sdk-for-javascript"},next:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/odata/overview"}},h={},k=[{value:"What Is the SAP Cloud SDK",id:"what-is-the-sap-cloud-sdk",level:2},{value:"Starter projects",id:"starter-projects",level:2},{value:"Create a New Project",id:"create-a-new-project",level:3},{value:"Project Files and Folders",id:"project-files-and-folders",level:3},{value:"npm / Project",id:"npm--project",level:4},{value:"TypeScript",id:"typescript",level:4},{value:"Continuous Delivery",id:"continuous-delivery",level:4},{value:"Cloud Foundry",id:"cloud-foundry",level:4},{value:"Local Development",id:"local-development",level:4},{value:"SAP Cloud SDK Specific",id:"sap-cloud-sdk-specific",level:4},{value:"Run the Project",id:"run-the-project",level:2},{value:"Deploy the Project on SAP BTP Cloud Foundry",id:"deploy-the-project-on-sap-btp-cloud-foundry",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Login",id:"login",level:3},{value:"Before Deploying",id:"before-deploying",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Additional Features",id:"additional-features",level:2},{value:"Configure Destination",id:"configure-destination",level:3},{value:"Bind Destination Service",id:"bind-destination-service",level:3},{value:"XSUAA Service",id:"xsuaa-service",level:4}],f={toc:k};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{mdxType:"BuildBadge"})," ",(0,i.kt)(r.Z,{mdxType:"LicenseBadge"}),(0,i.kt)("h2",{id:"what-is-the-sap-cloud-sdk"},"What Is the SAP Cloud SDK"),(0,i.kt)("p",null,"The SAP Cloud SDK is a set of libraries that helps you end-to-end when developing applications on SAP Business Technology Platform that communicate with SAP solutions and services such as SAP S/4HANA, SAP S/4HANA Cloud, SAP SuccessFactors, and many others."),(0,i.kt)("h2",{id:"starter-projects"},"Starter projects"),(0,i.kt)("p",null,"The SAP Cloud SDK for JavaScript publishes starter projects for multiple scenarios in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js"},"samples repository"),".\nCurrently there are starter projects available for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SAP BTP Cloud Foundry Environment - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-sample-application"},"starter project")),(0,i.kt)("li",{parentName:"ul"},"SAP BTP Cloud Foundry Environment in combination with ",(0,i.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/"},"CAP")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cds-sample-application"},"starter project")),(0,i.kt)("li",{parentName:"ul"},"Plain Kubernetes with SAP Gardener - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/k8s-sample-application"},"starter project")),(0,i.kt)("li",{parentName:"ul"},"Kubernetes with SAP Gardener packaged with Helm - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/helm-sample-application"},"starter project"))),(0,i.kt)("h3",{id:"create-a-new-project"},"Create a New Project"),(0,i.kt)("p",null,"Make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," installed.\nTo create a new project run"),(0,i.kt)(s.Z,{groupId:"scenario",defaultValue:"cf",values:[{label:"CF",value:"cf"},{label:"CF + CAP",value:"cap-cf"},{label:"K8s + Gardener",value:"k8s"},{label:"K8s + Gardener + Helm",value:"k8s-helm"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"cf",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone \\\n  --depth 1  \\\n  --filter=blob:none  \\\n  --sparse \\\n  https://github.com/SAP-samples/cloud-sdk-js.git \\\n;\ncd cloud-sdk-js\ngit sparse-checkout set samples/cf-sample-application\n"))),(0,i.kt)(p.Z,{value:"cap-cf",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone \\\n  --depth 1  \\\n  --filter=blob:none  \\\n  --sparse \\\n  https://github.com/SAP-samples/cloud-sdk-js.git \\\n;\ncd cloud-sdk-js\ngit sparse-checkout set samples/cds-sample-application\n"))),(0,i.kt)(p.Z,{value:"k8s",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone \\\n  --depth 1  \\\n  --filter=blob:none  \\\n  --sparse \\\n  https://github.com/SAP-samples/cloud-sdk-js.git \\\n;\ncd cloud-sdk-js\ngit sparse-checkout set samples/k8s-sample-application\n"))),(0,i.kt)(p.Z,{value:"k8s-helm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone \\\n  --depth 1  \\\n  --filter=blob:none  \\\n  --sparse \\\n  https://github.com/SAP-samples/cloud-sdk-js.git \\\n;\ncd cloud-sdk-js\ngit sparse-checkout set samples/helm-sample-application\n")))),(0,i.kt)("h3",{id:"project-files-and-folders"},"Project Files and Folders"),(0,i.kt)("p",null,"The project contains the following files and folders, among others, to get you started with the SAP Cloud SDK for JavaScript:"),(0,i.kt)("h4",{id:"npm--project"},"npm / Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),": Specifies dependencies, metadata, and user-defined scripts.\nThe application comes with some predefined scripts and dependencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},".npmrc")),": The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"npm"))," configuration file.\nThe SAP Cloud SDK consists of some generic libraries, that are available as Open Source Software and typed client libraries for allow-listed SAP APIs like SAP S/4HANA and multiple others. These libraries are often referred to as the Virtual Data Model (VDM).\nIn the scaffolding, we specify the registry for the ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap")," scope, where the VDM libraries are published.")),(0,i.kt)("h4",{id:"typescript"},"TypeScript"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tsconfig.json")),": Configuration file for ",(0,i.kt)("inlineCode",{parentName:"li"},"TypeScript"),". This is not needed in the plain ",(0,i.kt)("inlineCode",{parentName:"li"},"JavaScript")," version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tslint.json")),": Configuration file for ",(0,i.kt)("inlineCode",{parentName:"li"},"tslint"),".")),(0,i.kt)("h4",{id:"continuous-delivery"},"Continuous Delivery"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Jenkinsfile")),": Jenkins pipeline definition file for quality assurance.\nIt uses the ",(0,i.kt)("a",{parentName:"li",href:"https://www.project-piper.io/"},'project "Piper" General Purpose Pipeline'),".")),(0,i.kt)("h4",{id:"cloud-foundry"},"Cloud Foundry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"manifest.yml")),": The deployment descriptor file for ",(0,i.kt)("inlineCode",{parentName:"li"},"SAP BTP, Cloud Foundry environment"),".")),(0,i.kt)("h4",{id:"local-development"},"Local Development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"src/")),": Source code for the initial application.")),(0,i.kt)("h4",{id:"sap-cloud-sdk-specific"},"SAP Cloud SDK Specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"systems.json"),"+",(0,i.kt)("inlineCode",{parentName:"strong"},"credentials.json")),": Allows you to maintain destinations for testing purposes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sap-cloud-sdk-analytics.json")),": Only if you have agreed to usage analytics during the initialization of your project.\nYou can find more information about anonymous usage analytics ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-cli/blob/main/usage-analytics.md"},"in the CLI's repository"),".")),(0,i.kt)("h2",{id:"run-the-project"},"Run the Project"),(0,i.kt)("p",null,"To run the application locally, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start:dev\n")),(0,i.kt)("p",null,"This will start a local server in watch mode so that subsequent changes will automatically trigger a restart of the server.\nGo to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you should get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello, World!")," in response."),(0,i.kt)("h2",{id:"deploy-the-project-on-sap-btp-cloud-foundry"},"Deploy the Project on SAP BTP Cloud Foundry"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The Cloud Foundry CLI comes in handy when you want to deploy your application to the SAP Business Technology Platform.\nYou can find installation instructions for all common platforms in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Cloud Foundry documentation")),".\nWe recommend using a package manager for that.\nIf you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"chocolatey")," on Windows, please find the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/cloudfoundry-cli"},"here"),"."),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have an ",(0,i.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/"},"SAP Business Technology Platform")," account you need to create one."))),(0,i.kt)("p",null,"To deploy our application, we first need to log in to Cloud Foundry in the SAP BTP using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cf")," CLI.\nFirst, we need to set an ",(0,i.kt)("inlineCode",{parentName:"p"},"API endpoint"),".\nThe exact URL of this API endpoint depends on the region your subaccount is in.\nOpen the ",(0,i.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/"},"SAP BTP cockpit")," and navigate to the subaccount you are planning to deploy your application to.\nClick on \u201cOverview\u201d on the left and you can see the URL of the API endpoint."),(0,i.kt)("p",null,"Copy the URL and paste it into the following command in your command-line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf api https://api.cf.<region>.hana.ondemand.com\ncf login\n")),(0,i.kt)("h3",{id:"before-deploying"},"Before Deploying"),(0,i.kt)("p",null,"Build your app if necessary."),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"To deploy your app, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"npm run deploy\n")),(0,i.kt)("p",null,"This command will use your local sources for transpiling, packaging and deployment, but will omit packaging your local ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," as those can be system dependent.\nDependencies will instead be installed automatically when deploying to Cloud Foundry."),(0,i.kt)("p",null,"The Cloud Foundry CLI will automatically pick up the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," of the project when deploying your application.\nThe file should look like this (where ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR-APPLICATION-NAME>")," is replaced by the name you specified when initializing the project):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specified ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," instructs Cloud Foundry to upload all the files from the ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment/")," folder."),(0,i.kt)("li",{parentName:"ul"},"The command specified under the ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," attribute tells the ",(0,i.kt)("inlineCode",{parentName:"li"},"buildpack")," what command to issue to start the application.")),(0,i.kt)("p",null,"When everything works as expected, you should get output that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Waiting for app to start...\n\nname:              <YOUR-APPLICATION-NAME>\nrequested state:   started\nroutes:            <YOUR-APPLICATION-NAME>.cfapps.eu10.hana.ondemand.com\nlast uploaded:     Thu 21 Mar 14:05:32 CET 2019\nstack:             cflinuxfs3\nbuildpacks:        nodejs\n\ntype:            web\ninstances:       1/1\nmemory usage:    256M\nstart command:   node index.js\n     state     since                  cpu    memory        disk           details\n#0   running   2019-03-21T13:05:47Z   0.0%   16M of 256M   126.8M of 1G\n")),(0,i.kt)("p",null,"The application will be running at the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," URL, you can also make sure that the application works correctly by running the start command, this command can be different than the one shown above."),(0,i.kt)("p",null,"Should the application not work for whatever reason, you can call the following command to access the logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"cf logs <YOUR-APPLICATION-NAME> --recent\n")),(0,i.kt)("h2",{id:"additional-features"},"Additional Features"),(0,i.kt)("p",null,"For productive use, your app should be linked to one or more databases and implement user authentication and authorization."),(0,i.kt)("h3",{id:"configure-destination"},"Configure Destination"),(0,i.kt)("p",null,"Login the ",(0,i.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com"},"Cloud Cockpit"),", navigate to your respective subaccount (in case of a trial account it should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"trial"),").\nIn the menu bar on the left, there should be a section ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectivity")," with an entry called ",(0,i.kt)("inlineCode",{parentName:"p"},"Destinations"),".\nClick ",(0,i.kt)("inlineCode",{parentName:"p"},"Destinations"),". On the page that opens, click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Destination")," and fill in the details below."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"Name"),", choose a name that describes your system.\nFor example, we will go with ",(0,i.kt)("inlineCode",{parentName:"p"},"S4_SYSTEM"),"."),(0,i.kt)("p",null,"If you use the Business Partner mock server, enter for ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," the URL that you have saved from the ",(0,i.kt)("a",{parentName:"p",href:"#deployment"},"previous step")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"NoAuthentication")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication"),".\nIf you use an SAP S/4HANA Cloud system, enter the systems URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," field and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicAuthentication")," as the authentication type.\nThis will make the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Password")," appear.\nEnter here the credentials of a technical user for your SAP S/4HANA Cloud system."),(0,i.kt)("h3",{id:"bind-destination-service"},"Bind Destination Service"),(0,i.kt)("p",null,"To allow the application to use the destination you have just configured, you will need to bind an instance of the destination service and an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"XSUAA service")," to your application."),(0,i.kt)("p",null,"To create an instance of the destination service, execute the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service destination lite my-destination\n")),(0,i.kt)("p",null,"This tells Cloud Foundry to create an instance of the destination service with service plan ",(0,i.kt)("inlineCode",{parentName:"p"},"lite")," and make it accessible under the name ",(0,i.kt)("inlineCode",{parentName:"p"},"my-destination")," on the SAP BTP.\nWe can now use the name to bind this service to our application.\nTo do this, open your ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and add a section called ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", under which you can then add the name of the just created service."),(0,i.kt)("p",null,"The resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n")),(0,i.kt)("h4",{id:"xsuaa-service"},"XSUAA Service"),(0,i.kt)("p",null,"Secondly, we need an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"XSUAA service"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"XSUAA service")," is responsible for issuing access tokens that are necessary to talk to other services, like the destination service.\nFor this service, we will need a bit of extra configuration in the form of a configuration file.\nCreate a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-security.json")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n')),(0,i.kt)("p",null,"The value for ",(0,i.kt)("inlineCode",{parentName:"p"},"xsappname")," again has to be unique across the whole of SAP BTP, so make sure to choose a unique name or prefix."),(0,i.kt)("p",null,"Now, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service xsuaa application my-xsuaa -c xs-security.json\n")),(0,i.kt)("p",null,"And, as before, add the newly created services to the services section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"."),(0,i.kt)("p",null,"The final ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n      - my-xsuaa\n")),(0,i.kt)("p",null,"Finally, we can replace the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," with an object whose key ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationName")," refers to the name of the destination we defined earlier.\nIf you chose a different name than ",(0,i.kt)("inlineCode",{parentName:"p"},"S4_SYSTEM"),", make sure to use it here accordingly."),(0,i.kt)("p",null,"The new function now looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'Server'\n});\n")))}g.isMDXComponent=!0}}]);