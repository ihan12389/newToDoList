(this.webpackJsonpnew_todo_list=this.webpackJsonpnew_todo_list||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(28),s=a.n(c),r=a(5),i=a(18),o=a(6),l=a(7),u=a.n(l),d=a(11),j=a(20);a(36),a(46);j.a.initializeApp({apiKey:"AIzaSyDqhAbpmAJ_DCPeIXPhg1c-paZV-EuxWpk",authDomain:"todolist-6597a.firebaseapp.com",projectId:"todolist-6597a",storageBucket:"todolist-6597a.appspot.com",messagingSenderId:"296773831836",appId:"1:296773831836:web:8c197e9acd68c464583159",measurementId:"G-WDLLK9G6NR"});var b=j.a,h=j.a.auth(),p=j.a.firestore(),f=a(1),m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),p=b[0],m=b[1],O=Object(n.useState)(!0),x=Object(r.a)(O,2),g=x[0],v=x[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&l(n)},N=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),m(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:N,className:"authForm",children:[Object(f.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(f.jsx)("input",{type:"submit",className:"authInput authSubmit",value:g?"Create Account":"Sign In"}),p&&Object(f.jsx)("span",{className:"authError",children:p})]}),Object(f.jsx)("span",{onClick:function(){return v((function(e){return!e}))},className:"authSwitch",children:g?"Sign In":"Create Account"})]})},O=function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new b.auth.GoogleAuthProvider:"github"===a&&(n=new b.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"authContainer",children:[Object(f.jsx)(m,{}),Object(f.jsxs)("div",{className:"authBtns",children:[Object(f.jsx)("button",{className:"authBtn",onClick:e,name:"google",children:"Continue with Google"}),Object(f.jsx)("button",{className:"authBtn",onClick:e,name:"github",children:"Continue with Github"})]})]})},x=a(30),g=function(e){var t=e.docObj,a=e.offModal,c=Object(n.useState)([]),s=Object(r.a)(c,2),i=s[0],o=s[1],l=Object(n.useRef)(),j=Object(n.useRef)(),b=function(){var e=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==i){e.next=3;break}return e.abrupt("return");case 3:return(n=t.text).push({text:i,id:Date.now()}),e.next=7,p.doc("todos/".concat(t.id)).update({text:n});case 7:o("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"modal",ref:l,children:[Object(f.jsx)("iframe",{className:"modalViewer_video noselect",width:"500",heigth:"315",src:"https://www.youtube.com/embed/rEaU6IwH3fw?mute=1&autoplay=1&loop=1&playlist=rEaU6IwH3fw",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0,ref:j}),Object(f.jsx)("div",{className:"block_mouse"}),Object(f.jsx)("h1",{className:"h1",children:"If background video is not playing try refresh\ud83d\ude0b"}),Object(f.jsx)("div",{className:"close cursor",onClick:function(){return a()},children:"\u274c"}),Object(f.jsx)("form",{className:"modal_form pos_rel",onSubmit:b,children:Object(f.jsxs)("div",{className:"gradient_border",children:[Object(f.jsx)("h2",{className:"modal_h2",children:"JUST DO IT!\ud83d\ude1c"}),Object(f.jsx)("input",{type:"text",className:"modal_input",placeholder:"Write to do list",onChange:function(e){var t=e.target.value;o(t)},value:i})]})})]})},v=function(e){var t=e.userObj,a=e.docObj,c=Object(n.useState)(a.text),s=Object(r.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)(a.finished),j=Object(r.a)(l,2),b=j[0],h=j[1],m=Object(n.useState)(!1),O=Object(r.a)(m,2),x=O[0],v=O[1],y=Object(n.useRef)(),N=Object(n.useRef)(),w=Object(n.useRef)(),D=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.parentNode.id,!window.confirm("Are you sure you wnat to delete this nweet?")){e.next=16;break}if("todos"!==(c=t.target.parentNode.attributes.name.value)){e.next=11;break}return s=i.filter((function(e){return e.id!==parseInt(n)})),o(s),e.next=9,p.doc("todos/".concat(a.id)).update({text:s});case 9:e.next=16;break;case 11:if("finisheds"!==c){e.next=16;break}return r=b.filter((function(e){return e.id!==parseInt(n)})),h(r),e.next=16,p.doc("todos/".concat(a.id)).update({finished:r});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c,s,r,l,d,j,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.parentNode.id,"todos"!==(c=t.target.parentNode.attributes.name.value)){e.next=13;break}return s=i.filter((function(e){return e.id!==parseInt(n)})),(r=i.filter((function(e){return e.id===parseInt(n)}))).id=Date.now(),l=b.concat(r),o(s),h(l),e.next=11,p.doc("todos/".concat(a.id)).update({text:s,finished:l});case 11:e.next=22;break;case 13:if("finisheds"!==c){e.next=22;break}return d=b.filter((function(e){return e.id!==parseInt(n)})),(j=b.filter((function(e){return e.id===parseInt(n)}))).id=Date.now(),f=i.concat(j),o(f),h(d),e.next=22,p.doc("todos/".concat(a.id)).update({text:f,finished:d});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log("\ucd08\uae30\ud654 \uc2e4\ud589"),0!==a.length&&p.doc("todos/".concat(a.id)).onSnapshot((function(e){var t=e.data().text,a=e.data().finished;o(t),h(a)}))}),[]),Object(n.useEffect)((function(){x?(console.log("\uc601\uc0c1\uc744 \uc815\uc9c0"),N.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")):0===i.length&&0===b.length?(console.log("modal\uc740 \uaebc\uc788\uc9c0\ub9cc \uc601\uc0c1\uc740 \uc815\uc9c0"),setTimeout((function(){N.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}),1e3),w.current.classList.add("dp_block"),N.current.classList.remove("dp_block")):(console.log("modal\uc740 \uaebc\uc788\uace0 \uc601\uc0c1\uc744 \uc7ac\uc0dd"),N.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),N.current.classList.add("dp_block"),w.current.classList.remove("dp_block"))}),[x]),Object(n.useEffect)((function(){0===i.length&&0===b.length?!1===x&&(console.log("modal\uc744 \ud0a4\uc790"),v(!0)):!0===x&&(console.log("modal\uc744 \ub044\uc790"),v(!1))}),[i]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[x&&Object(f.jsx)(g,{docObj:a,offModal:function(e){v(!1)}}),Object(f.jsx)("h1",{className:"title",children:"TO DO LIST TODAY!"}),Object(f.jsx)("div",{className:"wrap",ref:y,children:Object(f.jsxs)("div",{className:"gradient_border",children:[Object(f.jsx)("div",{className:"write cursor pos_rel",onClick:function(){return v(!0)},children:Object(f.jsx)("span",{className:"pos_rel",children:"Write"})}),Object(f.jsxs)("div",{className:"content_wrap",children:[Object(f.jsxs)("div",{className:"toDoList",children:[Object(f.jsxs)("ul",{className:"pending",children:["Pending",i&&i.map((function(e,t){return Object(f.jsxs)("li",{id:e.id,name:"todos",className:"pending_li",children:[t+1,". ",e.text,Object(f.jsx)("button",{className:"cursor x_btn",onClick:D,children:"\u274c"}),Object(f.jsx)("button",{className:"cursor f_btn",onClick:k,children:"\u2714"})]},t)}))]}),Object(f.jsxs)("ul",{className:"finished",children:["Finished",b&&b.map((function(e,t){return Object(f.jsxs)("li",{id:e.id,name:"finisheds",className:"finished_li",children:[t+1,". ",e.text,Object(f.jsx)("button",{className:"cursor x_btn",onClick:D,children:"\u274c"}),Object(f.jsx)("button",{className:"cursor f_btn",onClick:k,children:"\u23cf"})]},t)}))]})]}),Object(f.jsxs)("div",{className:"movieViewer",children:[Object(f.jsx)("h2",{children:0===i.length?0===b.length?"Add Do it list!":Object(f.jsxs)("span",{children:[t.displayName," done ",b.length," list!"]}):Object(f.jsxs)("span",{children:[t.displayName," have ",i.length," todo list!"]})}),Object(f.jsx)("div",{className:"movieViewer_default",ref:w,children:"\ud83d\ude49"}),Object(f.jsx)("iframe",{title:"video",id:"player1",className:"movieViewer_video",width:"450",height:"252",src:"https://www.youtube.com/embed/sXFfd9OL5Ao?autoplay=1&mute=0&loop=1&enablejsapi=1&playlist=sXFfd9OL5Ao",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,ref:N})]})]})]})})]})})},y=function(e){var t=e.setDateObj,a=e.dateObj,c=e.closeCalender,s=Object(n.useState)(null),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(n.useState)(),p=Object(r.a)(h,2),m=p[0],O=p[1],x=Object(n.useState)(),g=Object(r.a)(x,2),v=g[0],y=g[1],N=Object(n.useState)(),w=Object(r.a)(N,2),D=w[0],k=w[1],C=Object(n.useState)(),S=Object(r.a)(C,2),_=S[0],F=S[1],I=Object(n.useRef)(),L=function(e,t){O(e),y(t)},M={monList:["January","February","March","April","May","June","July","August","September","October","November","December"],dayList:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],today:a,activeDate:a,monForChange:a.getMonth(),getFirstDay:function(e,t){return new Date(e,t,1)},getLastDay:function(e,t){return new Date(e,t+1,0)},nextMonth:function(){var e=new Date;return e.setDate(1),e.setMonth(this.monForChange+1),this.monForChange=this.monForChange+1,this.activeDate=e,e},prevMonth:function(){var e=new Date;return e.setDate(1),e.setMonth(this.monForChange-1),this.monForChange=this.monForChange-1,this.activeDate=e,e},clickDate:function(e){console.log("click\uc774 \ub4e4\uc5b4\uc654\ub2e4\ub2c8\uae50");var t=new Date;return t.setDate(e),t.setMonth(this.monForChange),this.activeDate=t,t},addZero:function(e){return e<10?"0"+e:e},activeDTag:null,getIndex:function(e){for(var t=0;e=e.previousElementSibling;)t++;return t}};function A(e){var t,a=e.getFullYear(),n=e.getMonth(),c=o.getFirstDay(a,n),s=o.getLastDay(a,n);n===o.today.getMonth()&&a===o.today.getFullYear()&&(t=o.today.getDate()),k(o.monList[n]),F(a);for(var r,i="",l=0,u=0;u<6;u++){i+="<tr>";for(var d=0;d<7;d++){if(0!==u||r||d!==c.getDay()||(r=1),r){var j=a+"."+o.addZero(n+1)+"."+o.addZero(l+1);i+='<td class="day',i+=t&&t===l+1?' today" ':'"',i+=' data-date="'.concat(l+1,'" data-fdate="').concat(j,'">')}else i+="<td>";i+=r?++l:"",l===s.getDate()&&(r=0),i+="</td>"}i+="</tr>"}I.current.innerHTML=i}return Object(n.useEffect)((function(){console.log("calender\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),l(M),j||b(!0),null!==o&&(A(o.today),L(o.today.getDate(),o.today.getDay()))}),[j]),Object(f.jsxs)("div",{className:"calender",children:[Object(f.jsxs)("div",{className:"my-calendar clearfix",children:[Object(f.jsxs)("div",{className:"clicked-date",children:[Object(f.jsx)("div",{className:"cal-day",children:j?o.dayList[v]:"initialize..."}),Object(f.jsx)("div",{className:"cal-date",children:m})]}),Object(f.jsxs)("div",{className:"calendar-box",children:[Object(f.jsxs)("div",{className:"ctr-box clearfix",children:[Object(f.jsx)("button",{type:"button",title:"prev",className:"btn-cal prev",onClick:function(e){A(o.prevMonth())},style:{width:"100px",height:"100px"}}),Object(f.jsxs)("span",{className:"cal-month",children:[D," "]}),Object(f.jsxs)("span",{className:"cal-year",children:[" ",_]}),Object(f.jsx)("button",{type:"button",title:"next",className:"btn-cal next",onClick:function(e){A(o.nextMonth())},style:{width:"100px",height:"100px"}})]}),Object(f.jsxs)("table",{className:"cal-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"S"}),Object(f.jsx)("th",{children:"M"}),Object(f.jsx)("th",{children:"T"}),Object(f.jsx)("th",{children:"W"}),Object(f.jsx)("th",{children:"T"}),Object(f.jsx)("th",{children:"F"}),Object(f.jsx)("th",{children:"S"})]})}),Object(f.jsx)("tbody",{className:"cal-body",ref:I,onClick:function(e){if(console.log(e.target),console.log("\ub2ec\ub825\uc744 click\ud588\uc2b5\ub2c8\ub2e4."),e.target.classList.contains("day")){console.log("day\ub97c \ud074\ub9ad\ud588\uc5b4\uc694"),o.activeDTag&&(console.log("active\ub97c \uc9c0\uc6cc\uc90d\ub2c8\ub2e4."),o.activeDTag.classList.remove("day-active"));var t=Number(e.target.textContent);L(t,e.target.cellIndex),e.target.classList.add("day-active"),o.activeDTag=e.target,o.clickDate(t)}}})]})]})]}),Object(f.jsx)("div",{className:"closeCld cursor",onClick:function(){t(o.activeDate),c()},children:"\u274c"})]})},N=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),j=l[0],b=l[1],h=Object(n.useState)(new Date),m=Object(r.a)(h,2),O=m[0],g=m[1],N=Object(n.useRef)(),w=Object(n.useRef)(),D=Object(n.useRef)(),k={text:[],createAt:Date.now(),creatorId:t.uid,createYear:O.getFullYear(),createMonth:O.getMonth()+1,createDate:O.getDate(),finished:[],userName:t.displayName},C=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("todos").where("creatorId","==",t.uid).where("createYear","==",O.getFullYear()).where("createMonth","==",O.getMonth()+1).where("createDate","==",O.getDate()).onSnapshot((function(e){if(0===e.size)console.log("snapshot\uc5c6\uc5b4\uc694~",e),p.collection("todos").add(k),i([]);else{console.log("snapshot\uc788\uc5b4\uc694~",e);var t=e.docs.map((function(e){return Object(x.a)({id:e.id},e.data())}));i(t)}b(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){console.log(O),!1===j&&C()}),[j]);var S=function(e){g(e),b(!1)};return Object(f.jsx)(f.Fragment,{children:j&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"showContainer",ref:N,children:s.map((function(e){return console.log(s),Object(f.jsx)(v,{userObj:t,docObj:e,date:O})}))}),Object(f.jsx)("div",{className:"openCld",onClick:function(e){console.log(e.target),N.current.classList.add("dp_none"),D.current.classList.add("dp_none"),w.current.classList.remove("dp_none")},ref:D,children:Object(f.jsx)("span",{children:"Calender"})}),Object(f.jsx)("div",{className:"calContainer dp_none",ref:w,children:Object(f.jsx)(y,{dateObj:O,setDateObj:function(e){return S(e)},closeCalender:function(e){return N.current.classList.remove("dp_none"),D.current.classList.remove("dp_none"),void w.current.classList.add("dp_none")}})})]})})},w=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),s=Object(n.useState)(a.displayName),i=Object(r.a)(s,2),l=i[0],j=i[1],b=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===l){e.next=5;break}return e.next=4,a.updateProfile({displayName:l});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"profContainer",children:[Object(f.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:l,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn cursor",style:{marginTop:10}})]}),Object(f.jsxs)("span",{className:"displayName",children:[a.displayName,"\ub2d8! \ud658\uc601\ud569\ub2c8\ub2e4~"]}),Object(f.jsx)("span",{className:"formBtn cursor cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")},children:Object(f.jsx)("span",{children:"Log Out"})})]})},D=function(){return Object(f.jsxs)("div",{className:"navContainer",children:[Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)("span",{className:"navLink",children:"Home"})}),Object(f.jsx)(i.b,{to:"/Profile",children:Object(f.jsx)("span",{className:"navLink",children:"Profile"})})]})},k=function(e){var t=e.userObj,a=e.refreshUser,n=Math.ceil(100*Math.random().toFixed(2)%20)+1,c={backgroundImage:"url(".concat("/newToDoList","/img/").concat(n,".jpg)")};return Object(f.jsx)(i.a,{children:Object(f.jsx)(o.c,{children:Boolean(t)?Object(f.jsxs)("div",{className:"routerContainer",style:c,children:[Object(f.jsx)(D,{}),Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(N,{userObj:t})}),Object(f.jsx)(o.a,{exact:!0,path:"/profile",children:Object(f.jsx)(w,{userObj:t,refreshUser:a})})]}):Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(O,{})})})})};var C=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(k,{userObj:o,refreshUser:function(){var e=h.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}})}):"Initializing..."})};a(44);s.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.db79d22d.chunk.js.map