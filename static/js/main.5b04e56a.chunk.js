(this["webpackJsonpweb-journal"]=this["webpackJsonpweb-journal"]||[]).push([[0],{117:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=a(14),i=a(23),m=a(177),s=a(139),u=a(168),E=a(170),p=a(171),d=a(39),g=a(185),b=a(58),f=a.n(b),h=function(){var e=function(){var e,t,a,n,l=new Date,c=l.getMonth(),r=l.getDay(),o=l.getDate(),i=l.getFullYear(),m=l.getSeconds(),s=l.getMinutes(),u=l.getHours(),E="",p="",d="",g="";u>12?(E=u-12,g="pm"):g=12===(E=u)?"pm":"am",E<10&&(E="0"+E),d=m<10?"0"+m:m,p=s<10?"0"+s:s,e=["January","February","March","April","May","June","July","August","September","October","November","December"][c],t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r],a=o,n=i,document.querySelector(".date").innerHTML="Date: ".concat(t,", ").concat(a," ").concat(e," ").concat(n,". | Time: ").concat(E,":").concat(p,":").concat(d).concat(g),document.querySelector(".copyright").innerHTML=n};setInterval(e,1e3);var t=Object(u.a)((function(e){return{iconise:{display:"flex","& > *":{margin:e.spacing(1)}},righted:{position:"absolute",right:0},barback:{backgroundColor:"#81d4fa"}}}))();return l.a.createElement("div",null,l.a.createElement(E.a,{className:t.barback,position:"static","padding-right":"-1px"},l.a.createElement(p.a,null,l.a.createElement("span",{className:t.iconise},l.a.createElement(g.a,{alt:"Dev Journal",src:"web-logo.jpg"})),l.a.createElement(d.a,null,l.a.createElement("h2",{className:"web-title"},"<DEV /> JOURNAL")),l.a.createElement("span",{className:"cub-span"},l.a.createElement("img",{alt:"web-logo",src:f.a,className:"cub"})))),l.a.createElement("div",{onClick:e},l.a.createElement("h3",{align:"center",id:"welcome"},l.a.createElement("p",{className:"date"}))))},v=a(62),y=a.n(v),N=a(172),x=Object(u.a)((function(e){return{button:{margin:e.spacing(1),borderRadius:20},home:{}}})),C=function(){var e=x();return l.a.createElement("div",null,l.a.createElement("div",{class:"navbar"},l.a.createElement("a",{href:"#",className:e.home},"HOME"),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"CATEGORIES "),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"#"},"Link 1"),l.a.createElement("a",{href:"#"},"Link 2"),l.a.createElement("a",{href:"#"},"Link 3"))),l.a.createElement("a",{href:"#news"},"ABOUT US"),l.a.createElement("a",{href:"#news"},"CONTACT US"),l.a.createElement("div",{className:"article-search"},l.a.createElement(N.a,{variant:"contained",color:"primary",className:e.button},l.a.createElement(y.a,null),"Search"),l.a.createElement("input",{type:"text",id:"article-searcher",className:"searchbox",placeholder:"Search Journal",onKeyUp:function(){var e=document.getElementById("article-searcher").value;e=e.toLowerCase();for(var t=document.getElementsByClassName("list-group-item"),a=0;a<t.length;a++)t[a].innerHTML.toLowerCase().includes(e)?t[a].parentElement.style.display="block":t[a].parentElement.style.display="none"}}))),l.a.createElement("div",null,l.a.createElement("p",null)))},k=a(12),O=a(173),j=a(186),S=a(174),w=a(175),L=a(176),A=a(40),U=a.n(A),R=a(64),T=a.n(R),F=a(65),D=a.n(F),B=a(184),M=a(68),P=a.n(M),q=a(69),J=a.n(q),z=a(70),H=a.n(z),I=a(67),W=a.n(I),_=a(66),Q=a.n(_),V=Object(u.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),Y=function(){var e=V(),t=l.a.useState(0),a=Object(k.a)(t,2),n=a[0],c=a[1],r=function(e,t){c(t)},i=l.a.useState(!0),m=Object(k.a)(i,2),s=m[0],u=m[1];return l.a.createElement("div",{className:e.root},l.a.createElement(O.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(j.a,{button:!0,selected:0===n,onClick:function(e){return r(0,0)}},l.a.createElement(S.a,null,l.a.createElement(U.a,null)),l.a.createElement(o.b,{to:"/"},l.a.createElement(w.a,{primary:"<DEV /> JOURNAL"}))),l.a.createElement(j.a,{button:!0,selected:1===n,onClick:function(e){return r(0,1)}},l.a.createElement(S.a,null,l.a.createElement(T.a,null)),l.a.createElement(o.b,{to:"/customers"},l.a.createElement(w.a,{primary:"Articles"}))),l.a.createElement(j.a,{button:!0,selected:2===n,onClick:function(e){return r(0,2)}},l.a.createElement(S.a,null,l.a.createElement(D.a,null)),l.a.createElement(o.b,{to:"/add"},l.a.createElement(w.a,{primary:"New Article"})))),l.a.createElement(L.a,null),l.a.createElement(O.a,{component:"nav","aria-label":"secondary mailbox folder"},l.a.createElement(j.a,{button:!0,selected:3===n,onClick:function(e){return r(0,3)}},l.a.createElement(S.a,null,l.a.createElement(Q.a,null)),l.a.createElement(w.a,{primary:"Top Articles"})),l.a.createElement(j.a,{button:!0,onClick:function(){u(!s)}},l.a.createElement(S.a,null,l.a.createElement(W.a,null)),l.a.createElement(w.a,{primary:"Recent Articles"}),s?l.a.createElement(P.a,null):l.a.createElement(J.a,null)),l.a.createElement(B.a,{in:s,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,{component:"div",disablePadding:!0},l.a.createElement(j.a,{button:!0,className:e.nested},l.a.createElement(S.a,null,l.a.createElement(H.a,null)),l.a.createElement(w.a,{primary:"Starred"}))))))},G=(a(48),function(){return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{item:!0,xs:12,sm:12,style:{minWidth:300,textAlign:"justify",padding:"10px 25px 10px 12px"}},l.a.createElement(d.a,null,l.a.createElement("p",null,"Dev journal is a collection of links to various online resources for web developers. An item comprises of a resource's topic, author, URL amongst others. Self-teaching developers like me can find this journal useful since it's a collection of sources to the original web posts. Click on ",l.a.createElement(o.b,{to:"/customers"},"Articles")," to explore this collection of resources."),l.a.createElement("p",null,"Don't forget to drop your comments and observations(in the comment section) on how I can improve on the site."),l.a.createElement("p",null,"Happy Coding!! \xa0 Happy Development!!")))))}),K=a(21),Z=a(24),$=(a(49),a(71)),X=a.n($).a.create({baseURL:"https://cub-tapestry.herokuapp.com",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}}),ee=function(){return X.get("/customers")},te=function(e){return X.get("/customers/".concat(e))},ae=function(e){return X.post("/customers",e)},ne=function(e,t){return X.put("/customers/".concat(e),t)},le=function(){var e={id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1},t=Object(n.useState)(e),a=Object(k.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),i=Object(k.a)(o,2),m=i[0],s=i[1],u=function(e){var t=e.target,a=t.name,n=t.value;r(Object(Z.a)(Object(Z.a)({},c),{},Object(K.a)({},a,n)))};return l.a.createElement("div",{className:"customer-form"},l.a.createElement("div",{className:"submit-form"},m?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){r(e),s(!1)}},"Add")):l.a.createElement("div",{"article-form":"true"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",required:!0,value:c.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",required:!0,value:c.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",required:!0,value:c.category||"",onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",required:!0,value:c.source||"",onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",required:!0,value:c.author||"",onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",required:!0,value:c.URL||"",onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",required:!0,value:c.tags||"",onChange:u,name:"tags"})),l.a.createElement("button",{onClick:function(){var e={title:c.title,description:c.description,category:c.category,source:c.source,URL:c.URL,author:c.author,tags:c.tags};ae(e).then((function(e){r({id:e.data.id,title:e.data.title,description:e.data.description,category:e.category,source:e.source,URL:e.URL,author:e.author,tags:e.tags,published:e.data.published}),s(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Submit"),l.a.createElement("br",null))))},ce=function(e){var t=Object(n.useState)({id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1}),a=Object(k.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),i=Object(k.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){var t;t=e.match.params.id,te(t).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var u=function(e){var t=e.target,a=t.name,n=t.value;r(Object(Z.a)(Object(Z.a)({},c),{},Object(K.a)({},a,n)))},E=function(e){var t={id:c.id,title:c.title,category:c.category,description:c.description,source:c.source,URL:c.URL,author:c.author,tags:c.tags,published:e};ne(c.id,t).then((function(t){r(Object(Z.a)(Object(Z.a)({},c),{},{published:e})),console.log(t.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"customer-form"},c?l.a.createElement("div",{className:"edit-form"},l.a.createElement("h4",null,l.a.createElement("strong",null,"Update Article")),l.a.createElement("form",null,l.a.createElement("div",{"article-form":!0},l.a.createElement("p",null,m),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",value:c.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",value:c.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",value:c.category,onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",value:c.source,onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",value:c.author,onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",value:c.URL,onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",value:c.tags,onChange:u,name:"tags"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling"},l.a.createElement("strong",null,"Status:")),c.published?"Published":"Pending"))),c.published?l.a.createElement("button",{className:"btn btn-success",onClick:function(){return E(!1)}},"UnPublish"):l.a.createElement("button",{className:"btn btn-success",onClick:function(){return E(!0)}},"Publish"),l.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:function(){ne(c.id,c).then((function(e){console.log(e.data),s("The customer was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update")):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Customer...")))},re=(a(117),a(179)),oe=a(183),ie=a(182),me=a(178),se=a(180),ue=a(181),Ee=(a(118),a(72)),pe=a.n(Ee),de=a(73),ge=a.n(de),be=Object(u.a)({root:{width:"100%",minWidth:410,border:1},table:{minWidth:360},active:{backgroundColor:"rgba(255, 255, 255, 0.12)"}}),fe=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(k.a)(r,2),s=i[0],u=i[1],E=Object(n.useState)(-1),p=Object(k.a)(E,2),d=p[0],g=p[1],b=Object(n.useState)(!0),f=Object(k.a)(b,2),h=f[0],v=f[1],y=Object(n.useState)(1),N=Object(k.a)(y,2);N[0],N[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){ee().then((function(e){v(!1),c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},C=be();return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:7,className:"appContent"},l.a.createElement("div",{className:"customer-details",id:"section1"},s?l.a.createElement("div",null,l.a.createElement(me.a,null,l.a.createElement(re.a,{className:C.table,"aria-label":"simple table"},l.a.createElement(se.a,null,l.a.createElement(ue.a,null,l.a.createElement(ie.a,{colSpan:2,align:"center"},l.a.createElement("strong",null,"ARTICLE \xa0",s.id)))),l.a.createElement(oe.a,null,l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Title:")),l.a.createElement(ie.a,{align:"left"}," ",s.title)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Category:")),l.a.createElement(ie.a,{align:"left"}," ",s.category)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Description:")),l.a.createElement(ie.a,{align:"left"}," ",s.description)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Source:")),l.a.createElement(ie.a,{align:"left"}," ",s.source)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Author:")),l.a.createElement(ie.a,{align:"left"}," ",s.author)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"URL:")),l.a.createElement(ie.a,{align:"left"},l.a.createElement("a",{href:s.URL,target:"_blank"}," "," ",s.URL))),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Tags:")),l.a.createElement(ie.a,{align:"left"}," ",s.tags)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Status:")),l.a.createElement(ie.a,{align:"left"}," ",s.published?"Published":"Pending")))),l.a.createElement(o.b,{to:"/customers/"+s.id},"Edit"))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"No article selected")))),l.a.createElement(m.a,{item:!0,xs:12,sm:5,className:"appContent"},h?l.a.createElement("p",null,"Data loading, please wait..",l.a.createElement(pe.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50})):l.a.createElement("div",Object(K.a)({className:"article-list"},"className",C.root),l.a.createElement("h3",null,l.a.createElement("strong",null,"ARTICLE TOPICS")),l.a.createElement("p",null,"Click on any article below to view details..."),l.a.createElement("div",null,l.a.createElement(O.a,{component:"nav"},a&&a.map((function(e,t){return l.a.createElement(j.a,{button:!0,key:t,selected:d===t,onClick:function(){return function(e,t){u(e),g(t)}(e,t)}},l.a.createElement(ge.a,{href:"#section1"},l.a.createElement(w.a,{primary:l.a.createElement("div",null,l.a.createElement("p",null,e.title))})),l.a.createElement(L.a,null))}))))))))},he=a(75),ve=a.n(he),ye=a(74),Ne=a.n(ye),xe=a(76),Ce=a.n(xe),ke=a(77),Oe=a.n(ke),je=a(78),Se=a.n(je),we=a(80),Le=a.n(we),Ae=a(81),Ue=a.n(Ae),Re=a(79),Te=a.n(Re),Fe=function(){var e=Object(u.a)((function(e){return{iconise:{display:"flex","& > *":{margin:e.spacing(1)}},righted:{position:"absolute",right:0},barback:{backgroundColor:"#b3cce6",color:"black"}}}))();return l.a.createElement("div",{id:"footer"},l.a.createElement(m.a,{container:!0,spacing:3,className:e.barback,position:"static",padding:"1px"},l.a.createElement(m.a,{item:!0,xs:12,sm:8,style:{textAlign:"left",paddingLeft:"14px"}},l.a.createElement(d.a,{variant:"caption",gutterBottom:!0},l.a.createElement("b",null,"<Dev /> Journal")," is a project of ",l.a.createElement("b",null,"McCollins Technologies."),l.a.createElement("p",null,l.a.createElement("b",null,"Disclaimer: "),"All articles are referenced with source and author."))),l.a.createElement(m.a,{item:!0,xs:12,sm:4,style:{paddingTop:"2px",textAlign:"left"}},l.a.createElement(d.a,{variant:"caption"},l.a.createElement("p",null,l.a.createElement("b",null,"Contact us:"),l.a.createElement("br",null),l.a.createElement(Ne.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}})," McCollins Technologies",l.a.createElement("br",null),l.a.createElement(ve.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}})," mccollinstechnologies@gmail.com.",l.a.createElement("br",null),"Follow us on: ",l.a.createElement("a",{href:"https://twitter.com/engrcollins14",target:"_blank"},l.a.createElement(Ce.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"Twitter,")," \xa0",l.a.createElement("a",{href:"https://facebook.com/engrcollins14",target:"_blank"},l.a.createElement(Oe.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"Facebook, ")," \xa0",l.a.createElement("a",{href:"https://qr.ae/TmZyQH",target:"_blank"},"Quora, ")," \xa0",l.a.createElement("a",{href:"https://medium.com",target:"_blank"},"Medium.")))),l.a.createElement(m.a,{item:!0,xs:12,sm:12,style:{padding:"1px",marginTop:"-15px",textAlign:"center"}},l.a.createElement(d.a,{variant:"caption"},l.a.createElement("p",null,l.a.createElement("a",{href:"#"}," ",l.a.createElement(Se.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"About Us")," \xa0|\xa0 ",l.a.createElement("a",{href:"#"}," ",l.a.createElement(Te.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"Privacy Policy")," \xa0|\xa0 ",l.a.createElement("a",{href:"#"},l.a.createElement(Le.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"FAQ")," \xa0|\xa0 ",l.a.createElement("a",{href:"#"},l.a.createElement(Ue.a,{style:{display:"inline-block",marginBottom:"-5px",fontSize:"20px"}}),"Advertise")),l.a.createElement("p",{id:"copyright"},l.a.createElement("b",null,"McCollins Technologies \xa9 2019 - ",l.a.createElement("span",{className:"copyright"})))))))};var De=function(){return l.a.createElement("div",{id:"appContainer"},l.a.createElement(h,null),l.a.createElement(C,null),l.a.createElement(o.a,null,l.a.createElement(m.a,{container:!0,spacing:3,component:s.a},l.a.createElement(m.a,{item:!0,xs:12,sm:3,lg:2},l.a.createElement(Y,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{item:!0,xs:8,sm:9,lg:10},l.a.createElement("div",{className:"appContent",style:{textAlign:"center"}},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/add",component:le}),l.a.createElement(i.a,{path:"/customers/:id",component:ce}),l.a.createElement(i.a,{path:"/customers",component:fe}),l.a.createElement(i.a,{path:"/",component:G})))))),l.a.createElement("div",null,l.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/header2.64c1ea7d.png"},89:function(e,t,a){e.exports=a(138)}},[[89,1,2]]]);
//# sourceMappingURL=main.5b04e56a.chunk.js.map