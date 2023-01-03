"use strict";(self.webpackChunknifty_island_standards_docs=self.webpackChunknifty_island_standards_docs||[]).push([[971],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=u(n),p=a,h=f["".concat(d,".").concat(p)]||f[p]||c[p]||i;return n?r.createElement(h,o(o({ref:e},l),{},{components:n})):r.createElement(h,o({ref:e},l))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1269:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},assets:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"/",sidebar_position:0},d="Introduction",u={unversionedId:"index",id:"index",title:"Introduction",description:"Nyft Studio's commitment to interoperability has led us to understand the need for standardization of Non-Fungible Token (NFT) metadata. This is not to say that all NFTs must follow the exact same rigid guidelines; our philosophy is that there must exist clearly-defined standards and an NFT must dictate which standards it does follow.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/etm-standard/",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"ETM_v1.0.0",permalink:"/etm-standard/ETM_v1.0.0"}},l={},c=[],f={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Nyft Studio's commitment to interoperability has led us to understand the need for standardization of Non-Fungible Token (NFT) metadata. This is not to say that all NFTs must follow the exact same rigid guidelines; our philosophy is that there must exist clearly-defined standards and an NFT must dictate which standards it ",(0,i.kt)("em",{parentName:"p"},"does")," follow."),(0,i.kt)("p",null,"Metadata is the source of truth for information about an NFT. As standard practice since ERC-721, NFT contracts typically point to a JSON file which holds this metadata. However, only suggestions exist as to how this metadata should be formatted, and many big players in the NFT space have put forward fragile metadata practices that suit their needs rather than properly serving interoperability in a flexible way."),(0,i.kt)("p",null,"In order to solve this problem in a fashion that can be sustained long-term, we have nailed down a base metadata standard with very few requirements which is designed to be extended in an unambiguous way. This standard is designed to be compatible with existing NFT infrastructure at the time of writing, but also offers flexibility to right the wrongs we have made in this era of frantic building. The starting point for reading should be this ",(0,i.kt)("a",{parentName:"p",href:"ETM_v1.0.0"},"Extensible Token Metadata (ETM) Standard"),". Further standards here are extensions of this base standard."),(0,i.kt)("p",null,"Lots-o-Love,",(0,i.kt)("br",{parentName:"p"}),"\n","Zunk"))}p.isMDXComponent=!0}}]);