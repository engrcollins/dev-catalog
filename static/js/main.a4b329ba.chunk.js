(this["webpackJsonpweb-journal"]=this["webpackJsonpweb-journal"]||[]).push([[0],{108:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=t(12),i=t(23),m=t(170),s=t(130),u=t(161),E=t(163),d=t(164),p=t(39),g=t(178),b=t(58),h=t.n(b),f=function(){var e=function(){var e,a,t,n,l=new Date,r=l.getMonth(),c=l.getDay(),o=l.getDate(),i=l.getFullYear(),m=l.getSeconds(),s=l.getMinutes(),u=l.getHours(),E="",d="",p="",g="";u>12?(E=u-12,g="pm"):g=12===(E=u)?"pm":"am",E<10&&(E="0"+E),p=m<10?"0"+m:m,d=s<10?"0"+s:s,e=["January","February","March","April","May","June","July","August","September","October","November","December"][r],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c],t=o,n=i,document.querySelector(".date").innerHTML="Date: ".concat(a,", ").concat(t," ").concat(e," ").concat(n,". | Time: ").concat(E,":").concat(d,":").concat(p).concat(g),document.querySelector(".copyright").innerHTML=n};setInterval(e,1e3);var a=Object(u.a)((function(e){return{iconise:{display:"flex","& > *":{margin:e.spacing(1)}},righted:{position:"absolute",right:0},barback:{backgroundColor:"#81d4fa"}}}))();return l.a.createElement("div",null,l.a.createElement(E.a,{className:a.barback,position:"static","padding-right":"-1px"},l.a.createElement(d.a,null,l.a.createElement("span",{className:a.iconise},l.a.createElement(g.a,{alt:"Web Journal",src:"web-logo.jpg"})),l.a.createElement(p.a,null,l.a.createElement("h2",{className:"web-title"},"WEB JOURNAL")),l.a.createElement("span",{className:"cub-span"},l.a.createElement("img",{alt:"web-logo",src:h.a,className:"cub"})))),l.a.createElement("div",{onClick:e},l.a.createElement("h3",{align:"center",id:"welcome"},l.a.createElement("p",{className:"date"}))))},v=t(62),y=t.n(v),N=t(165),C=Object(u.a)((function(e){return{button:{margin:e.spacing(1),borderRadius:20},home:{}}})),x=function(){var e=C();return l.a.createElement("div",null,l.a.createElement("div",{class:"navbar"},l.a.createElement("a",{href:"#",className:e.home},"HOME"),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"CATEGORIES "),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"#"},"Link 1"),l.a.createElement("a",{href:"#"},"Link 2"),l.a.createElement("a",{href:"#"},"Link 3"))),l.a.createElement("a",{href:"#news"},"ABOUT US"),l.a.createElement("a",{href:"#news"},"CONTACT US"),l.a.createElement("div",{className:"article-search"},l.a.createElement(N.a,{variant:"contained",color:"primary",className:e.button},l.a.createElement(y.a,null),"Search"),l.a.createElement("input",{type:"text",id:"article-searcher",className:"searchbox",placeholder:"Search article by title",onKeyUp:function(){var e=document.getElementById("article-searcher").value;e=e.toLowerCase();for(var a=document.getElementsByClassName("list-group-item"),t=0;t<a.length;t++)a[t].innerHTML.toLowerCase().includes(e)?a[t].parentElement.style.display="block":a[t].parentElement.style.display="none"}}))),l.a.createElement("div",null,l.a.createElement("p",null)))},O=t(10),j=t(166),k=t(179),w=t(167),L=t(168),S=t(169),A=t(40),U=t.n(A),R=t(64),T=t.n(R),F=t(65),D=t.n(F),M=t(177),P=t(68),W=t.n(P),q=t(69),J=t.n(q),H=t(70),I=t.n(H),B=t(67),_=t.n(B),Q=t(66),Y=t.n(Q),G=Object(u.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),K=function(){var e=G(),a=l.a.useState(1),t=Object(O.a)(a,2),n=t[0],r=t[1],c=function(e,a){r(a)},i=l.a.useState(!0),m=Object(O.a)(i,2),s=m[0],u=m[1];return l.a.createElement("div",{className:e.root},l.a.createElement(j.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(k.a,{button:!0,selected:0===n,onClick:function(e){return c(0,0)}},l.a.createElement(w.a,null,l.a.createElement(U.a,null)),l.a.createElement(o.b,{to:"/"},l.a.createElement(L.a,{primary:"JOURNAL"}))),l.a.createElement(k.a,{button:!0,selected:1===n,onClick:function(e){return c(0,1)}},l.a.createElement(w.a,null,l.a.createElement(T.a,null)),l.a.createElement(o.b,{to:"/customers"},l.a.createElement(L.a,{primary:"Articles"}))),l.a.createElement(k.a,{button:!0,selected:0===n,onClick:function(e){return c(0,0)}},l.a.createElement(w.a,null,l.a.createElement(D.a,null)),l.a.createElement(o.b,{to:"/add"},l.a.createElement(L.a,{primary:"New Article"})))),l.a.createElement(S.a,null),l.a.createElement(j.a,{component:"nav","aria-label":"secondary mailbox folder"},l.a.createElement(k.a,{button:!0,selected:2===n,onClick:function(e){return c(0,2)}},l.a.createElement(w.a,null,l.a.createElement(Y.a,null)),l.a.createElement(L.a,{primary:"Top Articles"})),l.a.createElement(k.a,{button:!0,onClick:function(){u(!s)}},l.a.createElement(w.a,null,l.a.createElement(_.a,null)),l.a.createElement(L.a,{primary:"Recent Articles"}),s?l.a.createElement(W.a,null):l.a.createElement(J.a,null)),l.a.createElement(M.a,{in:s,timeout:"auto",unmountOnExit:!0},l.a.createElement(j.a,{component:"div",disablePadding:!0},l.a.createElement(k.a,{button:!0,className:e.nested},l.a.createElement(w.a,null,l.a.createElement(I.a,null)),l.a.createElement(L.a,{primary:"Starred"}))))))},Z=(t(48),function(){return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{item:!0,xs:12,sm:12,style:{minWidth:300,textAlign:"justify",padding:"10px 25px 10px 12px"}},l.a.createElement("p",null,"Web journal is a collection of links to various online resources. An item comprises of a resource's topic, author, URL amongst others. Self-teaching developers like can find this journal useful since it's a collection of sources to the original web post. Click on ",l.a.createElement(o.b,{to:"/customers"},"Articles")," to explore this collection of resources."),l.a.createElement("br",null),l.a.createElement("p",null,"Don't forget to drop your comments and observations(in the comment section on how I can improve on the site."),l.a.createElement("br",null),l.a.createElement("p",null,"Happy Coding!! \xa0 Happy Development!!"))))}),$=t(21),z=t(24),V=(t(49),t(71)),X=t.n(V).a.create({baseURL:"https://cub-tapestry.herokuapp.com",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}}),ee=function(){return X.get("/customers")},ae=function(e){return X.get("/customers/".concat(e))},te=function(e){return X.post("/customers",e)},ne=function(e,a){return X.put("/customers/".concat(e),a)},le=function(){var e={id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1},a=Object(n.useState)(e),t=Object(O.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(O.a)(o,2),m=i[0],s=i[1],u=function(e){var a=e.target,t=a.name,n=a.value;c(Object(z.a)(Object(z.a)({},r),{},Object($.a)({},t,n)))};return l.a.createElement("div",{className:"customer-form"},l.a.createElement("div",{className:"submit-form"},m?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){c(e),s(!1)}},"Add")):l.a.createElement("div",{"article-form":"true"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",required:!0,value:r.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",required:!0,value:r.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",required:!0,value:r.category||"",onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",required:!0,value:r.source||"",onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",required:!0,value:r.author||"",onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",required:!0,value:r.URL||"",onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",required:!0,value:r.tags||"",onChange:u,name:"tags"})),l.a.createElement("button",{onClick:function(){var e={title:r.title,description:r.description,category:r.category,source:r.source,URL:r.URL,author:r.author,tags:r.tags};te(e).then((function(e){c({id:e.data.id,title:e.data.title,description:e.data.description,category:e.category,source:e.source,URL:e.URL,author:e.author,tags:e.tags,published:e.data.published}),s(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Submit"),l.a.createElement("br",null))))},re=function(e){var a=Object(n.useState)({id:null,title:"",category:"",description:"",source:"",URL:"",author:"",tags:"",published:!1}),t=Object(O.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(O.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){var a;a=e.match.params.id,ae(a).then((function(e){c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var u=function(e){var a=e.target,t=a.name,n=a.value;c(Object(z.a)(Object(z.a)({},r),{},Object($.a)({},t,n)))},E=function(e){var a={id:r.id,title:r.title,category:r.category,description:r.description,source:r.source,URL:r.URL,author:r.author,tags:r.tags,published:e};ne(r.id,a).then((function(a){c(Object(z.a)(Object(z.a)({},r),{},{published:e})),console.log(a.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"customer-form"},r?l.a.createElement("div",{className:"edit-form"},l.a.createElement("h4",null,l.a.createElement("strong",null,"Update Article")),l.a.createElement("form",null,l.a.createElement("div",{"article-form":!0},l.a.createElement("p",null,m),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"title"},"Article Title:"),l.a.createElement("input",{type:"text",className:"input-field",id:"title",value:r.title,onChange:u,name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"description"},"Description:"),l.a.createElement("textarea",{type:"text",className:"input-field",id:"description",value:r.description,onChange:u,name:"description"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"category"},"Category:"),l.a.createElement("input",{type:"text",className:"input-field",id:"category",value:r.category,onChange:u,name:"category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"source"},"Source:"),l.a.createElement("input",{type:"text",className:"input-field",id:"source",value:r.dource,onChange:u,name:"source"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"author"},"Author:"),l.a.createElement("input",{type:"text",className:"input-field",id:"author",value:r.author,onChange:u,name:"author"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"URL"},"URL:"),l.a.createElement("input",{type:"text",className:"input-field",id:"URL",value:r.URL,onChange:u,name:"URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling",htmlFor:"tags"},"Tags:"),l.a.createElement("input",{type:"text",className:"input-field",id:"tags",value:r.tags,onChange:u,name:"tags"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"labelling"},l.a.createElement("strong",null,"Status:")),r.published?"Published":"Pending"))),r.published?l.a.createElement("button",{className:"btn btn-success",onClick:function(){return E(!1)}},"UnPublish"):l.a.createElement("button",{className:"btn btn-success",onClick:function(){return E(!0)}},"Publish"),l.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:function(){ne(r.id,r).then((function(e){console.log(e.data),s("The customer was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update")):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Customer...")))},ce=(t(108),t(172)),oe=t(176),ie=t(175),me=t(171),se=t(173),ue=t(174),Ee=(t(109),t(72)),de=t.n(Ee),pe=Object(u.a)({root:{width:"100%",minWidth:410,border:1},table:{minWidth:360},active:{backgroundColor:"rgba(255, 255, 255, 0.12)"}}),ge=function(){var e=Object(n.useState)([]),a=Object(O.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),i=Object(O.a)(c,2),s=i[0],u=i[1],E=Object(n.useState)(-1),d=Object(O.a)(E,2),p=d[0],g=d[1],b=Object(n.useState)(!0),h=Object(O.a)(b,2),f=h[0],v=h[1],y=Object(n.useState)(1),N=Object(O.a)(y,2);N[0],N[1];Object(n.useEffect)((function(){C()}),[]);var C=function(){ee().then((function(e){v(!1),r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},x=pe();return l.a.createElement("div",{className:""},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,sm:7,className:"appContent"},l.a.createElement("div",{className:"customer-details"},s?l.a.createElement("div",null,l.a.createElement(me.a,null,l.a.createElement(ce.a,{className:x.table,"aria-label":"simple table"},l.a.createElement(se.a,null,l.a.createElement(ue.a,null,l.a.createElement(ie.a,{colSpan:2,align:"center"},l.a.createElement("strong",null,"ARTICLE \xa0",s.id)))),l.a.createElement(oe.a,null,l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Title:")),l.a.createElement(ie.a,{align:"left"}," ",s.title)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Category:")),l.a.createElement(ie.a,{align:"left"}," ",s.category)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Description:")),l.a.createElement(ie.a,{align:"left"}," ",s.description)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Source:")),l.a.createElement(ie.a,{align:"left"}," ",s.source)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Author:")),l.a.createElement(ie.a,{align:"left"}," ",s.source)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Source:")),l.a.createElement(ie.a,{align:"left"}," ",s.source)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"URL:")),l.a.createElement(ie.a,{align:"left"}," ",s.url)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Tags:")),l.a.createElement(ie.a,{align:"left"}," ",s.tags)),l.a.createElement(ue.a,null,l.a.createElement(ie.a,{align:"left"},l.a.createElement("strong",null,"Status:")),l.a.createElement(ie.a,{align:"left"}," ",s.published?"Published":"Pending")))),l.a.createElement(o.b,{to:"/customers/"+s.id,className:"badge badge-warning"},"Edit"))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"No article selected")))),l.a.createElement(m.a,{item:!0,xs:12,sm:5,className:"appContent"},f?l.a.createElement("p",null,"Data loading, please wait..",l.a.createElement(de.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50})):l.a.createElement("div",Object($.a)({className:"article-list"},"className",x.root),l.a.createElement("h3",null,l.a.createElement("strong",null,"ARTICLE TOPICS")),l.a.createElement("p",null,"Click on any article below to view details..."),l.a.createElement("div",null,l.a.createElement(j.a,{component:"nav"},t&&t.map((function(e,a){return l.a.createElement(k.a,{button:!0,key:a,selected:p===a,onClick:function(){return function(e,a){u(e),g(a)}(e,a)}},l.a.createElement(L.a,{primary:l.a.createElement("div",null,l.a.createElement("p",null,e.title))}),l.a.createElement(S.a,null))}))))))))},be=function(){var e=Object(u.a)((function(e){return{iconise:{display:"flex","& > *":{margin:e.spacing(1)}},righted:{position:"absolute",right:0},barback:{backgroundColor:"#b3cce6",color:"black"}}}))();return l.a.createElement("div",{className:"footer"},l.a.createElement(m.a,{container:!0,spacing:3,className:e.barback,position:"static",padding:"4px"},l.a.createElement(m.a,{item:!0,xs:12,sm:4,style:{textAlign:"left",paddingLeft:"14px"}},l.a.createElement(p.a,null,l.a.createElement("p",null,l.a.createElement("b",null,"Contact us:"),l.a.createElement("br",null),"Web Journal",l.a.createElement("br",null),"Mail: mccollinstechnologies@gmail.com.",l.a.createElement("p",null,"Follow us on: ",l.a.createElement("a",{href:"https://twitter.com/engrcollins14",target:"_blank"},"Twitter"),", \xa0",l.a.createElement("a",{href:"https://facebook.com/engrcollins14",target:"_blank"},"Facebook "),", \xa0",l.a.createElement("a",{href:"https://qr.ae/TmZyQH",target:"_blank"},"Quora "),", \xa0",l.a.createElement("a",{href:"https://medium.com",target:"_blank"},"Medium."))))),l.a.createElement(m.a,{item:!0,xs:12,sm:5,style:{padding:"3px",paddingTop:"65px",textAlign:"center"}},l.a.createElement(p.a,null,l.a.createElement("p",null," ",l.a.createElement("a",{href:"#"},"About Us")," |  ",l.a.createElement("a",{href:"#"},"Terms of Service")," |  ",l.a.createElement("a",{href:"#"},"Privacy Policy")," |  ",l.a.createElement("a",{href:"#"},"FAQ")," |  ",l.a.createElement("a",{href:"#"},"Advertise")," "),l.a.createElement("p",{id:"copyright"},l.a.createElement("b",null,"Web Journal \xa9 2019 - ",l.a.createElement("span",{className:"copyright"}))))),l.a.createElement(m.a,{item:!0,xs:12,sm:3,style:{paddingTop:"25px",textAlign:"center"}},l.a.createElement(p.a,null,l.a.createElement("p",null,l.a.createElement("b",null,"Disclaimer: "),"All articles are referenced with source and author.")))))};var he=function(){return l.a.createElement("div",{id:"appContainer"},l.a.createElement(f,null),l.a.createElement(x,null),l.a.createElement(o.a,null,l.a.createElement(m.a,{container:!0,spacing:3,component:s.a},l.a.createElement(m.a,{item:!0,xs:12,sm:3,lg:2},l.a.createElement(K,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{item:!0,xs:8,sm:9,lg:10},l.a.createElement("div",{className:"appContent",style:{textAlign:"center"}},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/add",component:le}),l.a.createElement(i.a,{path:"/customers/:id",component:re}),l.a.createElement(i.a,{path:"/customers",component:ge}),l.a.createElement(i.a,{path:"/",component:Z})))))),l.a.createElement("div",null,l.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){},49:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/header2.64c1ea7d.png"},80:function(e,a,t){e.exports=t(129)}},[[80,1,2]]]);
//# sourceMappingURL=main.a4b329ba.chunk.js.map