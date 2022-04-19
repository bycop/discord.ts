"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7467],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),o=t(2389),l=t(5979),u=t(6010),i="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),k=h.tabGroupChoices,O=h.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],N=w[1],j=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=k[f];null!=x&&x!==T&&g.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var n=e.currentTarget,t=j.indexOf(n),r=g[t].value;r!==T&&(E(n),N(r),null!=f&&O(f,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},397:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(9877),u=t(8215),i=["components"],s={title:"Debugging"},c=void 0,d={unversionedId:"general/debugging",id:"general/debugging",title:"Debugging",description:"Use the VSCode debugger to debug your bot",source:"@site/docs/general/debugging.md",sourceDirName:"general",slug:"/general/debugging",permalink:"/docs/general/debugging",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/debugging.md",tags:[],version:"current",lastUpdatedBy:"oceanroleplay",lastUpdatedAt:1650365528,formattedLastUpdatedAt:"4/19/2022",frontMatter:{title:"Debugging"},sidebar:"docSidebar",previous:{title:"Client",permalink:"/docs/general/client"},next:{title:"List of the discord.js events",permalink:"/docs/general/events"}},p={},f=[],m={toc:f};function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the VSCode debugger to debug your bot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," file at your project root directory if the file do not already exists"),(0,o.kt)("li",{parentName:"ol"},"Install ts-node as a dev dependency")),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev ts-node\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev ts-node\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy paste this into your ",(0,o.kt)("inlineCode",{parentName:"li"},"launch.json")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug bot",\n      "protocol": "inspector",\n      "args": ["${workspaceRoot}/PATH_TO_YOUR_MAIN.ts"],\n      "cwd": "${workspaceRoot}",\n      "runtimeArgs": ["-r", "ts-node/register"],\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You can now put some breakpoints, go to the debug tab in VSCode and launch your bot")))}b.isMDXComponent=!0}}]);