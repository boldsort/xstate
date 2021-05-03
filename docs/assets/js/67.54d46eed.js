(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{433:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"task-1-counter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-1-counter"}},[t._v("#")]),t._v(" Task 1: Counter")]),t._v(" "),s("p",[t._v("This is the first of "),s("a",{attrs:{href:"https://eugenkiss.github.io/7guis/tasks#counter",target:"_blank",rel:"noopener noreferrer"}},[t._v("The 7 Tasks from 7GUIs"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("Challenge:")]),t._v(" Understanding the basic ideas of a language/toolkit.")]),t._v(" "),s("p",[t._v("The task is to build a frame containing a label or read-only textfield T and a button B. Initially, the value in T is “0” and each click of B increases the value in T by one.")]),t._v(" "),s("p",[t._v("Counter serves as a gentle introduction to the basics of the language, paradigm and toolkit for one of the simplest GUI applications imaginable. Thus, Counter reveals the required scaffolding and how the very basic features work together to build a GUI application. A good solution will have almost no scaffolding.")])]),t._v(" "),s("h2",{attrs:{id:"modeling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modeling"}},[t._v("#")]),t._v(" Modeling")]),t._v(" "),s("p",[t._v("In this simple UI, there is only one finite state, which can be named "),s("code",[t._v('"active"')]),t._v(". The context, however, will contain the "),s("code",[t._v("count")]),t._v(", which represents the current count with an initial value of "),s("code",[t._v("0")]),t._v(" and can be infinite. An "),s("code",[t._v('"INCREMENT"')]),t._v(" event will trigger an update to the context which assigns a new value to "),s("code",[t._v("count")]),t._v(" based on the current "),s("code",[t._v("context.count")]),t._v(" value.")]),t._v(" "),s("p",[s("strong",[t._v("States:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"active"')]),t._v(" - the state where counting is enabled")])]),t._v(" "),s("p",[s("strong",[t._v("Context:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("count")]),t._v(" - the current count value")])]),t._v(" "),s("p",[s("strong",[t._v("Events:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"INCREMENT"')]),t._v(" - signals that the count should be increased by one")])]),t._v(" "),s("h2",{attrs:{id:"coding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding"}},[t._v("#")]),t._v(" Coding")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" assign "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xstate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" counterMachine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMachine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  states"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INCREMENT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result")]),t._v(" "),s("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/7guis-counter-19d6v?fontsize=14&hidenavigation=1&theme=dark",title:"7GUIs: Counter",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}})])}),[],!1,null,null,null);a.default=n.exports}}]);