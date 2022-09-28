"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={slug:"/mason-make",sidebar_position:2},r="Using Bricks \ud83d\udc77\ud83e\uddf1",l={unversionedId:"mason_make",id:"mason_make",title:"Using Bricks \ud83d\udc77\ud83e\uddf1",description:"In this section, we'll take a look at how to use the mason make command to generate code from an existing brick.",source:"@site/docs/mason_make.md",sourceDirName:".",slug:"/mason-make",permalink:"/mason-make",draft:!1,editUrl:"https://github.com/brick-hub/docs.brickhub.dev/tree/main/docs/mason_make.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/mason-make",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview \ud83e\uddf1\u2601\ufe0f",permalink:"/"},next:{title:"Creating Bricks \u2728\ud83e\uddf1",permalink:"/mason-new"}},s={},c=[{value:"Overview \ud83d\ude80",id:"overview-",level:2},{value:"Command-line Args \ud83e\uddd1\u200d\ud83d\udcbb",id:"command-line-args-",level:2},{value:"Config File \ud83d\udcdd",id:"config-file-",level:2},{value:"Custom Output Directory \ud83d\uddc2",id:"custom-output-directory-",level:2},{value:"File Conflict Resolution \u2757\ufe0f",id:"file-conflict-resolution-\ufe0f",level:2},{value:"Conflict Resolution Strategy \u2705",id:"conflict-resolution-strategy-",level:2},{value:"Detecting Changes \ud83d\udd75\ufe0f",id:"detecting-changes-\ufe0f",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-bricks-"},"Using Bricks \ud83d\udc77\ud83e\uddf1"),(0,o.kt)("p",null,"In this section, we'll take a look at how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," command to generate code from an existing brick."),(0,o.kt)("h2",{id:"overview-"},"Overview \ud83d\ude80"),(0,o.kt)("p",null,"As we saw in the ",(0,o.kt)("a",{parentName:"p",href:"/"},"overview"),", we can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," command followed by the name of an installed brick to generate code from that brick:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello\n? What is your name? (Dash) Mason\n\u2713 Made brick hello (52ms)\n\u2713 Generated 1 file:\n  /me/mason_playground/HELLO.md (new)\n")),(0,o.kt)("h2",{id:"command-line-args-"},"Command-line Args \ud83e\uddd1\u200d\ud83d\udcbb"),(0,o.kt)("p",null,"By default, if a brick requires variables ",(0,o.kt)("inlineCode",{parentName:"p"},"mason")," will prompt for those variables as seen in the snippet above. If we know in advance what variables a brick requires, we can provide variables to ",(0,o.kt)("inlineCode",{parentName:"p"},"mason")," as command-line arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello --name Mason\n\u2713 Made brick hello (52ms)\n\u2713 Generated 1 file:\n  /me/mason_playground/HELLO.md (new)\n")),(0,o.kt)("p",null,"Notice how in the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"mason")," did not prompt for the name since it was already provided as an argument."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In cases where there are multiple variables, it's possible to supply any number of variables directly as command-line args and ",(0,o.kt)("inlineCode",{parentName:"p"},"mason")," will prompt for any missing variables automatically.")),(0,o.kt)("h2",{id:"config-file-"},"Config File \ud83d\udcdd"),(0,o.kt)("p",null,"In some cases, it may be inconvenient to have to provide variables manually or via command-line args (especially for templates that require many variables). In these cases, we can provide variables via a configuration file. For example, if we create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Mason"\n}\n')),(0,o.kt)("p",null,"We can then pass the config file to ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello -c config.json\n\u2713 Made brick hello (52ms)\n\u2713 Generated 1 file:\n  /me/mason_playground/HELLO.md (new)\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The configuration file can have any name and can live anywhere on your local file system.")),(0,o.kt)("h2",{id:"custom-output-directory-"},"Custom Output Directory \ud83d\uddc2"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," will generate the output in the current working directory but a custom output directory can be specified via the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello --name Mason -o ./out\n\u2713 Made brick hello (52ms)\n\u2713 Generated 1 file:\n  /me/mason_playground/out/HELLO.md (new)\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"mason")," will automatically create any missing directories for you if you specify an output directory which doesn't already exist.")),(0,o.kt)("h2",{id:"file-conflict-resolution-\ufe0f"},"File Conflict Resolution \u2757\ufe0f"),(0,o.kt)("p",null,"A conflict can occur when ",(0,o.kt)("inlineCode",{parentName:"p"},"mason")," attempts to generate a file which already exists and the contents of the existing file differ from the contents of the generated file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello --name Dash\nconflict /me/mason_playground/HELLO.md\nOverwrite HELLO.md? (Yyna) y\n\u2713 Made brick hello (32.5s)\n\u2713 Generated 1 file:\n  /me/mason_playground/HELLO.md (new)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"HELLO.md"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- Hello Mason! \ud83d\udc4b\n+ Hello Dash! \ud83d\udc4b\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," will prompt on each file conflict and will allow users to specify how the conflict should be resolved via the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"y - yes, overwrite (default)\nY - yes, overwrite this and all others\nn - no, do not overwrite\na - append to existing file\n")),(0,o.kt)("h2",{id:"conflict-resolution-strategy-"},"Conflict Resolution Strategy \u2705"),(0,o.kt)("p",null,"A custom file conflict resolution strategy can be specified via the ",(0,o.kt)("inlineCode",{parentName:"p"},"--on-conflict")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Always prompt when there is a file conflict (default)\n$ mason make hello --name Mason --on-conflict prompt\n\n# Always overwrite when there is a file conflict\n$ mason make hello --name Mason --on-conflict overwrite\n\n# Always skip when there is a file conflict\n$ mason make hello --name Mason --on-conflict skip\n\n# Always append when there is a file conflict\n$ mason make hello --name Mason --on-conflict append\n")),(0,o.kt)("h2",{id:"detecting-changes-\ufe0f"},"Detecting Changes \ud83d\udd75\ufe0f"),(0,o.kt)("p",null,"In some cases, it may be useful to detect whether running ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," for a given brick produces a diff. For example, you may want to add a step in a continuous integration workflow which runs ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make")," for a given brick to ensure developers ran a codegen step prior to opening a pull request. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--set-exit-if-changed")," flag will exit with an error code if any files were changed after running ",(0,o.kt)("inlineCode",{parentName:"p"},"mason make"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \ud83d\udea8 Exit with error if any files were changed\n$ mason make hello --name Dash --set-exit-if-changed\n")))}p.isMDXComponent=!0}}]);