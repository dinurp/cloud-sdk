"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4230],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},l=void 0,p={unversionedId:"java/guides/cloud-foundry-xsuaa-service",id:"java/guides/cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",source:"@site/docs/java/guides/cf-xsuaa.mdx",sourceDirName:"java/guides",slug:"/java/guides/cloud-foundry-xsuaa-service",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-xsuaa.mdx",tags:[],version:"current",lastUpdatedBy:"Deeksha Sinha",lastUpdatedAt:1655290369,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},sidebar:"someSidebar",previous:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"},next:{title:"Dependency Management",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies"}},c={},d=[{value:"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases",id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases",level:2},{value:"Read the Application Properties",id:"read-the-application-properties",level:3},{value:"Authorization Code Grant",id:"authorization-code-grant",level:2},{value:"Get Authorization Code",id:"get-authorization-code",level:3},{value:"Get OAuth2 Access Token",id:"get-oauth2-access-token",level:3},{value:"JSON Web Token Bearer Token Grant",id:"json-web-token-bearer-token-grant",level:2},{value:"Client Credentials Grant",id:"client-credentials-grant",level:2},{value:"Refresh Token Grant",id:"refresh-token-grant",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When developing and deploying an application it quickly becomes important to understand how authentication and authorizations work on the SAP BTP, Cloud Foundry environment.\nIn our tutorials and documentation, we recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"approuter")," as a proxy service to handle authentication management to your implemented application.\nThe following steps will show what happens behind the scenes.\nThe requests can be manually reproduced by a REST client of your choice, e.g. Postman or Insomnia."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"XSUAA service is developed independently of SAP Cloud SDK")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following documentation only touches a subset of features of the XSUAA Service on Cloud Foundry.\nThe SAP Cloud SDK and XSUAA are developed independently.\nWe do not provide in-depth support on XSUAA topics beyond SAP Cloud SDK use cases.\nMind, if some information seems outdated - get in touch with us and refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/"},"official XSUAA docs"),"."))),(0,i.kt)("h2",{id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases"},"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Login: ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization Code Grant")),(0,i.kt)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a User: ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT Bearer Token Grant")),(0,i.kt)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a service: ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Credentials Grant")),(0,i.kt)("li",{parentName:"ul"},"Resolve User Access Token: ",(0,i.kt)("inlineCode",{parentName:"li"},"Refresh Token Grant"))),(0,i.kt)("h3",{id:"read-the-application-properties"},"Read the Application Properties"),(0,i.kt)("p",null,"To create a request, we need to parse the XSUAA connection data."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Take note of your "',(0,i.kt)("em",{parentName:"p"},"application route"),"\". That's the URL for which an authorization request will be built.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("strong",{parentName:"p"},"system-provided")," environment variables of your application on Cloud Foundry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Extract values ",(0,i.kt)("inlineCode",{parentName:"p"},"_url_"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_clientid_"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_clientsecret_")," from the JSON value, located in the object ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES.xsuaa[0].credentials"),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Depending on your setup, the ",(0,i.kt)("inlineCode",{parentName:"p"},"xsuaa")," array may have more than one entry.\nBecause your application can be bound to multiple instances, e.g. through different service plans."))),(0,i.kt)("h2",{id:"authorization-code-grant"},"Authorization Code Grant"),(0,i.kt)("p",null,"Since we start without an existing access token, our journey begins with the browser flow of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#authorization-code-grant"},"Authorization Code Grant"),"."),(0,i.kt)("p",null,"This flow is split into two steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get authorization code on behalf of a single-sign-on login form."),(0,i.kt)("li",{parentName:"ul"},"Get personal access token from authorization code.")),(0,i.kt)("h3",{id:"get-authorization-code"},"Get Authorization Code"),(0,i.kt)("p",null,"You will likely need to run the following HTTP request in your browser and check the HTTP response."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make the following request:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"GET https://[xsuaa.url]/oauth/authorize\n\nQuery parameters:\n\nclient_id=[xsuaa.clientid]\nredirect_uri=[application.route]\nresponse_type=code\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Optional values can be set for "scope" and "login_hint".\nUse ',(0,i.kt)("inlineCode",{parentName:"p"},"scope=uaa.user"),' here when facing unexpected "Unauthorized" response for the resulting ',(0,i.kt)("inlineCode",{parentName:"p"},"[code]")," in the next request.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit login form via a browser or REST API debugging tools like POSTMAN or Insomnia.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the HTTP response and extract ",(0,i.kt)("inlineCode",{parentName:"p"},"[code]")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," header."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 302 Found\nStrict-Transport-Security: max-age=31536000\nSet-Cookie: X-Uaa-Csrf=[...]; Path=/; Max-Age=86400; Expires=[...]; HttpOnly\nCache-Control: no-store\nContent-Language: en\nLocation: [application.route]?code=[code]\nX-XSS-Protection: 1; mode=block\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\n")))),(0,i.kt)("h3",{id:"get-oauth2-access-token"},"Get OAuth2 Access Token"),(0,i.kt)("p",null,"With the authorization code we can now request a real access token from the OAuth2 service endpoint:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make the following request:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nredirect_uri=[application.route]\ncode=[code]\ngrant_type=authorization_code\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Congratulation, now you've fetched a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),".\nIt can be further evaluated and forwarded."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some applications like ",(0,i.kt)("inlineCode",{parentName:"p"},"_approuter_")," will save the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," to the user session for you.\nThis enables the automatic retrieval of new access tokens after the existing one has expired during the active session."))),(0,i.kt)("h2",{id:"json-web-token-bearer-token-grant"},"JSON Web Token Bearer Token Grant"),(0,i.kt)("p",null,"Several services on the SAP BTP, require a dedicated OAuth2 access token, e.g. ",(0,i.kt)("em",{parentName:"p"},"Connectivity Service")," and ",(0,i.kt)("em",{parentName:"p"},"Destination Service"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("strong",{parentName:"p"},"system-provided")," environment variables of your application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the JSON value, locate the object ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES.destination[0].credentials"),". Make note of ",(0,i.kt)("inlineCode",{parentName:"p"},"clientid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clientsecret"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make the following request:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\nassertion=[access_token]\ngrant_type=urn:ietf:params:oauth:grant-type:jwt-bearer\nresponse_type=token\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Congratulation, you have a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the current user."))),(0,i.kt)("h2",{id:"client-credentials-grant"},"Client Credentials Grant"),(0,i.kt)("p",null,"Some applications require access to a platform service without an active user session, with ",(0,i.kt)("em",{parentName:"p"},"technical user")," credentials.\nFor example, reading a list of destinations does not require a user access token.\nInstead, we can request an access token on behalf of the service binding itself.\nHere we use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#without-authorization"},"Client Credentials Grant"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a request:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\ngrant_type=client_credentials\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Congratulation, you have a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the service binding."))),(0,i.kt)("h2",{id:"refresh-token-grant"},"Refresh Token Grant"),(0,i.kt)("p",null,"If the current access token is expired, a new one can be requested with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#refresh-token"},"Refresh Token flow"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a request:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nrefresh_token=[refresh_token]\ngrant_type=refresh_token\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Congratulation, you now have a refreshed ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),"."))))}m.isMDXComponent=!0}}]);