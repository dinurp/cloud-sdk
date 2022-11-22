"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},o=void 0,l={unversionedId:"features/odata/generate-client",id:"version-v2/features/odata/generate-client",title:"Generate an OData client for JavaScript",description:"The OData client generator allows you to generate custom OData client libraries for OData services.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/generate-odata-client.mdx",sourceDirName:"features/odata",slug:"/features/odata/generate-client",permalink:"/cloud-sdk/docs/js/features/odata/generate-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/generate-odata-client.mdx",tags:[],version:"v2",frontMatter:{id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},sidebar:"docsJsSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/odata/overview"},next:{title:"Execute an OData request",permalink:"/cloud-sdk/docs/js/features/odata/execute-request"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",level:2},{value:"Options",id:"options",level:2},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",level:2},{value:"npm Packages Versus Local Clients",id:"npm-packages-versus-local-clients",level:2},{value:"Transpilation",id:"transpilation",level:2},{value:"Prettier",id:"prettier",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OData client generator allows you to generate custom OData client libraries for OData services.\nYou can then access these services from your code using the client libraries."),(0,r.kt)("p",null,"You can use the SAP Cloud SDK generator both as a command-line interface (CLI) and programmatically."),(0,r.kt)("p",null,"All you need to use is a service metadata specification in the EDMX format (file ending can be ",(0,r.kt)("inlineCode",{parentName:"p"},".edmx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".xml"),")."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Run this command in your project's terminal to install the generator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/generator\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend to install the generator as a local dependency, because global installations hide the used generator version and cause problems when transpiling to JavaScript.\nIf you must use a globally installed generator, install the",(0,r.kt)("inlineCode",{parentName:"p"},"@types/node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," package in your project to make the transpilation work.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#transpilation"},"Transpilation")," for more details.\nIf you need to transpile sources without any local ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", you must manually execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," on your own with a custom ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},"path mapping"),".")),(0,r.kt)("h2",{id:"generate-a-client-using-the-command-line-interface"},"Generate a Client Using the Command Line Interface"),(0,r.kt)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line."),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx generate-odata-client --inputDir path/to/your/service-specifications --outputDir path/to/store/generated/modules\n")),(0,r.kt)("p",null,"Adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/service-specifications")," to the directory containing your service specifications in ",(0,r.kt)("inlineCode",{parentName:"p"},"EDMX")," format, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"service-specifications/"),".\nAlso adapt ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/store/generated/modules")," to your OData client directory for example ",(0,r.kt)("inlineCode",{parentName:"p"},"odata-client"),"."),(0,r.kt)("p",null,"This will generate OData clients for all your service specifications and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," in your input directory.\nThis file is used for generation and contains a mapping from the original file name to the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directoryName"),": the name of the subdirectory the client code will be generated into."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"servicePath"),": the URL path to be prepended before every request.\nBy default, this is read from the EDMX file, if available.\nOtherwise, the value will be set as ",(0,r.kt)("inlineCode",{parentName:"li"},"VALUE_IS_UNDEFINED"),", and an error will be logged.\nIn this case, you can specify ",(0,r.kt)("inlineCode",{parentName:"li"},"servicePath")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceMapping.json")," manually and re-generate again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npmPackageName"),": the name of the npm package, if a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file is generated.\nThis information is optional.")),(0,r.kt)("p",null,"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "MyService": {\n    "directoryName": "my-service",\n    "servicePath": "/odata/v2",\n    "npmPackageName": "my-service"\n  }\n}\n')),(0,r.kt)("p",null,"By default, the generated module contains the following sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TypeScript code (",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),") representing request builders, entity representations, and if needed representations for complex types as well as function/action imports."),(0,r.kt)("li",{parentName:"ul"},"All of the above as transpiled sources, including JavaScript sources (",(0,r.kt)("inlineCode",{parentName:"li"},".js"),"), type definition files (",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts"),"), and sourcemap files (",(0,r.kt)("inlineCode",{parentName:"li"},".js.map")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts.map"),")."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},".npmrc"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"typedoc.json"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),".")),(0,r.kt)("p",null,"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-odata-client --help")," for additional options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option, Aliases ",(0,r.kt)("div",{style:{width:"225px"}})),(0,r.kt)("th",{parentName:"tr",align:"center"},"\xa0Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-i"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--inputDir")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0This directory will be recursively searched for ",(0,r.kt)("inlineCode",{parentName:"td"},".edmx"),"/",(0,r.kt)("inlineCode",{parentName:"td"},".xml")," files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-o"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--outputDir")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Directory to save the generated code in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-s"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--serviceMapping"),","),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"inputDir/service-mapping.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Configuration file to ensure consistent names between multiple generation runs with updated / changed metadata files. Will be generated if not existent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--forceOverwrite")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the ",(0,r.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")," option, this will not delete outdated files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Deletes EVERYTHING in the specified output directory before generating code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generateNpmrc")," ",(0,r.kt)("em",{parentName:"td"},"(deprecated)")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generate a ",(0,r.kt)("inlineCode",{parentName:"td"},".npmrc")," file specifying a registry for ",(0,r.kt)("inlineCode",{parentName:"td"},"@sap")," scoped dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generateTypedocJson")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generates a ",(0,r.kt)("inlineCode",{parentName:"td"},"typedoc.json"),' file for each package, used for the corresponding "doc" npm script.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generatePackageJson")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generate a ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," file, specifying dependencies and scripts for compiling and generating documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--versionInPackageJson"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"(deprecated in ",(0,r.kt)("inlineCode",{parentName:"em"},"2.6.0"),")")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Version of the generator"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0By default, when generating ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," file, the generator will set a version by using the generator version. It can also be set to a specific version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--include"),(0,r.kt)("br",null),"available since ",(0,r.kt)("inlineCode",{parentName:"td"},"2.6.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"''")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Glob describing additional files to be added to the each generated service directory - relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"inputDir"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generateJs")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Generates transpiled ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js.map"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".d.ts")," and ",(0,r.kt)("inlineCode",{parentName:"td"},".d.ts.map")," files. When set to false, the generator will only generate ",(0,r.kt)("inlineCode",{parentName:"td"},".ts")," files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--processesJsGeneration")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"16")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Number of processes used for transpilation of JavaScript files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--generateCSN")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0A CSN file will be generated for each service definition in the output directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--prettierConfig")," available since ",(0,r.kt)("inlineCode",{parentName:"td"},"2.11.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"default prettier config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Configuration file for the prettier if you want to change the default value")))),(0,r.kt)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),(0,r.kt)("p",null,"You can also use the generator programmatically.\nYou will have to provide the options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst inputDir = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  forceOverwrite: true,\n  generateJs: false,\n  useSwagger: false,\n  writeReadme: false,\n  clearOutputDir: true,\n  generateNpmrc: false,\n  generateTypedocJson: false,\n  generatePackageJson: false,\n  generateCSN: false,\n  sdkAfterVersionScript: false,\n  s4hanaCloud: false\n  /* optional:\n    serviceMapping: 'test/directory',\n    changelogFile: 'test/directory',\n    include: 'glob of files to include'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  inputDir,\n  outputDir\n});\n")),(0,r.kt)("h2",{id:"npm-packages-versus-local-clients"},"npm Packages Versus Local Clients"),(0,r.kt)("p",null,"The SAP Cloud SDK OData client generator generates TypeScript code.\nBy default, the generator creates all sources needed for an npm package.\nIt transpiles the generated sources to JavaScript and provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," for the client.\nThis differs from the OpenAPI generator and will likely change in a future major version upgrade."),(0,r.kt)("p",null,"If you want to publish a generated client to an npm registry, you can work with the default configuration.\nPlease make sure to check intellectual property regulations before publishing to a public registry."),(0,r.kt)("p",null,"If you want to use the generated client in your code without sharing it, you can omit the generation of a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"generatePackageJson")," flag.\nAdditionally, if you work with TypeScript you can skip transpilation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--generateJs")," flag.\nThe generated clients depend on the ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," packages, depending on the OData version of the service.\nYou have to make sure, there is a local reference to these packages, by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v2\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v4\n")),(0,r.kt)("p",null,"respectively."),(0,r.kt)("h2",{id:"transpilation"},"Transpilation"),(0,r.kt)("p",null,"If you installed the generator globally and want to transpile the generated code, you have to install the required dependency (or ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency"),") for your client (",(0,r.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v4"),") prior to generation.\nYou do this by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v2\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v4\n")),(0,r.kt)("p",null,"respectively."),(0,r.kt)("p",null,"If you installed the generator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency"),", transpilation will work without additional steps."),(0,r.kt)("h2",{id:"prettier"},"Prettier"),(0,r.kt)("p",null,"Since version 2.11.0, the SAP Cloud SDK runs prettier on the generated sources using a default prettier config.\nThe prettier formats only TypeScript files (",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts"),") to avoid broken source maps.\nIf you are not happy with the configuration you can provide a custom configuration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"prettierConfig")," command line argument.\nNote that this formatting is done in-memory before the generator emits the files, so no expensive additional I/O is required.\nAlternatively, you can execute a custom formatting step after the generation is finished."),(0,r.kt)("p",null,"Note that custom formatting steps could break source maps when you generate a JavaScript client (option ",(0,r.kt)("inlineCode",{parentName:"p"},"generateJs")," enabled).\nWe recommend excluding JavaScript clients from formatting because the generated ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".map.js")," files are not meant for humans to read."))}c.isMDXComponent=!0}}]);