(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4Gr3":function(t,e,n){},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r);n("4Gr3");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n("zLVn");function c(t,e){if(null==t)return{};var n,r,a=Object(o.a)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=n("wx14");function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t){return t&&"object"===f(t)&&t.constructor===Object}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},r=n.clone?Object(u.a)({},t):t;return d(t)&&d(e)&&Object.keys(e).forEach((function(a){"__proto__"!==a&&(d(e[a])&&a in t?r[a]=l(t[a],e[a],n):r[a]=e[a])})),r}var s=["xs","sm","md","lg","xl"];function p(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,a=void 0===r?"px":r,i=t.step,o=void 0===i?5:i,f=c(t,["values","unit","step"]);function d(t){var e="number"==typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(a,")")}function l(t,e){var r=s.indexOf(e);return r===s.length-1?d(t):"@media (min-width:".concat("number"==typeof n[t]?n[t]:t).concat(a,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[s[r+1]]?n[s[r+1]]:e)-o/100).concat(a,")")}return Object(u.a)({keys:s,values:n,up:d,down:function(t){var e=s.indexOf(t)+1,r=n[s[e]];return e===s.length?d("xs"):"@media (max-width:".concat(("number"==typeof r&&e>0?r:t)-o/100).concat(a,")")},between:l,only:function(t){return l(t,t)},width:function(t){return n[t]}},f)}function g(t,e,n){var r;return Object(u.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)({paddingLeft:e(2),paddingRight:e(2)},n,i({},t.up("sm"),Object(u.a)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(r={minHeight:56},i(r,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),i(r,t.up("sm"),{minHeight:64}),r)},n)}function m(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}var h={black:"#000",white:"#fff"},v={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},b={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},y={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},x={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},O={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},A={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},w={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function S(t){if(t.type)return t;if("#"===t.charAt(0))return S(function(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(m(3,t));var r=t.substring(e+1,t.length-1).split(",");return{type:n,values:r=r.map((function(t){return parseFloat(t)}))}}function k(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function E(t){var e="hsl"===(t=S(t)).type?S(function(t){var e=(t=S(t)).values,n=e[0],r=e[1]/100,a=e[2]/100,i=r*Math.min(a,1-a),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return a-i*Math.max(Math.min(e-3,9-e,1),-1)},c="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===t.type&&(c+="a",u.push(e[3])),k({type:c,values:u})}(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function M(t,e){if(t=S(t),e=j(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return k(t)}function z(t,e){if(t=S(t),e=j(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return k(t)}var F={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:v[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},R={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:v[800],default:"#303030"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T(t,e,n,r){var a=r.light||r,i=r.dark||1.5*r;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=z(t.main,a):"dark"===e&&(t.dark=M(t.main,i)))}function I(t){var e=t.primary,n=void 0===e?{light:b[300],main:b[500],dark:b[700]}:e,r=t.secondary,a=void 0===r?{light:y.A200,main:y.A400,dark:y.A700}:r,i=t.error,o=void 0===i?{light:x[300],main:x[500],dark:x[700]}:i,f=t.warning,d=void 0===f?{light:O[300],main:O[500],dark:O[700]}:f,s=t.info,p=void 0===s?{light:A[300],main:A[500],dark:A[700]}:s,g=t.success,j=void 0===g?{light:w[300],main:w[500],dark:w[700]}:g,S=t.type,k=void 0===S?"light":S,M=t.contrastThreshold,z=void 0===M?3:M,I=t.tonalOffset,W=void 0===I?.2:I,B=c(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function H(t){return function(t,e){var n=E(t),r=E(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(t,R.text.primary)>=z?R.text.primary:F.text.primary}var L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=Object(u.a)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(m(4,e));if("string"!=typeof t.main)throw new Error(m(5,JSON.stringify(t.main)));return T(t,"light",n,W),T(t,"dark",r,W),t.contrastText||(t.contrastText=H(t.main)),t},P={dark:R,light:F};return l(Object(u.a)({common:h,type:k,primary:L(n),secondary:L(a,"A400","A200","A700"),error:L(o),warning:L(d),info:L(p),success:L(j),grey:v,contrastThreshold:z,getContrastText:H,augmentColor:L,tonalOffset:W},P[k]),B)}function W(t){return Math.round(1e5*t)/1e5}var B={textTransform:"uppercase"};function H(t,e){var n="function"==typeof e?e(t):e,r=n.fontFamily,a=void 0===r?'"Roboto", "Helvetica", "Arial", sans-serif':r,i=n.fontSize,o=void 0===i?14:i,f=n.fontWeightLight,d=void 0===f?300:f,s=n.fontWeightRegular,p=void 0===s?400:s,g=n.fontWeightMedium,m=void 0===g?500:g,h=n.fontWeightBold,v=void 0===h?700:h,b=n.htmlFontSize,y=void 0===b?16:b,x=n.allVariants,O=n.pxToRem,A=c(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var w=o/14,j=O||function(t){return"".concat(t/y*w,"rem")},S=function(t,e,n,r,i){return Object(u.a)({fontFamily:a,fontWeight:t,fontSize:j(e),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===a?{letterSpacing:"".concat(W(r/e),"em")}:{},i,x)},k={h1:S(d,96,1.167,-1.5),h2:S(d,60,1.2,-.5),h3:S(p,48,1.167,0),h4:S(p,34,1.235,.25),h5:S(p,24,1.334,0),h6:S(m,20,1.6,.15),subtitle1:S(p,16,1.75,.15),subtitle2:S(m,14,1.57,.1),body1:S(p,16,1.5,.15),body2:S(p,14,1.43,.15),button:S(m,14,1.75,.4,B),caption:S(p,12,1.66,.4),overline:S(p,12,2.66,1,B)};return l(Object(u.a)({htmlFontSize:y,pxToRem:j,round:W,fontFamily:a,fontSize:o,fontWeightLight:d,fontWeightRegular:p,fontWeightMedium:m,fontWeightBold:v},k),A,{clone:!1})}function L(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var P=["none",L(0,2,1,-1,0,1,1,0,0,1,3,0),L(0,3,1,-2,0,2,2,0,0,1,5,0),L(0,3,3,-2,0,3,4,0,0,1,8,0),L(0,2,4,-1,0,4,5,0,0,1,10,0),L(0,3,5,-1,0,5,8,0,0,1,14,0),L(0,3,5,-1,0,6,10,0,0,1,18,0),L(0,4,5,-2,0,7,10,1,0,2,16,1),L(0,5,5,-3,0,8,10,1,0,3,14,2),L(0,5,6,-3,0,9,12,1,0,3,16,2),L(0,6,6,-3,0,10,14,1,0,4,18,3),L(0,6,7,-4,0,11,15,1,0,4,20,3),L(0,7,8,-4,0,12,17,2,0,5,22,4),L(0,7,8,-4,0,13,19,2,0,5,24,4),L(0,7,9,-4,0,14,21,2,0,5,26,4),L(0,8,9,-5,0,15,22,2,0,6,28,5),L(0,8,10,-5,0,16,24,2,0,6,30,5),L(0,8,11,-5,0,17,26,2,0,6,32,5),L(0,9,11,-5,0,18,28,2,0,7,34,6),L(0,9,12,-6,0,19,29,2,0,7,36,6),L(0,10,13,-6,0,20,31,3,0,8,38,7),L(0,10,13,-6,0,21,33,3,0,8,40,7),L(0,10,14,-6,0,22,35,3,0,8,42,7),L(0,11,14,-7,0,23,36,3,0,9,44,8),L(0,11,15,-7,0,24,38,3,0,9,46,8)],_={borderRadius:4};var C=n("BsWD");function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||Object(C.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n("KQm4"),n("17x9");var Y=function(t,e){return e?l(t,e,{clone:!1}):t},X={xs:0,sm:600,md:960,lg:1280,xl:1920},D={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(X[t],"px)")}};var U,V,J={m:"margin",p:"padding"},G={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},K=(U=function(t){if(t.length>2){if(!q[t])return[t];t=q[t]}var e=N(t.split(""),2),n=e[0],r=e[1],a=J[n],i=G[r]||"";return Array.isArray(i)?i.map((function(t){return a+t})):[a+i]},V={},function(t){return void 0===V[t]&&(V[t]=U(t)),V[t]}),Q=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function Z(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}function $(t,e){return function(n){return t.reduce((function(t,r){return t[r]=function(t,e){if("string"==typeof e)return e;var n=t(Math.abs(e));return e>=0?n:"number"==typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function tt(t){var e=Z(t.theme);return Object.keys(t).map((function(n){if(-1===Q.indexOf(n))return null;var r=$(K(n),e),a=t[n];return function(t,e,n){if(Array.isArray(e)){var r=t.theme.breakpoints||D;return e.reduce((function(t,a,i){return t[r.up(r.keys[i])]=n(e[i]),t}),{})}if("object"===f(e)){var a=t.theme.breakpoints||D;return Object.keys(e).reduce((function(t,r){return t[a.up(r)]=n(e[r]),t}),{})}return n(e)}(t,a,r)})).reduce(Y,{})}tt.propTypes={},tt.filterProps=Q;function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=Z({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"==typeof t)return t;var n=e(t);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var nt={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},rt={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function at(t){return"".concat(Math.round(t),"ms")}var it={easing:nt,duration:rt,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?rt.standard:n,a=e.easing,i=void 0===a?nt.easeInOut:a,o=e.delay,u=void 0===o?0:o;c(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"==typeof r?r:at(r)," ").concat(i," ").concat("string"==typeof u?u:at(u))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}},ot={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var ct=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,r=t.mixins,a=void 0===r?{}:r,i=t.palette,o=void 0===i?{}:i,u=t.spacing,f=t.typography,d=void 0===f?{}:f,s=c(t,["breakpoints","mixins","palette","spacing","typography"]),m=I(o),h=p(n),v=et(u),b=l({breakpoints:h,direction:"ltr",mixins:g(h,v,a),overrides:{},palette:m,props:{},shadows:P,typography:H(m,d),spacing:v,shape:_,transitions:it,zIndex:ot},s),y=arguments.length,x=new Array(y>1?y-1:0),O=1;O<y;O++)x[O-1]=arguments[O];return b=x.reduce((function(t,e){return l(t,e)}),b)};function ut(t){return String(parseFloat(t)).length===String(t).length}function ft(t){return parseFloat(t)}function dt(t){return function(e,n){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;var a=ft(e);if("px"!==r)if("em"===r)a=ft(e)*ft(t);else if("rem"===r)return a=ft(e)*ft(t),e;var i=a;if("px"!==n)if("em"===n)i=a/ft(t);else{if("rem"!==n)return e;i=a/ft(t)}return parseFloat(i.toFixed(5))+n}}function lt(t){var e=t.size,n=t.grid,r=e-e%n,a=r+n;return e-r<a-e?r:a}function st(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function pt(t){var e=t.cssProperty,n=t.min,r=t.max,a=t.unit,o=void 0===a?"rem":a,c=t.breakpoints,u=void 0===c?[600,960,1280]:c,f=t.transform,d=void 0===f?null:f,l=i({},e,"".concat(n).concat(o)),s=(r-n)/u[u.length-1];return u.forEach((function(t){var r=n+s*t;null!==d&&(r=d(r)),l["@media (min-width:".concat(t,"px)")]=i({},e,"".concat(Math.round(1e4*r)/1e4).concat(o))})),l}var gt=a.a.createContext(null);var mt="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var ht=function(t){var e=t.children,n=t.theme,r=a.a.useContext(gt),i=a.a.useMemo((function(){var t=null===r?n:function(t,e){return"function"==typeof e?e(t):Object(u.a)(Object(u.a)({},t),e)}(r,n);return null!=t&&(t[mt]=null!==r),t}),[n,r]);return a.a.createElement(gt.Provider,{value:i},e)};n("UEYy");var vt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement("iframe",{title:"bg",id:"bg",src:"../../robotrender.html",frameBorder:"0"}),a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"CIAO"))))},bt=n("vrFN"),yt=ct({palette:{primary:{main:"#ffd000"},secondary:{main:"#40bd47"}},status:{danger:"orange"}});yt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.breakpoints,r=void 0===n?["sm","md","lg"]:n,a=e.disableAlign,i=void 0!==a&&a,o=e.factor,c=void 0===o?2:o,f=e.variants,d=void 0===f?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:f,l=Object(u.a)({},t);l.typography=Object(u.a)({},l.typography);var s=l.typography,p=dt(s.htmlFontSize),g=r.map((function(t){return l.breakpoints.values[t]}));return d.forEach((function(t){var e=s[t],n=parseFloat(p(e.fontSize,"rem"));if(!(n<=1)){var r=n,a=1+(r-1)/c,o=e.lineHeight;if(!ut(o)&&!i)throw new Error(m(6));ut(o)||(o=parseFloat(p(o,"rem"))/parseFloat(n));var f=null;i||(f=function(t){return lt({size:t,grid:st({pixels:4,lineHeight:o,htmlFontSize:s.htmlFontSize})})}),s[t]=Object(u.a)({},e,pt({cssProperty:"fontSize",min:a,max:r,unit:"rem",breakpoints:g,transform:f}))}})),l}(yt);e.default=function(){return a.a.createElement("div",null,a.a.createElement(bt.a,{title:"Home"}),a.a.createElement(ht,{theme:yt},a.a.createElement(vt,null)))}},UEYy:function(t,e,n){},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-b16e2a383f7f3ffbe14f.js.map