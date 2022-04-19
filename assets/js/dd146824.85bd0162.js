"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8332],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Readme"},l=void 0,d={unversionedId:"packages/discordx/README",id:"packages/discordx/README",title:"Readme",description:'<a href="https://discord-ts.js.org/discord"',source:"@site/docs/packages/discordx/README.md",sourceDirName:"packages/discordx",slug:"/packages/discordx/",permalink:"/docs/packages/discordx/",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/packages/discordx/README.md",tags:[],version:"current",frontMatter:{title:"Readme"},sidebar:"packagesSidebar",previous:{title:"Readme",permalink:"/docs/packages/create-discordx/"},next:{title:"Readme",permalink:"/docs/packages/changelog/"}},p={},c=[{value:"General",id:"general",level:2},{value:"Commands",id:"commands",level:2},{value:"GUI Interactions",id:"gui-interactions",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:""}),(0,o.kt)("div",null,(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://discord-ts.js.org",target:"_blank",rel:"nofollow"},(0,o.kt)("img",{src:"https://discord-ts.js.org/discord-ts.svg",width:"546"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://discord-ts.js.org/discord"},(0,o.kt)("img",{src:"https://img.shields.io/discord/874802018361950248?color=5865F2&logo=discord&logoColor=white",alt:"Discord server"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/discordx"},(0,o.kt)("img",{src:"https://img.shields.io/npm/v/discordx.svg?maxAge=3600",alt:"NPM version"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/discordx"},(0,o.kt)("img",{src:"https://img.shields.io/npm/dt/discordx.svg?maxAge=3600",alt:"NPM downloads"})),(0,o.kt)("a",{href:"https://github.com/oceanroleplay/discord.ts/actions"},(0,o.kt)("img",{src:"https://github.com/oceanroleplay/discord.ts/workflows/Build/badge.svg",alt:"Build status"})),(0,o.kt)("a",{href:"https://www.paypal.me/vijayxmeena"},(0,o.kt)("img",{src:"https://img.shields.io/badge/donate-paypal-F96854.svg",alt:"paypal"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null," Create a discord bot with TypeScript and Decorators! "))),(0,o.kt)("h1",{id:"-introduction"},"\ud83d\udcd6 Introduction"),(0,o.kt)("p",null,"This module is an extension of ",(0,o.kt)("strong",{parentName:"p"},"[discord."),"js",(0,o.kt)("strong",{parentName:"p"},"](",(0,o.kt)("a",{parentName:"strong",href:"https://discordjs.guide/"},"https://discordjs.guide/"),")"),", so the internal behavior (methods, properties, ...) is the same."),(0,o.kt)("p",null,"This library allows you to use TypeScript decorators on discord.",(0,o.kt)("strong",{parentName:"p"},"js"),", it simplifies your code and improves the readability!"),(0,o.kt)("p",null,"This repository is a ",(0,o.kt)("del",{parentName:"p"},"fork")," of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OwenCalvin/discord.ts"},"OwenCalvin/discord.ts")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OwenCalvin"},"@OwenCalvin"),", which is no longer actively maintained."),(0,o.kt)("h1",{id:"-installation"},"\ud83d\udcbb ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/installation"},"Installation")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version 16.6.0 or newer of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," is required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install discordx\nyarn add discordx\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org/docs/installation#installation"},"installation guide")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discord.ts/tree/main/packages/create-discordx#-introduction"},"one-click installation")))),(0,o.kt)("h1",{id:"-documentation"},"\ud83d\udcdc Documentation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org"},"discord-ts.js.org")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://dev.to/oceanroleplay/series/14317"},"Tutorials (dev.to)")))),(0,o.kt)("h1",{id:"-bot-examples"},"\ud83e\udd16 Bot Examples"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discordx-templates"},"discordx-templates"))," (starter repo)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discordx-templates/tree/main/4-music-player-ytdl"},"music bot (ytdl)")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discordx-templates/tree/main/5-music-player-lavalink"},"lavalink bot")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/VictoriqueMoe/Shana"},"Shana"))," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/VictoriqueMoe"},"@VictoriqueMoe"))),(0,o.kt)("h1",{id:"-why-discordx"},"\ud83d\udca1 Why discordx?"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"discordx"),", we intend to provide the latest up-to-date package to easily build feature-rich bots with multi-bot compatibility, simple commands, pagination, music, and much more. ",(0,o.kt)("strong",{parentName:"p"},"Updated daily with discord.js changes"),"."),(0,o.kt)("p",null,"Try discordx now with ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/oceanroleplay/discordx-templates"},"CodeSandbox")),(0,o.kt)("p",null,"If you have any issues or feature requests, Please open an issue at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/issues"},"Github")," or join ",(0,o.kt)("a",{parentName:"p",href:"https://discord-ts.js.org/discord"},"discord server")),(0,o.kt)("h1",{id:"-features"},"\ud83c\udd95 Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support multiple bots in a single nodejs instance (",(0,o.kt)("inlineCode",{parentName:"li"},"@Bot"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@SimpleCommand")," to use old fashioned command, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"!hello world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@SimpleCommandOption")," parse and define command options like ",(0,o.kt)("inlineCode",{parentName:"li"},"@SlashOption")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client.initApplicationCommands")," to create/update/remove discord application commands"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client.initApplicationPermissions")," to update discord application commands permissions"),(0,o.kt)("li",{parentName:"ul"},"Handler for all discord interactions (slash/button/menu/context)"),(0,o.kt)("li",{parentName:"ul"},"Support TSyringe and TypeDI"),(0,o.kt)("li",{parentName:"ul"},"Support ECMAScript")),(0,o.kt)("h1",{id:"-packages"},"\ud83e\uddee Packages"),(0,o.kt)("p",null,"Here are more packages from us to extend the functionality of your Discord bot."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Package"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/discordx"},(0,o.kt)("inlineCode",{parentName:"a"},"create-discordx"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create discordx (discord.ts) apps with one command")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/discordx"},(0,o.kt)("inlineCode",{parentName:"a"},"discordx"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create a discord bot with TypeScript and Decorators!")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/changelog"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/changelog"))),(0,o.kt)("td",{parentName:"tr",align:null},"Changelog generator, written in TypeScript with Node.js")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/di"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/di"))),(0,o.kt)("td",{parentName:"tr",align:null},"Dependency injection service with TSyringe support")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/importer"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/importer"))),(0,o.kt)("td",{parentName:"tr",align:null},"Import solution for ESM and CJS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/internal"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/internal"))),(0,o.kt)("td",{parentName:"tr",align:null},"discord.ts internal methods, can be used for external projects")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/koa"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/koa"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create rest api server with Typescript and Decorators")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/lava-player"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/lava-player"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create lavalink player")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/lava-queue"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/lava-queue"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create queue system for lavalink player")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/music"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/music"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create discord music player easily")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/pagination"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/pagination"))),(0,o.kt)("td",{parentName:"tr",align:null},"Add pagination to your discord bot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/socket.io"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/socket.io"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create socket.io server with Typescript and Decorators")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@discordx/utilities"},(0,o.kt)("inlineCode",{parentName:"a"},"@discordx/utilities"))),(0,o.kt)("td",{parentName:"tr",align:null},"Create own group with ",(0,o.kt)("inlineCode",{parentName:"td"},"@Category")," and guards")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/discord-spams"},(0,o.kt)("inlineCode",{parentName:"a"},"discord-spams"))),(0,o.kt)("td",{parentName:"tr",align:null},"Tiny but powerful discord spam protection library")))),(0,o.kt)("h1",{id:"-decorators"},"\ud83d\udcd4 Decorators"),(0,o.kt)("p",null,"There is a whole system that allows you to implement complex slash/simple commands and handle interactions like button, select-menu, context-menu etc."),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/discord"},(0,o.kt)("inlineCode",{parentName:"a"},"@Discord"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/guard"},(0,o.kt)("inlineCode",{parentName:"a"},"@Guard"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/guild"},(0,o.kt)("inlineCode",{parentName:"a"},"@Guild"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/bot"},(0,o.kt)("inlineCode",{parentName:"a"},"@Bot"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/permission"},(0,o.kt)("inlineCode",{parentName:"a"},"@Permission"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/on"},(0,o.kt)("inlineCode",{parentName:"a"},"@On"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/general/once"},(0,o.kt)("inlineCode",{parentName:"a"},"@Once")))),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/slash"},(0,o.kt)("inlineCode",{parentName:"a"},"@Slash"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/slash-choice"},(0,o.kt)("inlineCode",{parentName:"a"},"@SlashChoice"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/slash-group"},(0,o.kt)("inlineCode",{parentName:"a"},"@SlashGroup"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/slash-option"},(0,o.kt)("inlineCode",{parentName:"a"},"@SlashOption"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/simple-command"},(0,o.kt)("inlineCode",{parentName:"a"},"@SimpleCommand"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/commands/simple-command-option"},(0,o.kt)("inlineCode",{parentName:"a"},"@SimpleCommandOption")))),(0,o.kt)("h2",{id:"gui-interactions"},"GUI Interactions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/gui/button-component"},(0,o.kt)("inlineCode",{parentName:"a"},"@ButtonComponent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/gui/select-menu-component"},(0,o.kt)("inlineCode",{parentName:"a"},"@SelectMenuComponent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/decorators/gui/context-menu"},(0,o.kt)("inlineCode",{parentName:"a"},"@ContextMenu")))),(0,o.kt)("h1",{id:"-slash"},"\ud83d\udcdf ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/commands/slash"},"@Slash")),(0,o.kt)("p",null,"Discord has it's own command system now, you can simply declare commands and use Slash commands this way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Discord, Slash } from "discordx";\nimport { CommandInteraction } from "discord.js";\n\n@Discord()\nclass Example {\n  @Slash("hello")\n  private hello(\n    @SlashOption("text")\n    text: string,\n    interaction: CommandInteraction\n  ) {\n    // ...\n  }\n}\n')),(0,o.kt)("h1",{id:"-buttoncomponent"},"\ud83d\udcdf ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/gui/button-component"},"@ButtonComponent")),(0,o.kt)("p",null,"Create discord button handler with ease!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @Slash("hello")\n  hello(interaction: CommandInteraction) {\n    const helloBtn = new MessageButton()\n      .setLabel("Hello")\n      .setEmoji("\ud83d\udc4b")\n      .setStyle("PRIMARY")\n      .setCustomId("hello-btn");\n\n    const row = new MessageActionRow().addComponents(helloBtn);\n\n    interaction.reply({\n      content: "Say hello to bot",\n      components: [row],\n    });\n  }\n\n  @ButtonComponent("hello-btn")\n  myBtn(interaction: ButtonInteraction) {\n    interaction.reply(`\ud83d\udc4b ${interaction.member}`);\n  }\n}\n')),(0,o.kt)("h1",{id:"-selectmenucomponent"},"\ud83d\udcdf ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/gui/select-menu-component"},"@SelectMenuComponent")),(0,o.kt)("p",null,"Create discord select menu handler with ease!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const roles = [\n  { label: "Principal", value: "principal" },\n  { label: "Teacher", value: "teacher" },\n  { label: "Student", value: "student" },\n];\n\n@Discord()\nclass Example {\n  @SelectMenuComponent("role-menu")\n  async handle(interaction: SelectMenuInteraction) {\n    await interaction.deferReply();\n\n    // extract selected value by member\n    const roleValue = interaction.values?.[0];\n\n    // if value not found\n    if (!roleValue)\n      return await interaction.followUp("invalid role id, select again");\n    await interaction.followUp(\n      `you have selected role: ${\n        roles.find((r) => r.value === roleValue).label\n      }`\n    );\n    return;\n  }\n\n  @Slash("roles", { description: "role selector menu" })\n  async myRoles(interaction: CommandInteraction): Promise<unknown> {\n    await interaction.deferReply();\n\n    // create menu for roles\n    const menu = new MessageSelectMenu()\n      .addOptions(roles)\n      .setCustomId("role-menu");\n\n    // create a row for message actions\n    const buttonRow = new MessageActionRow().addComponents(menu);\n\n    // send it\n    interaction.editReply({\n      content: "select your role!",\n      components: [buttonRow],\n    });\n    return;\n  }\n}\n')),(0,o.kt)("h1",{id:"-contextmenu"},"\ud83d\udcdf ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/gui/context-menu"},"@ContextMenu")),(0,o.kt)("p",null,"Create discord context menu options with ease!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @ContextMenu("MESSAGE", "message context")\n  messageHandler(interaction: MessageContextMenuInteraction) {\n    console.log("I am message");\n  }\n\n  @ContextMenu("USER", "user context")\n  userHandler(interaction: UserContextMenuInteraction) {\n    console.log("I am user");\n  }\n}\n')),(0,o.kt)("h1",{id:"-simplecommand"},"\ud83d\udcdf ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/commands/simple-command"},"@SimpleCommand")),(0,o.kt)("p",null,"Create a simple command handler for messages using ",(0,o.kt)("inlineCode",{parentName:"p"},"@SimpleCommand"),". Example ",(0,o.kt)("inlineCode",{parentName:"p"},"!hello world")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @SimpleCommand("perm-check", { aliases: ["p-test"] })\n  @Permission(false)\n  @Permission({\n    id: "462341082919731200",\n    type: "USER",\n    permission: true,\n  })\n  permFunc(command: SimpleCommandMessage) {\n    command.message.reply("access granted");\n  }\n}\n')),(0,o.kt)("h1",{id:"on--once"},"\ud83d\udca1",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/general/on"},"@On")," / ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/general/once"},"@Once")),(0,o.kt)("p",null,"We can declare methods that will be executed whenever a Discord event is triggered."),(0,o.kt)("p",null,"Our methods must be decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@On(event: string)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@Once(event: string)")," decorator."),(0,o.kt)("p",null,"That's simple, when the event is triggered, the method is called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Discord, On, Once } from "discordx";\n\n@Discord()\nclass Example {\n  @On("messageCreate")\n  private onMessage() {\n    // ...\n  }\n\n  @Once("messageDelete")\n  private onMessageDelete() {\n    // ...\n  }\n}\n')),(0,o.kt)("h1",{id:"\ufe0f-guards"},"\u2694\ufe0f ",(0,o.kt)("a",{parentName:"h1",href:"https://discord-ts.js.org/docs/decorators/general/guard"},"Guards")),(0,o.kt)("p",null,"We implemented a guard system thats work pretty like the ",(0,o.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa")," middleware system"),(0,o.kt)("p",null,"You can use functions that are executed before your event to determine if it's executed. For example, if you want to apply a prefix to the messages, you can simply use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Guard")," decorator."),(0,o.kt)("p",null,"The order of execution of the guards is done according to their position in the list, so they will be executed in order (from top to bottom)."),(0,o.kt)("p",null,"Guards can be set for ",(0,o.kt)("inlineCode",{parentName:"p"},"@Slash"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@On"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Once"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Discord")," and globally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Discord, On, Client, Guard } from "discordx";\nimport { NotBot } from "./NotBot";\nimport { Prefix } from "./Prefix";\n\n@Discord()\nclass Example {\n  @On("messageCreate")\n  @Guard(\n    NotBot // You can use multiple guard functions, they are executed in the same order!\n  )\n  onMessage([message]: ArgsOf<"messageCreate">) {\n    switch (message.content.toLowerCase()) {\n      case "hello":\n        message.reply("Hello!");\n        break;\n      default:\n        message.reply("Command not found");\n        break;\n    }\n  }\n}\n')),(0,o.kt)("h1",{id:"\ufe0f-need-help"},"\u260e\ufe0f Need help?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord-ts.js.org/docs/faq"},"Check frequently asked questions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oceanroleplay/discord.ts/tree/main/packages/discordx/examples"},"Check examples")),(0,o.kt)("li",{parentName:"ul"},"Ask in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org/discord"},"discord server")))),(0,o.kt)("h1",{id:"thank-you"},"Thank you"),(0,o.kt)("p",null,"Show your support for ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/discordx"},"discordx")," by giving us a star on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts"},"github"),"."))}u.isMDXComponent=!0}}]);