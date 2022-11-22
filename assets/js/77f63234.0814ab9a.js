"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=n(65488),o=n(85162);const i={id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},l=void 0,p={unversionedId:"tutorials/getting-started/execute-an-odata-request",id:"tutorials/getting-started/execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",source:"@site/docs-js/tutorials/getting-started/2-execute-odata-request.mdx",sourceDirName:"tutorials/getting-started",slug:"/tutorials/getting-started/execute-an-odata-request",permalink:"/cloud-sdk/docs/js/v3/tutorials/getting-started/execute-an-odata-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/getting-started/2-execute-odata-request.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"docsJsSidebar",previous:{title:"Set up Development Environment",permalink:"/cloud-sdk/docs/js/v3/tutorials/getting-started/set-up-dev-environment"},next:{title:"Deploy Application to Cloud Foundry",permalink:"/cloud-sdk/docs/js/v3/tutorials/getting-started/deploy-app-to-cf"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Add a Custom Route",id:"add-a-custom-route",level:2},{value:"Generate Service Entities",id:"generate-service-entities",level:2},{value:"Execute an OData Request",id:"execute-an-odata-request",level:2},{value:"Manage Destinations Centrally (Optional)",id:"manage-destinations-centrally-optional",level:2},{value:"Final Code Review",id:"final-code-review",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this part of the tutorial, you will do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extend your starter NestJS application by adding a custom route."),(0,a.kt)("li",{parentName:"ul"},"Call the business partner service of SAP S/4HANA Cloud using the SAP Cloud SDK for JavaScript."),(0,a.kt)("li",{parentName:"ul"},"Manage destinations centrally during development (optional).")),(0,a.kt)("h2",{id:"add-a-custom-route"},"Add a Custom Route"),(0,a.kt)("p",null,'Initially, the app contains a basic controller with a single route that returns the string "Hello World!".\nWe will add another route for ',(0,a.kt)("inlineCode",{parentName:"p"},"business-partner")," that will list all available business partners."),(0,a.kt)("p",null,"Create a new controller by executing the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nest g controller business-partner\n")),(0,a.kt)("p",null,"This will create a folder ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," directory containing the controller ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner.controller.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller } from '@nestjs/common';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller(business-partner)")," decorator marks the class ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerController")," as a controller (i.e. a thing that handles requests).\nNext, we will add a method ",(0,a.kt)("inlineCode",{parentName:"p"},"getBusinessPartners")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"@Get('')")," decorator.\nThis will tell Nest to create a handler for this endpoint for HTTP requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get } from '@nestjs/common';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  @Get()\n  getBusinessPartners() {\n    return 'We will implement this in a minute.';\n  }\n}\n")),(0,a.kt)("p",null,"Notice that we did not add any path information in the decorator.\nNest will map ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /business-partner")," requests to this handler."),(0,a.kt)("p",null,"For the controller to work, you need to include it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"controllers")," array within the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),".\nThe generate command updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts")," automatically and looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnerController } from './business-partner/business-partner.controller';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService]\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"If you've started your application with the following command in the previous tutorial, it should detect the change and restart automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start:dev\n")),(0,a.kt)("p",null,"If you've terminated your application, you can restart it by running the start command again.\nNow, calling http://localhost:8080/business-partner should return our placeholder string."),(0,a.kt)("h2",{id:"generate-service-entities"},"Generate Service Entities"),(0,a.kt)("p",null,"The SAP Cloud SDK for JavaScript requires client libraries to make calls to OData services.\nIn this tutorial, we generate the client library for the business partner service using ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/generator"),".\nMore details of the OData generator can be found in ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/generate-client"},"Generate an OData client for JavaScript"),"."),(0,a.kt)("p",null,"Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/generator")," package as a local dependency."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @sap-cloud-sdk/generator\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a folder ",(0,a.kt)("inlineCode",{parentName:"p"},"service-specifications")," at the root of the project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the EDMX file for the business partner service in the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_BUSINESS_PARTNER/overview"},"SAP API Business Hub"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"API_BUSINESS_PARTNER.edmx")," file into the ",(0,a.kt)("inlineCode",{parentName:"p"},"service-specifications")," folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"service-mapping.json")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"service-specifications")," folder with the following content:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "API_BUSINESS_PARTNER": {\n    "directoryName": "business-partner-service",\n    "servicePath": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",\n    "npmPackageName": "business-partner-service"\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," service."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx generate-odata-client --inputDir service-specifications --outputDir services\n")))),(0,a.kt)("p",null,"The generated client library is in ",(0,a.kt)("inlineCode",{parentName:"p"},"services/business-partner-service"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can find a list of services exposed by SAP S/4HANA Cloud in the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub"),".\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/generator")," to generate OData client libraries you need, as mentioned above.")),(0,a.kt)("h2",{id:"execute-an-odata-request"},"Execute an OData Request"),(0,a.kt)("p",null,"Next, we will create a service that will be responsible for fetching the business partners.\nTo create a service class ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts"),", execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nest g service business-partner\n")),(0,a.kt)("p",null,"This creates a basic class inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src/business-partner")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class BusinessPartnerService {}\n")),(0,a.kt)("p",null,"The service is also registered in the ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," array within the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService],\n})\n")),(0,a.kt)("p",null,"To import the service function and entity exported by the client library, add the following line to the top of the service class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  businessPartnerService,\n  BusinessPartner\n} from '../../services/business-partner-service';\n")),(0,a.kt)("p",null,"Create a function ",(0,a.kt)("inlineCode",{parentName:"p"},"getAllBusinessPartners"),".\nGet the API for the entity you want to make a call to in your application.\nIn this tutorial, we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," of the business partner service.\nUnpack the API object from the service function using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"JavaScript Object Destructuring"),"."),(0,a.kt)("p",null,"Depending on the target system you are connecting to, the destination configuration can vary:"),(0,a.kt)(s.Z,{groupId:"scenario",defaultValue:"mock-server",values:[{label:"Mock Server",value:"mock-server"},{label:"SAP S/4HANA Cloud System",value:"s4hana-cloud"},{label:"SAP API Business Hub Sandbox",value:"api-hub-sandbox"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"mock-server",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: 'http://localhost:3000/',\n  });\n}\n"))),(0,a.kt)(o.Z,{value:"s4hana-cloud",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: '<URI of your SAP S/4HANA Cloud System>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  });\n}\n"))),(0,a.kt)(o.Z,{value:"api-hub-sandbox",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi\n    .requestBuilder()\n    .getAll()\n    .addCustomHeaders({ APIKey: '<YOUR-API-KEY>' })\n    .execute({\n      url: 'https://sandbox.api.sap.com/s4hanacloud'\n    });\n}\n")))),(0,a.kt)("p",null,"As network requests are asynchronous by nature, the return value of this function is a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," to a list of business partners ",(0,a.kt)("inlineCode",{parentName:"p"},"(Promise<BusinessPartner[]>)"),"."),(0,a.kt)("p",null,"Now that we have a service class to retrieve business partners, let's use it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerController"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerService")," is injected through the class constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  constructor(private businessPartnerService: BusinessPartnerService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n")),(0,a.kt)("p",null,"Nest will handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," we return automatically.\nWe add a ",(0,a.kt)("inlineCode",{parentName:"p"},"catch()")," handler to specify how errors are handled (otherwise it would only show an internal server error when something goes wrong).\nReload the http://localhost:8080/business-partner URL to retrieve a list of business partners."),(0,a.kt)("p",null,"Congratulations, you just made your first call with the SAP Cloud SDK!"),(0,a.kt)("h2",{id:"manage-destinations-centrally-optional"},"Manage Destinations Centrally (Optional)"),(0,a.kt)("p",null,"To avoid repeating your destination configuration for every request execution, you can set a destinations environment variable to manage your destinations.\nIn ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")," applications, it is common to use a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file to maintain such environment variables for a given project.\nCreate a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of your project and define the destinations environment variable as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"destinations = [\n  {\n    name: '<DESTINATIONNAME>',\n    url: '<URL to your system>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  }\n];\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Every environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file has to be defined on one line.\nYou can add more destinations to the array.")),(0,a.kt)("p",null,"This is what it would look like for the mock server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"destinations = [{ name: 'MockServer', url: 'http://localhost:3000' }];\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please do not use this approach in production and also include the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," list, so that it is not checked in.")),(0,a.kt)("p",null,"Now that we have defined our destinations, we need to make sure that they are available in our process.\nFor this, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," package provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"nest.js"),". You can install it with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @nestjs/config\n")),(0,a.kt)("p",null,"To load the environment variables defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigModule")," provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," package to the application's ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module")," definition.\nOpen ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts")," and update it with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ConfigModule } from '@nestjs/config';\n\n@Module({\n  imports: [ConfigModule.forRoot()],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService],\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConfigModule")," is imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," package and in we add it to the module's ",(0,a.kt)("inlineCode",{parentName:"p"},"imports"),".\nIf no arguments are passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," method, the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file has to be located in the project root.\nFor details on the possible configuration see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/configuration"},"nest documentation"),".\nTo reference a destination in the request execution, replace the URL with a destinationName - ",(0,a.kt)("inlineCode",{parentName:"p"},"MockServer")," in our example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    destinationName: 'MockServer'\n  });\n}\n")),(0,a.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,a.kt)("p",null,"In this tutorial, you added a new custom route to your application.\nUsing the SAP Cloud SDK, you executed an OData request to fetch a list of business partners.\nYou configured the destinations environment variable using a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"Here are the code files discussed on this page, if you are using the mock server:"),(0,a.kt)(s.Z,{groupId:"code-files",defaultValue:"bupa-controller",values:[{label:"src/business-partner/business-partner.controller.ts",value:"bupa-controller"},{label:"src/business-partner/business-partner.service.ts",value:"bupa-service"},{label:"src/app.module.ts",value:"app-module"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bupa-controller",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partner')\nexport class BusinessPartnerController {\n  constructor(private businessPartnerService: BusinessPartnerService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"bupa-service",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport {\n  businessPartnerService,\n  BusinessPartner\n} from '../../services/business-partner-service';\n\n@Injectable()\nexport class BusinessPartnerService {\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    const { businessPartnerApi } = businessPartnerService();\n    return await businessPartnerApi.requestBuilder().getAll().execute({\n      url: 'http://localhost:3000/'\n    });\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"app-module",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnerController } from './business-partner/business-partner.controller';\nimport { BusinessPartnerService } from './business-partner/business-partner.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnerController],\n  providers: [AppService, BusinessPartnerService]\n})\nexport class AppModule {}\n")))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),s=n(86010),o=n(72389),i=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,l.U)(),[P,C]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==P&&g.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==P&&(w(t),C(r),null!=h&&y(h,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:A},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);