(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6bgw":function(e,t,a){},"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("b6Qr"),c=a("viY9"),l=a("q4d2"),s=a("bWLx"),m=a("R/WZ"),u=a("bXiM"),p=a("lO0E"),d=a("aBAf"),b=a("PsDL"),g=a("uniG"),f=a.n(g),E=a("Wv/k"),h=a("JwsL"),y=(a("8ypT"),i.isSafari||i.isMobileSafari?a("onbw"):a("DLQN")),v=Object(c.a)({palette:{primary:{main:"#ef6c00"},secondary:{main:"#212121"}},status:{danger:"orange"}});v=Object(l.a)(v);var w=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2),backgroundColor:"black","&:hover":{backgroundColor:"black"}},title:{flexGrow:1},footer:{position:"fixed",bottom:0,textAlign:"center",paddingBottom:10,backgroundColor:"#ef6c00"},appBar:{top:"auto",bottom:0}}}));t.a=function(e){var t=e.children,a=o.a.useState(!1),n=a[0],i=a[1],c=(Object(r.useStaticQuery)("3649515864"),function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}}),l=w();return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{theme:v},o.a.createElement("div",{style:{minHeight:"calc(100vh - 64px)"},key:"corpo"},o.a.createElement("div",{key:"headerdrawaer"},o.a.createElement(d.a,{anchor:"left",open:n,onClose:c(!1),onOpen:c(!0)},o.a.createElement(E.a,{home:!1})),o.a.createElement(u.a,{position:"static",style:{backgroundColor:"transparent"},elevation:0},o.a.createElement(p.a,null,o.a.createElement(b.a,{edge:"start",className:l.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return i(!n)}},o.a.createElement(f.a,null)),o.a.createElement("img",{style:{display:"inline",marginLeft:"calc(49% - 70px)"},src:y,alt:"logo",height:"64px",onClick:function(){return Object(r.navigate)("/")}})))),o.a.createElement("main",null,t)),o.a.createElement("div",{key:"barraFooter"},o.a.createElement(h.a,null))))}},rEVs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=(a("6bgw"),a("R/WZ")),i=a("wb2y"),c=a("ofer"),l=a("Wcq6"),s=a.n(l),m=(a("5x/H"),a("Wbzz")),u=a("vrFN"),p=a("Bl7J");a("B1U6");s.a.apps.length||s.a.initializeApp({apiKey:"AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",authDomain:"aeapolimiweb.firebaseapp.com",databaseURL:"https://aeapolimiweb.firebaseio.com",projectId:"aeapolimiweb",storageBucket:"aeapolimiweb.appspot.com",messagingSenderId:"252147138104",appId:"1:252147138104:web:cc2a953476b0b77f65b0cd"});var d=Object(r.a)((function(e){var t;return{testoArticolo:(t={textAlign:"justify",margin:"0 auto"},t[e.breakpoints.up("sm")]={maxWidth:"55vw"},t)}}));function b(e){var t=d(),a=o.a.useState("Caricamento..."),n=a[0],r=a[1];return""==e.codice?"You shouldn't be here TESTSTSTSTSTSTTS":("Caricamento..."===n&&s.a.firestore().collection("news").doc(e.articolo).get().then((function(t){t.exists?(r(t.data()),e.setInfo({titolo:t.data().titolo,descrizione:t.data().sommario})):Object(m.navigate)("/Insiders")})),"Caricamento..."===n?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",{className:"contenuto"},o.a.createElement(i.a,{style:{marginTop:"20px",marginBottom:"20px"}}),o.a.createElement(c.a,{variant:"h6",align:"center"},n.data),o.a.createElement(c.a,{color:"textSecondary",gutterBottom:!0},"by ",n.autore),o.a.createElement(c.a,{variant:"h1",align:"center"},n.titolo),o.a.createElement(c.a,{variant:"subtitle1",align:"center"},n.sommario),o.a.createElement(i.a,{style:{marginTop:"20px",marginBottom:"40px"}}),o.a.createElement("div",{className:t.testoArticolo,key:n.titolo,dangerouslySetInnerHTML:{__html:n.testo}}),o.a.createElement("div",{style:{height:"40px"}})))}t.default=function(e){var t=o.a.useState({titolo:"Article",descrizione:"An Article on AEA Insiders by a member of the Automation Engineering Association."}),a=t[0],n=t[1],r=e.location.search.substring(1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(u.a,{title:a.titolo,description:a.descrizione}),o.a.createElement(b,{articolo:r,setInfo:n,codice:r})))}}}]);
//# sourceMappingURL=component---src-pages-articolo-js-3b1edb539c6299f1cd86.js.map