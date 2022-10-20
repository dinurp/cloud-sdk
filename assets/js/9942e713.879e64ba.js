"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"frequently-asked-questions",title:"Frequently Asked Questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i=void 0,s={unversionedId:"frequently-asked-questions",id:"frequently-asked-questions",title:"Frequently Asked Questions",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",source:"@site/docs-java/faq.mdx",sourceDirName:".",slug:"/frequently-asked-questions",permalink:"/cloud-sdk/docs/java/frequently-asked-questions",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/faq.mdx",tags:[],version:"current",frontMatter:{id:"frequently-asked-questions",title:"Frequently Asked Questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Support",permalink:"/cloud-sdk/docs/java/support-java"}},l={},u=[{value:"General Questions",id:"general-questions",level:2},{value:"How Often Do You Release a New SAP Cloud SDK Version?",id:"how-often-do-you-release-a-new-sap-cloud-sdk-version",level:3},{value:"Should I Update With Every Release?",id:"should-i-update-with-every-release",level:3},{value:"Which Java Versions Are Supported by the SAP Cloud SDK?",id:"which-java-versions-are-supported-by-the-sap-cloud-sdk",level:3},{value:"Can I Use Features Annotated as Beta in Production?",id:"can-i-use-features-annotated-as-beta-in-production",level:3},{value:"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?",id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do",level:3},{value:"I&#39;m Creating a Service Now Incident, What&#39;s Your Component Name?",id:"im-creating-a-service-now-incident-whats-your-component-name",level:3},{value:"How Do I Remotely Debug My App on SAP BTP Cloud Foundry?",id:"how-do-i-remotely-debug-my-app-on-sap-btp-cloud-foundry",level:3},{value:"I&#39;m Observing a <code>DefaultHttpClientFactory not a subtype</code> Exception",id:"im-observing-a-defaulthttpclientfactory-not-a-subtype-exception",level:3},{value:"OData Related Questions",id:"odata-related-questions",level:2},{value:"What Versions of OData Protocol Do You Support?",id:"what-versions-of-odata-protocol-do-you-support",level:3},{value:"Do You Support All OData Features?",id:"do-you-support-all-odata-features",level:3},{value:"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java",id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java",level:3},{value:"How To Use the OData Attachment Service?",id:"how-to-use-the-odata-attachment-service",level:3},{value:"Open API Related Questions",id:"open-api-related-questions",level:2},{value:"Do You Support RESTful Services?",id:"do-you-support-restful-services",level:3},{value:"Questions About SAP Business Technology Platform",id:"questions-about-sap-business-technology-platform",level:2},{value:"Do You Support SAP BTP, Cloud Foundry Environment?",id:"do-you-support-sap-btp-cloud-foundry-environment",level:3},{value:"Do You Support SAP Business Technology Platform - Neo?",id:"do-you-support-sap-business-technology-platform---neo",level:3},{value:"Do You Support Reactive Spring Technology, e.g. Webflux?",id:"do-you-support-reactive-spring-technology-eg-webflux",level:3},{value:"Is the SAP Cloud SDK for Java affected by the Log4Shell/CVE-2021-44228 Vulnerability?",id:"is-the-sap-cloud-sdk-for-java-affected-by-the-log4shellcve-2021-44228-vulnerability",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-questions"},"General Questions"),(0,o.kt)("h3",{id:"how-often-do-you-release-a-new-sap-cloud-sdk-version"},"How Often Do You Release a New SAP Cloud SDK Version?"),(0,o.kt)("p",null,"We release a ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-policy#minor-release-schedule"},"minor version")," every two weeks.\nAll the features that are ",(0,o.kt)("em",{parentName:"p"},"Generally Available")," or ",(0,o.kt)("em",{parentName:"p"},"Beta")," get into the next ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"release"),".\nYou can find the latest SAP Cloud SDK version and the list of previous releases ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"here")," or on ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"Maven Central"),".\nFind more details in our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-policy"},"release policy"),"."),(0,o.kt)("h3",{id:"should-i-update-with-every-release"},"Should I Update With Every Release?"),(0,o.kt)("p",null,"The general recommendation is ",(0,o.kt)("em",{parentName:"p"},"YES"),".\nThis way you'll reduce the effort to keep up with the fast pace of cloud development.\nWe try to keep stable functionality consistent and explicitly notify about breaking changes.\nBe cautious about using features annotated as ",(0,o.kt)("em",{parentName:"p"},"Beta")," because their API can change with every release."),(0,o.kt)("h3",{id:"which-java-versions-are-supported-by-the-sap-cloud-sdk"},"Which Java Versions Are Supported by the SAP Cloud SDK?"),(0,o.kt)("p",null,"The SAP Cloud SDK itself is compatible with Java 8 and 11.\nOther Java versions may work as well, depending on your setup, but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment only supports Java 8 out of the box, but can be configured to also run with Java 11.\nSAP Business Technology Platform Neo only supports Java 8."),(0,o.kt)("h3",{id:"can-i-use-features-annotated-as-beta-in-production"},"Can I Use Features Annotated as Beta in Production?"),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"do not recommend")," using the API that is marked unstable in the production code.\nWe do not guarantee any API compatibility for future updates and the features might be experimental.\nYou can use these features to test new functionality, provide us feedback, and plan migration steps when ",(0,o.kt)("em",{parentName:"p"},"Beta")," features are released as ",(0,o.kt)("em",{parentName:"p"},"General Availability"),"."),(0,o.kt)("h3",{id:"i-think-i-found-a-bug-in-the-sap-cloud-sdk-what-should-i-do"},"I Think I Found a Bug in the SAP Cloud SDK, What Should I Do?"),(0,o.kt)("p",null,"Please, report it to us via any available channel.\nThe preferred support channel is ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"},"Stack Overflow"),".\nYou can also create an issue on the SAP Cloud SDK external GitHub repository or use the internal one if you're the SAP employee."),(0,o.kt)("h3",{id:"im-creating-a-service-now-incident-whats-your-component-name"},"I'm Creating a Service Now Incident, What's Your Component Name?"),(0,o.kt)("p",null,"Choose ",(0,o.kt)("inlineCode",{parentName:"p"},"XX-S4C-SDK")," if you are reporting an issue via Service Now."),(0,o.kt)("h3",{id:"how-do-i-remotely-debug-my-app-on-sap-btp-cloud-foundry"},"How Do I Remotely Debug My App on SAP BTP Cloud Foundry?"),(0,o.kt)("p",null,"Use these CF CLI instructions to activate debugging for your App."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TomEE (when using SAP Java Buildpack)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cf ssh application -c \"app/META-INF/.sap_java_buildpack/sapjvm/bin/jvmmon <<< 'start debugging'\"\ncf ssh application -N -T -L 8000:localhost:8000\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Spring")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cf set-env application JBP_CONFIG_DEBUG "{enabled: true}"\ncf restage application\ncf ssh -N -T -L 8000:localhost:8000 application\n')),(0,o.kt)("p",null,"Check out this ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2019/07/24/remote-debugging-on-cloud-foundry/"},"blog post")," for step-by-step remote debugging instructions.\nYou'll also learn how to get debug information into IntelliJ IDEA."),(0,o.kt)("admonition",{title:"warning",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Do not forget to revert any changes you made to your ",(0,o.kt)("inlineCode",{parentName:"p"},"mta.yml")," (and/or environment) after your debugging session.\nWe strongly discourage users from running productive applications in debug mode!")),(0,o.kt)("h3",{id:"im-observing-a-defaulthttpclientfactory-not-a-subtype-exception"},"I'm Observing a ",(0,o.kt)("inlineCode",{parentName:"h3"},"DefaultHttpClientFactory not a subtype")," Exception"),(0,o.kt)("p",null,"Application that rely on the SAP Java Buildpack, which is always true for application that require JCo, may throw the following exception when trying to access a RFC destination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"java.util.ServiceConfigurationError: com.sap.cloud.security.client.HttpClientFactory: com.sap.cloud.security.client.DefaultHttpClientFactory not a subtype\n")),(0,o.kt)("p",null,"This issue is caused by a dependency scope conflict and can be solved by following ",(0,o.kt)("a",{parentName:"p",href:"./guides/manage-dependencies#avoiding-scope-conflicts"},"our guidance"),"."),(0,o.kt)("h2",{id:"odata-related-questions"},"OData Related Questions"),(0,o.kt)("h3",{id:"what-versions-of-odata-protocol-do-you-support"},"What Versions of OData Protocol Do You Support?"),(0,o.kt)("p",null,"We support OData v2 and OData v4 services.\nYou can use the pregenerated client libraries supplied with the SAP Cloud SDK or generate your client from the SAP Cloud SDK specification.\n",(0,o.kt)("a",{parentName:"p",href:"features/odata/overview"},"Find more details here.")),(0,o.kt)("h3",{id:"do-you-support-all-odata-features"},"Do You Support All OData Features?"),(0,o.kt)("p",null,"We support most of the OData features that are exposed by SAP services.\nHowever, the ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"OData specification")," is huge and contains many features that would see rare to no use.\nIf you need a feature that is not yet supported by SAP Cloud SDK, please make a feature request via email ",(0,o.kt)("a",{parentName:"p",href:"mailto:cloudsdk@sap.com"},"cloudsdk@sap.com")," or create an issue towards one of our repositories."),(0,o.kt)("h3",{id:"i-receive-an-odata-errorexception-when-using-sap-cloud-sdk-for-java"},"I Receive an OData Error/Exception When Using SAP Cloud SDK for Java"),(0,o.kt)("p",null,"You may see some errors while developing.\nThese errors are not always caused by flaws in the SAP Cloud SDK as we often see inconsistent OData protocol handling by different services.\nSome of them even have known flaws for which we have workarounds.\nIf you can't solve your issue via debugging and experimenting, please, report your incident via ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"},"Stack Overflow")," or our GitHub repositories."),(0,o.kt)("h3",{id:"how-to-use-the-odata-attachment-service"},"How To Use the OData Attachment Service?"),(0,o.kt)("p",null,"You are trying to use the virtual data model for ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_CV_ATTACHMENT_SRV/overview"},"AttachmentService")," as provided by the SAP Cloud SDK.\nHowever, it's impossible to run the request successfully, the attachments will not be uploaded.\nThis is caused by an outdated specification, for which the Java classes are automatically generated.\nAs a consequence the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"AttachmentService")," interface and ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultAttachmentService")," implementation cannot be used reliably."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"We recommend running manual requests instead (click to expand)."),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Request CSRF token with HEAD request"),(0,o.kt)("li",null,"Upload Attachment with POST request.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Resolve HttpClient instance\nHttpDestination destination;\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\n\n// Resolve CSRF token, internally runs HEAD request\nString csrfToken = new DefaultCsrfTokenRetriever()\n    .retrieveCsrfToken(httpClient, AttachmentService.DEFAULT_SERVICE_PATH)\n    .getToken();\n\n// Prepare attachment for HTTP request\nInputStream inStream;\nHttpEntity attachmentEntity = new InputStreamEntity(inStream); // alternatively, new FileEntity(File)\n\n// Prepare attachment creation request\nHttpPost create = new HttpPost(AttachmentService.DEFAULT_SERVICE_PATH + "/AttachmentContentSet");\ncreate.setEntity(attachmentEntity);\ncreate.setHeader(DefaultCsrfTokenRetriever.X_CSRF_TOKEN_HEADER_KEY, csrfToken);\ncreate.setHeader("Content-Type", "image/jpeg");\ncreate.setHeader("Slug", "\'filename.jpg\'");\ncreate.setHeader("BusinessObjectTypeName", "\'ObjectTypeName\'");\ncreate.setHeader("LinkedSAPObjectKey", "\'ObjectKey\'");\n\n// Send attachment creation request\nHttpResponse response = httpClient.execute(create);\n\n// Parse response\nString responseText = EntityUtils.toString(response.getEntity());\n')),(0,o.kt)("p",null,"Once you've decided on ",(0,o.kt)("inlineCode",{parentName:"p"},"InputStream")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," as underlying data type for ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpEntity"),", you need to apply values for HTTP headers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x-csrf-token")," - value from previous HEAD request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," - value depending on a file type, make sure it is correct"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Slug")," - value in single-quotes ",(0,o.kt)("inlineCode",{parentName:"li"},"'")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BusinessObjectTypeName")," - value in single-quotes ",(0,o.kt)("inlineCode",{parentName:"li"},"'")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LinkedSAPObjectKey")," - value in single-quotes ",(0,o.kt)("inlineCode",{parentName:"li"},"'"),".")),(0,o.kt)("p",null,"Please note, depending on the file size, a request may take several seconds to minutes.\nThis suggested HTTP interaction is the ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/7489fa08cede494cbdf08fa3651598af/2105.500/en-US/63259b6826174573bc32f2e1d1609cd9.html"},"officially documented")," approach.\nIt's not considered a workaround."),(0,o.kt)("p",null,"In case you want to deserialize the JSON from ",(0,o.kt)("inlineCode",{parentName:"p"},"responseTest")," variable, then run the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Deserialize the AttachmentContent object\nTypeToken<Map<String, AttachmentContent>> responseType = new TypeToken<Map<String, AttachmentContent>>() {\n};\nMap<String, AttachmentContent> responseObject = new Gson().fromJson(responseText, responseType.getType());\nAttachmentContent result = responseObject.get("d");\n'))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Provide a correct ',(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Content-Type"),'"'),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Conten-Type")," should correspond to the uploaded file or your upload might fail.")),(0,o.kt)("h2",{id:"open-api-related-questions"},"Open API Related Questions"),(0,o.kt)("h3",{id:"do-you-support-restful-services"},"Do You Support RESTful Services?"),(0,o.kt)("p",null,"Yes, we do support ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/v2/"},"OpenAPI 2.0 also known as Swagger"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI 3.0")," specifications.\nThe latter is preferred.\nFind documentation how to generate a ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/rest/generate-rest-client"},"type-safe Open API client here"),".\nWe also release pregenerated libraries in collaboration with service providers who release RESTful Open API services.\nFor details check an ",(0,o.kt)("a",{parentName:"p",href:"features/rest/overview"},"overview"),".\nFor feedback or questions about our Open API offering, please, create an issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues"},"here"),"."),(0,o.kt)("h2",{id:"questions-about-sap-business-technology-platform"},"Questions About SAP Business Technology Platform"),(0,o.kt)("h3",{id:"do-you-support-sap-btp-cloud-foundry-environment"},"Do You Support SAP BTP, Cloud Foundry Environment?"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java has first-class support for ",(0,o.kt)("a",{parentName:"p",href:"https://www.sap.com/germany/products/business-technology-platform.html"},"SAP BTP, Cloud Foundry environment"),".\nWe provide plenty of helpful abstractions for ",(0,o.kt)("a",{parentName:"p",href:"features/connectivity/sdk-connectivity-destination-service"},"connectivity")," and authentication that make developing apps a pleasant and rewarding experience.\nLet us know if you miss functionality of the SAP BTP for the Cloud Foundry environment in the SAP Cloud SDK for Java."),(0,o.kt)("h3",{id:"do-you-support-sap-business-technology-platform---neo"},"Do You Support SAP Business Technology Platform - Neo?"),(0,o.kt)("p",null,"We still provide full support for SAP Business Technology Platform Neo.\nHowever, we do not recommend starting new projects with SAP BTP for the Neo environment.\nThe Cloud Foundry environment is better suited for apps and SAP S/4HANA extension development.\nAlso, for Neo we provide out-of-the-box support with only servlet based applications and not spring based applications."),(0,o.kt)("h3",{id:"do-you-support-reactive-spring-technology-eg-webflux"},"Do You Support Reactive Spring Technology, e.g. Webflux?"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java currently is not fully compatible with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/5.0.0.M1/spring-framework-reference/html/web-reactive.html"},"Reactive Spring Technology Stack"),".\nMost importantly, the ",(0,o.kt)("a",{parentName:"p",href:"features/multi-tenancy/multi-tenancy-thread-context"},"Multi Tenancy Features")," are not functional on that stack, because they were designed with servlet based applications in mind."),(0,o.kt)("p",null,"You can find more details on this ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68177837/how-to-use-spring-webclient-properly-in-the-tenant-context"},"Stack Overflow Question"),"."),(0,o.kt)("h3",{id:"is-the-sap-cloud-sdk-for-java-affected-by-the-log4shellcve-2021-44228-vulnerability"},"Is the SAP Cloud SDK for Java affected by the Log4Shell/CVE-2021-44228 Vulnerability?"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java uses SLF4J as its logging framework and actively excludes all other logging frameworks.\nThis exclusion strategy also applies to transitive dependencies.\nThat means you will not find any logging implementations provided or expected by the SAP Cloud SDK for Java.\nThat is why the SAP Cloud SDK for Java itself does not render your application built on it vulnerable to the Log4Shell vulnerability."),(0,o.kt)("p",null,"However, you should still check that your application or one of its dependencies doesn't include ",(0,o.kt)("inlineCode",{parentName:"p"},"log4j-core")," on the classpath."),(0,o.kt)("p",null,"Our SAP BTP CF Archetypes use logback as the logging implementation, the SAP BTP Neo archetype relies on the logger provided by the Neo Platform."),(0,o.kt)("p",null,"For further reading on this vulnerability have a look at the following (external) links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.lunasec.io/docs/blog/log4j-zero-day-mitigation-guide/"},"https://www.lunasec.io/docs/blog/log4j-zero-day-mitigation-guide/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://slf4j.org/log4shell.html"},"http://slf4j.org/log4shell.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.sap.com/content/dam/support/en_us/library/ssp/my-support/trust-center/sap-tc-01-5025.pdf"},"https://support.sap.com/content/dam/support/en_us/library/ssp/my-support/trust-center/sap-tc-01-5025.pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-44228"},"https://nvd.nist.gov/vuln/detail/CVE-2021-44228"))))}d.isMDXComponent=!0}}]);