"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(58911),l=a(65488),i=a(85162);const p={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,d={unversionedId:"getting-started",id:"version-v3/getting-started",title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",source:"@site/docs-java_versioned_docs/version-v3/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/cloud-sdk/docs/java/v3/getting-started",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/getting-started.mdx",tags:[],version:"v3",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/v3/overview-cloud-sdk-for-java"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/v3/features/odata/overview"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Generating a Project from a Maven Archetype",id:"generating-a-project-from-a-maven-archetype",level:2},{value:"Integrate the SAP Cloud SDK for Java Into Your Project",id:"integrate-the-sap-cloud-sdk-for-java-into-your-project",level:2},{value:"Adding Dependencies",id:"adding-dependencies",level:3},{value:"Framework Integration",id:"framework-integration",level:3},{value:"More Step-by-Step Guides",id:"more-step-by-step-guides",level:2},{value:"Next Steps and Useful Resources",id:"next-steps-and-useful-resources",level:2}],m={toc:c};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"MvnBadge"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"To get started with the SAP Cloud SDK for Java you can either create a new project or integrate the SAP Cloud SDK into your existing one.\nYou will need an installation of Java and Maven."),(0,o.kt)("admonition",{title:"Java version compatibility",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK itself is compatible with Java 8 and 11.\nOther Java versions may work as well depending on your setup but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment only supports Java 8 out of the box but can be configured to also run with Java 11.\nSAP Business Technology Platform Neo only supports Java 8.")),(0,o.kt)("p",null,"To start with a clean, new project you can select ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=com.sap.cloud.sdk.archetypes"},"one of our archetypes")," and build upon it.\nAlternatively, you can follow ",(0,o.kt)("a",{parentName:"p",href:"#integrate-the-cloud-sdk-for-java-into-your-project"},"these instructions")," to integrate the SAP Cloud SDK into your existing setup."),(0,o.kt)("h2",{id:"generating-a-project-from-a-maven-archetype"},"Generating a Project from a Maven Archetype"),(0,o.kt)("p",null,"The SAP Cloud SDK provides archetypes based on ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE"),", so select whatever suits you best."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The mentioned archetypes work out-of-the-box for Cloud Foundry.\nFor Neo platform we provide an archetype ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-neo-javaee7")," for only servlet based projects.")),(0,o.kt)("p",null,"Run:"),(0,o.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"spring",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-spring" \\\n    "-DarchetypeVersion=RELEASE"\n'))),(0,o.kt)(i.Z,{value:"tomee",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-tomee" \\\n    "-DarchetypeVersion=RELEASE"\n')))),(0,o.kt)("p",null,"Maven will ask you to provide the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupId")," - usually serves as your organization identifier, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"foo.bar.cloud.app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"artifactId")," - it's your application's name, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"mydreamapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version")," - we recommend keeping ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0-SNAPSHOT")," if you're just starting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package")," - by default this equals to ",(0,o.kt)("inlineCode",{parentName:"li"},"groupId"),". Change it only if you know what you're doing")),(0,o.kt)("p",null,"After providing all the interactive values to the CLI it will generate your first SAP Cloud SDK based application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> maven-archetype-plugin:3.1.2:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< maven-archetype-plugin:3.1.2:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- maven-archetype-plugin:3.1.2:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] ....\n[INFO] ....\nDefine value for property 'groupId': foo.bar.cloud.app\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\n[INFO] Using property: gitignore = .gitignore\n[INFO] Using property: skipUsageAnalytics = false\nConfirm properties configuration:\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\ngitignore: .gitignore\nskipUsageAnalytics: false\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-tomee:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: skipUsageAnalytics, Value: false\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Project created from Archetype in dir: /home/i531196/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  02:28 min\n[INFO] Finished at: 2020-04-19T19:25:33+02:00\n[INFO] ------------------------------------------------------------------------\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! You've just set up a brand-new application with the SAP Cloud SDK for Java.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To change the Java version modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"<java.version>")," property in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),".")),(0,o.kt)("h2",{id:"integrate-the-sap-cloud-sdk-for-java-into-your-project"},"Integrate the SAP Cloud SDK for Java Into Your Project"),(0,o.kt)("h3",{id:"adding-dependencies"},"Adding Dependencies"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/overview-cloud-sdk#sap-cloud-application-programming-model"},"integrates with CAP projects"),"!\nFollow the steps below or check out the dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial on SAP Developers"),".")),(0,o.kt)("p",null,"To get started with an existing project include the ",(0,o.kt)("em",{parentName:"p"},"SAP Cloud SDK BOM")," in the ",(0,o.kt)("em",{parentName:"p"},"dependency management")," section of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("p",null,"If your application is running on ",(0,o.kt)("strong",{parentName:"p"},"SAP Business Technology Platform")," please add the appropriate dependency:"),(0,o.kt)(l.Z,{groupId:"btp",defaultValue:"cf",values:[{label:"Cloud Foundry",value:"cf"},{label:"Neo",value:"neo"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cf",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n"))),(0,o.kt)(i.Z,{value:"neo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-neo</artifactId>\n</dependency>\n")))),(0,o.kt)("p",null,"If you want to connect to an ",(0,o.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system via the ",(0,o.kt)("strong",{parentName:"p"},"OData")," protocol, you should also add a dependency to the client libraries of the SAP Cloud SDK.\nThe dependencies differ with respect to the type of ",(0,o.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system(",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},(0,o.kt)("strong",{parentName:"a"},"SAP S/4HANA Cloud"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},(0,o.kt)("strong",{parentName:"a"},"SAP S/4HANA On-premise 2020/2021")),"):"),(0,o.kt)(l.Z,{groupId:"s4",defaultValue:"s4hc",values:[{label:"SAP S/4HANA Cloud",value:"s4hc"},{label:"SAP S/4HANA On-premise 2020",value:"s4op2020"},{label:"SAP S/4HANA On-premise 2021",value:"s4op2021"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"s4hc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-all</artifactId>\n</dependency>\n"))),(0,o.kt)(i.Z,{value:"s4op2020",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-onpremise-2020</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-v4-onpremise-2020</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-connectivity</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-core</artifactId>\n</dependency>\n"))),(0,o.kt)(i.Z,{value:"s4op2021",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-onpremise</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-v4-onpremise</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-connectivity</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-core</artifactId>\n</dependency>\n")))),(0,o.kt)("p",null,"In case you have a ",(0,o.kt)("strong",{parentName:"p"},"CAP application")," which uses ",(0,o.kt)("strong",{parentName:"p"},"multitenancy")," features and/or a ",(0,o.kt)("strong",{parentName:"p"},"protected backend")," your service will need the following dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"We also recommend that you include the following plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.plugins</groupId>\n    <artifactId>usage-analytics-maven-plugin</artifactId>\n    <version>use-latest-version-here</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>usage-analytics</goal>\n            </goals>\n            <configuration>\n                <skipUsageAnalytics>false</skipUsageAnalytics>\n                <generateSalt>true</generateSalt>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"It sends ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://blogs.sap.com/2018/10/23/usage-analytics-s4sdk/"},"anonymized usage data"))," such as the SAP Cloud SDK version used and helps us with improving the SAP Cloud SDK.\nFurthermore, the plugin is capable of generating a report with useful information about the project setup.\nInvoking ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnosis-report")," will print out the SAP Cloud SDK modules used and their version but also other information like the Java and Maven version.\nThis is helpful when you are facing an issue and are reaching out to us for help."),(0,o.kt)("h3",{id:"framework-integration"},"Framework Integration"),(0,o.kt)("p",null,"In general, the SAP Cloud SDK for Java integrates natively into the ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE")," frameworks."),(0,o.kt)("p",null,"In particular the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},"SAP Cloud SDK provides listeners")," that can extract tenant and principal information from an incoming request.\nTo ensure these listeners are present, please configure your project accordingly."),(0,o.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"spring",mdxType:"TabItem"},(0,o.kt)("p",null,"For a Spring based project please ensure that the application is annotated to scan for components of the SAP Cloud SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n@ServletComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n')),(0,o.kt)("p",null,"Check the logs during application startup to ensure the listeners got registered.\nAlso, please check ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.sap.cloud.sdk/sdk-bom/latest"},"the Spring version")," declared in the SAP Cloud SDK BOM doesn't clash with your version of Spring."),(0,o.kt)("admonition",{title:"Spring Support for Cloud Foundry",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For Spring based projects we provide out-of-the-box support only on Cloud Foundry with archetype ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-cf-spring"),"."))),(0,o.kt)(i.Z,{value:"tomee",mdxType:"TabItem"},(0,o.kt)("p",null,"For a TomEE based project, the filters should be registered automatically.\nThey are part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"servlet")," module which comes into the dependency tree through ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-cf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-neo")," automatically.\nCheck the logs during application startup to ensure the listeners got registered."))),(0,o.kt)("admonition",{title:"SAP Cloud SDK Modules Bill-of-Material",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your Maven POM file.")),(0,o.kt)("h2",{id:"more-step-by-step-guides"},"More Step-by-Step Guides"),(0,o.kt)("p",null,"If you want to continue learning by example check out our ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"},"tutorials for SAP Cloud SDK for Java"),"."),(0,o.kt)("h2",{id:"next-steps-and-useful-resources"},"Next Steps and Useful Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get and configure the ",(0,o.kt)("a",{parentName:"li",href:"guides/cf-cli"},"Cloud Foundry CLI")),(0,o.kt)("li",{parentName:"ul"},"Check our latest ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes")),(0,o.kt)("li",{parentName:"ul"},"Welcome to our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"support")," if you have questions or experiencing any issues")))}g.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(86010),l=a(72389),i=a(67392),p=a(7094),s=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:m,values:g,groupId:h,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:I,setTabGroupChoices:b}=(0,p.U)(),[S,A]=(0,o.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=h){const e=I[h];null!=e&&e!==S&&v.some((t=>t.value===e))&&A(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),n=v[a].value;n!==S&&(P(t),A(n),null!=h&&b(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;a=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var o;const t=w.indexOf(e.currentTarget)-1;a=null!=(o=w[t])?o:w[w.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>w.push(e),onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),l?(0,o.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},58911:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);