(this.webpackJsonppomo2=this.webpackJsonppomo2||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),l=n(2),c=n.n(l),i=n(5),u=n(1),m=0,g=0,h=function(){},b=0,f=!1,k=!1,v=!1,p="work",d="shortBreak",E="longBreak",w="work",S=0;var B=function(e){var t=Object(a.useState)(N(e.settings.work)),n=Object(u.a)(t,2),o=n[0],s=n[1];function l(){return new Promise((function(t,n){console.log("Current timer mode: "+w),v?alert("Timer is already running!"):(b=Date.now(),f?(m=m+Date.now()-g,f=!1):m=Date.now()+6e4*e.settings[w],h=setInterval((function(){b=Date.now(),k?(B(),g-=1e3,s(N(e.settings[w])),k=!1):m>b?(v=!0,s(function(e){var t=Math.floor(e/6e4),n=Math.ceil(e%6e4/1e3);return N(t,n)}(m-b)),f=!1):(v=!1,s("00:00"),clearInterval(h),t(),f=!1)}),1e3))}))}function B(){f?alert("Timer has already been paused!"):(console.log("Pause handler executed"),clearInterval(h),v=!1,f=!0,g=Date.now())}function O(){return(O=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(S<e.settings.sessions)){t.next=23;break}if("work"!==w){t.next=6;break}return t.next=4,l();case 4:S++,k=!0;case 6:if(console.log("Session no.: "+S),S!==e.settings.sessions){t.next=14;break}return s("00:00"),alert("Well Done!!"),k=!1,s(N(e.settings[w])),S=0,t.abrupt("break",23);case 14:return w=S%e.settings.longBreakInterval===0?E:d,t.next=18,l();case 18:k=!0,console.log("set to worka at  end"),w=p,t.next=0;break;case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="",a="";return e<10&&(n="0"),t<10&&(a="0"),"".concat(n).concat(e,":").concat(a).concat(t)}return r.a.createElement("div",null,r.a.createElement("h1",null,o),r.a.createElement("button",{onClick:function(){return O.apply(this,arguments)}},"Start"),r.a.createElement("button",{onClick:B},"Pause"))};var O=function(e){var t=Object(a.useState)(e.settings.sessions),n=Object(u.a)(t,2),o=n[0],s=n[1],l=Object(a.useState)(e.settings.work),c=Object(u.a)(l,2),i=c[0],m=c[1],g=Object(a.useState)(e.settings.shortBreak),h=Object(u.a)(g,2),b=h[0],f=h[1],k=Object(a.useState)(e.settings.longBreakInterval),v=Object(u.a)(k,2),p=v[0],d=v[1],E=Object(a.useState)(e.settings.longBreak),w=Object(u.a)(E,2),S=w[0],B=w[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){e.changeSettings(i,b,S,o,p)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"numberOfSessions"},"Number of work sessions"),r.a.createElement("input",{onChange:function(e){var t=e.target.value;s(t)},type:"number",className:"form-control",id:"numberOfSessions",placeholder:"Enter a wholenumber",name:"sessions",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"workSessionLength"},"Length of each work session"),r.a.createElement("input",{onChange:function(e){var t=e.target.value;m(t)},type:"number",className:"form-control",id:"workSessionLength",placeholder:"Enter a wholenumber",name:"work",value:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"shortBreakLength"},"Length of each short break"),r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"number",className:"form-control",id:"shortBreakLength",placeholder:"Enter a wholenumber",name:"shortBreak",value:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"longBreakInterval"},"Number of work sessions to a long break"),r.a.createElement("input",{onChange:function(e){var t=e.target.value;d(t)},type:"number",className:"form-control",id:"longBreakInterval",placeholder:"Enter a wholenumber",name:"longBreakInterval",value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"longBreakLength"},"Length of each long break"),r.a.createElement("input",{onChange:function(e){var t=e.target.value;B(t)},type:"number",className:"form-control",id:"longBreakLength",placeholder:"Enter a wholenumber",name:"longBreak",value:S})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};var N=function(){var e={};return null===localStorage.getItem("settings")&&(e={work:25,shortBreak:5,longBreak:15,sessions:2,longBreakInterval:3},localStorage.setItem("settings",JSON.stringify(e))),e=JSON.parse(localStorage.getItem("settings")),r.a.createElement("div",null,r.a.createElement(B,{settings:e}),r.a.createElement(O,{changeSettings:function(t,n,a,r,o){for(var s in e.work=t,e.shortBreak=n,e.longBreak=a,e.sessions=r,e.longSessionInterval=o,localStorage.setItem("settings",JSON.stringify(e)),console.log("Settings changed"),e)console.log(e[s])},settings:e}))};s.a.render(r.a.createElement(N,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.f4d41162.chunk.js.map