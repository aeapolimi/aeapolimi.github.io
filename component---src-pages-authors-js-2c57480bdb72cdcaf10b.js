(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[21,32,33],{"2T7W":function(e,t,a){e.exports=a.p+"static/pietro_bosoni-fd7013bc81caf8b05530ba872e03e81e.jpeg"},"30+C":function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=a("iuhU"),c=a("kKAo"),l=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,p=Object(o.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(n.a)({className:Object(i.a)(a.root,l),elevation:d?8:1,ref:t},p))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},"4Gr3":function(e,t,a){},"8ypT":function(e,t,a){},B31E:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=(a("4Gr3"),a("ofer")),i=a("Wcq6"),c=a.n(i),l=(a("5x/H"),a("AAub"),a("kCIJ")),s=a("Nra3"),d=a("vrFN"),p=a("Bl7J");a("B1U6");function u(e){var t=o.a.useState("Caricamento..."),a=t[0],n=t[1],r="it"===Object(l.useIntl)().locale;return""!==e.autore&&e.autore?("Caricamento..."===a&&c.a.firestore().collection("news").where("autore","==",e.autore).get().then((function(e){n(e.docs)})),"Caricamento..."===a?o.a.createElement("div",null,"Loading..."):a.map((function(e){return o.a.createElement(s.a,{autore:e.data().autore,titolo:r?e.data().titolo_it:e.data().titolo,data:e.data().data.toDate(),descrizione:r?e.data().sommario_it:e.data().sommario,codice:e.id,tag:e.data().tag})}))):"You shouldn't be here."}"undefined"==typeof window||c.a.apps.length||(c.a.initializeApp({apiKey:"AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",authDomain:"aeapolimiweb.firebaseapp.com",databaseURL:"https://aeapolimiweb.firebaseio.com",projectId:"aeapolimiweb",storageBucket:"aeapolimiweb.appspot.com",messagingSenderId:"252147138104",appId:"1:252147138104:web:cc2a953476b0b77f65b0cd",measurementId:"G-0D5Z9JD5XH"}),c.a.analytics()),t.default=function(e){var t=e.location.search.substring(1).replace("%20"," ");try{var n=a("JHaO")("./"+t.replace(/\ /g,"_").toLowerCase()+".jpeg")}catch(i){n=void 0}return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(d.a,{title:t}),n?o.a.createElement("div",{style:{minWidth:"100%"}},o.a.createElement("img",{src:n,alt:t,height:"100px",style:{borderRadius:30,display:"block",margin:"0 auto"}})):null,o.a.createElement(r.a,{variant:"h3",align:"center",style:{marginBottom:"10px",marginTop:"20px"}},t),o.a.createElement(r.a,{variant:"subtitle1",align:"center",style:{marginBottom:"40px"}},"All the articles written by ",t,"."),o.a.createElement(u,{autore:t}),o.a.createElement("div",{style:{height:"40px"}})))}},BF8f:function(e,t,a){e.exports=a.p+"static/davide_zanatta-07ffdf9e2d969a64672fc9f89718e946.jpeg"},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("b6Qr"),i=a("viY9"),c=a("q4d2"),l=a("bWLx"),s=a("R/WZ"),d=a("bXiM"),p=a("lO0E"),u=a("aBAf"),m=a("PsDL"),f=a("uniG"),b=a.n(f),g=a("Wv/k"),v=a("JwsL"),E=(a("8ypT"),a("kCIJ")),y=r.isSafari||r.isMobileSafari?a("psy0"):a("sSyU"),h=Object(i.a)({palette:{primary:{main:"#ef6c00"},secondary:{main:"#212121"}},status:{danger:"orange"}});h=Object(c.a)(h);var j=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2),backgroundColor:"black","&:hover":{backgroundColor:"black"}},title:{flexGrow:1},footer:{position:"fixed",bottom:0,textAlign:"center",paddingBottom:10,backgroundColor:"#ef6c00"},appBar:{top:"auto",bottom:0}}}));t.a=function(e){var t=e.children,a=o.a.useState(!1),n=a[0],r=a[1],i=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}},c=j();return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{theme:h},o.a.createElement("div",{style:{minHeight:"calc(100vh - 64px)"},key:"corpo"},o.a.createElement("div",{key:"headerdrawaer"},o.a.createElement(u.a,{anchor:"left",open:n,onClose:i(!1),onOpen:i(!0)},o.a.createElement(g.default,{home:!1})),o.a.createElement(d.a,{position:"static",style:{backgroundColor:"transparent"},elevation:0},o.a.createElement(p.a,null,o.a.createElement(m.a,{edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return r(!n)}},o.a.createElement(b.a,null)),o.a.createElement("img",{style:{display:"inline",marginLeft:"calc(49% - 70px)"},src:y,alt:"logo",height:"64px",onClick:function(){return Object(E.navigate)("/")}})))),o.a.createElement("main",null,t)),o.a.createElement("div",{key:"barraFooter"},o.a.createElement(v.default,null))))}},"D/uB":function(e,t,a){e.exports=a.p+"static/giulio_vaccari-2cdaebb0994d22fe35a5578204769b09.jpeg"},FaIM:function(e,t,a){e.exports=a.p+"static/guido_sassaroli-0b904271b711edbb8b1622fab49f7e2b.jpeg"},Gk37:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("PsDL"),i=a("U5GE"),c=a.n(i),l=a("lJuC"),s=a.n(l),d=a("LXgK"),p=a.n(d);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{href:"https://www.instagram.com/aeapolimi/",rel:"noopener",target:"_blank"},o.a.createElement(c.a,{style:{fill:"white"}})),o.a.createElement(r.a,{href:"https://www.linkedin.com/company/aeapolimi",rel:"noopener",target:"_blank"},o.a.createElement(s.a,{style:{fill:"white"}})),o.a.createElement(r.a,{href:"https://t.me/aeapolimi",rel:"noopener",target:"_blank"},o.a.createElement(p.a,{style:{fill:"white"}})))}},JHaO:function(e,t,a){var n={"./cristian_gariboldi.jpeg":"SMmM","./davide_zanatta.jpeg":"BF8f","./elena_bastianelli.jpeg":"soQf","./filippo_tallon.jpeg":"edLm","./giovanni_ploner.jpeg":"MHJl","./giulio_vaccari.jpeg":"D/uB","./guido_sassaroli.jpeg":"FaIM","./isabella_luppi.jpeg":"pobN","./leonardo_bertelli.jpeg":"podV","./matteo_sacchetti.jpeg":"kwIw","./pasquale_cortese.jpeg":"Kr+c","./pietro_bosoni.jpeg":"2T7W","./pietro_dardano.jpeg":"dAtx","./roberto_pellerito.jpeg":"bwjJ","./sofia_trombini.jpeg":"d4qS"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="JHaO"},JwsL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("R/WZ"),i=a("HUsl"),c=a.n(i),l=a("bXiM"),s=a("Z3vd"),d=a("lO0E"),p=a("ofer"),u=a("kCIJ"),m=a("Gk37"),f=Object(r.a)((function(e){return{appBar:{top:"auto",bottom:0,backgroundColor:"black",position:"relative"}}}));t.default=function(){var e=f();return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{className:e.appBar,elevation:0,key:"fintoFooter"},o.a.createElement(d.a,{key:"footerToolbar"},o.a.createElement(p.a,{variant:"subtitle2"},"Copyright AEA 2020"),o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement(m.default,null),o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement(s.a,{style:{color:"white"},component:u.Link,to:"/privacypolicy",size:"small"},"Privacy policy"))),o.a.createElement(c.a,{location:"bottom",buttonText:"Ok",buttonStyle:{backgroundColor:"#ef6c00",fontSize:"13px"},cookieName:"gatsby-gdpr-google-analytics"},"AEA uses cookies to login. ",o.a.createElement(u.Link,{to:"/privacypolicy"},o.a.createElement("b",null,"More"))))}},"Kr+c":function(e,t,a){e.exports=a.p+"static/pasquale_cortese-fda0097af3cb578c84547ce68d0502dc.jpeg"},LXgK:function(e,t,a){"use strict";var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram");t.default=r},MHJl:function(e,t,a){e.exports=a.p+"static/giovanni_ploner-4525428fb8f3f9a5c41377f2af39ad25.jpeg"},Nra3:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("R/WZ"),i=a("30+C"),c=a("o4QW"),l=a("oa/T"),s=a("Z3vd"),d=a("ofer"),p=a("kCIJ"),u=Object(r.a)({root:{minWidth:275,maxWidth:"75vw",margin:"0 auto",marginBottom:"20px",textAlign:"center",borderColor:"#ef6c00"},title:{fontSize:14},pos:{marginBottom:12}});t.a=function(e){var t=u(),a=e.codice,n=Object(p.useIntl)();return o.a.createElement(i.a,{key:e.codice,className:t.root,variant:"outlined",raised:!0},o.a.createElement(l.a,null,o.a.createElement(d.a,{variant:"overline",color:"textSecondary",gutterBottom:!0},"TAG:",void 0===e.tag?"":e.tag.map((function(e){return o.a.createElement(p.Link,{to:"/tags?"+e,style:{color:"inherit"}}," ",e)}))),o.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.data.toLocaleString(n.locale,{month:"long",day:"numeric",year:"numeric"})),o.a.createElement(d.a,{variant:"h5",component:"h2"},e.titolo),o.a.createElement(d.a,{color:"textSecondary"},o.a.createElement(p.Link,{to:"/authors?"+e.autore,style:{color:"inherit"}},o.a.createElement(p.FormattedMessage,{id:"insiders.by"})," ",e.autore)),o.a.createElement(d.a,{variant:"body2",component:"p",className:t.pos},e.descrizione)),o.a.createElement(c.a,{style:{justifyContent:"center"}},o.a.createElement(s.a,{component:p.Link,to:"/articolo/?"+a,size:"small",variant:"outlined",style:{color:"black"}},o.a.createElement(p.FormattedMessage,{id:"insiders.read"}))))}},SMmM:function(e,t,a){e.exports=a.p+"static/cristian_gariboldi-148681e7ab2b7fddbb3ee56da212656e.jpeg"},U5GE:function(e,t,a){"use strict";var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.default=r},bwjJ:function(e,t,a){e.exports=a.p+"static/roberto_pellerito-2a6547cd3ecf96ea5dd1b93f8914f1de.jpeg"},d4qS:function(e,t,a){e.exports=a.p+"static/sofia_trombini-de81b32345ab2ee11724e0ce48bf71a4.jpeg"},dAtx:function(e,t,a){e.exports=a.p+"static/pietro_dardano-186155ec3e5828426d4cbf5b112bd4ec.jpeg"},edLm:function(e,t,a){e.exports=a.p+"static/filippo_tallon-ab58d19e7d95b95d9cb0f55cfcbcc3ef.jpeg"},kwIw:function(e,t,a){e.exports=a.p+"static/matteo_sacchetti-48ccf946514bc806133729a1940e5f15.jpeg"},o4QW:function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=a("iuhU"),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,l=e.classes,s=e.className,d=Object(o.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(l)},"oa/T":function(e,t,a){"use strict";var n=a("k1TG"),o=a("aXB2"),r=a("q1tI"),i=a("iuhU"),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(o.a)(e,["classes","className","component"]);return r.createElement(s,Object(n.a)({className:Object(i.a)(a.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},pobN:function(e,t,a){e.exports=a.p+"static/isabella_luppi-e0342452b720201a12570bb2c5e4a9c0.jpeg"},podV:function(e,t,a){e.exports=a.p+"static/leonardo_bertelli-96de2612087f26dc2a66939d1e337724.jpeg"},psy0:function(e,t,a){e.exports=a.p+"static/AEAtondo_trasparente-a7ee8d6e56760b4e5588a1b02a0ae2c3.png"},sSyU:function(e,t,a){e.exports=a.p+"static/AEAtondo_trasparente-2767ae7e5cf0f6f4a698552d6ed3a22e.webp"},soQf:function(e,t,a){e.exports=a.p+"static/elena_bastianelli-1fa56f52cab379d0e90ea0e99753edeb.jpeg"}}]);
//# sourceMappingURL=component---src-pages-authors-js-2c57480bdb72cdcaf10b.js.map