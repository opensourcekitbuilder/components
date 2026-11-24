const __klerq_env = globalThis.__KLERQ_ENV__ || {};
const require = (name) => {
  const mod = (globalThis.__KLERQ_SHARED__ || {})[name];
  if (mod === undefined) throw new Error('klerq remote: shared module "' + name + '" was not registered by the host');
  return mod && mod.__esModule ? mod : Object.assign(Object.create(null), mod, { __esModule: true });
};
var __klerq_remote=(()=>{var S0=Object.create;var Al=Object.defineProperty;var x0=Object.getOwnPropertyDescriptor;var C0=Object.getOwnPropertyNames;var T0=Object.getPrototypeOf,I0=Object.prototype.hasOwnProperty;var t=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(o,n)=>(typeof require<"u"?require:o)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var w0=(e,o)=>{for(var n in o)Al(e,n,{get:o[n],enumerable:!0})},zh=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of C0(o))!I0.call(e,i)&&i!==n&&Al(e,i,{get:()=>o[i],enumerable:!(r=x0(o,i))||r.enumerable});return e};var Y=(e,o,n)=>(n=e!=null?S0(T0(e)):{},zh(o||!e||!e.__esModule?Al(n,"default",{value:e,enumerable:!0}):n,e)),v0=e=>zh(Al({},"__esModule",{value:!0}),e);var KH={};w0(KH,{default:()=>y0});var We=t("react"),m0=t("next-i18next"),Q=t("@mantine/core"),Ln=t("@apollo/client"),Xt=t("@fortawesome/free-solid-svg-icons"),Zo=t("@fortawesome/react-fontawesome"),f0=t("jotai"),g0=t("@/lib/contexts/Languages");var Kh=t("@apollo/client"),qh=t("lodash");var Bt=Y(t("loglevel"));var Ll="en";var Fl=typeof window>"u";var Hh=!1;var Ya={type:"doc",content:[{type:"paragraph"}]};var Eu="md",Uh="md";var _n="DEFAULT";var Fu=t("@/lib/env/client"),Vh=t("@/lib/env/server");var Lu=Y(t("loglevel-plugin-prefix")),ar={RESET:"\x1B[0m",TEXT:{BLACK:"\x1B[30m",RED:"\x1B[31m",GREEN:"\x1B[32m",YELLOW:"\x1B[33m",BLUE:"\x1B[34m",MAGENTA:"\x1B[35m",CYAN:"\x1B[36m",WHITE:"\x1B[37m"},BACKGROUND:{BLACK:"\x1B[40m",RED:"\x1B[41m",GREEN:"\x1B[42m",YELLOW:"\x1B[43m",BLUE:"\x1B[44m",MAGENTA:"\x1B[45m",CYAN:"\x1B[46m",WHITE:"\x1B[47m"}};function Au(e,o){return`${o}${e}${ar.RESET}`}function $h(e){Lu.default.reg(e),Lu.default.apply(e,{timestampFormatter:o=>o.toISOString(),levelFormatter:o=>o.toUpperCase(),nameFormatter:o=>o||"root",format:(o,n,r)=>[Au(`[${r}]`,ar.TEXT.BLACK),Au(o,{TRACE:ar.TEXT.BLACK,DEBUG:ar.TEXT.GREEN,INFO:ar.TEXT.MAGENTA,WARN:ar.TEXT.YELLOW,ERROR:ar.TEXT.RED}[o.toUpperCase()]??ar.TEXT.WHITE),Au(`(${n})`,ar.TEXT.CYAN)].join(" ")+":"})}var Wh=Fl||Hh?Vh.serverEnv.LOG_LEVEL:Fu.clientEnv.NEXT_PUBLIC_LOG_LEVEL==="__NEXT_PUBLIC_LOG_LEVEL__"?"info":Fu.clientEnv.NEXT_PUBLIC_LOG_LEVEL;Bt.default.setDefaultLevel(Wh);Bt.default.setLevel(Wh);$h(Bt.default);var Yh=t("@/services/apollo/links/automationLink");function St(e,o={onError:Bt.default.error}){if(!(0,qh.isError)(e))return o?.onUnknownError?.(e,o)??o.onError({name:"UnknownError",message:"Unknown error",cause:e});if((0,Kh.isApolloError)(e)){if(e.graphQLErrors.some(n=>(0,Yh.getAutomationPayload)(n)))return;for(let n of e.graphQLErrors){let r=n.extensions;switch(r.code){case"INTERNAL_SERVER_ERROR":case"BAD_USER_INPUT":default:{if(o?.onGraphQLExceptionError){let i=r.exception;return o.onGraphQLExceptionError({name:i?.name??r.code,message:i?.message??n.message,response:i?.response??{error:i?.name??r.code,statusCode:i?.status??500,message:[i?.message??n.message]}},o)}return o?.onGraphQLError?o.onGraphQLError(n,o):o?.onApolloError?o.onApolloError(e,o):o.onError(e)}}}}return o.onError(e)}var sr=t("react"),iy=t("next/router"),ay=t("next-i18next");var E0=t("next-i18next"),ny=t("@mantine/core"),ry=t("@mantine/modals");var Qh=t("react"),Xh=t("next-i18next"),Ml=t("@mantine/core");var Mu=(e,o)=>e instanceof Function?e(o):e;var Jh=t("react/jsx-runtime"),jh=(0,Qh.forwardRef)(({children:e,sx:o,...n},r)=>{let{t:i}=(0,Xh.useTranslation)();return(0,Jh.jsx)(Ml.Button,{ref:r,variant:"default",color:"gray.7",c:"gray.7",h:40,px:"xl",sx:a=>({borderColor:a.colors.gray[a.other.getSchemeColor(a.colorScheme,3)],...Mu(o,a)}),...n,children:e??i("cancel")})});jh.displayName="FormButtonCancel";var io=(0,Ml.createPolymorphicComponent)(jh);var Zh=t("react"),ey=t("next-i18next"),Dl=t("@mantine/core"),oy=t("react/jsx-runtime"),ty=(0,Zh.forwardRef)(({children:e,...o},n)=>{let{t:r}=(0,ey.useTranslation)();return(0,oy.jsx)(Dl.Button,{ref:n,"data-autofocus":!0,"data-testid":"form-confirm",color:"primary.6",h:40,px:"xl",...o,children:e??r("confirm")})});ty.displayName="FormButtonConfirm";var po=(0,Dl.createPolymorphicComponent)(ty);var k0=t("@mantine/core");var P0=t("react/jsx-runtime");var R0=t("react");var Bl=t("react/jsx-runtime"),A0="Confirm/Leave";function Nl({t:e,onSave:o,onLeave:n}){(0,ry.openContextModal)({modal:A0,title:e("confirm-leave-title"),innerProps:{children:(0,Bl.jsx)(ny.Text,{children:e("confirm-leave-body")}),onDiscard:r=>{r.closeModal(),n()},onSave:o?async r=>{r.setIsLoading(!0);let i=!1;try{i=await o()}catch(a){Bt.default.error(a)}finally{r.closeModal()}i&&n()}:void 0}})}function Ol(e,o={}){let n=(0,iy.useRouter)(),{t:r}=(0,ay.useTranslation)(),i=(0,sr.useRef)(!1),a=(0,sr.useRef)(o.onSave);a.current=o.onSave;let s=(0,sr.useCallback)(()=>{i.current=!0},[]);return(0,sr.useEffect)(()=>{function l(p){!e||i.current||p.preventDefault()}return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[e]),(0,sr.useEffect)(()=>{function l(p){if(!(!e||i.current))throw Nl({t:r,onSave:a.current,onLeave:()=>{i.current=!0,n.push(p)}}),n.events.emit("routeChangeError"),"routeChange aborted"}return n.events.on("routeChangeStart",l),()=>{n.events.off("routeChangeStart",l)}},[e,n,r]),(0,sr.useEffect)(()=>{e&&(i.current=!1)},[e]),{allowNavigation:s}}var Gl=t("@mantine/notifications"),zl=t("@fortawesome/free-solid-svg-icons"),Du=t("@fortawesome/react-fontawesome"),fy=t("lodash");var ut=Y(t("dayjs")),hU=t("dayjs/locale/en"),yU=t("dayjs/locale/nl"),sy=Y(t("dayjs/plugin/customParseFormat")),ly=Y(t("dayjs/plugin/duration")),cy=Y(t("dayjs/plugin/isToday")),dy=Y(t("dayjs/plugin/relativeTime")),py=Y(t("dayjs/plugin/timezone")),uy=Y(t("dayjs/plugin/updateLocale")),my=Y(t("dayjs/plugin/utc"));ut.default.extend(sy.default);ut.default.extend(ly.default);ut.default.extend(cy.default);ut.default.extend(dy.default,{thresholds:[{l:"s",r:1},{l:"ss",r:59,d:"second"},{l:"m",r:1},{l:"mm",r:59,d:"minute"},{l:"h",r:1},{l:"hh",r:23,d:"hour"},{l:"d",r:1},{l:"dd",d:"day"}]});ut.default.extend(py.default);ut.default.extend(uy.default);ut.default.extend(my.default);ut.default.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%ds",ss:"%ds",m:"%dm",mm:"%dm",h:"%dh",hh:"%dh",d:"%dd",dd:"%dd"}});var _u=t("react/jsx-runtime"),L0={loading:{loading:!0,autoClose:ut.default.duration({seconds:30}).as("milliseconds"),withCloseButton:!1},success:{icon:(0,_u.jsx)(Du.FontAwesomeIcon,{icon:zl.faCheck}),autoClose:ut.default.duration({seconds:5}).as("milliseconds"),color:"green",withCloseButton:!0},info:{autoClose:ut.default.duration({seconds:5}).as("milliseconds"),color:"gray",withCloseButton:!0},error:{icon:(0,_u.jsx)(Du.FontAwesomeIcon,{icon:zl.faXmark}),autoClose:ut.default.duration({seconds:10}).as("milliseconds"),color:"red",withCloseButton:!0}};function Ne({state:e,...o}){let n=o.id?Gl.updateNotification:Gl.showNotification;return o.id||(o.id=crypto.randomUUID()),n((0,fy.merge)({},L0[e],o)),o.id}var yy=t("@/lib/env/client");var gy=50*1024*1024;var F0=new RegExp("[^\\p{L}\\p{N}]+","gu"),M0=e=>e.normalize("NFKD").replace(/[̀-ͯ]/g,"").normalize("NFC").replace(F0,"-").replace(/^-|-$/g,"").toLowerCase(),hy=(e,o="slide")=>`${M0(e)||o}.pptx`;var by=e=>new URL(e,yy.clientEnv.NEXT_PUBLIC_API_URL).toString(),Nn=class extends Error{constructor(n,r){super(r??n);this.code=n;this.name="ImportError"}},D0=e=>e==="notPptx"||e==="noSlides"||e==="tooLarge"||e==="tooComplex";async function qi(e,o,n={}){if(e.size>gy)throw new Nn("tooLarge");let r=new FormData;r.append("file",e);let i=n.fixedSpots?"/deck-template/import?fixedSpots=true":"/deck-template/import",a=await fetch(by(i),{method:"POST",body:r,headers:{Authorization:`Bearer ${o}`}});if(!a.ok){if(a.status===413)throw new Nn("tooLarge");let s=await a.json().catch(()=>null);throw new Nn(D0(s?.message)?s.message:"failed",typeof s?.message=="string"?s.message:void 0)}return await a.json()}function _0(e,o){let n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=o,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(n),r.remove()}async function N0(e,o,n){let r=await fetch(by(e),{...o,headers:{...o.headers??{},Authorization:`Bearer ${n}`}});if(!r.ok){let i=await r.json().catch(()=>null);throw new Error(i?.message||`Download failed (status ${r.status}).`)}return await r.blob()}async function Sy(e,o){let n=await N0("/deck-template/slide-pptx",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},o);_0(n,hy(e.name))}var Hl=["TITLE","DESCRIPTION","IMAGE","CLIENTS","WORKHIGHLIGHTS","INDUSTRIES","PRACTICES","PUBLICATIONS","SPECIALISTS","TESTIMONIALS","FEATURED_INDUSTRY","FEATURED_PRACTICE","FEATURED_SPECIALIST"],Qa=Hl.filter(e=>e!=="FEATURED_SPECIALIST"),Fo={TITLE:{},DESCRIPTION:{},IMAGE:{image:!0},CLIENTS:{list:"clients"},WORKHIGHLIGHTS:{list:"matters"},INDUSTRIES:{list:"industries"},PRACTICES:{list:"practices"},PUBLICATIONS:{list:"publications"},SPECIALISTS:{list:"specialists"},TESTIMONIALS:{list:"testimonials"},FEATURED_INDUSTRY:{featured:"industries",list:"matters"},FEATURED_PRACTICE:{featured:"practices",list:"matters"},FEATURED_SPECIALIST:{featured:"specialists",list:"matters"}};var xy=["presentation_title","prospect_name","date","firm_name","slide_number","deadline","practices","industries","offices"];var B0=["DISC","DASH","ARROW","CHECK","SQUARE","CIRCLE"],wy={DISC:"\u2022",DASH:"\u2013",ARROW:"\u27A2",CHECK:"\u2713",SQUARE:"\u25AA",CIRCLE:"\u25CB"},O0=["DECIMAL","LOWER_ALPHA","UPPER_ALPHA","LOWER_ROMAN","UPPER_ROMAN"],Nu=e=>B0.includes(e),Wl=e=>O0.includes(e);function Bu(e,o){return e==="bullet"?Nu(o)&&o!=="DISC"?o:void 0:Wl(o)&&o!=="DECIMAL"?o:void 0}var G0=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],Cy=e=>{let o="";for(let[n,r]of G0)for(;e>=n;)o+=r,e-=n;return o},Ty=e=>{let o="";for(;e>0;)o=String.fromCharCode(97+(e-1)%26)+o,e=Math.floor((e-1)/26);return o};function Ou(e){if(e.list==="bullet")return wy[Nu(e.marker)?e.marker:"DISC"];if(e.list!=="number")return"";let o=Math.max(1,e.number??1);switch(e.marker){case"LOWER_ALPHA":return`${Ty(o)}.`;case"UPPER_ALPHA":return`${Ty(o).toUpperCase()}.`;case"LOWER_ROMAN":return`${Cy(o)}.`;case"UPPER_ROMAN":return`${Cy(o).toUpperCase()}.`;default:return`${o}.`}}function Gu(e,o,n,r){let i=0,a=Bu(o,n);return e.map((s,l)=>s.table||s.list||r&&!r[l]?(i=0,s):s.runs.some(p=>p.text.trim())?{...s,list:o,...o==="number"&&{number:++i},...a&&{marker:a}}:s)}var vy=e=>/^description_?\d*$/.test(e),tn=e=>!!e?.multiline&&/description/i.test(e.key),zu=e=>!!e&&(e.kind??"text")==="text",Ul=/^\s*[-•]\s+/,$l=/^\s*\d+[.)]\s+/,Vl=/^\s*\|/,z0=/^:?-{3,}:?$/,H0=new Set(["*","_","[","]","|","-","\\"]);function U0(e){let o=[],n="",r=e.trim().replace(/^\|/,"").replace(/(?<!\\)\|$/,"");for(let i=0;i<r.length;i++)r[i]==="\\"&&r[i+1]==="|"?(n+="\\|",i++):r[i]==="|"?(o.push(n.trim()),n=""):n+=r[i];return o.push(n.trim()),o}var Hu=e=>/\*\*|__|\*\S|\[[^\]]+\]\([^)\s]+\)|\\[*_[\]|\\-]/.test(e)||e.split(`
`).some(o=>Ul.test(o)||$l.test(o)||Vl.test(o)),$0=/^\[([^\]]+)\]\(([^)\s]+)\)/;function pi(e){let o=e.trim();if(/^(https?:\/\/|mailto:)/i.test(o))return o;if(/^www\./i.test(o))return`https://${o}`;if(/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(o))return`mailto:${o}`;if(/^[\w-]+(\.[\w-]+)*\.[a-z]{2,}(\/\S*)?$/i.test(o))return`https://${o}`}function Xa(e){let o=[],n={bold:!1,italic:!1,underline:!1},r="",i=()=>{r&&o.push({text:r,...n.bold&&{bold:!0},...n.italic&&{italic:!0},...n.underline&&{underline:!0}}),r=""};for(let a=0;a<e.length;a++){let s=e.slice(a,a+2),l=e[a]==="["?$0.exec(e.slice(a)):null;if(e[a]==="\\"&&H0.has(e[a+1]??""))r+=e[a+1],a++;else if(l){i();let p=pi(l[2]??"");for(let c of Xa(l[1]??""))o.push({...c,...(n.bold||c.bold)&&{bold:!0},...(n.italic||c.italic)&&{italic:!0},...(n.underline||c.underline)&&{underline:!0},...p&&{link:p}});a+=l[0].length-1}else s==="**"||s==="__"?(i(),s==="**"?n.bold=!n.bold:n.underline=!n.underline,a++):e[a]==="*"?(i(),n.italic=!n.italic):r+=e[a]}return i(),o}function Lr(e){let o=0,n=e.split(`
`),r=[];for(let i=0;i<n.length;i++){let a=n[i]??"";if(Vl.test(a)){let s=[];for(;i<n.length&&Vl.test(n[i]??"");)s.push(U0(n[i++]??""));i--;let l=s.length>1&&!!s[1]?.every(p=>z0.test(p));l&&s.splice(1,1),r.push({runs:[],table:{header:l,rows:s.map(p=>p.map(c=>Xa(c)))}}),o=0}else Ul.test(a)?(o=0,r.push({list:"bullet",runs:Xa(a.replace(Ul,""))})):$l.test(a)?r.push({list:"number",number:++o,runs:Xa(a.replace($l,""))}):(o=0,r.push({runs:Xa(a)}))}return r}function ja(e){return e.flatMap(o=>o.table?o.table.rows.map((n,r)=>({runs:n.flatMap((i,a)=>[...a?[{text:"  |  "}]:[],...i.map(s=>o.table.header&&r===0?{...s,bold:!0}:s)])})):[o])}function Yi(e){return ja(e).map(o=>(o.list?`${Ou(o)} `:"")+o.runs.map(n=>n.text).join("")).join(`
`)}function Qi(e){return Yi(Lr(e))}function V0(e){return e.replace(/\\/g,"\\\\").replace(/\*/g,"\\*").replace(/__/g,"\\_\\_").replace(/\[/g,"\\[")}function Iy(e){let o=[];for(let n of e){let r=o[o.length-1];r&&!!r.bold==!!n.bold&&!!r.italic==!!n.italic&&!!r.underline==!!n.underline?r.text+=n.text:o.push({...n})}return o.map(n=>{let[,r,i,a]=/^(\s*)([\s\S]*?)(\s*)$/.exec(n.text);if(!i)return n.text;let s=V0(i);return n.italic&&(s=`*${s}*`),n.bold&&(s=`**${s}**`),n.underline&&(s=`__${s}__`),r+s+a}).join("")}function ky(e){let o=[];for(let n of e){let r=o[o.length-1];r&&r.link===n.link?r.runs.push(n):o.push({link:n.link,runs:[n]})}return o.map(n=>{if(!n.link)return Iy(n.runs);let[,r="",i="",a=""]=/^(\s*)([\s\S]*?)(\s*)$/.exec(Iy(n.runs))??[];return i?`${r}[${i.replace(/[[\]]/g,"")}](${n.link.replace(/\)/g,"%29").replace(/\s/g,"%20")})${a}`:r+a}).join("")}function W0(e){let o=Math.max(1,...e.rows.map(i=>i.length)),n=i=>`| ${Array.from({length:o},(a,s)=>ky(i[s]??[]).trim().replace(/\|/g,"\\|")||" ").join(" | ")} |`,r=e.rows.map(n);return e.header&&r.splice(1,0,`| ${Array.from({length:o},()=>"---").join(" | ")} |`),r.join(`
`)}function Py(e){let o=0;return e.map(n=>{if(n.table)return o=0,W0(n.table);o=n.list==="number"?o+1:0;let r=n.list==="bullet"?"- ":n.list==="number"?`${o}. `:"",i=ky(n.runs),a=!n.list&&(Ul.test(i)||$l.test(i)||Vl.test(i))?i.replace(/^(\s*)/,"$1\\"):i;return r+a}).join(`
`)}function Ry(e){if(e.marker){if(e.list==="bullet"&&Nu(e.marker))return`'${wy[e.marker]} '`;if(e.list==="number"&&Wl(e.marker))return e.marker.toLowerCase().replace("_","-")}}var K0='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200"><rect width="900" height="1200" fill="#DDE2E9"/><circle cx="450" cy="470" r="200" fill="#AFB8C5"/><path d="M60 1200C60 930 230 760 450 760S840 930 840 1200Z" fill="#AFB8C5"/></svg>',Kl=`data:image/svg+xml,${encodeURIComponent(K0)}`;var Fr=["clients","matters","industries","practices","publications","specialists","testimonials"],on={clients:{prefix:"client",prefixAliases:["clients","clienttombstone","clienttombstones","tombstone","tombstones","klant","klanten","cli\xEBnt","cli\xEBnten","clienten","logo","logos"],title:"name",image:"logo",subtitle:["industry","country"],facets:["industry","country"],fields:[{name:"logo",kind:"image",sample:""},{name:"name",aliases:["naam"],sample:"Client"},{name:"country",aliases:["land"],sample:"Netherlands"},{name:"website",kind:"link",aliases:["url","web"],sample:"www.example.com"},{name:"industry",aliases:["sector"],sample:"Sector"},{name:"labels",kind:"list",sample:"Label"},{name:"description",aliases:["omschrijving","beschrijving"],sample:"Short description of the client"}]},matters:{prefix:"workhighlight",prefixAliases:["workhighlights","highlight","highlights","matter","matters","deal","deals","case","cases","zaak","zaken","credential","credentials"],title:"name",image:"logo",subtitle:["client","practice","year"],facets:["client","practice","industry","year"],legacy:{matter_number:"number",matter_title:"name",matter_client:"client",matter_practice_area:"practice",matter_year:"year"},fields:[{name:"logo",kind:"image",aliases:["client_logo","clientlogo","clients_logo","matter_clients_logo","matter_client_logo","klant_logo","klantlogo"],sample:""},{name:"name",aliases:["title","titel","naam"],sample:"Example matter"},{name:"content_commercialtitle",aliases:["commercialtitle","commercial_title","commerciele_titel","matter_content_commercialtitle"],sample:"Commercial title of the matter"},{name:"description",aliases:["omschrijving","beschrijving","text"],sample:"Short description of the work and the outcome"},{name:"number",aliases:["nummer","nr"],sample:"2024-001"},{name:"client",aliases:["klant","cli\xEBnt"],sample:"Client"},{name:"clients_name_csv",aliases:["matter_clients_name_csv","clients","clients_csv","cli\xEBnten","klanten"],sample:"Client, Client"},{name:"practice",aliases:["practice_area","area","rechtsgebied"],sample:"Practice"},{name:"industry",aliases:["sector"],sample:"Sector"},{name:"startdate",aliases:["start","start_date","date","datum","startdatum"],sample:"March 2024"},{name:"enddate",aliases:["end","end_date","einddatum"],sample:"June 2024"},{name:"year",aliases:["jaar"],sample:"2024"}]},industries:{prefix:"industry",prefixAliases:["industries","sector","sectors","sectoren","branche","branches"],title:"name",image:"image",subtitle:["description"],facets:[],fields:[{name:"image",kind:"image",aliases:["icon","logo","picture"],sample:""},{name:"name",aliases:["naam","title","titel"],sample:"Sector"},{name:"description",aliases:["omschrijving","beschrijving","text"],sample:"What we do for this industry"}]},practices:{prefix:"practice",prefixAliases:["practices","practicearea","praktijk","praktijkgebied","praktijkgroep","expertise"],title:"name",image:"image",subtitle:["description"],facets:[],fields:[{name:"image",kind:"image",aliases:["icon","logo","picture"],sample:""},{name:"name",aliases:["naam","title","titel"],sample:"Practice"},{name:"description",aliases:["omschrijving","beschrijving","text"],sample:"What this practice does"}]},publications:{prefix:"publication",prefixAliases:["publications","publicatie","publicaties","article","articles","artikel","artikelen"],title:"name",image:"image",subtitle:["author","date"],facets:["medium","author"],fields:[{name:"image",kind:"image",aliases:["picture","afbeelding"],sample:""},{name:"name",aliases:["title","titel","naam"],sample:"Title of the publication"},{name:"description",aliases:["omschrijving","samenvatting","summary","text","content"],sample:"Short summary of the publication"},{name:"author",aliases:["auteur","authors","auteurs","authors_name_csv","specialists_csv"],sample:"Author"},{name:"date",aliases:["datum","year","jaar"],sample:"May 2024"},{name:"medium",aliases:["source","bron","journal","tijdschrift","publishers_name_csv","publisher"],sample:"Journal"},{name:"url",kind:"link",aliases:["link","website","urls_name_csv"],sample:"www.example.com/article"}]},specialists:{prefix:"specialist",prefixAliases:["specialists","leadspecialist","leadspecialists","supportingspecialist","supportingspecialists","lawyer","lawyers","advocaat","advocaten","expert","experts","teamlid","team","member","members"],title:"name",image:"photo",subtitle:["function","practice"],facets:["practice","location"],fields:[{name:"photo",kind:"image",aliases:["foto","image","picture","logo"],sample:""},{name:"name",aliases:["naam"],sample:"Specialist name"},{name:"givenname",aliases:["given_name","firstname","first_name","voornaam"],sample:"First name"},{name:"familyname",aliases:["family_name","lastname","last_name","surname","achternaam"],sample:"Last name"},{name:"function",aliases:["title","titel","functie","role","rol","position"],sample:"Partner"},{name:"description",aliases:["omschrijving","summary","samenvatting"],sample:"Short introduction"},{name:"bio",aliases:["biography","biografie","cv"],sample:"Full biography of the specialist"},{name:"email",aliases:["mail","e_mail"],sample:"name@firm.com"},{name:"phone",aliases:["phonenumber","phone_number","telefoon","telefoonnummer","tel","telephone","mobile","mobiel"],sample:"+31 20 123 45 67"},{name:"practice",aliases:["practice_area","praktijk","expertise","rechtsgebied"],sample:"Practice"},{name:"practices_name_csv",aliases:["practices","practices_csv","praktijkgroepen"],sample:"Practice, Practice"},{name:"location",aliases:["locatie","office","kantoor","city","stad"],sample:"Amsterdam"},{name:"education",aliases:["educations","opleiding","opleidingen","studies"],sample:"LL.M., University of Leuven"},{name:"memberships",aliases:["membership","lidmaatschap","lidmaatschappen","affiliations"],sample:"Brussels Bar"},{name:"linkedin",kind:"link",sample:"linkedin.com/in/name"},{name:"practice_name",sample:"Practice"},{name:"practice_description",sample:"About the practice"},{name:"industry_name",aliases:["sector_name"],sample:"Sector"},{name:"industry_description",sample:"About the sector"},{name:"testimonial",aliases:["testimonial_quote"],sample:"\u201CA quote from a client about the specialist.\u201D"},{name:"testimonial_name",sample:"Name"},{name:"testimonial_role",sample:"General Counsel"},{name:"testimonial_organisation",aliases:["testimonial_organization"],sample:"Organisation"},{name:"testimonial_directory",sample:"Legal 500"},{name:"testimonial_year",sample:"2024"},{name:"testimonial_2",aliases:["testimonial_2_quote"],sample:"\u201CA second quote about the specialist.\u201D"},{name:"testimonial_2_name",sample:"Name"},{name:"testimonial_2_role",sample:"General Counsel"},{name:"testimonial_2_organisation",aliases:["testimonial_2_organization"],sample:"Organisation"},{name:"testimonial_2_directory",sample:"Chambers"},{name:"testimonial_2_year",sample:"2025"},{name:"publication_name",aliases:["publication_title"],sample:"Title of the publication"},{name:"publication_description",sample:"About the publication"},{name:"publication_author",sample:"Author"},{name:"publication_date",sample:"May 2024"},{name:"publication_medium",sample:"Journal"}]},testimonials:{prefix:"testimonial",prefixAliases:["testimonials","quote","quotes","citaat","citaten","review","reviews","aanbeveling"],title:"name",subtitle:["directory","year"],facets:["directory","year"],fields:[{name:"description",aliases:["quote","citaat","text","tekst","omschrijving"],sample:"\u201CA quote from a client about the firm.\u201D"},{name:"name",aliases:["author","auteur","naam","by"],sample:"Name"},{name:"role",aliases:["function","functie","title","titel"],sample:"General Counsel"},{name:"organisation",aliases:["organization","organisatie","company","bedrijf"],sample:"Organisation"},{name:"directory",aliases:["source","bron","guide","ranking","gids"],sample:"Legal 500"},{name:"year",aliases:["jaar","date","datum"],sample:"2024"}]}},Xi=Object.fromEntries(Fr.map(e=>{let o=on[e];return[e,{...o,key:e,itemFields:o.fields.map(n=>({key:`${o.prefix}_${n.name}`,field:n.name,kind:n.kind??"text"}))}]})),Mr=Object.fromEntries(Fr.map(e=>[e,Xi[e].itemFields])),LU=Object.fromEntries(Fr.map(e=>[e,Mr[e].map(o=>o.key)]));var q0=Fr.flatMap(e=>[Xi[e].prefix,...Xi[e].prefixAliases].map(o=>[o,e])).sort((e,o)=>o[0].length-e[0].length);function Y0(e,o){let n=on[e],r=i=>n.fields.find(a=>a.name===i||a.aliases?.includes(i))?.name??null;return r(o)??r(o.replace(/_enter$/,"_csv"))??r(o.replace(/_name$/,""))}function Yt(e){let o=e.toLowerCase();for(let n of Fr){let r=on[n].legacy?.[o];if(r)return{source:n,field:r,key:`${on[n].prefix}_${r}`}}for(let[n,r]of q0){if(!o.startsWith(n))continue;let i=/^_?(?:(\d+)_)?(\w+)$/.exec(o.slice(n.length));if(!i||o[n.length]!=="_"&&!i[1])continue;let a=Y0(r,i[2]??"");if(!a)continue;let s=i[1]?Number(i[1]):void 0;if(s!==0)return{source:r,field:a,key:`${on[r].prefix}_${a}`,n:s}}return null}var lr=(e,o)=>{let n=Yt(o);return n&&n.source===e?Mr[e].find(r=>r.field===n.field):void 0},cr=e=>{let o=on[e].image;return o?`${on[e].prefix}_${o}`:null},Ja=(e,o,n)=>`${on[e].prefix}_${n}_${o}`,ji=e=>e.trim().replace(/^https?:\/\//i,"").replace(/^www\./i,"").replace(/\/$/,""),Uu=e=>/^https?:\/\//i.test(e)?e:`https://${e}`,Ey=(e,o)=>o.values[on[e].title]??"",Q0={clients:["description"],matters:["description"],industries:["description"],practices:["description"],publications:["description"],specialists:["bio","practice_description","industry_description","testimonial","testimonial_2","publication_description"],testimonials:["description"]},Ay=["practice","industry","testimonial","testimonial2","publication"],Ly={practice:"practices",industry:"industries",testimonial:"testimonials",testimonial2:"testimonials",publication:"publications"},$u={practice:"practice",industry:"industry",testimonial:"testimonial",testimonial2:"testimonial_2",publication:"publication"};function Fy(e,o){let n=r=>o?.values[r]??"";if(e==="publication")return{publication_name:n("name"),publication_description:n("description"),publication_author:n("author"),publication_date:n("date"),publication_medium:n("medium")};if(e==="testimonial"||e==="testimonial2"){let r=$u[e];return{[r]:n("description"),[`${r}_name`]:n("name"),[`${r}_role`]:n("role"),[`${r}_organisation`]:n("organisation"),[`${r}_directory`]:n("directory"),[`${r}_year`]:n("year")}}return{[`${e}_name`]:n("name"),[`${e}_description`]:n("description")}}var Vu=(e,o)=>!!Q0[e]?.includes(o);function ui(e,o){let n=on[e],r=a=>{let s=o.values[a]??"";return Vu(e,a)?Qi(s):s},i={};for(let a of n.fields)i[`${n.prefix}_${a.name}`]=a.kind==="image"?"":r(a.name);for(let[a,s]of Object.entries(n.legacy??{}))i[a]=r(s);return i}function My(e,o,n){let r={};for(let[i,a]of Object.entries(ui(e,o))){let s=Yt(i);s&&(r[Ja(e,s.field,n)]=a)}return r}function Wu(e,o){let n=on[e],r={};for(let i of n.fields)r[`${n.prefix}_${i.name}`]=`{${Ja(e,i.name,o)}}`;for(let[i,a]of Object.entries(n.legacy??{}))r[i]=`{${Ja(e,a,o)}}`;return r}function Dr(e,o,n){let r=on[e];return Array.from({length:o},(i,a)=>({id:`${e}-${a}`,color:"B6BFCC",...e==="specialists"&&{imageUrl:Kl},values:Object.fromEntries(r.fields.filter(s=>s.kind!=="image").map(s=>[s.name,n?`{${r.prefix}_${s.name}}`:s.name===r.title&&o>1?`${s.sample} ${a+1}`:s.sample]))}))}var Ku=["16:9","4:3","16:9-portrait","4:3-portrait"],_y={"16:9":{w:13.333,h:7.5},"4:3":{w:10,h:7.5},"16:9-portrait":{w:7.5,h:13.333},"4:3-portrait":{w:7.5,h:10}},X0="16:9",nn=e=>e?.format&&Ku.includes(e.format)?e.format:X0,dr=e=>_y[nn(e)],_r=e=>`format.${e.replace(":","x")}`;var Mt=e=>Math.round(e*1e3)/1e3,Dy=e=>Math.round(e*10)/10;function ql(e,o,n){let r=n.w/o.w,i=n.h/o.h;if(Math.abs(r-1)<1e-6&&Math.abs(i-1)<1e-6)return e;let a=Math.sqrt(r*i),s=Math.min(r,i),l=(d,y)=>{let v=Math.round(((y??0)%180+180)%180)===90,[h,F]=v?[i,r]:[r,i],P=d.w*h,m=d.h*F;return{...d,x:Mt((d.x+d.w/2)*r-P/2),y:Mt((d.y+d.h/2)*i-m/2),w:Mt(P),h:Mt(m)}},p=(d,y=s)=>{let v=d.w*y,h=d.h*y;return{...d,x:Mt((d.x+d.w/2)*r-v/2),y:Mt((d.y+d.h/2)*i-h/2),w:Mt(v),h:Mt(h)}},c=(d,y)=>d&&{...d,...d.fontSize?{fontSize:Dy(d.fontSize*y)}:{},...d.letterSpacing?{letterSpacing:Dy(d.letterSpacing*y)}:{}},u=(d,y)=>{let v={...d,x:Mt(d.x*y),y:Mt(d.y*y),h:Mt(d.h*y),...d.w!==void 0?{w:Mt(d.w*y)}:{}};return d.kind==="shape"?{...v,...d.radius?{radius:Mt(d.radius*y)}:{}}:{...v,style:c(d.style,y)}},C=d=>d.w>=o.w*.9&&d.h>=o.h*.9,g=e.elements.map(d=>{switch(d.kind){case"text":return{...l(d,d.rotate),style:c(d.style,a)};case"shape":return{...l(d,d.rotate),...d.radius?{radius:Mt(d.radius*s)}:{}};case"image":return C(d)?{...l(d,d.rotate),fit:d.fit==="contain"?"contain":"cover"}:!d.field&&(d.fit??"fill")==="fill"?p(d):l(d,d.rotate);case"table":return{...l(d,d.rotate),header:d.header&&{...d.header,text:c(d.header.text,a)},body:d.body&&{...d.body,text:c(d.body.text,a)},...d.columnStyles?{columnStyles:d.columnStyles.map(y=>y&&{...y,text:c(y.text,a)})}:{},...d.rowHeight?{rowHeight:Mt(d.rowHeight*i)}:{},...d.padding?{padding:Mt(d.padding*s)}:{}};case"repeat":{let y=d.slots?.map(h=>({...p(h),items:h.items.map(F=>u(F,s))})),v=y?.length?(()=>{let h=Math.min(...y.map(P=>P.x)),F=Math.min(...y.map(P=>P.y));return{x:h,y:F,w:Mt(Math.max(...y.map(P=>P.x+P.w))-h),h:Mt(Math.max(...y.map(P=>P.y+P.h))-F)}})():l(d);return{...d,...v,rowHeight:Mt(d.rowHeight*s),...d.gapX!==void 0?{gapX:Mt(d.gapX*s)}:{},...d.gapY!==void 0?{gapY:Mt(d.gapY*s)}:{},item:d.item.map(h=>u(h,s)),...d.grid?{grid:{...d.grid,gap:Mt(d.grid.gap*s),maxCardHeight:Mt(d.grid.maxCardHeight*a)}}:{},...y?{slots:y}:{}}}}});return{...e,elements:g}}var xn=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)&&e.type==="doc";function j0(e,o){let n={...o};for(let r of e??[])if(r.type==="bold"||r.type==="strong")n.bold=!0;else if(r.type==="italic"||r.type==="em")n.italic=!0;else if(r.type==="underline")n.underline=!0;else if(r.type==="link"){let i=pi(typeof r.attrs?.href=="string"?r.attrs.href:"");i&&(n.link=i)}return n}function Ny(e,o){let n=[[]],r=(i,a)=>{if(i.type==="text"){i.text&&n[n.length-1]?.push({text:i.text,...j0(i.marks,a)});return}if(i.type==="hardBreak"){n.push([]);return}for(let s of i.content??[])r(s,a)};for(let i of e.content??[])r(i,o);return n}function J0(e){let o=[];return(e.content??[]).forEach((r,i)=>{Ny(r.type==="text"?{type:"paragraph",content:[r]}:r,r.type==="heading"?{bold:!0}:{}).forEach((s,l)=>{(i>0||l>0)&&o.length&&s.length&&o.push({text:" "}),o.push(...s)})}),o}function Z0(e){let o=(e.content??[]).filter(i=>i.type==="tableRow"),n=o[0]?.content??[];return{header:e.attrs?.headerRow===!0||n.length>0&&n.every(i=>i.type==="tableHeader"),rows:o.map(i=>(i.content??[]).map(J0))}}var eA=e=>!e.table&&!e.list&&e.runs.every(o=>!o.text.trim());function Za(e){let o=[],n=0,r,i=(s,l)=>({list:s,...s==="number"&&{number:++n},...r&&{marker:r},runs:l}),a=(s,l,p={})=>{switch(s.type){case"paragraph":case"codeBlock":{Ny(s,p).forEach((c,u)=>{l&&u===0?o.push(i(l,c)):o.push({runs:c})});return}case"heading":a({...s,type:"paragraph"},l,{...p,bold:!0});return;case"bulletList":case"orderedList":{let c=s.type==="bulletList"?"bullet":"number",u=n,C=r;n=c==="number"?Math.max(0,Number(s.attrs?.start??1)-1):0,r=Bu(c,c==="bullet"?s.attrs?.bulletStyle:s.attrs?.numberStyle);for(let g of s.content??[]){let d=!0;for(let y of g.content??[]){if(y.type==="bulletList"||y.type==="orderedList"){let v=n,h=r;a(y,void 0,p),n=v,r=h;continue}a(y,d?c:void 0,p),d=!1}d&&o.push(i(c,[]))}n=u,r=C;return}case"blockquote":for(let c of s.content??[])a(c,void 0,p);return;case"table":o.push({runs:[],table:Z0(s)});return;case"horizontalRule":case"image":return;default:for(let c of s.content??[])a(c,l,p)}};for(let s of e?.content??[])a(s);for(;o.length;){let s=o[o.length-1];if(!s||!eA(s))break;o.pop()}return o}function tA(e){let o=[];return e.bold&&o.push({type:"bold"}),e.italic&&o.push({type:"italic"}),e.underline&&o.push({type:"underline"}),e.link&&o.push({type:"link",attrs:{href:e.link}}),{type:"text",text:e.text,...o.length?{marks:o}:{}}}var qu=e=>{let o=e.filter(n=>n.text).map(tA);return{type:"paragraph",...o.length?{content:o}:{}}};function oA(e){return{type:"table",content:e.rows.map((o,n)=>({type:"tableRow",content:o.map(r=>({type:e.header&&n===0?"tableHeader":"tableCell",content:[qu(r)]}))}))}}function By(e){let o=[],n=null,r;for(let i of e){if(i.table){n=null,o.push(oA(i.table));continue}if(i.list){let a=i.list==="bullet"?"bulletList":"orderedList";if(!n||n.type!==a||r!==i.marker){let s={...a==="orderedList"&&(i.number??1)!==1&&{start:i.number},...i.marker&&(a==="bulletList"?{bulletStyle:i.marker}:{numberStyle:i.marker})};n={type:a,...Object.keys(s).length?{attrs:s}:{},content:[]},r=i.marker,o.push(n)}n.content.push({type:"listItem",content:[qu(i.runs)]});continue}n=null,o.push(qu(i.runs))}return{type:"doc",content:o}}function mi(e){return e==null?"":typeof e=="string"?e:Py(Za(e))}function Yu(e){return e==null?[]:typeof e=="string"?Lr(e):Za(e)}var nA=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584],Oy={"\u2018":222,"\u2019":222,"\u201C":333,"\u201D":333,"\u2013":556,"\u2014":1e3,"\u2022":350,"\u2026":1e3,"\u20AC":556,"\xA3":556,"\xB0":400,"\xB7":278,"\xD7":584,"\xA0":278},rA=[[/arial black/,1.22],[/verdana/,1.13],[/montserrat|poppins/,1.12],[/century gothic/,1.1],[/libre baskerville|merriweather/,1.08],[/work sans|raleway|inter|manrope/,1.05],[/open sans|noto sans/,1.04],[/segoe|aptos|tahoma|roboto|nunito|ibm plex|dm sans|mulish/,.98],[/lato|trebuchet|fira sans|josefin|constantia/,.95],[/cambria|book antiqua|palatino|lora|franklin gothic/,.93],[/candara|corbel|bahnschrift|barlow|source sans/,.9],[/calibri|gill sans|times|crimson/,.88],[/garamond/,.85],[/oswald/,.78]],iA=/consolas|courier|mono/;function aA(e){let o=e.toLowerCase(),n=rA.find(([r])=>r.test(o))?.[1]??1;return/narrow|condensed|\bcond\b|compressed/.test(o)&&(n*=.82),/black|heavy|extra ?bold/.test(o)&&!/arial black/.test(o)&&(n*=1.08),n}function sA(e){let o=e.charCodeAt(0);return o>=32&&o<=126?nA[o-32]??556:Oy[e]!==void 0?Oy[e]:/[\u3000-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(e)?1e3:556}function es(e,o){let n=Array.from(e.normalize("NFD").replace(/[̀-ͯ]/g,"")),r=o.fontFace.toLowerCase();return(iA.test(r)?n.length*600:n.reduce((a,s)=>a+sA(s),0)*aA(o.fontFace)*(o.bold?1.06:1))/1e3*o.fontSize+(o.letterSpacing??0)*n.length}function lA(e,o,n){if(o<=0)return 1;let r=es(" ",n),i=1,a=0;for(let s of e.split(" ")){let l=es(s,n);if(a>0&&a+r+l<=o){a+=r+l;continue}a>0&&i++;let p=Math.max(0,Math.ceil(l/o)-1);i+=p,a=l-p*o}return i}function Yl(e,o,n){return e.split(`
`).reduce((r,i)=>r+lA(i,o*72,n),0)}function ts(e,o,n,r){return(o?o.reduce((a,s)=>{let l=s.runs.map(u=>u.text).join(""),p=r.bold||s.runs.length>0&&s.runs.every(u=>u.bold),c=n-(s.list?1.3*r.fontSize/72:0);return a+Yl(l,c,{...r,bold:p})},0):Yl(e,n,r))*r.fontSize*r.lineSpacing/72}var Qu=e=>Math.round(e*10)/10,Xu=e=>Math.round(e*1e3)/1e3;function ju(e,o,n,r,i){if(i==="none"||!e.trim())return{box:n,style:r};let a=p=>ts(e,o,n.w,p);if(i==="grow"){let p=cA(e,o,n,r),c=ts(e,o,p.w,r);return c>p.h?{box:{...p,h:Xu(c)},style:r}:{box:p,style:r}}if(a(r)<=n.h)return{box:n,style:r};let s=Math.min(r.fontSize,Math.max(6,r.fontSize*.25)),l=r;for(let p=r.fontSize*.95;p>s;p*=.95)if(l=Gy(r,Qu(p)),a(l)<=n.h)return{box:n,style:l};return{box:n,style:Gy(r,Qu(s))}}function Gy(e,o){let n=o/e.fontSize;return{...e,fontSize:o,...e.letterSpacing?{letterSpacing:Qu(e.letterSpacing*n)}:{}}}function cA(e,o,n,r){let i=(o?o.flatMap(c=>c.runs.map(u=>u.text)).join(" "):e).split(/\s+/),a=Math.max(0,...i.map(c=>es(c,r)))/72;if(a<=n.w)return n;let s=Xu(a),l=s-n.w,p=r.align==="right"?n.x-l:r.align==="center"?n.x-l/2:n.x;return{...n,x:Xu(p),w:s}}var zy=e=>typeof e=="number"&&e>1?Math.min(Math.floor(e),50):1;function dA(e){let o=n=>n.type==="text"?n.text??"":n.type==="hardBreak"?`
`:(n.content??[]).map(o).join("");return(e.content??[]).map(o).join(`
`).replace(/\xa0/g," ")}function os(e){if(!xn(e))return{rows:[]};let o=r=>r.type==="table"?r:(r.content??[]).map(o).find(Boolean),n=o(e);return n?{rows:(n.content??[]).filter(r=>r.type==="tableRow").map(r=>(r.content??[]).map(i=>{let a=zy(i.attrs?.colspan),s=zy(i.attrs?.rowspan);return{text:dA(i),...a>1?{colSpan:a}:{},...s>1?{rowSpan:s}:{}}}))}:{rows:[]}}function Hy(e){return{type:"doc",content:[{type:"table",content:e.rows.map(o=>({type:"tableRow",content:o.map(n=>({type:"tableCell",attrs:{colspan:n.colSpan??1,rowspan:n.rowSpan??1},content:n.text.split(`
`).map(r=>({type:"paragraph",...r?{content:[{type:"text",text:r}]}:{}}))}))}))}]}}var fi=e=>Math.max(0,...e.rows.map(o=>o.reduce((n,r)=>n+(r.colSpan??1),0)));function gi(e){let o=new Set,n=[];return e.rows.forEach((r,i)=>{let a=0;r.forEach((s,l)=>{for(;o.has(`${i}:${a}`);)a++;n.push({row:i,col:a,cell:s,ri:i,ci:l});for(let p=0;p<(s.rowSpan??1);p++)for(let c=0;c<(s.colSpan??1);c++)o.add(`${i+p}:${a+c}`);a+=s.colSpan??1})}),n}function Ju(e,o){let n=Math.max(1,fi(e)),r=e.rows.map(i=>[...i]);return r.splice(o+1,0,Array.from({length:n},()=>({text:""}))),{rows:r}}function Uy(e,o){let n=gi(e),r=e.rows.map(a=>a.map(s=>({...s})));for(let a of n){let s=a.cell.rowSpan??1;if(a.row<o&&a.row+s>o){let l=r[a.ri][a.ci];l.rowSpan=s-1>1?s-1:void 0}}let i=r[o+1];for(let a of n.filter(s=>s.row===o&&(s.cell.rowSpan??1)>1)){if(!i)continue;let s=n.filter(l=>l.row===o+1&&l.col<a.col).length;i.splice(s,0,{...a.cell,rowSpan:(a.cell.rowSpan??1)-1>1?(a.cell.rowSpan??1)-1:void 0})}return r.splice(o,1),{rows:r.map(a=>a.map(em))}}function Zu(e,o){let n=gi(e),r=e.rows.map(a=>a.map(s=>({...s}))),i=new Set;for(let a of n){let s=a.cell.colSpan??1;if(a.col<=o&&a.col+s-1>o){r[a.ri][a.ci].colSpan=s+1;for(let l=0;l<(a.cell.rowSpan??1);l++)i.add(a.row+l)}}return e.rows.forEach((a,s)=>{if(i.has(s))return;let l=n.filter(p=>p.row===s&&p.col+(p.cell.colSpan??1)-1<=o).length;r[s].splice(l,0,{text:""})}),{rows:r.map(a=>a.map(em))}}function $y(e,o){let n=gi(e),r=e.rows.map(a=>a.map(s=>({...s}))),i=new Set;for(let a of n){let s=a.cell.colSpan??1;a.col<=o&&a.col+s>o&&(s>1?r[a.ri][a.ci].colSpan=s-1:i.add(`${a.ri}:${a.ci}`))}return{rows:r.map((a,s)=>a.filter((l,p)=>!i.has(`${s}:${p}`))).map(a=>a.map(em))}}var em=e=>({text:e.text,...(e.colSpan??1)>1?{colSpan:e.colSpan}:{},...(e.rowSpan??1)>1?{rowSpan:e.rowSpan}:{}});var Ky=/\{(\w+)\}/g;function Bo(e){return Array.from(e.matchAll(Ky),o=>o[1]??"")}function qy(e,o,n,r,i,a){let s=a?.list??i?.list,l=s==="bullet"||s==="number"?s:void 0,p=a?.bold===void 0?i?.boldLines:void 0;if(!r.trim()||!l&&!p?.length)return;if(!l)return n?void 0:e.split(`
`).flatMap((y,v)=>o(y).split(`
`).map(h=>({runs:[{text:h,...p?.includes(v)&&{bold:!0}}]})));let c=a?.listMarker??i?.listMarker,u=a?.list?a.listLines:i?.listLines,C=e.split(`
`);if(n)return u&&C.length===1&&!u.includes(0)?void 0:Gu(n,l,c);let g=[],d=[];return C.forEach((y,v)=>{let h=p?.includes(v);for(let F of o(y).split(`
`))g.push({runs:[{text:F,...h&&{bold:!0}}]}),d.push(!u||u.includes(v))}),Gu(g,l,c,d)}function rn(e,o,n=!1){return e.replace(Ky,(r,i)=>{let a=o[i];return a===void 0?n?r:"":a})}function Bn(e){if(e.slots)return e.slots.length;if(e.card&&e.grid)return e.grid.maxItems;let o=e.gapY??0;return Math.max(1,Math.floor((e.h+o+1e-6)/(e.rowHeight+o)))*e.columns}var an=e=>e.elements.filter(o=>o.kind==="repeat");function To(e,o){let n=an(e).find(r=>!o||r.source===o);return n?Bn(n):null}var rs=5;var yi=["SPECIALISTS","WORKHIGHLIGHTS","CLIENTS","TESTIMONIALS"];function bi(e){let o=new Set(an(e).map(r=>r.source)),n=new Set;for(let r of e.elements){let i=r.kind==="text"?Bo(r.text):r.kind==="image"&&r.field?[r.field]:[];for(let a of i){let s=Yt(a);s&&!o.has(s.source)&&n.add(s.source)}}return Array.from(n)}function pA(e){let o=e.replace(/^((mr|dr|drs|ir|prof|mrs|ms)\.?\s+)+/i,"").replace(/\b(B\.?V\.?|N\.?V\.?|Holding|Group|Groep)(?=\s|$)/gi,"").split(/[\s&-]+/).map(n=>n.replace(/[^\p{L}\p{N}]/gu,"")).filter(Boolean);return(o.length>1?(o[0]?.[0]??"")+(o[o.length-1]?.[0]??""):(o[0]??"?").slice(0,2)).toUpperCase()}var om=(e,o)=>e?.values.badge??pA(o);function qo(e,o,n="000000"){return e?e.startsWith("$")?o.colors[e.slice(1)]??n:e.replace("#",""):n}function uA(e,o){return!e||e==="$body"?o.fonts.body:e==="$heading"?o.fonts.heading:e}function Nr(e,o){return{fontFace:uA(e?.fontFace,o),fontSize:e?.fontSize??18,color:qo(e?.color??"$text",o),bold:!!e?.bold,italic:!!e?.italic,underline:!!e?.underline,uppercase:!!e?.uppercase,align:e?.align??"left",valign:e?.valign??"top",lineSpacing:e?.lineSpacing??1.15,letterSpacing:e?.letterSpacing??0}}function mA(e,o){return e.some(r=>r.key==="date")?e:o.elements.some(r=>r.kind==="text"&&r.text.includes("{date}"))?[...e,{key:"date",defaultValue:"{date}",maxLength:60}]:e}function nm(e,o){return{presentation_title:e.presentationTitle??"",prospect_name:e.prospectName,date:e.date,firm_name:o.firmName,slide_number:e.slideNumber?String(e.slideNumber):"",deadline:e.deadline??"",practices:e.practices??"",industries:e.industries??"",offices:e.offices??""}}function is(e,o){return mi(Object.prototype.hasOwnProperty.call(o,e.key)?o[e.key]:e.defaultValue??"")}function ns(e,o){let n=Object.prototype.hasOwnProperty.call(o,e.key)?o[e.key]:e.defaultValue??"";return tn(e)||n==null||typeof n=="string"?mi(n):Yi(Za(n))}var fA=(e,o)=>e.map(n=>({...n,runs:n.runs.map(r=>({...r,text:rn(r.text,o,!0)}))}));var hi=e=>e?{rotate:e}:{};function Br(e,o,n,r={}){let i={...e,fields:mA(e.fields,e.layout)},a=r.showPlaceholders?Object.fromEntries(xy.map(m=>[m,`{${m}}`])):nm(n,o),s=new Set(i.fields.map(m=>m.key)),l=i.items??{},p=new Set(an(i.layout).map(m=>m.source)),c={};!r.showPlaceholders&&!p.has("specialists")&&!l.specialists?.length&&(n.specialists??[]).forEach((m,N)=>{N===0&&Object.assign(c,ui("specialists",m)),Object.assign(c,My("specialists",m,N+1))});let u=m=>{let N={};for(let E of Bo(m)){let I=Yt(E),D=I&&(I.n?Ja(I.source,I.field,I.n):I.key);D&&D in c&&(N[E]=c[D])}return N},C={...a,...c},g={...C};for(let m of Fr){let N=l[m]?.[0];!p.has(m)&&N&&Object.assign(g,ui(m,N))}let d=new Set;for(let m of i.fields){let N=Object.prototype.hasOwnProperty.call(i.values,m.key)?i.values[m.key]:m.defaultValue;if(!r.showPlaceholders&&!tn(m)&&zu(m)&&xn(N)){d.add(m.key);let E=mi(N);g[m.key]=rn(E,{...C,...u(E)},!0);continue}g[m.key]=r.showPlaceholders?`{${m.key}}`:rn(ns(m,i.values),{...C,...u(ns(m,i.values))},!0)}let y=[],v=m=>m.kind==="text"?Bo(m.text):m.kind==="image"&&m.field?[m.field]:[],h=new Map,F=[],P=new Map;for(let m of i.layout.elements){let N=y.length;if(r.editing)for(let E of v(m)){let I=Yt(E);I&&I.n===void 0&&!p.has(I.source)&&!h.has(I.source)&&h.set(I.source,y.length)}if(m.kind==="table"){let E=i.fields.find(D=>D.key===m.field),I=Object.prototype.hasOwnProperty.call(i.values,m.field)?i.values[m.field]:E?.defaultValue;y.push(...gA(m,os(I),o,r.showPlaceholders?{}:a))}else if(m.kind==="shape")y.push({kind:"shape",box:m,...hi(m.rotate),fill:qo(m.fill,o),radius:m.radius??0,...m.round&&{round:!0}});else if(m.kind==="image"&&m.field&&Yt(m.field)){let E=Yt(m.field),I=l[E.source]?.[0];I?.imageUrl&&!r.showPlaceholders?y.push({kind:"image",box:m,...hi(m.rotate),src:I.imageUrl,fit:m.fit??"cover",...m.round&&{round:!0}}):!I&&r.editing&&!r.showPlaceholders?y.push({kind:"image",box:m,...hi(m.rotate),src:"",fit:"cover",itemSource:E.source,...m.round&&{round:!0}}):(I||r.showPlaceholders)&&y.push({kind:"logo",box:m,...m.round&&{round:!0},...rm(E.source,I,r),style:Nr({fontFace:"$heading",color:"FFFFFF",bold:!0,align:"center",valign:"middle",fontSize:Math.max(8,Math.min(m.w,m.h)*72*.3)},o),placeholder:r.showPlaceholders?`{${E.key}}`:void 0})}else if(m.kind==="image"){let E=m.field?i.fields.find(x=>x.key===m.field):void 0,I=m.field&&(E?is(E,i.values):"")||m.src,D=m.field&&!r.showPlaceholders?pi(i.styles?.[m.field]?.href??""):void 0;y.push({kind:"image",box:m,...hi(m.rotate),src:r.showPlaceholders&&m.field?m.src:I,fit:m.fit??(m.field?"cover":"fill"),fieldKey:m.field,...m.round&&{round:!0},...D&&{href:D}})}else if(m.kind==="text"){let E=Bo(m.text),I=u(m.text),D={};for(let B of E){let ee=Yt(B),Ve=ee?g[ee.key]:void 0;ee&&ee.n===void 0&&!p.has(ee.source)&&l[ee.source]?.[0]&&Ve!==void 0&&(D[B]=Ve)}let x=E.filter(B=>s.has(B)&&!(B in D)),G=E.map(Yt).find(B=>B&&!p.has(B.source)),M=E.some(B=>{let ee=Yt(B);return ee&&!s.has(B)&&!(B in I)&&(ee.n!==void 0||p.has(ee.source)||!l[ee.source]?.[0])}),A=r.editing&&!!G&&!l[G.source]?.[0]&&E.every(B=>{let ee=Yt(B);return!ee||s.has(B)||ee.n===void 0&&!p.has(ee.source)});if(M&&!r.showPlaceholders&&!A||x.some(B=>i.styles?.[B]?.hidden))continue;let L=x[0],q=L?i.styles?.[L]:void 0,X=Nr({...m.style,...q},o),Se=r.showPlaceholders?{...g,...Object.fromEntries(E.filter(B=>Yt(B)).map(B=>[B,`{${B}}`]))}:{...g,...I,...D},ke=rn(m.text,Se),Re=!r.showPlaceholders&&x.some(B=>d.has(B)||tn(i.fields.find(ee=>ee.key===B))),oe=E.length===1&&m.text.trim()===`{${E[0]}}`?E[0]:void 0,Ie;if(oe&&!r.showPlaceholders){let B=x.includes(oe)?i.fields.find(ee=>ee.key===oe):void 0;if(B){let ee=Object.prototype.hasOwnProperty.call(i.values,B.key)?i.values[B.key]:B.defaultValue;zu(B)&&xn(ee)&&(Ie=Za(ee))}else{let ee=Yt(oe),Ve=ee&&ee.n===void 0&&!p.has(ee.source)?l[ee.source]?.[0]:void 0,Ee=ee&&Ve&&Vu(ee.source,ee.field)?Ve.values[ee.field]:void 0;Ee&&Hu(Ee)&&(Ie=Lr(Ee))}}let $e=m.rich===!0&&!E.length,De=Ie?fA(ja(Ie),a):(Re||$e)&&Hu(ke)?ja(Lr(ke)):void 0;De&&(ke=Ie?Yi(De):Qi(ke));let me=qy(m.text,B=>rn(B,Se),De,ke,m.style,q);me&&(De=me,ke=Yi(De)),X.uppercase&&!r.showPlaceholders&&(ke=ke.toUpperCase(),De=De?.map(B=>({...B,runs:B.runs.map(ee=>({...ee,text:ee.text.toUpperCase()}))})));let Ge=m.flow?"grow":Qy(m.fit,q),R=ju(ke,De,jl(m,q),X,Ge);y.push({kind:"text",box:R.box,...hi(m.rotate),text:ke,style:R.style,fit:Ge,fieldKeys:x,editKey:x.length===1&&m.text.trim()===`{${x[0]}}`?x[0]:void 0,isEmpty:ke.trim()==="",...De?{rich:De}:{},...G?{itemSource:G.source,itemKeys:E.filter(B=>Yt(B)?.source===G.source)}:{}});let ne=y[y.length-1];m.flow&&ne&&P.set(ne,jl(m,q).h)}else if(m.kind==="repeat"){let E=Bn(m),I=m.source,D=(l[I]??[]).slice(0,E).map(G=>({ctx:ui(I,G),item:G})),x=G=>r.showPlaceholders&&r.numberItems?G+1:void 0;if(m.slots){let G=[];if(D.forEach(({ctx:M,item:A},L)=>{let q=m.slots?.[L];if(!q)return;let X=r.showPlaceholders&&r.numberItems?L+1:void 0;G.push({slot:q,designHeights:q.items.map(Se=>Se.h),nodes:q.items.map(Se=>Vy((m.closeGaps||m.flow)&&Se.kind==="text"?{...Se,fit:"grow"}:Se,q.x,q.y,q.w,X?Wu(I,X):M,I,A,o,r,X,i.styles))})}),m.flow)for(let M of G)M.nodes.forEach((A,L)=>P.set(A,M.designHeights[L]??A.box.h));else m.closeGaps&&yA(G);for(let M of G)y.push(...M.nodes)}else if(m.card&&m.grid){let{cells:G,scale:M}=jy(m,D.length),A={};D.forEach(({ctx:L,item:q},X)=>{let Se=G[X];if(!Se)return;let ke=tm(m.card,I,Se,M,L,q,o,r,{},x(X));for(let[Re,oe]of Object.entries(ke.lines))A[Re]=Math.max(A[Re]??1,oe)}),D.forEach(({ctx:L,item:q},X)=>{let Se=G[X];Se&&y.push(...tm(m.card,I,Se,M,L,q,o,r,A,x(X)).nodes)})}else{let G=m.gapX??0,M=m.gapY??0,A=(m.w-G*(m.columns-1))/m.columns;D.forEach(({ctx:L,item:q},X)=>{let Se=m.x+X%m.columns*(A+G),ke=m.y+Math.floor(X/m.columns)*(m.rowHeight+M),Re=r.showPlaceholders&&r.numberItems?X+1:void 0;for(let oe of m.item)y.push(Vy(oe,Se,ke,A,Re?Wu(I,Re):L,I,q,o,r,Re,i.styles))})}y.push({kind:"repeatArea",box:m,source:I,count:D.length,capacity:E})}if(m.flow)for(let E of y.slice(N))E.kind!=="repeatArea"&&F.push({node:E,designH:P.get(E)??E.box.h})}if(F.length&&Yy(F),r.editing&&!r.showPlaceholders){let m=Array.from(h.entries()).map(([N,E])=>{let I=i.layout.elements.filter(M=>v(M).some(A=>Yt(A)?.source===N)),D=Math.min(...I.map(M=>M.x)),x=Math.min(...I.map(M=>M.y)),G={x:D,y:x,w:Math.max(...I.map(M=>M.x+M.w))-D,h:Math.max(...I.map(M=>M.y+M.h))-x};return{at:E,node:{kind:"repeatArea",box:G,source:N,count:l[N]?.length?1:0,capacity:1}}}).sort((N,E)=>E.at-N.at);for(let N of m)y.splice(N.at,0,N.node)}return{size:dr(o),background:qo(i.layout.background,o,"FFFFFF"),nodes:y}}function rm(e,o,n){let r=o?Ey(e,o):"",i=e==="specialists";return{name:r,...i&&{photo:!0},initials:n.showPlaceholders?e==="specialists"?"PHOTO":"LOGO":om(o,r),color:o?.color??"CBD5E1",logoUrl:o?.imageUrl??(i&&o?Kl:void 0)}}function Vy(e,o,n,r,i,a,s,l,p,c,u){let C=e.w===void 0?r-e.x:e.w<0?r-e.x+e.w:e.w,g={x:o+e.x,y:n+e.y,w:C,h:e.h},d=p.editing&&s&&!p.showPlaceholders?{itemRef:{source:a,itemId:s.id}}:{};if(e.kind==="shape")return{kind:"shape",box:g,...hi(e.rotate),fill:qo(e.fill,l),radius:e.radius??0,...e.line?{line:qo(e.line,l)}:{},...e.round&&{round:!0}};if(e.kind==="logo"){let A=cr(a),L=A?`{${A}}`:"",q=A?Ql(a,L):void 0,X=q&&s?Ql(a,L,s.id):q,Se=q&&X?{...u?.[q],...X!==q?u?.[X]:{}}:void 0;return{kind:"logo",box:jl(g,Se),...e.round&&{round:!0},...X&&!p.showPlaceholders?{styleKey:X}:{},...d,...rm(a,s,p),style:Nr({fontFace:"$heading",fontSize:16,color:"FFFFFF",bold:!0,align:"center",valign:"middle",...e.style},l),placeholder:p.showPlaceholders&&A?c?`{${A.replace(/_([a-z]+)$/,`_${c}_$1`)}}`:`{${A}}`:void 0}}let y=rn(e.text,i),v=!!e.style?.uppercase&&!p.showPlaceholders,h=v?y.toUpperCase():y,P=!!Bo(e.text).map(A=>lr(a,A)).find(A=>A?.kind==="link")&&!p.showPlaceholders&&e.text.trim()===`{${Bo(e.text)[0]}}`&&h.trim()!=="",m=P?ji(h):h,N=Ql(a,e.text),E=N&&s?Ql(a,e.text,s.id):N,I=N&&E?{...u?.[N],...E!==N?u?.[E]:{}}:void 0,D=P?void 0:qy(e.text,A=>{let L=rn(A,i);return v?L.toUpperCase():L},void 0,h,e.style,I),x=D?Yi(D):m,G=Qy(e.fit,I),M=ju(x,D,jl(g,I),Nr({...e.style,...I},l),G);return{kind:"text",box:M.box,...hi(e.rotate),text:x,...D?{rich:D}:{},style:M.style,fit:G,fieldKeys:[],...E&&!p.showPlaceholders?{styleKey:E}:{},...d,isEmpty:h.trim()==="",href:P?Uu(y):void 0}}function gA(e,o,n,r){let i=Math.max(1,fi(o)),a=Array.from({length:i},(x,G)=>e.columns[G]??e.columns[e.columns.length-1]??1),s=a.reduce((x,G)=>x+G,0)||1,l=a.map(x=>x/s*e.w),p=l.map((x,G)=>l.slice(0,G).reduce((M,A)=>M+A,e.x)),c=e.padding??.05,u=e.rowHeight??.3,C=e.headerRows??0,g=gi(o),d=(x,G)=>x<C?void 0:e.columnStyles?.[G]??void 0,y=(x,G)=>{let M=x<C?e.header:e.body,A=x<C&&e.header?.text?.align?void 0:e.align?.[G];return Nr({valign:"middle",...M?.text,...d(x,G)?.text,...A?{align:A}:{}},n)},v=(x,G)=>l.slice(x,x+G).reduce((M,A)=>M+A,0),h=x=>rn(x.text,r,!0),F=o.rows.map(()=>u);for(let x of g){if((x.cell.rowSpan??1)>1)continue;let G=h(x.cell);if(!G.trim())continue;let M=ts(G,void 0,Math.max(.1,v(x.col,x.cell.colSpan??1)-2*c),y(x.row,x.col))+2*c;F[x.row]=Math.max(F[x.row]??u,M)}let P=F.map((x,G)=>F.slice(0,G).reduce((M,A)=>M+A,e.y)),m=F.reduce((x,G)=>x+G,0),N=[],E=e.lines,I=(E?.width??.75)/72,D=E?qo(E.color,n):"";for(let x of g){let G=x.cell.rowSpan??1,M=x.cell.colSpan??1,A={x:Ut(p[x.col]??e.x),y:Ut(P[x.row]??e.y),w:Ut(v(x.col,M)),h:Ut(F.slice(x.row,x.row+G).reduce((ke,Re)=>ke+Re,0))},L=x.row<C,q=!L&&!!e.bandFill&&(x.row-C)%2===1,X=L?e.header?.fill:d(x.row,x.col)?.fill??(q?e.bandFill:e.body?.fill);X&&N.push({kind:"shape",box:A,fill:qo(X,n),radius:0});let Se=h(x.cell);N.push({kind:"text",box:{x:Ut(A.x+c),y:Ut(A.y+c),w:Ut(Math.max(.05,A.w-2*c)),h:Ut(Math.max(.05,A.h-2*c))},text:Se,style:y(x.row,x.col),fit:"none",fieldKeys:[],isEmpty:!Se.trim(),inTable:e.field}),E&&E.between!=="none"&&(A.y+A.h<e.y+m-.001&&N.push({kind:"shape",box:{x:A.x,y:Ut(A.y+A.h-I/2),w:A.w,h:Ut(I)},fill:D,radius:0}),E.between!=="rows"&&A.x+A.w<e.x+e.w-.001&&N.push({kind:"shape",box:{x:Ut(A.x+A.w-I/2),y:A.y,w:Ut(I),h:A.h},fill:D,radius:0}))}if(E?.outer){let x=[{x:e.x,y:e.y,w:e.w,h:I},{x:e.x,y:e.y+m-I,w:e.w,h:I},{x:e.x,y:e.y,w:I,h:m},{x:e.x+e.w-I,y:e.y,w:I,h:m}];for(let G of x)N.push({kind:"shape",box:{x:Ut(G.x),y:Ut(G.y),w:Ut(G.w),h:Ut(G.h)},fill:D,radius:0})}return N.push({kind:"tableArea",box:{x:e.x,y:e.y,w:e.w,h:Ut(m>0?m:e.h)},fieldKey:e.field,rows:o.rows.length,columns:i}),N}var Ut=e=>Math.round(e*1e3)/1e3,Xl=.02,hA=(e,o)=>e.x<o.x+o.w-Xl&&o.x<e.x+e.w-Xl;function Yy(e){let o=e.map(({node:a,designH:s})=>({...a.box,h:s})),n=e.map(({node:a,designH:s})=>{if(a.kind!=="text")return a.box.h;if(a.isEmpty)return 0;let l=Ut(ts(a.text,a.rich,a.box.w,{...a.style,lineSpacing:a.style.lineSpacing??1.2}));return a.style.valign==="middle"||a.style.valign==="bottom"?Math.max(l,s):l}),r=o.map((a,s)=>s).sort((a,s)=>(o[a]?.y??0)-(o[s]?.y??0)),i=[];for(let a of r){let s=o[a],l=r.filter(g=>{let d=o[g];return i[g]!==void 0&&g!==a&&d.y+d.h<=s.y+Xl&&hA(d,s)});if(!l.length){i[a]=Ut(s.y);continue}let p=g=>o[g].y+o[g].h,c=g=>i[g]+n[g],u=Math.max(...l.map(p)),C=Math.max(...l.filter(g=>p(g)>=u-Xl).map(g=>c(g)-p(g)));i[a]=Ut(Math.max(s.y+C,...l.map(g=>c(g))))}e.forEach(({node:a},s)=>{a.box={...a.box,y:i[s],h:n[s]}})}function yA(e){let o=[];for(let a of e){let s=a.nodes.map((l,p)=>({...l.box,h:a.designHeights[p]??l.box.h}));Yy(a.nodes.map((l,p)=>({node:l,designH:s[p].h}))),o.push({top:Math.min(...s.map(l=>l.y)),bottom:Math.max(...s.map(l=>l.y+l.h)),newBottom:Math.max(...a.nodes.map(l=>l.box.y+l.box.h))})}let n=e.map((a,s)=>s).sort((a,s)=>e[a].slot.y-e[s].slot.y),r=[];for(let a of n){let s=r[r.length-1];s&&Math.abs(e[s[0]].slot.y-e[a].slot.y)<.05?s.push(a):r.push([a])}let i=0;r.forEach((a,s)=>{if(s>0){let l=r[s-1],p=Math.max(...l.map(g=>o[g].bottom)),c=Math.max(...l.map(g=>o[g].newBottom)),u=Math.min(...a.map(g=>o[g].top));i=c+(u-p)-u}for(let l of a){let p=e[l];i&&p.nodes.forEach(c=>{c.box={...c.box,y:Ut(c.box.y+i)}}),o[l].newBottom+=i}})}var Wy=.2;function Qy(e,o){let n=e??"shrink";return n==="shrink"&&o?.fontSize!==void 0&&!o.heightDelta?"grow":n}function jl(e,o){return o?.offsetX||o?.offsetY||o?.widthDelta||o?.heightDelta?{...e,x:e.x+(o.offsetX??0),y:e.y+(o.offsetY??0),w:Math.max(Wy,e.w+(o.widthDelta??0)),h:Math.max(Wy,e.h+(o.heightDelta??0))}:e}function Ql(e,o,n){let r=Bo(o);if(!r.length)return;let i=l=>l.toLowerCase().replace(/[^a-z0-9_]/g,"_"),a=i(`item_${e}_${r.join("_")}`);if(!n)return a.slice(0,64);let s=`__${i(n)}`.slice(0,40);return a.slice(0,64-s.length)+s}function Ji(e,o,n,r){let i={};for(let a of an(e))i[a.source]=Dr(a.source,r??Bn(a),n);for(let a of bi(e))i[a]=Dr(a,1,n);return{layout:e,fields:o,values:{},items:i}}var Xy=(e,o,n)=>Math.min(n,Math.max(o,e));function jy(e,o){let n=e.card,r=e.grid;if(o===0)return{cells:[],scale:1};let i=null;for(let g=1;g<=Math.min(o,r.maxColumns);g++){let d=Math.ceil(o/g),y=(e.w-r.gap*(g-1))/g,v=(e.h-r.gap*(d-1))/d;if(y<=0||v<=0)continue;let h=Math.min(v,y/n.aspect,r.maxCardHeight),F=Math.min(y,h*n.aspect);(!i||F*h>i.w*i.h+1e-6)&&(i={cols:g,rows:d,w:F,h})}if(!i)return{cells:[],scale:1};let{cols:a,rows:s,w:l,h:p}=i,c=s*p+(s-1)*r.gap,u=e.y+Math.max(0,(e.h-c)/2),C=[];for(let g=0;g<o;g++){let d=Math.floor(g/a),y=d===s-1?o-d*a:a,v=y*l+(y-1)*r.gap,h=e.x+(e.w-v)/2;C.push({x:h+g%a*(l+r.gap),y:u+d*(p+r.gap),w:l,h:p})}return{cells:C,scale:Xy(p/n.refHeight,.6,1.6)}}function bA(e,o,n,r,i){let a=u=>({...i,fontSize:u}),s=u=>Math.max(0,...e.split(/\s+/).map(C=>es(C,a(u)))),l=u=>Yl(e,o,a(u)),p=n;for(;p>6&&(l(p)>r||s(p)>o*72);)p*=.92;p=Math.round(p*10)/10;let c=Xy(l(p),1,r);return{pt:p,lines:c}}function tm(e,o,n,r,i,a,s,l,p={},c){let u=M=>`{${c?M.replace(/^([a-z]+)_/,`$1_${c}_`):M}}`,C=[],g={};(e.background||e.borderColor)&&C.push({kind:"shape",box:n,fill:e.background?qo(e.background,s):"FFFFFF",radius:(e.radius??0)*r,line:e.borderColor?qo(e.borderColor,s):void 0});let d=e.padding*r,y=e.gap*r,v={x:n.x+d,y:n.y+d,w:n.w-2*d,h:n.h-2*d},h=e.blocks.map(M=>({b:M,def:lr(o,M.field)})).filter(({b:M,def:A})=>A&&(A.kind==="image"||l.showPlaceholders||(i[M.field]??"").trim()!=="")),F=l.editing&&a&&!l.showPlaceholders?{itemRef:{source:o,itemId:a.id}}:{},P=(M,A)=>({kind:"logo",box:M,...rm(o,a,l),...F,style:Nr({fontFace:"$heading",color:"FFFFFF",bold:!0,align:"center",valign:"middle",...A.style,fontSize:Math.max(6,M.h*72*.34)},s),placeholder:l.showPlaceholders?u(cr(o)??"client_logo"):void 0}),m=(M,A,L,q,X,Se)=>{let ke=l.showPlaceholders?u(M):i[M]??"",Re=A==="link"&&!l.showPlaceholders,oe=Nr({color:"$text",...L,fontSize:X,align:L?.align??Se,valign:"top",lineSpacing:1.2},s),Ie=oe.uppercase&&!l.showPlaceholders?ke.toUpperCase():ke;return{kind:"text",box:q,text:Re?ji(Ie):Ie,style:oe,fieldKeys:[],isEmpty:Ie.trim()==="",href:Re?Uu(ke):void 0,...F}},N=(M,A,L,q)=>{for(let X=1;;X*=.9){let Se=M.map(({b:Re,def:oe})=>{if(oe.kind==="image")return{b:Re,def:oe,h:q,pt:0};let Ie=l.showPlaceholders?u(Re.field):i[Re.field]??"",$e=Nr(Re.style,s),De=oe.kind==="link"?ji(Ie):Ie,me=$e.uppercase&&!l.showPlaceholders?De.toUpperCase():De,Ge=Re.maxLines??2,R=bA(me,A,(Re.style?.fontSize??12)*r*X,Ge,{fontFace:$e.fontFace,bold:$e.bold,letterSpacing:$e.letterSpacing}),ne=Math.min(Ge,Math.max(R.lines,p[Re.field]??1));return g[Re.field]=R.lines,{b:Re,def:oe,h:ne*R.pt*1.2/72,pt:R.pt}}),ke=Se.reduce((Re,oe)=>Re+oe.h,0)+y*Math.max(0,Se.length-1);if(ke<=L||X<.5)return{items:Se,total:ke}}};if(e.direction==="horizontal"){let M=h.find(({def:oe})=>oe.kind==="image"),A=M?Math.min(v.h*(M.b.size??.8),v.w*.4):0;M&&C.push(P({x:v.x,y:v.y+(v.h-A)/2,w:A,h:A},M.b));let L=v.x+(M?A+y:0),q=v.w-(L-v.x),X=h.filter(({def:oe})=>oe.kind!=="image"),{items:Se,total:ke}=N(X,q,v.h,0),Re=v.y+Math.max(0,(v.h-ke)/2);for(let oe of Se)C.push(m(oe.b.field,oe.def.kind,oe.b.style,{x:L,y:Re,w:q,h:oe.h},oe.pt,"left")),Re+=oe.h+y;return{nodes:C,lines:g}}let E=h.find(({def:M})=>M.kind==="image"),I=E?v.h*(E.b.size??.4):0,{items:D,total:x}=N(h,v.w,v.h,I);x>v.h&&I>0&&(I=Math.max(v.h*.15,I-(x-v.h)),{items:D,total:x}=N(h,v.w,v.h,I));let G=v.y+Math.max(0,(v.h-x)/2);for(let M of D){if(M.def.kind==="image"){let A=(a?.imageUrl||l.showPlaceholders)&&o==="clients"?Math.min(v.w,M.h*2.2):M.h,L=e.align==="left"?v.x:e.align==="right"?v.x+v.w-A:v.x+(v.w-A)/2;C.push(P({x:L,y:G,w:A,h:M.h},M.b))}else C.push(m(M.b.field,M.def.kind,M.b.style,{x:v.x,y:G,w:v.w,h:M.h},M.pt,e.align));G+=M.h+y}return{nodes:C,lines:g}}var Zt=e=>Math.round(e*1e3)/1e3;function as(e){if(!e.slots?.length)return e;let o=Math.min(...e.slots.map(a=>a.x)),n=Math.min(...e.slots.map(a=>a.y)),r=Math.max(...e.slots.map(a=>a.x+a.w))-o,i=Math.max(...e.slots.map(a=>a.y+a.h))-n;return{...e,x:Zt(o),y:Zt(n),w:Zt(r),h:Zt(i)}}function Or(e){if(!e.items.length)return e;let o=e.items.map(s=>({x:e.x+s.x,y:e.y+s.y,w:s.w??e.w-s.x,h:s.h})),n=Math.min(...o.map(s=>s.x)),r=Math.min(...o.map(s=>s.y)),i=Math.max(...o.map(s=>s.x+s.w))-n,a=Math.max(...o.map(s=>s.y+s.h))-r;return{...e,x:Zt(n),y:Zt(r),w:Zt(i),h:Zt(a),items:e.items.map((s,l)=>{let p=o[l]??{x:n,y:r,w:0};return{...s,x:Zt(p.x-n),y:Zt(p.y-r),w:Zt(p.w)}})}}function Jy(e){let o=[...e].sort((r,i)=>r.y-i.y),n=[];for(let r of o){let i=n.find(a=>Math.abs((a[0]?.y??r.y)-r.y)<.3);i?i.push(r):n.push([r])}return n.flatMap(r=>r.sort((i,a)=>i.x-a.x))}var SA=0,ss=()=>`s${Date.now().toString(36)}${(SA++).toString(36)}`;function Zy(e,o,n=e.grid?.maxItems??8){if(!e.card||!e.grid)return e;let{cells:r,scale:i}=jy(e,n),a=r.map(c=>{let{nodes:u}=tm(e.card,e.source,c,i,{},void 0,o,{showPlaceholders:!0}),C=u.flatMap(g=>{let d={x:Zt(g.box.x-c.x),y:Zt(g.box.y-c.y),w:Zt(g.box.w),h:Zt(g.box.h)};if(g.kind==="logo")return[{kind:"logo",...d,...g.round&&{round:!0}}];if(g.kind==="shape")return[{kind:"shape",fill:e.card.background??"FFFFFF",...g.radius?{radius:g.radius}:{},...e.card.borderColor?{line:e.card.borderColor}:{},...d}];if(g.kind==="text"){let y=e.card.blocks.find(v=>g.text===`{${v.field}}`);return[{kind:"text",text:g.text,...d,style:{...y?.style??{},color:y?.style?.color??"$text",fontSize:g.style.fontSize,align:g.style.align,lineSpacing:1.2}}]}return[]});return{id:ss(),x:Zt(c.x),y:Zt(c.y),w:Zt(c.w),h:Zt(c.h),items:C}}),{card:s,grid:l,...p}=e;return as({...p,slots:a})}var eb=["Aptos","Arial","Arial Black","Bahnschrift","Book Antiqua","Calibri","Calibri Light","Cambria","Candara","Century Gothic","Consolas","Constantia","Corbel","Courier New","Franklin Gothic Medium","Garamond","Georgia","Gill Sans MT","Helvetica","Palatino Linotype","Segoe UI","Tahoma","Times New Roman","Trebuchet MS","Verdana"],im=["Barlow","Cormorant Garamond","Crimson Text","DM Sans","EB Garamond","Fira Sans","IBM Plex Sans","Inter","Josefin Sans","Lato","Libre Baskerville","Lora","Manrope","Merriweather","Montserrat","Mulish","Noto Sans","Nunito","Open Sans","Oswald","Playfair Display","Poppins","PT Sans","Raleway","Roboto","Roboto Slab","Rubik","Source Sans 3","Source Serif 4","Work Sans"],xA=[...eb,...im],CA={Avenir:"Mulish","Avenir Book":"Mulish","Avenir Roman":"Mulish","Avenir Light":"Mulish","Avenir Medium":"Mulish","Avenir Heavy":"Mulish","Avenir Black":"Mulish","Avenir Next":"Mulish","Avenir Next LT Pro":"Mulish",Calibri:"Carlito","Calibri Light":"Carlito",Cambria:"Caladea",Arial:"Arimo",Helvetica:"Arimo","Times New Roman":"Tinos",Georgia:"Gelasio","Courier New":"Cousine"};var YU=`https://fonts.googleapis.com/css2?${Array.from(new Set([...im,...Object.values(CA)])).sort().map(e=>`family=${e.replace(/ /g,"+")}:wght@400;700`).join("&")}&display=swap`;function tb(e,o){let n=new Set(xA);return[...Array.from(new Set(e.filter(i=>i&&!n.has(i)))).map(i=>({value:i,label:i,group:o.template})),...eb.map(i=>({value:i,label:i,group:o.office})),...im.map(i=>({value:i,label:i,group:o.web}))]}var Jl={logoNameCountryWebsite:{direction:"vertical",align:"center",aspect:1.25,padding:.14,gap:.05,refHeight:1.8,background:"FFFFFF",radius:.1,blocks:[{field:"client_logo",size:.4},{field:"client_name",style:{fontSize:13,bold:!0,color:"$primary"}},{field:"client_country",style:{fontSize:10,color:"$muted"},maxLines:1},{field:"client_website",style:{fontSize:10,color:"$accent"},maxLines:1}]},nameAboveLogo:{direction:"vertical",align:"center",aspect:1.1,padding:.16,gap:.1,refHeight:1.8,background:"FFFFFF",radius:.06,borderColor:"$light",blocks:[{field:"client_name",style:{fontSize:13,bold:!0,color:"$primary"}},{field:"client_logo",size:.5}]},logoLeft:{direction:"horizontal",align:"left",aspect:2.6,padding:.14,gap:.12,refHeight:1.1,background:"FFFFFF",radius:.08,blocks:[{field:"client_logo",size:.8},{field:"client_name",style:{fontSize:13,bold:!0,color:"$primary"}},{field:"client_industry",style:{fontSize:10,color:"$muted"},maxLines:1}]}},am={maxColumns:4,maxItems:12,gap:.25,maxCardHeight:2.4},Zi=(e,o={})=>({direction:"vertical",align:"left",aspect:2.4,padding:.14,gap:.04,refHeight:1.3,background:"FFFFFF",radius:.06,blocks:e,...o}),Zl={clients:Jl.logoNameCountryWebsite,matters:Zi([{field:"workhighlight_year",style:{fontSize:10,bold:!0,color:"$accent"},maxLines:1},{field:"workhighlight_content_commercialtitle",style:{fontSize:15,bold:!0,color:"$primary",fontFace:"$heading"}},{field:"workhighlight_clients_name_csv",style:{fontSize:11,color:"$muted"},maxLines:1}]),industries:Zi([{field:"industry_image",size:.3},{field:"industry_name",style:{fontSize:15,bold:!0,color:"$primary",fontFace:"$heading"},maxLines:1},{field:"industry_description",style:{fontSize:10,color:"$text"},maxLines:4}],{aspect:1.3,refHeight:1.9}),practices:Zi([{field:"practice_image",size:.3},{field:"practice_name",style:{fontSize:15,bold:!0,color:"$primary",fontFace:"$heading"},maxLines:1},{field:"practice_description",style:{fontSize:10,color:"$text"},maxLines:4}],{aspect:1.3,refHeight:1.9}),publications:Zi([{field:"publication_date",style:{fontSize:9,bold:!0,color:"$accent",uppercase:!0},maxLines:1},{field:"publication_name",style:{fontSize:14,bold:!0,color:"$primary",fontFace:"$heading"}},{field:"publication_author",style:{fontSize:10,color:"$muted"},maxLines:1},{field:"publication_description",style:{fontSize:10,color:"$text"},maxLines:3}],{aspect:1.6,refHeight:1.9}),specialists:Zi([{field:"specialist_photo",size:.45},{field:"specialist_name",style:{fontSize:13,bold:!0,color:"$primary"},maxLines:1},{field:"specialist_function",style:{fontSize:10,color:"$accent"},maxLines:1},{field:"specialist_email",style:{fontSize:9,color:"$muted"},maxLines:1},{field:"specialist_phone",style:{fontSize:9,color:"$muted"},maxLines:1}],{align:"center",aspect:.85,refHeight:2.4}),testimonials:Zi([{field:"testimonial_description",style:{fontSize:13,italic:!0,color:"$primary",fontFace:"$heading"},maxLines:5},{field:"testimonial_name",style:{fontSize:10,bold:!0,color:"$text"},maxLines:1},{field:"testimonial_directory",style:{fontSize:9,color:"$accent"},maxLines:1}],{aspect:1.7,refHeight:2,padding:.2,gap:.08})};var TA=["ar","da","de","el","en","es","et","fi","fr","he","hu","it","lv","nl","no","ro","sv","zh"],IA={ara:"ar",dan:"da",deu:"de",ger:"de",ell:"el",gre:"el",eng:"en",spa:"es",est:"et",fin:"fi",fra:"fr",fre:"fr",heb:"he",hun:"hu",ita:"it",lav:"lv",nld:"nl",dut:"nl",nor:"no",nob:"no",nno:"no",ron:"ro",rum:"ro",swe:"sv",zho:"zh",chi:"zh"},wA={en:"en-GB",nl:"nl-NL",de:"de-DE",fr:"fr-FR",es:"es-ES",it:"it-IT",sv:"sv-SE",da:"da-DK",no:"nb-NO",fi:"fi-FI",et:"et-EE",lv:"lv-LV",hu:"hu-HU",ro:"ro-RO",el:"el-GR",he:"he-IL",ar:"ar",zh:"zh-CN"};function ec(e){let o=(e??"").trim().toLowerCase();if(!o)return"en";let n=o.split(/[-_]/)[0]??o,r=IA[n];return r||(TA.includes(n)?n:"en")}function vA(e){let o=(e??"").trim();if(/^[a-z]{2}[-_][a-z]{2,4}$/i.test(o))return o.replace("_","-");let n=ec(o);return wA[n]??n}function sm(e,o){let n=typeof e=="string"?new Date(e):e;return new Intl.DateTimeFormat(vA(o),{timeZone:"UTC",day:"numeric",month:"long",year:"numeric"}).format(n)}var kA={en:{names:{TITLE:"Title slide",DESCRIPTION:"Text slide",IMAGE:"Image",CLIENTS:"Clients",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Industries",PRACTICES:"Practices",PUBLICATIONS:"Publications",SPECIALISTS:"Specialists",TESTIMONIALS:"Testimonials",FEATURED_INDUSTRY:"Featured industry",FEATURED_PRACTICE:"Featured practice",FEATURED_SPECIALIST:"Featured specialist"},titles:{CLIENTS:["Clients we work for","A selection of organisations that rely on us"],WORKHIGHLIGHTS:["Relevant experience","Recent work that matches your needs"],INDUSTRIES:["Industries we serve","Knowledge of your market"],PRACTICES:["Our expertise","The practices relevant to {prospect_name}"],PUBLICATIONS:["Publications","Recent articles and analyses by our specialists"],SPECIALISTS:["Your team","The specialists who will assist {prospect_name}"],TESTIMONIALS:["What clients say about us","From independent guides and rankings"]},titleSlide:["Stronger together for {prospect_name}","Our proposal for legal support"],aboutTitle:"About {firm_name}",workHighlights:"Work highlights",contact:{name:"Get in contact",title:"Your main point of contact \u2013 who knows your business",intro:`**One point of contact** \u2013 one person who keeps the overview and answers your questions.

**Knows your business** \u2013 advice that fits your goals, not only the law.

**Proactive** \u2013 we flag risks early and think ahead with you.

**Clear on time and costs** \u2013 clear planning, budget and billing.`}},nl:{names:{TITLE:"Titelslide",DESCRIPTION:"Tekstslide",IMAGE:"Afbeelding",CLIENTS:"Cli\xEBnten",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Sectoren",PRACTICES:"Praktijkgroepen",PUBLICATIONS:"Publicaties",SPECIALISTS:"Specialisten",TESTIMONIALS:"Testimonials",FEATURED_INDUSTRY:"Uitgelichte sector",FEATURED_PRACTICE:"Uitgelichte praktijkgroep",FEATURED_SPECIALIST:"Uitgelichte specialist"},titles:{CLIENTS:["Wij werken onder meer voor","Een selectie van organisaties die op ons vertrouwen"],WORKHIGHLIGHTS:["Relevante ervaring","Recent werk dat aansluit bij uw vraag"],INDUSTRIES:["Sectoren waarin wij actief zijn","Kennis van uw markt"],PRACTICES:["Onze expertise","De praktijkgroepen die voor {prospect_name} relevant zijn"],PUBLICATIONS:["Publicaties","Recente artikelen en analyses van onze specialisten"],SPECIALISTS:["Uw team","De specialisten die {prospect_name} bijstaan"],TESTIMONIALS:["Wat cli\xEBnten over ons zeggen","Uit onafhankelijke gidsen en rankings"]},titleSlide:["Samen sterker voor {prospect_name}","Ons voorstel voor juridische ondersteuning"],aboutTitle:"Over {firm_name}",workHighlights:"Work highlights",contact:{name:"Contact",title:"Uw vaste aanspreekpunt \u2013 die uw organisatie kent",intro:`**E\xE9n aanspreekpunt** \u2013 \xE9\xE9n persoon die het overzicht houdt en uw vragen beantwoordt.

**Kent uw organisatie** \u2013 advies dat past bij uw doelen, niet alleen bij de wet.

**Proactief** \u2013 we signaleren risico\u2019s vroeg en denken met u vooruit.

**Helder over tijd en kosten** \u2013 duidelijke planning, budget en facturatie.`}}};var r$=kA.en.names;var ob=["CONTACT"],nb={CONTACT:"SPECIALISTS"};var rb="default";function pr(e){return[{id:rb,name:e.variantName??"",layout:e.layout,fields:e.fields},...e.variants??[]]}function tc(e,o,n){if(e.name.trim())return e.name;let r=To(e.layout);return o===0&&r===null?n("versions.default"):r!==null?n("versions.spots",{count:r}):n("versions.numbered",{n:o+1})}var PA=0,ls=()=>`v${Date.now().toString(36)}${(PA++).toString(36)}`;var Oo=20;function ea(e,o,n=.05){if(typeof e=="number"&&typeof o=="number")return Math.abs(e-o)<=n;if(Array.isArray(e)||Array.isArray(o))return Array.isArray(e)&&Array.isArray(o)&&e.length===o.length&&e.every((r,i)=>ea(r,o[i],n));if(e&&o&&typeof e=="object"&&typeof o=="object"){let r=s=>Object.entries(s).filter(([,l])=>l!==void 0),i=r(e),a=new Map(r(o));return i.length===a.size&&i.every(([s,l])=>a.has(s)&&ea(l,a.get(s),n))}return e===o}var RA=(e,o)=>ea(e.layout,o.layout)&&ea(e.fields,o.fields);function ib(e){let o=[],n=[];for(let r of e){let i=o.find(a=>RA(a,r));i?n.push({id:r.id,keptId:i.id}):o.push(r)}return n}var ab=e=>(e.text??"")+(e.content??[]).map(ab).join(""),oc=e=>!!e&&ab(e).trim().length>0;var sb=e=>/title/i.test(e)?/sub/i.test(e)?1:0:/description/i.test(e)?3:2,lb=e=>[...e].sort((o,n)=>sb(o.key)-sb(n.key));var EA={title:90,subtitle:160,description:1200};function ta(e){let o=e.layout.elements.map(r=>({...r})),n=[...e.fields];for(let r of e.texts){if(!r.field||n.some(a=>a.key===r.field))continue;let i=o[r.element];!i||i.kind!=="text"||(o[r.element].text=`{${r.field}}`,n.push({key:r.field,multiline:r.multiline||vy(r.field),defaultValue:r.text,maxLength:Math.max(EA[r.field]??500,Math.ceil(r.text.length*1.3))}))}return{layout:{...e.layout,elements:o},fields:n}}function oa(e,o){let n=Fo[o],r=an(e).map(a=>a.source),i=bi(e);return n.featured?i.includes(n.featured)&&r.every(a=>a===n.list):n.list?r.includes(n.list):!r.length}var AA=e=>`{${e.replace(/^([a-z]+)_/,"$1_1_")}}`,lm=e=>{let o=Mr[e].find(r=>r.kind!=="image")?.key,n=cr(e);return[o,n].filter(r=>!!r).map(AA)};function cb(e){let o=Fo[e];return o.featured?[...lm(o.featured).slice(0,1),...o.list?lm(o.list).slice(0,1):[]]:o.list?lm(o.list):[]}function LA(e){if(e==="TITLE")return{showInNav:!1,showNumber:!1};let o=Fo[e];return{showNumber:!0,showInNav:!0,...e==="DESCRIPTION"&&{fold:!0},...o.list&&{display:e==="WORKHIGHLIGHTS"||e==="SPECIALISTS"?"rows":"cards"},...e==="SPECIALISTS"&&{leadCount:2}}}var na=(e,o)=>({...LA(e),...o??{}}),FA={en:{names:{TITLE:"Opening",DESCRIPTION:"Text",IMAGE:"Image",CLIENTS:"Clients",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Industries",PRACTICES:"Practices",PUBLICATIONS:"Publications",SPECIALISTS:"Team",TESTIMONIALS:"Testimonials",FEATURED_INDUSTRY:"Featured industry",FEATURED_PRACTICE:"Featured practice",FEATURED_SPECIALIST:"Featured specialist"},titles:{TITLE:"Proposal for {prospect_name}",DESCRIPTION:"Introduction",IMAGE:"Image",CLIENTS:"Selected clients",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Industries",PRACTICES:"Practices",PUBLICATIONS:"Publications",SPECIALISTS:"Our team",TESTIMONIALS:"What clients say",FEATURED_INDUSTRY:"Industry focus",FEATURED_PRACTICE:"Practice focus",FEATURED_SPECIALIST:"Featured specialist"}},nl:{names:{TITLE:"Openingsblok",DESCRIPTION:"Tekst",IMAGE:"Afbeelding",CLIENTS:"Cli\xEBnten",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Sectoren",PRACTICES:"Praktijkgroepen",PUBLICATIONS:"Publicaties",SPECIALISTS:"Team",TESTIMONIALS:"Testimonials",FEATURED_INDUSTRY:"Uitgelichte sector",FEATURED_PRACTICE:"Uitgelichte praktijkgroep",FEATURED_SPECIALIST:"Uitgelichte specialist"},titles:{TITLE:"Voorstel voor {prospect_name}",DESCRIPTION:"Introductie",IMAGE:"Afbeelding",CLIENTS:"Geselecteerde cli\xEBnten",WORKHIGHLIGHTS:"Work highlights",INDUSTRIES:"Sectoren",PRACTICES:"Praktijkgroepen",PUBLICATIONS:"Publicaties",SPECIALISTS:"Ons team",TESTIMONIALS:"Wat cli\xEBnten zeggen",FEATURED_INDUSTRY:"Sectorfocus",FEATURED_PRACTICE:"Praktijkfocus",FEATURED_SPECIALIST:"Uitgelichte specialist"}}};var C$=FA.en.names;var DA=(e,o)=>{let n=$u[e];return e==="testimonial"&&/^testimonial_2(_|$)/.test(o)?!1:o===n||o.startsWith(`${n}_`)};function db(e){let o=new Set;for(let n of JSON.stringify(e).matchAll(/\{(\w+)\}/g)){let r=Yt(n[1]??"");r?.source==="specialists"&&o.add(r.field)}return Ay.filter(n=>Array.from(o).some(r=>DA(n,r)))}function _A(e){let o=an(e).map(r=>r.source),n=db(e).map(r=>r==="testimonial2"?"testimonial":r);return[...new Set(n),...o.includes("matters")?["matters"]:[],...o.includes("testimonials")?["testimonials"]:[],...o.includes("publications")?["publications"]:[]]}var cm=["testimonial","practice","industry","publication","matters","testimonials","publications"];function dm(e){let o=e.content??_A(e.layout);return cm.filter(n=>o.includes(n))}function pb(e,o){let n=db(o);return n.length?e.map(r=>{let i={...r.values};for(let a of n){let s=Dr(Ly[a],1,!1)[0],l=Fy(a,{id:`${a}-sample`,values:{...s?.values,...a==="practice"&&r.values.practice?{name:r.values.practice}:{}}});for(let[p,c]of Object.entries(l))i[p]||(i={...i,[p]:c})}return{...r,values:i}}):[...e]}var NA={TEMPLATE_IN_USE:"templates.in_use",TEMPLATE_SLIDE_IN_USE:"templates.slide_in_use",TEMPLATE_LAST_SLIDE:"templates.last_slide",TEMPLATE_SLIDE_ONLY_SLIDES:"templates.slide_usage.only_slides_error",TEMPLATE_VERSION_LIMIT:"templates.version_limit",TEMPLATE_SLIDE_USAGE_CHANGED:"templates.slide_usage.changed"},BA={TEMPLATE_VERSION_LIMIT:{max:Oo}},OA=/^[\s\S]+? is not valid: ([\s\S]+)$/;function On(e,o){let n=e.trim(),r=NA[n];if(r)return o(r,BA[n]);let i=OA.exec(e.trim());return i?o("templates.invalid_design",{detail:i[1],interpolation:{escapeValue:!1}}):e}function nc(e,o){return e instanceof Error&&e.message.trim()===o}var pm=t("@/graphql");function GA(e,o){if(!e.startsWith("/"))return e;let n=`/api${e}`;return o?`${n}${n.includes("?")?"&":"?"}access_token=${encodeURIComponent(o)}`:n}var Gn=e=>o=>GA(o,e),RV=(0,pm.graphql)(`
	fragment PitchSlideRender on PitchSlide {
		id
		order
		variantId
		version
		included
		type
		name
		layout
		fields
		settings
		values
		styles
		itemIds
		itemOptions
		links
		linkedTexts {
			fieldKey
			source
			id
			ownerId
			title
			language
			content
		}
		items
		templateSlideId
		images {
			fieldKey
			fileId
		}
	}
`);var EV=(0,pm.graphql)(`
	fragment DeckTemplateCard on DeckTemplate {
		id
		name
		description
		output
		theme
		pitchCount
		createdAt
		slides {
			id
			order
			type
			name
			fields
			layout
		}
	}
`);var ub=e=>e??{background:"FFFFFF",elements:[]},mb=e=>e??[];var fb=e=>e.findIndex(o=>o.type==="TITLE");function ra(e){let o=fb(e);return o<=0?e:[e[o],...e.slice(0,o),...e.slice(o+1)]}function um(e,o,n){let r=o+n;if(o<0||o>=e.length||r<0||r>=e.length)return!1;let i=fb(e);return!(o===i&&n>0)&&!(r===i&&n<0)}var zA=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function gb(e){let o=zA.exec(e.trim())?.[1];if(!o)return null;let n=o.length===3?o.replace(/./g,i=>i+i):o,r=i=>{let a=parseInt(n.slice(i,i+2),16)/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4};return .2126*r(0)+.7152*r(2)+.0722*r(4)}function mm(e,o){let n=gb(e),r=gb(o);return n===null||r===null?null:(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function fm(e,o,n,r){let i=mm(e,o);return i===null||i>=r?e:n}var Io=t("@/graphql");var yb=(0,Io.graphql)(`
	query DeckTemplateEditor($id: ID!) {
		deckTemplate(where: { id: $id }) {
			id
			name
			description
			instructions
			output
			theme
			pitchCount
			slides {
				id
				order
				type
				name
				variantName
				fields
				layout
				variants
				instructions
				settings
				usageCount
			}
		}
	}
`),bb=(0,Io.graphql)(`
	mutation DeckTemplateUpdate($id: ID!, $data: DeckTemplateUpdateInput!) {
		deckTemplateUpdate(where: { id: $id }, data: $data) {
			id
			name
			description
			instructions
			theme
		}
	}
`),rc=(0,Io.graphql)(`
	mutation DeckTemplateSlideUpdate($id: ID!, $data: DeckTemplateSlideUpdateInput!) {
		deckTemplateSlideUpdate(where: { id: $id }, data: $data) {
			id
			name
			type
			fields
			layout
			variantName
			variants
			instructions
			settings
		}
	}
`),Sb=(0,Io.graphql)(`
	mutation DeckTemplateSlidesReorder($id: ID!, $slideIds: [String!]!) {
		deckTemplateSlidesReorder(where: { id: $id }, data: { slideIds: $slideIds }) {
			id
			order
		}
	}
`),xb=(0,Io.graphql)(`
	mutation DeckTemplateSlideAdd($id: ID!, $data: DeckTemplateSlideAddInput!) {
		deckTemplateSlideAdd(where: { id: $id }, data: $data) {
			id
			order
			type
			name
			variantName
			fields
			layout
			variants
			instructions
			settings
			usageCount
		}
	}
`),Cb=(0,Io.graphql)(`
	mutation DeckTemplateSlideDelete($id: ID!, $force: Boolean, $pitchIds: [ID!]) {
		deckTemplateSlideDelete(where: { id: $id }, force: $force, pitchIds: $pitchIds) {
			id
		}
	}
`),Tb=(0,Io.graphql)(`
	mutation DeckTemplateSlidesCombine($id: ID!, $slideIds: [String!]!) {
		deckTemplateSlidesCombine(where: { id: $id }, data: { slideIds: $slideIds }) {
			id
			variantName
			variants
			instructions
		}
	}
`),Ib=(0,Io.graphql)(`
	mutation DeckTemplateSlideRemoveRepeats($id: ID!) {
		deckTemplateSlideRemoveRepeats(where: { id: $id }) {
			id
			variants
		}
	}
`),wb=(0,Io.graphql)(`
	query DeckTemplateSlideUsages($id: ID!) {
		deckTemplateSlideUsages(where: { id: $id }) {
			id
			title
			slides
			onlySlides
			trashed
		}
	}
`),vb=(0,Io.graphql)(`
	mutation DeckTemplateSetFormat($id: ID!, $format: String!) {
		deckTemplateSetFormat(where: { id: $id }, data: { format: $format }) {
			id
			theme
		}
	}
`),NV=(0,Io.graphql)(`
	mutation DeckTemplateDuplicate($id: ID!) {
		deckTemplateDuplicate(where: { id: $id }) {
			id
			name
		}
	}
`),BV=(0,Io.graphql)(`
	mutation DeckTemplateDelete($id: ID!) {
		deckTemplateDelete(where: { id: $id }) {
			id
		}
	}
`),OV=(0,Io.graphql)(`
	mutation DeckTemplateCreateWebsite($data: DeckTemplateCreateWebsiteInput!) {
		deckTemplateCreateWebsite(data: $data) {
			id
			name
		}
	}
`),GV=(0,Io.graphql)(`
	mutation DeckTemplateCreate($data: DeckTemplateCreateInput!) {
		deckTemplateCreate(data: $data) {
			id
			name
		}
	}
`),ic=(0,Io.graphql)(`
	query CollectionItemsSample($source: DeckCollection!, $language: Language!, $first: Int) {
		collectionItems(source: $source, language: $language, first: $first) {
			id
			values
			imageUrl
			imageFileId
			color
		}
	}
`),ac=e=>({id:e.id,values:e.values??{},imageUrl:e.imageUrl??null,imageFileId:e.imageFileId??null,color:e.color??void 0}),Si=e=>({id:e.id,order:e.order,type:e.type,name:e.name,instructions:xn(e.instructions)?e.instructions:null,settings:e.settings??{},fields:mb(e.fields),layout:ub(e.layout),variantName:e.variantName??"",variants:e.variants??[],usageCount:e.usageCount}),cs=e=>e,kb=["primary","accent","text","muted","background","light","onPrimary"];var gm=e=>e.elements.find(o=>o.kind==="repeat");var ia=(e,o,n)=>({prospectName:e,date:sm(new Date,o),slideNumber:n});function Pb(e){let o=Ji(e.layout,e.fields,!1,3);return{id:e.id,name:e.name,type:e.type,included:!0,settings:e.settings,layout:e.layout,fields:e.fields,values:{},styles:{},items:o.items}}var Cn=e=>JSON.parse(JSON.stringify(e));function HA(e,o,n){let r=new Map;for(let i of o){if(i.kind==="image")continue;let a=tn(i)?Qi(ns(i,{})):ns(i,{});a.trim()&&r.set(i.key,a)}return n&&r.set("slide_number",String(n)),{...e,elements:e.elements.map(i=>i.kind==="text"?{...i,text:i.text.replace(/\{(\w+)\}/g,(a,s)=>r.get(s)??a)}:i)}}var sc=(e,o,n,r=!0)=>Br({...Ji(HA(e.layout,e.fields,n.slideNumber),e.fields,r),values:Object.fromEntries(e.fields.map(i=>[i.key,i.defaultValue??""]))},o,n,{showPlaceholders:r}),hb=e=>({background:e.layout.background,elements:e.layout.elements.filter(o=>o.kind!=="repeat"),fields:[...e.fields].sort((o,n)=>o.key.localeCompare(n.key))}),UA=(e,o)=>[e.layout,...(e.variants??[]).map(n=>n.layout)].map(n=>To(n,o)??0);function Rb(e,o=()=>!0){let n=[];for(let i of e){let a=gm(i.layout);if(!a)continue;let s=[i.type,a.source,a.repeatSlide?"per-item":"",...i.fields.map(c=>c.key).sort()].join("|"),l=UA(i,a.source),p=o(i)?n.find(c=>c.key===s&&l.every(u=>!c.spots.has(u))&&c.versions+l.length<=Oo+1&&!!c.members[0]&&ea(hb(c.members[0]),hb(i))):void 0;p?(p.members.push(i),l.forEach(c=>p.spots.add(c)),p.versions+=l.length):n.push({key:s,members:[i],spots:new Set(l),versions:l.length})}let r=i=>To(i.layout)??0;return n.filter(i=>i.members.length>1).map(({members:[i,...a]})=>i?[i,...a.sort((s,l)=>r(s)-r(l))]:a)}var Eb=e=>ib(pr(e));var Va=t("@/services/apollo/refetchQueries"),h0=t("@/services/jotai/atoms/accessToken");var Ab=t("react"),Lb=t("@mantine/core"),Fb=t("@/components/PresentationBuilder/fonts"),hm=t("react/jsx-runtime"),lc=(0,Ab.forwardRef)(({label:e,value:o,...n},r)=>(0,hm.jsx)("div",{ref:r,...n,children:(0,hm.jsx)(Lb.Text,{size:"sm",sx:{fontFamily:(0,Fb.fontStackFor)(o)},children:e})}));lc.displayName="FontSelectItem";var Mb=t("next-i18next"),Db=t("@mantine/core"),cc=t("@fortawesome/free-solid-svg-icons"),_b=t("@fortawesome/react-fontawesome"),ym=t("react/jsx-runtime");function Nb({output:e,...o}){let{t:n}=(0,Mb.useTranslation)("presentation_builder"),r=e==="WEBSITE";return(0,ym.jsx)(Db.Badge,{size:"md",radius:"sm",variant:"filled",color:r?"grape":"primary",leftSection:(0,ym.jsx)(_b.FontAwesomeIcon,{icon:r?cc.faGlobe:cc.faDisplay,style:{fontSize:10,marginTop:3}}),...o,sx:{textTransform:"none",flexShrink:0,...o.sx??{}},children:n(r?"output.WEBSITE":"output.PRESENTATION")})}var ms=t("react"),qb=t("next-i18next"),Yb=t("@mantine/core"),vo=t("@fortawesome/free-solid-svg-icons"),$n=t("@fortawesome/react-fontawesome");function Bb(e,o){if(e.type==="TITLE")return!0;let n=Fo[e.type]??{};return n.list||n.featured?[n.featured,n.list].some(r=>!!r&&(e.items[r]?.length??0)>0):e.fields.some(r=>r.key!=="title"&&rn(is(r,e.values),o).trim().length>0)}var vm=t("@/components/PresentationBuilder/fonts");var $A={light:["#026AA2","#1570EF","#444CE7","#6938EF","#C11574","#E31B54","#C4320A"].map(e=>({fill:e,text:"#FFFFFF"})),dark:["#7CD4FD","#84CAFF","#A4BCFD","#BDB4FE","#FAA7E0","#FEA3B4","#FEB273"].map(e=>({fill:e,text:"#101828"}))},VA={light:{fill:"#667085",text:"#FFFFFF"},dark:{fill:"#98A2B3",text:"#101828"}};function zn(e,o){return $A[o][e-1]??VA[o]}var ds=t("react/jsx-runtime"),aa=e=>{let o=e?.[0];return o?{outline:`2px solid ${zn(o.colourIndex,"light").fill}`,outlineOffset:2}:{}};function Tn({users:e}){return e?.length?(0,ds.jsx)("span",{"aria-hidden":!0,"data-testid":"slide-field-tags",style:{position:"absolute",top:-12,right:4,display:"flex",gap:4,pointerEvents:"none",zIndex:3},children:e.map(o=>{let{fill:n,text:r}=zn(o.colourIndex,"light");return(0,ds.jsx)("span",{className:"ph-no-capture",style:{background:n,color:r,fontSize:10,fontWeight:600,lineHeight:"16px",height:16,padding:"0 4px",borderRadius:4,userSelect:"none"},children:o.initials||o.name.charAt(0)},o.userId)})}):null}function bm({users:e,style:o}){return e?.length?(0,ds.jsx)("div",{"aria-hidden":!0,"data-testid":"slide-presence-frame",style:{...o,pointerEvents:"none",zIndex:3,...aa(e)},children:(0,ds.jsx)(Tn,{users:e})}):null}var zb=t("react"),us=t("@mantine/core");var WA=/(https?:\/\/[^\s<>()]+[^\s<>().,;:!?]|www\.[^\s<>()]+[^\s<>().,;:!?]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;function KA(e){return e.includes("@")&&!/^https?:/.test(e)?`mailto:${e}`:/^www\./.test(e)?`https://${e}`:e}function Ob(e){return e.split(WA).map((o,n)=>n%2===0?{type:"text",value:o}:{type:"link",value:o,href:KA(o)}).filter(o=>o.value!=="")}var uo=t("react/jsx-runtime");function qA(e){return Ob(e).map((o,n)=>o.type==="text"?o.value:(0,uo.jsx)(us.Anchor,{href:o.href,target:"_blank",rel:"noopener noreferrer",children:o.value},n))}var Gb=e=>{let o=e&&Ry(e);return o?{listStyleType:o}:void 0},ps=(e,o)=>(0,uo.jsx)("span",{style:{fontWeight:e.bold?700:void 0,fontStyle:e.italic?"italic":void 0,textDecoration:e.underline?"underline":void 0},children:e.link?(0,uo.jsx)(us.Anchor,{href:e.link,target:"_blank",rel:"noopener noreferrer",inherit:!0,children:e.text}):qA(e.text)},o);function Sm({value:e,size:o=14,gap:n=0,className:r}){let i=[];for(let a of Yu(e??"")){let s=i[i.length-1];a.list&&s?.list===a.list&&s.items[0]?.marker===a.marker?s.items.push(a):i.push({list:a.list,items:[a]})}return(0,uo.jsx)(us.Box,{className:r,sx:{fontSize:o??void 0,lineHeight:1.5,overflowWrap:"anywhere","& ul, & ol":{margin:`${n?n/2:.15}em 0`,paddingLeft:22},"& p":{margin:`0 0 ${n}em`,minHeight:n?void 0:"1.5em"},"& p:empty":{minHeight:n?0:"1.5em",margin:0},"& table":{borderCollapse:"collapse",width:"100%",margin:`${n/2}em 0 ${n||.5}em`,fontSize:"0.92em"},"& th, & td":{border:"1px solid rgba(0,0,0,0.15)",padding:"6px 9px",textAlign:"left",verticalAlign:"top",overflowWrap:"normal",wordBreak:"normal",minWidth:72},"& th":{fontWeight:700,background:"rgba(0,0,0,0.04)"}},children:i.map((a,s)=>a.list==="bullet"?(0,uo.jsx)("ul",{style:Gb(a.items[0]),children:a.items.map((l,p)=>(0,uo.jsx)("li",{children:l.runs.map(ps)},p))},s):a.list==="number"?(0,uo.jsx)("ol",{style:Gb(a.items[0]),children:a.items.map((l,p)=>(0,uo.jsx)("li",{children:l.runs.map(ps)},p))},s):(0,uo.jsx)(zb.Fragment,{children:a.items.map((l,p)=>{let c=l.table;return c?(0,uo.jsx)("div",{style:{overflowX:"auto"},children:(0,uo.jsx)("table",{children:(0,uo.jsx)("tbody",{children:c.rows.map((u,C)=>(0,uo.jsx)("tr",{children:u.map((g,d)=>c.header&&C===0?(0,uo.jsx)("th",{children:g.map(ps)},d):(0,uo.jsx)("td",{children:g.map(ps)},d))},C))})})},p):(0,uo.jsx)("p",{children:l.runs.map(ps)},p)})},s))})}var wo=t("react"),Hn=t("@mantine/core"),Vb=t("@mantine/hooks"),Wb=t("lodash");var dc=/\[[^[\]\n]+\](?!\()/g,sa=e=>new RegExp(dc.source).test(e);var Im=t("@/components/PresentationBuilder/fonts");var ue=t("react/jsx-runtime"),Cm=34,pc=e=>e?{borderRadius:"50%",overflow:"hidden"}:{},YA=(0,Hn.createStyles)(e=>({editable:{cursor:"pointer",borderRadius:3,transition:"outline-color 120ms",outline:"2px dashed transparent",outlineOffset:4,"&:hover":{outlineColor:e.fn.rgba(e.colors.primary[5],.8)}},active:{outline:`2px solid ${e.colors.primary[5]} !important`},fieldInput:{display:"block",minHeight:34,maxHeight:240,overflowY:"auto",padding:"6px 8px",border:`1px solid ${e.colors.gray[4]}`,borderRadius:e.radius.sm,background:e.white,color:e.black,fontSize:e.fontSizes.sm,lineHeight:1.45,whiteSpace:"pre-wrap","&:focus-within":{borderColor:e.colors.primary[5]}},inline:{outline:"none",cursor:"text",minHeight:"1em",caretColor:e.colors.primary[6],"&:empty::before":{content:"attr(data-placeholder)",opacity:.4,fontStyle:"italic",fontWeight:400},"& ul, & ol":{margin:0,paddingLeft:"1.3em"},"& ul":{listStyleType:"disc"},"& a":{color:"inherit",textDecoration:"underline"}},repeatArea:{cursor:"pointer",borderRadius:6,outline:"2px dashed transparent",outlineOffset:6,"&:hover":{outlineColor:e.fn.rgba(e.colors.primary[5],.8)},"&:hover > .klerq-repeat-chip":{opacity:1,visibility:"visible"}},repeatChip:{position:"absolute",top:-Cm,right:0,opacity:0,visibility:"hidden",transition:"opacity 120ms, visibility 120ms",background:e.colors.primary[6],color:"white",fontFamily:e.fontFamily,fontSize:13,fontWeight:600,padding:"4px 12px",borderRadius:6,whiteSpace:"nowrap"},imageEmpty:{border:`2px dashed ${e.fn.rgba(e.colors.gray[6],.55)}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,color:e.colors.gray[6],fontFamily:e.fontFamily,fontSize:14,fontWeight:500,background:e.fn.rgba("#ffffff",.6),textAlign:"center",padding:8},repeatEmpty:{position:"absolute",inset:0,border:`3px dashed ${e.fn.rgba(e.colors.gray[6],.5)}`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:16,color:e.colors.gray[6],fontFamily:e.fontFamily,fontSize:16,fontWeight:500,background:e.fn.rgba("#ffffff",.5)},grip:{position:"absolute",bottom:-11,right:-11,zIndex:4,width:20,height:20,borderRadius:6,background:e.colors.primary[6],color:e.white,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,lineHeight:1,fontStyle:"normal",fontWeight:700,cursor:"move",touchAction:"none",userSelect:"none",boxShadow:"0 1px 3px rgba(16,24,40,0.3)"},handle:{position:"absolute",zIndex:4,background:e.white,border:`2px solid ${e.colors.primary[6]}`,borderRadius:4,touchAction:"none"},handleWidth:{right:-6,top:"50%",width:10,height:22,marginTop:-11,cursor:"ew-resize"},handleHeight:{bottom:-6,left:"50%",width:22,height:10,marginLeft:-11,cursor:"ns-resize"},required:{position:"absolute",top:-9,right:-9,zIndex:3,width:18,height:18,borderRadius:"50%",background:e.colors.red[6],color:e.white,boxShadow:"0 0 0 2px white",fontFamily:e.fontFamily,fontSize:12,fontWeight:800,fontStyle:"normal",lineHeight:"18px",textAlign:"center",cursor:"help",userSelect:"none"},clip:{position:"absolute",inset:0,overflow:"clip",pointerEvents:"none","& > *":{pointerEvents:"auto"}}})),Hb={top:"flex-start",middle:"center",bottom:"flex-end"},Ub=.2,QA="[data-field-key], [data-field-editor], [data-item-source], [data-repeat-area], [data-table-key], [data-item-card]",uc=.06,XA=e=>e,xm=e=>e.shiftKey||e.metaKey||e.ctrlKey,jA=e=>e,JA=()=>!0,$b=()=>!1;function Un({slide:e,imageUrl:o=XA,interactive:n,activeField:r,selectedFields:i,onFieldClick:a,onRepeatClick:s,onRepeatDoubleClick:l,onItemClick:p,onItemDoubleClick:c,selectedItem:u,onTableClick:C,tableLabel:g,onImageClick:d,fieldLabel:y=jA,inlineValue:v,onInlineChange:h,isMultiline:F=JA,isRich:P=$b,isTypedPart:m=$b,renderRichInline:N,fieldPresence:E,repeatPresence:I,itemPresence:D,onTabField:x,repeatLabels:G,imageLabel:M,requiredLabel:A,onBackgroundClick:L,onMoveField:q,moveLabel:X,onResizeField:Se,resizeLabel:ke,radius:Re=6,shadow:oe,dimmed:Ie,maxHeight:$e,className:De}){let{classes:me,cx:Ge}=YA(),{ref:R,width:ne}=(0,Vb.useElementSize)();nL(),(0,wo.useLayoutEffect)(()=>{R.current&&oL(R.current)});let{w:B,h:ee}=e.size,Ve=ne/B,Ee=k=>k*Ve,de=k=>k*Ve/72,pe=k=>({position:"absolute",left:Ee(k.box.x),top:Ee(k.box.y),width:Ee(k.box.w),height:Ee(k.box.h),transform:k.rotate?`rotate(${k.rotate}deg)`:void 0}),_e=i&&i.length>1?i:null,Tt=k=>!!k&&(_e?_e.includes(k):k===r),yt=k=>!!u&&u.source===k.source&&u.itemId===k.itemId,Pt=k=>n&&k&&c?we=>{we.stopPropagation(),c(k)}:void 0,[bt,It]=(0,wo.useState)(null),co=k=>{if(!k||!bt?.keys.includes(k))return{};if(bt.mode==="move")return{translate:`${bt.dx}px ${bt.dy}px`};if(bt.mode==="width")return{width:Math.max(Ee(Ub),bt.from.w+bt.dx)};let we=Math.max(Ee(Ub),bt.from.h+bt.dy);return{height:we,minHeight:we}},gn=(k,we,te)=>se=>{se.preventDefault(),se.stopPropagation();let Ae={x:se.clientX,y:se.clientY},mt=se.currentTarget.parentElement,je={w:mt?.offsetWidth||Ee(te.w),h:mt?.offsetHeight||Ee(te.h)},no=we==="move"&&_e?_e:[k],ve={dx:0,dy:0},ro=jt=>{ve={dx:we==="height"?0:jt.clientX-Ae.x,dy:we==="width"?0:jt.clientY-Ae.y},It({keys:no,mode:we,from:je,...ve})},wt=()=>{window.removeEventListener("pointermove",ro),window.removeEventListener("pointerup",wt),It(null),!(Ve<=0||Math.hypot(ve.dx,ve.dy)<=2)&&(we==="move"?q?.(no,ve.dx/Ve,ve.dy/Ve):Se?.(k,ve.dx&&(je.w+ve.dx-Ee(te.w))/Ve,ve.dy&&(je.h+ve.dy-Ee(te.h))/Ve))};window.addEventListener("pointermove",ro),window.addEventListener("pointerup",wt)},xo=(k,we)=>n&&k&&Tt(k)?(0,ue.jsxs)(ue.Fragment,{children:[q&&(0,ue.jsx)("span",{className:me.grip,title:X,"aria-label":X,role:"button",onClick:te=>te.stopPropagation(),onPointerDown:gn(k,"move",we),children:"\u283F"}),Se&&!_e&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("span",{className:Ge(me.handle,me.handleWidth),title:ke,"aria-label":ke?`${ke} (width)`:void 0,role:"button",onClick:te=>te.stopPropagation(),onPointerDown:gn(k,"width",we)}),(0,ue.jsx)("span",{className:Ge(me.handle,me.handleHeight),title:ke,"aria-label":ke?`${ke} (height)`:void 0,role:"button",onClick:te=>te.stopPropagation(),onPointerDown:gn(k,"height",we)})]})]}):null,Vo=k=>!!n&&(k.kind==="text"&&(k.fieldKeys.some(Tt)||Tt(k.styleKey))||k.kind==="logo"&&Tt(k.styleKey));aL(!!n);let Ft=n&&A?(0,ue.jsx)(Hn.Tooltip,{label:A,withArrow:!0,withinPortal:!0,children:(0,ue.jsx)("span",{className:me.required,"aria-label":A,children:"!"})}):null,Wo=(k,we)=>{switch(k.kind){case"shape":return(0,ue.jsx)("div",{style:{...pe(k),background:`#${k.fill}`,borderRadius:k.round?"50%":Ee(k.radius),boxShadow:k.line?`inset 0 0 0 1px #${k.line}`:void 0}},we);case"image":{if(!k.src&&k.itemSource){if(!n)return null;let Ae=k.itemSource;return(0,ue.jsxs)("div",{className:Ge(me.editable,me.imageEmpty),style:{...pe(k),...pc(k.round)},"data-item-source":Ae,onClick:()=>s?.(Ae),children:[(0,ue.jsx)("span",{style:{fontSize:28,lineHeight:1},children:"\uFF0B"}),G?.chip(Ae),Ft]},we)}let te=k.fieldKey,se=n&&!!te&&!!d;return k.src?k.href&&!n?(0,ue.jsx)("a",{href:k.href,target:"_blank",rel:"noopener noreferrer",children:(0,ue.jsx)("img",{src:o(k.src),alt:"",style:{...pe(k),objectFit:k.fit,...pc(k.round)}})},we):(0,ue.jsx)("img",{src:o(k.src),alt:"",className:se?me.editable:void 0,"data-field-key":se?te:void 0,onClick:se&&te?()=>d?.(te):void 0,style:{...pe(k),objectFit:k.fit,...pc(k.round)}},we):!se||!te?null:(0,ue.jsxs)("div",{className:Ge(me.editable,me.imageEmpty),style:{...pe(k),...pc(k.round)},"data-field-key":te,onClick:()=>d?.(te),children:[(0,ue.jsx)("span",{style:{fontSize:28,lineHeight:1},children:"\uFF0B"}),M,Ft]},we)}case"logo":{let te=n&&q?k.styleKey:void 0;return(0,ue.jsxs)("div",{className:Ge(te&&me.editable,te&&Tt(te)&&me.active),"data-field-key":te,onClick:te?se=>{se.stopPropagation(),a?.(te,xm(se))}:void 0,onDoubleClick:te?Pt(k.itemRef):void 0,style:{...pe(k),...te?{zIndex:2}:{},...co(te),display:"flex",alignItems:"center",justifyContent:"center"},children:[te&&xo(te,k.box),k.logoUrl?(0,ue.jsx)("img",{src:o(k.logoUrl),alt:k.name,style:{width:"100%",height:"100%",objectFit:k.round||k.photo?"cover":"contain",...k.round?{borderRadius:"50%"}:{}}}):(0,ue.jsx)("div",{style:{width:"100%",height:"100%",borderRadius:k.round?"50%":Ee(Math.min(k.box.w,k.box.h)*.18),background:`#${k.color}`,color:`#${k.style.color}`,fontFamily:(0,Im.fontStackFor)(k.style.fontFace),fontWeight:700,fontSize:de(k.style.fontSize),display:"flex",alignItems:"center",justifyContent:"center"},children:k.initials})]},we)}case"text":{let te=n&&!!k.itemSource&&k.fieldKeys.length===0,se=n&&!te&&k.fieldKeys.length===0&&k.styleKey?k.styleKey:null,Ae=n&&(k.fieldKeys.length>0||te||!!se);if(k.isEmpty&&!Ae)return null;let mt=k.style,je=(k.fit??"shrink")==="shrink",no=eL(mt,de,je),ve=k.editKey??(se&&m(se)?se:void 0),ro=(0,Wb.uniqBy)([...(ve?[ve]:k.fieldKeys).flatMap(_=>E?.[_]??[]),...te&&k.itemSource?I?.[k.itemSource]??[]:[]],"userId");if(Ae&&ve&&ve===r&&v&&h){let _=P(ve),ae=x?fe=>x(ve,fe):void 0;return(0,ue.jsxs)("div",{className:Ge(me.editable,me.active),"data-field-editor":ve,"data-shrink-fit":je||void 0,style:{...pe(k),...k.fit==="grow"?{height:"auto",minHeight:Ee(k.box.h)}:{},display:"flex",flexDirection:"column",justifyContent:Hb[mt.valign],...co(ve),...aa(ro)},children:[(0,ue.jsx)(Tn,{users:ro}),xo(ve,k.box),_&&N?N({fieldKey:ve,className:me.inline,style:no,placeholder:`[${y(ve)}]`,onTab:ae}):(0,ue.jsx)(fc,{className:me.inline,style:no,value:v(ve),placeholder:`[${y(ve)}]`,multiline:F(ve),onTab:ae,onChange:fe=>h(ve,fe)})]},`edit-${ve}`)}let wt=k.fieldKeys[0],jt=k.itemSource,zt=Ae&&!k.editKey&&r&&k.fieldKeys.includes(r)&&v&&h?r:null,S=Ae?k.fieldKeys.find(Tt)??null:null,O=(0,ue.jsxs)("div",{className:Ge(Ae&&me.editable,Ae&&(k.fieldKeys.some(Tt)||Tt(se))&&me.active),"data-field-key":se??(Ae&&wt&&!(te&&jt)?wt:void 0),"data-item-source":te&&jt?jt:void 0,"data-shrink-fit":je||void 0,onClick:se?_=>{_.stopPropagation(),a?.(se,xm(_))}:te&&jt?()=>s?.(jt):Ae&&wt?_=>a?.(wt,xm(_)):void 0,onDoubleClick:te&&jt?()=>l?.(jt):se?Pt(k.itemRef):void 0,style:{...pe(k),display:"flex",flexDirection:"column",justifyContent:Hb[mt.valign],...no,overflow:"visible",...se?{zIndex:2}:{},...co(se??S),...aa(ro)},children:[(0,ue.jsx)(Tn,{users:ro}),xo(se??S,k.box),k.isEmpty?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)("span",{style:{opacity:.4,fontStyle:"italic",fontWeight:400},children:["[",(k.fieldKeys.length?k.fieldKeys:k.itemKeys??[]).map(y).join(" / "),"]"]}),Ft]}):k.href&&!n?(0,ue.jsx)("a",{href:k.href,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"},children:k.text}):k.rich?(0,ue.jsx)(sL,{paragraphs:k.rich,markFillIns:n}):n?Kb(k.text):k.text,!k.isEmpty&&n&&!k.inTable&&sa(k.text)&&Ft]},we);if(!zt||!v||!h)return O;let U=x?_=>x(zt,_):void 0,J=`[${y(zt)}]`;return(0,ue.jsxs)(Hn.Popover,{opened:!0,position:"bottom-start",width:"target",withinPortal:!0,shadow:"md",trapFocus:!1,returnFocus:!1,closeOnClickOutside:!1,closeOnEscape:!1,styles:{dropdown:{minWidth:280}},children:[(0,ue.jsx)(Hn.Popover.Target,{children:O}),(0,ue.jsxs)(Hn.Popover.Dropdown,{p:"xs","data-field-editor":zt,children:[(0,ue.jsx)(Hn.Text,{size:"xs",weight:600,mb:4,children:y(zt)}),P(zt)&&N?N({fieldKey:zt,className:Ge(me.inline,me.fieldInput),style:{},placeholder:J,onTab:U}):(0,ue.jsx)(fc,{className:Ge(me.inline,me.fieldInput),style:{},value:v(zt),placeholder:J,multiline:F(zt),onTab:U,onChange:_=>h(zt,_)},zt)]})]},we)}case"tableArea":{if(!n)return null;let te=k.fieldKey,se=e.nodes.some(Ae=>Ae.kind==="text"&&Ae.inTable===te&&sa(Ae.text));return(0,ue.jsxs)("div",{className:me.repeatArea,"data-table-key":te,style:{...pe(k),zIndex:2},onClick:Ae=>{Ae.stopPropagation(),C?.(te)},children:[se&&Ft,g&&(0,ue.jsx)("div",{className:Ge(me.repeatChip,"klerq-repeat-chip"),style:Ee(k.box.y)<Cm?{top:8,right:8}:void 0,children:g})]},we)}case"repeatArea":{if(!n)return null;let te=k.source,se=Ee(k.box.y)<Cm;return(0,ue.jsxs)("div",{className:me.repeatArea,"data-repeat-area":!0,style:pe(k),onClick:()=>s?.(te),children:[k.count===0&&G&&(0,ue.jsx)("div",{className:me.repeatEmpty,children:G.empty(te)}),k.count===0&&Ft,G&&(0,ue.jsx)("div",{className:Ge(me.repeatChip,"klerq-repeat-chip"),style:se?{top:8,right:8}:void 0,children:G.chip(te)})]},we)}default:return null}},Ao=new Map;if(n&&p)for(let k of e.nodes){if(k.kind!=="text"&&k.kind!=="logo")continue;let we=k.itemRef;if(!we)continue;let te=`${we.source}:${we.itemId}`,se=Ao.get(te)?.box,Ae=Math.min(se?.x??k.box.x,k.box.x),mt=Math.min(se?.y??k.box.y,k.box.y);Ao.set(te,{ref:we,parts:!!Ao.get(te)?.parts||!!k.styleKey,box:{x:Ae,y:mt,w:Math.max(se?se.x+se.w:0,k.box.x+k.box.w)-Ae,h:Math.max(se?se.y+se.h:0,k.box.y+k.box.h)-mt}})}let hn=Array.from(Ao.entries()).map(([k,we])=>{let te=pe({box:{x:we.box.x-uc,y:we.box.y-uc,w:we.box.w+2*uc,h:we.box.h+2*uc}});return(0,ue.jsxs)(wo.Fragment,{children:[(0,ue.jsx)("div",{className:Ge(me.editable,yt(we.ref)&&me.active),"data-item-card":k,onClick:se=>{se.stopPropagation(),p?.(we.ref)},onDoubleClick:se=>{se.stopPropagation(),c?.(we.ref)},style:{...te,zIndex:we.parts?1:2}}),(0,ue.jsx)(bm,{users:D?.[k],style:te})]},`card-${k}`)}),Er=k=>{switch(k.kind){case"image":return!k.src&&k.itemSource?I?.[k.itemSource]:k.fieldKey?E?.[k.fieldKey]:void 0;case"logo":return k.styleKey?E?.[k.styleKey]:void 0;case"tableArea":return E?.[k.fieldKey];case"repeatArea":return I?.[k.source];default:return}};return(0,ue.jsxs)("div",{ref:R,className:De,"data-slide-canvas":n?"editor":void 0,onMouseDown:n&&L?k=>{k.target.closest(QA)||L()}:void 0,style:{position:"relative",width:wm(B,ee,$e),aspectRatio:`${B} / ${ee}`,margin:"0 auto",overflow:n?"visible":"hidden",borderRadius:Re,boxShadow:oe?"0 10px 30px rgba(15, 23, 42, 0.15), 0 2px 6px rgba(15, 23, 42, 0.08)":void 0,opacity:Ie?.45:1,background:`#${e.background}`},children:[n&&(0,ue.jsx)("style",{children:iL}),ne>0&&(0,ue.jsxs)("div",{style:{position:"absolute",inset:0},children:[e.nodes.map((k,we)=>{let te=Wo(k,we),se=te&&n?Er(k):void 0,Ae=te&&ZA(k,e.size)&&!Vo(k)?(0,ue.jsx)("div",{className:me.clip,style:{borderRadius:Re},children:te},we):te;return se?.length?(0,ue.jsxs)(wo.Fragment,{children:[Ae,(0,ue.jsx)(bm,{users:se,style:pe(k)})]},we):Ae}),hn]})]})}var mc=.005;function ZA(e,o){let{x:n,y:r,w:i,h:a}=e.box,s=(e.rotate??0)*Math.PI/180,l=Math.abs(Math.cos(s)),p=Math.abs(Math.sin(s)),c=(i*l+a*p)/2,u=(i*p+a*l)/2,C=n+i/2,g=r+a/2;return C-c<-mc||g-u<-mc||C+c>o.w+mc||g+u>o.h+mc}function wm(e,o,n){return n==="none"?"100%":n?`min(100%, calc(${n} * ${(e/o).toFixed(4)}))`:`${Math.min(1,.75*e/o)*100}%`}function eL(e,o,n=!1){let r=i=>n?`calc(${i}px * var(--text-fit, 1))`:i;return{textAlign:e.align,fontFamily:(0,Im.fontStackFor)(e.fontFace),fontSize:r(o(e.fontSize)),fontWeight:e.bold?700:400,fontStyle:e.italic?"italic":"normal",textDecoration:e.underline?"underline":void 0,textTransform:e.uppercase?"uppercase":void 0,color:`#${e.color}`,lineHeight:e.lineSpacing,letterSpacing:e.letterSpacing?r(o(e.letterSpacing)):void 0,whiteSpace:"pre-wrap",overflowWrap:"break-word"}}var tL=.5;function oL(e){for(let o of Array.from(e.querySelectorAll("[data-shrink-fit]"))){o.style.setProperty("--text-fit","1");let n=o.offsetHeight,{height:r,minHeight:i}=o.style;o.style.height="auto",o.style.minHeight="0";let a=1;for(;n>0&&o.offsetHeight>n+.5&&a>tL;)a*=.95,o.style.setProperty("--text-fit",String(a));o.style.height=r,o.style.minHeight=i}}function nL(){let[,e]=(0,wo.useState)(0);(0,wo.useEffect)(()=>{let o=typeof document<"u"?document.fonts:void 0;if(!o?.addEventListener)return;let n=()=>e(r=>r+1);return o.addEventListener("loadingdone",n),()=>o.removeEventListener("loadingdone",n)},[])}function Kb(e){let o=[],n=0;for(let r of e.matchAll(dc)){let i=r.index??0;o.push(e.slice(n,i)),o.push((0,ue.jsx)("mark",{"data-fill-in":!0,style:rL,children:r[0]},i)),n=i+r[0].length}return o.length?(o.push(e.slice(n)),(0,ue.jsx)("span",{children:o})):e}var rL={background:"#FFF3A3",color:"#1F2328",borderRadius:2,padding:"0 1px"},Tm="klerq-fill-in",iL=`::highlight(${Tm}) { background-color: #FFF3A3; color: #1F2328; }`;function aL(e){(0,wo.useEffect)(()=>{let o=typeof CSS<"u"?CSS.highlights:void 0;if(!e||!o||typeof Highlight>"u")return;let n=0,r=()=>{n=0;let s=[];document.querySelectorAll("[data-field-editor] [contenteditable], [data-field-editor][contenteditable]").forEach(l=>{let p=document.createTreeWalker(l,NodeFilter.SHOW_TEXT);for(let c=p.nextNode();c;c=p.nextNode())for(let u of(c.textContent??"").matchAll(dc)){let C=document.createRange();C.setStart(c,u.index??0),C.setEnd(c,(u.index??0)+u[0].length),s.push(C)}}),o.set(Tm,new Highlight(...s))},i=()=>{n||(n=requestAnimationFrame(r))},a=new MutationObserver(i);return a.observe(document.body,{subtree:!0,childList:!0,characterData:!0}),i(),()=>{a.disconnect(),cancelAnimationFrame(n),o.delete(Tm)}},[e])}function sL({paragraphs:e,markFillIns:o=!1}){return(0,ue.jsx)("div",{children:e.map((n,r)=>{let i=n.runs.some(a=>a.text)?n.runs.map((a,s)=>(0,ue.jsx)("span",{style:{fontWeight:a.bold?700:void 0,fontStyle:a.italic?"italic":void 0,textDecoration:a.underline?"underline":void 0},children:a.link&&o?(0,ue.jsx)("span",{"data-link":a.link,style:{textDecoration:"underline"},children:a.text}):a.link?(0,ue.jsx)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:a.text}):o?Kb(a.text):a.text},s)):(0,ue.jsx)("br",{});return n.list?(0,ue.jsxs)("div",{style:{display:"flex",textAlign:"left"},children:[(0,ue.jsx)("span",{style:{flex:"0 0 1.3em",textAlign:n.list==="number"?"right":"center",paddingRight:"0.35em",fontWeight:400,fontStyle:"normal",textDecoration:"none"},children:Ou(n)}),(0,ue.jsx)("span",{style:{flex:1,minWidth:0},children:i})]},r):(0,ue.jsx)("div",{children:i},r)})})}function fc({value:e,onChange:o,multiline:n,onTab:r,placeholder:i,className:a,style:s}){let l=(0,wo.useRef)(null),p=(0,wo.useRef)(null);return(0,wo.useEffect)(()=>{let u=l.current;u&&e!==p.current&&(u.innerText=e,p.current=e)},[e]),(0,wo.useEffect)(()=>{let u=l.current;if(!u)return;u.focus();let C=document.createRange();C.selectNodeContents(u),C.collapse(!1);let g=window.getSelection();g?.removeAllRanges(),g?.addRange(C)},[]),(0,ue.jsx)("div",{ref:l,className:a,style:s,contentEditable:"plaintext-only",suppressContentEditableWarning:!0,spellCheck:!0,"data-placeholder":i,onInput:()=>{let u=l.current;if(!u)return;let C=u.innerText===`
`?"":n?u.innerText.replace(/\n$/,""):u.innerText;p.current=C,o(C)},onKeyDown:u=>{u.key==="Enter"&&!n&&u.preventDefault(),u.key==="Escape"&&u.currentTarget.blur(),u.key==="Tab"&&r&&!u.ctrlKey&&!u.altKey&&!u.metaKey&&(u.preventDefault(),r(u.shiftKey?-1:1))},onPaste:u=>{u.preventDefault();let C=u.clipboardData.getData("text/plain");document.execCommand("insertText",!1,n?C:C.replace(/\s*\n\s*/g," "))}})}var H=t("react/jsx-runtime"),Vn=(e,o)=>`#${(e??o).replace("#","")}`,lL=(0,Yb.createStyles)((e,{t:o})=>{let n=o.colors??{},r=Vn(n.primary,"1F2A44"),i=Vn(n.accent,"5FB4BE"),a=Vn(n.text,"3D4136"),s=Vn(n.muted,"6B7280"),l=Vn(n.light,"F5F5F7"),p=Vn(n.onPrimary,"FFFFFF"),c=fm(i,r,p,3),u=fm(i,r,p,4.5),C=(0,vm.fontStackFor)(o.fonts?.heading??"Poppins"),g=(0,vm.fontStackFor)(o.fonts?.body??"Poppins"),d=e.colors.primary;return{site:{background:Vn(n.background,"FFFFFF"),color:a,fontFamily:g,fontSize:15,lineHeight:1.6,minHeight:"100%",printColorAdjust:"exact",WebkitPrintColorAdjust:"exact"},header:{position:"sticky",top:0,zIndex:20,background:r,borderBottom:`2px solid ${i}`,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(16px, 4vw, 56px)","@media print":{position:"static"}},logo:{height:38,maxWidth:200,objectFit:"contain"},firmName:{color:p,fontFamily:C,fontWeight:600,fontSize:18,letterSpacing:.5},headerButtons:{display:"flex",gap:8,position:"relative","@media print":{display:"none"}},headerButton:{display:"flex",alignItems:"center",gap:8,height:32,padding:"0 12px",border:`1px solid ${e.fn.rgba(p,.35)}`,borderRadius:4,background:"transparent",color:p,fontFamily:g,fontSize:12,fontWeight:600,cursor:"pointer","&:hover":{background:e.fn.rgba(p,.08)}},nav:{position:"absolute",top:40,right:0,width:320,maxHeight:"70vh",overflowY:"auto",background:"white",borderRadius:6,boxShadow:"0 12px 32px rgba(0,0,0,0.18)",padding:8},navItem:{display:"flex",gap:10,width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px 10px",borderRadius:4,cursor:"pointer",color:a,fontFamily:g,fontSize:13,"&:hover":{background:l},"& span:first-of-type":{color:i,fontWeight:600,minWidth:20}},hero:{background:r,color:p,minHeight:"min(560px, 72vh)",display:"flex",flexDirection:"column",justifyContent:"center",padding:"64px clamp(20px, 8vw, 112px)"},heroTitle:{fontFamily:C,color:c,fontSize:"clamp(30px, 4.4vw, 58px)",fontWeight:600,textTransform:"uppercase",lineHeight:1.15,margin:0,maxWidth:1e3},heroSubtitle:{fontSize:18,marginTop:14,opacity:.85,maxWidth:820},heroRule:{borderTop:`1px solid ${e.fn.rgba(p,.25)}`,maxWidth:1e3,margin:"36px 0 18px"},preparedFor:{fontSize:11,color:u,marginBottom:6},prospect:{display:"flex",alignItems:"center",gap:14,fontFamily:C,fontSize:26,fontWeight:500},prospectLogo:{width:52,height:52,borderRadius:6,background:"white",objectFit:"contain",padding:4},date:{fontSize:12,opacity:.6,marginTop:18},section:{padding:"64px clamp(20px, 5vw, 64px)",scrollMarginTop:72,position:"relative"},sectionAlt:{background:l},inner:{maxWidth:1180,margin:"0 auto"},number:{fontFamily:C,color:i,fontSize:46,fontWeight:300,lineHeight:1},title:{fontFamily:C,color:i,fontSize:"clamp(24px, 2.6vw, 34px)",fontWeight:600,textTransform:"uppercase",margin:"8px 0 0",lineHeight:1.2},titleRule:{width:44,borderTop:`2px solid ${i}`,margin:"18px 0 26px"},body:{maxWidth:1080,fontSize:15},fold:{position:"relative",maxHeight:230,overflow:"hidden","&::after":{content:'""',position:"absolute",left:0,right:0,bottom:0,height:70,background:"linear-gradient(transparent, var(--site-bg))"},"@media print":{maxHeight:"none",overflow:"visible","&::after":{display:"none"}}},readMore:{marginTop:10,border:"none",background:"transparent",padding:0,color:a,fontSize:11,fontWeight:700,letterSpacing:.6,textTransform:"uppercase",borderBottom:`1px solid ${a}`,cursor:"pointer","@media print":{display:"none"}},items:{marginTop:24},row:{background:"white",border:`1px solid ${e.fn.rgba(a,.08)}`,borderLeft:`3px solid ${i}`,padding:"22px 26px",marginBottom:14,breakInside:"avoid"},rowNumber:{fontFamily:C,color:i,fontSize:34,fontWeight:300,marginRight:16,lineHeight:1},rowTitle:{fontFamily:C,color:i,fontSize:17,fontWeight:500,textTransform:"uppercase"},rowClient:{color:r,fontSize:12,fontWeight:600,margin:"10px 0 6px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},card:{background:"white",border:`1px solid ${e.fn.rgba(a,.08)}`,borderTop:`3px solid ${i}`,padding:18,breakInside:"avoid"},cardTitle:{fontFamily:C,color:i,fontWeight:600,fontSize:15,textTransform:"uppercase"},small:{fontSize:12,color:s},person:{display:"grid",gridTemplateColumns:"minmax(220px, 1fr) 2fr minmax(180px, 0.9fr)",gap:28,background:"white",borderBottom:`2px solid ${i}`,padding:"22px 14px",marginBottom:8,breakInside:"avoid",[e.fn.smallerThan("md")]:{gridTemplateColumns:"1fr"}},personHead:{display:"flex",gap:16,alignItems:"center"},photo:{width:52,height:52,objectFit:"cover",flexShrink:0},personName:{fontFamily:C,color:i,fontWeight:600,fontSize:15,textTransform:"uppercase"},contact:{fontSize:12,"& a":{color:r,textDecoration:"none",display:"flex",alignItems:"center",gap:6,marginBottom:4},"& a:hover":{textDecoration:"underline"}},groupLabel:{color:i,fontSize:12,margin:"30px 0 12px"},logoGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:14},logoCell:{background:"white",border:`1px solid ${e.fn.rgba(a,.08)}`,padding:16,display:"flex",flexDirection:"column",alignItems:"center",gap:10,textAlign:"center",fontSize:12},quote:{background:"white",borderLeft:`3px solid ${i}`,padding:"20px 24px",marginBottom:14,fontSize:16,fontStyle:"italic",breakInside:"avoid"},featured:{display:"flex",gap:28,alignItems:"flex-start",marginBottom:26,[e.fn.smallerThan("sm")]:{flexDirection:"column"}},featuredImage:{width:180,height:180,objectFit:"cover",flexShrink:0},image:{width:"100%",maxHeight:560,objectFit:"cover",display:"block",marginBottom:18},editable:{cursor:"text",borderRadius:3,outline:"2px dashed transparent",outlineOffset:4,"&:hover":{outlineColor:e.fn.rgba(d[5],.7)}},editing:{outline:`2px solid ${d[5]}`,outlineOffset:4,borderRadius:3,cursor:"text",minHeight:"1.4em",caretColor:d[6],"&:empty::before":{content:"attr(data-placeholder)",opacity:.45,fontStyle:"italic"},"& ul, & ol":{paddingLeft:22,margin:"0.3em 0"},"& ul":{listStyleType:"disc"},"& p":{margin:"0 0 0.25em"},"& a":{color:"inherit",textDecoration:"underline"}},placeholder:{opacity:.45,fontStyle:"italic"},pickArea:{cursor:"pointer",borderRadius:4,outline:"2px dashed transparent",outlineOffset:6,"&:hover":{outlineColor:e.fn.rgba(d[5],.7)},"& [data-item-id]":{borderRadius:4,outline:"2px solid transparent",outlineOffset:4},"& [data-item-id]:hover":{outlineColor:e.fn.rgba(d[5],.5)},"& [data-item-id][data-selected]":{outlineColor:d[6]}},pickEmpty:{border:`2px dashed ${e.fn.rgba(d[5],.5)}`,borderRadius:6,padding:"28px 16px",textAlign:"center",color:d[7],fontFamily:e.fontFamily,fontSize:14,fontWeight:600,cursor:"pointer",background:e.fn.rgba(d[0],.6),"&:hover":{background:d[0]}},activeSection:{boxShadow:`inset 4px 0 0 ${d[5]}`},excluded:{opacity:.35}}});function Qb({theme:e,meta:o,prospectLogoUrl:n,sections:r,imageUrl:i,editing:a,hideEmpty:s,onPrint:l}){let{t:p}=(0,qb.useTranslation)("pitch_preview"),{classes:c,cx:u}=lL({t:e}),[C,g]=(0,ms.useState)(!1),[d,y]=(0,ms.useState)(new Set),v=(0,ms.useMemo)(()=>nm(o,e),[o,e]),h=ra(r),F=a?h:h.filter(R=>R.included&&(!s||Bb(R,v))),P=R=>na(R.type,R.settings),m=new Map,N=0;for(let R of F)R.type!=="TITLE"&&R.included&&P(R).showNumber&&m.set(R.id,++N);let E=(R,ne)=>{let B=R.fields.find(ee=>ee.key===ne);return B?rn(is(B,R.values),v):""},I=R=>E(R,"title").trim()||R.name,D=R=>{g(!1),document.getElementById(`section-${R}`)?.scrollIntoView({behavior:"smooth",block:"start"})},x=(R,ne,B,ee="div")=>{let Ve=R.fields.find(Pt=>Pt.key===ne);if(!Ve)return null;let Ee=tn(Ve),de=E(R,ne),pe=ee,_e=a?.presence?.field(R.id,ne),Tt=_e?.length?{style:gc(_e)}:{};if(a&&a.activeId===R.id&&a.activeField===ne){let Pt=a.onTabField?bt=>a.onTabField?.(ne,bt):void 0;return(Ee||a.collaborative)&&a.renderRichInline?(0,H.jsxs)("div",{className:u(B,c.editing),...Tt,children:[(0,H.jsx)(Tn,{users:_e}),a.renderRichInline({fieldKey:ne,className:"",style:{},placeholder:`[${a.fieldLabel(ne)}]`,onTab:Pt})]}):(0,H.jsx)(fc,{className:u(B,c.editing),style:{},value:a.inlineValue(ne),onChange:bt=>a.onInlineChange(ne,bt),multiline:!!Ve.multiline,onTab:Pt,placeholder:`[${a.fieldLabel(ne)}]`})}let yt=Ee?de.trim()?(0,H.jsx)(Sm,{value:de,size:null,gap:.7}):null:de||null;return a?(0,H.jsxs)(pe,{className:u(B,c.editable),onClick:Pt=>{Pt.stopPropagation(),a.onFieldClick(R.id,ne)},...Tt,children:[(0,H.jsx)(Tn,{users:_e}),yt??(0,H.jsxs)("span",{className:c.placeholder,children:["[",a.fieldLabel(ne),"]"]})]}):yt?(0,H.jsx)(pe,{className:B,children:yt}):null},G=(R,ne,B,ee,Ve=!1)=>{if(!a)return B?ee:null;let Ee=a.presence?.collection(R.id,ne),de=Ee?.length?{style:gc(Ee)}:{};return B?(0,H.jsxs)("div",{className:c.pickArea,title:a.onItemClick?void 0:a.chooseLabel(ne,Ve),...de,onClick:pe=>{pe.stopPropagation();let _e=pe.target.closest("[data-item-id]")?.getAttribute("data-item-id");_e&&a.onItemClick?a.onItemClick(R.id,ne,_e):a.onPick(R.id,ne)},onDoubleClick:pe=>{let _e=pe.target.closest("[data-item-id]")?.getAttribute("data-item-id");_e&&(pe.stopPropagation(),a.onItemDoubleClick?.(R.id,ne,_e))},children:[(0,H.jsx)(Tn,{users:Ee}),ee]}):(0,H.jsxs)("div",{className:c.pickEmpty,onClick:pe=>{pe.stopPropagation(),a.onPick(R.id,ne)},...de,children:[(0,H.jsx)(Tn,{users:Ee}),(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faPlus})," ",a.chooseLabel(ne,Ve)]})},M=R=>a?.onItemClick?{"data-item-id":R.id,"data-selected":a.selectedItemId===R.id||void 0}:{},A=(R,ne,B)=>R.imageUrl?(0,H.jsx)("img",{src:i(R.imageUrl),alt:B,className:ne}):(0,H.jsx)("div",{className:ne,style:{background:Vn(R.color,"1F2A44"),color:"white",display:"grid",placeItems:"center",fontWeight:700},children:om(R,B)}),L=R=>R?.trim()?pi(R):void 0,q=R=>mi(R).trim()?(0,H.jsx)(Sm,{value:R,size:null,gap:.6}):null,X=(R,ne)=>ne?R.map((B,ee)=>(0,H.jsxs)("div",{className:c.row,...M(B),children:[(0,H.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[(0,H.jsx)("span",{className:c.rowNumber,children:String(ee+1).padStart(2,"0")}),(0,H.jsx)("span",{className:c.rowTitle,children:B.values.content_commercialtitle||B.values.name})]}),(B.values.clients_name_csv||B.values.client)&&(0,H.jsx)("div",{className:c.rowClient,children:B.values.clients_name_csv||B.values.client}),q(B.values.description)]},B.id)):(0,H.jsx)("div",{className:c.grid,children:R.map(B=>(0,H.jsxs)("div",{className:c.card,...M(B),children:[(0,H.jsx)("div",{className:c.cardTitle,children:B.values.content_commercialtitle||B.values.name}),(B.values.clients_name_csv||B.values.client)&&(0,H.jsx)("div",{className:c.rowClient,children:B.values.clients_name_csv||B.values.client}),(0,H.jsx)("div",{className:c.small,children:q(B.values.description)})]},B.id))}),Se=R=>(0,H.jsxs)("div",{className:c.contact,children:[R.values.email&&(0,H.jsxs)("a",{href:`mailto:${R.values.email}`,children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faEnvelope})," ",R.values.email]}),R.values.phone&&(0,H.jsxs)("a",{href:`tel:${R.values.phone.replace(/\s/g,"")}`,children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faPhone})," ",R.values.phone]}),L(R.values.linkedin)&&(0,H.jsxs)("a",{href:L(R.values.linkedin),target:"_blank",rel:"noopener noreferrer",children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faLink})," LinkedIn"]})]}),ke=R=>(0,H.jsxs)("div",{className:c.person,...M(R),children:[(0,H.jsxs)("div",{className:c.personHead,children:[A(R,c.photo,R.values.name??""),(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:c.personName,children:R.values.name}),(0,H.jsx)("div",{className:c.small,children:R.values.function})]})]}),(0,H.jsx)("div",{style:{fontSize:13},children:q(R.values.bio||R.values.description)}),Se(R)]},R.id),Re=R=>(0,H.jsxs)("div",{className:c.card,...M(R),children:[(0,H.jsxs)("div",{className:c.personHead,style:{marginBottom:12},children:[A(R,c.photo,R.values.name??""),(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:c.personName,children:R.values.name}),(0,H.jsx)("div",{className:c.small,children:R.values.function})]})]}),(0,H.jsx)("div",{style:{fontSize:13},children:q(R.values.bio||R.values.description)}),(0,H.jsx)("div",{style:{marginTop:10},children:Se(R)})]},R.id),oe=(R,ne)=>{if(ne.display==="cards")return(0,H.jsx)("div",{className:c.grid,children:R.map(Re)});let B=ne.leadCount&&ne.leadCount>0?R.slice(0,ne.leadCount):R,ee=ne.leadCount&&ne.leadCount>0?R.slice(ne.leadCount):[];return(0,H.jsxs)(H.Fragment,{children:[B.map(ke),ee.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:c.groupLabel,children:p("supporting-specialists")}),(0,H.jsx)("div",{className:c.grid,children:ee.map(Re)})]})]})},Ie=(R,ne,B)=>{let ee=R.items[ne]??[],Ve=B.display==="rows",Ee;switch(ne){case"matters":Ee=X(ee,Ve);break;case"specialists":Ee=oe(ee,B);break;case"clients":Ee=(0,H.jsx)("div",{className:c.logoGrid,children:ee.map(de=>(0,H.jsxs)("div",{className:c.logoCell,...M(de),children:[A(de,c.photo,de.values.name??""),(0,H.jsx)("div",{children:de.values.name})]},de.id))});break;case"testimonials":Ee=ee.map(de=>(0,H.jsxs)("div",{className:c.quote,...M(de),children:[(0,H.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faQuoteLeft,style:{opacity:.3,marginTop:6}}),(0,H.jsx)("div",{style:{flex:1,minWidth:0},children:q(de.values.description)})]}),(0,H.jsxs)("div",{className:c.small,style:{fontStyle:"normal",marginTop:10},children:[[de.values.name,de.values.role,de.values.organisation].filter(Boolean).join(", "),(de.values.directory||de.values.year)&&` \u2014 ${[de.values.directory,de.values.year].filter(Boolean).join(" ")}`]})]},de.id));break;default:Ee=(0,H.jsx)("div",{className:Ve?void 0:c.grid,children:ee.map(de=>(0,H.jsxs)("div",{className:Ve?c.row:c.card,...M(de),children:[(0,H.jsx)("div",{className:c.cardTitle,children:de.values.name}),(de.values.author||de.values.date||de.values.medium)&&(0,H.jsx)("div",{className:c.small,children:[de.values.author,de.values.date,de.values.medium].filter(Boolean).join(" \xB7 ")}),(0,H.jsx)("div",{style:{fontSize:13,marginTop:8},children:q(de.values.description)}),L(de.values.url)&&(0,H.jsxs)("a",{href:L(de.values.url),target:"_blank",rel:"noopener noreferrer",style:{fontSize:12},children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faLink})," ",ji(de.values.url??"")]})]},de.id))})}return(0,H.jsx)("div",{className:c.items,children:G(R,ne,ee.length>0,Ee)})},$e=(R,ne)=>{let B=R.items[ne]?.[0],ee=B&&(0,H.jsxs)("div",{className:c.featured,...M(B),children:[(B.imageUrl||ne==="specialists")&&A(B,c.featuredImage,B.values.name??""),(0,H.jsxs)("div",{style:{flex:1},children:[(0,H.jsx)("div",{className:c.cardTitle,style:{fontSize:20},children:B.values.name}),B.values.function&&(0,H.jsx)("div",{className:c.small,children:B.values.function}),(0,H.jsx)("div",{style:{marginTop:10},children:q(B.values.bio||B.values.description)}),ne==="specialists"&&Se(B)]})]});return(0,H.jsx)("div",{className:c.items,children:G(R,ne,!!B,ee,!0)})},De=!1,me=F.filter(R=>R.included&&R.type!=="TITLE"&&P(R).showInNav),Ge=R=>{let ne=P(R),B=a?.activeId===R.id,ee=a?()=>a.onSelect(R.id):void 0,Ve=(It,co)=>(0,H.jsx)("section",{id:`section-${R.id}`,"data-chapter-id":R.id,"data-chapter-title":I(R),className:u(It,B&&c.activeSection,!R.included&&c.excluded),onClick:ee,children:co},R.id);if(R.type==="TITLE")return Ve(c.hero,(0,H.jsxs)(H.Fragment,{children:[x(R,"title",c.heroTitle,"h1"),x(R,"subtitle",c.heroSubtitle),o.prospectName&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:c.heroRule}),(0,H.jsx)("div",{className:c.preparedFor,children:p("prepared-for")}),(0,H.jsxs)("div",{className:c.prospect,children:[n&&(0,H.jsx)("img",{src:i(n),alt:o.prospectName,className:c.prospectLogo}),o.prospectName]})]}),o.date&&(0,H.jsx)("div",{className:c.date,children:o.date})]}));De=!De;let Ee=Fo[R.type],de=m.get(R.id),pe=x(R,"description",c.body),_e=E(R,"description").length,Tt=ne.fold&&!a&&!d.has(R.id)&&_e>700,yt=R.fields.find(It=>It.kind==="image")?.key,Pt=yt?E(R,yt):"",bt=yt?a?.presence?.field(R.id,yt):void 0;return Ve(u(c.section,De&&c.sectionAlt),(0,H.jsxs)("div",{className:c.inner,style:{"--site-bg":De?Vn(e.colors?.light,"F5F5F7"):Vn(e.colors?.background,"FFFFFF")},children:[de!==void 0&&(0,H.jsx)("div",{className:c.number,children:String(de).padStart(2,"0")}),x(R,"title",c.title,"h2"),(0,H.jsx)("div",{className:c.titleRule}),yt&&(Pt?(0,H.jsx)(cL,{users:bt,children:(0,H.jsx)("img",{src:i(Pt),alt:"",className:u(c.image,a&&c.pickArea),onClick:a?It=>{It.stopPropagation(),a.onImageClick(R.id,yt)}:void 0})}):a&&(0,H.jsxs)("div",{className:c.pickEmpty,onClick:It=>{It.stopPropagation(),a.onImageClick(R.id,yt)},...bt?.length?{style:gc(bt)}:{},children:[(0,H.jsx)(Tn,{users:bt}),(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faPlus})," ",a.fieldLabel(yt)]})),pe&&(Tt?(0,H.jsx)("div",{className:c.fold,children:pe}):pe),ne.fold&&!a&&_e>700&&(0,H.jsx)("button",{type:"button",className:c.readMore,onClick:()=>y(It=>{let co=new Set(It);return co.has(R.id)?co.delete(R.id):co.add(R.id),co}),children:d.has(R.id)?p("read-less"):p("read-more")}),Ee?.featured&&$e(R,Ee.featured),Ee?.list&&Ie(R,Ee.list,ne)]}))};return(0,H.jsxs)("div",{className:c.site,children:[(0,H.jsxs)("header",{className:c.header,children:[e.logoUrl?(0,H.jsx)("img",{src:i(e.logoUrl),alt:e.firmName,className:c.logo}):(0,H.jsx)("span",{className:c.firmName,children:e.firmName}),(0,H.jsxs)("div",{className:c.headerButtons,children:[me.length>0&&(0,H.jsxs)("button",{type:"button",className:c.headerButton,onClick:()=>g(R=>!R),children:[(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faBars})," ",p("contents")]}),(0,H.jsx)("button",{type:"button",className:c.headerButton,onClick:()=>l?l():window.print(),"aria-label":p("builder-print-pdf"),title:p("builder-print-pdf"),children:(0,H.jsx)($n.FontAwesomeIcon,{icon:vo.faPrint})}),C&&(0,H.jsx)("div",{className:c.nav,children:me.map(R=>(0,H.jsxs)("button",{type:"button",className:c.navItem,onClick:()=>D(R.id),children:[(0,H.jsx)("span",{children:m.has(R.id)?String(m.get(R.id)).padStart(2,"0"):""}),(0,H.jsx)("span",{children:I(R)})]},R.id))})]})]}),F.map(Ge)]})}var gc=e=>({position:"relative",...aa(e)});function cL({users:e,children:o}){return e?.length?(0,H.jsxs)("div",{style:gc(e),children:[(0,H.jsx)(Tn,{users:e}),o]}):(0,H.jsx)(H.Fragment,{children:o})}var Xb=t("next-i18next"),Rt=t("@mantine/core"),jb=t("@fortawesome/free-solid-svg-icons"),Jb=t("@fortawesome/react-fontawesome");var $t=t("react/jsx-runtime"),dL=Gn();function Zb({slides:e,groups:o,repeats:n,theme:r,meta:i,busy:a,blocked:s,onCombine:l,onRemoveRepeats:p,onDismiss:c}){let{t:u}=(0,Xb.useTranslation)("presentation_builder");if(!o.length&&!n.length)return null;let C=d=>e.findIndex(y=>y.id===d.id)+1,g=(d,y,v,h)=>(0,$t.jsx)(Rt.Tooltip,{label:s,disabled:!s,withinPortal:!0,multiline:!0,w:240,children:(0,$t.jsx)("div",{children:(0,$t.jsx)(Rt.Button,{size:"xs",sx:{flexShrink:0},disabled:!!s||!!a&&!v,loading:v,onClick:h,children:y})})},d);return(0,$t.jsxs)(Rt.Alert,{color:"blue",radius:"md",icon:(0,$t.jsx)(Jb.FontAwesomeIcon,{icon:jb.faLayerGroup}),withCloseButton:!0,closeButtonLabel:u("templates.combine.dismiss"),onClose:c,title:o.length?u("templates.combine.title",{count:o.length}):u("templates.combine.repeats_title",{count:n.length}),"data-testid":"combine-suggestions",children:[(0,$t.jsx)(Rt.Text,{size:"sm",mb:"sm",children:u("templates.combine.help")}),(0,$t.jsxs)(Rt.Stack,{spacing:"xs",children:[o.map(d=>{let[y]=d;return y?(0,$t.jsx)(Rt.Paper,{withBorder:!0,radius:"md",p:"xs",children:(0,$t.jsxs)(Rt.Group,{position:"apart",align:"flex-end",noWrap:!0,children:[(0,$t.jsx)(Rt.Group,{spacing:"sm",noWrap:!0,align:"flex-start",sx:{overflowX:"auto",minWidth:0},children:d.map(v=>(0,$t.jsxs)(Rt.Box,{w:132,sx:{flexShrink:0},children:[(0,$t.jsx)(Un,{slide:sc(v,r,{...i,slideNumber:C(v)}),imageUrl:dL,radius:4}),(0,$t.jsxs)(Rt.Text,{size:"xs",weight:600,truncate:!0,mt:4,title:v.name,children:[C(v),". ",v.name]}),(0,$t.jsxs)(Rt.Text,{size:"xs",color:"dimmed",children:[u("slide_editor.spots",{count:To(v.layout)??0}),v===y?` \xB7 ${u("templates.combine.main")}`:""]})]},v.id))}),g(y.id,u("templates.combine.button",{count:d.length}),a===y.id,()=>l(d))]})},y.id):null}),n.map(({slide:d,count:y})=>(0,$t.jsx)(Rt.Paper,{withBorder:!0,radius:"md",p:"xs",children:(0,$t.jsxs)(Rt.Group,{position:"apart",noWrap:!0,children:[(0,$t.jsxs)(Rt.Box,{sx:{minWidth:0},children:[(0,$t.jsxs)(Rt.Text,{size:"sm",weight:600,truncate:!0,children:[C(d),". ",d.name]}),(0,$t.jsxs)(Rt.Text,{size:"xs",color:"dimmed",children:[u("templates.combine.repeats",{count:y}),d.usageCount?` ${u("templates.combine.repeats_in_use")}`:""]})]}),g(`repeats-${d.id}`,u("templates.combine.remove_repeats"),a===d.id,()=>p(d))]})},d.id))]})]})}var oS=t("react"),nS=t("next-i18next"),sn=t("@mantine/core"),rS=t("@apollo/client"),iS=t("@/graphql");var fs=t("@/graphql"),eS=(0,fs.graphql)(`
	fragment FirmLogoItem on FirmLogo {
		id
		name
		isDefault
		mimetype
	}
`),tS=(0,fs.graphql)(`
	query FirmLogos {
		firmLogos {
			id
			...FirmLogoItem
		}
	}
`),hW=(0,fs.graphql)(`
	mutation FirmLogoUpdate($id: ID!, $data: FirmLogoUpdateDataInput!) {
		firmLogoUpdate(id: $id, data: $data) {
			...FirmLogoItem
		}
	}
`),yW=(0,fs.graphql)(`
	mutation FirmLogoDelete($id: ID!) {
		firmLogoDelete(id: $id)
	}
`);var pL=t("@/lib/env/client");function Rm(e,o){let n=o?`?${new URLSearchParams(o).toString()}`:"";return`/api/firm/logos/${e}${n}`}var Wn=t("react/jsx-runtime"),uL=/^\/firm\/logos\/([^/]+)$/,mL=e=>uL.exec(e??"")?.[1]??null,fL=(0,oS.forwardRef)(function({value:o,label:n,...r},i){return(0,Wn.jsx)("div",{ref:i,...r,children:(0,Wn.jsxs)(sn.Group,{spacing:"sm",noWrap:!0,children:[(0,Wn.jsx)(sn.Image,{src:Rm(o),alt:n,width:32,height:32,fit:"contain"}),(0,Wn.jsx)(sn.Text,{size:"sm",truncate:!0,children:n})]})})});function aS({value:e,onChange:o}){let{t:n}=(0,nS.useTranslation)("presentation_builder"),{data:r}=(0,rS.useQuery)(tS),i=(r?.firmLogos??[]).map(s=>(0,iS.getFragmentData)(eS,s)),a=mL(e);return(0,Wn.jsxs)(sn.Stack,{spacing:6,children:[(0,Wn.jsx)(sn.Select,{label:n("templates.logo"),placeholder:n("templates.logo_placeholder"),withinPortal:!0,clearable:!0,data:i.map(s=>({value:s.id,label:s.name})),itemComponent:fL,value:a,onChange:s=>o(s?`/firm/logos/${s}`:void 0),disabled:!i.length}),a&&(0,Wn.jsx)(sn.Image,{src:Rm(a),alt:"",fit:"contain",height:48,styles:s=>({root:{background:"#1F2A44",borderRadius:s.radius.sm,padding:6,maxWidth:160}})}),!i.length&&(0,Wn.jsx)(sn.Text,{size:"xs",color:"dimmed",children:n("templates.logo_none")})]})}var HT=t("next-i18next"),rt=t("@mantine/core"),Ca=t("@fortawesome/free-solid-svg-icons"),mf=t("@fortawesome/react-fontawesome");var BT=t("react"),OT=t("next-i18next"),eo=t("@mantine/core"),GT=t("@fortawesome/free-solid-svg-icons"),zT=t("@fortawesome/react-fontawesome");var gL=new Set(["doc","blockquote","bulletList","orderedList","listItem","table","tableRow","tableCell","tableHeader"]);function Em(e){if(typeof e=="string")return e;if(!hL(e))return"";if(e.type==="text")return typeof e.text=="string"?e.text:"";if(e.type==="hardBreak")return`
`;if(!Array.isArray(e.content)||e.content.length===0)return"";let o=e.content.map(n=>Em(n));return gL.has(e.type)?o.filter(Boolean).join(`
`):o.join("")}function hL(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&typeof e.type=="string"}var Om=t("react"),bS=t("@mantine/core"),SS=t("@mantine/tiptap"),xS=Y(t("@tiptap/extension-bold")),CS=Y(t("@tiptap/extension-document")),TS=Y(t("@tiptap/extension-hard-break")),wL=Y(t("@tiptap/extension-collaboration")),vL=Y(t("@tiptap/extension-collaboration-cursor")),IS=Y(t("@tiptap/extension-history")),wS=Y(t("@tiptap/extension-italic")),vS=Y(t("@tiptap/extension-list-item")),kS=Y(t("@tiptap/extension-paragraph")),PS=Y(t("@tiptap/extension-text")),RS=Y(t("@tiptap/extension-underline")),ES=Y(t("@tiptap/extension-table-cell")),AS=Y(t("@tiptap/extension-table-header"));var bc=t("@tiptap/core"),sS=Y(t("@tiptap/extension-bullet-list"));var Am=["DISC","DASH","ARROW","CHECK","SQUARE","CIRCLE"],la="DISC",hc={DISC:"\u2022",DASH:"\u2013",ARROW:"\u27A2",CHECK:"\u2713",SQUARE:"\u25AA",CIRCLE:"\u25CB"};function yL(e){return typeof e=="string"&&Am.includes(e)}function xi(e){let o=e?.bulletStyle;return yL(o)?o:la}function Lm(e){return e===la?null:e}function yc(e){return e===la?{}:{"data-bullet":e.toLowerCase(),style:`list-style-type: '${hc[e]} '`}}var Sc=sS.default.extend({addAttributes(){return{...this.parent?.(),bulletStyle:{default:null,parseHTML:e=>Lm(xi({bulletStyle:e.getAttribute("data-bullet")?.toUpperCase()})),rendered:!1}}},renderHTML({node:e,HTMLAttributes:o}){return["ul",(0,bc.mergeAttributes)(this.options.HTMLAttributes,o,yc(xi(e.attrs))),0]},addCommands(){return{...this.parent?.(),setBulletStyle:e=>({state:o,tr:n,dispatch:r})=>{let i=(0,bc.findParentNode)(a=>a.type.name===this.name)(o.selection);return i?(r&&n.setNodeMarkup(i.pos,void 0,{...i.node.attrs,bulletStyle:Lm(e)}),!0):!1}}}});var ys=t("@tiptap/core"),mS=Y(t("@tiptap/extension-table")),fS=t("@tiptap/extension-table"),gS=Y(t("@tiptap/extension-table-row"));var bL=new Set(["red","darkred","firebrick","crimson","maroon","indianred","brown"]);function SL(e){let o=e.replace(/\s+/g,"").toLowerCase(),n=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(o);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];let r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(o);if(r)return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)];let i=/^rgba?\((\d+),(\d+),(\d+)/.exec(o);return i?[Number(i[1]),Number(i[2]),Number(i[3])]:null}function xc(e){if(!e)return!1;let o=e.trim().toLowerCase();if(bL.has(o))return!0;let n=SL(o);if(!n)return!1;let[r,i,a]=n;return r>=120&&i<=120&&a<=120&&r-Math.max(i,a)>=40}var xL=/^#[0-9A-Fa-f]{6}$/;function ca(e){return typeof e=="string"&&xL.test(e)}var Fm=["ALL","HORIZONTAL","NONE"],da={borders:null,headerRow:!1,headerColumn:!1,headerRowColor:null,headerColumnColor:null};function CL(e){return typeof e=="string"&&Fm.includes(e)}function lS(e){return ca(e)?e.toUpperCase():null}function Go(e){let o=e&&typeof e=="object"?e:{};return{borders:CL(o.borders)?o.borders:null,headerRow:o.headerRow===!0,headerColumn:o.headerColumn===!0,headerRowColor:lS(o.headerRowColor),headerColumnColor:lS(o.headerColumnColor)}}function Gr(e){let o=e?.height,n=typeof o=="string"?Number(o):o;return typeof n=="number"&&Number.isInteger(n)&&n>0?n:null}function cS(e){let o=r=>{let i=parseInt(r,16)/255;return i<=.03928?i/12.92:((i+.055)/1.055)**2.4};return .2126*o(e.slice(1,3))+.7152*o(e.slice(3,5))+.0722*o(e.slice(5,7))>.179?"#000000":"#FFFFFF"}function gs(e){let o={},n=[];return e.borders!==null&&(o["data-borders"]=e.borders.toLowerCase()),e.headerRow&&(o["data-header-row"]="true",e.headerRowColor&&n.push(`--table-header-row-fill: ${e.headerRowColor}`,`--table-header-row-ink: ${cS(e.headerRowColor)}`)),e.headerColumn&&(o["data-header-column"]="true",e.headerColumnColor&&n.push(`--table-header-column-fill: ${e.headerColumnColor}`,`--table-header-column-ink: ${cS(e.headerColumnColor)}`)),n.length>0&&(o.style=n.join("; ")),o}function dS(e){let o=[];for(let n of e?.content??[]){let r=typeof n.attrs?.colspan=="number"&&n.attrs.colspan>0?n.attrs.colspan:1,i=Array.isArray(n.attrs?.colwidth)?n.attrs.colwidth:[];for(let a=0;a<r;a+=1){let s=i[a];o.push(typeof s=="number"&&s>0?Math.round(s):null)}}return o}var TL=25;function pS(e){if(!e.some(i=>i!==null))return{colgroupHtml:"",style:""};let o=e.map(i=>i?`<col style="width: ${i}px">`:"<col>").join(""),n=e.reduce((i,a)=>i+(a??TL),0),r=e.every(i=>i!==null);return{colgroupHtml:`<colgroup>${o}</colgroup>`,style:`table-layout: fixed; ${r?"width":"min-width"}: ${n}px`}}var IL=["data-borders","data-header-row","data-header-column"],Mm=class extends fS.TableView{constructor(o,n){super(o,n),uS(this.table,o)}update(o){let n=super.update(o);return n&&uS(this.table,o),n}};function uS(e,o){let n=gs(Go(o.attrs));for(let r of IL)n[r]?e.setAttribute(r,n[r]):e.removeAttribute(r);for(let r of["--table-header-row-fill","--table-header-row-ink","--table-header-column-fill","--table-header-column-ink"])e.style.removeProperty(r);for(let r of n.style?.split(";")??[]){let[i,a]=r.split(":").map(s=>s.trim());i&&a&&e.style.setProperty(i,a)}}var Cc=mS.default.extend({addOptions(){return{...this.parent?.(),View:Mm}},addAttributes(){return{borders:{default:da.borders,parseHTML:e=>Go(hs(e)).borders,rendered:!1},headerRow:{default:da.headerRow,parseHTML:e=>Go(hs(e)).headerRow,rendered:!1},headerColumn:{default:da.headerColumn,parseHTML:e=>Go(hs(e)).headerColumn,rendered:!1},headerRowColor:{default:da.headerRowColor,parseHTML:e=>Go(hs(e)).headerRowColor,rendered:!1},headerColumnColor:{default:da.headerColumnColor,parseHTML:e=>Go(hs(e)).headerColumnColor,rendered:!1}}},renderHTML(e){return this.parent({...e,HTMLAttributes:(0,ys.mergeAttributes)(e.HTMLAttributes,gs(Go(e.node.attrs)))})},addCommands(){return{...this.parent?.(),updateTableStyle:e=>({state:o,tr:n,dispatch:r})=>{let i=(0,ys.findParentNode)(a=>a.type.name===this.name)(o.selection);if(!i)return!1;if(r){let a={...Go(i.node.attrs),...e};n.setNodeMarkup(i.pos,void 0,{...i.node.attrs,...Go(a)})}return!0}}}});function hs(e){let o=e.style;return{borders:e.getAttribute("data-borders")?.toUpperCase(),headerRow:e.getAttribute("data-header-row")==="true",headerColumn:e.getAttribute("data-header-column")==="true",headerRowColor:o.getPropertyValue("--table-header-row-fill").trim()||null,headerColumnColor:o.getPropertyValue("--table-header-column-fill").trim()||null}}var Tc=gS.default.extend({addAttributes(){return{...this.parent?.(),height:{default:null,parseHTML:e=>Gr({height:parseInt(e.style.height||"",10)}),renderHTML:e=>{let o=Gr(e);return o?{style:`height: ${o}px`}:{}}}}},addCommands(){return{...this.parent?.(),setTableRowHeight:e=>({state:o,tr:n,dispatch:r})=>{let i=(0,ys.findParentNode)(a=>a.type.name===this.name)(o.selection);return i?(r&&n.setNodeMarkup(i.pos,void 0,{...i.node.attrs,height:Gr({height:e})}),!0):!1}}}});var LS=t("@tiptap/react");function Dm(e,o="light"){let n=zn(e.colourIndex??0,o),r=document.createElement("span");r.classList.add("collaboration-cursor__caret"),r.style.setProperty("--collab-fill",n.fill),r.style.setProperty("--collab-text",n.text);let i=document.createElement("div");return i.classList.add("collaboration-cursor__label"),i.dataset.testid="cursor-flag",i.dataset.colourIndex=String(e.colourIndex??0),i.textContent=e.initials||e.name?.charAt(0).toUpperCase()||"?",e.name&&(i.title=e.name),r.append(i),r}function _m(e,o="light"){return{nodeName:"span",class:"collaboration-cursor__selection",style:`background-color: ${zn(e.colourIndex??0,o).fill}33`}}var Nm=t("react"),DW=(0,Nm.createContext)(null);var Ic=t("@tiptap/core"),hS=Y(t("@tiptap/extension-ordered-list"));var Bm=e=>Wl(e)&&e!=="DECIMAL"?e:null,yS=hS.default.extend({addAttributes(){return{...this.parent?.(),numberStyle:{default:null,parseHTML:e=>Bm(e.getAttribute("data-number")?.toUpperCase()),rendered:!1}}},renderHTML({node:e,HTMLAttributes:o}){let n=Bm(e.attrs.numberStyle);return["ol",(0,Ic.mergeAttributes)(this.options.HTMLAttributes,o,n?{"data-number":n.toLowerCase(),style:`list-style-type: ${n.toLowerCase().replace("_","-")}`}:{}),0]},addCommands(){return{...this.parent?.(),setNumberStyle:e=>({state:o,tr:n,dispatch:r})=>{let i=(0,Ic.findParentNode)(a=>a.type.name===this.name)(o.selection);return i?(r&&n.setNodeMarkup(i.pos,void 0,{...i.node.attrs,numberStyle:Bm(e)}),!0):!1}}}});var PL=t("react/jsx-runtime"),kL=[CS.default,kS.default,PS.default,TS.default,xS.default,wS.default,RS.default,vS.default,Sc,yS,IS.default,SS.Link.configure({openOnClick:!1})],WW=kL.filter(e=>!["listItem","bulletList","orderedList"].includes(e.name)),KW=[Cc.configure({allowTableNodeSelection:!0,resizable:!1}),Tc,AS.default,ES.default];var FS=e=>e&&typeof e=="object"?e:By(Lr(e??""));var Ci=t("react"),zS=t("next-i18next"),Ot=t("@mantine/core"),In=t("@fortawesome/free-solid-svg-icons"),vc=t("@fortawesome/react-fontawesome");var OS=t("next-i18next"),GS=t("@mantine/core");var _S=t("cva");var MS=t("tailwind-merge"),DS=(0,MS.extendTailwindMerge)({});var{cva:XW,cx:Dt,compose:jW}=(0,_S.defineConfig)({hooks:{onComplete:e=>DS(e)}}),wc=Dt;function zo(e){let n=e.split(" ").map(a=>a.substring(0,1).toUpperCase()),r=n.at(0),i=n.length>1?n.at(-1):void 0;return[r,i].join("")}var bs=t("react/jsx-runtime"),NS=2,BS=4,RL=[];function Ss({users:e=RL,onFocusChange:o,className:n,children:r}){let{t:i}=(0,OS.useTranslation)(),a=(0,GS.useMantineTheme)(),s=e[0];return(0,bs.jsxs)("div",{role:s?"group":void 0,"aria-label":s?e.map(l=>i("collaboration.field.editing-by",{name:l.name})).join(", "):void 0,"data-testid":"field-highlight",className:Dt("relative rounded-lg",n),style:s?{outline:`${NS}px solid ${zn(s.colourIndex,a.colorScheme).fill}`,outlineOffset:BS}:void 0,onFocus:o&&(()=>o(!0)),onBlur:o&&(l=>{l.currentTarget.contains(l.relatedTarget)||o(!1)}),children:[r,s&&(0,bs.jsx)("span",{"aria-hidden":!0,"data-testid":"field-tags",className:"pointer-events-none absolute right-2 z-10 flex -translate-y-1/2 gap-1",style:{top:-(NS+BS)},children:e.map(l=>{let{fill:p,text:c}=zn(l.colourIndex,a.colorScheme);return(0,bs.jsx)("span",{"data-testid":"field-tag","data-user-id":l.userId,"data-colour-index":l.colourIndex,className:"ph-no-capture h-4 rounded-[4px] px-1 text-[10px] leading-4 font-semibold tracking-[0.02em] select-none",style:{background:p,color:c},children:l.initials||zo(l.name)},l.userId)})})]})}var _t=t("react/jsx-runtime");function HS({opened:e,label:o,grid:n,headerRows:r,onClose:i,onSave:a,presence:s}){let{t:l}=(0,zS.useTranslation)("presentation_builder"),[p,c]=(0,Ci.useState)(n),[u,C]=(0,Ci.useState)({ri:0,ci:0});(0,Ci.useEffect)(()=>{e&&(c(n.rows.length?n:{rows:[[{text:""},{text:""}]]}),C({ri:0,ci:0}))},[e]);let g=(0,Ci.useMemo)(()=>gi(p),[p]),d=g.find(P=>P.ri===u.ri&&P.ci===u.ci)??g[0],y=fi(p),v=(P,m,N)=>c(E=>({rows:E.rows.map((I,D)=>D===P?I.map((x,G)=>G===m?{...x,text:N}:x):I)})),h=(P,m)=>{c(P);let N=P.rows.length,E=Math.max(0,Math.min(m.ri,N-1)),I=Math.max(0,Math.min(m.ci,(P.rows[E]?.length??1)-1));C({ri:E,ci:I})},F=d?[{label:l("editor.table.row_above"),icon:In.faArrowUp,run:()=>h(Ju(p,d.row-1),{ri:d.row,ci:0})},{label:l("editor.table.row_below"),icon:In.faArrowDown,run:()=>h(Ju(p,d.row),{ri:d.row+1,ci:0})},{label:l("editor.table.column_left"),icon:In.faArrowLeft,run:()=>h(Zu(p,d.col-1),u)},{label:l("editor.table.column_right"),icon:In.faArrowRight,run:()=>h(Zu(p,d.col),u)}]:[];return(0,_t.jsx)(Ot.Modal,{opened:e,onClose:i,size:"xl",title:(0,_t.jsx)(Ot.Text,{weight:700,children:l("editor.table.title",{name:o})}),children:(0,_t.jsxs)(Ss,{users:s,children:[(0,_t.jsx)(Ot.Text,{size:"sm",color:"dimmed",mb:"sm",children:l("editor.table.help")}),(0,_t.jsxs)(Ot.Group,{spacing:"xs",mb:"sm",children:[F.map(P=>(0,_t.jsx)(Ot.Button,{size:"xs",variant:"default",leftIcon:(0,_t.jsx)(vc.FontAwesomeIcon,{icon:P.icon}),onClick:P.run,children:P.label},P.label)),(0,_t.jsx)(Ot.Divider,{orientation:"vertical"}),(0,_t.jsx)(Ot.Button,{size:"xs",variant:"subtle",color:"red",leftIcon:(0,_t.jsx)(vc.FontAwesomeIcon,{icon:In.faTrashCan}),disabled:!d||p.rows.length<=1,onClick:()=>d&&h(Uy(p,d.row),{ri:d.row,ci:0}),children:l("editor.table.delete_row")}),(0,_t.jsx)(Ot.Button,{size:"xs",variant:"subtle",color:"red",leftIcon:(0,_t.jsx)(vc.FontAwesomeIcon,{icon:In.faTrashCan}),disabled:!d||y<=1,onClick:()=>d&&h($y(p,d.col),u),children:l("editor.table.delete_column")})]}),(0,_t.jsx)(Ot.Box,{mah:"60vh",sx:{overflow:"auto"},children:(0,_t.jsx)(Ot.Box,{component:"table","data-testid":"table-editor",sx:P=>({width:"100%",borderCollapse:"collapse",tableLayout:"fixed","& td":{border:`1px solid ${P.colors.gray[3]}`,padding:4,verticalAlign:"top"}}),children:(0,_t.jsx)("tbody",{children:p.rows.map((P,m)=>(0,_t.jsx)("tr",{children:P.map((N,E)=>{let I=u.ri===m&&u.ci===E;return(0,_t.jsx)(Ot.Box,{component:"td",colSpan:N.colSpan??1,rowSpan:N.rowSpan??1,sx:D=>({background:I?D.colors.primary[0]:m<r?D.colors.gray[1]:void 0,outline:I?`2px solid ${D.colors.primary[5]}`:void 0}),children:(0,_t.jsx)(Ot.Textarea,{autosize:!0,minRows:1,maxRows:6,value:N.text,"aria-label":l("editor.table.cell",{row:m+1,column:E+1}),onFocus:()=>C({ri:m,ci:E}),onChange:D=>v(m,E,D.currentTarget.value),styles:{input:{border:0,padding:"4px 6px",fontWeight:m<r?700:void 0,background:sa(N.text)?"#FFF3A3":"transparent",color:sa(N.text)?"#1F2328":void 0}}})},E)})},m))})})}),(0,_t.jsxs)(Ot.Group,{position:"right",mt:"lg",children:[(0,_t.jsx)(Ot.Button,{variant:"default",onClick:i,children:l("common.cancel")}),(0,_t.jsx)(Ot.Button,{onClick:()=>a(p),children:l("editor.table.save")})]})]})})}var vi=t("react"),ud=t("next-i18next"),Uo=t("@mantine/core"),RT=t("@fortawesome/free-solid-svg-icons"),ET=t("@fortawesome/react-fontawesome"),Je=t("@mantine/tiptap"),AT=Y(t("@tiptap/extension-collaboration")),LT=Y(t("@tiptap/extension-collaboration-cursor")),FT=Y(t("@tiptap/extension-history")),MT=t("@tiptap/react"),md=t("lodash");var qn=t("react"),Hx=t("next-i18next"),ho=t("@mantine/core");var Ti=t("react"),EL=t("next/router");var US=t("@apollo/client"),zr=t("@/graphql"),l2=(0,zr.graphql)(`
	query CommentThreads($where: CommentThreadsWhereInput!) {
		commentThreads(where: $where) {
			id
			createdAt
			updatedAt
			entityType
			entityId
			fieldPath
			quotedText
			resolved
			resolvedAt
			resolvedBy {
				id
				givenName
				prefix
				familyName
			}
			createdBy {
				id
				givenName
				prefix
				familyName
			}
			comments {
				id
				createdAt
				body
				author {
					id
					givenName
					prefix
					familyName
				}
				mentionedUsers {
					id
					givenName
					prefix
					familyName
				}
			}
		}
	}
`),c2=(0,zr.graphql)(`
	mutation CommentThreadCreate($data: CommentThreadCreateInput!) {
		commentThreadCreate(data: $data) {
			id
			createdAt
			entityType
			entityId
			fieldPath
			quotedText
			resolved
			createdBy {
				id
				givenName
				prefix
				familyName
			}
			comments {
				id
				createdAt
				body
				author {
					id
					givenName
					prefix
					familyName
				}
			}
		}
	}
`),d2=(0,zr.graphql)(`
	mutation CommentThreadResolve($where: CommentThreadWhereUniqueInput!) {
		commentThreadResolve(where: $where) {
			id
			resolved
			resolvedAt
			resolvedBy {
				id
				givenName
				prefix
				familyName
			}
		}
	}
`),p2=(0,zr.graphql)(`
	mutation CommentThreadUnresolve($where: CommentThreadWhereUniqueInput!) {
		commentThreadUnresolve(where: $where) {
			id
			resolved
			resolvedAt
			resolvedBy {
				id
				givenName
				prefix
				familyName
			}
		}
	}
`),u2=(0,zr.graphql)(`
	mutation CommentThreadDelete($where: CommentThreadWhereUniqueInput!) {
		commentThreadDelete(where: $where) {
			id
		}
	}
`),m2=(0,zr.graphql)(`
	mutation CommentCreate($data: CommentCreateInput!) {
		commentCreate(data: $data) {
			id
			createdAt
			body
			author {
				id
				givenName
				prefix
				familyName
			}
		}
	}
`),f2=(0,zr.graphql)(`
	mutation CommentUpdate($data: CommentUpdateInput!) {
		commentUpdate(data: $data) {
			id
			body
		}
	}
`);var LL=t("react/jsx-runtime"),AL=(0,Ti.createContext)(void 0);function kc(){let e=(0,Ti.useContext)(AL);if(e===void 0)throw new Error("useCommentThreadContext must be used within a CommentThreadProvider");return e}var fo=t("react"),_x=t("next-i18next"),Qo=t("@mantine/core"),Nx=t("@apollo/client");var Mx=t("react"),Qm=t("lodash");var Ec=t("react"),$S=t("@mantine/core");var Pc=Y(t("react")),ur=Y(t("@radix-ui/react-avatar"));var Rc=t("react/jsx-runtime"),Gm=Pc.forwardRef(({className:e,...o},n)=>(0,Rc.jsx)(ur.Root,{ref:n,className:wc("relative flex size-10 shrink-0 overflow-hidden rounded-full",e),...o}));Gm.displayName=ur.Root.displayName;var zm=Pc.forwardRef(({className:e,...o},n)=>(0,Rc.jsx)(ur.Image,{ref:n,className:wc("aspect-square size-full object-cover",e),...o}));zm.displayName=ur.Image.displayName;var Hm=Pc.forwardRef(({className:e,...o},n)=>(0,Rc.jsx)(ur.Fallback,{ref:n,className:wc("flex size-full items-center justify-center bg-gray-100 dark:bg-gray-800",e),...o}));Hm.displayName=ur.Fallback.displayName;var pa=t("react/jsx-runtime"),wn=(0,Ec.forwardRef)(({parts:e,...o},n)=>{let[r,i]=(0,Ec.useState)("loading");return(0,pa.jsxs)(Gm,{ref:n,...o,className:Dt("ph-no-capture size-8",o.className),children:[(0,pa.jsx)(zm,{...e?.image,onLoadingStatusChange:a=>{e?.image?.onLoadingStatusChange?.(a),i(a)}}),(0,pa.jsx)(Hm,{...e?.fallback,className:Dt("avatar-fallback bg-primary-50 text-primary-600 text-[80%] font-semibold select-none",e?.fallback?.className),children:r==="loading"?(0,pa.jsx)($S.Skeleton,{className:"size-full"}):e?.fallback?.children})]})});wn.displayName="Avatar";var Ex=t("react"),Ax=t("lodash");var Lx=t("@/graphql");function mr(e){if(!(e?.focalX==null||e?.focalY==null))return`${Um(e.focalX)}% ${Um(e.focalY)}%`}function Um(e){return Math.min(100,Math.max(0,Math.round(e*100)/100))}var ws=t("lodash"),ot=t("zod"),kx=t("@/graphql"),Px=t("@/graphql/validation");var KS=t("lodash"),Ur=t("zod");var ln=t("zod");var Ke=ln.z.string().cuid(),xs=ln.z.string().datetime(),WS=ln.z.object({}).passthrough().transform(e=>e),VS=ln.z.object({id:Ke,createdAt:ln.z.string(),updatedAt:ln.z.string(),mimetype:ln.z.string(),name:ln.z.string(),fileSizeBytes:ln.z.number()}),Hr=Fl?VS:ln.z.union([ln.z.instanceof(File),VS]);var FL=Ur.z.object({directoryName:Ur.z.string().trim().min(1),category:Ur.z.string().trim(),ranking:Ur.z.string().trim(),year:Ur.z.string().trim(),logoFileId:Ke.nullish()}),qS={ranked:Ur.z.boolean(),rankings:Ur.z.array(FL)},YS={ranked:!1,rankings:[]};var _L=t("deep-object-diff"),NL=t("lodash");var ML=t("lodash");var HL=t("@/lib/env/client");var ax=t("lodash");var $r=t("react"),tx=t("next-i18next"),ox=t("@mantine/core"),Lc=t("@mantine/form"),nx=t("@mantine/modals"),Fc=t("lodash");var BL=Y(t("next/link")),OL=t("next-i18next"),ex=t("@apollo/client"),Cs=t("@mantine/core");var XS=t("react"),jS=t("jotai"),JS=t("@/lib/contexts/Permissions");function QS({type:e="every",granted:o=[],requested:n=[]}){let r=Array.isArray(o)?o:[o],i=Array.isArray(n)?n:[n];return i.length===0?!0:r.length===0?!1:i[e](a=>r.includes(a))}var ZS=t("@/services/jotai/atoms/accessToken");function Yo(e){return Array.isArray(e)?e:[e]}var ua={Loading:"LOADING",Granted:"GRANTED",Denied:"DENIED"};function mo({type:e="every",requested:o=[]}){let{loading:n,data:r}=(0,JS.usePermissions)(),i=r?.me.permissions,a=(0,jS.useAtomValue)(ZS.accessTokenAtom),s=(0,XS.useRef)(void 0);i&&i.length>0&&(s.current=i);let l=i&&i.length>0?i:s.current,p=Yo(o);return p.length===0?ua.Granted:!l||l.length===0?!a||n?ua.Loading:ua.Denied:QS({type:e,requested:p,granted:l})?ua.Granted:ua.Denied}var $m=t("@/graphql");var Vm=t("react/jsx-runtime");var W2=(0,$m.graphql)(`
	query AutomationUsages($kind: String!, $ids: [ID!]!) {
		automationUsages(kind: $kind, ids: $ids) {
			refId
			rules {
				id
				name
				enabled
			}
		}
	}
`),K2=(0,$m.graphql)(`
	mutation AutomationRemoveReference($kind: String!, $id: ID!) {
		automationRemoveReference(kind: $kind, id: $id) {
			updated
			disabled
		}
	}
`);var Wm=t("react/jsx-runtime"),Kn="Confirm/Default";var ix=t("react/jsx-runtime"),Ts={Read:"read",Edit:"edit"};function rx(e){let o=(0,$r.useRef)(null),{clearInputErrorOnChange:n,initialDirty:r,initialErrors:i,initialTouched:a,initialValues:s,transformValues:l,validate:p,validateInputOnBlur:c,validateInputOnChange:u,zodSchema:C,initialLoading:g=!1,initialMode:d=Ts.Edit,doSetReadModeOnSubmit:y=!1,revaluateInitialValues:v=!0}=e,[h,F]=(0,$r.useState)(g),[P,m]=(0,$r.useState)(d),N=P===Ts.Read,E=P===Ts.Edit,I=(0,$r.useRef)(null);function D(){let oe=I.current;return I.current=null,oe}let{t:x}=(0,tx.useTranslation)(),{getInputProps:G,onSubmit:M,...A}=(0,Lc.useForm)({clearInputErrorOnChange:n,initialDirty:r,initialErrors:i,initialTouched:a,initialValues:s,transformValues:l,validate:C?(0,Lc.zodResolver)(C):p,validateInputOnBlur:c,validateInputOnChange:u});(0,$r.useEffect)(()=>{v&&s&&(A.isDirty()||(0,Fc.isEqual)(A.values,s)||(A.setValues(s),A.resetDirty(s)))},[v,s,A.isDirty(),A.values]);function L(oe,Ie={}){let $e=G(oe,{...(0,Fc.pick)(Ie,["withError","withFocus"]),type:Ie.type==="date"||Ie.type==="radio-boolean"?void 0:Ie.type}),De=function(){switch(Ie.type){case"date":return{value:$e.value?(0,ut.default)($e.value.substring(0,10)):null,onChange:me=>$e.onChange(me&&(0,ut.default)(me).utc(!0).toISOString())};case"radio-boolean":return{value:$e.value?"true":"false",onChange:me=>$e.onChange(me=="true")};default:return}}();return{...$e,...De,path:oe,readOnly:N,"data-view-mode":N||void 0,required:!1,withAsterisk:E&&Ie?.required}}function q(){requestAnimationFrame(()=>{let oe=o.current?.querySelector("[data-invalid]");oe&&(oe.scrollIntoView({behavior:"smooth",block:"center"}),oe.focus({preventScroll:!0}))})}function X(){let oe=A.validate();return oe.hasErrors&&q(),oe}function Se(oe,Ie){return M(async($e,De)=>{let me=D();De.stopPropagation();try{F(!0),await oe($e,De),y&&m(Ts.Read),me?.(!0)}catch(Ge){Bt.default.error(Ge),me?.(!1)}finally{F(!1)}},($e,De,me)=>(D()?.(!1),me.stopPropagation(),q(),Ie?.($e,De,me)))}function ke(){return new Promise(oe=>{let Ie=o.current;if(!Ie){oe(!1);return}I.current=oe,Ie.requestSubmit(),I.current===oe&&(I.current=null,oe(!1))})}function Re(){function oe(){m(Ts.Read),A.reset()}if(!A.isDirty())return oe();(0,nx.openContextModal)({modal:Kn,title:x("confirm-cancel-title"),innerProps:{children:(0,ix.jsx)(ox.Text,{children:x("confirm-cancel-body")}),onConfirm:Ie=>{oe(),Ie.closeModal()}}})}return{...A,formRef:o,initialValues:s,validate:X,onSubmit:Se,getInputProps:L,isLoading:h,setIsLoading:F,mode:P,isReadMode:N,isEditMode:E,setMode:m,cancel:Re,submit:ke}}var ao=e=>(o={})=>rx((0,ax.merge)({},e,{transformValues:n=>e?.zodSchema?.parse?.(n)??e.zodSchema.parse(n)},o));var fr=t("zod");var it=Y(t("i18n-iso-countries")),sx=Y(t("i18n-iso-countries/langs/ar.json")),lx=Y(t("i18n-iso-countries/langs/da.json")),cx=Y(t("i18n-iso-countries/langs/de.json")),dx=Y(t("i18n-iso-countries/langs/el.json")),px=Y(t("i18n-iso-countries/langs/en.json")),ux=Y(t("i18n-iso-countries/langs/es.json")),mx=Y(t("i18n-iso-countries/langs/et.json")),fx=Y(t("i18n-iso-countries/langs/fi.json")),gx=Y(t("i18n-iso-countries/langs/fr.json")),hx=Y(t("i18n-iso-countries/langs/he.json")),yx=Y(t("i18n-iso-countries/langs/hu.json")),bx=Y(t("i18n-iso-countries/langs/it.json")),Sx=Y(t("i18n-iso-countries/langs/lv.json")),xx=Y(t("i18n-iso-countries/langs/nl.json")),Cx=Y(t("i18n-iso-countries/langs/no.json")),Tx=Y(t("i18n-iso-countries/langs/ro.json")),Ix=Y(t("i18n-iso-countries/langs/sv.json")),wx=Y(t("i18n-iso-countries/langs/zh.json"));it.default.registerLocale(sx.default);it.default.registerLocale(lx.default);it.default.registerLocale(cx.default);it.default.registerLocale(dx.default);it.default.registerLocale(px.default);it.default.registerLocale(ux.default);it.default.registerLocale(mx.default);it.default.registerLocale(fx.default);it.default.registerLocale(gx.default);it.default.registerLocale(hx.default);it.default.registerLocale(yx.default);it.default.registerLocale(bx.default);it.default.registerLocale(Sx.default);it.default.registerLocale(xx.default);it.default.registerLocale(Cx.default);it.default.registerLocale(Tx.default);it.default.registerLocale(Ix.default);it.default.registerLocale(wx.default);var Mo=fr.z.literal("").nullable(),Km=fr.z.string().nullable().transform(e=>{let o=(e??"").trim();return o.length>0?o:null}),ma=fr.z.string().transform(e=>e.replace(/[‘’ʼ]/g,"'")).pipe(fr.z.string().email()),lK=fr.z.string().min(1).refine(e=>new RegExp(/^[A-Z]/).test(e),{params:{i18n:"custom.capital-letter"}}),Mc=fr.z.string().refine(e=>new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi).test(e),{params:{i18n:"custom.url"}}),fa=fr.z.string().refine(e=>new RegExp(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/([-a-zA-Z0-9]+)\/*/gm).test(e),{params:{i18n:"custom.linkedin-url"}}),vx=fr.z.custom(e=>typeof e=="string"&&it.default.isValid(e),{params:{i18n:"custom.country"}});function Ye(e){return e?.edges?.map(o=>o.node).filter(Boolean)??[]}var UL=ot.z.object({workHighlightId:Ke,sequence:ot.z.number()}),$L=(0,Px.SpecialistCreateDataInputSchema)().extend({title:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),email:ma,linkedInURL:ot.z.nullable(fa.or(ot.z.literal("").transform(()=>null))),practices:ot.z.array(Ke).min(1),industries:ot.z.array(Ke),role:Ke,permissionGroups:ot.z.array(Ke),offices:ot.z.array(Ke),files:ot.z.array(Hr),labels:ot.z.array(Ke),memberships:ot.z.array(ot.z.string().trim()),educations:ot.z.array(ot.z.string().trim()),joinedFirmAt:xs.nullish(),joinedFirmFrom:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),leftFirmAt:xs.nullish(),leftFirmTo:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),practicingSince:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),admittedTo:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),admissionYear:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),promotedToPartner:ot.z.union([ot.z.string().min(1),Mo.transform(()=>null)]),featuredWorkHighlights:ot.z.array(UL),...qS}),VL={title:"",givenName:"",prefix:"",familyName:"",email:"",role:"",phoneNumber:"",mobile:"",linkedInURL:null,practices:[],industries:[],permissionGroups:[],offices:[],sendInvite:!1,files:[],labels:[],memberships:[],educations:[],joinedFirmAt:null,joinedFirmFrom:"",leftFirmAt:null,leftFirmTo:"",practicingSince:"",admittedTo:"",admissionYear:"",promotedToPartner:"",featuredWorkHighlights:[],...YS},kK=ao({zodSchema:$L,initialValues:VL}),PK=(0,kx.graphql)(`
	fragment SpecialistForm on Specialist {
		labels {
			id
		}
		title
		givenName
		prefix
		familyName
		email
		role {
			id
		}
		phoneNumber
		mobile
		linkedInURL
		practices {
			edges {
				node {
					id
				}
			}
		}
		industries {
			edges {
				node {
					id
				}
			}
		}
		offices {
			id
		}
		memberships
		educations
		joinedFirmAt
		joinedFirmFrom
		leftFirmAt
		leftFirmTo
		practicingSince
		admittedTo
		admissionYear
		promotedToPartner
		ranked
		rankings {
			id
			directoryName
			category
			ranking
			year
			logoFileId
		}
		files {
			id
			createdAt
			updatedAt
			name
			mimetype
			fileSizeBytes
		}
		featuredWorkHighlights(orderBy: { sequence: ASC }) {
			edges {
				node {
					id
				}
			}
		}
	}
`);function Rx(e,o){return`/api/specialist/${e}/profile-picture${(0,ws.isEmpty)(o)?"":`?${new URLSearchParams(o).toString()}`}`}function ze(e,o){let n=o?.withTitle?e?.title:null;return o?.order==="LAST_FIRST"?[[n,e?.prefix,e?.familyName].filter(Boolean).join(" "),e?.givenName].filter(Boolean).join(", "):[n,e?.givenName,e?.prefix,e?.familyName].filter(Boolean).join(" ")}var Fx=t("react/jsx-runtime"),Ym=(0,Lx.graphql)(`
	fragment SpecialistAvatar on Specialist {
		id
		prefix
		title
		givenName
		familyName
		hasProfilePicture
		# The framing, which the boolean cannot carry. Resolved on demand and
		# batched, so a page of avatars costs one extra query.
		profilePicture {
			focalX
			focalY
		}
	}
`),gr=(0,Ex.forwardRef)(({specialist:e,size:o=40,urlParams:n,parts:r,...i},a)=>(0,Fx.jsx)(wn,{ref:a,...(0,Ax.omit)(i,"ref"),className:`${Dt("size-[unset]",i.className)} specialist-avatar`,style:{width:o,height:o,...i.style},parts:{...r,image:{...r?.image,...e.hasProfilePicture&&{src:Rx(e.id,n)},alt:ze(e),style:{objectPosition:mr(e.profilePicture),...r?.image?.style}},fallback:{...r?.fallback,children:zo(ze(e))}}}));gr.displayName="SpecialistAvatar";var _c=t("@/graphql");var Xm=t("react/jsx-runtime"),Dx=(0,_c.graphql)(`
	fragment UserAvatar on User {
		id
		prefix
		givenName
		familyName
		specialist {
			...SpecialistAvatar
		}
	}
`),jm=(0,Mx.forwardRef)(({size:e=40,urlParams:o,parts:n,user:r,...i},a)=>r?.specialist?(0,Xm.jsx)(gr,{ref:a,specialist:(0,_c.getFragmentData)(Ym,r.specialist),size:e,urlParams:o,parts:n,...(0,Qm.omit)(i,"ref")}):(0,Xm.jsx)(wn,{ref:a,...(0,Qm.omit)(i,"ref"),style:{width:e,height:e,...i.style},parts:{...n,image:{...n?.image,alt:r?zo(ze(r)):void 0},fallback:{...n?.fallback,children:r?zo(ze(r)):null}}}));jm.displayName="UserAvatar";var Nc=t("@/graphql");var vn=t("react/jsx-runtime"),WL=(0,Nc.graphql)(`
	query MentionUserSearch($where: UserWhereInput, $first: Int = 10) {
		users(where: $where, first: $first) {
			edges {
				node {
					...UserAvatar
				}
			}
		}
	}
`);function Bc({value:e,onChange:o,mentionedUserIds:n,onMentionedUserIdsChange:r,placeholder:i,size:a="xs",autosize:s=!0,minRows:l=1,maxRows:p=4,autoFocus:c,sx:u,onKeyDown:C}){let{t:g}=(0,_x.useTranslation)(),d=(0,fo.useRef)(null),[y,v]=(0,fo.useState)(!1),[h,F]=(0,fo.useState)(0),P=(0,fo.useRef)(""),[m,{data:N,loading:E}]=(0,Nx.useLazyQuery)(WL),I=(0,fo.useMemo)(()=>Ye(N?.users),[N?.users]),D=(0,fo.useMemo)(()=>I.map(L=>(0,Nc.getFragmentData)(Dx,L)).sort((L,q)=>ze(L).localeCompare(ze(q))),[I]),x=y&&D.length>0;(0,fo.useEffect)(()=>{F(0)},[D]),(0,fo.useEffect)(()=>{if(!y||!D.length)return;let L=P.current.trim();if(!L)return;let q=D.find(X=>ze(X).toLowerCase()===L.toLowerCase());q&&!n.includes(q.id)&&r([...n,q.id])},[D,y,n,r]);let G=(0,fo.useCallback)(L=>{let q=L.currentTarget.value;o(q);let X=L.currentTarget.selectionStart,ke=q.slice(0,X).match(/@([\p{L}\p{M} ]*)$/u);if(ke){let Re=ke[1]??"";P.current=Re,v(!0),m({variables:{where:{...Re?{fullName:{contains:Re}}:{},active:!0},first:8}})}else v(!1)},[o,m]),M=(0,fo.useCallback)(L=>{let q=d.current;if(!q)return;let X=q.selectionStart,ke=e.slice(0,X).lastIndexOf("@");if(ke===-1)return;let Re=ze(L),oe=e.slice(0,ke),Ie=e.slice(X),$e=`${oe}@${Re} ${Ie}`;o($e),v(!1),n.includes(L.id)||r([...n,L.id]),requestAnimationFrame(()=>{let De=ke+Re.length+2;q.setSelectionRange(De,De),q.focus()})},[e,o,n,r]),A=(0,fo.useCallback)(L=>{if(x){if(L.key==="ArrowDown"){L.preventDefault(),F(q=>(q+1)%D.length);return}if(L.key==="ArrowUp"){L.preventDefault(),F(q=>(q-1+D.length)%D.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault();let q=D[h];q&&M(q);return}if(L.key==="Escape"){L.preventDefault(),v(!1);return}}C?.(L)},[x,D,h,M,C]);return(0,fo.useEffect)(()=>{c&&d.current?.focus({preventScroll:!0})},[c]),(0,vn.jsxs)(Qo.Popover,{opened:x,position:"top-start",shadow:"md",width:280,closeOnEscape:!1,closeOnClickOutside:!1,children:[(0,vn.jsx)(Qo.Popover.Target,{children:(0,vn.jsx)(Qo.Textarea,{ref:d,value:e,onChange:G,placeholder:i??g("comments.placeholder",{ns:"tiptap"}),size:a,autosize:s,minRows:l,maxRows:p,sx:u,onKeyDown:A})}),(0,vn.jsx)(Qo.Popover.Dropdown,{p:"xs",onMouseDown:L=>L.preventDefault(),children:E?(0,vn.jsx)(Qo.Text,{size:"xs",color:"dimmed",children:g("loading",{ns:"common"})}):(0,vn.jsx)(Qo.Stack,{spacing:2,children:D.map((L,q)=>(0,vn.jsxs)(Qo.UnstyledButton,{ref:q===h?X=>X?.scrollIntoView({block:"nearest"}):void 0,onClick:()=>M(L),sx:X=>({display:"flex",alignItems:"center",gap:X.spacing.xs,padding:`4px ${X.spacing.xs}`,borderRadius:X.radius.sm,fontSize:X.fontSizes.sm,backgroundColor:q===h?X.colors.gray[1]:"transparent","&:hover":{backgroundColor:X.colors.gray[1]}}),children:[(0,vn.jsx)(jm,{user:L,size:24}),(0,vn.jsx)(Qo.Text,{size:"sm",lineClamp:1,children:ze(L)})]},L.id))})})]})}var Bx=t("react"),Ox=t("@mantine/tiptap"),Gx=t("react/jsx-runtime"),go=(0,Bx.forwardRef)(function({icon:o,title:n,...r},i){return(0,Gx.jsx)(Ox.RichTextEditor.Control,{ref:i,"aria-label":n,title:n,...r,children:o?.({size:"1rem"})})});var Oc=t("@mantine/core"),Ce=t("@fortawesome/free-solid-svg-icons"),Gc=t("@fortawesome/react-fontawesome"),Vr=t("react/jsx-runtime");function ft({size:e,remove:o,add:n,...r}){return(0,Vr.jsxs)(Oc.Box,{pos:"relative",children:[(0,Vr.jsx)(Gc.FontAwesomeIcon,{style:{fontSize:e},...r}),(!!o||!!n)&&(0,Vr.jsx)(Gc.FontAwesomeIcon,{style:{position:"absolute",...o==="bottom-right"&&{bottom:-3,right:-3},...!!n&&{[n]:-3,...(n==="left"||n==="right")&&{top:"50%",translate:"0% -50%"},...(n==="bottom"||n==="top")&&{left:"50%",translate:"-50% 0%"}},fontSize:`calc(${e} * 0.6)`,background:"white",borderRadius:"50%"},icon:o?Ce.faCircleMinus:Ce.faCirclePlus})]})}function KL({size:e,color:o}){return(0,Vr.jsxs)(Oc.Box,{pos:"relative",sx:{lineHeight:1},children:[(0,Vr.jsx)(Gc.FontAwesomeIcon,{style:{fontSize:`calc(${e} * 0.8)`},icon:Ce.faFont}),(0,Vr.jsx)(Oc.Box,{sx:{height:3,marginTop:1,borderRadius:1,backgroundColor:o??"currentColor"}})]})}var Ue={fontColor:e=>KL(e),bold:e=>ft({icon:Ce.faBold,...e}),italic:e=>ft({icon:Ce.faItalic,...e}),underline:e=>ft({icon:Ce.faUnderline,...e}),strikethrough:e=>ft({icon:Ce.faStrikethrough,...e}),clearFormatting:e=>ft({icon:Ce.faTextSlash,...e}),blockquote:e=>ft({icon:Ce.faQuoteLeft,...e}),bulletList:e=>ft({icon:Ce.faListUl,...e}),orderedList:e=>ft({icon:Ce.faListOl,...e}),undo:e=>ft({icon:Ce.faUndo,...e}),redo:e=>ft({icon:Ce.faRedo,...e}),link:e=>ft({icon:Ce.faLink,...e}),unlink:e=>ft({icon:Ce.faUnlink,...e}),table:e=>ft({icon:Ce.faTable,...e}),tableColumns:e=>ft({icon:Ce.faTableColumns,...e}),tableRows:e=>ft({icon:Ce.faTableColumns,...e,rotation:270}),tableStyle:e=>ft({icon:Ce.faPalette,...e}),confidential:e=>ft({icon:Ce.faExclamationTriangle,...e}),nonConfidential:e=>ft({icon:Ce.faCheckCircle,...e}),comment:e=>ft({icon:Ce.faComment,...e}),heading:e=>ft({icon:Ce.faHeading,...e}),alignLeft:e=>ft({icon:Ce.faAlignLeft,...e}),alignCenter:e=>ft({icon:Ce.faAlignCenter,...e}),alignRight:e=>ft({icon:Ce.faAlignRight,...e}),alignJustify:e=>ft({icon:Ce.faAlignJustify,...e}),horizontalRule:e=>ft({icon:Ce.faGripLines,...e}),indent:e=>ft({icon:Ce.faIndent,...e}),outdent:e=>ft({icon:Ce.faOutdent,...e})};var ko=t("react/jsx-runtime");function zx(e){if(!e)return null;let{from:o,to:n}=e.state.selection,r=e.schema.marks.commentThread;if(!r)return null;let a=e.state.doc.resolve(o).marks();for(let s of a)if(s.type===r&&s.attrs.threadId)return s.attrs.threadId;if(o!==n){let s=e.state.doc.resolve(n);for(let l of s.marks())if(l.type===r&&l.attrs.threadId)return l.attrs.threadId}return null}function Ux({editor:e,disabled:o}){let{t:n}=(0,Hx.useTranslation)(),{createThread:r,setActiveThreadId:i,fieldPath:a}=kc(),[s,l]=(0,qn.useState)(!1),[p,c]=(0,qn.useState)(""),[u,C]=(0,qn.useState)([]),[g,d]=(0,qn.useState)(!1),[y,v]=(0,qn.useState)(!1),h=(0,qn.useRef)(null),F=e?!e.state.selection.empty:!1;function P(){let x=zx(e);if(x){i(x);let G=e?.view.dom;if(G){let M=G.querySelector(`span[data-thread-id="${x}"]`);M&&M.click()}return}F&&(l(G=>!G),v(!1))}function m(){c(""),C([]),v(!1),l(!1)}function N(){if(p.trim()){v(!0);return}m()}(0,qn.useEffect)(()=>{if(!s)return;function x(G){let M=G.target;M.closest("[class*='Popover-dropdown']")||h.current?.contains(M)||(v(!1),l(!1))}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[s]);async function E(){if(!e||!p.trim())return;let{from:x,to:G}=e.state.selection,M=e.state.doc.textBetween(x,G," ");d(!0);try{let A=await r({fieldPath:a,quotedText:M,body:p.trim(),mentionedUserIds:u});A?.id&&e.chain().focus(null,{scrollIntoView:!1}).setCommentThread(A.id).run(),c(""),C([]),l(!1)}finally{d(!1)}}let D=!!zx(e);return(0,ko.jsxs)(ho.Popover,{opened:s,onChange:l,position:"bottom",withArrow:!0,shadow:"md",width:300,closeOnClickOutside:!1,closeOnEscape:!1,children:[(0,ko.jsx)(ho.Popover.Target,{children:(0,ko.jsx)(go,{ref:h,icon:Ue.comment,title:D?n("comments.viewComment",{ns:"tiptap"}):n("comments.addComment",{ns:"tiptap"}),onClick:P,disabled:o||!F&&!D,active:D})}),(0,ko.jsx)(ho.Popover.Dropdown,{onKeyDown:x=>{x.key==="Escape"&&(x.stopPropagation(),x.defaultPrevented||N())},children:(0,ko.jsxs)(ho.Stack,{spacing:"xs",children:[(0,ko.jsx)(Bc,{value:p,onChange:c,mentionedUserIds:u,onMentionedUserIdsChange:C,size:"sm",minRows:2,maxRows:6,autoFocus:!0,onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),E())}}),y?(0,ko.jsxs)(ho.Stack,{spacing:6,children:[(0,ko.jsx)(ho.Text,{size:"sm",children:n("comments.discardConfirm",{ns:"tiptap"})}),(0,ko.jsxs)(ho.Group,{position:"right",spacing:"xs",children:[(0,ko.jsx)(ho.Button,{size:"xs",variant:"default",onClick:()=>v(!1),children:n("comments.keepWriting",{ns:"tiptap"})}),(0,ko.jsx)(ho.Button,{size:"xs",color:"red",onClick:m,children:n("comments.discard",{ns:"tiptap"})})]})]}):(0,ko.jsxs)(ho.Group,{position:"right",spacing:"xs",children:[(0,ko.jsx)(ho.Button,{size:"xs",variant:"default",onClick:N,children:n("comments.cancel",{ns:"tiptap"})}),(0,ko.jsx)(ho.Button,{size:"xs",onClick:E,loading:g,disabled:!p.trim(),children:n("comments.addComment",{ns:"tiptap"})})]})]})})]})}var cn=t("react"),Xx=t("next/router"),jx=t("next-i18next"),Et=t("@mantine/core"),Wr=t("@fortawesome/free-solid-svg-icons"),Uc=t("@fortawesome/react-fontawesome");var zc=t("react"),$x=t("next-i18next"),Gt=t("@mantine/core"),Vx=t("@fortawesome/free-solid-svg-icons"),Wx=t("@fortawesome/react-fontawesome"),Kx=t("@/lib/contexts/Me");var so=t("react/jsx-runtime");function qL(e,o){return`${e.charAt(0)}${o.charAt(0)}`.toUpperCase()}function YL(e,o){if(!o?.length)return e;let n=o.map(s=>ze(s).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).sort((s,l)=>l.length-s.length),r=new RegExp(`@(?:${n.join("|")})`,"iu"),i=new RegExp(`(@(?:${n.join("|")}))`,"giu"),a=e.split(i);return a.length===1?e:a.map((s,l)=>r.test(s)?(0,so.jsx)(Gt.Text,{component:"span",weight:600,color:"blue",size:"sm",children:s},l):s)}function qx({comment:e,onUpdate:o}){let{t:n}=(0,$x.useTranslation)(),{data:r}=(0,Kx.useMe)(),[i,a]=(0,zc.useState)(!1),[s,l]=(0,zc.useState)(e.body),[p,c]=(0,zc.useState)(!1),u=e.author.id===r?.me?.id;async function C(){if(!(!s.trim()||!o)){c(!0);try{await o(e.id,s.trim()),a(!1)}finally{c(!1)}}}return(0,so.jsxs)(Gt.Stack,{spacing:4,children:[(0,so.jsxs)(Gt.Group,{position:"apart",noWrap:!0,children:[(0,so.jsxs)(Gt.Group,{spacing:"xs",noWrap:!0,children:[(0,so.jsx)(Gt.Avatar,{size:24,radius:"xl",color:"blue",children:qL(e.author.givenName,e.author.familyName)}),(0,so.jsx)(Gt.Text,{size:"sm",weight:500,lineClamp:1,children:ze(e.author)})]}),(0,so.jsxs)(Gt.Group,{spacing:4,noWrap:!0,children:[(0,so.jsx)(Gt.Text,{size:"xs",color:"dimmed",children:(0,ut.default)(e.createdAt).fromNow()}),u&&o&&!i&&(0,so.jsx)(Gt.ActionIcon,{size:"xs",variant:"subtle",color:"gray",onClick:()=>{l(e.body),a(!0)},title:n("edit",{ns:"common"}),children:(0,so.jsx)(Wx.FontAwesomeIcon,{icon:Vx.faPen,fontSize:10})})]})]}),i?(0,so.jsxs)(Gt.Stack,{spacing:4,children:[(0,so.jsx)(Gt.Textarea,{value:s,onChange:g=>l(g.currentTarget.value),size:"xs",autosize:!0,minRows:1,maxRows:4,autoFocus:!0,onKeyDown:g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),C()),g.key==="Escape"&&a(!1)}}),(0,so.jsxs)(Gt.Group,{spacing:4,children:[(0,so.jsx)(Gt.Button,{size:"xs",compact:!0,onClick:C,loading:p,disabled:!s.trim(),children:n("save",{ns:"common"})}),(0,so.jsx)(Gt.Button,{size:"xs",compact:!0,variant:"subtle",color:"gray",onClick:()=>a(!1),children:n("cancel",{ns:"common"})})]})]}):(0,so.jsx)(Gt.Text,{size:"sm",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:YL(e.body,e.mentionedUsers??[])})]})}var Hc=t("react"),Yx=t("next-i18next"),ha=t("@mantine/core");var ga=t("react/jsx-runtime");function Qx({onSubmit:e}){let{t:o}=(0,Yx.useTranslation)(),[n,r]=(0,Hc.useState)(""),[i,a]=(0,Hc.useState)([]),[s,l]=(0,Hc.useState)(!1);async function p(){if(n.trim()){l(!0);try{await e(n.trim(),i),r(""),a([])}finally{l(!1)}}}return(0,ga.jsxs)(ha.Stack,{spacing:"xs",children:[(0,ga.jsx)(Bc,{value:n,onChange:r,mentionedUserIds:i,onMentionedUserIdsChange:a,onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),p())}}),(0,ga.jsx)(ha.Group,{position:"right",children:(0,ga.jsx)(ha.Button,{size:"xs",compact:!0,onClick:p,loading:s,disabled:!n.trim(),children:o("comments.reply",{ns:"tiptap"})})})]})}var Jx=t("@/lib/contexts/Me"),gt=t("react/jsx-runtime");function Zx({editor:e}){let{t:o}=(0,jx.useTranslation)(),{threads:n,loading:r,activeThreadId:i,setActiveThreadId:a,resolveThread:s,unresolveThread:l,deleteThread:p,addReply:c,updateComment:u}=kc(),C=(0,Xx.useRouter)(),{data:g}=(0,Jx.useMe)(),[d,y]=(0,cn.useState)(null),v=(0,cn.useRef)(null),h=n.find(D=>D.id===i),F=h?.createdBy?.id===g?.me?.id;(0,cn.useEffect)(()=>{if(!e||!i||d)return;let D=e.view.dom.querySelector(`span[data-thread-id="${i}"]`);D&&(D.scrollIntoView({behavior:"smooth",block:"center"}),y(D))},[e,i,d]),(0,cn.useEffect)(()=>{if(!e||r)return;let D=e.schema.marks.commentThread;if(!D)return;let x=new Map(n.map(A=>[A.id,A])),G=new Set,M=new Map;e.state.doc.descendants(A=>{if(A.isText)for(let L of A.marks){if(L.type!==D)continue;let q=x.get(L.attrs.threadId);q?L.attrs.resolved!==q.resolved&&M.set(q.id,q.resolved):G.add(L.attrs.threadId)}});for(let A of G)e.commands.removeCommentThread(A);for(let[A,L]of M)e.commands.updateCommentThreadResolved(A,L);e.view.dom.setAttribute("data-comments-synced","")},[e,n,r]);let P=(0,cn.useCallback)(D=>{let G=D.target.closest("span[data-thread-id]");if(G){let M=G.getAttribute("data-thread-id");if(M&&n.some(A=>A.id===M)){a(M),y(G);return}}a(null),y(null)},[a,n]);(0,cn.useEffect)(()=>{if(!e)return;let D=e.view.dom;return D.addEventListener("click",P),()=>{D.removeEventListener("click",P)}},[e,P]);let m=(0,cn.useCallback)(()=>{if(a(null),y(null),C.query.commentThread){let{commentThread:D,...x}=C.query,[G]=C.asPath.split("?");C.replace({pathname:G,query:x},void 0,{shallow:!0,scroll:!1})}},[a,C]);(0,cn.useEffect)(()=>{if(!h||!d)return;function D(x){x.target.closest("[class*='Popover-dropdown']")||m()}return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[h,d,m]);async function N(){h&&(h.resolved?(await l(h.id),e?.commands.updateCommentThreadResolved(h.id,!1)):(await s(h.id),e?.commands.updateCommentThreadResolved(h.id,!0)))}async function E(){h&&(e?.commands.removeCommentThread(h.id),await p(h.id),m())}async function I(D,x){i&&await c(i,D,x)}return!h||!d?null:(0,gt.jsxs)(Et.Popover,{opened:!!h,onClose:m,position:"bottom-start",withArrow:!0,shadow:"md",width:340,closeOnClickOutside:!1,children:[(0,gt.jsx)(Et.Popover.Target,{children:(0,gt.jsx)("span",{ref:v,style:{position:"absolute",top:d.offsetTop,left:d.offsetLeft,width:d.offsetWidth,height:d.offsetHeight,pointerEvents:"none"}})}),(0,gt.jsx)(Et.Popover.Dropdown,{children:(0,gt.jsxs)(Et.Stack,{spacing:"sm",children:[(0,gt.jsxs)(Et.Group,{position:"apart",noWrap:!0,spacing:"xs",children:[h.quotedText?(0,gt.jsx)(Et.Text,{size:"xs",color:"dimmed",italic:!0,lineClamp:2,sx:D=>({borderLeft:`2px solid ${D.colors.yellow[5]}`,paddingLeft:D.spacing.xs,flex:1,minWidth:0}),children:h.quotedText}):(0,gt.jsx)("span",{}),(0,gt.jsx)(Et.ActionIcon,{size:"sm",onClick:m,children:(0,gt.jsx)(Uc.FontAwesomeIcon,{icon:Wr.faXmark,fontSize:14})})]}),h.resolved&&(0,gt.jsx)(Et.Text,{size:"xs",color:"green",weight:500,children:o("comments.resolved",{ns:"tiptap"})}),(0,gt.jsx)(Et.Stack,{spacing:"sm",sx:{maxHeight:300,overflowY:"auto"},children:h.comments.map(D=>(0,gt.jsx)(qx,{comment:D,onUpdate:u},D.id))}),(0,gt.jsx)(Et.Divider,{}),(0,gt.jsx)(Qx,{onSubmit:I}),(0,gt.jsx)(Et.Divider,{}),(0,gt.jsxs)(Et.Group,{position:"apart",children:[(0,gt.jsx)(Et.Tooltip,{label:o("comments.notOwner",{ns:"tiptap"}),disabled:F,children:(0,gt.jsx)("span",{children:(0,gt.jsx)(Et.Button,{size:"xs",compact:!0,variant:"subtle",color:h.resolved?"orange":"green",leftIcon:(0,gt.jsx)(Uc.FontAwesomeIcon,{icon:h.resolved?Wr.faUndo:Wr.faCheckCircle,fontSize:12}),onClick:N,disabled:!F,children:h.resolved?o("comments.unresolve",{ns:"tiptap"}):o("comments.resolve",{ns:"tiptap"})})})}),(0,gt.jsx)(Et.Tooltip,{label:o("comments.notOwner",{ns:"tiptap"}),disabled:F,children:(0,gt.jsx)("span",{children:(0,gt.jsx)(Et.ActionIcon,{size:"sm",color:"red",variant:"subtle",onClick:E,title:o("comments.deleteThread",{ns:"tiptap"}),disabled:!F,children:(0,gt.jsx)(Uc.FontAwesomeIcon,{icon:Wr.faTrash,fontSize:12})})})})]})]})})]})}var kn=t("react"),Yn=t("@mantine/core"),hC=t("@fortawesome/free-solid-svg-icons"),yC=t("@fortawesome/react-fontawesome"),Kr=t("@tiptap/pm/model"),bC=t("@tiptap/react");var eC=t("@apollo/client"),tC=t("@/graphql");var QL=(0,tC.graphql)(`
	query KaiFeaturesEnabled {
		firm {
			id
			kaiFeaturesEnabled
		}
	}
`);function Jm(){let{data:e}=(0,eC.useQuery)(QL),o=mo({requested:"KAI_FEATURES__USE"});return e?.firm?.kaiFeaturesEnabled===!0&&o==="GRANTED"}var oC=t("@apollo/client"),nC=t("@/graphql"),XL=(0,nC.graphql)(`
	mutation KaiRewriteField($input: KaiFieldOperationInput!) {
		kaiRewriteField(input: $input) {
			text
		}
	}
`);function ya(){let[e]=(0,oC.useMutation)(XL);return async o=>{let{data:n}=await e({variables:{input:o}}),r=n?.kaiRewriteField.text;if(!r)throw new Error("KAI returned no text");return r}}var ba=/[\p{L}\p{N}'’-]/u,jL=/[.!?:;]["'’”)]*$/;function Zm(e,o,n){let r=o,i=n;if(r>0&&ba.test(e.charAt(r-1))&&ba.test(e.charAt(r)))for(;r>0&&ba.test(e.charAt(r-1));)r--;if(i<e.length&&ba.test(e.charAt(i-1))&&ba.test(e.charAt(i)))for(;i<e.length&&ba.test(e.charAt(i));)i++;for(;r<i&&/\s/.test(e.charAt(r));)r++;for(;i>r&&/\s/.test(e.charAt(i-1));)i--;return{from:r,to:i}}function Ii(e){return e?{contextBefore:e.before||void 0,contextAfter:e.after||void 0}:{}}function aC(e,o){let n=JL(e,o);if(n.includes(`
`))return n;let r=n,i=o.before?.trimEnd()??"",a=!!i&&!jL.test(i),s=/^\p{Ll}/u.test(o.text),l=/^\p{Lu}\p{Ll}[\p{L}'’-]*/u.exec(r)?.[0],p=!!l&&new RegExp(`(^|[^\\p{L}])${l}([^\\p{L}]|$)`,"u").test(`${i} ${o.text} ${o.after??""}`);a&&s&&l&&!p&&(r=r.charAt(0).toLowerCase()+r.slice(1));let c=o.after?.trimStart()??"";return!!c&&!/^\p{Lu}/u.test(c)&&!/[.!?]$/.test(o.text)&&/[^.]\.$/.test(r)&&(r=r.slice(0,-1)),r}function $c(e){let o="",n=[];for(let r=0;r<e.length;r++){let i=e.charAt(r);if(/\s/.test(i)){o.length>0&&!o.endsWith(" ")&&(o+=" ",n.push(r));continue}o+=i.toLowerCase(),n.push(r)}return{out:o,map:n}}var rC=16,iC=40;function JL(e,o){let n=e.trim(),i=$c(o.after??"").out.trim().slice(0,iC).trim();if(i.length>=rC){let{out:l,map:p}=$c(n),c=l.indexOf(i);c>0&&(n=n.slice(0,p[c]).trim())}let s=$c(o.before??"").out.trim().slice(-iC).trim();if(s.length>=rC){let{out:l,map:p}=$c(n),c=l.lastIndexOf(s),u=c+s.length;c>=0&&u<l.length&&(n=n.slice((p[u-1]??-1)+1).trim())}return o.text.includes(`
`)||(n=n.replace(/\s*\n+\s*/g," ")),n}function sC(e,o,n=!1){let r=o.text.trim().length,i=n?Math.max(r*4,r+400):Math.max(r*3,r+200);return e.trim().length>i}function lC(e,o){let n=o.length,r=e.map(d=>d.trim()).filter(Boolean);if(n<=1||r.length===n)return n<=1?[r.join(" ")]:r;if(r.length>n)return[...r.slice(0,n-1),r.slice(n-1).join(" ")];let i=r.join(" "),a=i.match(/[^.!?]+[.!?]+["'’”)]*\s*|[^.!?]+$/g)?.map(d=>d.trim())??[],s=a.length>=n?a:i.split(/\s+/);if(s.length<n)return[i,...Array.from({length:n-1},()=>"")];let l=o.reduce((d,y)=>d+Math.max(y,1),0),p=s.reduce((d,y)=>d+y.length,0),c=[],u=0,C=0,g=0;for(let d=0;d<n;d++){g+=Math.max(o[d]??1,1);let y=g/l*p,v=[],h=n-d-1;for(;u<s.length-h&&(v.length===0||d===n-1||C+(s[u]?.length??0)/2<=y);)C+=s[u]?.length??0,v.push(s[u]),u++;c.push(v.join(" "))}return c}var cC=/^\s*(?:[-*•]|\d+[.)])\s+/;function dC(e){return e.type==="text"?e.text??"":e.type==="hardBreak"?`
`:(e.content??[]).map(dC).join("")}function tf(e){switch(e.type){case"bulletList":case"orderedList":return[(e.content??[]).map(o=>`- ${(o.content??[]).flatMap(tf).join(" ").trim()}`).join(`
`)];case"doc":case"blockquote":case"table":case"tableRow":case"tableCell":case"tableHeader":return(e.content??[]).flatMap(tf);case"horizontalRule":return[];default:return[dC(e)]}}function vs(e){return e?typeof e=="string"?e.trim():tf(e).map(o=>o.trim()).filter(Boolean).join(`

`):""}function ef(e){return e?{type:"paragraph",content:[{type:"text",text:e}]}:{type:"paragraph"}}function of(e){let o=[];for(let n of e.replace(/\r\n/g,`
`).split(/\n\s*\n/)){let r=n.split(`
`).map(p=>p.trim()).filter(Boolean);if(r.length===0)continue;let i=[],a=()=>{i.length>0&&(o.push({type:"bulletList",content:i}),i=[])},s=[],l=()=>{s.length>0&&(o.push(ef(s.join(" "))),s=[])};for(let p of r)cC.test(p)?(l(),i.push({type:"listItem",content:[ef(p.replace(cC,""))]})):(a(),s.push(p));l(),a()}return{type:"doc",content:o.length>0?o:[ef("")]}}var yr=t("react"),he=t("@mantine/core"),yo=t("@fortawesome/free-solid-svg-icons"),hr=t("@fortawesome/react-fontawesome"),Te=t("react/jsx-runtime"),ZL=["Shorter","More formal","Simpler"],eF=["As bullet points"];function nf({controller:e,isTitle:o,onReplace:n,onInsert:r,changed:i=!1,selectionChanged:a=!1,onUpdate:s}){let{suggestion:l,regenerate:p,refine:c,cancel:u}=e,[C,g]=(0,yr.useState)(""),[d,y]=(0,yr.useState)(!1),[v,h]=(0,yr.useState)(!1),F=(0,yr.useRef)(null),P=i&&!l?.selection;if((0,yr.useEffect)(()=>{P||h(!1)},[P]),(0,yr.useEffect)(()=>{v&&F.current?.focus()},[v]),!l)return null;let{label:m,original:N,selection:E,result:I,running:D,asking:x}=l,G=P&&s?s:p,M=!!N.trim(),A=L=>{L.trim()&&(c(L.trim()),g(""))};return(0,Te.jsx)(he.Paper,{mt:"xs",p:"sm",radius:"md","aria-live":"polite",sx:L=>({border:`${(0,he.rem)(1)} solid ${L.colors.violet[3]}`,background:L.colorScheme==="dark"?L.colors.dark[6]:L.colors.violet[0]}),children:(0,Te.jsxs)(he.Stack,{spacing:"xs",children:[(0,Te.jsxs)(he.Group,{position:"apart",noWrap:!0,spacing:"xs",children:[(0,Te.jsxs)(he.Group,{spacing:6,noWrap:!0,sx:{minWidth:0},children:[(0,Te.jsx)(he.Text,{span:!0,color:"violet.6",lh:1,children:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faWandMagicSparkles})}),(0,Te.jsx)(he.Text,{size:"sm",weight:600,truncate:!0,children:x?"Ask KAI":`KAI suggestion \xB7 ${m}`}),(0,Te.jsx)(he.Badge,{size:"xs",color:"violet",variant:"outline",children:E?"Selected text":"Not saved yet"})]}),(0,Te.jsx)(he.ActionIcon,{size:"sm",color:"gray","aria-label":"Cancel",onClick:u,children:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faXmark})})]}),P&&!D&&(0,Te.jsxs)(he.Group,{role:"status",spacing:"xs",position:"apart",noWrap:!0,px:8,py:6,sx:L=>({borderRadius:L.radius.sm,background:L.colors.yellow[0]}),children:[(0,Te.jsx)(he.Text,{size:13,color:"dark.7",children:"You've changed this field since KAI made this suggestion."}),s&&(0,Te.jsx)(he.Button,{size:"xs",compact:!0,variant:"subtle",color:"dark",onClick:s,children:"Update suggestion"})]}),E&&a&&(0,Te.jsx)(he.Box,{role:"status",px:8,py:6,sx:L=>({borderRadius:L.radius.sm,background:L.colors.yellow[0]}),children:(0,Te.jsx)(he.Text,{size:13,color:"dark.7",children:"The text you selected has changed, so KAI can't replace it safely. Select the text again and ask KAI, or copy the suggestion."})}),D&&(0,Te.jsxs)(he.Stack,{spacing:6,"aria-label":"KAI is writing",children:[(0,Te.jsx)(he.Skeleton,{height:10,radius:"xl"}),(0,Te.jsx)(he.Skeleton,{height:10,radius:"xl"}),(0,Te.jsx)(he.Skeleton,{height:10,width:"60%",radius:"xl"})]}),!D&&I&&(0,Te.jsx)(he.Box,{mah:260,sx:{overflowY:"auto"},children:(0,Te.jsx)(he.Text,{size:"sm",sx:{whiteSpace:"pre-wrap"},children:I})}),x&&!D&&(0,Te.jsxs)(he.Text,{size:"xs",color:"dimmed",children:["Tell KAI what to do with ",E?"the selected text":"this field",', for example "make it shorter" or "more formal".']}),M&&!D&&I&&(0,Te.jsxs)("div",{children:[(0,Te.jsx)(he.UnstyledButton,{onClick:()=>y(L=>!L),children:(0,Te.jsxs)(he.Group,{spacing:4,children:[(0,Te.jsx)(he.Text,{size:"xs",color:"dimmed",children:d?"Hide the text KAI used":"Show the text KAI used"}),(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faChevronDown,fontSize:(0,he.rem)(9),style:{transform:d?"rotate(180deg)":void 0}})]})}),(0,Te.jsx)(he.Collapse,{in:d,children:(0,Te.jsx)(he.Box,{mah:160,sx:{overflowY:"auto"},children:(0,Te.jsx)(he.Text,{size:"xs",color:"dimmed",mt:4,sx:{whiteSpace:"pre-wrap"},children:N})})})]}),(I||x)&&(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)(he.TextInput,{size:"xs",radius:"md",value:C,disabled:D,autoFocus:x,placeholder:x?"What should KAI do?":"Ask for changes\u2026","aria-label":"Ask KAI for changes",onChange:L=>g(L.currentTarget.value),onKeyDown:L=>{L.key==="Enter"&&(L.preventDefault(),A(C))},rightSection:(0,Te.jsx)(he.ActionIcon,{size:"sm",color:"violet","aria-label":"Send",disabled:!C.trim()||D,onClick:()=>A(C),children:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faPaperPlane,fontSize:(0,he.rem)(11)})})}),(0,Te.jsx)(he.Group,{spacing:6,children:[...ZL,...o?[]:eF].map(L=>(0,Te.jsx)(he.Chip,{size:"xs",radius:"md",color:"violet",variant:"outline",checked:!1,disabled:D||!I&&!M,onChange:()=>A(L),children:L},L))})]}),I&&v&&(0,Te.jsxs)(he.Stack,{spacing:"xs",onKeyDown:L=>{L.key==="Escape"&&(L.stopPropagation(),h(!1))},children:[(0,Te.jsx)(he.Text,{size:"sm",children:"Replace the whole field with KAI's suggestion? The changes you made after asking KAI will be removed. You can undo this with the editor's Undo."}),(0,Te.jsxs)(he.Group,{spacing:"xs",children:[(0,Te.jsx)(he.Button,{ref:F,size:"xs",radius:"md",variant:"default",onClick:()=>h(!1),children:"Keep my changes"}),(0,Te.jsx)(he.Button,{size:"xs",radius:"md",color:"violet",onClick:()=>{h(!1),n(I)},children:"Replace anyway"})]})]}),I&&!v&&(0,Te.jsxs)(he.Group,{spacing:"xs",position:"apart",children:[(0,Te.jsxs)(he.Group,{spacing:"xs",children:[(0,Te.jsx)(he.Button,{size:"xs",radius:"md",color:"violet",disabled:D||!!E&&a,leftIcon:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faCheck}),onClick:()=>P?h(!0):n(I),children:M?E?"Replace selection":"Replace":"Use this"}),r&&M&&(0,Te.jsx)(he.Button,{size:"xs",radius:"md",color:"violet",variant:"light",disabled:D||!!E&&a,leftIcon:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faPlus}),onClick:()=>r(I),children:E?"Insert after":"Insert below"})]}),(0,Te.jsxs)(he.Group,{spacing:4,children:[(0,Te.jsx)(he.CopyButton,{value:I,children:({copied:L,copy:q})=>(0,Te.jsx)(he.Button,{size:"xs",radius:"md",variant:"subtle",color:L?"teal":"gray",leftIcon:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:L?yo.faCheck:yo.faCopy}),onClick:q,children:L?"Copied":"Copy"})}),l.run&&(0,Te.jsx)(he.Button,{size:"xs",radius:"md",variant:"subtle",color:"gray",disabled:D,leftIcon:(0,Te.jsx)(hr.FontAwesomeIcon,{icon:yo.faArrowRotateRight}),onClick:G,children:"Regenerate"}),(0,Te.jsx)(he.Button,{size:"xs",radius:"md",variant:"subtle",color:"gray",onClick:u,children:"Cancel"})]})]})]})})}var Wc=t("react");var uC=t("@apollo/client"),pC="KAI could not process this field. Please try again.";function mC(e){if(!(e instanceof Error)||!(0,uC.isApolloError)(e))return pC;let[o]=e.graphQLErrors,n=o?.extensions?.exception?.status,r=o?.message?.trim();return typeof n!="number"||n===400||!r||/Exception$|^Forbidden resource$|^Unauthorized$/.test(r)?pC:r}var Vc=class extends Error{constructor(){super("KAI rewrote more than the selected text. Please try again.")}};function rf({field:e,isTitle:o}){let n=ya(),[r,i]=(0,Wc.useState)(null),a=(0,Wc.useRef)(0);async function s(p,c){let u=++a.current;i({...p,result:c,running:!0});try{let C=await p.run?.(),g=C&&p.selection?aC(C,p.selection):C;if(g&&p.selection&&sC(g,p.selection,p.label==="Expand"))throw new Vc;u===a.current&&i({...p,result:g,running:!1})}catch(C){if(u!==a.current)return;Bt.default.error(C),Ne({state:"error",title:`${p.label} failed`,message:C instanceof Vc?C.message:mC(C)}),i(c?{...p,result:c,running:!1}:null)}}let l=(p,c,u)=>()=>n({operation:"CUSTOM",field:e,isTitle:o,text:p,instruction:c,...Ii(u)});return{suggestion:r,start:(p,c,u,C,g)=>void s({label:p,original:c,run:()=>u(c),build:u,selection:C,snapshot:g}),ask:(p,c,u)=>{a.current++,i({label:"Ask KAI",original:p,selection:c,snapshot:u,running:!1,asking:!0})},update:(p,c)=>{if(!r?.build)return;let u=r.build;s({...r,original:p,snapshot:c,run:()=>u(p)})},regenerate:()=>{r?.run&&s(r,r.result)},refine:p=>{if(!r)return;let c=r.result??r.original;s({...r,label:p,asking:!1,run:l(c,p,r.selection),build:u=>l(u,p,r.selection)()},r.result)},cancel:()=>{a.current++,i(null)}}}var Po=t("react/jsx-runtime"),SC=(0,kn.createContext)(null);function sf(){return(0,kn.useContext)(SC)}function fC(e){return e.textBetween(0,e.content.size,void 0,"\uFFFC")}function qc(e){let{doc:o,selection:n}=e.state,{$from:r,$to:i,empty:a}=n;if(a)return;let{from:s,to:l}=n;if(r.parent.isTextblock&&i.parent.isTextblock){let C=r.sameParent(i),g=fC(r.parent),d=C?g:fC(i.parent);s=r.start()+Zm(g,r.parentOffset,C?i.parentOffset:g.length).from,l=i.start()+Zm(d,C?r.parentOffset:0,i.parentOffset).to}let p=s<l?o.textBetween(s,l,`

`).trim():"";if(!p)return;let c=o.textBetween(Math.max(0,s-600),s,`

`).slice(-600),u=o.textBetween(l,Math.min(o.content.size,l+600),`

`).slice(0,600);return{from:s,to:l,text:p,before:c,after:u}}function xC({editor:e,options:o,children:n}){let r=rf({field:o?.field??"",isTitle:o?.isTitle}),i=Jm();return(0,Po.jsx)(SC.Provider,{value:i&&e&&o?{editor:e,options:o,controller:r}:null,children:n})}function wi(e){return JSON.stringify(e.getJSON())}function tF(e,o,n){let r;return e.nodesBetween(o,n,i=>{i.isText&&(r=r?r.filter(a=>a.isInSet(i.marks)):i.marks)}),r??[]}function af(e,o){if(o.length===0)return e;let n=[];return e.forEach(r=>{n.push(r.isText?r.mark(o.reduce((i,a)=>a.addToSet(i),r.marks)):r.copy(af(r.content,o)))}),Kr.Fragment.from(n)}function oF(e,o,n,r){let{doc:i,schema:a}=e.state,s=i.resolve(n),l=i.resolve(r),p=tF(i,n,r),c=a.nodeFromJSON(of(o)).content;if(s.sameParent(l)&&s.parent.isTextblock){let v=[];c.forEach(F=>v.push(F.textContent.trim()));let h=v.filter(Boolean).join(" ");return new Kr.Slice(af(Kr.Fragment.from(h?a.text(h):[]),p),0,0)}let u=nF(e,c,n,r),C=u.firstChild,g=u.lastChild,d=s.parent.isTextblock&&C?.isTextblock?1:0,y=l.parent.isTextblock&&g?.isTextblock?1:0;return new Kr.Slice(af(u,p),d,y)}function nF(e,o,n,r){let{doc:i,schema:a}=e.state,s=[],l=!0;if(i.nodesBetween(n,r,(c,u)=>{if(!c.isTextblock)return!0;l&&(l=c.type===a.nodes.paragraph);let C=Math.max(n,u+1),g=Math.min(r,u+1+c.content.size);return s.push(Math.max(0,g-C)),!1}),o.forEach(c=>{l&&(l=c.type===a.nodes.paragraph)}),!l||s.length<2||o.childCount===s.length)return o;let p=[];return o.forEach(c=>p.push(c.textContent)),Kr.Fragment.from(lC(p,s).map(c=>a.nodes.paragraph.create(null,c?a.text(c):null)))}var rF=[{label:"Improve",operation:"IMPROVE"},{label:"Shorten",instruction:"Make it shorter"},{label:"Expand",operation:"EXPAND"},{label:"Fix grammar",operation:"PROOFREAD"}];function CC(){let e=sf(),o=ya(),n=e?.editor,r=e?.controller.suggestion,i=r?.selection,a=(0,kn.useRef)(null),[,s]=(0,kn.useState)(0);if((0,kn.useEffect)(()=>{a.current=i?{from:i.from,to:i.to}:null},[i]),(0,kn.useEffect)(()=>{if(!n)return;let v=({transaction:h})=>{h.docChanged&&(a.current&&(a.current={from:h.mapping.map(a.current.from,1),to:h.mapping.map(a.current.to,-1)}),s(F=>F+1))};return n.on("transaction",v),()=>{n.off("transaction",v)}},[n]),!e||!n)return null;let{options:l,controller:p}=e,c=a.current,u=i&&c&&c.from<=c.to&&c.to<=n.state.doc.content.size?n.state.doc.textBetween(c.from,c.to,`

`).trim():void 0,C=!!i&&u!==i.text,g=!i&&r?.snapshot!==void 0&&wi(n)!==r.snapshot,d=(v,h)=>{let F=of(v);if(i){if(!c||C)return;let{from:P,to:m}=c;n.chain().focus().command(({tr:N})=>{let E=oF(n,v,P,m);return h==="replace"?N.replaceRange(P,m,E):E.openStart===0&&E.content.firstChild?.isText?N.replaceRange(m,m,new Kr.Slice(E.content.addToStart(n.schema.text(" ")),0,0)):N.replaceRange(m,m,E),!0}).run()}else h==="replace"?n.chain().focus().setContent(F,!0).run():n.chain().focus().insertContentAt(n.state.doc.content.size,F.content??[]).run();p.cancel()},y=v=>{let h=qc(n);h&&p.start(v.label,h.text,F=>o("instruction"in v?{operation:"CUSTOM",field:l.field,isTitle:l.isTitle,text:F,instruction:v.instruction,...Ii(h)}:{operation:v.operation,...Ii(h),field:l.field,isTitle:l.isTitle,text:F}),h,wi(n))};return(0,Po.jsxs)(Po.Fragment,{children:[(0,Po.jsx)("div",{style:{display:"contents"},children:(0,Po.jsx)(bC.BubbleMenu,{editor:n,pluginKey:"kaiSelection",tippyOptions:{duration:100,placement:"top-start",maxWidth:"none"},shouldShow:({editor:v,state:h})=>v.isEditable&&!h.selection.empty&&!r?.running,children:(0,Po.jsx)(Yn.Paper,{shadow:"md",radius:"md",p:4,withBorder:!0,children:(0,Po.jsxs)(Yn.Group,{spacing:2,noWrap:!0,children:[(0,Po.jsx)(Yn.Text,{span:!0,color:"violet.6",px:6,lh:1,children:(0,Po.jsx)(yC.FontAwesomeIcon,{icon:hC.faWandMagicSparkles,fontSize:(0,Yn.rem)(12)})}),rF.map(v=>(0,Po.jsx)(gC,{onClick:()=>y(v),children:v.label},v.label)),(0,Po.jsx)(gC,{onClick:()=>{let v=qc(n);v&&p.ask(v.text,v,wi(n))},children:"Ask KAI\u2026"})]})})})}),(0,Po.jsx)(nf,{controller:p,isTitle:l.isTitle,changed:g,selectionChanged:C,onUpdate:()=>p.update(lf(n),wi(n)),onReplace:v=>d(v,"replace"),onInsert:l.isTitle?void 0:v=>d(v,"insert")})]})}function gC({children:e,onClick:o}){return(0,Po.jsx)(Yn.UnstyledButton,{onMouseDown:n=>n.preventDefault(),onClick:o,px:8,py:4,sx:n=>({borderRadius:n.radius.sm,fontSize:n.fontSizes.xs,fontWeight:600,whiteSpace:"nowrap",color:n.colorScheme==="dark"?n.colors.violet[2]:n.colors.violet[7],"&:hover":{background:n.colorScheme==="dark"?n.colors.dark[5]:n.colors.violet[0]}}),children:e})}function lf(e){return vs(e.getJSON())}var wC=t("react"),vC=Y(t("next/image")),At=t("@mantine/core"),ks=t("@fortawesome/free-solid-svg-icons"),Xc=t("@fortawesome/react-fontawesome"),cf=t("@mantine/tiptap");var TC=t("iso-language-codes"),Sa={...TC.by639_2T};var Ro=[];var at=t("react/jsx-runtime"),IC=[{operation:"IMPROVE",label:"Improve writing",icon:"/assets/logo/improving.svg"},{operation:"PROOFREAD",label:"Fix spelling & grammar",icon:"/assets/logo/improving.svg"},{operation:"SUMMARIZE",label:"Summarize",icon:"/assets/logo/summarizing.svg"},{operation:"EXPAND",label:"Expand",icon:"/assets/logo/improving.svg"},{operation:"ANONYMIZE",label:"Anonymize",icon:"/assets/logo/anonymizing.svg"}];function Yc(e){return Sa[e]?.name??e}function Qc({src:e}){return(0,at.jsx)(vC.default,{src:e,alt:"",width:18,height:18})}var iF=e=>({display:"inline-flex",alignItems:"center",gap:(0,At.rem)(4),paddingInline:(0,At.rem)(6),background:e.colors.violet[0],border:`${(0,At.rem)(1)} solid ${e.colors.violet[3]}`,color:e.colors.violet[7],"&:hover":{background:e.colors.violet[1]}});function aF({running:e}){return(0,at.jsxs)(at.Fragment,{children:[e?(0,at.jsx)(At.Loader,{size:12,color:"violet"}):(0,at.jsx)(Xc.FontAwesomeIcon,{icon:ks.faWandMagicSparkles,fontSize:(0,At.rem)(12)}),(0,at.jsx)(At.Text,{span:!0,size:"xs",weight:700,children:"KAI"}),(0,at.jsx)(Xc.FontAwesomeIcon,{icon:ks.faChevronDown,fontSize:(0,At.rem)(9)})]})}function sF(e){return(Array.isArray(e)?e:[e]).map(o=>vs(o)).find(Boolean)??""}function lF({field:e,isTitle:o,operations:n=IC.map(({operation:g})=>g),actions:r=Ro,generateFrom:i,language:a,translateFrom:s,getTarget:l,onRun:p,onAsk:c,running:u,target:C}){let g=ya(),[d,y]=(0,wC.useState)({text:""}),{text:v,selection:h}=d,F=vs(s?.content),P=!!s&&!!a&&s.language!==a&&!!F,m=sF(i?.content),N=()=>h?l().text:v;return(0,at.jsxs)(At.Menu,{withinPortal:!0,width:240,position:"bottom-end",disabled:u,onOpen:()=>y(l()),children:[(0,at.jsx)(At.Menu.Target,{children:C}),(0,at.jsxs)(At.Menu.Dropdown,{children:[(0,at.jsxs)(At.Menu.Label,{children:["KAI \xB7 ",h?"Selected text":e]}),i&&!h&&(0,at.jsxs)(At.Menu.Item,{icon:(0,at.jsx)(Qc,{src:"/assets/logo/improving.svg"}),disabled:!m,onClick:()=>p(`Generate from ${i.label}`,N(),()=>g({operation:i.operation??"GENERATE_TITLE",field:e,text:m})),children:["Generate from ",i.label]}),IC.filter(({operation:E})=>n.includes(E)).map(({operation:E,label:I,icon:D})=>(0,at.jsx)(At.Menu.Item,{icon:(0,at.jsx)(Qc,{src:D}),disabled:!v,onClick:()=>p(I,v,x=>g({operation:E,field:e,isTitle:o,text:x,...Ii(h)}),h),children:I},E)),r.map(({label:E,icon:I,run:D})=>(0,at.jsx)(At.Menu.Item,{icon:(0,at.jsx)(Qc,{src:I??"/assets/logo/improving.svg"}),disabled:!v,onClick:()=>p(E,v,x=>D(x),h),children:E},E)),s&&s.language!==a&&!h&&(0,at.jsxs)(At.Menu.Item,{icon:(0,at.jsx)(Qc,{src:"/assets/logo/translation.svg"}),disabled:!P,onClick:()=>p(`Translate from ${Yc(s.language)}`,N(),()=>g({operation:"TRANSLATE",field:e,isTitle:o,text:F,languageFrom:Yc(s.language),languageTo:Yc(a)})),children:["Translate from ",Yc(s.language)]}),(0,at.jsx)(At.Menu.Divider,{}),(0,at.jsx)(At.Menu.Item,{icon:(0,at.jsx)(Xc.FontAwesomeIcon,{icon:ks.faWandMagicSparkles,fontSize:(0,At.rem)(14)}),disabled:!v,onClick:()=>c(v,h),children:"Ask KAI\u2026"})]})]})}function kC(){let e=sf();if(!e)return null;let{editor:o,options:n,controller:r}=e,i=!!r.suggestion?.running;return(0,at.jsx)(cf.RichTextEditor.ControlsGroup,{children:(0,at.jsx)(lF,{...n,getTarget:()=>{let a=qc(o);return a?{text:a.text,selection:a}:{text:lf(o)}},onRun:(a,s,l,p)=>r.start(a,s,l,p,wi(o)),onAsk:(a,s)=>r.ask(a,s,wi(o)),running:i,target:(0,at.jsx)(cf.RichTextEditor.Control,{"aria-label":`KAI for ${n.field}`,title:i?"KAI is writing\u2026":`KAI \xB7 ${n.field}`,disabled:i,sx:a=>({...iF(a),width:"auto"}),children:(0,at.jsx)(aF,{running:i})})})})}var PC=t("next-i18next"),Qn=t("@mantine/core"),RC=t("@fortawesome/free-solid-svg-icons"),EC=t("@fortawesome/react-fontawesome"),AC=t("@mantine/tiptap");var dn=t("react/jsx-runtime"),cF={DISC:"controlLabel.bulletDisc",DASH:"controlLabel.bulletDash",ARROW:"controlLabel.bulletArrow",CHECK:"controlLabel.bulletCheck",SQUARE:"controlLabel.bulletSquare",CIRCLE:"controlLabel.bulletCircle"};function LC({editor:e,disabled:o}){let{t:n}=(0,PC.useTranslation)(),r=!!e?.isActive("bulletList"),i=r?xi(e?.getAttributes("bulletList")):la,a=n("controlLabel.bulletStyle",{ns:"tiptap"}),s=l=>{if(!e)return;let p=e.chain().focus();e.isActive("bulletList")||p.toggleBulletList(),p.setBulletStyle(l).run()};return(0,dn.jsxs)(Qn.Menu,{withinPortal:!0,position:"bottom-start",shadow:"md",children:[(0,dn.jsx)(Qn.Menu.Target,{children:(0,dn.jsx)(AC.RichTextEditor.Control,{"aria-label":a,title:a,disabled:o,active:r&&i!==la,"data-test":"bullet-style",children:(0,dn.jsxs)(Qn.Box,{component:"span",sx:{display:"inline-flex",alignItems:"center",gap:2,lineHeight:1},children:[(0,dn.jsx)(Qn.Box,{component:"span",sx:{fontSize:"1rem",minWidth:"0.8em",textAlign:"center"},children:hc[i]}),(0,dn.jsx)(EC.FontAwesomeIcon,{icon:RC.faCaretDown,style:{fontSize:"0.6rem"}})]})})}),(0,dn.jsxs)(Qn.Menu.Dropdown,{children:[(0,dn.jsx)(Qn.Menu.Label,{children:a}),Am.map(l=>{let p=r&&i===l;return(0,dn.jsx)(Qn.Menu.Item,{role:"menuitemradio","aria-checked":p,fw:p?700:400,icon:(0,dn.jsx)(Qn.Box,{w:16,sx:{fontSize:"1rem",lineHeight:1,textAlign:"center"},children:hc[l]}),onClick:()=>s(l),children:n(cF[l],{ns:"tiptap"})},l)})]})]})}var df=t("next-i18next"),nt=t("@mantine/core"),Jc=t("@fortawesome/free-solid-svg-icons"),Zc=t("@fortawesome/react-fontawesome"),MC=t("@mantine/tiptap");var qe=t("react/jsx-runtime"),dF={ALL:"controlLabel.tableBordersAll",HORIZONTAL:"controlLabel.tableBordersHorizontal",NONE:"controlLabel.tableBordersNone"};function DC({editor:e,colors:o,disabled:n}){let{t:r}=(0,df.useTranslation)();if(!e?.isActive("table"))return null;let i=Go(e.getAttributes("table")),a=Gr(e.getAttributes("tableRow")),s=r("controlLabel.tableStyle",{ns:"tiptap"}),l=p=>e.chain().focus().updateTableStyle(p).run();return(0,qe.jsxs)(nt.Menu,{withinPortal:!0,position:"bottom-start",shadow:"md",closeOnItemClick:!1,children:[(0,qe.jsx)(nt.Menu.Target,{children:(0,qe.jsx)(MC.RichTextEditor.Control,{"aria-label":s,title:s,disabled:n,"data-test":"table-style",children:Ue.tableStyle({size:"1rem"})})}),(0,qe.jsxs)(nt.Menu.Dropdown,{children:[(0,qe.jsx)(nt.Menu.Label,{children:r("controlLabel.tableBorders",{ns:"tiptap"})}),(0,qe.jsx)(nt.Menu.Item,{role:"menuitemradio","aria-checked":i.borders===null,icon:(0,qe.jsx)(jc,{checked:i.borders===null}),onClick:()=>l({borders:null}),children:r("controlLabel.tableBordersDefault",{ns:"tiptap"})}),Fm.map(p=>(0,qe.jsx)(nt.Menu.Item,{role:"menuitemradio","aria-checked":i.borders===p,icon:(0,qe.jsx)(jc,{checked:i.borders===p}),onClick:()=>l({borders:p}),children:r(dF[p],{ns:"tiptap"})},p)),(0,qe.jsx)(nt.Menu.Divider,{}),(0,qe.jsx)(nt.Menu.Label,{children:r("controlLabel.tableEmphasis",{ns:"tiptap"})}),(0,qe.jsx)(nt.Menu.Item,{role:"menuitemcheckbox","aria-checked":i.headerRow,icon:(0,qe.jsx)(jc,{checked:i.headerRow}),onClick:()=>l({headerRow:!i.headerRow}),children:r("controlLabel.tableHeaderRow",{ns:"tiptap"})}),i.headerRow&&o.length>0&&(0,qe.jsx)(FC,{label:r("controlLabel.tableHeaderRowColor",{ns:"tiptap"}),colors:o,value:i.headerRowColor,onChange:p=>l({headerRowColor:p})}),(0,qe.jsx)(nt.Menu.Item,{role:"menuitemcheckbox","aria-checked":i.headerColumn,icon:(0,qe.jsx)(jc,{checked:i.headerColumn}),onClick:()=>l({headerColumn:!i.headerColumn}),children:r("controlLabel.tableHeaderColumn",{ns:"tiptap"})}),i.headerColumn&&o.length>0&&(0,qe.jsx)(FC,{label:r("controlLabel.tableHeaderColumnColor",{ns:"tiptap"}),colors:o,value:i.headerColumnColor,onChange:p=>l({headerColumnColor:p})}),(0,qe.jsx)(nt.Menu.Divider,{}),(0,qe.jsx)(nt.Menu.Label,{children:r("controlLabel.tableSize",{ns:"tiptap"})}),(0,qe.jsxs)(nt.Box,{px:"xs",pb:6,children:[(0,qe.jsx)(nt.NumberInput,{size:"xs",label:r("controlLabel.tableRowHeight",{ns:"tiptap"}),placeholder:r("controlLabel.tableRowHeightAuto",{ns:"tiptap"}),value:a??"",min:1,max:2e3,step:10,precision:0,onChange:p=>e.chain().focus().setTableRowHeight(typeof p=="number"?Math.round(p):null).run()}),(0,qe.jsx)(nt.Text,{size:"xs",color:"dimmed",mt:6,maw:240,children:r("controlLabel.tableResizeHint",{ns:"tiptap"})})]})]})]})}function jc({checked:e}){return(0,qe.jsx)(nt.Box,{w:14,sx:{display:"flex",justifyContent:"center"},children:e&&(0,qe.jsx)(Zc.FontAwesomeIcon,{icon:Jc.faCheck,size:"xs"})})}function FC({label:e,colors:o,value:n,onChange:r}){let{t:i}=(0,df.useTranslation)();return(0,qe.jsxs)(nt.Box,{px:"xs",pb:6,children:[(0,qe.jsx)(nt.Text,{size:"xs",color:"dimmed",mb:4,children:e}),(0,qe.jsxs)(nt.Group,{spacing:6,maw:7*32,children:[(0,qe.jsx)(nt.UnstyledButton,{"aria-label":i("controlLabel.tableFillDefault",{ns:"tiptap"}),"aria-pressed":n===null,title:i("controlLabel.tableFillDefault",{ns:"tiptap"}),onClick:()=>r(null),children:(0,qe.jsx)(nt.ColorSwatch,{color:"transparent",size:26,radius:"sm",withShadow:!0,children:n===null&&(0,qe.jsx)(Zc.FontAwesomeIcon,{icon:Jc.faCheck,size:"xs"})})}),o.map(a=>{let s=a.toUpperCase()===n;return(0,qe.jsx)(nt.UnstyledButton,{"aria-label":i("controlLabel.tableFillSwatch",{ns:"tiptap",color:a}),"aria-pressed":s,title:a,onClick:()=>r(a),children:(0,qe.jsx)(nt.ColorSwatch,{color:a,size:26,radius:"sm",children:s&&(0,qe.jsx)(Zc.FontAwesomeIcon,{icon:Jc.faCheck,color:"white",size:"xs"})})},a)})]})]})}var _C=t("next-i18next"),Ho=t("@mantine/core"),NC=t("@fortawesome/free-solid-svg-icons"),BC=t("@fortawesome/react-fontawesome"),OC=t("@mantine/tiptap");var Xo=t("react/jsx-runtime");function GC({editor:e,colors:o,disabled:n}){let{t:r}=(0,_C.useTranslation)();if(o.length===0)return null;let i=e?.getAttributes("fontColor").color,a=typeof i=="string"?i.toUpperCase():void 0,s=r("controlLabel.fontColor",{ns:"tiptap"});return(0,Xo.jsxs)(Ho.Menu,{withinPortal:!0,position:"bottom-start",shadow:"md",children:[(0,Xo.jsx)(Ho.Menu.Target,{children:(0,Xo.jsx)(OC.RichTextEditor.Control,{"aria-label":s,title:s,disabled:n,active:!!a,children:Ue.fontColor({size:"1rem",color:a})})}),(0,Xo.jsxs)(Ho.Menu.Dropdown,{children:[(0,Xo.jsx)(Ho.Menu.Label,{children:s}),(0,Xo.jsx)(Ho.Group,{spacing:6,px:"xs",pb:"xs",maw:7*32,children:o.map(l=>{let p=l.toUpperCase()===a;return(0,Xo.jsx)(Ho.UnstyledButton,{"aria-label":r("controlLabel.fontColorSwatch",{ns:"tiptap",color:l}),"aria-pressed":p,title:l,onClick:()=>e?.chain().focus().setFontColor(l).run(),children:(0,Xo.jsx)(Ho.ColorSwatch,{color:l,size:26,radius:"sm",children:p&&(0,Xo.jsx)(BC.FontAwesomeIcon,{icon:NC.faCheck,color:"white",size:"xs"})})},l)})}),(0,Xo.jsx)(Ho.Menu.Item,{disabled:!a,onClick:()=>e?.chain().focus().unsetFontColor().run(),children:(0,Xo.jsx)(Ho.Text,{size:"sm",children:r("controlLabel.fontColorRemove",{ns:"tiptap"})})})]})]})}var qC=t("@mantine/tiptap"),YC=Y(t("@tiptap/extension-blockquote")),QC=Y(t("@tiptap/extension-bold")),XC=Y(t("@tiptap/extension-document")),jC=Y(t("@tiptap/extension-gapcursor")),JC=Y(t("@tiptap/extension-hard-break")),ZC=Y(t("@tiptap/extension-heading")),eT=Y(t("@tiptap/extension-history")),tT=Y(t("@tiptap/extension-horizontal-rule")),oT=Y(t("@tiptap/extension-italic")),nT=Y(t("@tiptap/extension-list-item")),rT=Y(t("@tiptap/extension-ordered-list")),iT=Y(t("@tiptap/extension-paragraph")),aT=Y(t("@tiptap/extension-strike")),sT=Y(t("@tiptap/extension-table-cell")),lT=Y(t("@tiptap/extension-table-header")),cT=Y(t("@tiptap/extension-text")),dT=Y(t("@tiptap/extension-text-align")),pT=t("@tiptap/extension-text-style"),uT=Y(t("@tiptap/extension-underline"));var UC=t("@tiptap/core"),ed=t("@tiptap/pm/state");function pF(e){return e.includes('class="Mso')||e.includes("urn:schemas-microsoft-com:office")||e.includes("<o:p>")||e.includes("<o:p/>")}function uF(e){let o=e;o=o.replace(/<!--\[if[\s\S]*?<!\[endif]-->/gi,""),o=o.replace(/<\?xml[\s\S]*?\?>/gi,""),o=o.replace(/<o:p[\s\S]*?<\/o:p>/gi,""),o=o.replace(/<o:p\s*\/>/gi,""),o=o.replace(/<\/?\w+:[^>]*>/gi,"");let n=new DOMParser().parseFromString(o,"text/html");mF(n);let r=n.body.querySelectorAll("*");for(let i of r)i.removeAttribute("class"),i.removeAttribute("lang"),i.removeAttribute("xml:lang");return yF(n),SF(n),n.body.innerHTML}function mF(e){let o=Array.from(e.body.querySelectorAll("p")),n=0;for(;n<o.length;){let r=o[n];if(!zC(r)){n++;continue}let i=[];for(;n<o.length&&zC(o[n]);)i.push(o[n]),n++;let a=i[0],s=hF(i,e);if(s&&a.parentNode){a.parentNode.insertBefore(s,a);for(let l of i)l.parentNode?.removeChild(l)}}}function zC(e){let o=e.getAttribute("class")||"",n=e.getAttribute("style")||"";return o.includes("MsoListParagraph")||n.includes("mso-list:")}function fF(e){let n=(e.getAttribute("style")||"").match(/mso-list:.*?level(\d+)/);return n?parseInt(n[1],10):1}function HC(e){let o=e.querySelector('span[style*="mso-list:Ignore"]');if(o){let n=o.textContent?.trim()||"";if(/^[0-9a-zA-Z]+[.)]/.test(n)||/^[ivxIVX]+[.)]/.test(n))return"ol"}return"ul"}function gF(e){let o=e.querySelector('span[style*="mso-list:Ignore"]');o&&o.remove()}function hF(e,o){if(e.length===0)return null;let n=e[0],r=HC(n),i=o.createElement(r),a=[{list:i,level:1}];for(let s of e){let l=fF(s),p=HC(s);for(gF(s);a.length>1&&a[a.length-1].level>l;)a.pop();let c=a[a.length-1];if(l>c.level){let C=c.list.lastElementChild||o.createElement("li");c.list.lastElementChild||c.list.appendChild(C);for(let g=c.level+1;g<=l;g++){let d=o.createElement(p);if(C.appendChild(d),a.push({list:d,level:g}),g<l){let y=o.createElement("li");d.appendChild(y),C=y}}}let u=o.createElement("li");for(;s.firstChild;)u.appendChild(s.firstChild);a[a.length-1].list.appendChild(u)}return i}function yF(e){let o=Array.from(e.body.querySelectorAll("*"));for(let n of o){if(!(n instanceof HTMLElement))continue;let r=n.getAttribute("style");if(!r)continue;n.tagName==="SPAN"&&bF(n,r);let i=r.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);i?n.setAttribute("style",`color: ${i[1].trim()}`):n.removeAttribute("style")}}function bF(e,o){let n=e.ownerDocument,r=[];/font-weight\s*:\s*(bold|[7-9]00)/i.test(o)&&r.push("b"),/font-style\s*:\s*italic/i.test(o)&&r.push("i"),/text-decoration\s*:[^;]*underline/i.test(o)&&r.push("u"),/text-decoration\s*:[^;]*line-through/i.test(o)&&r.push("s");for(let i of r){if(e.closest(i))continue;let a=n.createElement(i);for(;e.firstChild;)a.appendChild(e.firstChild);e.appendChild(a)}}function SF(e){let o=!0;for(;o;){o=!1;let n=Array.from(e.body.querySelectorAll("span"));for(let r of n)if(r.attributes.length===0){let i=r.parentNode;if(i){for(;r.firstChild;)i.insertBefore(r.firstChild,r);i.removeChild(r),o=!0}}}}var $C=UC.Extension.create({name:"cleanPastedHtml",addProseMirrorPlugins(){return[new ed.Plugin({key:new ed.PluginKey("cleanPastedHtml"),props:{transformPastedHTML(e){return pF(e)?uF(e):e}}})]}});var VC=t("@tiptap/extension-color");var xF="background-color: rgba(255, 0, 0, 0.25); color: #000;",td=VC.Color.extend({addGlobalAttributes(){return[{types:this.options.types,attributes:{color:{default:null,parseHTML:e=>e.style.color?.replace(/["']+/g,"")||null,renderHTML:e=>e.color?xc(e.color)?{style:xF}:{style:`color: ${e.color}`}:{}}}}]}});var od=t("@tiptap/core"),nd=t("@tiptap/pm/model"),rd=t("@tiptap/pm/state"),id=od.Mark.create({name:"commentThread",addOptions(){return{HTMLAttributes:{}}},addAttributes(){return{threadId:{default:null,parseHTML:e=>e.getAttribute("data-thread-id"),renderHTML:e=>({"data-thread-id":e.threadId})},resolved:{default:!1,parseHTML:e=>e.getAttribute("data-resolved")==="true",renderHTML:e=>({"data-resolved":String(e.resolved)})}}},parseHTML(){return[{tag:"span[data-thread-id]"}]},renderHTML({HTMLAttributes:e}){return["span",(0,od.mergeAttributes)(this.options.HTMLAttributes,e,{class:"comment-thread-mark"}),0]},excludes:"",addCommands(){return{setCommentThread:e=>({commands:o})=>o.setMark(this.name,{threadId:e,resolved:!1}),removeCommentThread:e=>({tr:o,state:n})=>{let{doc:r}=n,i=n.schema.marks[this.name];return i?(r.descendants((a,s)=>{if(!a.isText)return;let l=a.marks.find(p=>p.type===i&&p.attrs.threadId===e);l&&o.removeMark(s,s+a.nodeSize,l)}),!0):!1},updateCommentThreadResolved:(e,o)=>({tr:n,state:r})=>{let{doc:i}=r,a=r.schema.marks[this.name];return a?(i.descendants((s,l)=>{if(!s.isText)return;let p=s.marks.find(c=>c.type===a&&c.attrs.threadId===e);p&&(n.removeMark(l,l+s.nodeSize,p),n.addMark(l,l+s.nodeSize,a.create({threadId:e,resolved:o})))}),!0):!1}}},addProseMirrorPlugins(){let e=this.type;function o(n){let r=[];return n.forEach(i=>{if(i.isText){let a=i.marks.filter(s=>s.type!==e);r.push(i.mark(a))}else i.content.size>0?r.push(i.copy(o(i.content))):r.push(i)}),nd.Fragment.from(r)}return[new rd.Plugin({key:new rd.PluginKey("commentThreadPaste"),props:{transformPasted(n){return new nd.Slice(o(n.content),n.openStart,n.openEnd)}}})]}});var ad=t("@tiptap/core"),CF="#FF0000",TF=`color: ${CF};`,sd=ad.Mark.create({name:"confidential",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"span[data-confidential]"}]},renderHTML({HTMLAttributes:e}){return["span",(0,ad.mergeAttributes)(this.options.HTMLAttributes,e,{"data-confidential":"true",class:"confidential",style:TF}),0]},addCommands(){return{setConfidential:()=>({chain:e,editor:o})=>WC(e().setMark(this.name),o).run(),toggleConfidential:()=>({chain:e,editor:o})=>o.isActive(this.name)?e().unsetMark(this.name).run():WC(e().setMark(this.name),o).run(),unsetConfidential:()=>({commands:e})=>e.unsetMark(this.name)}}}),IF=["textStyle","fontColor"];function WC(e,o){return IF.reduce((n,r)=>o.schema.marks[r]?n.unsetMark(r):n,e)}var ld=t("@tiptap/core");var KC=ld.Mark.create({name:"fontColor",addAttributes(){return{color:{default:null,parseHTML:e=>e.getAttribute("data-font-color"),renderHTML:e=>ca(e.color)?{"data-font-color":e.color,style:`color: ${e.color}`}:{}}}},parseHTML(){return[{tag:"span[data-font-color]"}]},renderHTML({HTMLAttributes:e}){return["span",(0,ld.mergeAttributes)(e),0]},addCommands(){return{setFontColor:e=>({chain:o,editor:n})=>{let r=o().setMark(this.name,{color:e});return(n.schema.marks.textStyle?r.unsetMark("textStyle"):r).run()},unsetFontColor:()=>({commands:e})=>e.unsetMark(this.name)}}});var pf=[$C,XC.default,JC.default,iT.default,cT.default,QC.default,oT.default,uT.default,aT.default,YC.default,nT.default,Sc,rT.default,jC.default,pT.TextStyle,KC,ZC.default.configure({levels:[2,3]}),dT.default.configure({types:["heading","paragraph"]}),tT.default,Cc.configure({allowTableNodeSelection:!0,resizable:!0}),Tc,lT.default,sT.default],wF=[...pf,eT.default,qC.Link,td.configure({types:["textStyle"]}),sd];var fT=t("@tiptap/core"),cd=t("@tiptap/pm/state");function vF(e){if(!/<table[\s>]/i.test(e))return e;let o=new DOMParser().parseFromString(e,"text/html"),n=mT(o.body);for(;n;){let r=o.createDocumentFragment();for(let i of Array.from(n.querySelectorAll("th, td"))){let a=o.createElement("p");for(;i.firstChild;)a.appendChild(i.firstChild);r.appendChild(a)}n.replaceWith(r),n=mT(o.body)}return o.body.innerHTML}function mT(e){for(let o of Array.from(e.querySelectorAll("table")))if(!o.querySelector("table"))return o;return null}var gT=fT.Extension.create({name:"stripPastedTables",addProseMirrorPlugins(){return[new cd.Plugin({key:new cd.PluginKey("stripPastedTables"),props:{transformPastedHTML(e){return vF(e)}}})]}});var xT=t("lodash");var hT={doc:(e,o)=>o(),paragraph:(e,o)=>{let n=e.attrs?.textAlign;return`<p${n&&n!=="left"?` style="text-align:${Do(n)}"`:""}>${o()}</p>`},text:e=>Do(e.text||""),heading:(e,o)=>{let n=e.attrs?.level||1,r=e.attrs?.textAlign,i=r&&r!=="left"?` style="text-align:${Do(r)}"`:"";return`<h${n}${i}>${o()}</h${n}>`},bulletList:(e,o)=>`<ul${Object.entries(yc(xi(e.attrs))).map(([r,i])=>` ${r}="${Do(i)}"`).join("")}>${o()}</ul>`,orderedList:(e,o)=>`<ol>${o()}</ol>`,listItem:(e,o)=>`<li>${o()}</li>`,blockquote:(e,o)=>`<blockquote>${o()}</blockquote>`,codeBlock:e=>`<pre><code>${Do(e.content?.map(o=>o.text).join(`
`)||"")}</code></pre>`,hardBreak:()=>"<br />",horizontalRule:()=>"<hr />",image:e=>{let o=Do(e.attrs?.src||""),n=Do(e.attrs?.alt||"");return`<img src="${o}" alt="${n}" />`},table:(e,o)=>{let n=gs(Go(e.attrs)),r=pS(dS(e.content?.[0])),i=[n.style,r.style].filter(Boolean).join("; ");return`<table${Object.entries({...n,style:i||void 0}).filter(s=>typeof s[1]=="string").map(([s,l])=>` ${s}="${Do(l)}"`).join("")}>${r.colgroupHtml}<tbody>${o()}</tbody></table>`},tableRow:(e,o)=>{let n=Gr(e.attrs);return`<tr${n?` style="height: ${n}px"`:""}>${o()}</tr>`},tableCell:(e,o)=>`<td>${o()}</td>`,tableHeader:(e,o)=>`<th>${o()}</th>`,textStyle:(e,o)=>{let n=e.attrs?.color;return n?`<span style="color:${Do(n)}">${o()}</span>`:o()},default:(e,o)=>o()},kF=e=>`<span style="background-color:rgba(255, 0, 0, 0.25);color:#000">${e}</span>`,yT=(e,o)=>xc(e)?kF(o):`<span style="color:${Do(e)}">${o}</span>`,bT={bold:(e,o)=>`<strong>${o}</strong>`,italic:(e,o)=>`<em>${o}</em>`,underline:(e,o)=>`<u>${o}</u>`,strike:(e,o)=>`<s>${o}</s>`,code:(e,o)=>`<code>${o}</code>`,link:(e,o)=>{let n=Do(RF(e?.href||"")),r=e?.target?` target="${Do(e.target)}"`:"",i=e?.rel?` rel="${Do(e.rel)}"`:"";return`<a href="${n}"${r}${i}>${o}</a>`},color:(e,o)=>e?.color?yT(e.color,o):o,textStyle:(e,o)=>e?.color?yT(e.color,o):o,fontColor:(e,o)=>ca(e?.color)?`<span style="color:${e.color}">${o}</span>`:o,confidential:(e,o)=>`<span style="color:#FF0000">${o}</span>`,highlight:(e,o)=>`<mark style="background-color:${Do(e?.color||"yellow")}">${o}</mark>`,commentThread:(e,o)=>{let n=Do(e?.threadId||""),r=e?.resolved?"true":"false";return`<span data-thread-id="${n}" data-resolved="${r}" class="comment-thread-mark">${o}</span>`},default:(e,o)=>o},PF=new Set(["http:","https:","mailto:","tel:"]);function RF(e){let o=e.trim();if(o==="")return"";if(/^[/#?]/.test(o))return o;try{let{protocol:n}=new URL(o,"https://klerq.invalid");return PF.has(n)?o:""}catch{return""}}function Do(e){return e.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]||o)}var EF=new Set(["confidential","color","textStyle"]),AF=new Set(["color","textStyle","fontColor"]);function ST(e,o=!1){let n=()=>(e.content||[]).map(a=>ST(a,o)).join(""),r=hT[e.type]||hT.default,i=r?r(e,n):"";if(e.marks&&Array.isArray(e.marks)){let a=e.marks.some(s=>s.type==="confidential");for(let s of e.marks){if(o&&EF.has(s.type)||a&&AF.has(s.type))continue;let l=bT[s.type]||bT.default;i=l?l(s.attrs,i):i}}return i}function dd(e,o=!1){return!e||typeof e!="object"?"":ST(e,o)}function CT(e,o=!1){try{return typeof e=="string"?e:(0,xT.isEmpty)(e)?"":dd(e,o)}catch(n){return Bt.default.error(n),""}}function TT(e){return{linkControlLabel:e("controlLabel.link",{ns:"tiptap"}),colorPickerControlLabel:e("controlLabel.colorPicker",{ns:"tiptap"}),highlightControlLabel:e("controlLabel.highlight",{ns:"tiptap"}),colorControlLabel:o=>e("controlLabel.color",{ns:"tiptap",color:o}),boldControlLabel:e("controlLabel.bold",{ns:"tiptap"}),italicControlLabel:e("controlLabel.italic",{ns:"tiptap"}),underlineControlLabel:e("controlLabel.underline",{ns:"tiptap"}),strikeControlLabel:e("controlLabel.strike",{ns:"tiptap"}),clearFormattingControlLabel:e("controlLabel.clearFormatting",{ns:"tiptap"}),unlinkControlLabel:e("controlLabel.unlink",{ns:"tiptap"}),bulletListControlLabel:e("controlLabel.bulletList",{ns:"tiptap"}),orderedListControlLabel:e("controlLabel.orderedList",{ns:"tiptap"}),h1ControlLabel:e("controlLabel.h1",{ns:"tiptap"}),h2ControlLabel:e("controlLabel.h2",{ns:"tiptap"}),h3ControlLabel:e("controlLabel.h3",{ns:"tiptap"}),h4ControlLabel:e("controlLabel.h4",{ns:"tiptap"}),h5ControlLabel:e("controlLabel.h5",{ns:"tiptap"}),h6ControlLabel:e("controlLabel.h6",{ns:"tiptap"}),blockquoteControlLabel:e("controlLabel.blockquote",{ns:"tiptap"}),alignLeftControlLabel:e("controlLabel.alignLeft",{ns:"tiptap"}),alignCenterControlLabel:e("controlLabel.alignCenter",{ns:"tiptap"}),alignRightControlLabel:e("controlLabel.alignRight",{ns:"tiptap"}),alignJustifyControlLabel:e("controlLabel.alignJustify",{ns:"tiptap"}),codeControlLabel:e("controlLabel.code",{ns:"tiptap"}),codeBlockControlLabel:e("controlLabel.codeBlock",{ns:"tiptap"}),subscriptControlLabel:e("controlLabel.subscript",{ns:"tiptap"}),superscriptControlLabel:e("controlLabel.superscript",{ns:"tiptap"}),unsetColorControlLabel:e("controlLabel.unsetColor",{ns:"tiptap"}),hrControlLabel:e("controlLabel.hr",{ns:"tiptap"}),linkEditorInputLabel:e("linkEditor.inputLabel",{ns:"tiptap"}),linkEditorInputPlaceholder:e("linkEditor.inputPlaceholder",{ns:"tiptap"}),linkEditorExternalLink:e("linkEditor.externalLink",{ns:"tiptap"}),linkEditorInternalLink:e("linkEditor.internalLink",{ns:"tiptap"}),linkEditorSave:e("linkEditor.save",{ns:"tiptap"}),colorPickerCancel:e("colorPicker.cancel",{ns:"tiptap"}),colorPickerClear:e("colorPicker.clear",{ns:"tiptap"}),colorPickerColorPicker:e("colorPicker.colorPicker",{ns:"tiptap"}),colorPickerPalette:e("colorPicker.palette",{ns:"tiptap"}),colorPickerSave:e("colorPicker.save",{ns:"tiptap"}),colorPickerColorLabel:o=>e("colorPicker.colorLabel",{ns:"tiptap",color:o})}}var IT=t("@apollo/client"),wT=t("@/graphql"),LF=(0,wT.graphql)(`
	query FirmFontColors {
		firm {
			id
			fontColors
		}
	}
`);function vT({skip:e=!1}={}){let{data:o}=(0,IT.useQuery)(LF,{skip:e,fetchPolicy:"cache-first"});return o?.firm?.fontColors??[]}var qr=Y(t("react")),PT=t("react/jsx-runtime"),kT=(0,qr.createContext)(void 0),FF=["ara","div","fas","heb","kur","pus","snd","uig","urd","yid"],Yr=({children:e,defaultLanguage:o})=>{let[n,r]=qr.default.useState(o),i=(0,qr.useMemo)(()=>FF.includes(n),[n]);return(0,PT.jsx)(kT.Provider,{value:{language:n,isRTL:i,setLanguage:r},children:e})},pd=()=>{let e=(0,qr.useContext)(kT);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var le=t("react/jsx-runtime"),MF={};function DT({collaboration:e,withHistory:o=!0,withLink:n=!0,withTable:r=!1,keepPastedTables:i=!1,withConfidential:a=!1,withFontColor:s=!1,withComments:l=!1,withWordCount:p=!0,commentContext:c,kai:u,editorRef:C,onEditorReady:g,editor:{editable:d=!0,content:y,...v}=MF,toolbar:h,element:F}){let{t:P}=(0,ud.useTranslation)(),{isRTL:m}=pd(),{colorScheme:N}=(0,Uo.useMantineTheme)(),E=d&&!e?.readOnly,I=E&&!e?.disconnected,D=vT({skip:!(s||r)||!E}),x=(0,MT.useEditor)({immediatelyRender:!1,content:e?void 0:(0,md.isEmpty)(y)?(0,md.cloneDeep)(Ya):y,extensions:[...pf,!i&&gT,o&&!e&&FT.default,n&&Je.Link,a&&td.configure({types:["textStyle"]}),a&&sd,l&&id,e&&AT.default.configure({document:e.document,field:"default"}),e&&LT.default.configure({provider:e.provider,user:e.user,render:A=>Dm(A,N),selectionRender:A=>_m(A,N)})].filter(Boolean),editable:I,...v},[e?.document]);(0,vi.useEffect)(()=>{C&&x&&(C.current&&!C.current.isDestroyed||(C.current=x))},[x,C]),(0,vi.useEffect)(()=>{x&&g?.(x)},[x,g]),(0,vi.useEffect)(()=>{x?.setEditable(I)},[x,I]);let[G,M]=(0,vi.useState)(0);return(0,vi.useEffect)(()=>{if(!x)return;let A=()=>{let q=x.getText().trim();M(q?q.split(/\s+/).length:0)};A(),x.on("update",A);let L=({transaction:q})=>{q.docChanged&&A()};return x.on("transaction",L),()=>{x.off("update",A),x.off("transaction",L)}},[x]),(0,le.jsxs)(xC,{editor:x,options:u,children:[(0,le.jsxs)(Je.RichTextEditor,{editor:x,labels:TT(P),...F,sx:[{"& .ProseMirror p":{marginBlockEnd:"1lh","&:last-child":{marginBlockEnd:0}}},e&&{contain:"none"},...(0,Uo.packSx)(F?.sx)],className:m?"text-right":"text-left",children:[E&&(0,le.jsxs)(Je.RichTextEditor.Toolbar,{...h,children:[(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(Je.RichTextEditor.Bold,{icon:Ue.bold,disabled:!I||!x?.can().toggleBold()}),(0,le.jsx)(Je.RichTextEditor.Italic,{icon:Ue.italic,disabled:!I||!x?.can().toggleItalic()}),(0,le.jsx)(Je.RichTextEditor.Underline,{icon:Ue.underline,disabled:!I||!x?.can().toggleUnderline()}),(0,le.jsx)(Je.RichTextEditor.Strikethrough,{icon:Ue.strikethrough,disabled:!I||!x?.can().toggleStrike()}),(0,le.jsx)(Je.RichTextEditor.ClearFormatting,{icon:Ue.clearFormatting,disabled:!I}),s&&(0,le.jsx)(GC,{editor:x,colors:D,disabled:!I})]}),(0,le.jsx)(Je.RichTextEditor.ControlsGroup,{children:(0,le.jsxs)(Uo.Menu,{withinPortal:!0,children:[(0,le.jsx)(Uo.Menu.Target,{children:(0,le.jsx)(Je.RichTextEditor.Control,{"aria-label":P("controlLabel.heading",{ns:"tiptap"}),title:P("controlLabel.heading",{ns:"tiptap"}),disabled:!I,active:x?.isActive("heading",{level:2})||x?.isActive("heading",{level:3}),children:Ue.heading({size:"1rem"})})}),(0,le.jsxs)(Uo.Menu.Dropdown,{children:[(0,le.jsx)(Uo.Menu.Item,{onClick:()=>x?.chain().focus().setParagraph().run(),fw:x?.isActive("paragraph")?700:400,children:P("controlLabel.paragraph",{ns:"tiptap"})}),(0,le.jsx)(Uo.Menu.Item,{onClick:()=>x?.chain().focus().toggleHeading({level:2}).run(),fw:x?.isActive("heading",{level:2})?700:400,children:P("controlLabel.h2",{ns:"tiptap"})}),(0,le.jsx)(Uo.Menu.Item,{onClick:()=>x?.chain().focus().toggleHeading({level:3}).run(),fw:x?.isActive("heading",{level:3})?700:400,children:P("controlLabel.h3",{ns:"tiptap"})})]})]})}),(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(Je.RichTextEditor.Blockquote,{icon:Ue.blockquote,disabled:!I||!x?.can().toggleBlockquote()}),(0,le.jsx)(Je.RichTextEditor.BulletList,{icon:Ue.bulletList,disabled:!I||!x?.can().toggleBulletList()}),(0,le.jsx)(LC,{editor:x,disabled:!I}),(0,le.jsx)(Je.RichTextEditor.OrderedList,{icon:Ue.orderedList,disabled:!I||!x?.can().toggleOrderedList()}),(0,le.jsx)(go,{icon:Ue.indent,title:P("controlLabel.indent",{ns:"tiptap"}),onClick:()=>x?.chain().focus().sinkListItem("listItem").run(),disabled:!I||!x?.can().sinkListItem("listItem")}),(0,le.jsx)(go,{icon:Ue.outdent,title:P("controlLabel.outdent",{ns:"tiptap"}),onClick:()=>x?.chain().focus().liftListItem("listItem").run(),disabled:!I||!x?.can().liftListItem("listItem")})]}),(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(Je.RichTextEditor.AlignLeft,{icon:Ue.alignLeft,disabled:!I}),(0,le.jsx)(Je.RichTextEditor.AlignCenter,{icon:Ue.alignCenter,disabled:!I}),(0,le.jsx)(Je.RichTextEditor.AlignRight,{icon:Ue.alignRight,disabled:!I}),(0,le.jsx)(Je.RichTextEditor.AlignJustify,{icon:Ue.alignJustify,disabled:!I})]}),(0,le.jsx)(Je.RichTextEditor.ControlsGroup,{children:(0,le.jsx)(Je.RichTextEditor.Hr,{icon:Ue.horizontalRule,disabled:!I})}),o&&!e&&(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(go,{icon:Ue.undo,title:P("controlLabel.undo",{ns:"tiptap"}),onClick:()=>x?.chain().focus().undo().run(),disabled:!I||!x?.can().undo()}),(0,le.jsx)(go,{icon:Ue.redo,title:P("controlLabel.redo",{ns:"tiptap"}),onClick:()=>x?.chain().focus().redo().run(),disabled:!I||!x?.can().redo()})]}),n&&(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(Je.RichTextEditor.Link,{icon:Ue.link,disabled:!I}),(0,le.jsx)(Je.RichTextEditor.Unlink,{icon:Ue.unlink,disabled:!I||!x?.isActive("link")})]}),r&&(0,le.jsx)(Je.RichTextEditor.ControlsGroup,{children:x?.can().deleteTable()?(0,le.jsxs)(le.Fragment,{children:[(0,le.jsx)(go,{icon:A=>Ue.table({...A,remove:"bottom-right"}),title:P("controlLabel.deleteTable",{ns:"tiptap"}),onClick:()=>x?.chain().focus().deleteTable().run(),disabled:!I}),(0,le.jsx)(go,{icon:A=>Ue.tableColumns({...A,add:"left"}),title:P("controlLabel.addColumnBefore",{ns:"tiptap"}),onClick:()=>x?.chain().focus().addColumnBefore().run(),disabled:!I||!x?.can().addColumnBefore()}),(0,le.jsx)(go,{icon:A=>Ue.tableColumns({...A,add:"right"}),title:P("controlLabel.addColumnAfter",{ns:"tiptap"}),onClick:()=>x?.chain().focus().addColumnAfter().run(),disabled:!I||!x?.can().addColumnAfter()}),(0,le.jsx)(go,{icon:A=>Ue.tableColumns({...A,remove:"bottom-right"}),title:P("controlLabel.deleteColumn",{ns:"tiptap"}),onClick:()=>x?.chain().focus().deleteColumn().run(),disabled:!I||!x?.can().deleteColumn()}),(0,le.jsx)(go,{icon:A=>Ue.tableRows({...A,add:"top"}),title:P("controlLabel.addRowBefore",{ns:"tiptap"}),onClick:()=>x?.chain().focus().addRowBefore().run(),disabled:!I||!x?.can().addRowBefore()}),(0,le.jsx)(go,{icon:A=>Ue.tableRows({...A,add:"bottom"}),title:P("controlLabel.addRowAfter",{ns:"tiptap"}),onClick:()=>x?.chain().focus().addRowAfter().run(),disabled:!I||!x?.can().addRowAfter()}),(0,le.jsx)(go,{icon:A=>Ue.tableRows({...A,remove:"bottom-right"}),title:P("controlLabel.deleteRow",{ns:"tiptap"}),onClick:()=>x?.chain().focus().deleteRow().run(),disabled:!I||!x?.can().deleteRow()}),(0,le.jsx)(DC,{editor:x,colors:D,disabled:!I})]}):(0,le.jsx)(go,{icon:Ue.table,title:P("controlLabel.insertTable",{ns:"tiptap"}),onClick:()=>x?.chain().focus().insertTable({withHeaderRow:!1}).run(),disabled:!I})}),a&&(0,le.jsxs)(Je.RichTextEditor.ControlsGroup,{children:[(0,le.jsx)(go,{icon:Ue.confidential,disabled:!I,active:x?.isActive("confidential"),onClick:()=>x?.chain().focus().toggleConfidential().run(),title:P("controlLabel.confidential",{ns:"tiptap"})}),(0,le.jsx)(go,{icon:Ue.nonConfidential,disabled:!I,onClick:()=>x?.chain().focus().unsetConfidential().run(),title:P("controlLabel.nonConfidential",{ns:"tiptap"})})]}),l&&c&&(0,le.jsx)(Je.RichTextEditor.ControlsGroup,{children:(0,le.jsx)(Ux,{editor:x,disabled:!I})}),u&&(0,le.jsx)(kC,{})]}),(0,le.jsx)(Je.RichTextEditor.Content,{}),l&&c&&(0,le.jsx)(Zx,{editor:x})]}),u&&(0,le.jsx)(CC,{}),a&&(0,le.jsx)(Uo.Text,{size:"xs",color:"dimmed",mt:4,children:(0,le.jsx)(ud.Trans,{t:P,i18nKey:"confidentialHint",ns:"tiptap",components:{icon:(0,le.jsx)(ET.FontAwesomeIcon,{icon:RT.faExclamationTriangle})}})}),p&&(0,le.jsx)(Uo.Text,{size:"xs",color:"dimmed",align:"right",mt:4,children:P("wordCount",{count:G,ns:"tiptap"})})]})}var _T=t("@/lib/contexts/Languages");var uf=t("react/jsx-runtime");function xa({value:e,revision:o=0,onChange:n,full:r}){let i=(0,_T.useFirmLanguages)();return(0,uf.jsx)(Yr,{defaultLanguage:i.default,children:(0,uf.jsx)(DT,{withLink:!0,withTable:r,keepPastedTables:r,withFontColor:r,withWordCount:!1,editor:{content:e??void 0,onUpdate:({editor:a})=>n(a.getJSON())}},o)})}var bo=t("react/jsx-runtime"),DF=[],NT=new Set(["slide_number"]);function ki({fields:e,autoKeys:o=DF,onChange:n,readOnly:r,richEditors:i,revision:a=0,tableHeaderRows:s}){let{t:l}=(0,OT.useTranslation)("presentation_builder"),[p,c]=(0,BT.useState)(null),u=lb(e.filter(F=>!NT.has(F.key))),C=o.filter(F=>!NT.has(F)&&!e.some(P=>P.key===F));if(u.length===0&&C.length===0)return null;let g=(F,P)=>n?.(e.map(m=>m.key===F?{...m,defaultValue:P}:m)),d=(F,P)=>(0,bo.jsx)(eo.Box,{title:`{${F}}`,sx:{minWidth:0},children:P},F),y=(F,P)=>`${F} \xB7 {${P}}`,v={input:{background:"white"}},h=(F,P)=>(0,bo.jsx)(eo.TextInput,{radius:"md",disabled:!0,placeholder:y(F,P),"aria-label":`{${P}}`,rightSection:(0,bo.jsx)(zT.FontAwesomeIcon,{icon:GT.faLock,size:"xs"})});return(0,bo.jsxs)(eo.Box,{p:"md",sx:F=>({background:F.colors.gray[0],border:`1px solid ${F.colors.gray[2]}`,borderRadius:F.radius.md}),children:[(0,bo.jsx)(eo.Text,{size:"xs",weight:700,color:"dimmed",transform:"uppercase",sx:{letterSpacing:.5},children:l("templates.default_texts.title")}),(0,bo.jsx)(eo.Text,{size:"xs",color:"dimmed",mb:"sm",children:l("templates.default_texts.help")}),(0,bo.jsxs)(eo.Stack,{spacing:10,children:[u.map(F=>{if(F.kind==="image")return d(F.key,h(l("templates.image_field_help"),F.key));if(F.kind==="table"){let N=os(F.defaultValue);return d(F.key,(0,bo.jsxs)(eo.Group,{position:"apart",noWrap:!0,sx:E=>({background:"white",border:`1px solid ${E.colors.gray[3]}`,borderRadius:E.radius.md,padding:"6px 10px"}),children:[(0,bo.jsx)(eo.Text,{size:"sm",truncate:!0,children:l("templates.table_summary",{rows:N.rows.length,columns:fi(N)})}),!r&&(0,bo.jsx)(eo.Button,{size:"xs",variant:"default",onClick:()=>c(F.key),children:l("editor.table.edit")})]}))}if(i&&!r&&tn(F))return d(F.key,(0,bo.jsx)(eo.Box,{sx:{background:"white",borderRadius:8},children:(0,bo.jsx)(xa,{full:!0,value:FS(F.defaultValue),revision:`${F.key}-${a}`,onChange:N=>g(F.key,N)})}));let P=Em(F.defaultValue),m=N=>g(F.key,N);return d(F.key,F.multiline?(0,bo.jsx)(eo.Textarea,{radius:"md",autosize:!0,minRows:2,maxRows:8,value:P,placeholder:r?`{${F.key}}`:y(l("templates.default_value"),F.key),readOnly:r,"aria-label":`{${F.key}}`,styles:v,onChange:N=>m(N.currentTarget.value)}):(0,bo.jsx)(eo.TextInput,{radius:"md",value:P,placeholder:r?`{${F.key}}`:y(l("templates.default_value"),F.key),readOnly:r,"aria-label":`{${F.key}}`,styles:v,onChange:N=>m(N.currentTarget.value)}))}),C.map(F=>d(F,h(l("templates.auto"),F)))]}),(0,bo.jsx)(HS,{opened:p!==null,label:p??"",grid:os(e.find(F=>F.key===p)?.defaultValue),headerRows:p?s?.[p]??0:0,onClose:()=>c(null),onSave:F=>{p&&g(p,Hy(F)),c(null)}})]})}var vt=t("react/jsx-runtime");function UT({slide:e,index:o,count:n,revision:r,onPatch:i,onSettings:a,canMove:s,onMove:l,onRemove:p}){let{t:c}=(0,HT.useTranslation)("presentation_builder"),u=c,C=na(e.type,e.settings),g=Fo[e.type],d=e.fields.some(h=>tn(h)),y=g.featured??g.list,v=h=>{let F=!s(h),P=(0,vt.jsx)(rt.ActionIcon,{size:"sm",disabled:F,onClick:()=>l(h),"aria-label":c(h<0?"templates.move_up":"templates.move_down"),children:(0,vt.jsx)(mf.FontAwesomeIcon,{icon:h<0?Ca.faArrowUp:Ca.faArrowDown,size:"xs"})});return F&&o+h>=0&&o+h<n?(0,vt.jsx)(rt.Tooltip,{label:c("common.opening_first"),withinPortal:!0,multiline:!0,w:240,children:(0,vt.jsx)("div",{children:P})}):P};return(0,vt.jsxs)(rt.Paper,{withBorder:!0,radius:"lg",p:"md",children:[(0,vt.jsxs)(rt.Group,{spacing:"xs",noWrap:!0,mb:"sm",children:[(0,vt.jsxs)(rt.Text,{weight:700,color:"dimmed",w:22,children:[o+1,"."]}),(0,vt.jsx)(rt.Box,{sx:{flex:1,minWidth:0},children:(0,vt.jsx)(rt.TextInput,{size:"xs",value:e.name,onChange:h=>i({name:h.currentTarget.value}),"aria-label":c("templates.slide_name")})}),(0,vt.jsx)(rt.Select,{size:"xs",w:200,withinPortal:!0,value:e.type,disabled:e.usageCount>0,onChange:h=>h&&i({type:h}),data:Hl.filter(h=>Qa.includes(h)||h===e.type).map(h=>({value:h,label:u(`slide_types.${h}`)})),"aria-label":c("templates.slide_type")}),v(-1),v(1),(0,vt.jsx)(rt.Tooltip,{label:n<=1?c("templates.slide_delete_last"):c("templates.slide_delete"),withinPortal:!0,multiline:!0,w:240,children:(0,vt.jsx)("div",{children:(0,vt.jsx)(rt.ActionIcon,{size:"sm",color:"red",disabled:n<=1,onClick:p,"aria-label":c("templates.slide_delete"),children:(0,vt.jsx)(mf.FontAwesomeIcon,{icon:Ca.faTrashCan,size:"xs"})})})})]}),e.type!=="TITLE"&&(0,vt.jsxs)(rt.Group,{spacing:"lg",mb:"sm",children:[(0,vt.jsx)(rt.Switch,{size:"xs",label:c("templates.section_settings.show_number"),checked:!!C.showNumber,onChange:h=>a({showNumber:h.currentTarget.checked})}),(0,vt.jsx)(rt.Switch,{size:"xs",label:c("templates.section_settings.show_in_nav"),checked:!!C.showInNav,onChange:h=>a({showInNav:h.currentTarget.checked})}),d&&(0,vt.jsx)(rt.Switch,{size:"xs",label:c("templates.section_settings.fold"),checked:!!C.fold,onChange:h=>a({fold:h.currentTarget.checked})}),g.list&&g.list!=="clients"&&g.list!=="testimonials"&&(0,vt.jsx)(rt.SegmentedControl,{size:"xs",value:C.display??"cards",onChange:h=>a({display:h}),data:[{value:"rows",label:c("templates.section_settings.rows")},{value:"cards",label:c("templates.section_settings.cards")}]}),g.list==="specialists"&&C.display==="rows"&&(0,vt.jsx)(rt.NumberInput,{size:"xs",w:210,min:0,max:20,label:c("templates.section_settings.lead_count"),value:C.leadCount??0,onChange:h=>typeof h=="number"&&a({leadCount:h})})]}),(0,vt.jsxs)(rt.Stack,{spacing:8,children:[(0,vt.jsx)(ki,{fields:e.fields,onChange:h=>i({fields:h}),richEditors:!0,revision:r}),y&&(0,vt.jsx)(rt.Text,{size:"xs",color:"dimmed",children:c("templates.section_settings.items_help",{name:u(`collections.${y}.plural`)})})]})]})}var VT=t("next-i18next"),Me=t("@mantine/core"),Qr=t("@fortawesome/free-solid-svg-icons"),Ps=t("@fortawesome/react-fontawesome");function fd(e){let o=new Map;e.forEach((i,a)=>{let s=dm(i),l=s.join("+")||"bio",p=o.get(l)??{key:l,content:s,indices:[]};p.indices.push(a),o.set(l,p)});let n=i=>{let a=e[i]?.layout;return a?To(a,"specialists")??0:0},r=i=>i.length*100+i.reduce((a,s)=>a+cm.indexOf(s),0);return Array.from(o.values()).sort((i,a)=>r(i.content)-r(a.content)).map(i=>({...i,indices:[...i.indices].sort((a,s)=>n(a)-n(s)||a-s)}))}var Fe=t("react/jsx-runtime"),$T=Gn();function WT({slide:e,index:o,theme:n,meta:r,showPlaceholders:i,onOpen:a,onMoveUp:s,onMoveDown:l,onRename:p,onMakeVersion:c,makeVersionBlocked:u,onRemove:C,removeBlocked:g}){let{t:d}=(0,VT.useTranslation)("presentation_builder"),y=d,v=gm(e.layout),h=pr(e).map((m,N)=>({...m,label:tc(m,N,(E,I)=>y(`editor.versions.${E.split(".").pop()}`,I)),autoKeys:Array.from(new Set(m.layout.elements.flatMap(E=>E.kind==="text"?Bo(E.text):[]))).filter(E=>!m.fields.some(I=>I.key===E)),rendered:sc(m,n,{...r,slideNumber:o+1},i)})),F=m=>(0,Fe.jsxs)(Me.Stack,{spacing:"md",children:[(0,Fe.jsx)(Me.SimpleGrid,{cols:4,spacing:"sm",breakpoints:[{maxWidth:"lg",cols:3}],children:m.map(N=>(0,Fe.jsxs)(Me.Box,{sx:{cursor:"pointer"},onClick:a,children:[(0,Fe.jsx)(Me.Text,{size:"xs",weight:600,color:"dimmed",mb:4,children:N.label}),(0,Fe.jsx)(Un,{slide:N.rendered,imageUrl:$T})]},N.id))}),m.filter(N=>N.fields.some(E=>E.key!=="slide_number")||N.autoKeys.some(E=>E!=="slide_number")).map(N=>(0,Fe.jsxs)(Me.Box,{children:[(0,Fe.jsx)(Me.Text,{size:"sm",weight:600,mb:6,children:N.label}),(0,Fe.jsx)(ki,{fields:N.fields,autoKeys:N.autoKeys,readOnly:!0})]},N.id))]}),P=e.type==="SPECIALISTS"?fd(pr(e)):null;return(0,Fe.jsxs)(Me.Paper,{withBorder:!0,radius:"lg",p:"md",children:[(0,Fe.jsxs)(Me.Group,{spacing:"xs",noWrap:!0,mb:"sm",children:[(0,Fe.jsxs)(Me.Text,{weight:700,color:"dimmed",w:22,children:[o+1,"."]}),(0,Fe.jsx)(Me.TextInput,{size:"xs",sx:{flex:1,minWidth:0},value:e.name,onChange:m=>p(m.currentTarget.value),"aria-label":d("templates.slide_name")}),(0,Fe.jsx)(Me.ActionIcon,{size:"sm",disabled:!s,onClick:s,"aria-label":d("templates.move_up"),title:d("templates.move_up"),children:(0,Fe.jsx)(Ps.FontAwesomeIcon,{icon:Qr.faArrowUp,size:"xs"})}),(0,Fe.jsx)(Me.ActionIcon,{size:"sm",disabled:!l,onClick:l,"aria-label":d("templates.move_down"),title:d("templates.move_down"),children:(0,Fe.jsx)(Ps.FontAwesomeIcon,{icon:Qr.faArrowDown,size:"xs"})}),(0,Fe.jsx)(Me.Tooltip,{label:u??d("templates.make_version.action"),withinPortal:!0,multiline:!0,w:240,children:(0,Fe.jsx)("div",{children:(0,Fe.jsx)(Me.ActionIcon,{size:"sm",disabled:!c,onClick:c,"aria-label":d("templates.make_version.action"),children:(0,Fe.jsx)(Ps.FontAwesomeIcon,{icon:Qr.faLayerGroup,size:"xs"})})})}),(0,Fe.jsx)(Me.Tooltip,{label:g??d("templates.slide_delete"),withinPortal:!0,multiline:!0,w:240,children:(0,Fe.jsx)("div",{children:(0,Fe.jsx)(Me.ActionIcon,{size:"sm",color:"red",disabled:!C,onClick:C,"aria-label":d("templates.slide_delete"),children:(0,Fe.jsx)(Ps.FontAwesomeIcon,{icon:Qr.faTrashCan,size:"xs"})})})})]}),(v||e.variants.length>0)&&(0,Fe.jsxs)(Me.Group,{spacing:"xs",mb:"sm",children:[v&&(0,Fe.jsx)(Me.Badge,{color:v.card?"teal":"grape",variant:"dot",sx:{textTransform:"none"},children:d(v.card?"slide_editor.card.mode_auto":"slide_editor.card.mode_fixed")}),v&&(0,Fe.jsx)(Me.Tooltip,{label:yi.includes(e.type)?d("templates.auto_versions"):d("templates.list_repeat",{count:To(e.layout)??0,next:(To(e.layout)??0)+1,max:rs}),withinPortal:!0,multiline:!0,w:300,children:(0,Fe.jsxs)(Me.Badge,{color:"gray",variant:"light",sx:{textTransform:"none"},children:[d("templates.max",{max:To(e.layout)??0})," \xB7"," ",d("templates.repeats")]})}),e.variants.length>0&&(0,Fe.jsx)(Me.Badge,{color:"primary",variant:"light",sx:{textTransform:"none"},children:d("templates.versions_count",{count:e.variants.length+1})})]}),v&&h.length>1?P&&P.length>1?(0,Fe.jsxs)(Me.Tabs,{variant:"pills",defaultValue:P[0]?.key,keepMounted:!1,children:[(0,Fe.jsx)(Me.Tabs.List,{mb:"sm",children:P.map(m=>(0,Fe.jsx)(Me.Tabs.Tab,{value:m.key,rightSection:(0,Fe.jsx)(Me.Badge,{size:"xs",variant:"filled",color:"gray",radius:"xl",children:m.indices.length}),children:[d("slide_editor.versions.content.bio"),...m.content.map(N=>d(`slide_editor.subversions.part.${N}`))].join(" + ")},m.key))}),P.map(m=>(0,Fe.jsx)(Me.Tabs.Panel,{value:m.key,children:F(m.indices.flatMap(N=>h[N]??[]))},m.key))]}):F(h):(0,Fe.jsx)(Me.Stack,{spacing:"md",children:h.map((m,N)=>{let E=(0,Fe.jsxs)(Me.Grid,{gutter:"lg",align:"flex-start",children:[(0,Fe.jsx)(Me.Grid.Col,{span:4,children:(0,Fe.jsx)(Me.Box,{sx:{cursor:"pointer"},onClick:a,children:(0,Fe.jsx)(Un,{slide:m.rendered,imageUrl:$T})})}),(0,Fe.jsx)(Me.Grid.Col,{span:8,children:(0,Fe.jsx)(ki,{fields:m.fields,autoKeys:m.autoKeys,readOnly:!0})})]});return h.length===1?(0,Fe.jsx)(Me.Box,{children:E},m.id):(0,Fe.jsxs)(Me.Box,{p:"sm",sx:I=>({background:I.colors.gray[0],border:`1px solid ${I.colors.gray[3]}`,borderLeft:`4px solid ${I.colors.primary[6]}`,borderRadius:I.radius.md}),children:[(0,Fe.jsxs)(Me.Group,{spacing:8,mb:"xs",children:[(0,Fe.jsxs)(Me.Badge,{variant:"filled",color:"primary",sx:{textTransform:"none"},children:[y("editor.versions.numbered",{n:N+1})," / ",h.length]}),(0,Fe.jsx)(Me.Text,{size:"sm",weight:600,children:m.label})]}),E]},m.id)})})]})}var KT=t("@mantine/core"),qT=t("@mantine/modals");var QT=t("react/jsx-runtime");function YT({title:e,text:o,remove:n}){return new Promise(r=>{let i=!1;(0,qT.openContextModal)({modal:Kn,title:e,onClose:()=>{i||r(!1)},innerProps:{children:(0,QT.jsx)(KT.Text,{size:"sm",children:o}),parts:{confirmButton:{color:"error"}},confirmText:e,onCancel:()=>{r(!1)},onConfirm:a=>{i=!0,a.closeModal(),n().then(r,()=>r(!1))}}})})}var XT=t("react"),jT=t("next-i18next"),JT=t("@apollo/client"),et=t("@mantine/core"),ZT=t("@fortawesome/free-solid-svg-icons"),eI=t("@fortawesome/react-fontawesome");var st=t("react/jsx-runtime");function tI({slide:e,deleting:o,onDelete:n,onClose:r}){let{t:i}=(0,jT.useTranslation)("presentation_builder"),a=i,{data:s,loading:l,error:p,refetch:c}=(0,JT.useQuery)(wb,{variables:{id:e?.id??""},skip:!e,fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0}),[u,C]=(0,XT.useState)(!1),g=s?.deckTemplateSlideUsages??[],d=g.some(P=>P.onlySlides),y=()=>c().catch(()=>{}),v=()=>{C(!1),r()},h=async()=>{C(!1);try{await n(g.map(P=>P.id))}catch(P){if(!nc(P,"TEMPLATE_SLIDE_USAGE_CHANGED")){St(P);return}C(!0),await y()}},F=(0,st.jsx)(eI.FontAwesomeIcon,{icon:ZT.faTriangleExclamation});return(0,st.jsx)(et.Modal,{opened:!!e,onClose:()=>!o&&v(),zIndex:1e3,title:(0,st.jsx)(et.Text,{weight:700,children:i("templates.slide_usage.title")}),children:(0,st.jsxs)(et.Stack,{spacing:"sm",children:[u&&(0,st.jsx)(et.Alert,{color:"yellow",icon:F,children:i("templates.slide_usage.changed")}),l?(0,st.jsxs)(et.Group,{spacing:"xs",children:[(0,st.jsx)(et.Loader,{size:"sm"}),(0,st.jsx)(et.Text,{size:"sm",children:i("templates.slide_usage.loading")})]}):p?(0,st.jsx)(et.Alert,{color:"red",icon:F,title:i("templates.slide_usage.load_failed"),children:(0,st.jsxs)(et.Stack,{spacing:"xs",align:"flex-start",children:[(0,st.jsx)(et.Text,{size:"sm",children:On(p.message,a)}),(0,st.jsx)(et.Button,{size:"xs",variant:"default",onClick:()=>void y(),children:i("templates.slide_usage.retry")})]})}):(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)(et.Text,{size:"sm",children:i("templates.slide_usage.text",{name:e?.name??""})}),(0,st.jsx)(et.Stack,{spacing:4,children:g.map(P=>(0,st.jsxs)(et.Group,{position:"apart",noWrap:!0,children:[(0,st.jsxs)(et.Group,{spacing:6,noWrap:!0,sx:{minWidth:0},children:[(0,st.jsx)(et.Text,{size:"sm",weight:500,truncate:!0,children:P.title}),P.trashed&&(0,st.jsx)(et.Badge,{size:"xs",color:"gray",sx:{flexShrink:0},children:i("templates.slide_usage.trashed")})]}),(0,st.jsx)(et.Text,{size:"xs",color:P.onlySlides?"red":"dimmed",sx:{flexShrink:0},children:P.onlySlides?i(P.trashed?"templates.slide_usage.only_slides_trashed":"templates.slide_usage.only_slides"):i("templates.slide_usage.slides",{count:P.slides})})]},P.id))}),d?(0,st.jsx)(et.Alert,{color:"red",icon:F,children:i("templates.slide_usage.only_slides_error")}):(0,st.jsx)(et.Text,{size:"sm",weight:500,color:"red",children:i("templates.slide_usage.irreversible")})]}),(0,st.jsxs)(et.Group,{position:"right",mt:"xs",children:[(0,st.jsx)(et.Button,{variant:"default",disabled:o,onClick:v,children:i("templates.make_version.cancel")}),(0,st.jsx)(et.Button,{color:"red",loading:o,disabled:l||!!p||!s||d,onClick:()=>void h(),children:i("templates.slide_usage.delete_anyway")})]})]})})}var pt=t("react"),s0=t("next-i18next"),w=t("@mantine/core"),l0=t("@mantine/modals"),wu=t("@apollo/client"),Oe=t("@fortawesome/free-solid-svg-icons"),Ct=t("@fortawesome/react-fontawesome"),c0=t("jotai");var oI=t("react"),nI=t("next-i18next");function rI(){let{t:e}=(0,nI.useTranslation)();return(0,oI.useCallback)((o,n={})=>Nl({t:e,onSave:n.onSave,onLeave:o}),[e])}var d0=t("@/services/jotai/atoms/accessToken");var Tu=t("react"),BH=t("next-i18next"),vl=t("@mantine/core"),OH=t("@mantine/modals"),GH=t("@apollo/client");function _F(e){return it.default.isValid(e)?it.default.toAlpha2(e)??e:it.default.getAlpha2Code(e,"en")??e}function NF(e){let o=new Set,n=[];for(let r of[e?.country,...e?.additionalCountries??[]]){if(!r)continue;let i=_F(r);o.has(i)||(o.add(i),n.push(r))}return n}function ff(e,o="en"){return NF(e).map(n=>it.default.getName(n,o)??n).join(", ")}var _k=t("react"),wB=t("next-i18next"),ii=t("@mantine/core"),Rg=t("@mantine/core"),vB=t("@mantine/hooks"),kB=t("@apollo/client"),PB=t("@fortawesome/free-solid-svg-icons"),RB=t("@fortawesome/react-fontawesome"),Nk=t("lodash");var iI=t("@/graphql"),BF=(0,iI.graphql)(`
	query ClientCountries {
		clientCountries
	}
`);var LN=t("next-i18next"),FN=t("@mantine/core"),MN=t("@mantine/hooks"),DN=t("@fortawesome/react-fontawesome");var EN=t("next-i18next"),Nv=t("@mantine/core"),Bv=t("@apollo/client");var Yw=t("react"),B_=Y(t("next/link")),O_=t("next-i18next"),Jn=t("@mantine/core"),G_=t("@mantine/dates"),Qw=t("@mantine/hooks"),z_=t("@apollo/client"),H_=t("@fortawesome/free-solid-svg-icons"),U_=t("@fortawesome/react-fontawesome");var QF=t("next-i18next"),yf=t("@mantine/core");var OF=t("react"),GF=t("next/router"),zF=t("next-i18next"),HF=t("@mantine/core");var aI=t("react"),gd=t("@mantine/core"),gf=t("react/jsx-runtime"),hf=(0,aI.forwardRef)(({label:e,...o},n)=>(0,gf.jsx)(gd.Group,{ref:n,spacing:"xs",noWrap:!0,...o,children:(0,gf.jsx)(gd.Text,{span:!0,truncate:!0,children:e})}));hf.displayName="CountrySelectItem";var UF=t("react/jsx-runtime");var $F=t("react"),VF=t("next/router"),WF=t("next-i18next"),KF=t("@mantine/core");var qF=t("react/jsx-runtime");var sI=t("react/jsx-runtime");var cD=t("react"),dD=t("next-i18next"),MI=t("@mantine/core"),DI=t("@fortawesome/free-solid-svg-icons"),pD=t("@fortawesome/react-fontawesome");var wf=t("react"),iD=t("next-i18next"),Ds=t("@mantine/core"),FI=t("@apollo/client"),vf=t("@fortawesome/free-solid-svg-icons"),aD=t("@fortawesome/react-fontawesome");var XF=t("react"),jF=t("next/router"),lI=t("@mantine/core");var cI=t("react/jsx-runtime");var sD=t("@/graphql");var br=t("@/graphql"),hd=(0,br.graphql)(`
	fragment MediaAssetItem on MediaAsset {
		id
		name
		title
		description
		mimetype
		fileSizeBytes
		kind
		focalX
		focalY
		createdAt
		# Keeps a picked asset assignable to a form's files array, which validates
		# against GraphQLFileSchema.
		updatedAt
		usages {
			type
			entityId
			entityTitle
		}
	}
`),dI=(0,br.graphql)(`
	query MediaAssets(
		$first: Int
		$after: String
		$where: MediaAssetWhereInput
		$orderBy: MediaAssetOrderByInput
	) {
		mediaAssets(first: $first, after: $after, where: $where, orderBy: $orderBy) {
			totalCount
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					id
					...MediaAssetItem
				}
			}
		}
	}
`),JF=(0,br.graphql)(`
	query MediaAssetFileTypes($where: MediaAssetWhereInput) {
		mediaAssetFileTypes(where: $where) {
			mimetype
			count
		}
	}
`),pI=(0,br.graphql)(`
	mutation MediaAssetUpdate($id: ID!, $data: MediaAssetUpdateDataInput!) {
		mediaAssetUpdate(id: $id, data: $data) {
			...MediaAssetItem
		}
	}
`),ZF=(0,br.graphql)(`
	mutation MediaAssetCrop($id: ID!, $data: MediaAssetCropDataInput!) {
		mediaAssetCrop(id: $id, data: $data) {
			...MediaAssetItem
		}
	}
`),eM=(0,br.graphql)(`
	mutation MediaAssetCropToCopy($id: ID!, $data: MediaAssetCropDataInput!) {
		mediaAssetCropToCopy(id: $id, data: $data) {
			...MediaAssetItem
		}
	}
`),M6=(0,br.graphql)(`
	mutation MediaAssetDelete($id: ID!) {
		mediaAssetDelete(id: $id)
	}
`),tM=(0,br.graphql)(`
	mutation MediaAssetsDelete($ids: [ID!]!) {
		mediaAssetsDelete(ids: $ids)
	}
`);var oM=t("@/lib/env/client");var uI={NEWEST:{createdAt:"DESC"},OLDEST:{createdAt:"ASC"},NAME_ASC:{name:"ASC"},NAME_DESC:{name:"DESC"},LARGEST:{fileSizeBytes:"DESC"},SMALLEST:{fileSizeBytes:"ASC"}},nM=Object.keys(uI);var mI=455,rM=mI+1;var fI=Y(t("next/dynamic")),iM=t("next-i18next"),yd=t("@mantine/core"),gI=t("react-image-crop"),O6=t("react-image-crop/dist/ReactCrop.css"),aM=t("@fortawesome/free-solid-svg-icons"),sM=t("@fortawesome/react-fontawesome"),hI=t("react/jsx-runtime"),G6=(0,fI.default)(()=>import("react-image-crop").then(e=>e.default));var SI=t("react"),SM=t("next-i18next"),Pi=t("@mantine/core"),xM=t("@apollo/client"),CM=t("@fortawesome/free-solid-svg-icons"),TM=t("@fortawesome/react-fontawesome");var IM=t("@/graphql");var yI=t("react"),lM=t("next-i18next"),Rs=t("@mantine/core");var bI=t("react/jsx-runtime");var cM=t("next-i18next"),dM=t("@apollo/client"),pM=t("@/graphql");var bf=t("react/jsx-runtime");var OM=t("next-i18next"),Sd=t("@mantine/core");var DM=t("next-i18next"),_M=Y(t("next/link")),Pn=t("@mantine/core"),NM=t("@fortawesome/free-solid-svg-icons"),BM=t("@fortawesome/react-fontawesome");var Xr=t("react"),As=t("@mantine/core"),xI=t("@mantine/hooks"),bd=t("react/jsx-runtime"),Vt=(0,Xr.forwardRef)(({children:e,tooltip:o,lineClamp:n,...r},i)=>{let[a,s]=(0,Xr.useState)(!1),l=(0,Xr.useRef)(null),p=(0,xI.useMergedRef)(l,i),c=(0,Xr.useCallback)(()=>{let u=l.current;u&&s(n?u.scrollHeight>u.clientHeight:u.scrollWidth>u.clientWidth)},[n]);return(0,bd.jsx)(As.Tooltip,{disabled:!a,maw:320,label:o?.label??(0,bd.jsx)(As.Text,{lineClamp:o?.lineClamp??6,sx:{whiteSpace:"normal",wordBreak:"break-word"},children:e}),...o,children:(0,bd.jsx)(As.Text,{ref:p,span:!0,truncate:n?void 0:!0,lineClamp:n,onPointerOver:u=>{c(),r.onPointerOver?.(u)},onFocus:u=>{c(),r.onFocus?.(u)},...r,children:e})})});Vt.displayName="TextWithTooltip";var wM=t("@fortawesome/free-brands-svg-icons"),Sf=t("@fortawesome/free-regular-svg-icons"),Wt=t("@fortawesome/free-solid-svg-icons"),So=t("@heroicons/react/24/outline"),Sr=t("@heroicons/react/24/solid");var Ls=Wt.faTrash;var Fs=Wt.faExternalLink;var CI=So.BuildingStorefrontIcon;var TI=So.UserIcon;var Cf=t("@mantine/core");var vM=t("@mantine/core"),kM=t("@fortawesome/free-solid-svg-icons"),PM=t("@fortawesome/react-fontawesome");var lo=t("@mantine/dropzone"),xt=t("@fortawesome/free-solid-svg-icons"),xf={[lo.MIME_TYPES.png]:xt.faFileImage,[lo.MIME_TYPES.gif]:xt.faFileImage,[lo.MIME_TYPES.jpeg]:xt.faFileImage,[lo.MIME_TYPES.svg]:xt.faFileImage,[lo.MIME_TYPES.webp]:xt.faFileImage,[lo.MIME_TYPES.avif]:xt.faFileImage,[lo.MIME_TYPES.mp4]:xt.faFileVideo,[lo.MIME_TYPES.zip]:xt.faFileZipper,[lo.MIME_TYPES.csv]:xt.faFileCsv,[lo.MIME_TYPES.pdf]:xt.faFilePdf,[lo.MIME_TYPES.doc]:xt.faFileWord,[lo.MIME_TYPES.docx]:xt.faFileWord,[lo.MIME_TYPES.xls]:xt.faFileExcel,[lo.MIME_TYPES.xlsx]:xt.faFileExcel,[lo.MIME_TYPES.ppt]:xt.faFilePowerpoint,[lo.MIME_TYPES.pptx]:xt.faFilePowerpoint,[lo.MIME_TYPES.exe]:xt.faFileLines};var RM=t("react/jsx-runtime");var EM=t("react/jsx-runtime");var wI=t("react/jsx-runtime");var GM=t("react/jsx-runtime");var zM=t("next-i18next"),Ms=t("@mantine/core"),HM=t("@fortawesome/free-solid-svg-icons"),UM=t("@fortawesome/react-fontawesome");var vI=t("react/jsx-runtime");var $M=t("next-i18next"),VM=t("@mantine/core");var WM=t("react/jsx-runtime");var KM=t("next-i18next"),xd=t("@mantine/core"),qM=t("@fortawesome/react-fontawesome");var kI=t("react/jsx-runtime");var YM=t("next-i18next"),wa=t("@mantine/core"),QM=t("@fortawesome/free-solid-svg-icons"),XM=t("@fortawesome/react-fontawesome");var PI=t("react/jsx-runtime");var jM=t("react"),JM=t("next-i18next"),jr=t("@mantine/core"),xr=t("@mantine/dropzone"),If=t("@fortawesome/free-solid-svg-icons"),ZM=t("@fortawesome/react-fontawesome"),eD=t("jotai");var RI=t("react"),EI=t("react-use"),va=t("react/jsx-runtime");function Cd({children:e,fallback:o=null}){let[n,r]=(0,RI.useState)(!1);return(0,EI.useMount)(()=>{r(!0)}),n?(0,va.jsx)(va.Fragment,{children:e}):o?(0,va.jsx)(va.Fragment,{children:o}):null}var tD=t("@/services/jotai/atoms/accessToken");var AI=t("react/jsx-runtime"),n3=[xr.MIME_TYPES.pdf,xr.MIME_TYPES.doc,xr.MIME_TYPES.docx,xr.MIME_TYPES.xls,xr.MIME_TYPES.xlsx,xr.MIME_TYPES.ppt,xr.MIME_TYPES.pptx];var Td=t("react"),oD=t("@apollo/client"),nD=t("@mantine/hooks"),rD=t("@/graphql");var LI=t("react");var kf=t("react/jsx-runtime");var Pf=t("react/jsx-runtime");var BI=t("react"),OI=t("lodash");var GI=t("@/graphql");var _I=t("lodash"),uD=t("@/lib/env/client");function NI(e,o){return e==="temporary"?"":`/api/client/${e}/logo${(0,_I.isEmpty)(o)?"":`?${new URLSearchParams(o).toString()}`}`}var Rf=t("react/jsx-runtime"),Id=(0,GI.graphql)(`
	fragment ClientAvatar on Client {
		id
		name
		hasLogo
		logo {
			focalX
			focalY
		}
	}
`),Jr=(0,BI.forwardRef)(({client:e,size:o=40,urlParams:n,parts:r,...i},a)=>(0,Rf.jsx)(wn,{ref:a,...(0,OI.omit)(i,"ref"),className:Dt("client-avatar size-[unset] rounded-md",i.className),style:{width:o,height:o,...i.style},parts:{...r,image:{...r?.image,...e.hasLogo&&{src:NI(e.id,n)},alt:e.name,style:{objectPosition:mr(e.logo),...r?.image?.style}},fallback:{...r?.fallback,children:(0,Rf.jsx)(CI,{style:{width:"62.5%",height:"62.5%"}})}}}));Jr.displayName="ClientAvatar";var mD=t("next-i18next"),zI=t("@mantine/core"),HI=t("@apollo/client"),fD=t("@fortawesome/react-fontawesome"),Ef=t("@/graphql");var gD=t("@/services/apollo/refetchQueries"),hD=t("react/jsx-runtime"),i8=(0,Ef.graphql)(`
	mutation ClientRefreshLogo($id: ID!) {
		clientRefreshLogo(where: { id: $id })
	}
`),a8=(0,Ef.graphql)(`
	query ClientRefreshedLogo($where: ClientWhereUniqueInput!) {
		client(where: $where) {
			id
			logo {
				id
				createdAt
				updatedAt
				name
				mimetype
				fileSizeBytes
				focalX
				focalY
			}
		}
	}
`);var yD=t("next-i18next"),UI=t("@mantine/core"),bD=t("@fortawesome/free-solid-svg-icons"),SD=t("@fortawesome/react-fontawesome"),$I=t("react/jsx-runtime");var LD=t("react"),FD=t("next-i18next");var vd=t("lodash"),_o=t("zod"),Ff=t("@/graphql"),QI=t("@/graphql/validation");var xD=t("deep-object-diff"),Lf=t("lodash"),wd=t("zod"),VI=t("@/graphql"),Af=t("@/graphql/validation");var Ri=(0,Af.AddressCreateInputSchema)().extend({country:wd.z.union([(0,Af.AddressCreateInputSchema)().shape.country,vx]),additionalCountries:wd.z.array(wd.z.string())}),Ei={country:"",additionalCountries:[],city:"",line1:"",line2:"",postalCode:"",region:""},p8=ao({zodSchema:Ri,initialValues:Ei}),WI=(0,VI.graphql)(`
	fragment AddressForm on Address {
		country
		additionalCountries
		city
		line1
		line2
		postalCode
		region
	}
`);var CD=t("lodash"),KI=t("@/graphql"),qI=t("@/graphql/validation");var _s=(0,qI.TranslationCreateDataInputSchema)(),TD={language:_n,content:null},g8=ao({zodSchema:_s,initialValues:TD}),YI=(0,KI.graphql)(`
	fragment TranslationForm on TranslationViewModel {
		language
		content
	}
`);var Ns=["CLIENT","PEER","PROSPECT"];var ED=(0,QI.ClientCreateDataInputSchema)().extend({email:ma.or(_o.z.literal("")),website:_o.z.nullable(Mc.or(_o.z.literal("").transform(()=>null))),linkedInPage:_o.z.nullable(fa.or(_o.z.literal("").transform(()=>null))),startDate:xs.nullish(),address:Ri.extend({country:_o.z.literal("").or(Ri.shape.country.nullish())}).transform(e=>(0,vd.isEqual)(e,Ei)?null:e).nullish(),industries:_o.z.array(Ke).min(1),practices:_o.z.array(Ke),specialists:_o.z.array(Ke),logo:Hr.nullable().optional(),descriptions:_o.z.array(_s),files:_o.z.array(Hr).optional(),labels:_o.z.array(Ke),clientTypes:_o.z.array(_o.z.enum(Ns)).min(1)}).refine(e=>!e.clientNameHidden||e.descriptions.length>0,{message:"Description is required when client name is hidden",path:["descriptions"]}),AD={name:"",customerNumber:"",email:"",phoneNumber:"",website:"",linkedInPage:"",startDate:null,address:{...Ei},industries:[],practices:[],specialists:[],logo:void 0,clientNameHidden:!1,isConfidential:!1,descriptions:[],files:[],labels:[],clientTypes:[]},Bs=ao({zodSchema:ED,initialValues:AD}),v8=(0,Ff.graphql)(`
	fragment ClientForm on Client {
		clientTypes
		name
		customerNumber
		email
		phoneNumber
		website
		linkedInPage
		startDate
		industries {
			edges {
				node {
					id
				}
			}
		}
		practices {
			edges {
				node {
					id
				}
			}
		}
		specialists {
			edges {
				node {
					id
				}
			}
		}
		address {
			id
			...AddressForm
		}
		clientNameHidden
		isConfidential
		descriptions {
			...TranslationForm
		}
		files {
			id
			createdAt
			updatedAt
			name
			mimetype
			fileSizeBytes
		}
		# The logo's own row, so the form previews it with the framing it is stored with
		# rather than guessing centre \u2014 and so clearing it is an actual change to diff
		# against rather than a value the form never held.
		logo {
			id
			createdAt
			updatedAt
			name
			mimetype
			fileSizeBytes
			focalX
			focalY
		}
		labels {
			id
		}
	}
`);var _D=t("react"),ND=t("next-i18next"),kd=t("@mantine/core"),jI=t("@fortawesome/free-solid-svg-icons"),BD=t("@fortawesome/react-fontawesome");var Os=t("@mantine/core"),MD=t("@fortawesome/free-solid-svg-icons"),DD=t("@fortawesome/react-fontawesome");var XI=t("react/jsx-runtime");var JI=t("react/jsx-runtime");var ZI=t("react"),Pd=t("@mantine/core");var Ed=t("react/jsx-runtime"),Rd=(0,ZI.forwardRef)(function({children:o,isLoading:n=!1,...r},i){return(0,Ed.jsxs)(Pd.Box,{ref:i,component:"form",...r,className:Dt("relative flex flex-col gap-5",r.className),children:[(0,Ed.jsx)(Pd.LoadingOverlay,{visible:n}),o]})});var Gf=t("react"),VD=t("next-i18next"),sw=t("@mantine/core"),WD=t("@apollo/client"),zf=t("lodash");var rw=t("react"),iw=t("next-i18next"),Us=t("@mantine/core");var ew=t("@mantine/core"),tw=t("@fortawesome/free-solid-svg-icons"),ow=t("@fortawesome/react-fontawesome"),Ad=t("react/jsx-runtime");function ht({archived:e,label:o,size:n="xs",...r}){return e?(0,Ad.jsx)(ew.Tooltip,{label:o,children:(0,Ad.jsx)("span",{...r,children:(0,Ad.jsx)(ow.FontAwesomeIcon,{size:n,color:"orange",icon:tw.faExclamationCircle})})}):null}var Md=t("@/graphql");var Ld={variant:"outline",size:"sm"},Gs=" \u203A ";function Fd(e,o=!0){let n=new Map(e.map(s=>[s.id,s])),r=s=>n.get(s),i=s=>{let l=n.get(s)?.parentId;return l?n.get(l):void 0},a=s=>{let l=new Set(s),p=[];for(let c of s){let u=i(c);for(;u;)!l.has(u.id)&&!p.includes(u.id)&&p.push(u.id),u=i(u.id)}return p};return{ready:o,get:r,getParent:i,isSub:s=>i(s)!==void 0,ancestorIds:a,withParents:s=>[...s,...a(s)],pathLabel:(s,l="")=>{let p=n.get(s)?.name??l,c=i(s);return c?[i(c.id)?.name,c.name,p].filter(Boolean).join(Gs):p}}}var Mf=Fd([],!1);var Df=t("react"),_f=t("@apollo/client"),Nf=t("jotai"),Bf=t("@/graphql");var Of=t("@/services/jotai/atoms/accessToken"),OD=(0,Bf.graphql)(`
	query PracticeHierarchy {
		practices(first: 1000, where: { flattened: true }, orderBy: { name: ASC }) {
			edges {
				node {
					id
					name
					parentId
				}
			}
		}
	}
`),GD=(0,Bf.graphql)(`
	query IndustryHierarchy {
		industries(first: 1000, where: { flattened: true }, orderBy: { name: ASC }) {
			edges {
				node {
					id
					name
					parentId
				}
			}
		}
	}
`),nw={fetchPolicy:"cache-first",errorPolicy:"ignore"};function zs(){let e=(0,Nf.useAtomValue)(Of.accessTokenAtom),o=(0,_f.useQuery)(OD,{...nw,skip:!e}),n=o.data??o.previousData;return(0,Df.useMemo)(()=>n?Fd(Ye(n.practices)):Mf,[n])}function Hs(){let e=(0,Nf.useAtomValue)(Of.accessTokenAtom),o=(0,_f.useQuery)(GD,{...nw,skip:!e}),n=o.data??o.previousData;return(0,Df.useMemo)(()=>n?Fd(Ye(n.industries)):Mf,[n])}var ka=t("react/jsx-runtime"),zD=(0,Md.graphql)(`
	fragment IndustrySelectItem on Industry {
		name
		archived
	}
`),aw=(0,rw.forwardRef)(({label:e,data:o,value:n,...r},i)=>{let{t:a}=(0,iw.useTranslation)(),s=(0,Md.getFragmentData)(zD,o),l=Hs(),p=n?l.getParent(n):void 0;return(0,ka.jsxs)(Us.Group,{ref:i,spacing:"xs",noWrap:!0,...r,children:[(0,ka.jsxs)(Us.Text,{span:!0,truncate:!0,children:[p&&(0,ka.jsxs)(Us.Text,{span:!0,color:"dimmed",size:"xs",children:[l.pathLabel(p.id),Gs]}),e||s.name]}),(0,ka.jsx)(ht,{archived:s.archived,label:a("archived_industry",{ns:"entity_industry"})})]})});aw.displayName="IndustrySelectItem";var Hf=t("@/graphql");var HD=t("react"),UD=t("@mantine/hooks");var $D=t("@mantine/hooks");var KD=t("react/jsx-runtime"),sY=(0,Hf.graphql)(`
	query IndustrySelectMulti($after: String, $name: StringFilterInput, $archived: Boolean) {
		industries(after: $after, where: { archived: $archived, name: $name }, orderBy: { name: ASC }) {
			edges {
				node {
					id
					name
					archived
					...IndustrySelectItem
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`),lY=(0,Hf.graphql)(`
	query IndustrySelectMultiCurrent($ids: [String!]!) {
		industries(where: { id: { in: $ids } }, first: 1000) {
			edges {
				node {
					id
					name
					archived
					...IndustrySelectItem
				}
			}
		}
	}
`);var Kf=t("react"),ZD=t("next-i18next"),Ud=t("@mantine/core"),e_=t("@mantine/hooks"),kw=t("@apollo/client"),Pw=t("lodash");var uw=t("next-i18next"),to=t("@mantine/core"),mw=t("@mantine/hooks"),fw=t("@mantine/modals"),Nd=t("@fortawesome/free-solid-svg-icons"),_d=t("@fortawesome/react-fontawesome");var lw=t("react"),cw=t("next-i18next"),Zr=t("@mantine/core");var Dd=t("@/graphql"),$s=t("react/jsx-runtime"),Rn=(0,Dd.graphql)(`
	fragment LabelBadge on Label {
		name
		color
		archived
	}
`),Uf=.9,pn=(0,lw.forwardRef)(({label:e,sx:o,...n},r)=>{let{t:i}=(0,cw.useTranslation)(),a=(0,Dd.getFragmentData)(Rn,e);return(0,$s.jsx)(Zr.Badge,{ref:r,sx:[s=>({color:a.color,backgroundColor:s.fn.lighten(a.color,Uf),radius:(0,Zr.rem)(16),fontSize:s.fontSizes.xs,letterSpacing:"unset"}),...(0,Zr.packSx)(o)],...n,children:(0,$s.jsxs)(Zr.Group,{spacing:4,noWrap:!0,children:[a.name,(0,$s.jsx)(ht,{archived:a.archived,label:i("archived_label",{ns:"entity_label"})})]})})});pn.displayName="LabelBadge";var dw=t("next-i18next"),Vs=t("@mantine/core"),qD=t("@mantine/hooks");var $f=t("react/jsx-runtime"),pw="Confirm/Text";var Bd=t("@/graphql");var gw=t("@/styles/cache"),Qt=t("react/jsx-runtime"),hw=(0,Bd.graphql)(`
	fragment LabelAdvancedSelectActions on Label {
		id
		name
		color
	}
`);function Vf({label:e,onChange:o,onDelete:n,...r}){let{t:i}=(0,uw.useTranslation)(),a=(0,to.useMantineTheme)(),s=mo({requested:"LABEL__UPDATE"}),l=mo({requested:"LABEL__DELETE"}),p=(0,Bd.getFragmentData)(hw,e),[c,u]=(0,mw.useInputState)(p.name),C=Object.entries(a.colors).filter(([g])=>!["dark","secondary","success","warning","error","blueGray","blueLight","primary"].includes(g)).map(([g,d])=>({name:g,color:d[7]}));return!s&&!l?null:(0,Qt.jsxs)(to.Menu,{position:"right",styles:{dropdown:{padding:8}},closeOnItemClick:!1,onClose:()=>{s&&c!==p.name&&o({name:c});let g=document.querySelector(`.label-select-multi  .${gw.cacheKey}-MultiSelect-searchInput[type="search"]`);g instanceof HTMLInputElement&&g.focus()},withArrow:!0,shadow:"sm",...r,children:[(0,Qt.jsx)(to.Menu.Target,{children:(0,Qt.jsx)(to.ActionIcon,{m:-4,onMouseDown:g=>g.stopPropagation(),sx:g=>({...g.fn.hover({background:g.fn.darken(g.colors.gray[g.other.getSchemeColor(g.colorScheme,1)]??g.colors.gray[0],.1)})}),children:(0,Qt.jsx)(_d.FontAwesomeIcon,{icon:Nd.faEllipsis})})}),(0,Qt.jsxs)(to.Menu.Dropdown,{onMouseDown:g=>g.stopPropagation(),children:[s&&(0,Qt.jsx)(to.Menu.Item,{p:0,children:(0,Qt.jsx)(to.TextInput,{value:c,onChange:u})}),n&&l&&(0,Qt.jsx)(to.Menu.Item,{mt:4,icon:(0,Qt.jsx)(_d.FontAwesomeIcon,{icon:Ls}),closeMenuOnClick:!1,onClick:g=>{g.stopPropagation(),(0,fw.openContextModal)({modal:pw,zIndex:450,title:i("label-delete.title",{ns:"modals"}),innerProps:{automationUsage:{kind:"label",ids:[p.id]},text:p.name,children:(0,Qt.jsx)(to.Text,{children:i("label-delete.message",{ns:"modals",name:p.name})}),confirmText:i("delete"),onConfirm:d=>{n(),d.closeModal()}}})},children:i("delete")}),s&&(0,Qt.jsxs)(Qt.Fragment,{children:[(0,Qt.jsx)(to.Menu.Divider,{}),(0,Qt.jsx)(to.Menu.Label,{children:i("colors")}),C.map(({name:g,color:d})=>(0,Qt.jsx)(to.Menu.Item,{icon:(0,Qt.jsx)(to.Box,{sx:y=>({width:18,height:18,margin:-4,marginInlineEnd:0,borderRadius:y.radius.sm,borderColor:y.colors.gray[y.other.getSchemeColor(y.colorScheme,3)],borderWidth:1,borderStyle:"solid",backgroundColor:y.fn.lighten(d,Uf)})}),rightSection:d===p.color&&(0,Qt.jsx)(_d.FontAwesomeIcon,{icon:Nd.faCheck,style:{width:12,height:12}}),closeMenuOnClick:!1,onClick:y=>{y.stopPropagation(),o({color:d})},children:i(`label.values.${g}`,{ns:"selects"})},d))]})]})]})}var yw=t("react"),bw=t("next-i18next"),ei=t("@mantine/core"),Sw=t("@fortawesome/free-solid-svg-icons"),xw=t("@fortawesome/react-fontawesome");var Od=t("@/graphql"),un=t("react/jsx-runtime"),YD=(0,Od.graphql)(`
	fragment LabelAdvancedSelectItem on Label {
		id
		name
		color
		archived
		...LabelBadge
		...LabelAdvancedSelectActions
	}
`),Gd="ui:helper",Cw=(0,yw.forwardRef)(({value:e,label:o,data:n,actions:r,selected:i,...a},s)=>{let{t:l}=(0,bw.useTranslation)(),p=(0,Od.getFragmentData)(YD,n);return e===Gd?(0,un.jsx)(ei.Text,{ref:s,span:!0,truncate:!0,size:"xs",weight:500,my:4,mx:6,sx:c=>({color:c.colors.gray[c.other.getSchemeColor(c.colorScheme,5)]}),children:o}):p?p.archived?(0,un.jsxs)(ei.Group,{ref:s,spacing:"xs",noWrap:!0,position:"apart",...a,children:[(0,un.jsx)(ei.Group,{spacing:"xs",noWrap:!0,miw:0,sx:{opacity:.55},children:(0,un.jsx)(pn,{label:p})}),(0,un.jsx)(ei.Text,{size:"xs",color:"dimmed",children:l("label.archived-suffix",{ns:"selects"})})]}):(0,un.jsxs)(ei.Group,{ref:s,spacing:"xs",noWrap:!0,position:"apart",...a,children:[(0,un.jsxs)(ei.Group,{spacing:"xs",noWrap:!0,miw:0,children:[i&&(0,un.jsx)(xw.FontAwesomeIcon,{icon:Sw.faCheck,style:{width:12,height:12,flexShrink:0}}),(0,un.jsx)(pn,{label:p})]}),(0,un.jsx)(Vf,{label:p,onChange:c=>r.update({...p,...c}),onDelete:()=>r.delete(p.id)})]}):null});Cw.displayName="LabelAdvancedSelectItem";var Tw=t("react"),Pa=t("@mantine/core");var zd=t("@/graphql"),Wf=t("react/jsx-runtime"),QD=(0,zd.graphql)(`
	fragment LabelAdvancedSelectValue on Label {
		name
		...LabelBadge
	}
`),Iw=(0,Tw.forwardRef)(function({label:o,onRemove:n,data:r,sx:i,...a},s){let l=(0,zd.getFragmentData)(QD,r);return a.value===Gd||!l?null:(0,Wf.jsx)(pn,{ref:s,rightSection:(0,Wf.jsx)(Pa.CloseButton,{w:"18px",h:"18px",ml:-1,p:2,c:"inherit",radius:"50%",onMouseDown:n}),sx:[{minHeight:(0,Pa.rem)(22),paddingInlineEnd:4},...(0,Pa.packSx)(i)],label:l,...a,children:o||l.name})});var Ra=t("@/graphql");var Hd=t("zod"),ww=t("@/graphql"),vw=t("@/graphql/validation");var XD=(0,vw.LabelCreateDataInputSchema)().omit({users:!0}).extend({color:Hd.z.string().regex(/#[0-9A-Fa-f]{6}\b/),userIds:Hd.z.array(Hd.z.string())}),jD={name:"",color:"",entityType:"",userIds:[]},JD=ao({zodSchema:XD,initialValues:jD}),AY=(0,ww.graphql)(`
	fragment LabelForm on Label {
		id
		name
		color
		entityType
		archived
		users {
			id
		}
	}
`);var t_=t("@/services/apollo/refetchQueries");var o_=t("@/styles/cache");var Rw=t("react/jsx-runtime"),VY=(0,Ra.graphql)(`
	query LabelAdvancedSelectMulti(
		$where: LabelWhereInput
		$orderBy: LabelOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: LabelWhereInput
	) {
		all: labels(where: $where, orderBy: $orderBy) {
			id
			name
			archived
			...LabelSelectItem
			...LabelAdvancedSelectItem
		}
		initial: labels(where: $whereInitial) @include(if: $includeInitial) {
			id
			name
			archived
			...LabelSelectItem
			...LabelAdvancedSelectItem
		}
	}
`),WY=(0,Ra.graphql)(`
	mutation LabelAdvancedSelectMultiCreate($data: LabelCreateDataInput!) {
		labelCreate(data: $data) {
			id
		}
	}
`),KY=(0,Ra.graphql)(`
	mutation LabelAdvancedSelectMultiUpdate(
		$data: LabelUpdateDataInput!
		$where: LabelWhereUniqueInput!
	) {
		labelUpdate(data: $data, where: $where) {
			id
		}
	}
`),qY=(0,Ra.graphql)(`
	mutation LabelAdvancedSelectMultiDelete($where: LabelWhereUniqueInput!) {
		labelDelete(where: $where) {
			id
		}
	}
`);var qf=t("react"),r_=t("next-i18next"),Fw=t("@mantine/core"),i_=t("@apollo/client"),Yf=t("lodash");var Ew=t("react"),Aw=t("next-i18next"),Ws=t("@mantine/core");var $d=t("@/graphql");var Ea=t("react/jsx-runtime"),n_=(0,$d.graphql)(`
	fragment PracticeSelectItem on Practice {
		name
		archived
	}
`),Lw=(0,Ew.forwardRef)(({label:e,data:o,value:n,...r},i)=>{let{t:a}=(0,Aw.useTranslation)(),s=(0,$d.getFragmentData)(n_,o),l=zs(),p=n?l.getParent(n):void 0;return(0,Ea.jsxs)(Ws.Group,{ref:i,spacing:"xs",noWrap:!0,...r,children:[(0,Ea.jsxs)(Ws.Text,{span:!0,truncate:!0,children:[p&&(0,Ea.jsxs)(Ws.Text,{span:!0,color:"dimmed",size:"xs",children:[l.pathLabel(p.id),Gs]}),e||s.name]}),(0,Ea.jsx)(ht,{archived:s.archived,label:a("archived_practice",{ns:"entity_practice"})})]})});Lw.displayName="PracticeSelectItem";var Qf=t("@/graphql");var a_=t("react/jsx-runtime"),a9=(0,Qf.graphql)(`
	query PracticeSelectMulti($after: String, $name: StringFilterInput, $archived: Boolean) {
		practices(after: $after, where: { archived: $archived, name: $name }, orderBy: { name: ASC }) {
			edges {
				node {
					id
					name
					archived
					...PracticeSelectItem
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`),s9=(0,Qf.graphql)(`
	query PracticeSelectMultiCurrent($ids: [String!]!) {
		practices(where: { id: { in: $ids } }, first: 1000) {
			edges {
				node {
					id
					name
					archived
					...PracticeSelectItem
				}
			}
		}
	}
`);var zw=t("react"),c_=t("next-i18next"),Hw=t("@mantine/core"),d_=t("@apollo/client"),jf=t("lodash");var Bw=t("react"),Wd=t("@mantine/core");var Mw=t("next-i18next"),Dw=t("@mantine/core"),_w=t("@fortawesome/free-solid-svg-icons"),Nw=t("@fortawesome/react-fontawesome"),Vd=t("react/jsx-runtime");function Ks({archived:e=!1,size:o="xs",...n}){let{t:r}=(0,Mw.useTranslation)();return e?(0,Vd.jsx)(Dw.Tooltip,{label:r("archived_specialist",{ns:"entity_specialist"}),children:(0,Vd.jsx)("span",{...n,children:(0,Vd.jsx)(Nw.FontAwesomeIcon,{size:o,color:"orange",icon:_w.faExclamationCircle})})}):null}var Kd=t("@/graphql");var qs=t("react/jsx-runtime"),s_=(0,Kd.graphql)(`
	fragment SpecialistSelectItem on Specialist {
		title
		givenName
		familyName
		archived
	}
`),Ow=(0,Bw.forwardRef)(({label:e,data:o,...n},r)=>{let i=(0,Kd.getFragmentData)(s_,o);return(0,qs.jsxs)(Wd.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:[(0,qs.jsx)(Wd.Text,{span:!0,truncate:!0,children:e||ze(i)}),(0,qs.jsx)(Ks,{archived:i.archived})]})});Ow.displayName="SpecialistSelectItem";var Uw=t("@/graphql");var p_=t("react/jsx-runtime"),R9=(0,Uw.graphql)(`
	query SpecialistSelectMulti(
		$first: Int
		$where: SpecialistWhereInput
		$orderBy: SpecialistOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: SpecialistWhereInput
	) {
		all: specialists(first: $first, where: $where, orderBy: $orderBy) {
			edges {
				node {
					id
					title
					prefix
					givenName
					familyName
					...SpecialistSelectItem
				}
			}
		}
		initial: specialists(where: $whereInitial) @include(if: $includeInitial) {
			edges {
				node {
					id
					title
					prefix
					givenName
					familyName
					...SpecialistSelectItem
				}
			}
		}
	}
`);var qw=t("react"),v_=t("next-i18next"),Qs=t("@mantine/core"),k_=t("@fortawesome/free-solid-svg-icons"),P_=t("@fortawesome/react-fontawesome");var $w=t("react"),A9=t("flag-icons/css/flag-icons.min.css");var Vw=t("react/jsx-runtime"),u_={sqi:"AL",cat:"AD",hye:"AM",deu:"DE",aze:"AZ",bel:"BY",bos:"BA",bul:"BG",khm:"KH",zho:"CN",hrv:"HR",ces:"CZ",dan:"DK",est:"EE",fin:"FI",fra:"FR",kat:"GE",ell:"GR",hun:"HU",isl:"IS",hin:"IN",ind:"ID",gle:"IE",ita:"IT",lao:"LA",lav:"LV",lit:"LT",ltz:"LU",mlt:"MT",ara:"ARAB",mya:"MM",nld:"NL",mkd:"MK",nor:"NO",pol:"PL",por:"PT",ron:"RO",rus:"RU",srp:"RS",slk:"SK",slv:"SI",spa:"ES",swe:"SE",tha:"TH",tur:"TR",eng:"GB",vie:"VN",heb:"IL"},Tr=(0,$w.forwardRef)(({country:e,language:o,...n},r)=>{let i=function(){if(e)return e;if(o){let a=u_[o];if(a)return a}return"XX"}();return(0,Vw.jsx)("div",{ref:r,...n,className:Dt(`fi-${i.toLowerCase()}`,"relative inline-block h-[1em] w-(--width) min-w-(--width) basis-(--width) overflow-visible rounded-sm bg-cover bg-center bg-no-repeat align-[-0.125em] leading-none [--width:1.33333333em]",n.className)})});Tr.displayName="FlagIcon";var m_=t("react"),f_=t("next-i18next"),g_=t("@mantine/core");var Ww=t("react"),qd=t("@mantine/core");var Ys=t("react/jsx-runtime"),Kw=(0,Ww.forwardRef)(({value:e,label:o,...n},r)=>(0,Ys.jsxs)(qd.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:[(0,Ys.jsx)(Tr,{language:e}),(0,Ys.jsx)(qd.Text,{span:!0,truncate:!0,children:o})]}));Kw.displayName="LanguageSelectItem";var h_=t("@/lib/contexts/Languages");var y_=t("react/jsx-runtime");var b_=t("react"),S_=t("@mantine/core"),x_=Y(t("lodash/debounce"));var C_=t("react/jsx-runtime");var R_=t("@/lib/contexts/Languages");var Jf=t("react/jsx-runtime");var Xw=t("@/graphql");var $_=t("@/lib/contexts/DateFormat");var Zf=t("react/jsx-runtime"),v7=(0,Xw.graphql)(`
	query PotentialClientDuplicates($where: ClientWhereInput, $first: Int) {
		clients(where: $where, first: $first) {
			edges {
				node {
					id
					name
					archived
				}
			}
		}
	}
`);var K_=t("next-i18next"),q_=t("@mantine/core"),ov=t("@fortawesome/free-solid-svg-icons"),Y_=t("@fortawesome/react-fontawesome");var jw=t("@apollo/client"),Jw=t("@/graphql"),P7=(0,Jw.graphql)(`
	query CollaborationEnabled {
		collaborationEnabled
	}
`);var ev=t("react"),W_=t("@apollo/client"),Xd=t("@/graphql");var V_=t("@apollo/client");var Zw=t("react");var _7=(0,Xd.graphql)(`
	query EditingSessionActiveEditors($entityType: String!, $entityId: ID!) {
		editingSessionActiveEditors(entityType: $entityType, entityId: $entityId) {
			userId
			userName
		}
	}
`),N7=(0,Xd.graphql)(`
	mutation EditingSessionHeartbeat($entityType: String!, $entityId: ID!) {
		editingSessionHeartbeat(entityType: $entityType, entityId: $entityId)
	}
`),B7=(0,Xd.graphql)(`
	mutation EditingSessionStop($entityType: String!, $entityId: ID!) {
		editingSessionStop(entityType: $entityType, entityId: $entityId)
	}
`);var Q_=t("react/jsx-runtime");var X_=t("@mantine/core");var j_=t("react/jsx-runtime");function Xs({locales:e=Ll,style:o="long",type:n="conjunction",...r}={}){return new Intl.ListFormat(e,{style:o,type:n,...r})}var kN=t("next-i18next"),Mv=t("@mantine/core"),PN=t("@mantine/hooks"),RN=t("@apollo/client");var TN=t("next-i18next"),ni=t("@mantine/core"),IN=t("@mantine/hooks"),wN=t("@mantine/notifications"),ug=t("@apollo/client"),vN=t("@fortawesome/react-fontawesome");var SN=t("next-i18next"),Av=t("@mantine/core"),Lv=t("@apollo/client");var Cv=t("react"),cN=t("next-i18next"),oi=t("@mantine/core"),dN=t("@mantine/hooks"),pN=t("@apollo/client"),uN=t("@fortawesome/free-solid-svg-icons"),mN=t("@fortawesome/react-fontawesome");var uv=t("react"),eN=t("next-i18next"),js=t("@mantine/core"),tN=t("@mantine/hooks"),oN=t("@apollo/client"),nN=t("@fortawesome/react-fontawesome"),og=t("lodash");var cv=t("react"),dv=t("next-i18next"),pv=t("@mantine/core");var nv=t("next-i18next"),rv=t("@mantine/core");var iv=t("react/jsx-runtime"),J_={CLIENT:"primary",PEER:"teal",PROSPECT:"orange"};function jd({clientTypes:e,...o}){let{t:n}=(0,nv.useTranslation)();if(!e.length)return null;let r=Ns.filter(s=>e.includes(s));if(!r.length)return null;let i=r.map(s=>n(`fields.clientType.values.${s}`,{ns:"entity_client"})).join(" + "),a=r.length===1&&r[0]?J_[r[0]]:"violet";return(0,iv.jsx)(rv.Badge,{color:a,size:"xs",styles:{root:{textTransform:"unset"}},...o,children:i})}var av=t("next-i18next"),sv=t("@mantine/core"),Jd=t("@fortawesome/free-solid-svg-icons"),lv=t("@fortawesome/react-fontawesome"),eg=t("react/jsx-runtime");function ti({isConfidential:e,...o}){let{t:n}=(0,av.useTranslation)();return(0,eg.jsx)(sv.Badge,{color:e?"warning.6":"gray.6",leftSection:(0,eg.jsx)(lv.FontAwesomeIcon,{icon:e?Jd.faLock:Jd.faLockOpen,style:{fontSize:"0.8em"}}),styles:{root:{textTransform:"unset"}},...o,children:n(e?"confidential":"publishable")})}var Zd=t("@/graphql"),Li=t("react/jsx-runtime"),Z_=(0,Zd.graphql)(`
	fragment ClientSelectItem on Client {
		name
		archived
		clientTypes
		isConfidential
	}
`),tg=(0,cv.forwardRef)(({label:e,data:o,...n},r)=>{let{t:i}=(0,dv.useTranslation)(),a=(0,Zd.getFragmentData)(Z_,o);return(0,Li.jsxs)(pv.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:[(0,Li.jsx)(Vt,{miw:0,children:e||a.name}),(0,Li.jsx)(jd,{clientTypes:a.clientTypes}),a.isConfidential&&(0,Li.jsx)(ti,{isConfidential:!0}),(0,Li.jsx)(ht,{archived:a.archived,label:i("archived_client",{ns:"entity_client"})})]})});tg.displayName="ClientSelectItem";var mv=t("@/graphql");var ng=t("react/jsx-runtime"),cQ=(0,mv.graphql)(`
	query ClientSelectSingle(
		$first: Int
		$where: ClientWhereInput
		$orderBy: ClientOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: ClientWhereUniqueInput!
	) {
		all: clients(first: $first, where: $where, orderBy: $orderBy) {
			edges {
				node {
					id
					name
					...ClientSelectItem
				}
			}
		}
		initial: client(where: $whereInitial) @include(if: $includeInitial) {
			id
			name
			...ClientSelectItem
		}
	}
`);var hv=t("react"),yv=t("lodash");var bv=t("@/graphql");var fv=t("lodash"),rN=t("@/lib/env/client");function gv(e,o){return e==="temporary"?"":`/api/contact/${e}/logo${(0,fv.isEmpty)(o)?"":`?${new URLSearchParams(o).toString()}`}`}var ig=t("react/jsx-runtime"),SQ=(0,bv.graphql)(`
	fragment ContactAvatar on Contact {
		id
		givenName
		familyName
		hasLogo
		logo {
			focalX
			focalY
		}
	}
`),Sv=(0,hv.forwardRef)(({contact:e,size:o=40,urlParams:n,parts:r,...i},a)=>{let s=ze(e);return(0,ig.jsx)(wn,{ref:a,...(0,yv.omit)(i,"ref"),className:Dt("contact-avatar size-[unset] rounded-md",i.className),style:{width:o,height:o,...i.style},parts:{...r,image:{...r?.image,...e.hasLogo&&{src:gv(e.id,n)},alt:s,style:{objectPosition:mr(e.logo),...r?.image?.style}},fallback:{...r?.fallback,children:zo(s)||(0,ig.jsx)(TI,{style:{width:"62.5%",height:"62.5%"}})}}})});Sv.displayName="ContactAvatar";var sN=t("react"),lN=t("next-i18next");var ep=t("lodash"),oo=t("zod"),ag=t("@/graphql"),xv=t("@/graphql/validation");var iN=(0,xv.ContactCreateDataInputSchema)().extend({title:oo.z.union([oo.z.string().min(1),Mo.transform(()=>null)]),email:ma,linkedInURL:oo.z.union([fa,Mo.transform(()=>null)]),website:oo.z.union([Mc,Mo.transform(()=>null)]),department:oo.z.union([oo.z.string().min(1),Mo.transform(()=>null)]),mobile:Km,phoneNumber:Km,role:oo.z.union([oo.z.string().min(1),Mo.transform(()=>null)]),notes:oo.z.union([oo.z.string().min(1),Mo.transform(()=>null)]),contactTypes:oo.z.array(oo.z.enum(["REFERRAL","REFEREE"])).min(1),client:Ke,industries:oo.z.array(Ke),practices:oo.z.array(Ke),specialists:oo.z.array(Ke),labels:oo.z.array(Ke),address:Ri.extend({country:oo.z.literal("").or(Ri.shape.country.nullish())}).transform(e=>(0,ep.isEqual)(e,Ei)?null:e).nullish(),files:oo.z.array(Hr).optional(),logo:Hr.nullable().optional()}).omit({prefix:!0}),aN={title:"",givenName:"",familyName:"",email:"",phoneNumber:"",mobile:"",role:"",department:"",linkedInURL:"",website:"",notes:"",contactTypes:[],client:"",industries:[],practices:[],specialists:[],address:{...Ei},files:[],labels:[],logo:void 0},tp=ao({zodSchema:iN,initialValues:aN});var LQ=(0,ag.graphql)(`
	fragment ContactForm on Contact {
		title
		givenName
		familyName
		department
		mobile
		phoneNumber
		email
		notes
		role
		linkedInURL
		website
		contactTypes
		client {
			id
		}
		industries {
			id
		}
		practices {
			id
		}
		specialists {
			id
			givenName
			familyName
		}
		address {
			id
			...AddressForm
		}
		files {
			id
			createdAt
			updatedAt
			name
			mimetype
			fileSizeBytes
		}
		# The logo's own row, so the form previews it with the framing it is stored with
		# rather than guessing centre \u2014 and so clearing it is an actual change to diff
		# against rather than a value the form never held.
		logo {
			id
			createdAt
			updatedAt
			name
			mimetype
			fileSizeBytes
			focalX
			focalY
		}
		labels {
			id
		}
	}
`);var Tv=t("@/graphql");var sg=t("react/jsx-runtime"),aX=(0,Tv.graphql)(`
	query ContactFormClient($id: ID!) {
		client(where: { id: $id }) {
			id
			clientTypes
			website
			industries {
				edges {
					node {
						id
					}
				}
			}
			address {
				id
				line1
				line2
				city
				region
				postalCode
				country
				additionalCountries
			}
		}
	}
`);var cg=t("react"),gN=t("next-i18next"),Iv=t("@mantine/core"),hN=t("@mantine/modals");var wv=t("react/jsx-runtime");var pg=t("@/graphql");var vv=t("@apollo/client"),kv=t("@/graphql");var En=t("@/services/apollo/refetchQueries"),fX=(0,kv.graphql)(`
	mutation LabelSync($data: LabelSyncInput!) {
		labelSync(data: $data)
	}
`),gX={MATTER:En.refetchQueries.Matter,CLIENT:En.refetchQueries.Client,CONTACT:En.refetchQueries.Contact,APPOINTMENT:En.refetchQueries.Appointment,PITCH:En.refetchQueries.Pitch,SUBMISSION:En.refetchQueries.Submission,WORK_HIGHLIGHT:En.refetchQueries.WorkHighlight,SPECIALIST:En.refetchQueries.Specialist,PUBLICATION:En.refetchQueries.Publication,TESTIMONIAL:En.refetchQueries.Testimonial};var xN=t("@/services/apollo/refetchQueries");var Fv=t("react/jsx-runtime"),DX=(0,pg.graphql)(`
	mutation ContactModalFormCreate($data: ContactCreateDataInput!) {
		contactCreate(data: $data) {
			id
		}
	}
`),_X=(0,pg.graphql)(`
	mutation ContactFormModalUpdate(
		$data: ContactUpdateDataInput!
		$where: ContactWhereUniqueInput!
	) {
		contactUpdate(data: $data, where: $where) {
			id
		}
	}
`);var Fi=t("@/graphql");var mg=t("react/jsx-runtime");var KX=(0,Fi.graphql)(`
	query NexlSearchClients($term: String!) {
		nexlSearchClients(term: $term) {
			nexlUid
			name
			email
			existsInKlerq
		}
	}
`),qX=(0,Fi.graphql)(`
	query NexlSearchContacts($term: String!) {
		nexlSearchContacts(term: $term) {
			nexlUid
			fullName
			email
			jobTitle
			company
			existsInKlerq
		}
	}
`),YX=(0,Fi.graphql)(`
	query NexlContactPreview($uid: String!) {
		nexlContactPreview(uid: $uid) {
			givenName
			familyName
			email
			role
			department
			phoneNumber
			mobile
			linkedInURL
			client {
				nexlUid
				name
				id
			}
			address {
				line1
				city
				region
				postalCode
				country
			}
		}
	}
`),QX=(0,Fi.graphql)(`
	query NexlClientPreview($uid: String!) {
		nexlClientPreview(uid: $uid) {
			name
			email
			phoneNumber
			website
			linkedInPage
			address {
				line1
				city
				region
				postalCode
				country
			}
		}
	}
`),XX=(0,Fi.graphql)(`
	mutation NexlImportClient($uid: String!) {
		nexlImportClient(uid: $uid) {
			id
			name
		}
	}
`),jX=(0,Fi.graphql)(`
	mutation NexlImportContact($uid: String!) {
		nexlImportContact(uid: $uid) {
			id
			givenName
			familyName
		}
	}
`);var Dv=t("@/graphql"),_v=t("react/jsx-runtime"),oj=(0,Dv.graphql)(`
	query NexlEnabled {
		integrations {
			id
			type
			active
			enabled
		}
	}
`);var fg=t("@/graphql");var AN=t("@/services/apollo/refetchQueries");var Ov=t("react/jsx-runtime"),Tj=(0,fg.graphql)(`
	mutation ClientModalFormCreate($data: ClientCreateDataInput!) {
		clientCreate(data: $data) {
			id
		}
	}
`),Ij=(0,fg.graphql)(`
	mutation ClientModalFormUpdate($data: ClientUpdateDataInput!, $where: ClientWhereUniqueInput!) {
		clientUpdate(data: $data, where: $where) {
			id
			name
			archived
			...ClientCard
			...ClientForm
		}
	}
`);var gg=t("react/jsx-runtime");var Uv=Y(t("next/link")),$v=t("next-i18next"),np=t("@mantine/core");var Js=t("@/graphql");var Gv=t("next-i18next"),op=t("@mantine/core"),zv=t("lucide-react"),hg=t("react/jsx-runtime");function Hv(){let{t:e}=(0,Gv.useTranslation)(),o=(0,op.useMantineTheme)();return(0,hg.jsx)(op.Badge,{styles:{root:{backgroundColor:o.white,color:o.black},leftSection:{color:o.black}},leftSection:(0,hg.jsx)(zv.EyeOff,{size:14}),children:e("hidden")})}var Ir=t("react/jsx-runtime"),Vv=(0,Js.graphql)(`
	fragment ClientDisplay on Client {
		id
		name
		archived
		clientNameHidden
		clientTypes
		isConfidential
		...ClientAvatar
	}
`);function rp({client:e,withLink:o=!1,withAvatar:n=!1,showHiddenBadge:r=!0,showTypeBadge:i=!0,showConfidentialBadge:a=!0,urlParams:s,parts:l,sx:p,...c}){let{t:u}=(0,$v.useTranslation)(),C=(0,Js.getFragmentData)(Vv,e);return(0,Ir.jsxs)(np.Box,{...o&&{component:Uv.default,href:{pathname:"/firm/clients/[id]",query:{id:C.id}}},miw:0,sx:[g=>({display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",gap:g.spacing.xs,textDecoration:"none",color:g.colors.gray[g.other.getSchemeColor(g.colorScheme,7)],...o&&g.fn.hover({textDecoration:"underline"})}),...(0,np.packSx)(p)],...c,children:[n&&(0,Ir.jsx)(Jr,{client:(0,Js.getFragmentData)(Id,C),urlParams:s,...l?.avatar}),(0,Ir.jsxs)(Vt,{miw:0,weight:500,size:"sm",...l?.text,children:[C.name,(0,Ir.jsx)(ht,{archived:C.archived,label:u("archived_client",{ns:"entity_client"})})]}),r&&C.clientNameHidden&&(0,Ir.jsx)(Hv,{}),a&&C.isConfidential&&(0,Ir.jsx)(ti,{isConfidential:!0}),i&&(0,Ir.jsx)(jd,{clientTypes:C.clientTypes})]})}var Xv=t("react"),lp=t("@mantine/core"),jv=t("@apollo/client"),Jv=t("lodash");var Wv=Y(t("next/link")),Kv=t("next-i18next"),jo=t("@mantine/core"),ip=t("@fortawesome/free-solid-svg-icons"),yg=t("@fortawesome/react-fontawesome");var ap=t("@/graphql");var fn=t("react/jsx-runtime"),_N=(0,ap.graphql)(`
	fragment ClientRow on Client {
		id
		name
		hasLogo
		logo {
			focalX
			focalY
		}
		address {
			id
			country
			additionalCountries
		}
		...ClientDisplay
	}
`);function qv({client:e,withLogoCheck:o=!1,showCountry:n=!1,parts:r,sx:i,...a}){let{t:s}=(0,Kv.useTranslation)(),l=(0,ap.getFragmentData)(_N,e);return(0,fn.jsxs)(jo.Group,{noWrap:!0,miw:0,h:30,position:"apart",spacing:"lg",pr:8,sx:[{flex:1},...(0,jo.packSx)(i)],...a,children:[(0,fn.jsxs)(jo.Group,{noWrap:!0,miw:0,spacing:4,sx:{flexBasis:o?"calc(100% - 7rem)":"100%"},children:[(0,fn.jsx)(rp,{withAvatar:!0,client:l,parts:{text:{maw:360,...r?.text}}}),(0,fn.jsx)(jo.ActionIcon,{size:"sm",color:"primary.6",component:Wv.default,target:"_blank",href:{pathname:"/firm/clients/[id]",query:{id:l.id}},children:(0,fn.jsx)(yg.FontAwesomeIcon,{icon:Fs,style:{fontSize:"0.8em"}})}),n&&l.address?.country&&(0,fn.jsx)(jo.Text,{color:"dimmed",size:"sm",truncate:!0,children:ff(l.address)})]}),o&&(0,fn.jsxs)(jo.Group,{noWrap:!0,miw:0,spacing:4,sx:{flexBasis:"7rem"},children:[(0,fn.jsx)(jo.ThemeIcon,{color:"transparent",c:l.hasLogo?"primary":"warning",children:(0,fn.jsx)(yg.FontAwesomeIcon,{icon:l.hasLogo?ip.faCheckCircle:ip.faExclamationCircle})}),(0,fn.jsx)(jo.Text,{weight:500,size:"sm",truncate:!0,children:s(`phrases.${l.hasLogo?"has-logo":"has-no-logo"}`,{ns:"entity_client"})})]})]})}var sp=t("@mantine/core"),Yv=t("lodash"),Qv=t("react/jsx-runtime");function Zn({children:e,value:o,debug:n,sx:r,...i}){let a=n?!0:(0,Yv.isEmpty)(o);return(0,Qv.jsx)(sp.Skeleton,{visible:a,sx:[...(0,sp.packSx)(r),{display:a?"inherit":"contents"}],...i,children:!a&&e(o)})}var Zv=t("@/graphql"),Zs=t("react/jsx-runtime"),NN=(0,Zv.graphql)(`
	query ClientRowWithId($id: ID!) {
		client(where: { id: $id }) {
			...ClientRow
		}
	}
`),ek=(0,Xv.forwardRef)(({children:e,id:o,queryOptions:n,pre:r,sx:i,withLogoCheck:a,showCountry:s,parts:l,...p},c)=>{let u=(0,jv.useQuery)(NN,(0,Jv.merge)({},{variables:{id:o}},n));return(0,Zs.jsxs)(lp.Group,{ref:c,py:"md",px:8,spacing:"sm",sx:[...(0,lp.packSx)(i),C=>({background:C.white,boxShadow:C.shadows.xs,borderRadius:C.radius.lg,borderWidth:1,borderStyle:"solid",borderColor:C.colors.gray[C.other.getSchemeColor(C.colorScheme,2)]})],noWrap:!0,...p,children:[r,(0,Zs.jsx)(Zn,{value:u.data?.client,h:30,children:C=>(0,Zs.jsx)(qv,{client:C,withLogoCheck:a,showCountry:s,parts:l})}),e]})});ek.displayName="ClientRowWithId";var lk=t("react"),GN=t("next-i18next"),pp=t("@mantine/core"),zN=t("@mantine/hooks"),HN=t("@apollo/client"),UN=t("@fortawesome/react-fontawesome"),bg=t("lodash");var ik=t("react"),ak=t("next-i18next"),cp=t("@mantine/core");var tk=t("next-i18next"),ok=t("@mantine/core"),rk=t("react/jsx-runtime"),BN={REFEREE:"primary",REFERRAL:"teal"};function nk({contactTypes:e,...o}){let{t:n}=(0,tk.useTranslation)();if(!e.length)return null;let r=["REFEREE","REFERRAL"].filter(s=>e.includes(s));if(!r.length)return null;let i=r.map(s=>n(`fields.contactType.values.${s}`,{ns:"entity_contact"})).join(" + "),a=r.length===1&&r[0]?BN[r[0]]:"violet";return(0,rk.jsx)(ok.Badge,{color:a,size:"xs",styles:{root:{textTransform:"unset"}},...o,children:i})}var dp=t("@/graphql");var Aa=t("react/jsx-runtime"),ON=(0,dp.graphql)(`
	fragment ContactSelectItem on Contact {
		title
		givenName
		familyName
		archived
		contactTypes
	}
`),sk=(0,ik.forwardRef)(({label:e,data:o,...n},r)=>{let{t:i}=(0,ak.useTranslation)(),a=(0,dp.getFragmentData)(ON,o);return(0,Aa.jsxs)(cp.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:[(0,Aa.jsx)(cp.Text,{span:!0,truncate:!0,children:e||ze(a)}),(0,Aa.jsx)(nk,{contactTypes:a.contactTypes}),(0,Aa.jsx)(ht,{archived:a.archived,label:i("archived_contact",{ns:"entity_contact"})})]})});sk.displayName="ContactSelectItem";var ck=t("@/graphql");var Sg=t("react/jsx-runtime"),lJ=(0,ck.graphql)(`
	query ContactSelectMulti(
		$first: Int
		$where: ContactWhereInput
		$orderBy: ContactOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: ContactWhereInput
	) {
		all: contacts(first: $first, where: $where, orderBy: $orderBy) {
			edges {
				node {
					id
					title
					givenName
					familyName
					...ContactSelectItem
				}
			}
		}
		initial: contacts(where: $whereInitial) @include(if: $includeInitial) {
			edges {
				node {
					id
					title
					givenName
					familyName
					...ContactSelectItem
				}
			}
		}
	}
`);var $N=t("@mantine/core");var dk=Y(t("next/link")),pk=t("next-i18next"),up=t("@mantine/core");var el=t("react/jsx-runtime");function tl({industry:e,withLink:o=!1,...n}){let{t:r}=(0,pk.useTranslation)(),i=Hs(),a=i.getParent(e.id);return(0,el.jsx)(up.Badge,{...o&&{component:dk.default,href:{pathname:"/firm/industries/[id]",query:{id:e.id}}},...a&&{...Ld,title:`${r("parent",{ns:"entity_industry"})}: ${i.pathLabel(a.id)}`,"data-sub-industry":!0},styles:s=>({root:{textTransform:"unset",...o&&{cursor:"pointer",transition:"filter",transitionDuration:"150ms",transitionTimingFunction:s.transitionTimingFunction,...s.fn.hover({filter:"brightness(95%)"})}}}),...n,className:"badge",children:(0,el.jsxs)(up.Group,{spacing:4,noWrap:!0,children:[e.name,(0,el.jsx)(ht,{archived:e.archived??!1,label:r("archived_industry",{ns:"entity_industry"})})]})})}var VN=t("react/jsx-runtime");var er=t("@mantine/core");var xg=t("@/graphql"),ri=t("react/jsx-runtime");function Mi({labels:e,max:o,...n}){let r=e.filter(c=>!(0,xg.getFragmentData)(Rn,c).archived),i=e.filter(c=>(0,xg.getFragmentData)(Rn,c).archived),a=o!=null?r.slice(0,o):r,s=[...o!=null?r.slice(o):[],...i],l=o!=null||s.length>0,p=c=>({marginInlineStart:(0,er.rem)(-6),border:`2px solid ${c.white}`});return(0,ri.jsxs)(er.Group,{miw:0,spacing:l?0:"xs",...n,children:[a.map((c,u)=>(0,ri.jsx)(pn,{label:c,sx:l&&u>0?p:void 0},u)),s.length>0&&(0,ri.jsx)(er.Tooltip,{multiline:!0,withinPortal:!0,styles:c=>({tooltip:{backgroundColor:c.white,border:`1px solid ${c.colors.gray[3]}`,boxShadow:c.shadows.sm,padding:c.spacing.xs}}),label:(0,ri.jsx)(er.Stack,{spacing:4,align:"flex-start",children:s.map((c,u)=>(0,ri.jsx)(pn,{label:c},u))}),children:(0,ri.jsxs)(er.Badge,{sx:[c=>({color:c.colors.gray[7],backgroundColor:c.colors.gray[2],fontSize:c.fontSizes.xs,letterSpacing:"unset",cursor:"default"}),...a.length>0?[p]:[]],children:["+",s.length]})})]})}var gk=t("react"),qN=t("next-i18next"),hk=t("@mantine/core"),YN=t("@apollo/client");var uk=t("react"),Di=t("@mantine/core"),mk=t("@fortawesome/free-solid-svg-icons"),fk=t("@fortawesome/react-fontawesome");var mp=t("@/graphql"),La=t("react/jsx-runtime"),WN=(0,mp.graphql)(`
	fragment LabelSelectItem on Label {
		id
		name
		color
		...LabelBadge
	}
`),KN=(0,uk.forwardRef)(function({label:o,data:n,selected:r,...i},a){let s=(0,mp.getFragmentData)(WN,n);return(0,La.jsx)(Di.Group,{ref:a,spacing:"xs",noWrap:!0,position:"apart",...i,children:(0,La.jsxs)(Di.Group,{spacing:"xs",noWrap:!0,miw:0,children:[r&&(0,La.jsx)(fk.FontAwesomeIcon,{icon:mk.faCheck,style:{width:12,height:12,flexShrink:0}}),(0,La.jsx)(pn,{...i,sx:[{minHeight:(0,Di.rem)(22),width:"auto",paddingInlineEnd:4},...(0,Di.packSx)(i.sx)],label:s,children:o||s.name})]})})});var yk=t("@/graphql"),QN=t("@/styles/cache");var XN=t("react/jsx-runtime"),IJ=(0,yk.graphql)(`
	query LabelSelectMulti($where: LabelWhereInput, $orderBy: LabelOrderByInput) {
		labels(where: $where, orderBy: $orderBy) {
			id
			name
			...LabelSelectItem
		}
	}
`);var jN=t("@mantine/core");var bk=Y(t("next/link")),Sk=t("next-i18next"),fp=t("@mantine/core");var ol=t("react/jsx-runtime");function nl({practice:e,withLink:o=!1,...n}){let{t:r}=(0,Sk.useTranslation)(),i=zs(),a=i.getParent(e.id);return(0,ol.jsx)(fp.Badge,{...o&&{component:bk.default,href:{pathname:"/firm/practices/[id]",query:{id:e.id}}},...a&&{...Ld,title:`${r("parent",{ns:"entity_practice"})}: ${i.pathLabel(a.id)}`,"data-sub-practice":!0},styles:s=>({root:{textTransform:"unset",...o&&{cursor:"pointer",transition:"filter",transitionDuration:"150ms",transitionTimingFunction:s.transitionTimingFunction,...s.fn.hover({filter:"brightness(95%)"})}}}),...n,children:(0,ol.jsxs)(fp.Group,{spacing:4,noWrap:!0,children:[e.name,(0,ol.jsx)(ht,{archived:e.archived??!1,label:r("archived_practice",{ns:"entity_practice"})})]})})}var JN=t("react/jsx-runtime");var hB=Y(t("next/link")),kg=t("@mantine/core"),yB=t("@tanstack/react-table");var xk=t("react/jsx-runtime");var ZN=t("react"),eB=t("next-i18next"),_i=t("@mantine/core"),tB=t("@dnd-kit/core"),gp=t("@dnd-kit/sortable"),oB=t("@dnd-kit/utilities"),nB=t("@tabler/icons-react"),rB=t("lucide-react"),Ck=t("react/jsx-runtime");var Tk=t("@mantine/core"),iB=t("react/jsx-runtime");var hp=t("@mantine/core"),aB=t("react/jsx-runtime");var NJ=(0,hp.createStyles)((e,{cell:o})=>({pinnedStyles:{position:"sticky",background:"var(--background)",borderWidth:0,borderColor:e.colors.gray[2],borderStyle:"solid",zIndex:2},pinnedLeftStyles:{insetInlineStart:o.column.getStart("left"),borderInlineEndWidth:1,"&::after":{content:"''",position:"absolute",height:"calc(100% + 1px)",width:8,background:e.fn.gradient({from:"rgba(0, 0, 0, 0.08)",to:"transparent",deg:90}),insetInlineStart:"100%",insetBlockStart:-1}},pinnedRightStyles:{insetInlineEnd:o.column.getStart("right"),borderInlineStartWidth:1,marginInlineStart:-1,"&::before":{content:"''",position:"absolute",height:"calc(100% + 1px)",width:8,background:e.fn.gradient({from:"rgba(0, 0, 0, 0.08)",to:"transparent",deg:270}),insetInlineEnd:"100%",insetBlockStart:-1}}}));var Ik=t("@mantine/core");var Cg=t("react/jsx-runtime");var Tg=t("react"),Ig=t("@mantine/core"),wk=t("react/jsx-runtime");var vk=t("@mantine/core"),sB=t("react/jsx-runtime");var kk=t("react"),Fa=t("@mantine/core"),wg=t("@fortawesome/free-solid-svg-icons"),lB=t("@fortawesome/react-fontawesome"),cB=t("@tabler/icons-react"),Pk=t("react/jsx-runtime"),$J=(0,Fa.createStyles)((e,{header:o})=>({pinnedStyles:{position:"sticky",background:e.colors.gray[0],borderWidth:0,borderColor:e.colors.gray[2],borderStyle:"solid"},pinnedLeftStyles:{insetInlineStart:o.column.getStart("left"),borderInlineEndWidth:1,"&::after":{content:"''",position:"absolute",height:"100%",width:8,background:e.fn.gradient({from:"rgba(0, 0, 0, 0.08)",to:"transparent",deg:90}),insetInlineStart:"100%"}},pinnedRightStyles:{insetInlineEnd:o.column.getStart("right"),borderInlineStartWidth:1,marginInlineStart:-1,"&::before":{content:"''",position:"absolute",height:"100%",width:8,background:e.fn.gradient({from:"rgba(0, 0, 0, 0.08)",to:"transparent",deg:270}),insetInlineEnd:"100%"}},sortedStyles:{userSelect:"none",cursor:"pointer"},resizeIcon:{cursor:"col-resize",color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5],transition:"color 0.2s","&:hover":{color:e.colors.blue[6]}}}));var Rk=t("@mantine/core"),dB=t("react/jsx-runtime");var pB=t("next-i18next"),rl=t("@mantine/core"),uB=t("@fortawesome/free-solid-svg-icons"),mB=t("@fortawesome/react-fontawesome");var vg=t("react/jsx-runtime");var Ek=t("@mantine/core"),fB=t("react/jsx-runtime");var Ak=t("react/jsx-runtime"),bB=t("react");var Eg=t("@/graphql");var yp=t("react"),il=t("@apollo/client"),Pg=t("@tanstack/react-table"),SB=t("lodash");var vZ=il.gql`
	query getUserTableConfig($tableName: String!) {
		getUserTableConfig(tableName: $tableName) {
			id
			tableName
			userId
			config
		}
	}
`,kZ=il.gql`
	mutation saveUserTableConfig($input: UserTableConfigInput!) {
		saveUserTableConfig(input: $input) {
			id
			tableName
			userId
			config
		}
	}
`;var CB=t("@tanstack/react-table");var Lk=t("react");var TB=t("@tanstack/react-table");var IB=t("react");var Ag=t("react/jsx-runtime"),wee=(0,Eg.graphql)(`
	query ClientModalAdd(
		$first: Int
		$last: Int
		$skip: Int
		$after: String
		$before: String
		$where: ClientWhereInput
		$orderBy: ClientOrderByInput
	) {
		clients(
			first: $first
			last: $last
			skip: $skip
			after: $after
			before: $before
			where: $where
			orderBy: $orderBy
		) {
			edges {
				node {
					id
					name
					archived
					isConfidential
					address {
						id
						country
						additionalCountries
					}
					labels {
						id
						name
						color
						archived
					}
					industries {
						edges {
							node {
								id
								name
							}
						}
						totalCount
					}
					practices {
						edges {
							node {
								id
								name
							}
						}
						totalCount
					}
					contacts {
						edges {
							node {
								id
								givenName
								familyName
							}
						}
					}
					...ClientDisplay
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`);var Og=t("react"),$B=t("next-i18next"),ai=t("@mantine/core"),VB=t("@mantine/hooks"),WB=t("@apollo/client"),KB=t("@fortawesome/free-solid-svg-icons"),qB=t("@fortawesome/react-fontawesome"),qk=t("lodash");var EB=t("@mantine/core"),Lg=t("@/graphql"),AB=t("react/jsx-runtime"),kee=(0,Lg.graphql)(`
	fragment OfficeBadge on Office {
		id
		name
	}
`);var LB=t("@mantine/core"),Fg=t("@/graphql"),FB=t("react/jsx-runtime"),Ree=(0,Fg.graphql)(`
	fragment RoleBadge on Role {
		name
	}
`);var Gk=t("react"),DB=t("next-i18next"),zk=t("@mantine/core"),_B=t("@apollo/client"),NB=t("lodash");var Bk=t("react"),Ip=t("@mantine/core"),wp=t("@/graphql"),Mg=t("react/jsx-runtime"),MB=(0,wp.graphql)(`
	fragment RoleSelectItem on Role {
		name
	}
`),Ok=(0,Bk.forwardRef)(({label:e,data:o,...n},r)=>{let i=(0,wp.getFragmentData)(MB,o);return(0,Mg.jsx)(Ip.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:(0,Mg.jsx)(Ip.Text,{span:!0,truncate:!0,children:e||i.name})})});Ok.displayName="RoleSelectItem";var Hk=t("@/graphql"),BB=t("react/jsx-runtime"),Fee=(0,Hk.graphql)(`
	query RoleSelectSingle($where: RoleWhereInput) {
		roles(where: $where, orderBy: { sequence: ASC }) {
			id
			name
			...RoleSelectItem
		}
	}
`);var vp=t("@mantine/core");var Uk=t("@/graphql");var cl=t("react/jsx-runtime"),kp=(0,Uk.graphql)(`
	fragment SpecialistBadge on Specialist {
		id
		archived
		title
		givenName
		familyName
		hasProfilePicture
		...SpecialistAvatar
	}
`);function Ni({specialist:e,...o}){let n=ze(e);return(0,cl.jsxs)(vp.Badge,{leftSection:(0,cl.jsx)(gr,{specialist:e,size:32}),px:"xs",...o,sx:[r=>({height:`calc(${r.spacing.lg} * 2)`,borderRadius:`calc(${r.radius.lg} * 2)`,borderColor:r.colorScheme==="dark"?r?.colors?.primary?.[8]:r?.colors?.primary?.[1],borderWidth:1,borderStyle:"solid",background:r.colorScheme==="dark"?r?.colors?.primary?.[9]:r?.colors?.primary?.[0],color:r.colorScheme==="dark"?r?.colors?.primary?.[1]:r?.colors?.primary?.[8],textTransform:"none",fontSize:r.fontSizes.sm,fontWeight:500}),...(0,vp.packSx)(o.sx)],children:[n,(0,cl.jsx)(Ks,{archived:e.archived})]})}var YB=t("@/graphql");var Wk=t("react"),GB=t("next-i18next"),Kk=t("@mantine/core"),zB=t("@apollo/client"),_g=t("lodash");var $k=t("react"),Pp=t("@mantine/core"),Rp=t("@/graphql"),Dg=t("react/jsx-runtime"),OB=(0,Rp.graphql)(`
	fragment OfficeSelectItem on Office {
		name
	}
`),Vk=(0,$k.forwardRef)(({label:e,data:o,...n},r)=>{let i=(0,Rp.getFragmentData)(OB,o);return(0,Dg.jsx)(Pp.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:(0,Dg.jsx)(Pp.Text,{span:!0,truncate:!0,children:e||i.name})})});Vk.displayName="OfficeSelectItem";var Ng=t("@/graphql");var HB=t("react/jsx-runtime"),Vee=(0,Ng.graphql)(`
	query OfficeSelectMulti($name: StringFilterInput) {
		offices(where: { name: $name }, orderBy: { name: ASC }) {
			id
			name
		}
	}
`),Wee=(0,Ng.graphql)(`
	query OfficeSelectMultiCurrent($ids: [String!]!) {
		offices(where: { id: { in: $ids } }) {
			id
			name
		}
	}
`);var Gg=t("react/jsx-runtime");var Kg=t("react"),nO=t("next-i18next"),An=t("@mantine/core"),rO=t("@mantine/dates"),iO=t("@mantine/hooks"),aO=t("@apollo/client"),sO=t("@fortawesome/free-solid-svg-icons"),lO=t("@fortawesome/react-fontawesome"),cO=Y(t("dayjs")),CP=t("lodash");var Yk=t("@/lib/contexts/DateFormat"),Xk=t("react/jsx-runtime");function QB(e){switch(e){case"MM/DD/YYYY":return"en-US";case"YYYY-MM-DD":return"sv-SE";case"DD.MM.YYYY":return"de-DE";case"DD/MM/YYYY":default:return"en-GB"}}var XB={locales:"en-GB",day:"2-digit",month:"2-digit",year:"numeric"},Cte={...XB,timeZone:"UTC"};function dl(){let e=(0,Yk.useDateFormat)();return{locales:QB(e),day:"2-digit",month:"2-digit",year:"numeric"}}function Qk({locales:e=["en"],timeZone:o,...n}={}){return new Intl.DateTimeFormat(e,{timeZone:o?.replaceAll("__","/"),...n})}function zg({dateTime:e,formatterOptions:o,...n}){let r=dl(),i=new Date(e),s=Qk(o??r).format(i);return(0,Xk.jsx)("time",{...n,dateTime:i.toISOString(),children:s})}var hP=t("react"),Gp=t("@mantine/core"),yP=t("@apollo/client"),bP=t("lodash");var $g=Y(t("next/link")),uP=t("next-i18next"),lt=t("@mantine/core"),Bp=t("@fortawesome/free-solid-svg-icons"),Vg=t("@fortawesome/react-fontawesome"),mP=t("lodash");var jk=t("react"),Ap=t("@mantine/core"),Ep=t("react/jsx-runtime");function wr({items:e,children:o,...n}){return(0,Ep.jsx)(Ap.Group,{...n,children:e?.length?e.map((r,i)=>(0,Ep.jsx)(jk.Fragment,{children:o(r,i)},i)):(0,Ep.jsx)(Ap.Text,{size:"xs",children:"-"})})}var Ma=t("@mantine/core"),Jk=t("@mantine/core"),Zk=t("@fortawesome/react-fontawesome");var si=t("react/jsx-runtime");function jB({children:e,...o}){return(0,si.jsx)(Ma.Text,{color:"gray.7",weight:500,size:"sm",...o,children:e})}function JB({children:e,...o}){return(0,si.jsx)(Vt,{color:"gray.7",size:"sm",...o,children:e})}function ZB({label:e,href:o,icon:n,sx:r,size:i,...a}){return(0,si.jsxs)(Jk.Anchor,{href:o,target:"_blank",sx:[s=>({color:s.colors.gray[s.other.getSchemeColor(s.colorScheme,5)],display:"flex",flexDirection:"row",flexWrap:"nowrap",gap:s.spacing.md,alignItems:"center",textDecoration:"none",...s.fn.hover({textDecoration:"underline"})}),...(0,Ma.packSx)(r)],...a,children:[(0,si.jsx)(Zk.FontAwesomeIcon,{icon:n}),(0,si.jsx)(Vt,{size:i,children:e})]})}function eO({children:e,...o}){return(0,si.jsx)(Ma.Stack,{spacing:6,...o,children:e})}var Ze={Group:eO,Label:jB,Value:JB,IconValue:ZB};var pl=t("react"),nP=t("next-i18next"),ul=t("@mantine/core"),rP=t("@mantine/hooks"),Lp=t("@fortawesome/free-solid-svg-icons"),iP=t("@fortawesome/react-fontawesome");var tP=t("@mantine/core");function eP(e){let o=e.colorScheme==="dark",n=o?e.colors.gray[6]:e.colors.gray[3],r=o?e.colors.gray[7]:e.colors.gray[2];return{"& .tableWrapper":{overflowX:"auto"},"& table":{borderCollapse:"collapse",borderWidth:1,borderStyle:"solid",borderColor:n},"& th, & td":{borderWidth:1,borderStyle:"solid",borderColor:n,position:"relative",verticalAlign:"top"},"& th":{backgroundColor:r},'& table[data-borders="horizontal"], & table[data-borders="horizontal"] th, & table[data-borders="horizontal"] td':{borderLeftStyle:"none",borderRightStyle:"none"},'& table[data-borders="none"], & table[data-borders="none"] th, & table[data-borders="none"] td':{borderStyle:"none"},"& table[data-header-row] tr:first-of-type > th, & table[data-header-row] tr:first-of-type > td":{backgroundColor:`var(--table-header-row-fill, ${r})`,color:"var(--table-header-row-ink, inherit)",fontWeight:600},"& table[data-header-column] tr > th:first-of-type, & table[data-header-column] tr > td:first-of-type":{backgroundColor:`var(--table-header-column-fill, ${r})`,color:"var(--table-header-column-ink, inherit)",fontWeight:600}}}var Hg=t("react/jsx-runtime");function oP({value:e,removeConfidentialMarkings:o=!1,...n}){let r=CT(e,o),{isRTL:i}=pd();return(0,Hg.jsx)(tP.TypographyStylesProvider,{...n,sx:a=>({p:{margin:0,marginBlockEnd:"1lh",wordBreak:"break-word",whiteSpace:"normal",textAlign:i?"right":"left","&:last-child":{marginBlockEnd:0}},...eP(a)}),children:(0,Hg.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})})}var li=t("react/jsx-runtime");function Bi({id:e,value:o,lines:n=10,removeConfidentialMarkings:r=!1,readMoreText:i,readLessText:a}){let{t:s}=(0,nP.useTranslation)(),{ref:l,height:p}=(0,rP.useElementSize)(),c=n*25,[u,C]=(0,pl.useState)(!1),[g,d]=(0,pl.useState)(!1);return(0,pl.useEffect)(()=>{p>c&&d(!0)},[p,c]),(0,li.jsxs)(ul.Box,{id:e,children:[(0,li.jsx)(ul.Box,{sx:{maxHeight:u?"none":c,overflow:"hidden",transition:"max-height 200ms ease"},children:(0,li.jsx)("div",{ref:l,children:(0,li.jsx)(oP,{value:o,removeConfidentialMarkings:r})})}),g&&(0,li.jsxs)(ul.Button,{variant:"subtle",size:"xs",mt:"xs",px:0,onClick:()=>C(y=>!y),children:[(0,li.jsx)(iP.FontAwesomeIcon,{icon:u?Lp.faArrowUp:Lp.faArrowDown}),u?a??s("read-less"):i??s("read-more")]})]})}var Oi=t("@mantine/core"),Mte=t("flag-icons/css/flag-icons.min.css");var aP=t("@/lib/contexts/Languages"),Fp=t("react/jsx-runtime");function Mp({value:e,languages:o,onLanguageClick:n,...r}){let i=(0,aP.useFirmLanguages)(),a=[...o].sort((s,l)=>{let p=i.supported.indexOf(s),c=i.supported.indexOf(l);return p-c});return(0,Fp.jsx)(Oi.Group,{spacing:"xs",...r,children:a.map(s=>(0,Fp.jsx)(Oi.ActionIcon,{"data-active":e===s,onClick:()=>n(s),radius:"sm",miw:"unset",mih:"unset",w:26.66,h:20,sx:l=>({"&[data-active='true']":{boxShadow:`0 0 0 ${(0,Oi.rem)(2)} ${l.white}, 0 0 0 ${(0,Oi.rem)(4)} ${l.colors.primary[7]}`}}),children:(0,Fp.jsx)(Tr,{language:s,className:"-m-0.5 text-xl"})},s))})}var dP=t("@mantine/core");var sP=Y(t("next/link")),lP=t("next-i18next"),ci=t("@mantine/core");var Dp=t("@/graphql");var Da=t("react/jsx-runtime"),tO=(0,Dp.graphql)(`
	fragment UserDisplay on User {
		id
		givenName
		familyName
		active
	}
`);function cP({user:e,withLink:o=!1,withAvatar:n=!1,parts:r,sx:i,...a}){let{t:s}=(0,lP.useTranslation)(),l=(0,Dp.getFragmentData)(tO,e),p=ze(l);return(0,Da.jsxs)(ci.Box,{...o&&{component:sP.default,href:{pathname:"/settings/users"}},miw:0,sx:[c=>({display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",gap:c.spacing.xs,textDecoration:"none",color:c.colors.gray[c.other.getSchemeColor(c.colorScheme,7)],...o&&c.fn.hover({textDecoration:"underline"})}),...(0,ci.packSx)(i)],...a,children:[n&&(0,Da.jsx)(ci.Avatar,{alt:p,size:"sm",radius:Uh,children:zo(p)}),(0,Da.jsx)(ci.Text,{truncate:!0,weight:500,size:"sm",...r?.text,children:p}),(0,Da.jsx)(ht,{archived:!l.active,label:s("archived_user",{ns:"entity_user"})})]})}var Ug=t("react/jsx-runtime");function _p({users:e,withLink:o,withAvatar:n,...r}){return(0,Ug.jsx)(dP.Group,{miw:0,spacing:"sm",...r,children:e.map((i,a)=>(0,Ug.jsx)(cP,{user:i,withLink:o,withAvatar:n},a))})}var Na=t("@/graphql");var _a=t("react"),pP=t("@/lib/contexts/Languages");function Np(e,o){let n=(0,pP.useFirmLanguages)(),r=(0,_a.useMemo)(()=>{let l=[...e].sort((p,c)=>{let u=n.supported.indexOf(p.language),C=n.supported.indexOf(c.language);return u-C});return o?l.filter(p=>p.language===o):l},[e,o,n.supported]),[i,a]=(0,_a.useState)(o??r[0]?.language??n.default);return(0,_a.useEffect)(()=>{o&&a(o)},[o]),{selectedTranslation:r.find(l=>l.language===i),translations:r,selectedLanguage:i,setSelectedLanguage:a}}var ye=t("react/jsx-runtime"),fP=(0,Na.graphql)(`
	fragment PublicationCard on Publication {
		id
		archived
		date
		publishers
		externalAuthors
		translations {
			language
			title
			content
		}
		notes
		practices {
			edges {
				node {
					id
					name
					archived
				}
			}
			totalCount
		}
		industries {
			edges {
				node {
					id
					name
					archived
				}
			}
			totalCount
		}
		specialists {
			edges {
				node {
					id
					...SpecialistBadge
				}
			}
			totalCount
		}
		urls
		labels {
			id
			name
			color
			archived
		}
		responsibleUsers {
			...UserDisplay
		}
	}
`);function gP({publication:e,withLink:o=!1,withoutNotes:n=!1,copyButton:r,contentWrapperId:i,forcedLanguage:a,...s}){let{t:l}=(0,uP.useTranslation)(),p=dl(),{selectedTranslation:c,translations:u,selectedLanguage:C,setSelectedLanguage:g}=Np(e.translations,a);return(0,ye.jsx)(Yr,{defaultLanguage:C,children:(0,ye.jsxs)(lt.Stack,{miw:0,...s,sx:[{flex:1},...(0,lt.packSx)(s.sx)],children:[!c&&(0,ye.jsx)(lt.Group,{align:"center",spacing:"xs",children:(0,ye.jsx)(lt.Text,{color:"red",size:"sm",children:l("phrases.translationNotAvailable","Translation not available in selected language")})}),(0,ye.jsxs)(lt.Group,{position:"apart",className:"header",children:[(0,ye.jsxs)(lt.Stack,{spacing:4,children:[!!e.date&&(0,ye.jsx)(Cd,{children:(0,ye.jsx)(zg,{dateTime:e.date,formatterOptions:{...p,timeZone:"UTC"},className:"text-sm text-gray-500"})}),!!c&&(0,ye.jsx)(Zn,{value:c.title,mih:29,miw:200,children:d=>(0,ye.jsx)("h4",{className:"publication-title",children:d})}),(0,ye.jsxs)(lt.Text,{size:"sm",color:"gray.5",className:"authors",children:[Xs().format(e.publishers),e.publishers.length>0&&e.externalAuthors.length>0?" \xB7 ":"",Xs().format(e.externalAuthors)]})]}),(0,ye.jsxs)(lt.Group,{position:"right",children:[(0,ye.jsx)(ht,{archived:!!e?.archived,label:l("archived_publication",{ns:"entity_publication"})}),(0,ye.jsx)(Mp,{value:C,languages:u.map(d=>d.language),onLanguageClick:g}),s.children]})]}),(0,ye.jsx)(lt.Divider,{color:"gray.2"}),!!c&&(0,ye.jsxs)(Ze.Group,{spacing:4,children:[(0,ye.jsxs)(lt.Group,{children:[(0,ye.jsx)(Ze.Label,{fw:600,children:l("fields.translations.fields.content.label",{ns:"entity_publication"})}),r]}),i?(0,ye.jsx)(Bi,{id:i,value:c.content}):(0,ye.jsx)(Bi,{value:c.content})]}),!!e?.notes&&!n&&(0,ye.jsxs)(Ze.Group,{className:"notes",spacing:4,children:[(0,ye.jsx)(Ze.Label,{fw:600,children:l("fields.notes.label",{ns:"entity_publication"})}),(0,ye.jsx)(Bi,{value:e.notes})]}),!!e.labels?.length&&(0,ye.jsx)(Mi,{labels:e.labels.map(d=>(0,Na.makeFragmentData)(d,Rn))}),!(0,mP.isEmpty)(e.responsibleUsers)&&(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)(lt.Divider,{color:"gray.2"}),(0,ye.jsxs)(Ze.Group,{children:[(0,ye.jsx)(Ze.Label,{children:l("fields.responsible_users.label",{ns:"entity_publication"})}),(0,ye.jsx)(_p,{withLink:!0,users:e.responsibleUsers})]})]}),(!!e.practices.totalCount||!!e.industries.totalCount||!!e.specialists.totalCount)&&(0,ye.jsxs)(lt.Group,{align:"start",spacing:32,children:[!!e.industries.totalCount&&(0,ye.jsxs)(Ze.Group,{className:"industries",children:[(0,ye.jsx)(Ze.Label,{children:l("name",{count:2,ns:"entity_industry"})}),(0,ye.jsx)(wr,{items:Ye(e.industries),children:d=>(0,ye.jsx)(tl,{industry:d},d.id)})]}),!!e.practices.totalCount&&(0,ye.jsxs)(Ze.Group,{className:"practices",children:[(0,ye.jsx)(Ze.Label,{children:l("name",{count:2,ns:"entity_practice"})}),(0,ye.jsx)(wr,{items:Ye(e.practices),children:d=>(0,ye.jsx)(nl,{practice:d},d.id)})]}),!!e.specialists.totalCount&&(0,ye.jsxs)(Ze.Group,{className:"specialists",children:[(0,ye.jsx)(Ze.Label,{children:l("specialists")}),(0,ye.jsx)(wr,{items:Ye(e.specialists),children:d=>(0,ye.jsx)(Ni,{specialist:(0,Na.getFragmentData)(kp,d),sx:{background:"none",border:"none",padding:0,height:32}},d.id)})]})]}),(!!e.urls||!!o)&&(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)(lt.Divider,{color:"gray.2"}),(0,ye.jsxs)(lt.Group,{position:"apart",align:"end",children:[!!e.urls&&(0,ye.jsx)(lt.Group,{position:"left",children:(0,ye.jsx)(lt.Stack,{spacing:2,className:"urls",children:e.urls.map(d=>(0,ye.jsx)(lt.Anchor,{className:"url",component:$g.default,href:d,children:(0,ye.jsxs)(lt.Group,{noWrap:!0,spacing:8,color:"gray.5",children:[(0,ye.jsx)(Vg.FontAwesomeIcon,{icon:Bp.faLink}),(0,ye.jsx)(lt.Text,{size:"sm",weight:500,color:"gray.5",children:d})]})},d))})}),!!o&&(0,ye.jsx)(lt.Group,{position:"right",children:(0,ye.jsx)(lt.Anchor,{component:$g.default,href:{pathname:"/docs/publications/[id]",query:{id:e.id}},target:"_blank",rel:"noopener noreferrer",className:"link",children:(0,ye.jsxs)(lt.Group,{noWrap:!0,spacing:8,children:[(0,ye.jsx)(lt.Text,{size:"sm",weight:500,children:l("phrases.view",{ns:"entity_publication"})}),(0,ye.jsx)(Vg.FontAwesomeIcon,{icon:Bp.faArrowRight})]})})})]})]})]})},C)}var zp=t("@/graphql"),Op=t("react/jsx-runtime"),oO=(0,zp.graphql)(`
	query PublicationCardWithId($id: ID!) {
		publication(where: { id: $id }) {
			...PublicationCard
		}
	}
`),SP=(0,hP.forwardRef)(({children:e,id:o,queryOptions:n,withLink:r,withoutNotes:i,sx:a,forcedLanguage:s,...l},p)=>{let c=(0,yP.useQuery)(oO,(0,bP.merge)({},{variables:{id:o}},n));return(0,Op.jsx)(Gp.Group,{ref:p,p:"md",className:"publication",spacing:"sm",sx:[...(0,Gp.packSx)(a),u=>({flex:1,background:u.white,boxShadow:u.shadows.xs,borderRadius:u.radius.lg,borderWidth:1,borderStyle:"solid",borderColor:u.colors.gray[u.other.getSchemeColor(u.colorScheme,2)]})],noWrap:!0,...l,children:(0,Op.jsx)(Zn,{value:c.data?.publication,h:90,children:u=>(0,Op.jsx)(gP,{publication:(0,zp.getFragmentData)(fP,u),withLink:r,withoutNotes:i,forcedLanguage:s,children:e})})})});SP.displayName="PublicationCardWithId";var xP=Y(t("next/link")),fl=t("@mantine/core");var Wg=t("react/jsx-runtime");function ml({number:e,...o}){return(0,Wg.jsxs)("div",{...o,className:Dt("isolate flex flex-row -space-x-3 *:size-10 *:border-2 *:border-gray-50",o.className),children:[o.children,typeof e=="number"&&e>0&&(0,Wg.jsxs)("span",{className:"z-10 grid place-items-center rounded-full bg-gray-700 text-center text-xs font-medium text-gray-50 tabular-nums transition select-none hover:bg-gray-600",children:["+",e]})]})}var vr=t("react/jsx-runtime");function Ba({amount:e=7,specialists:o,avatar:n,withLink:r=!1,urlParams:i,...a}){let s=Array.from(new Map(o.map(c=>[c.id,c])).values()),l=s.length>e?s.length-e:0,p=s.slice(e);return(0,vr.jsxs)(ml,{...a,className:Dt("*:data-radix-popper-content-wrapper:m-0! *:data-radix-popper-content-wrapper:size-[unset] *:data-radix-popper-content-wrapper:border-none",a.className),children:[s.slice(0,e).map(c=>{let u=(0,vr.jsx)(gr,{specialist:c,urlParams:i,...n},c.id);return(0,vr.jsx)(fl.Tooltip,{color:"gray.5",width:"auto",withArrow:!0,multiline:!0,label:ze(c),children:r?(0,vr.jsx)(fl.Anchor,{component:xP.default,href:{pathname:"/firm/specialists/[id]",query:{id:c.id}},children:u}):u},c.id)}),l>0&&(0,vr.jsx)(fl.Tooltip,{color:"gray.5",width:"auto",withArrow:!0,multiline:!0,label:p.map(c=>(0,vr.jsx)("div",{children:ze(c)},c.id)),children:(0,vr.jsxs)("span",{className:"z-10 grid place-items-center rounded-full bg-gray-700 text-center text-xs font-medium text-gray-50 tabular-nums transition select-none hover:bg-gray-600",children:["+",l]})})]})}var qg=t("@/graphql");var TP=t("react/jsx-runtime"),Hoe=(0,qg.graphql)(`
	query PublicationModalAdd(
		$first: Int
		$last: Int
		$skip: Int
		$after: String
		$before: String
		$where: PublicationWhereInput
		$orderBy: PublicationOrderByInput
	) {
		publications(
			first: $first
			last: $last
			skip: $skip
			after: $after
			before: $before
			where: $where
			orderBy: $orderBy
		) {
			edges {
				node {
					id
					translations {
						language
						title
						content
					}
					date
					industries {
						edges {
							node {
								id
								name
							}
						}
					}
					practices {
						edges {
							node {
								id
								name
							}
						}
					}
					specialists {
						edges {
							node {
								id
								...SpecialistAvatar
							}
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`);var eh=t("react"),SO=Y(t("next/link")),QP=t("next-i18next"),tr=t("@mantine/core"),xO=t("@mantine/hooks"),CO=t("@mantine/modals"),TO=t("@apollo/client"),IO=t("@fortawesome/free-solid-svg-icons"),wO=t("@fortawesome/react-fontawesome"),vO=t("lodash");var IP=t("react"),dO=t("next-i18next"),Hp=t("@mantine/core"),pO=t("@mantine/hooks"),uO=t("@apollo/client"),mO=t("@fortawesome/react-fontawesome"),Yg=t("lodash");var wP=t("@/graphql");var Qg=t("react/jsx-runtime"),Zoe=(0,wP.graphql)(`
	query ClientSelectMulti(
		$first: Int
		$where: ClientWhereInput
		$orderBy: ClientOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: ClientWhereInput
	) {
		all: clients(first: $first, where: $where, orderBy: $orderBy) {
			edges {
				node {
					id
					name
					...ClientSelectItem
				}
			}
		}
		initial: clients(where: $whereInitial) @include(if: $includeInitial) {
			edges {
				node {
					id
					name
					...ClientSelectItem
				}
			}
		}
	}
`);var fO=Y(t("next/link")),gO=t("next-i18next"),Up=t("@mantine/core");var Xg=t("@/graphql");var vP=t("react/jsx-runtime"),hO=(0,Xg.graphql)(`
	fragment SpecialistDisplay on Specialist {
		id
		archived
		title
		prefix
		givenName
		familyName
		hasProfilePicture
		...SpecialistAvatar
	}
`);var $P=t("react"),Yp=t("@mantine/core"),VP=t("@apollo/client"),WP=t("lodash");var NP=t("react"),BP=Y(t("next/link")),OP=t("next-i18next"),Nt=t("@mantine/core"),GP=t("@fortawesome/free-solid-svg-icons"),zP=t("@fortawesome/react-fontawesome"),HP=t("lodash");var AP=Y(t("next/link")),LP=t("next-i18next"),Oa=t("@mantine/core");var kP=t("next-i18next"),Vp=t("@mantine/core"),PP=t("@fortawesome/free-solid-svg-icons"),RP=t("@fortawesome/react-fontawesome"),$p=t("react/jsx-runtime");function EP({contactTypes:e}){let{t:o}=(0,kP.useTranslation)(),n=["REFEREE","REFERRAL"].filter(i=>e.includes(i));if(!n.length)return null;let r=n.map(i=>o(`fields.contactType.values.${i}`,{ns:"entity_contact"})).join(", ");return(0,$p.jsx)(Vp.Tooltip,{label:r,withArrow:!0,position:"top",events:{hover:!0,focus:!0,touch:!0},children:(0,$p.jsx)(Vp.ActionIcon,{size:"xs",variant:"subtle",color:"gray",component:"span",sx:{cursor:"help"},children:(0,$p.jsx)(RP.FontAwesomeIcon,{icon:PP.faCircleInfo})})})}var Wp=t("@/graphql");var Gi=t("react/jsx-runtime"),jg=(0,Wp.graphql)(`
	# eslint-disable-next-line @graphql-eslint/no-unused-fragments
	fragment ContactBadge on Contact {
		id
		title
		givenName
		familyName
		archived
		contactTypes
	}
`);function FP({contact:e,withLink:o=!1,...n}){let{t:r}=(0,LP.useTranslation)(),i=(0,Wp.getFragmentData)(jg,e),a=ze(i);return(0,Gi.jsx)(Oa.Badge,{...o&&{component:AP.default,href:{pathname:"/firm/contacts/[id]",query:{id:i.id}}},leftSection:(0,Gi.jsx)(Oa.Avatar,{alt:a,size:32,radius:Eu,children:zo(a)}),rightSection:(0,Gi.jsx)(EP,{contactTypes:i.contactTypes}),styles:s=>({root:{textTransform:"unset",...o&&{cursor:"pointer",transition:"filter",transitionDuration:"150ms",transitionTimingFunction:s.transitionTimingFunction,...s.fn.hover({filter:"brightness(95%)"})}}}),px:"xs",sx:s=>({height:`calc(${s.spacing.lg} * 2)`,borderRadius:`calc(${s.radius.lg} * 2)`,borderColor:s.colorScheme==="dark"?s.colors.primary[8]:s.colors.primary[1],borderWidth:1,borderStyle:"solid",background:s.colorScheme==="dark"?s.colors.primary[9]:s.colors.primary[0],color:s.colorScheme==="dark"?s.colors.primary[1]:s.colors.primary[8],fontSize:s.fontSizes.sm,fontWeight:500}),...n,children:(0,Gi.jsxs)(Oa.Group,{spacing:4,noWrap:!0,children:[a,(0,Gi.jsx)(ht,{archived:i.archived,label:r("archived_contact",{ns:"entity_contact"})})]})})}var MP=t("@mantine/core"),Kp=t("@/graphql"),_P=t("react/jsx-runtime"),Jg=(0,Kp.graphql)(`
	fragment DirectoryBadge on Directory {
		name
	}
`);function DP({directory:e,...o}){let n=(0,Kp.getFragmentData)(Jg,e);return(0,_P.jsx)(MP.Badge,{...o,children:n.name})}var kr=t("@/graphql");var be=t("react/jsx-runtime"),yO=(0,kr.graphql)(`
	fragment TestimonialCard on Testimonial {
		id
		notes
		year
		archived
		clients {
			id
			name
			...ClientAvatar
		}
		specialists {
			id
			archived
			title
			givenName
			familyName
			prefix
			hasProfilePicture
			profilePicture {
				focalX
				focalY
			}
		}
		industries {
			edges {
				node {
					id
					name
					archived
				}
			}
			totalCount
		}
		practices {
			edges {
				node {
					id
					name
					archived
				}
			}
			totalCount
		}
		contacts {
			edges {
				node {
					id
					title
					givenName
					familyName
					archived
					contactTypes
				}
			}
			totalCount
		}
		directory {
			id
			name
		}
		translations {
			id
			content
			language
		}
		labels {
			id
			name
			color
			archived
		}
		responsibleUsers {
			...UserDisplay
		}
	}
`);function UP({testimonial:e,withLink:o=!1,copyButton:n,contentWrapperId:r,forcedLanguage:i,sx:a,children:s,...l}){let{t:p}=(0,OP.useTranslation)(),c=(0,kr.getFragmentData)(yO,e),{selectedTranslation:u,translations:C,selectedLanguage:g,setSelectedLanguage:d}=Np(c.translations,i);return(0,be.jsxs)(Nt.Stack,{miw:0,sx:[{flex:1},...(0,Nt.packSx)(a)],...l,children:[!u&&(0,be.jsx)(Nt.Group,{align:"center",spacing:"xs",children:(0,be.jsx)(Nt.Text,{color:"red",size:"sm",children:p("phrases.translationNotAvailable","Translation not available in selected language")})}),(0,be.jsxs)(Nt.Group,{position:"apart",children:[(0,be.jsx)(Nt.Group,{position:"left",className:"clients",children:c.clients?.length>0&&(0,be.jsx)(Nt.Group,{spacing:"xs",children:c.clients.map(y=>(0,be.jsxs)(NP.Fragment,{children:[(0,be.jsx)(Jr,{client:(0,kr.getFragmentData)(Id,y),size:75}),(0,be.jsx)("h4",{children:(0,be.jsx)(Vt,{maw:250,display:"inline-block",children:y.name})})]},y.id))})}),(0,be.jsxs)(Nt.Group,{position:"right",children:[(0,be.jsx)(ht,{archived:!!c?.archived,label:p("archived_testimonial",{ns:"entity_testimonial"})}),(0,be.jsx)(Mp,{value:g,languages:C.map(y=>y.language),onLanguageClick:d}),s]})]}),!!u&&(0,be.jsxs)(Yr,{defaultLanguage:u.language,children:[(0,be.jsxs)(Nt.Group,{className:"description",children:[(0,be.jsx)(Ze.Label,{fw:600,children:p("fields.content.description",{ns:"entity_testimonial"})}),n]}),r?(0,be.jsx)(Bi,{id:r,value:u.content}):(0,be.jsx)(Bi,{value:u.content})]},g),!!c?.notes&&(0,be.jsxs)(Ze.Group,{className:"notes",children:[(0,be.jsx)(Ze.Label,{children:p("fields.notes.label",{ns:"entity_testimonial"})}),(0,be.jsx)(Nt.Text,{size:"sm",children:c.notes})]}),c.specialists?.length>0&&(0,be.jsxs)(Ze.Group,{className:"specialists",children:[(0,be.jsx)(Ze.Label,{children:p("specialists")}),(0,be.jsx)(wr,{items:c.specialists,children:y=>(0,be.jsx)(Nt.Group,{children:(0,be.jsx)(Ni,{specialist:y,sx:{background:"none",border:"none",padding:0,height:32}},y.id)})})]}),!!c.labels?.length&&(0,be.jsx)(Mi,{labels:c.labels.map(y=>(0,kr.makeFragmentData)(y,Rn))}),!(0,HP.isEmpty)(c.responsibleUsers)&&(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)(Nt.Divider,{color:"gray.2"}),(0,be.jsxs)(Ze.Group,{children:[(0,be.jsx)(Ze.Label,{children:p("fields.responsible_users.label",{ns:"entity_testimonial"})}),(0,be.jsx)(_p,{withLink:!0,users:c.responsibleUsers})]})]}),(!!c.industries.totalCount||!!c.practices.totalCount||!!c.contacts?.totalCount||!!c.year||!!c.directory||!!o)&&(0,be.jsxs)(Nt.Group,{position:"apart",children:[(0,be.jsxs)(Nt.Group,{children:[!!c.industries.totalCount&&(0,be.jsxs)(Ze.Group,{className:"industries",children:[(0,be.jsx)(Ze.Label,{children:p("name",{count:2,ns:"entity_industry"})}),(0,be.jsx)(wr,{items:Ye(c.industries),children:y=>(0,be.jsx)(tl,{industry:y},y.id)})]}),!!c.practices.totalCount&&(0,be.jsxs)(Ze.Group,{className:"practices",children:[(0,be.jsx)(Ze.Label,{children:p("name",{count:2,ns:"entity_practice"})}),(0,be.jsx)(wr,{items:Ye(c.practices),children:y=>(0,be.jsx)(nl,{practice:y},y.id)})]}),!!c.contacts?.totalCount&&(0,be.jsxs)(Ze.Group,{className:"contacts",children:[(0,be.jsx)(Ze.Label,{children:p("name",{count:2,ns:"entity_contact"})}),(0,be.jsx)(wr,{items:Ye(c.contacts),children:y=>(0,be.jsx)(FP,{contact:(0,kr.makeFragmentData)(y,jg)},y.id)})]}),!!c.year&&(0,be.jsxs)(Ze.Group,{className:"year",children:[(0,be.jsx)(Ze.Label,{children:p("fields.year.label",{ns:"entity_testimonial"})}),(0,be.jsx)(Ze.Value,{children:(0,be.jsx)("time",{dateTime:c.year.toString(),children:c.year})})]}),!!c.directory&&(0,be.jsxs)(Ze.Group,{className:"directory",children:[(0,be.jsx)(Ze.Label,{children:p("name",{count:1,ns:"entity_directory"})}),(0,be.jsx)(DP,{className:"badge",directory:(0,kr.makeFragmentData)(c.directory,Jg)})]})]}),!!o&&(0,be.jsx)(Nt.Anchor,{className:"link",component:BP.default,href:{pathname:"/docs/testimonials/[id]",query:{id:c.id}},target:"_blank",rel:"noopener noreferrer",children:(0,be.jsxs)(Nt.Group,{noWrap:!0,spacing:8,children:[(0,be.jsx)(Nt.Text,{size:"sm",weight:500,children:p("phrases.view-full",{ns:"entity_testimonial"})}),(0,be.jsx)(zP.FontAwesomeIcon,{icon:GP.faArrowRight})]})})]})]})}var KP=t("@/graphql"),qp=t("react/jsx-runtime"),bO=(0,KP.graphql)(`
	query TestimonialCardWithId($id: String!) {
		testimonial(where: { id: $id }) {
			...TestimonialCard
		}
	}
`),qP=(0,$P.forwardRef)(({children:e,id:o,queryOptions:n,withLink:r,sx:i,forcedLanguage:a,...s},l)=>{let p=(0,VP.useQuery)(bO,(0,WP.merge)({},{variables:{id:o}},n));return(0,qp.jsx)(Yp.Group,{ref:l,className:"testimonial",p:"md",spacing:"sm",sx:[...(0,Yp.packSx)(i),c=>({flex:1,background:c.white,boxShadow:c.shadows.xs,borderRadius:c.radius.lg,borderWidth:1,borderStyle:"solid",borderColor:c.colors.gray[c.other.getSchemeColor(c.colorScheme,2)]})],noWrap:!0,...s,children:(0,qp.jsx)(Zn,{value:p.data?.testimonial,h:90,children:c=>(0,qp.jsx)(UP,{testimonial:c,withLink:r,forcedLanguage:a,children:e})})})});qP.displayName="TestimonialCardWithId";var th=t("@/graphql");var Zg=t("@/graphql"),Nne=(0,Zg.graphql)(`
	fragment SubmissionWarningCheck on Submission {
		deadline
		directory {
			id
		}
	}
`);var XP=t("react/jsx-runtime"),ure=(0,th.graphql)(`
	query TestimonialModalAdd(
		$first: Int
		$last: Int
		$skip: Int
		$after: String
		$before: String
		$where: TestimonialWhereInput
		$orderBy: TestimonialOrderByInput
	) {
		testimonials(
			first: $first
			last: $last
			skip: $skip
			after: $after
			before: $before
			where: $where
			orderBy: $orderBy
		) {
			edges {
				node {
					id
					industries {
						edges {
							node {
								id
								name
							}
						}
					}
					practices {
						edges {
							node {
								id
								name
							}
						}
					}
					specialists {
						...SpecialistDisplay
					}
					clients {
						...ClientDisplay
					}
					labels {
						id
						name
						color
						archived
					}
					translations {
						id
						createdAt
						updatedAt
						textContent
						language
					}
					submissions {
						edges {
							node {
								id
								...SubmissionWarningCheck
							}
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`);var Fh=t("react"),kH=Y(t("next/link")),PH=t("next-i18next"),nr=t("@mantine/core"),RH=t("@mantine/dates"),EH=t("@mantine/hooks"),AH=t("@mantine/modals"),LH=t("@apollo/client"),YE=t("@fortawesome/free-solid-svg-icons"),FH=t("@fortawesome/react-fontawesome"),MH=t("lodash");var FO=t("@mantine/core");var AO=Y(t("next/link")),LO=t("next-i18next"),oh=t("@mantine/core");var kO=t("next-i18next"),jP=t("@mantine/core"),PO=t("@fortawesome/free-solid-svg-icons"),RO=t("@fortawesome/react-fontawesome");var EO=t("react/jsx-runtime");var nh=t("@/graphql"),JP=t("react/jsx-runtime"),Sre=(0,nh.graphql)(`
	fragment ClientBadge on Client {
		id
		name
		clientTypes
		archived
	}
`);var MO=t("react/jsx-runtime");var DO=t("@mantine/core"),gl=t("@/lib/contexts/DefaultCurrency"),_O=t("react/jsx-runtime");function rh({locales:e="en-US",currency:o="EUR",...n}={}){let r=new Intl.NumberFormat(e,{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:2,...n}),i=new Intl.NumberFormat(e,{style:"currency",currency:o}).formatToParts(0).find(a=>a.type==="currency")?.value??o;return{format:a=>`${i} ${r.format(a)}`,formatRange:(a,s)=>`${i} ${r.format(a)} - ${i} ${r.format(s)}`,formatToParts:a=>[{type:"currency",value:i},{type:"literal",value:" "},...r.formatToParts(a)]}}function ZP(e={}){let o=(0,gl.useNumberFormat)();return rh({locales:(0,gl.getLocaleForNumberFormat)(o),...e})}var NO=t("@/lib/contexts/DefaultCurrency");var tR=t("next-i18next");var Qp=t("@mantine/core"),ih=t("react/jsx-runtime");function Xp({children:e,...o}){return(0,ih.jsx)(Qp.Badge,{leftSection:(0,ih.jsx)(Qp.Box,{sx:n=>({"--size":`calc(${n.spacing[o.size||"sm"]} * 0.5)`,width:"var(--size)",height:"var(--size)",borderRadius:"50%",backgroundColor:"currentColor",aspectRatio:"1/1"})}),styles:{root:{textTransform:"unset"}},...o,children:e})}var eR={ONGOING:"orange",COMPLETED:"green"};var oR=t("react/jsx-runtime");function ah({status:e,...o}){let{t:n}=(0,tR.useTranslation)();return(0,oR.jsx)(Xp,{color:eR[e],...o,children:n(`status.values.${e}`,{ns:"selects"})})}var OO=t("react"),GO=t("next-i18next"),zO=t("@mantine/core");var nR=t("react"),rR=t("@mantine/core");var sh=t("react/jsx-runtime"),iR=(0,nR.forwardRef)(({value:e,...o},n)=>(0,sh.jsx)(rR.Group,{ref:n,spacing:"xs",noWrap:!0,...o,children:(0,sh.jsx)(ah,{status:e})}));iR.displayName="MatterStatusSelectItem";var HO=t("react/jsx-runtime");var UO=t("react"),$O=t("next-i18next"),zi=t("@mantine/core"),VO=t("@mantine/hooks"),WO=t("@mantine/modals"),KO=t("@apollo/client"),qO=t("@fortawesome/react-fontawesome");var jp=t("react"),cR=t("@mantine/core");var aR=t("react"),sR=t("@mantine/hooks");function lR(e,o){let[n,r]=(0,aR.useState)(e),[i]=(0,sR.useDebouncedValue)(n,o??ut.default.duration({seconds:.2}).as("milliseconds"));return{value:n,debouncedValue:i,setValue:r}}var pR=t("react/jsx-runtime"),dR=(0,jp.forwardRef)(({children:e,value:o,onChange:n,debounce:r,...i},a)=>{let{value:s,setValue:l,debouncedValue:p}=lR(o??"");return(0,jp.useEffect)(()=>{n?.(p)},[p]),(0,pR.jsx)(cR.TextInput,{ref:a,value:s,onChange:c=>l(c.target.value),...i,children:e})});dR.displayName="DebouncedTextInput";var uR=t("@/graphql");var lh=t("react/jsx-runtime"),nie=(0,uR.graphql)(`
	mutation InformationRequestSend($data: InformationRequestSendInput!) {
		informationRequestSend(data: $data) {
			id
		}
	}
`);var fH=t("next-i18next"),gH=t("@mantine/core"),hH=t("@mantine/hooks"),yH=t("@fortawesome/react-fontawesome");var cH=t("react"),dH=t("next-i18next"),yu=t("@mantine/core"),PE=t("@mantine/hooks"),pH=t("@apollo/client");var _R=t("react"),v1=t("next-i18next"),za=t("@mantine/core"),k1=t("@mantine/dates"),P1=t("@mantine/notifications"),R1=t("@apollo/client"),E1=t("@fortawesome/react-fontawesome"),A1=t("lodash");var YO=t("next-i18next"),mR=t("@mantine/core"),QO=t("@fortawesome/free-solid-svg-icons"),XO=t("@fortawesome/react-fontawesome"),fR=t("react/jsx-runtime");var n1=t("react"),r1=t("next-i18next"),Hi=t("@mantine/core"),i1=t("lucide-react");var ch=t("react"),JO=t("next-i18next"),yR=t("@mantine/core"),ZO=t("@apollo/client"),e1=t("lodash");var gR=t("react"),Jp=t("@mantine/core"),Zp=t("@/graphql"),eu=t("react/jsx-runtime"),jO=(0,Zp.graphql)(`
	fragment CurrencySelectItem on Currency {
		name
		code
		symbol
	}
`),hR=(0,gR.forwardRef)(({label:e,data:o,...n},r)=>{let i=(0,Zp.getFragmentData)(jO,o);return(0,eu.jsx)(Jp.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:(0,eu.jsxs)(Jp.Text,{span:!0,truncate:!0,children:[i.symbol," ",i.name]})})});hR.displayName="CurrencySelectItem";var bR=t("@/graphql"),t1=t("react/jsx-runtime"),lie=(0,bR.graphql)(`
	query CurrencySelectSingle($withDefault: Boolean!) {
		firm @include(if: $withDefault) {
			defaultCurrency {
				code
			}
		}
		currencies {
			code
			symbol
			name
			...CurrencySelectItem
		}
	}
`);var o1=t("next-i18next"),tu=t("@mantine/core"),SR=t("react/jsx-runtime");var ou=t("@/lib/contexts/DefaultCurrency"),dh=t("react/jsx-runtime");var a1=t("next-i18next"),hl=t("@mantine/core"),s1=t("@fortawesome/react-fontawesome");var xR=t("react/jsx-runtime");var l1=t("next-i18next"),Ga=t("@mantine/core"),CR=t("react/jsx-runtime");var c1=t("react"),d1=t("next-i18next"),nu=t("@mantine/core"),p1=t("@mantine/notifications"),u1=t("@fortawesome/react-fontawesome");var m1=t("react/jsx-runtime");var f1=t("next-i18next"),yl=t("@mantine/core"),g1=t("@fortawesome/react-fontawesome");var IR=t("react/jsx-runtime");var PR=t("react"),y1=t("next-i18next"),RR=t("@mantine/core"),b1=t("@apollo/client"),ph=t("lodash");var wR=t("react"),vR=t("next-i18next"),ru=t("@mantine/core");var iu=t("@/graphql");var bl=t("react/jsx-runtime"),h1=(0,iu.graphql)(`
	fragment UserSelectItem on User {
		prefix
		givenName
		familyName
		active
	}
`),kR=(0,wR.forwardRef)(({label:e,data:o,...n},r)=>{let{t:i}=(0,vR.useTranslation)(),a=(0,iu.getFragmentData)(h1,o);return(0,bl.jsxs)(ru.Group,{ref:r,spacing:"xs",noWrap:!0,...n,children:[(0,bl.jsx)(ru.Text,{span:!0,truncate:!0,children:e||ze(a)}),(0,bl.jsx)(ht,{archived:!a.active,label:i("archived_user",{ns:"entity_user"})})]})});kR.displayName="UserSelectItem";var ER=t("@/graphql");var AR=t("react/jsx-runtime"),Gie=(0,ER.graphql)(`
	query UserSelectMulti(
		$first: Int
		$where: UserWhereInput
		$orderBy: UserOrderByInput
		$includeInitial: Boolean = false
		$whereInitial: UserWhereInput
	) {
		all: users(first: $first, where: $where, orderBy: $orderBy) {
			edges {
				node {
					id
					givenName
					familyName
					...UserSelectItem
				}
			}
		}
		initial: users(where: $whereInitial) @include(if: $includeInitial) {
			edges {
				node {
					id
					givenName
					familyName
					...UserSelectItem
				}
			}
		}
	}
`);var L1=t("@/graphql");var F1=t("@/lib/contexts/DateFormat");var uh=t("react"),S1=t("@apollo/client"),LR=t("@/graphql"),Hie=(0,LR.graphql)(`
	query CollaborationDescriptors($entityType: CollaborationEntityType!) {
		collaborationDescriptors(entityType: $entityType) {
			key
			kind
			language
			ordered
			inputPath
			pattern
		}
	}
`);var x1=t("deep-object-diff"),FR=t("lodash"),kt=t("zod"),mh=t("@/graphql"),Sl=t("@/graphql/validation");var C1=(0,Sl.MatterCreateDataInputSchema)().extend({advisingFirms:kt.z.array(kt.z.object({name:kt.z.string().min(1,{message:"Firm name is required when adding a advising firm"}),role:kt.z.string().min(1,{message:"Role details is required when adding a advising firm"}),advising:kt.z.string().min(1,{message:"Advising is required when adding a advising firm"})})).nullish(),clients:kt.z.array(Ke).min(1),clientDescriptions:kt.z.array(_s),referees:kt.z.array(Ke),responsibleUsers:kt.z.array(Ke),labels:kt.z.array(Ke),pressLinks:kt.z.array(kt.z.string().url().trim()),dealValue:kt.z.discriminatedUnion("type",[kt.z.object({type:kt.z.literal("NO_VALUE")}).passthrough(),kt.z.object({type:kt.z.literal("EXACT"),currency:Sl.CurrencyCodeSchema,exact:kt.z.object({amount:kt.z.number().positive("Amount must be greater than 0")})}),kt.z.object({type:kt.z.literal("ESTIMATION"),currency:Sl.CurrencyCodeSchema,estimation:kt.z.object({lowerBound:kt.z.number().positive("Lower bound must be greater than 0"),upperBound:kt.z.number().positive("Upper bound must be greater than 0")}).refine(e=>e.upperBound>e.lowerBound,{message:"Upper bound must be greater than lower bound",path:["upperBound"]})})])}).omit({workHighlight:!0}).refine(e=>!e.clientNameHidden||e.clientDescriptions.length>0,{message:"Description is required when client name is hidden",path:["clientDescriptions"]}).refine(e=>e.status==="COMPLETED"?e.endDate?e.startDate?e.endDate>=e.startDate:!0:!1:!0,{message:"End date is required and must be greater than start date when status is COMPLETED",path:["endDate"]}).refine(e=>e.isCrossBorder?!!e.crossBorderCountry:!0,{message:"Jurisdiction is required when cross-border is selected",path:["crossBorderCountry"]});var T1={published:!1,clientDescriptions:[],clientNameHidden:!1,confidentialityRemarks:"",internalName:"",clients:[],status:"ONGOING",startDate:null,endDate:null,internalNumber:"",notes:"",labels:[],dealValue:{type:"NO_VALUE"},dealValueConfidential:!1,isCrossBorder:!1,crossBorderCountry:"",advisingFirms:[],pressLinks:[],referees:[],responsibleUsers:[]},MR=ao({zodSchema:C1,initialValues:T1}),jie=(0,mh.graphql)(`
	fragment MatterForm on Matter {
		advisingFirms {
			name
			role
			advising
		}
		confidentialityRemarks
		clientDescriptions {
			...TranslationForm
		}
		clientNameHidden
		crossBorderCountry
		dealValueConfidential
		dealValue {
			... on DealValueExact {
				currency {
					code
				}
				amount
			}
			... on DealValueEstimation {
				currency {
					code
				}
				lowerBound
				upperBound
			}
		}
		endDate
		startDate
		internalName
		internalNumber
		isCrossBorder
		notes
		published
		status
		pressLinks
		clients {
			edges {
				node {
					id
				}
			}
		}
		labels {
			id
		}
		responsibleUsers {
			id
		}
	}
`);var NR=t("react/jsx-runtime");var O1=t("next-i18next"),Ha=t("@mantine/core"),G1=t("@apollo/client"),z1=t("@fortawesome/react-fontawesome"),H1=t("lodash");var BR=t("@/graphql");var M1=t("react"),D1=t("@tanstack/react-table"),_1=t("lodash");var OR=t("react/jsx-runtime"),$ae=(0,BR.graphql)(`
	query MatterModalSelect(
		$first: Int
		$last: Int
		$skip: Int
		$after: String
		$before: String
		$where: MatterWhereInput
		$orderBy: MatterOrderByInput
	) {
		matters(
			first: $first
			last: $last
			skip: $skip
			after: $after
			before: $before
			where: $where
			orderBy: $orderBy
		) {
			edges {
				node {
					id
					internalName
					clients {
						edges {
							node {
								id
								...ClientBadge
							}
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`);var U1=t("@mantine/core"),$1=t("react/jsx-runtime");var V1=t("next-i18next"),GR=t("@mantine/core"),zR=t("@fortawesome/free-solid-svg-icons"),W1=t("@fortawesome/react-fontawesome"),HR=t("react/jsx-runtime");var xz=t("next-i18next"),cu=t("@mantine/core"),Cz=t("@mantine/notifications"),Tz=t("@fortawesome/free-solid-svg-icons"),Iz=t("@fortawesome/react-fontawesome");var UR=t("react/jsx-runtime");var nE=t("react"),YG=t("next-i18next"),Ua=t("@mantine/core"),QG=t("@apollo/client"),XG=t("@fortawesome/free-solid-svg-icons"),jG=t("@fortawesome/react-fontawesome");var X1=t("react"),$R=t("@mantine/core");var K1=t("next-i18next"),q1=t("@mantine/core"),Y1=t("@fortawesome/react-fontawesome");var Q1=t("react/jsx-runtime");var j1=t("react/jsx-runtime");var rE=t("@/graphql");var JG=t("@/lib/contexts/Languages");var qR=t("lodash"),Pr=t("zod"),au=t("@/graphql"),YR=t("@/graphql/validation");var J1=t("lodash"),$i=t("zod"),WR=t("@/graphql"),KR=t("@/graphql/validation");var Ui=t("lodash"),VR=t("zod");var ose=WS.transform(e=>(0,Ui.isEmpty)(e)||(0,Ui.isEqual)(e,Ya)?null:e).nullish(),xl=VR.z.object({}).passthrough().transform(e=>!e||(0,Ui.isEmpty)(e)||(0,Ui.isEqual)(e,{})||(0,Ui.isEqual)(e,Ya)?null:e);var fh=(0,KR.WorkHighlightContentCreateInputSchema)().extend({commercialTitle:$i.z.union([xl,$i.z.string()]),commercialDescription:xl.nullish(),whyImportant:$i.z.union([xl,$i.z.string()]).nullish(),pitchDescription:$i.z.union([xl,$i.z.string()]).nullish()}),gh={language:_n,commercialTitle:"",commercialDescription:{},whyImportant:null,pitchDescription:null},sse=ao({zodSchema:fh,initialValues:gh}),Z1=(0,WR.graphql)(`
	fragment WorkHighlightContentForm on WorkHighlightContent {
		language
		commercialTitle
		commercialDescription
		whyImportant
		pitchDescription
	}
`);var eG=(0,YR.WorkHighlightUpdateInputSchema)().extend({content:Pr.z.array(fh),industries:Pr.z.array(Ke).min(1),practices:Pr.z.array(Ke).min(1),offices:Pr.z.array(Ke).min(1),leadSpecialists:Pr.z.array(Ke).min(1),supportingSpecialists:Pr.z.array(Ke),labels:Pr.z.array(Ke),responsibleUsers:Pr.z.array(Ke)}),tG={content:[{...gh}],leadSpecialists:[],supportingSpecialists:[],industries:[],practices:[],offices:[],startDate:null,endDate:null,isConfidential:!0,approved:!1,labels:[],responsibleUsers:[]},hh=ao({zodSchema:eG,initialValues:tG}),Lse=(0,au.graphql)(`
	fragment WorkHighlightForm on WorkHighlight {
		labels {
			id
		}
		responsibleUsers {
			id
		}
		leadSpecialists(orderBy: { role: { sequence: ASC } }) {
			edges {
				node {
					id
				}
			}
		}
		supportingSpecialists(orderBy: { role: { sequence: ASC } }) {
			edges {
				node {
					id
				}
			}
		}
		industries {
			edges {
				node {
					id
				}
			}
		}
		practices {
			edges {
				node {
					id
				}
			}
		}
		offices {
			id
		}
		isConfidential
		startDate
		endDate
		content {
			...WorkHighlightContentForm
		}
	}
`),Fse=(0,au.graphql)(`
	fragment SubmissionWorkHighlightForm on SubmissionWorkHighlight {
		labels {
			id
		}
		responsibleUsers {
			id
		}
		leadSpecialists(orderBy: { role: { sequence: ASC } }) {
			edges {
				node {
					id
				}
			}
		}
		supportingSpecialists(orderBy: { role: { sequence: ASC } }) {
			edges {
				node {
					id
				}
			}
		}
		industries {
			edges {
				node {
					id
				}
			}
		}
		practices {
			edges {
				node {
					id
				}
			}
		}
		offices {
			id
		}
		isConfidential
		startDate
		endDate
		content {
			...WorkHighlightContentForm
		}
	}
`);var oE=t("@/graphql/validation");var $=t("zod"),tE=t("@/graphql/validation"),oG=$.z.enum(["AUTO","LIGHT","TINTED","DARK"]),nG=$.z.enum(["CHAPTER_TITLE","ENTITY_NAME"]),rG=$.z.enum(["SERIF","SANS"]),iG=$.z.enum(["SPLIT","FULL","IMAGE_LEFT","IMAGE_RIGHT","CARDS","COMPACT","STACKED","SIDE_BY_SIDE","LIST","GRID","SPOTLIGHT","SINGLE","CAROUSEL","CONTAINED","FULL_BLEED"]),aG=$.z.enum(["AUTO","16_9","4_3","1_1","21_9"]),sG=$.z.enum(["COVER","CONTAIN"]),lG=$.z.enum(["LEFT","CENTER","SPLIT"]),cG=$.z.enum(["DARK","LIGHT"]),dG=$.z.enum(["BESIDE","BANNER","HALF","BACKGROUND"]),pG=$.z.enum(["LEFT","RIGHT"]),uG=$.z.enum(["AUTO","DARK","LIGHT","TINTED","ACCENT"]),mG=$.z.enum(["NONE","PRACTICE","INDUSTRY","YEAR","CLIENT"]),fG=$.z.enum(["CARDS","ROWS","PROFILES"]),gG=$.z.enum(["LOGOS","NAMES","DESCRIPTIONS"]),hG=$.z.enum(["LEAD_SPECIALISTS","RESPONSIBLE_USERS","BOTH"]),yG=$.z.enum(["AUTO","COMPACT"]),QR=$.z.union([$.z.literal("AUTO"),$.z.literal(1),$.z.literal(2),$.z.literal(3),$.z.literal(4),$.z.literal(5),$.z.literal(6)]),bG=$.z.enum(["AUTO","NARROW","WIDE"]),SG=$.z.enum(["NORMAL","COMPACT","AIRY"]),xG=$.z.enum(["AUTO","ACCENT","PLAIN","NONE"]),CG=$.z.enum(["AUTO","LARGE","COMPACT"]),TG=$.z.enum(["MONTH_YEAR","FULL"]),IG=$.z.enum(["PADDED","PLAIN","ROMAN","NONE"]),wG=$.z.enum(["BEFORE_FOOTER","AFTER_HERO"]),vG=$.z.enum(["DEFAULT","STRIPED","PLAIN"]),kG=$.z.enum(["LEFT","CENTER"]),PG=$.z.enum(["BAND","FULL"]),RG=$.z.enum(["MANUAL","YEAR","CLIENT","NAME","ROLE","DATE"]),EG=$.z.enum(["FULL","SHORT"]),AG=$.z.union([$.z.literal(3),$.z.literal(6),$.z.literal(9),$.z.literal(12),$.z.literal(24),$.z.literal("ALL")]),LG=$.z.enum(["FOLDED","FULL","HIDDEN"]),yh=$.z.enum(["S","M","L"]),FG=$.z.enum(["AUTO","LIST","CARDS","TOMBSTONES","TIMELINE"]),MG=$.z.enum(["ROWS","CARDS","CHIPS"]),DG=$.z.enum(["SERIF","SANS"]),_G=$.z.enum(["FRAMED","PLAIN"]),NG=80,BG=200,OG=500,$o=$.z.string().max(NG),XR=$.z.string().max(BG),jR=$.z.string().max(OG),Dse=$.z.object({surface:oG,showNumber:$.z.boolean(),label:$o,titleColor:$.z.string(),navLabel:$o,showInNav:$.z.boolean(),width:bG,spacing:SG,ruleStyle:xG,itemNumbering:$.z.boolean(),hideOnWeb:$.z.boolean(),heroEyebrow:$o,preparedForLabel:$o,dateLabel:$o,leadSpecialistsLabel:$o,heroShowClientLogo:$.z.boolean(),heroShowClient:$.z.boolean(),heroShowDate:$.z.boolean(),titleSize:CG,dateFormat:TG,heroCtaLabel:$o,heroCtaUrl:jR,numberStyle:IG,showContentsMenu:$.z.boolean(),showPrintButton:$.z.boolean(),showDocuments:$.z.boolean(),documentsLabel:$o,documentsPosition:wG,showFooterNote:$.z.boolean(),footerNote:XR,motion:$.z.boolean(),themePreset:$.z.string().max(40),heroLayout:lG,heroBackground:cG,imageStyle:dG,imageSide:pG,imageFade:$.z.boolean(),imageSize:yh,prose:rG,layout:iG,textColumns:$.z.union([$.z.literal(1),$.z.literal(2)]),dropCap:$.z.boolean(),leadParagraph:$.z.boolean(),fold:$.z.boolean(),showSubTypeLabel:$.z.boolean(),tableStyle:vG,align:kG,size:PG,dividerStyle:uG,groupsFollowing:$.z.boolean(),expandAll:$.z.boolean(),initialCount:AG,sortBy:RG,columns:QR,showYear:$.z.boolean(),showSpecialists:$.z.boolean(),showDescription:$.z.boolean(),descriptionLength:EG,showClient:$.z.boolean(),showDealValue:$.z.boolean(),matterLayout:FG,groupBy:mG,leadLayout:fG,showOffice:$.z.boolean(),showMemberships:$.z.boolean(),showEducation:$.z.boolean(),showRankings:$.z.boolean(),leadLabel:$o,supportLabel:$o,supportStyle:yG,supportColumns:QR,showContact:$.z.boolean(),showTags:$.z.boolean(),showEmail:$.z.boolean(),showPhone:$.z.boolean(),showLinkedIn:$.z.boolean(),showRole:$.z.boolean(),bioMode:LG,showPhoto:$.z.boolean(),photoSize:yh,statement:XR,experienceLabel:$o,headline:nG,showGroupHeading:$.z.boolean(),groupEyebrow:$o,groupTitle:$o,showEntityDescription:$.z.boolean(),showMatterCount:$.z.boolean(),relatedTestimonials:$.z.boolean(),style:MG,showCounts:$.z.boolean(),linkToFeatured:$.z.boolean(),showMeta:$.z.boolean(),showSource:$.z.boolean(),showPractice:$.z.boolean(),showSpecialist:$.z.boolean(),quoteStyle:DG,clientStyle:gG,showNames:$.z.boolean(),logoSize:yh,grayscale:$.z.boolean(),tileStyle:_G,showDate:$.z.boolean(),showAuthors:$.z.boolean(),showLinks:$.z.boolean(),showSummary:$.z.boolean(),aspect:aG,fit:sG,showTitle:$.z.boolean(),contactSource:hG,showLeadSpecialists:$.z.boolean(),showFirmContact:$.z.boolean(),ctaLabel:$o,ctaUrl:jR}).partial(),No=tE.PitchChapterTypeSchema.enum,Jo=["surface","showNumber","label","titleColor","navLabel","showInNav","width","spacing","ruleStyle","itemNumbering","hideOnWeb"],GG=["heroEyebrow","titleColor","preparedForLabel","dateLabel","leadSpecialistsLabel","heroShowClientLogo","heroShowClient","heroShowDate","titleSize","dateFormat","heroCtaLabel","heroCtaUrl","numberStyle","showContentsMenu","showPrintButton","showDocuments","documentsLabel","documentsPosition","showFooterNote","footerNote","motion","themePreset","heroLayout","heroBackground","prose","imageStyle","imageSide","imageFade"],su=["showYear","showSpecialists","showDescription","descriptionLength","showClient","showDealValue"],JR=["showOffice","showMemberships","showEducation","showRankings"],ZR=["showEmail","showPhone","showLinkedIn"],or=["imageStyle","imageSide","imageFade"],eE=[...Jo,...or,"columns","style","showDescription","showCounts","linkToFeatured","sortBy"],_se={[No.GENERAL]:GG,[No.DESCRIPTION]:[...Jo,"prose","layout","textColumns","dropCap","leadParagraph","fold","showSubTypeLabel","tableStyle","imageStyle","imageSide","imageSize","fit","imageFade"],[No.TITLE]:[...Jo,"align","size","dividerStyle","groupsFollowing","prose","imageStyle","imageSide","imageFade"],[No.WORK_HIGHLIGHTS]:[...Jo,...or,"expandAll",...su,"sortBy","initialCount","columns","matterLayout","groupBy"],[No.SPECIALISTS]:[...Jo,...or,"leadLabel","supportLabel","supportStyle","showContact","showTags",...ZR,"columns","supportColumns","bioMode","showPhoto","showRole","sortBy","leadLayout",...JR],[No.FEATURED_SPECIALIST]:[...Jo,...or,"experienceLabel","showContact","showTags",...ZR,...su,"bioMode","showPhoto","photoSize","matterLayout","statement","layout",...JR],[No.FEATURED_PRACTICE]:[...Jo,...or,"headline","showGroupHeading","groupEyebrow","groupTitle",...su,"showEntityDescription","showMatterCount","matterLayout","relatedTestimonials","layout"],[No.FEATURED_INDUSTRY]:[...Jo,...or,"headline",...su,"showEntityDescription","showMatterCount","matterLayout","relatedTestimonials","layout"],[No.PRACTICES]:eE,[No.INDUSTRIES]:eE,[No.TESTIMONIALS]:[...Jo,...or,"showMeta","expandAll","columns","showSource","showYear","showPractice","showSpecialist","quoteStyle","initialCount","layout"],[No.CLIENTS]:[...Jo,...or,"showNames","columns","logoSize","grayscale","tileStyle","initialCount","clientStyle","groupBy"],[No.PUBLICATIONS]:[...Jo,...or,"showTags","expandAll","showDate","showAuthors","showLinks","showSummary","layout","sortBy","initialCount"],[No.IMAGE]:[...Jo,"columns","layout","aspect","fit","align","showTitle"],[No.CONTACT]:[...Jo,...or,"showLeadSpecialists","showFirmContact","ctaLabel","ctaUrl","showPhoto","showEmail","showPhone","layout","contactSource"]};var Hse=oE.PitchChapterTypeSchema.enum;function zG(e){try{return typeof e=="string"?e:e?dd(e,!0):""}catch{return""}}function HG(e){return e.replace(/<[^>]+>/g," ").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#39;|&apos;/g,"'").replace(/&rsquo;|&lsquo;/g,"'").replace(/&ldquo;|&rdquo;/g,'"').replace(/&nbsp;/g," ").replace(/\u00a0/g," ").replace(/\s+/g," ").trim()}function bh(e){return HG(zG(e))}var UG=t("next-i18next"),$G=t("@mantine/core"),VG=t("@fortawesome/free-solid-svg-icons"),WG=t("@fortawesome/react-fontawesome"),KG=t("react/jsx-runtime");var iE=t("react/jsx-runtime"),sle=(0,rE.graphql)(`
	mutation WorkHighlightKaiImprove($input: KaiTextOperationInput!) {
		kaiImprove(input: $input) {
			commercialDescription
		}
	}
`);var pE=t("react"),Ch=t("@mantine/core"),hz=t("@apollo/client"),Th=t("@fortawesome/free-solid-svg-icons"),yz=t("@fortawesome/react-fontawesome");var oz=t("react");var lu=Y(t("next/dynamic"));var aE=t("react");var tz=t("react/jsx-runtime"),ZG=(0,lu.default)(()=>import("react-beautiful-dnd").then(({DragDropContext:e})=>e),{ssr:!1}),ule=(0,lu.default)(()=>import("react-beautiful-dnd").then(({Droppable:e})=>e),{ssr:!1}),ez=(0,lu.default)(()=>import("react-beautiful-dnd").then(({Draggable:e})=>e),{ssr:!1});var nz=t("react/jsx-runtime");var rz=t("react"),sE=t("@mantine/core");var lE=t("react/jsx-runtime");var az=t("next-i18next"),sz=t("@mantine/core"),lz=t("@mantine/modals"),cz=t("@fortawesome/react-fontawesome");var dz=t("react/jsx-runtime");var cE=t("react"),Sh=t("@mantine/core"),uz=t("@apollo/client"),mz=t("@fortawesome/free-solid-svg-icons"),fz=t("@fortawesome/react-fontawesome");var xh=t("@/graphql");var dE=t("react/jsx-runtime"),gz=(0,xh.graphql)(`
	query SpecialistStackedSelect($where: SpecialistWhereInput) {
		specialists(where: $where) {
			edges {
				node {
					id
					givenName
					...SpecialistBadge
				}
			}
		}
	}
`);var bz=t("@/graphql");var uE=t("react/jsx-runtime");var mE=t("react/jsx-runtime");var iH=t("react"),aH=t("next-i18next"),vE=t("@mantine/core"),kE=t("@apollo/client");var _z=t("next-i18next"),bE=t("@mantine/core");var vh=t("react"),hE=t("@apollo/client"),yE=t("@/graphql"),Mz=t("@/lib/contexts/Me");var Ih=t("@hocuspocus/provider"),wz=Y(t("yjs")),vz=t("@/lib/env/client");var du=t("react"),pu=t("lodash");var ice=5*60*1e3;var uu=t("react"),Pz=t("lodash");var wh=t("react");var cce=2*60*1e3;var Cl=t("react"),Rz=t("lodash");var mu=t("react"),Ez=t("next-i18next");var fE=t("react"),Az=t("lodash"),gce=5*60*1e3;var fu=t("react"),Lz=t("next-i18next"),Fz=t("@tiptap/core"),gE=t("y-prosemirror");var $ce=(0,yE.graphql)(`
	mutation CollaborationTicket($entityType: CollaborationEntityType!, $entityId: ID!) {
		collaborationTicket(entityType: $entityType, entityId: $entityId) {
			token
			presenceDocumentName
			documentNames
		}
	}
`);var SE=t("react/jsx-runtime");var Nz=t("next-i18next"),Bz=t("@mantine/core"),xE=t("@fortawesome/free-solid-svg-icons"),Oz=t("@fortawesome/react-fontawesome"),Gz=t("react/jsx-runtime");var CE=t("react/jsx-runtime");var zz=t("next-i18next"),gu=t("@mantine/core"),Hz=t("@fortawesome/react-fontawesome"),TE=t("@fortawesome/free-solid-svg-icons"),IE=t("react/jsx-runtime");var Kz=t("next-i18next");var Uz=t("react"),$z=t("next-i18next"),Tl=t("@mantine/core"),Vz=t("@mantine/hooks");var Wz=t("@/lib/contexts/NameOrder");var wE=t("react/jsx-runtime");var qz=t("react/jsx-runtime");var Yz=t("@mantine/core");var Qz=t("react/jsx-runtime");var hu=t("@/graphql");var sH=t("@/lib/contexts/Me");var Xz=t("lodash");var jz=t("react"),Jz=t("next-i18next"),Zz=t("@mantine/core"),eH=t("@mantine/modals");var tH=t("react/jsx-runtime");var lH=t("@/services/apollo/refetchQueries");var kh=t("react/jsx-runtime"),cpe=(0,hu.graphql)(`
	mutation WorkHighlightFormModalMatterUpdate(
		$data: MatterUpdateDataInput!
		$where: MatterWhereUniqueInput!
	) {
		matterUpdate(data: $data, where: $where) {
			id
			workHighlights(first: 1, orderBy: { createdAt: DESC }) {
				edges {
					node {
						id
						isConfidential
					}
				}
			}
		}
	}
`),dpe=(0,hu.graphql)(`
	mutation WorkHighlightFormModalWorkHighlightUpdate(
		$where: WorkHighlightWhereUniqueInput!
		$data: WorkHighlightUpdateInput!
	) {
		workHighlightUpdate(where: $where, data: $data) {
			id
			isConfidential
		}
	}
`),ppe=(0,hu.graphql)(`
	mutation WorkHighlightFormModalAutosave(
		$where: WorkHighlightWhereUniqueInput!
		$data: WorkHighlightUpdateInput!
		$base: JSON
		$clientId: String
	) {
		workHighlightUpdate(where: $where, data: $data, base: $base, clientId: $clientId) {
			id
			collaboration {
				written
				conflicts {
					key
					current
					currentDisplay
					savedAt
					savedBy {
						userId
						name
						givenName
						familyName
					}
				}
			}
		}
	}
`);var uH=t("@/graphql");var mH=t("@/services/apollo/refetchQueries");var Ph=t("react/jsx-runtime");var Rh=t("react/jsx-runtime");var NE=t("react"),xu=t("@mantine/core"),BE=t("@apollo/client"),OE=t("lodash");var FE=Y(t("next/link")),Lt=t("@mantine/core"),ME=t("@fortawesome/react-fontawesome");var RE=Y(t("next/link")),Il=t("@mantine/core");var Rr=t("react/jsx-runtime");function bu({amount:e=7,clients:o,avatar:n,withLink:r=!1,...i}){let a=Array.from(new Map(o.map(p=>[p.id,p])).values()),s=a.length>e?a.length-e:0,l=a.slice(e);return(0,Rr.jsxs)(ml,{...i,className:Dt("*:data-radix-popper-content-wrapper:m-0! *:data-radix-popper-content-wrapper:size-[unset] *:data-radix-popper-content-wrapper:border-none",i.className),children:[a.slice(0,e).map(p=>{let c=(0,Rr.jsx)(Jr,{client:p,...n},p.id);return(0,Rr.jsx)(Il.Tooltip,{color:"gray.5",width:"auto",withArrow:!0,multiline:!0,label:p.name,children:r?(0,Rr.jsx)(Il.Anchor,{component:RE.default,href:{pathname:"/firm/clients/[id]",query:{id:p.id}},children:c}):c},p.id)}),s>0&&(0,Rr.jsx)(Il.Tooltip,{color:"gray.5",width:"auto",withArrow:!0,multiline:!0,label:l.map(p=>(0,Rr.jsx)("div",{children:p.name},p.id)),children:(0,Rr.jsxs)("span",{className:"z-10 grid place-items-center rounded-md bg-gray-700 text-center text-xs font-medium text-gray-50 tabular-nums transition select-none hover:bg-gray-600",children:["+",s]})})]})}var EE=t("@mantine/core");var Su=t("@/graphql"),LE=t("react/jsx-runtime"),Eh=(0,Su.graphql)(`
	fragment MatterDealValueDisplay on DealValue {
		... on DealValueExact {
			currency {
				code
			}
			amount
		}
		... on DealValueEstimation {
			currency {
				code
			}
			lowerBound
			upperBound
		}
	}
`);function AE({dealValue:e}){let o=(0,Su.getFragmentData)(Eh,e),n=ZP({currency:o.currency.code});return(0,LE.jsx)(EE.Text,{children:o.__typename==="DealValueEstimation"?n.formatRange(o.lowerBound,o.upperBound):n.format(o.amount)})}var $a=t("@/graphql");var DE=t("@/lib/contexts/Languages");var tt=t("react/jsx-runtime"),bH=(0,$a.graphql)(`
	fragment WorkHighlightRow on WorkHighlight {
		id
		isConfidential
		content {
			language
			commercialTitle
		}
		matter {
			id
			internalName
			dealValue {
				... on DealValueExact {
					currency {
						code
					}
					amount
				}
				... on DealValueEstimation {
					currency {
						code
					}
					lowerBound
					upperBound
				}
			}
			clients {
				edges {
					node {
						id
						name
						hasLogo
						logo {
							focalX
							focalY
						}
						clientNameHidden
					}
				}
			}
		}
		leadSpecialists {
			edges {
				node {
					id
					archived
					givenName
					familyName
					hasProfilePicture
					profilePicture {
						focalX
						focalY
					}
				}
			}
		}
	}
`);var SH="100px minmax(0, 1fr) 84px";function _E({workHighlight:e,language:o,actions:n,variant:r="compact",showClientLogo:i=!0,showDealValue:a=!0,showClientName:s=!0,showSpecialists:l=!0,preferCommercialTitle:p=!1,sx:c,...u}){let C=(0,DE.useFirmLanguages)(),g=o??C.default,d=(0,$a.getFragmentData)(bH,e),y=r==="detailed",v=d?.matter.clients?Ye(d.matter.clients):[],h=d?.leadSpecialists?Ye(d.leadSpecialists).sort((I,D)=>(I.givenName??"").localeCompare(D.givenName??"")):[],F=v.map(I=>I.name).filter(I=>!!I).join(", "),P=d?.matter.internalName,m=d?.matter.dealValue,N=function(){let I=d?.content.find(D=>D.language===g)??d?.content[0];return I?.commercialTitle||(I=d?.content.find(D=>!!D.commercialTitle)??d?.content[0]),bh(I?.commercialTitle)}(),E=d?.matter?.id!=null?(0,tt.jsx)(Lt.ActionIcon,{size:"sm",color:"primary.6",component:FE.default,target:"_blank",href:{pathname:"/docs/matters/[id]",query:{id:d.matter.id},hash:`work-highlight-${d.id}`},children:(0,tt.jsx)(ME.FontAwesomeIcon,{icon:Fs,style:{fontSize:"0.8em"}})}):null;if(!d)return(0,tt.jsx)(Lt.Group,{noWrap:!0,miw:0,h:40,spacing:"lg",pr:8,sx:[{flex:1,overflow:"hidden"},...(0,Lt.packSx)(c)],...u});if(y){let I=[s?"minmax(0, 1fr)":null,"minmax(0, 1fr)",a?"200px":null,i?"84px":null,l?"84px":null].filter(Boolean).join(" ");return(0,tt.jsxs)(Lt.Box,{sx:[D=>({flex:1,minWidth:0,height:40,display:"grid",alignItems:"center",columnGap:D.spacing.md,gridTemplateColumns:I}),...(0,Lt.packSx)(c)],children:[s&&(0,tt.jsx)(Vt,{weight:500,color:"gray.9",children:F}),(0,tt.jsxs)(Lt.Group,{noWrap:!0,miw:0,spacing:4,children:[(0,tt.jsx)(Vt,{size:"sm",color:"gray.7",tooltip:function(){let D=p?P:N;return D?{label:D,disabled:!1,multiline:!0,maw:320}:void 0}(),children:p?N??P:P??N}),E]}),a&&(0,tt.jsx)(Lt.Box,{sx:D=>({minWidth:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"right",color:D.colors.gray[7],fontVariantNumeric:"tabular-nums"}),children:!!m&&(0,tt.jsx)(AE,{dealValue:(0,$a.makeFragmentData)(m,Eh)})}),i&&(0,tt.jsx)(Lt.Group,{noWrap:!0,miw:0,my:-4,sx:{justifySelf:"end"},children:(0,tt.jsx)(bu,{amount:4,clients:v})}),l&&(0,tt.jsx)(Lt.Group,{noWrap:!0,miw:0,my:-4,sx:{justifySelf:"end"},children:(0,tt.jsx)(Ba,{amount:4,specialists:h})})]})}return r==="pitch"?(0,tt.jsxs)(Lt.Group,{noWrap:!0,miw:0,h:40,spacing:"lg",pr:8,sx:[{flex:1,overflow:"hidden"},...(0,Lt.packSx)(c)],...u,children:[n,(0,tt.jsxs)(Lt.Box,{sx:I=>({flex:1,minWidth:0,display:"grid",alignItems:"center",columnGap:I.spacing.md,gridTemplateColumns:SH}),children:[(0,tt.jsx)(Lt.Group,{noWrap:!0,miw:0,my:-4,children:(0,tt.jsx)(bu,{amount:3,clients:v})}),(0,tt.jsxs)(Lt.Group,{noWrap:!0,miw:0,spacing:4,children:[(0,tt.jsx)(Vt,{color:"gray.9",children:N}),E]}),(0,tt.jsx)(Lt.Group,{noWrap:!0,miw:0,my:-4,sx:{justifySelf:"end"},children:(0,tt.jsx)(Ba,{amount:3,specialists:h})})]})]}):(0,tt.jsxs)(Lt.Group,{noWrap:!0,miw:0,h:40,spacing:"lg",pr:8,sx:[{flex:1,overflow:"hidden"},...(0,Lt.packSx)(c)],...u,children:[n,(0,tt.jsx)(ti,{sx:{marginInlineEnd:"-0.75rem"},isConfidential:d.isConfidential}),(0,tt.jsxs)(Lt.Group,{noWrap:!0,miw:0,spacing:4,sx:{flex:1},children:[(0,tt.jsx)(Vt,{weight:500,color:"gray.9",children:N}),E]}),i&&(0,tt.jsx)(Lt.Group,{noWrap:!0,my:-4,sx:{flexShrink:0},children:(0,tt.jsx)(bu,{amount:4,clients:v})}),(0,tt.jsx)(Lt.Group,{noWrap:!0,position:"right",w:120,my:-4,sx:{flexShrink:0},children:(0,tt.jsx)(Ba,{amount:4,specialists:h})})]})}var GE=t("@/graphql"),wl=t("react/jsx-runtime"),xH=(0,GE.graphql)(`
	query WorkHighlightRowWithId($id: ID!) {
		workHighlight(where: { id: $id }) {
			...WorkHighlightRow
		}
	}
`),zE=(0,NE.forwardRef)(({children:e,id:o,queryOptions:n,pre:r,actions:i,language:a,variant:s,showClientLogo:l,showDealValue:p,showClientName:c,showSpecialists:u,preferCommercialTitle:C,sx:g,...d},y)=>{let v=(0,BE.useQuery)(xH,(0,OE.merge)({},{variables:{id:o}},n));return(0,wl.jsxs)(xu.Group,{ref:y,py:"sm",px:8,spacing:"sm",sx:[...(0,xu.packSx)(g),h=>({background:h.white,borderRadius:h.radius.lg,borderWidth:1,borderStyle:"solid",borderColor:h.colors.gray[h.other.getSchemeColor(h.colorScheme,2)]})],noWrap:!0,...d,children:[r,(0,wl.jsx)(Zn,{value:v.data?.workHighlight,h:30,children:h=>(0,wl.jsx)(_E,{workHighlight:h,language:a,actions:i,variant:s,showClientLogo:l,showDealValue:p,showClientName:c,showSpecialists:u,preferCommercialTitle:C})}),e]})});zE.displayName="WorkHighlightRowWithId";var CH=t("react"),TH=t("next-i18next"),IH=t("@mantine/core");var WE=t("react"),KE=t("@mantine/core");var UE=t("next-i18next");var HE={DRAFT:"gray",APPROVED:"green"};var VE=t("react/jsx-runtime");function $E({status:e,...o}){let{t:n}=(0,UE.useTranslation)();return(0,VE.jsx)(Xp,{color:HE[e],...o,children:n(`status.values.${e}`,{ns:"selects"})})}var Ah=t("react/jsx-runtime"),qE=(0,WE.forwardRef)(({value:e,...o},n)=>(0,Ah.jsx)(KE.Group,{ref:n,spacing:"xs",noWrap:!0,...o,children:(0,Ah.jsx)($E,{status:e})}));qE.displayName="WorkHighlightStatusSelectItem";var wH=t("react/jsx-runtime");var Cu=t("@/graphql");var DH=t("@/lib/contexts/DateFormat"),_H=t("@/lib/contexts/DefaultCurrency"),NH=t("@/lib/contexts/Languages");var Lh=t("@/graphql"),vH=(0,Lh.graphql)(`
	fragment SpecialistForInformationRequest on Specialist {
		id
		archived
		givenName
		familyName
		hasProfilePicture
		...SpecialistAvatar
	}
`),mue=(0,Lh.graphql)(`
	fragment PitchSpecialistForInformationRequest on PitchSpecialist {
		id
		archived
		givenName
		familyName
		hasProfilePicture
		profilePicture {
			focalX
			focalY
		}
	}
`);var Mh=t("react/jsx-runtime"),lme=(0,Cu.graphql)(`
	query WorkHighlightModalAdd(
		$first: Int
		$last: Int
		$skip: Int
		$after: String
		$before: String
		$where: WorkHighlightWhereInput
		$orderBy: WorkHighlightOrderByInput
	) {
		workHighlights(
			first: $first
			last: $last
			skip: $skip
			after: $after
			before: $before
			where: $where
			orderBy: $orderBy
		) {
			edges {
				node {
					id
					status
					isConfidential
					labels {
						id
						...LabelBadge
					}
					content {
						language
						commercialTitle
					}
					matter {
						id
						internalName
						status
						endDate
						isCrossBorder
						dealValue {
							... on DealValueExact {
								currency {
									code
								}
								amount
							}
							... on DealValueEstimation {
								currency {
									code
								}
								lowerBound
								upperBound
							}
						}
						labels {
							id
							...LabelBadge
						}
						clients {
							edges {
								node {
									...ClientBadge
								}
							}
						}
					}
					leadSpecialists {
						edges {
							node {
								...SpecialistForInformationRequest
							}
						}
					}
					supportingSpecialists {
						edges {
							node {
								...SpecialistForInformationRequest
							}
						}
					}
					industries {
						edges {
							node {
								id
								name
							}
						}
					}
					practices {
						edges {
							node {
								id
								name
							}
						}
					}
					offices {
						id
						...OfficeBadge
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`),cme=(0,Cu.graphql)(`
	query GetInformationRequestUsers {
		informationRequestUsers {
			id
			email
			givenName
			prefix
			familyName
			accountStatus
			specialist {
				id
			}
		}
	}
`);var QE=t("@/graphql");var XE=t("react/jsx-runtime"),Eme=Bt.default.getLogger("PresentationBuilder.ItemPicker"),Ame=(0,QE.graphql)(`
	query CollectionItemsByIds($source: DeckCollection!, $ids: [ID!], $language: Language!) {
		collectionItems(source: $source, ids: $ids, language: $language, first: 200) {
			id
			values
			imageUrl
			imageFileId
			color
		}
	}
`),Iu=e=>e.toUpperCase();var jE=t("react"),JE=t("next-i18next"),di=t("@mantine/core"),Dh=t("@fortawesome/free-solid-svg-icons"),_h=t("@fortawesome/react-fontawesome");var rr=t("react/jsx-runtime");function ZE({value:e,revision:o,onChange:n}){let{t:r}=(0,JE.useTranslation)("presentation_builder"),[i,a]=(0,jE.useState)(!1);return!oc(e)&&!i?(0,rr.jsx)(di.Button,{size:"xs",variant:"subtle",color:"orange",compact:!0,mt:"sm",leftIcon:(0,rr.jsx)(_h.FontAwesomeIcon,{icon:Dh.faNoteSticky}),onClick:()=>a(!0),children:r("templates.note.add")}):(0,rr.jsxs)(di.Box,{mt:"sm",p:8,sx:s=>({background:s.colors.orange[0],borderRadius:s.radius.md,border:`1px solid ${s.colors.orange[2]}`}),children:[(0,rr.jsxs)(di.Text,{size:"xs",color:"orange.8",weight:600,mb:4,children:[(0,rr.jsx)(_h.FontAwesomeIcon,{icon:Dh.faNoteSticky})," ",r("templates.note.label")]}),(0,rr.jsx)(di.Box,{sx:{background:"white",borderRadius:8},children:(0,rr.jsx)(xa,{value:e,revision:o,onChange:n})}),(0,rr.jsx)(di.Text,{size:"xs",color:"dimmed",mt:4,children:r("templates.note.help")})]})}var Qe=t("react"),o0=t("next-i18next"),V=t("@mantine/core"),n0=t("@mantine/hooks"),r0=t("@apollo/client"),dt=t("@fortawesome/free-solid-svg-icons"),Eo=t("@fortawesome/react-fontawesome");var z=t("react/jsx-runtime"),zH=["0.05","0.1","0.125","0.25","0.5"],HH=/^#[0-9a-f]{6}$/i,ct=e=>Math.round(e*1e3)/1e3,e0=(e,o)=>({x:e.x+o.x,y:e.y+o.y,w:o.w??e.w-o.x,h:o.h}),Nh=(e,o)=>e.x<o.x+o.w&&o.x<e.x+e.w&&e.y<o.y+o.h&&o.y<e.y+e.h,t0=(e,o)=>e.kind==="logo"?cr(o):e.kind==="text"?/\{(\w+)\}/.exec(e.text)?.[1]??null:null,UH=(e,o,n)=>{let r=e[o],i=e[n];if(r===void 0||i===void 0)return e;let a=[...e];return a[o]=i,a[n]=r,a};function i0({opened:e,onClose:o,slide:n,theme:r,language:i,slideNumber:a,onApply:s}){let{t:l}=(0,o0.useTranslation)("presentation_builder"),p=l,[c,u]=(0,Qe.useState)(null),[C,g]=(0,Qe.useState)([]),[d,y]=(0,Qe.useState)({groups:[],item:null}),[v,h]=(0,Qe.useState)("0.1"),[F,P]=(0,Qe.useState)(!0),[m,N]=(0,Qe.useState)(!0),[E,I]=(0,Qe.useState)("design"),[D,x]=(0,Qe.useState)(0),[G,M]=(0,Qe.useState)(null),A=(0,Qe.useRef)([]),L=(0,Qe.useRef)(null),{ref:q,width:X}=(0,n0.useElementSize)(),Se=(0,Qe.useRef)(n);Se.current=n,(0,Qe.useEffect)(()=>{e&&(u(Cn(Se.current.layout)),g([]),y({groups:[],item:null}))},[e,n.id]);let ke=c?.elements.findIndex(S=>S.kind==="repeat")??-1,Re=c&&ke>=0?c.elements[ke]:null,oe=(0,Qe.useMemo)(()=>Re?.slots??[],[Re]),Ie=Re?.source??"clients",$e=`${Xi[Ie].prefix}_${Xi[Ie].title}`;(0,Qe.useEffect)(()=>x(oe.length),[oe.length,e]);let{data:De}=(0,r0.useQuery)(ic,{variables:{source:Iu(Ie),language:i,first:24},skip:!e}),me=(0,Qe.useMemo)(()=>(De?.collectionItems??[]).map(ac),[De]),Ge=dr(r),R=X/Ge.w,ne=Number(v),B=(0,Qe.useCallback)(S=>F?Math.round(S/ne)*ne:S,[F,ne]),ee=(0,Qe.useCallback)((S,O=!0)=>{u(U=>{if(!U)return U;let J=U.elements.findIndex(fe=>fe.kind==="repeat");if(J<0)return U;O&&g(fe=>[...fe.slice(-49),U]);let _=U.elements[J],ae=as({..._,slots:S(_.slots??[])});return{...U,elements:U.elements.map((fe,re)=>re===J?ae:fe)}})},[]),Ve=()=>c&&g(S=>[...S.slice(-49),c]),Ee=(0,Qe.useCallback)(()=>{g(S=>{let O=S[S.length-1];return O?(u(O),S.slice(0,-1)):S})},[]),de=oe.filter(S=>d.groups.includes(S.id)),pe=de.length===1?de[0]??null:null,_e=pe&&d.item!==null?pe.items[d.item]??null:null,Tt=(0,Qe.useCallback)((S,O)=>{let U=Math.max(ne,.2),J=_=>_.x>=0&&_.y>=0&&_.x+_.w<=Ge.w&&_.y+_.h<=Ge.h&&!O.some(ae=>Nh(_,ae));for(let _=0;_<6;_++){for(let ae=0;ae<12;ae++){let fe={...S,x:ct(S.x+ae*(S.w+U)),y:ct(S.y+_*(S.h+U))};if((_||ae)&&J(fe))return fe}for(let ae=1;ae<12;ae++){let fe={...S,x:ct(S.x-ae*(S.w+U)),y:ct(S.y+_*(S.h+U))};if(J(fe))return fe}}return{...S,x:ct(S.x+.2),y:ct(S.y+.2)}},[ne,Ge.w,Ge.h]),yt=(0,Qe.useCallback)(S=>{if(!S.length)return;let O=[];ee(U=>{let J=U.map(Be=>Be),_=as({kind:"repeat",source:Ie,x:0,y:0,w:0,h:0,columns:1,rowHeight:1,item:[],slots:S}),ae=Tt(_,J),fe=ae.x-_.x,re=ae.y-_.y,Xe=S.map(Be=>{let Fn=ss();return O.push(Fn),{...Cn(Be),id:Fn,x:ct(Be.x+fe),y:ct(Be.y+re)}});return[...U,...Xe]}),y({groups:O,item:null})},[ee,Tt,Ie]),Pt=(0,Qe.useCallback)(()=>{de.length&&(A.current=Cn(de),Ne({state:"success",title:l("slots.copied",{count:de.length}),message:""}))},[de,l]),bt=(0,Qe.useCallback)(()=>{if(pe&&d.item!==null){let S=d.item;ee(O=>O.map(U=>U.id===pe.id?Or({...U,items:U.items.filter((J,_)=>_!==S)}):U)),y({groups:[pe.id],item:null})}else d.groups.length&&(ee(S=>S.filter(O=>!d.groups.includes(O.id))),y({groups:[],item:null}))},[pe,d,ee]),It=(0,Qe.useCallback)((S,O)=>{if(pe&&d.item!==null){let U=d.item;ee(J=>J.map(_=>_.id!==pe.id?_:Or({..._,items:_.items.map((ae,fe)=>fe===U?{...ae,x:ct(ae.x+S),y:ct(ae.y+O)}:ae)})))}else d.groups.length&&ee(U=>U.map(J=>d.groups.includes(J.id)?{...J,x:ct(J.x+S),y:ct(J.y+O)}:J))},[pe,d,ee]),co=S=>{let O=de;if(O.length<2)return;let U=Math.min(...O.map(re=>re.x)),J=Math.max(...O.map(re=>re.x+re.w)),_=Math.min(...O.map(re=>re.y)),ae=Math.max(...O.map(re=>re.y+re.h)),fe=new Map;if(S==="hdist"||S==="vdist"){let re=S==="hdist",Xe=[...O].sort((Ko,Lo)=>re?Ko.x-Lo.x:Ko.y-Lo.y),Be=Xe.reduce((Ko,Lo)=>Ko+(re?Lo.w:Lo.h),0),Fn=((re?J-U:ae-_)-Be)/(Xe.length-1),Ar=re?U:_;for(let Ko of Xe)fe.set(Ko.id,re?{x:Ar}:{y:Ar}),Ar+=(re?Ko.w:Ko.h)+Fn}else for(let re of O){let Xe=S==="left"?{x:U}:S==="right"?{x:J-re.w}:S==="hcenter"?{x:(U+J)/2-re.w/2}:S==="top"?{y:_}:S==="bottom"?{y:ae-re.h}:{y:(_+ae)/2-re.h/2};fe.set(re.id,Xe)}ee(re=>re.map(Xe=>{let Be=fe.get(Xe.id);return Be?{...Xe,x:ct(Be.x??Xe.x),y:ct(Be.y??Xe.y)}:Xe}))},gn=()=>{pe&&(ee(S=>S.map(O=>O.id===pe.id?O:{...O,w:pe.w,h:pe.h,items:Cn(pe.items)})),Ne({state:"success",title:l("slots.applied_to_all",{count:oe.length-1}),message:""}))},xo=(S,O=d.groups,U)=>{let J=_=>{let ae=_.items.length?Math.max(..._.items.map(re=>re.y+re.h)):0,fe=U?{x:ct(B(U.x-_.x)),y:ct(B(U.y-_.y))}:{x:0,y:ct(_.items.length?ae+.05:0)};return lr(Ie,S)?.kind==="image"?{kind:"logo",...fe,w:.9,h:.9}:{kind:"text",text:`{${S}}`,...fe,w:ct(Math.max(1.2,_.w)),h:.3,style:{fontSize:S===$e?11:9,color:S===$e?"$text":"$muted",align:"center",bold:S===$e||void 0}}};if(!O.length){let _=lr(Ie,S)?.kind==="image",ae={id:ss(),x:0,y:0,w:_?.9:2,h:_?.9:.3,items:[]},fe=J(ae);ee(re=>{let Xe=re[re.length-1],Be=U?{x:ct(B(U.x)),y:ct(B(U.y))}:Tt(Xe?{...Xe}:{x:1,y:2,w:ae.w,h:ae.h},re);return[...re,Or({...ae,x:Be.x,y:Be.y,items:[{...fe,x:0,y:0}]})]});return}ee(_=>_.map(ae=>O.includes(ae.id)?Or({...ae,items:[...ae.items,J(ae)]}):ae))},Vo=()=>{let S=pe??oe[oe.length-1];if(S)return yt([S]);let O=ss(),U=cr(Ie);ee(J=>[...J,Or({id:O,x:1,y:2,w:2,h:1.3,items:[...U?[{kind:"logo",x:.55,y:0,w:.9,h:.9}]:[],{kind:"text",text:`{${$e}}`,x:0,y:U?1:0,w:2,h:.3,style:{fontSize:11,align:"center"}}]})]),y({groups:[O],item:null})},Ft=S=>{if(!pe||d.item===null)return;let O=d.item;ee(U=>U.map(J=>J.id!==pe.id?J:Or({...J,items:J.items.map((_,ae)=>ae===O?{..._,...S}:_)})))},Wo=S=>_e?.kind==="text"&&Ft({style:{..._e.style,...S}});(0,Qe.useEffect)(()=>{if(!e)return;let S=O=>{let U=O.target,J=U?.tagName;if(J==="INPUT"||J==="TEXTAREA"||U?.isContentEditable)return;let _=O.ctrlKey||O.metaKey,ae=O.key.toLowerCase();if(_&&ae==="z")return O.preventDefault(),Ee();if(_&&ae==="c")return O.preventDefault(),Pt();if(_&&ae==="v")return O.preventDefault(),yt(A.current);if(_&&ae==="d")return O.preventDefault(),yt(de);if(_&&ae==="a")return O.preventDefault(),y({groups:oe.map(Be=>Be.id),item:null});if(ae==="delete"||ae==="backspace")return O.preventDefault(),bt();if(ae==="escape")return O.preventDefault(),O.stopPropagation(),y(Be=>Be.item!==null?{...Be,item:null}:{groups:[],item:null});let fe=O.shiftKey?ne*5:ne,Xe={arrowleft:[-fe,0],arrowright:[fe,0],arrowup:[0,-fe],arrowdown:[0,fe]}[ae];Xe&&d.groups.length&&(O.preventDefault(),It(...Xe))};return window.addEventListener("keydown",S,!0),()=>window.removeEventListener("keydown",S,!0)},[e,Ee,Pt,yt,de,oe,bt,It,ne,d.groups.length]);let Ao=S=>{let O=q.current?.getBoundingClientRect();return O?{x:(S.clientX-O.left)/R,y:(S.clientY-O.top)/R}:{x:0,y:0}};(0,Qe.useEffect)(()=>{let S=U=>{let J=L.current;if(!J)return;let _=(U.clientX-J.x0)/R,ae=(U.clientY-J.y0)/R;if(J.mode==="marquee"){let fe=Ao({clientX:J.x0,clientY:J.y0}),re=Ao(U),Xe={x:Math.min(fe.x,re.x),y:Math.min(fe.y,re.y),w:Math.abs(re.x-fe.x),h:Math.abs(re.y-fe.y)};J.rect=Xe,M(Xe);return}if(!(!J.moved&&Math.hypot(U.clientX-J.x0,U.clientY-J.y0)<3))if(J.moved||(J.moved=!0,Ve()),J.mode==="groups"){let fe=J.orig.find(Be=>Be.id===J.ids[0]);if(!fe)return;let re=B(fe.x+_)-fe.x,Xe=B(fe.y+ae)-fe.y;ee(()=>J.orig.map(Be=>J.ids.includes(Be.id)?{...Be,x:ct(Be.x+re),y:ct(Be.y+Xe)}:Be),!1)}else ee(()=>J.orig.map(fe=>fe.id!==J.id?fe:{...fe,items:fe.items.map((re,Xe)=>{if(Xe!==J.item)return re;let Be=e0(fe,re);return J.mode==="item"?{...re,x:ct(B(Be.x+_)-fe.x),y:ct(B(Be.y+ae)-fe.y)}:{...re,w:ct(Math.max(.1,B(Be.x+Be.w+_)-Be.x)),h:ct(Math.max(.1,B(Be.y+Be.h+ae)-Be.y))}})}),!1)},O=()=>{let U=L.current;if(L.current=null,!!U){if(U.mode==="marquee"){if(M(null),U.rect.w>.05||U.rect.h>.05){let J=oe.filter(_=>Nh(_,U.rect)).map(_=>_.id);y({groups:Array.from(new Set([...U.additive,...J])),item:null})}return}U.moved&&U.mode!=="groups"&&ee(J=>J.map(_=>_.id===U.id?Or(_):_),!1)}};return window.addEventListener("pointermove",S),window.addEventListener("pointerup",O),()=>{window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",O)}},[R,B,ee,oe]);let hn=(S,O)=>{if(S.button!==0)return;if(S.stopPropagation(),S.shiftKey||S.ctrlKey||S.metaKey){y(J=>({groups:J.groups.includes(O.id)?J.groups.filter(_=>_!==O.id):[...J.groups,O.id],item:null}));return}let U=d.groups.includes(O.id)?[O.id,...d.groups.filter(J=>J!==O.id)]:[O.id];(!d.groups.includes(O.id)||d.item!==null)&&y({groups:U,item:null}),L.current={mode:"groups",x0:S.clientX,y0:S.clientY,orig:oe,ids:U,moved:!1}},Er=(S,O,U,J=!1)=>{S.button===0&&(S.stopPropagation(),y({groups:[O.id],item:U}),L.current={mode:J?"resize":"item",x0:S.clientX,y0:S.clientY,orig:oe,id:O.id,item:U,moved:!1})},k=S=>{if(S.button!==0)return;let O=S.shiftKey||S.ctrlKey||S.metaKey?d.groups:[];O.length||y({groups:[],item:null}),L.current={mode:"marquee",x0:S.clientX,y0:S.clientY,rect:{x:0,y:0,w:0,h:0},additive:O}},we=(0,Qe.useMemo)(()=>ia(l("slide_editor.sample_prospect"),i,a),[l,i,a]),te=(0,Qe.useMemo)(()=>Gn(),[]),se=(0,Qe.useMemo)(()=>{if(!c)return null;let S=Object.fromEntries(n.fields.map(U=>[U.key,U.defaultValue??""]));if(E==="preview")return Br({layout:c,fields:n.fields,values:S,items:{...Ji(c,n.fields,!1).items,[Ie]:me.slice(0,D)}},r,we);let O=Br({...Ji(c,n.fields,!0),values:S},r,we);return{...O,nodes:O.nodes.map(U=>U.kind==="logo"?{...U,initials:"LOGO",color:"CBD5E1"}:U)}},[c,n,E,me,Ie,D,r,we]);if(!c||!Re)return null;let Ae=S=>S*R,mt=S=>p(`catalog.${S}`,{defaultValue:S}),je=me[0],no=je?ui(Ie,je):{},ve=S=>S?`#${qo(S,r)}`:"",ro=Array.from(new Set(Object.values(r.colors).map(S=>`#${S}`))),wt=S=>oe.findIndex(O=>O.id===S)+1,jt=()=>{let S=oe.map((_,ae)=>({group:_,n:ae+1})),O=S.filter(({group:_})=>!_.items.length),U=S.filter(({group:_})=>_.items.length>0&&(_.x<-.01||_.y<-.01||_.x+_.w>Ge.w+.01||_.y+_.h>Ge.h+.01));if(O.length||U.length){y({groups:[...O,...U].map(({group:_})=>_.id),item:null}),Ne({state:"error",title:l("slots.invalid_title"),message:[O.length?l("slots.empty_spots",{count:O.length,spots:O.map(({n:_})=>_).join(", ")}):"",U.length?l("slots.off_slide",{count:U.length,spots:U.map(({n:_})=>_).join(", ")}):""].filter(Boolean).join(" ")});return}let J={...c,elements:c.elements.map(_=>_.kind==="repeat"?as(_):_)};s(J)},zt=(S,O)=>ee(U=>{let J=U.findIndex(_=>_.id===S);return UH(U,J,J+O)});return(0,z.jsxs)(V.Modal,{opened:e,onClose:o,size:"98%",padding:"lg",closeOnEscape:!1,closeOnClickOutside:!1,title:(0,z.jsxs)(V.Group,{spacing:"sm",children:[(0,z.jsx)(V.Text,{weight:700,size:"lg",children:l("slots.title",{name:n.name})}),(0,z.jsx)(V.Badge,{variant:"light",children:l("slots.count",{count:oe.length})})]}),children:[(0,z.jsxs)(V.Box,{sx:{display:"flex",gap:20,alignItems:"flex-start"},children:[(0,z.jsxs)(V.Box,{sx:{flex:1,minWidth:0},children:[(0,z.jsxs)(V.Group,{position:"apart",mb:"xs",spacing:"xs",children:[(0,z.jsxs)(V.Group,{spacing:"xs",children:[(0,z.jsx)(V.Tooltip,{label:(0,z.jsxs)(z.Fragment,{children:[l("slots.undo")," ",(0,z.jsx)(V.Kbd,{children:"Ctrl"}),"+",(0,z.jsx)(V.Kbd,{children:"Z"})]}),withinPortal:!0,children:(0,z.jsx)(V.ActionIcon,{variant:"default",size:"lg",disabled:!C.length,onClick:Ee,children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faArrowRotateLeft})})}),(0,z.jsx)(V.Button,{size:"xs",variant:"default",leftIcon:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faPlus}),onClick:Vo,children:l("slots.new_spot")}),(0,z.jsx)(V.Tooltip,{label:(0,z.jsxs)(z.Fragment,{children:[l("slots.copy")," ",(0,z.jsx)(V.Kbd,{children:"Ctrl"}),"+",(0,z.jsx)(V.Kbd,{children:"C"})]}),withinPortal:!0,children:(0,z.jsx)(V.ActionIcon,{variant:"default",size:"lg",disabled:!de.length,onClick:Pt,children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faCopy})})}),(0,z.jsx)(V.Tooltip,{label:(0,z.jsxs)(z.Fragment,{children:[l("slots.paste")," ",(0,z.jsx)(V.Kbd,{children:"Ctrl"}),"+",(0,z.jsx)(V.Kbd,{children:"V"})]}),withinPortal:!0,children:(0,z.jsx)(V.ActionIcon,{variant:"default",size:"lg",onClick:()=>yt(A.current),children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faPaste})})}),(0,z.jsx)(V.Tooltip,{label:(0,z.jsxs)(z.Fragment,{children:[l("slots.delete")," ",(0,z.jsx)(V.Kbd,{children:"Del"})]}),withinPortal:!0,children:(0,z.jsx)(V.ActionIcon,{variant:"default",size:"lg",color:"red",disabled:!d.groups.length,onClick:bt,children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faTrashCan})})}),(0,z.jsx)(V.Divider,{orientation:"vertical"}),(0,z.jsx)(V.Tooltip,{label:l("slots.renumber"),withinPortal:!0,multiline:!0,w:240,children:(0,z.jsx)(V.ActionIcon,{variant:"default",size:"lg",onClick:()=>ee(S=>Jy(S)),children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faListOl})})})]}),(0,z.jsxs)(V.Group,{spacing:"sm",children:[(0,z.jsx)(V.Select,{size:"xs",w:120,withinPortal:!0,value:v,onChange:S=>S&&h(S),data:zH.map(S=>({value:S,label:l("slots.grid_size",{size:S})})),"aria-label":l("slots.grid")}),(0,z.jsx)(V.Switch,{size:"xs",label:l("slots.snap"),checked:F,onChange:S=>P(S.currentTarget.checked)}),(0,z.jsx)(V.Switch,{size:"xs",label:l("slots.show_grid"),checked:m,onChange:S=>N(S.currentTarget.checked)}),(0,z.jsx)(V.SegmentedControl,{size:"xs",value:E,onChange:S=>I(S),data:[{value:"design",label:l("slots.design")},{value:"preview",label:l("slots.preview")}]})]})]}),(0,z.jsxs)(V.Box,{sx:{position:"relative",width:wm(Ge.w,Ge.h,"calc(100vh - 260px)"),margin:"0 auto"},children:[se&&(0,z.jsx)(Un,{slide:se,imageUrl:te,shadow:!0,maxHeight:"none"}),(0,z.jsxs)(V.Box,{ref:q,onPointerDown:E==="design"?k:void 0,onDragOver:S=>S.dataTransfer.types.includes("application/x-klerq-field")&&S.preventDefault(),onDrop:S=>{let O=S.dataTransfer.getData("application/x-klerq-field");if(!O)return;S.preventDefault();let U=Ao(S),J=[...oe].reverse().find(_=>Nh(_,{x:U.x-.01,y:U.y-.01,w:.02,h:.02}));xo(O,J?[J.id]:[],U),J&&y({groups:[J.id],item:J.items.length})},sx:{position:"absolute",inset:0,userSelect:"none",touchAction:"none",display:E==="design"?"block":"none",backgroundImage:m&&R>0?"linear-gradient(rgba(37,99,235,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.09) 1px, transparent 1px)":void 0,backgroundSize:R>0?`${Ae(ne)}px ${Ae(ne)}px`:void 0},children:[X>0&&oe.map((S,O)=>{let U=d.groups.includes(S.id),J=U&&de.length===1;return(0,z.jsxs)(V.Box,{onPointerDown:_=>hn(_,S),sx:_=>({position:"absolute",left:Ae(S.x),top:Ae(S.y),width:Ae(S.w),height:Ae(S.h),cursor:"move",outline:`${U?2:1}px ${U?"solid":"dashed"} ${U?_.colors.blue[6]:_.fn.rgba(_.colors.blue[5],.55)}`,outlineOffset:3,background:U?_.fn.rgba(_.colors.blue[1],.25):"transparent","&:hover":{outlineColor:_.colors.blue[6]}}),children:[(0,z.jsx)(V.Box,{sx:_=>({position:"absolute",top:-12,left:-12,minWidth:20,height:20,padding:"0 5px",borderRadius:10,background:U?_.colors.blue[6]:_.colors.gray[6],color:"white",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",zIndex:3,pointerEvents:"none"}),children:O+1}),J&&S.items.map((_,ae)=>{let fe=d.item===ae;return(0,z.jsx)(V.Box,{onPointerDown:re=>Er(re,S,ae),title:mt(t0(_,Ie)??""),sx:re=>({position:"absolute",left:Ae(_.x),top:Ae(_.y),width:Ae(_.w??S.w-_.x),height:Ae(_.h),cursor:"move",outline:`${fe?2:1}px solid ${fe?re.colors.orange[6]:re.fn.rgba(re.colors.orange[5],.6)}`,background:fe?re.fn.rgba(re.colors.orange[1],.3):"transparent",zIndex:2}),children:fe&&(0,z.jsx)(V.Box,{onPointerDown:re=>Er(re,S,ae,!0),sx:re=>({position:"absolute",right:-5,bottom:-5,width:10,height:10,background:re.colors.orange[6],border:"1px solid white",cursor:"nwse-resize"})})},ae)})]},S.id)}),G&&(0,z.jsx)(V.Box,{sx:S=>({position:"absolute",left:Ae(G.x),top:Ae(G.y),width:Ae(G.w),height:Ae(G.h),border:`1px dashed ${S.colors.blue[6]}`,background:S.fn.rgba(S.colors.blue[2],.2),pointerEvents:"none"})})]})]}),(0,z.jsxs)(V.Group,{position:"apart",mt:"sm",children:[(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",children:l("slots.help")}),E==="preview"&&(0,z.jsxs)(V.Group,{spacing:"xs",children:[(0,z.jsx)(V.Text,{size:"sm",color:"dimmed",children:l("slide_editor.preview_items",{name:p(`collections.${Ie}.plural`)})}),(0,z.jsx)(V.NumberInput,{size:"xs",w:80,min:0,max:oe.length,value:D,onChange:S=>typeof S=="number"&&x(S)})]})]})]}),(0,z.jsx)(V.ScrollArea,{h:"78vh",w:320,sx:{flexShrink:0},offsetScrollbars:!0,styles:{viewport:{"& > div":{display:"block !important"}}},children:(0,z.jsxs)(V.Stack,{spacing:"md",pr:"xs",children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(V.Text,{weight:600,size:"sm",children:l("slots.library")}),(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",mb:6,children:l(d.groups.length?"slots.library_help_selected":"slots.library_help")}),(0,z.jsx)(V.Stack,{spacing:4,children:Mr[Ie].map(S=>(0,z.jsx)(V.UnstyledButton,{draggable:!0,onDragStart:O=>{O.dataTransfer.setData("application/x-klerq-field",S.key),O.dataTransfer.effectAllowed="copy"},onClick:()=>xo(S.key),sx:O=>({border:`1px solid ${O.colors.gray[3]}`,borderRadius:8,padding:"6px 8px",cursor:"grab",background:"white","&:hover":{borderColor:O.colors.primary[4],background:O.colors.gray[0]}}),children:(0,z.jsxs)(V.Box,{sx:{display:"flex",alignItems:"center",gap:8},children:[(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faGripVertical,color:"#adb5bd",size:"xs"}),(0,z.jsxs)(V.Box,{sx:{flex:1,minWidth:0},children:[(0,z.jsxs)(V.Group,{spacing:6,noWrap:!0,children:[(0,z.jsx)(V.Text,{size:"sm",weight:600,children:mt(S.key)}),S.kind==="image"&&(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faImage,size:"xs",color:"#868e96"})]}),(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",truncate:!0,children:S.kind==="image"?l("slots.logo_sample"):no[S.key]||`{${S.key}}`})]}),(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faPlus,size:"xs",color:"#868e96"})]})},S.key))})]}),de.length>1&&(0,z.jsxs)(V.Paper,{withBorder:!0,p:"sm",radius:"md",children:[(0,z.jsx)(V.Text,{weight:600,size:"sm",mb:6,children:l("slots.align_title",{count:de.length})}),(0,z.jsx)(V.Group,{spacing:4,children:[["left","align_left"],["hcenter","align_h_center"],["right","align_right"],["top","align_top"],["vcenter","align_v_center"],["bottom","align_bottom"],["hdist","distribute_h"],["vdist","distribute_v"]].map(([S,O])=>(0,z.jsx)(V.Button,{size:"xs",variant:"default",compact:!0,onClick:()=>co(S),children:p(`slots.${O}`)},S))})]}),pe&&(0,z.jsxs)(V.Paper,{withBorder:!0,p:"sm",radius:"md",children:[(0,z.jsxs)(V.Group,{position:"apart",mb:6,children:[(0,z.jsx)(V.Text,{weight:600,size:"sm",children:l("slots.spot",{n:wt(pe.id),total:oe.length})}),(0,z.jsxs)(V.Group,{spacing:4,children:[(0,z.jsx)(V.Button,{size:"xs",compact:!0,variant:"default",disabled:wt(pe.id)===1,onClick:()=>zt(pe.id,-1),children:l("slots.earlier")}),(0,z.jsx)(V.Button,{size:"xs",compact:!0,variant:"default",disabled:wt(pe.id)===oe.length,onClick:()=>zt(pe.id,1),children:l("slots.later")})]})]}),(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",mb:8,children:l("slots.spot_help",{n:wt(pe.id)})}),(0,z.jsx)(V.Stack,{spacing:4,mb:"sm",children:pe.items.map((S,O)=>(0,z.jsx)(V.UnstyledButton,{onClick:()=>y({groups:[pe.id],item:O}),sx:U=>({borderRadius:6,padding:"4px 8px",background:d.item===O?U.colors.orange[0]:U.colors.gray[0],border:`1px solid ${d.item===O?U.colors.orange[4]:"transparent"}`}),children:(0,z.jsxs)(V.Group,{position:"apart",noWrap:!0,children:[(0,z.jsx)(V.Text,{size:"sm",children:S.kind==="shape"?l("slots.shape"):mt(t0(S,Ie)??"")}),(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",children:S.kind==="text"?S.text:""})]})},O))}),(0,z.jsx)(V.Button,{fullWidth:!0,size:"xs",variant:"light",leftIcon:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faWandMagicSparkles}),disabled:oe.length<2,onClick:gn,children:l("slots.apply_to_all")})]}),_e&&pe&&(0,z.jsxs)(V.Paper,{withBorder:!0,p:"sm",radius:"md",children:[(0,z.jsx)(V.Text,{weight:600,size:"sm",mb:6,children:_e.kind==="logo"?mt(cr(Ie)??""):_e.kind==="text"?l("slots.text_part"):l("slots.shape")}),(0,z.jsx)(V.Group,{grow:!0,spacing:6,mb:"xs",children:["x","y","w","h"].map(S=>{let O=e0(pe,_e);return(0,z.jsx)(V.NumberInput,{size:"xs",label:p(`slots.${S}`),precision:2,step:ne,min:S==="w"||S==="h"?.1:-1,value:ct(O[S]),onChange:U=>{typeof U=="number"&&Ft(S==="x"?{x:ct(U-pe.x)}:S==="y"?{y:ct(U-pe.y)}:{[S]:U})}},S)})}),(_e.kind==="logo"||_e.kind==="shape")&&(0,z.jsx)(V.Switch,{size:"xs",mb:"xs",label:l("slots.round"),checked:!!_e.round,onChange:S=>Ft({round:S.currentTarget.checked||void 0})}),_e.kind==="text"&&(0,z.jsxs)(V.Stack,{spacing:6,children:[(0,z.jsx)(V.TextInput,{size:"xs",label:l("slots.text_value"),description:l("slots.text_value_help"),value:_e.text,onChange:S=>Ft({text:S.currentTarget.value})}),(0,z.jsxs)(V.Group,{spacing:6,noWrap:!0,children:[(0,z.jsx)(V.NumberInput,{size:"xs",w:70,min:6,max:60,value:_e.style?.fontSize??18,onChange:S=>typeof S=="number"&&Wo({fontSize:S}),"aria-label":l("slots.size")}),(0,z.jsx)(V.ActionIcon,{size:"lg",variant:_e.style?.bold?"filled":"default",color:"primary",onClick:()=>Wo({bold:!_e.style?.bold}),"aria-label":l("slots.bold"),children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faBold,size:"sm"})}),(0,z.jsx)(V.ActionIcon,{size:"lg",variant:_e.style?.italic?"filled":"default",color:"primary",onClick:()=>Wo({italic:!_e.style?.italic}),"aria-label":l("slots.italic"),children:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faItalic,size:"sm"})}),(0,z.jsx)(V.SegmentedControl,{size:"xs",value:_e.style?.align??"left",onChange:S=>Wo({align:S}),data:[{value:"left",label:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faAlignLeft})},{value:"center",label:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faAlignCenter})},{value:"right",label:(0,z.jsx)(Eo.FontAwesomeIcon,{icon:dt.faAlignRight})}]})]}),(0,z.jsx)(V.ColorInput,{size:"xs",format:"hex",withinPortal:!0,swatches:ro,value:ve(_e.style?.color??"$text"),onChange:S=>HH.test(S)&&Wo({color:S.slice(1).toUpperCase()}),"aria-label":l("slots.color")})]})]}),!d.groups.length&&(0,z.jsx)(V.Paper,{withBorder:!0,p:"sm",radius:"md",sx:S=>({background:S.colors.gray[0]}),children:(0,z.jsx)(V.Text,{size:"xs",color:"dimmed",children:l("slots.shortcuts")})})]})})]}),(0,z.jsxs)(V.Group,{position:"right",mt:"md",children:[(0,z.jsx)(V.Button,{variant:"default",onClick:o,children:l("common.cancel")}),(0,z.jsx)(V.Button,{onClick:jt,children:l("slots.apply")})]})]})}var b=t("react/jsx-runtime"),p0=e=>oc(e)?e??null:null,Oh=e=>JSON.stringify(p0(e)),$H=e=>({versions:JSON.stringify(pr(e)),note:Oh(e.instructions)}),VH=["1","3","5","8","12"],Bh=/^#[0-9a-f]{6}$/i,a0=["testimonial","practice","industry","publication","matters","testimonials","publications"],WH=["PRACTICES","INDUSTRIES"];function u0({opened:e,onClose:o,slide:n,theme:r,language:i,slideNumber:a,onSaved:s,onPrevious:l,onNext:p,slideCount:c,onRemove:u,removeBlocked:C,onOpenSlide:g}){let{t:d}=(0,s0.useTranslation)("presentation_builder"),y=d,v=(0,c0.useAtomValue)(d0.accessTokenAtom),[h,F]=(0,pt.useState)([]),[P,m]=(0,pt.useState)(null),N=(0,pt.useRef)(null),[E,I]=(0,pt.useState)(0),[D,x]=(0,pt.useState)(!1),G=h[E],M=G?.layout??null,A=(0,pt.useMemo)(()=>G?.fields??[],[G]),L=f=>F(Z=>Z.map((ce,xe)=>xe===E?{...ce,...f}:ce)),q=f=>F(Z=>Z.map((ce,xe)=>xe!==E?ce:{...ce,layout:typeof f=="function"?f(ce.layout):f})),X=f=>L({fields:f}),[Se,ke]=(0,pt.useState)("5"),[Re,oe]=(0,pt.useState)(!1),[Ie,$e]=(0,pt.useState)(!1),[De,me]=(0,pt.useState)(null),[Ge,R]=(0,pt.useState)(null),[ne,B]=(0,pt.useState)(0),[ee,{loading:Ve}]=(0,wu.useMutation)(rc),[Ee,de]=(0,pt.useState)(null),[pe,_e]=(0,pt.useState)({}),[Tt,yt]=(0,pt.useState)([]),[Pt,bt]=(0,pt.useState)(null),[It,co]=(0,pt.useState)({}),gn=(0,pt.useRef)(new Set),xo=f=>pe[f.id]??$H(f);if(e&&Pt!==n){if(Pt&&h.length&&!gn.current.has(Pt.id)){let f=Pt,Z=h,ce=Ee,xe=xo(f);co(ge=>({...ge,[f.id]:{id:f.id,name:f.name,original:xe,versions:Z,note:ce}}))}bt(n),F(Cn(It[n.id]?.versions??pr(n))),de(It[n.id]?It[n.id]?.note??null:n.instructions),I(0),me(null),R(null)}let Vo=[...Object.values(It).filter(f=>f.id!==n.id).map(f=>({...f,original:pe[f.id]??f.original})),{id:n.id,name:n.name,original:xo(n),versions:h,note:Ee}].filter(f=>!gn.current.has(f.id)&&f.versions.length>0&&(JSON.stringify(f.versions)!==f.original.versions||Oh(f.note)!==f.original.note)),Ft=Vo.length>0,Wo=rI(),Ao=(0,pt.useRef)(()=>Promise.resolve(!1));Ol(e&&Ft,{onSave:()=>Ao.current()});let hn=(0,pt.useMemo)(()=>M?{id:n.id,name:n.name,layout:M,fields:A}:null,[n.id,n.name,M,A]),Er=Fo[n.type].list,k=(M?.elements??[]).flatMap((f,Z)=>f.kind==="repeat"?[{element:f,index:Z}]:[]),we=(k.find(({element:f})=>f.source===Er)??k[0])?.index??-1,te=M&&we>=0?M.elements[we]:null,se=te?.source??Fo[n.type].list??"clients",Ae=!!te,{data:mt}=(0,wu.useQuery)(ic,{variables:{source:Iu(se),language:i,first:12},skip:!e||!Ae}),je=(0,pt.useMemo)(()=>(mt?.collectionItems??[]).map(ac),[mt]),no=f=>q(Z=>({...Z,elements:Z.elements.map((ce,xe)=>xe===we?{...ce,...f}:ce)})),ve=te?.card,ro=te?.grid??am,wt=f=>ve&&no({card:{...ve,...f}}),jt=(f,Z)=>ve&&wt({blocks:ve.blocks.map((ce,xe)=>xe===f?{...ce,...Z}:ce)}),zt=(f,Z)=>ve&&jt(f,{style:{...ve.blocks[f]?.style,...Z}}),S=(f,Z)=>{if(!ve)return;let ce=[...ve.blocks],xe=ce[f],ge=ce[f+Z];!xe||!ge||(ce[f]=ge,ce[f+Z]=xe,wt({blocks:ce}))},O=te?Bn(te):0,U=(0,pt.useMemo)(()=>ia(d("slide_editor.sample_prospect"),i,a),[d,i,a]),J=(0,pt.useMemo)(()=>Gn(),[]),_=(0,pt.useMemo)(()=>{if(!M)return null;let f=te&&!te.card?Math.min(Number(Se),O):Number(Se),Z=Object.fromEntries(bi(M).map(ce=>[ce,Dr(ce,1,!1)]));for(let ce of an(M))ce.source!==se&&(Z[ce.source]=Dr(ce.source,Bn(ce),!1));return te&&(Z[se]=se==="specialists"?pb(je.slice(0,f),M):je.slice(0,f)),Br({layout:M,fields:A,values:Object.fromEntries(A.map(ce=>[ce.key,ce.defaultValue??""])),items:Z},r,U)},[M,A,Se,te,O,je,se,r,U]),ae=(0,pt.useMemo)(()=>h.map(f=>Br({layout:f.layout,fields:f.fields,values:{},items:{}},r,U,{showPlaceholders:!0})),[h,r,U]),[fe,re]=(0,pt.useState)(null);if(!G||!M)return null;let Xe=!!ve,Be=f=>f?`#${qo(f,r)}`:"",Fn=Array.from(new Set(Object.values(r.colors).map(f=>`#${f}`))),Ar=f=>y(`catalog.${f}`,{defaultValue:f}),Ko=Mr[se].filter(f=>!ve?.blocks.some(Z=>lr(se,Z.field)?.key===f.key)),Lo=(f,Z)=>tc(f,Z,(ce,xe)=>y(`editor.versions.${ce.split(".").pop()}`,xe)),Mn=n.type==="SPECIALISTS"?fd(h):null,Wa=Mn?.find(f=>f.indices.includes(E))??Mn?.[0],vu=f=>[d("slide_editor.versions.content.bio"),...f.map(Z=>d(`slide_editor.subversions.part.${Z}`))].join(" + "),Wi=f=>{let Z=h[f];return Z?(0,b.jsx)(w.Button,{size:"xs",variant:f===E?"filled":"default",onClick:()=>{I(f),me(null),R(null)},children:Lo(Z,f)},Z.id):null},kl=(f,Z)=>F(ce=>ce.map((xe,ge)=>ge>0&&f.includes(ge)?{...xe,content:Z}:xe)),Ka=async(f,Z)=>{let ce=[...f].sort((Ht,ir)=>Ht.name.localeCompare(ir.name,void 0,{numeric:!0}));$e(!0),R(null);let xe=[],ge=[];for(let Ht of ce)try{let ir=await qi(Ht,v,Z?{fixedSpots:!0}:void 0),qt=[...ir.slides,...ir.slides.flatMap(Sn=>Sn.plain?[Sn.plain]:[])].find(Sn=>oa(Sn.layout,n.type));if(!qt){ge.push(Ht.name);continue}let Ki=ta(qt);xe.push({id:ls(),name:Ht.name.replace(/\.pptx$/i,""),layout:ql(Ki.layout,dr(ir.theme),dr(r)),fields:Ki.fields.map(Sn=>{let Gh=A.find(b0=>b0.key===Sn.key);return Gh&&!Sn.defaultValue?{...Sn,defaultValue:Gh.defaultValue}:Sn}),...Z?{content:Z}:{}})}catch{ge.push(Ht.name)}let Jt=Oo+1-h.length,bn=xe.slice(0,Math.max(0,Jt));bn.length&&(F(Ht=>[...Ht,...bn]),I(h.length)),(ge.length||bn.length<xe.length)&&R([ge.length?Z?d("slide_editor.subversions.not_added",{names:ge.join(", ")}):d("slide_editor.versions.not_added",{names:ge.join(", "),type:y(`slide_types.${n.type}`)}):"",bn.length<xe.length?d("slide_editor.versions.limit",{max:Oo}):""].filter(Boolean).join(" ")),$e(!1),m(null)},Pl=(f,Z,ce)=>(0,b.jsx)(w.Group,{spacing:"sm",children:a0.map(xe=>(0,b.jsx)(w.Checkbox,{size:"xs",label:d(`slide_editor.subversions.part.${xe}`),checked:f.includes(xe),disabled:ce,onChange:()=>Z(a0.filter(ge=>ge===xe?!f.includes(xe):f.includes(ge)))},xe))}),T=f=>To(h[f]?.layout??M,se)??0,j=(f,Z=!1)=>{let ce=h[f],xe=ae[f];if(!ce||!xe)return null;let ge=f===E;return(0,b.jsx)(w.Tooltip,{label:Lo(ce,f),withinPortal:!0,openDelay:300,children:(0,b.jsxs)(w.UnstyledButton,{onClick:()=>{I(f),me(null),R(null)},"aria-pressed":ge,sx:Jt=>({width:132,borderRadius:Jt.radius.md,padding:4,outline:ge?`2px solid ${Jt.colors.primary[6]}`:`1px solid ${Jt.colors.gray[3]}`,background:ge?Jt.colors.primary[0]:Jt.white,"&:hover":{outlineColor:Jt.colors.primary[4]}}),children:[(0,b.jsx)(Un,{slide:xe,radius:4,imageUrl:J}),(0,b.jsx)(w.Text,{size:"xs",weight:600,align:"center",mt:4,lineClamp:1,children:d("slide_editor.subversions.people",{count:T(f)})}),Z&&(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",align:"center",lineClamp:1,children:Lo(ce,f)})]})},ce.id)},K=()=>Mn?(0,b.jsx)(w.Paper,{withBorder:!0,radius:"md",p:"md",mb:"sm",children:(0,b.jsxs)(w.Stack,{spacing:"sm",children:[P&&(0,b.jsxs)(w.Paper,{radius:"md",p:"sm",sx:f=>({border:`2px dashed ${f.colors.primary[4]}`}),children:[(0,b.jsx)(w.Text,{size:"sm",weight:600,mb:8,children:d("slide_editor.subversions.new_title")}),(0,b.jsxs)(w.Group,{position:"apart",children:[Pl(P,m),(0,b.jsxs)(w.Group,{spacing:"xs",children:[(0,b.jsx)(w.Button,{size:"xs",variant:"default",onClick:()=>m(null),children:d("slide_editor.subversions.cancel")}),(0,b.jsx)(w.FileButton,{multiple:!0,accept:".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation",onChange:f=>void Ka(f,P),children:f=>(0,b.jsx)(w.Button,{...f,size:"xs",loading:Ie,leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faUpload}),children:d("slide_editor.subversions.upload_new")})})]})]})]}),(0,b.jsxs)(w.Group,{position:"apart",align:"flex-start",noWrap:!0,children:[(0,b.jsx)(w.Tabs,{variant:"pills",value:Wa?.key??null,onTabChange:f=>{let Z=Mn.find(ce=>ce.key===f);Z?.indices[0]!==void 0&&(I(Z.indices[0]),re(null),me(null),R(null))},children:(0,b.jsx)(w.Tabs.List,{children:Mn.map(f=>(0,b.jsx)(w.Tabs.Tab,{value:f.key,rightSection:(0,b.jsx)(w.Badge,{size:"xs",variant:"filled",color:"gray",radius:"xl",children:f.indices.length}),children:vu(f.content)},f.key))})}),(0,b.jsx)(w.Button,{size:"xs",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faPlus}),onClick:()=>m([]),disabled:!!P,children:d("slide_editor.subversions.add")})]}),Mn.filter(f=>f.key===Wa?.key).map(f=>{let Z=f.key,ce=fe===Z,xe=f.indices.includes(0);return(0,b.jsxs)(w.Paper,{withBorder:!0,radius:"md",p:"sm",sx:ge=>({background:ge.colors.gray[0]}),children:[(0,b.jsxs)(w.Group,{position:"apart",mb:"xs",noWrap:!0,children:[(0,b.jsx)("div",{}),(0,b.jsxs)(w.Group,{spacing:4,noWrap:!0,children:[(0,b.jsx)(w.Tooltip,{label:d("slide_editor.subversions.first_follows_layout"),disabled:!xe,withinPortal:!0,multiline:!0,w:260,children:(0,b.jsx)("div",{children:(0,b.jsx)(w.Button,{size:"xs",variant:"subtle",color:"gray",disabled:xe,onClick:()=>re(ce?null:Z),children:d(ce?"slide_editor.subversions.done":"slide_editor.subversions.edit")})})}),(0,b.jsx)(w.FileButton,{multiple:!0,accept:".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation",onChange:ge=>void Ka(ge,f.content),children:ge=>(0,b.jsx)(w.Button,{...ge,size:"xs",variant:"light",loading:Ie,leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faUpload}),children:d("slide_editor.subversions.upload")})})]})]}),ce&&(0,b.jsx)(w.Box,{mb:"xs",children:Pl(f.content,ge=>{kl(f.indices,ge),re(ge.join("+")||"bio")})}),(0,b.jsx)(w.Group,{spacing:"sm",align:"flex-start",children:f.indices.map(ge=>j(ge,f.indices.filter(Jt=>T(Jt)===T(ge)).length>1))})]},Z)}),Ge&&(0,b.jsx)(w.Text,{size:"xs",color:"red",children:Ge}),(0,b.jsxs)(w.Group,{spacing:"xs",p:"xs",sx:f=>({borderRadius:f.radius.md,background:f.colors.gray[0]}),children:[(0,b.jsx)(w.Text,{size:"xs",weight:600,children:d("slide_editor.subversions.selected")}),(0,b.jsx)(w.TextInput,{size:"xs",w:300,placeholder:Lo({...G,name:""},E),value:G.name,onChange:f=>L({name:f.currentTarget.value}),"aria-label":d("slide_editor.versions.name")}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",children:d("slide_editor.subversions.people",{count:T(E)})}),(0,b.jsx)(w.Button,{size:"xs",variant:"default",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faClone}),disabled:h.length>Oo,onClick:()=>{F(f=>[...f,{...Cn(G),id:ls(),name:""}]),I(h.length)},children:d("slide_editor.subversions.duplicate")}),(0,b.jsx)(w.Tooltip,{label:d("slide_editor.versions.cant_delete_default"),disabled:h.length>1,withinPortal:!0,children:(0,b.jsx)("div",{children:(0,b.jsx)(w.Button,{size:"xs",variant:"subtle",color:"red",disabled:h.length<=1,leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faTrashCan}),onClick:El,children:d("slide_editor.versions.delete")})})})]})]})}):null,ie=f=>{te&&(f==="auto"?no({slots:void 0,card:Zl[se],grid:te.grid??{...am,maxItems:Math.max(1,O)}}):ve&&q({...M,elements:M.elements.map((Z,ce)=>ce===we?Zy(te,r):Z)}))},Pe=async()=>{oe(!0);try{await Sy({name:n.name,theme:r,layout:M,fields:A},v)}catch(f){Ne({state:"error",title:d("slide_editor.download_failed"),message:f instanceof Error?f.message:String(f)})}finally{oe(!1)}},Le=async f=>{if(f){$e(!0),R(null);try{let Z=await qi(f,v),ce=Z.slides[0];if(!ce){R(d("import.error.noSlides"));return}let ge=[ce,...ce.plain?[ce.plain]:[]].find(qt=>oa(qt.layout,n.type));if(!ge){let qt=cb(n.type);R(d(qt.length?"slide_editor.no_items":"slide_editor.unexpected_items",{type:y(`slide_types.${n.type}`),examples:qt.join(d("slide_editor.and")),interpolation:{escapeValue:!1}}));return}let Jt=ta(ge),bn=nn(Z.theme),Ht={...Jt,layout:ql(Jt.layout,dr(Z.theme),dr(r))},ir=Ht.fields.map(qt=>{let Ki=A.find(Sn=>Sn.key===qt.key);return Ki&&!qt.defaultValue?{...qt,defaultValue:Ki.defaultValue,maxLength:Ki.maxLength??qt.maxLength}:qt}),qa=Ht.layout.elements.find(qt=>qt.kind==="repeat");q(Ht.layout),X(ir),B(qt=>qt+1),me({file:f.name,slideCount:Z.slides.length,spots:qa?Bn(qa):null,fields:Array.from(new Set(Ht.layout.elements.flatMap(qt=>qt.kind==="text"?Bo(qt.text):[]))),convertedFrom:bn!==nn(r)?bn:null})}catch(Z){R(Z instanceof Nn?y(`import.error.${Z.code}`):d("slide_editor.upload_failed"))}finally{$e(!1)}}},He=async()=>{let f=[],Z=[];for(let xe of Vo){let[ge,...Jt]=xe.versions;if(!ge)continue;let bn={versions:JSON.stringify(xe.versions),note:Oh(xe.note)},Ht={layout:ge.layout,fields:ge.fields,variantName:ge.name,variants:Jt,instructions:p0(xe.note)};try{await ee({variables:{id:xe.id,data:{...bn.versions!==xe.original.versions?{layout:Ht.layout,fields:Ht.fields,variantName:Ht.variantName,variants:Ht.variants.length?Ht.variants:null}:{},...bn.note!==xe.original.note?{instructions:Ht.instructions}:{}}}}),s(xe.id,Ht),f.push({id:xe.id,state:bn})}catch(ir){St(ir,{onError:qa=>Z.push({id:xe.id,name:xe.name,message:On(qa.message,y)})})}}let ce=new Set(f.map(({id:xe})=>xe));return yt(Z),f.length&&(_e(xe=>({...xe,...Object.fromEntries(f.map(({id:ge,state:Jt})=>[ge,Jt]))})),co(xe=>Object.fromEntries(Object.entries(xe).filter(([ge])=>!ce.has(ge)))),Ne({state:"success",title:d("slide_editor.saved"),message:d("slide_editor.saved_count",{count:f.length})})),Z.length&&Ne({state:"error",title:d("slide_editor.save_failed"),message:d("slide_editor.not_saved",{count:Z.length,names:Z.map(xe=>xe.name).join(", ")})}),!Z.length};Ao.current=He;let Kt=async()=>{await He()&&o()},Dn=()=>Ft?Wo(o,{onSave:He}):o(),en=!!te&&!yi.includes(n.type)&&!WH.includes(n.type),yn=f=>f(),ku=Array.from(new Set(M.elements.flatMap(f=>f.kind==="text"?Bo(f.text):[]))).filter(f=>!A.some(Z=>Z.key===f)),Rl=async()=>{if(!u)return;let f=n.id;await u(()=>{gn.current.add(f),yt(Z=>Z.filter(ce=>ce.id!==f))})},El=()=>{if(h.length<=1)return;let f=()=>{F(Z=>Z.filter((ce,xe)=>xe!==E)),I(Math.max(0,E-1))};if(!n.usageCount){f();return}(0,l0.openContextModal)({modal:Kn,title:d("slide_editor.versions.delete"),innerProps:{children:(0,b.jsx)(w.Text,{size:"sm",children:d("slide_editor.versions.delete_in_use",{count:n.usageCount})}),parts:{confirmButton:{color:"error"}},confirmText:d("slide_editor.versions.delete"),onConfirm:Z=>{f(),Z.closeModal()}}})},Pu=(0,b.jsxs)(w.Group,{spacing:6,noWrap:!0,children:[(0,b.jsx)(w.Tooltip,{withinPortal:!0,multiline:!0,w:340,label:(0,b.jsxs)(w.Stack,{spacing:4,children:[(0,b.jsx)(w.Text,{size:"xs",children:d(Ae?"slide_editor.fixed_help":"slide_editor.plain_help")}),["step1","step2","step3"].map((f,Z)=>(0,b.jsxs)(w.Text,{size:"xs",children:[Z+1,". ",d(`slide_editor.${f}`)]},f)),Ae&&(0,b.jsx)(w.Text,{size:"xs",children:d("slide_editor.spot_tip")})]}),children:(0,b.jsx)(w.ActionIcon,{variant:"subtle","aria-label":d("slide_editor.plain_help"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faCircleInfo})})}),(0,b.jsx)(w.Button,{size:"xs",variant:"default",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faDownload}),loading:Re,onClick:Pe,children:d("slide_editor.download")}),(0,b.jsx)(w.FileButton,{onChange:Le,accept:".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation",children:f=>(0,b.jsx)(w.Button,{...f,size:"xs",variant:"light",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faUpload}),loading:Ie,children:d("slide_editor.upload")})}),Ae&&te?.slots&&te.source!=="matters"&&(0,b.jsx)(w.Button,{variant:"subtle",size:"xs",onClick:()=>x(!0),children:d("slide_editor.fine_tune")})]}),Ru=(Ge||De)&&(0,b.jsxs)(w.Box,{mb:"xs",children:[Ge&&(0,b.jsx)(w.Alert,{color:"red",radius:"md",children:Ge}),De&&(0,b.jsx)(w.Alert,{color:"teal",radius:"md",icon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faCircleCheck}),title:d("slide_editor.recognised",{file:De.file}),children:(0,b.jsxs)(w.Group,{spacing:8,children:[De.spots!==null&&(0,b.jsx)(w.Text,{size:"xs",children:d("slide_editor.spots",{count:De.spots})}),De.fields.map(f=>(0,b.jsx)(w.Code,{children:`{${f}}`},f)),De.slideCount>1&&(0,b.jsx)(w.Text,{size:"xs",color:"orange",children:d("slide_editor.first_slide_only",{count:De.slideCount})}),De.convertedFrom&&(0,b.jsx)(w.Text,{size:"xs",color:"orange",children:d("slide_editor.converted",{from:y(_r(De.convertedFrom)),to:y(_r(nn(r)))})}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",children:d("slide_editor.save_to_apply")})]})})]});return(0,b.jsxs)(w.Modal,{opened:e,onClose:Dn,size:"95%",padding:"lg",closeOnClickOutside:!1,closeOnEscape:!1,title:(0,b.jsxs)(w.Group,{spacing:"xs",noWrap:!0,children:[(0,b.jsx)(w.ActionIcon,{variant:"default",disabled:!l,onClick:()=>l&&yn(l),"aria-label":d("slide_editor.previous"),title:d("slide_editor.previous"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faChevronLeft,size:"sm"})}),(0,b.jsx)(w.ActionIcon,{variant:"default",disabled:!p,onClick:()=>p&&yn(p),"aria-label":d("slide_editor.next"),title:d("slide_editor.next"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faChevronRight,size:"sm"})}),a&&c?(0,b.jsxs)(w.Text,{size:"sm",color:"dimmed",sx:{fontVariantNumeric:"tabular-nums"},children:[a," / ",c]}):null,(0,b.jsx)(w.Text,{weight:700,size:"lg",ml:4,children:d("slide_editor.title",{name:n.name})})]}),children:[(0,b.jsx)(w.Group,{position:"right",mb:"xs",children:(0,b.jsx)(w.Tooltip,{label:C??d("templates.slide_delete"),withinPortal:!0,multiline:!0,w:240,children:(0,b.jsx)("div",{children:(0,b.jsx)(w.Button,{size:"xs",color:"red",variant:"subtle",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faTrashCan}),disabled:!u,onClick:Rl,children:d("templates.slide_delete")})})})}),Tt.length>0&&(0,b.jsx)(w.Alert,{color:"red",radius:"md",mb:"xs",withCloseButton:!0,onClose:()=>yt([]),title:d("slide_editor.failed_title",{count:Tt.length}),children:(0,b.jsx)(w.Stack,{spacing:4,children:Tt.map(f=>(0,b.jsxs)(w.Group,{spacing:"xs",noWrap:!0,align:"flex-start",children:[(0,b.jsxs)(w.Box,{sx:{flex:1,minWidth:0},children:[(0,b.jsx)(w.Text,{size:"sm",weight:600,children:f.name}),(0,b.jsx)(w.Text,{size:"xs",children:f.message})]}),f.id!==n.id&&g&&(0,b.jsx)(w.Button,{size:"xs",variant:"subtle",color:"red",onClick:()=>g(f.id),children:d("slide_editor.open_failed")})]},f.id))})}),K()??(0,b.jsxs)(w.Paper,{withBorder:!0,radius:"md",p:"xs",mb:"sm",sx:f=>({background:f.colors.gray[0]}),children:[(0,b.jsxs)(w.Group,{spacing:"xs",position:"apart",noWrap:!0,children:[(0,b.jsxs)(w.Group,{spacing:6,children:[(0,b.jsx)(w.Text,{size:"sm",weight:600,mr:4,children:d("slide_editor.versions.title")}),(Mn?[]:h.map((f,Z)=>Z)).map(Wi),(0,b.jsxs)(w.Menu,{withinPortal:!0,position:"bottom-start",width:320,children:[(0,b.jsx)(w.Menu.Target,{children:(0,b.jsx)(w.Tooltip,{label:d("slide_editor.versions.limit",{max:Oo}),disabled:h.length<=Oo,withinPortal:!0,multiline:!0,w:260,children:(0,b.jsx)(w.Button,{size:"xs",variant:"light",loading:Ie,leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faClone}),rightIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faChevronDown,size:"xs"}),disabled:h.length>Oo,children:d("slide_editor.versions.add")})})}),(0,b.jsxs)(w.Menu.Dropdown,{children:[(0,b.jsxs)(w.Menu.Item,{icon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faUpload}),onClick:()=>N.current?.click(),children:[(0,b.jsx)(w.Text,{size:"sm",children:d("slide_editor.versions.add_upload")}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",children:d("slide_editor.versions.add_upload_help")})]}),(0,b.jsxs)(w.Menu.Item,{icon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faClone}),onClick:()=>{F(f=>[...f,{...Cn(G),id:ls(),name:""}]),I(h.length)},children:[(0,b.jsx)(w.Text,{size:"sm",children:d("slide_editor.versions.add_copy",{name:Lo(G,E)})}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",children:d("slide_editor.versions.add_help")})]})]})]}),(0,b.jsx)("input",{ref:N,type:"file",multiple:!0,hidden:!0,accept:".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation",onChange:f=>{let Z=Array.from(f.currentTarget.files??[]);f.currentTarget.value="",Z.length&&Ka(Z)}})]}),(0,b.jsxs)(w.Group,{spacing:6,noWrap:!0,children:[(0,b.jsx)(w.TextInput,{size:"xs",w:200,placeholder:Lo({...G,name:""},E),value:G.name,onChange:f=>L({name:f.currentTarget.value}),"aria-label":d("slide_editor.versions.name")}),(0,b.jsx)(w.Tooltip,{label:h.length<=1?d("slide_editor.versions.cant_delete_default"):d("slide_editor.versions.delete"),withinPortal:!0,multiline:!0,w:240,children:(0,b.jsx)("div",{children:(0,b.jsx)(w.ActionIcon,{color:"red",variant:"default",size:"lg",disabled:h.length<=1,onClick:El,"aria-label":d("slide_editor.versions.delete"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faTrashCan,size:"sm"})})})})]})]}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",mt:6,children:d("slide_editor.versions.help")})]}),(0,b.jsxs)(w.Box,{sx:{display:"flex",gap:24,alignItems:"flex-start"},children:[te&&(en||ve)&&(0,b.jsx)(w.ScrollArea,{h:"calc(100vh - 250px)",w:360,sx:{flexShrink:0},offsetScrollbars:!0,styles:{viewport:{"& > div":{display:"block !important"}}},children:(0,b.jsxs)(w.Stack,{spacing:"md",pr:"xs",children:[en&&(0,b.jsxs)("div",{children:[(0,b.jsx)(w.Text,{size:"sm",weight:600,mb:4,children:d("slide_editor.card.mode")}),(0,b.jsx)(w.SegmentedControl,{fullWidth:!0,value:Xe?"auto":"fixed",onChange:ie,data:[{value:"auto",label:d("slide_editor.card.mode_auto")},{value:"fixed",label:d("slide_editor.card.mode_fixed")}]}),(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",mt:4,children:d(Xe?"slide_editor.card.mode_auto_help":"slide_editor.card.mode_fixed_help")})]}),ve&&(0,b.jsxs)(b.Fragment,{children:[se==="clients"&&(0,b.jsx)(w.Select,{label:d("slide_editor.card.preset"),placeholder:d("slide_editor.card.preset_placeholder"),value:null,withinPortal:!0,onChange:f=>f&&no({card:Jl[f]}),data:Object.keys(Jl).map(f=>({value:f,label:y(`slide_editor.card.presets.${f}`,{defaultValue:f})}))}),(0,b.jsx)(w.Divider,{label:d("slide_editor.card.fields"),labelPosition:"left"}),(0,b.jsxs)(w.Stack,{spacing:6,children:[ve.blocks.map((f,Z)=>{let ce=lr(se,f.field),xe=ce?.kind==="image";return(0,b.jsxs)(w.Paper,{withBorder:!0,p:8,radius:"md",children:[(0,b.jsxs)(w.Group,{position:"apart",noWrap:!0,mb:6,children:[(0,b.jsx)(w.Text,{size:"sm",weight:600,children:Ar(ce?.key??f.field)}),(0,b.jsxs)(w.Group,{spacing:0,noWrap:!0,children:[(0,b.jsx)(w.ActionIcon,{size:"sm",disabled:Z===0,onClick:()=>S(Z,-1),"aria-label":d("templates.move_up"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faArrowUp,size:"xs"})}),(0,b.jsx)(w.ActionIcon,{size:"sm",disabled:Z===ve.blocks.length-1,onClick:()=>S(Z,1),"aria-label":d("templates.move_down"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faArrowDown,size:"xs"})}),(0,b.jsx)(w.ActionIcon,{size:"sm",color:"red",onClick:()=>wt({blocks:ve.blocks.filter((ge,Jt)=>Jt!==Z)}),"aria-label":d("slide_editor.card.remove_field"),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faXmark})})]})]}),xe?(0,b.jsxs)(w.Group,{spacing:"xs",noWrap:!0,children:[(0,b.jsx)(w.Text,{size:"xs",color:"dimmed",w:80,children:d("slide_editor.card.logo_size")}),(0,b.jsx)(w.Slider,{sx:{flex:1},min:15,max:85,step:5,value:Math.round((f.size??.4)*100),onChange:ge=>jt(Z,{size:ge/100}),label:ge=>`${ge}%`})]}):(0,b.jsxs)(w.Group,{spacing:6,noWrap:!0,children:[(0,b.jsx)(w.NumberInput,{size:"xs",w:64,min:6,max:40,value:f.style?.fontSize??12,onChange:ge=>typeof ge=="number"&&zt(Z,{fontSize:ge}),"aria-label":d("slide_editor.card.size")}),(0,b.jsx)(w.Tooltip,{label:d("slide_editor.card.bold"),withinPortal:!0,children:(0,b.jsx)(w.ActionIcon,{size:"lg",variant:f.style?.bold?"filled":"default",color:"primary",onClick:()=>zt(Z,{bold:!f.style?.bold}),children:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faBold,size:"sm"})})}),(0,b.jsx)(w.ColorInput,{size:"xs",w:110,format:"hex",withinPortal:!0,swatches:Fn,value:Be(f.style?.color??"$text"),onChange:ge=>Bh.test(ge)&&zt(Z,{color:ge.slice(1).toUpperCase()}),"aria-label":d("slide_editor.card.color")}),(0,b.jsx)(w.Select,{size:"xs",w:90,withinPortal:!0,value:String(f.maxLines??2),onChange:ge=>ge&&jt(Z,{maxLines:Number(ge)}),data:["1","2","3"].map(ge=>({value:ge,label:d("slide_editor.card.lines",{count:Number(ge)})})),"aria-label":d("slide_editor.card.max_lines")})]})]},f.field)}),(0,b.jsxs)(w.Menu,{withinPortal:!0,position:"bottom-start",children:[(0,b.jsx)(w.Menu.Target,{children:(0,b.jsx)(w.Button,{size:"xs",variant:"light",leftIcon:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faPlus}),disabled:!Ko.length,children:d("slide_editor.card.add_field")})}),(0,b.jsx)(w.Menu.Dropdown,{children:Ko.map(f=>(0,b.jsx)(w.Menu.Item,{onClick:()=>wt({blocks:[...ve.blocks,{field:f.key,style:{fontSize:10,color:"$muted"}}]}),children:Ar(f.key)},f.key))})]})]}),(0,b.jsx)(w.Divider,{label:d("slide_editor.card.layout"),labelPosition:"left"}),(0,b.jsxs)(w.Group,{grow:!0,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(w.Text,{size:"xs",weight:500,mb:4,children:d("slide_editor.card.direction")}),(0,b.jsx)(w.SegmentedControl,{size:"xs",fullWidth:!0,value:ve.direction,onChange:f=>wt({direction:f,aspect:f==="horizontal"?2.6:1.2,refHeight:f==="horizontal"?1.1:1.8}),data:[{value:"vertical",label:d("slide_editor.card.vertical")},{value:"horizontal",label:d("slide_editor.card.horizontal")}]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(w.Text,{size:"xs",weight:500,mb:4,children:d("slide_editor.card.align")}),(0,b.jsx)(w.SegmentedControl,{size:"xs",fullWidth:!0,value:ve.align,onChange:f=>wt({align:f}),data:[{value:"left",label:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faAlignLeft})},{value:"center",label:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faAlignCenter})},{value:"right",label:(0,b.jsx)(Ct.FontAwesomeIcon,{icon:Oe.faAlignRight})}]})]})]}),(0,b.jsxs)(w.Group,{grow:!0,children:[(0,b.jsx)(w.NumberInput,{size:"xs",label:d("slide_editor.card.max_columns"),min:1,max:6,value:ro.maxColumns,onChange:f=>typeof f=="number"&&no({grid:{...ro,maxColumns:f}})}),(0,b.jsx)(w.NumberInput,{size:"xs",label:d("slide_editor.card.max_items"),min:1,max:24,value:ro.maxItems,onChange:f=>typeof f=="number"&&no({grid:{...ro,maxItems:f}})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(w.Text,{size:"xs",weight:500,children:d("slide_editor.card.aspect")}),(0,b.jsx)(w.Slider,{min:.6,max:4,step:.1,precision:1,value:ve.aspect,onChange:f=>wt({aspect:f}),label:f=>f.toFixed(1)})]}),(0,b.jsx)(w.Divider,{label:d("slide_editor.card.style"),labelPosition:"left"}),(0,b.jsxs)(w.Group,{grow:!0,children:[(0,b.jsx)(w.ColorInput,{size:"xs",label:d("slide_editor.card.background"),format:"hex",withinPortal:!0,swatches:["#FFFFFF",...Fn],value:Be(ve.background),onChange:f=>wt({background:Bh.test(f)?f.slice(1).toUpperCase():void 0}),placeholder:d("slide_editor.card.none")}),(0,b.jsx)(w.ColorInput,{size:"xs",label:d("slide_editor.card.border"),format:"hex",withinPortal:!0,swatches:Fn,value:Be(ve.borderColor),onChange:f=>wt({borderColor:Bh.test(f)?f.slice(1).toUpperCase():void 0}),placeholder:d("slide_editor.card.none")})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(w.Text,{size:"xs",weight:500,children:d("slide_editor.card.radius")}),(0,b.jsx)(w.Slider,{min:0,max:.3,step:.02,precision:2,value:ve.radius??0,onChange:f=>wt({radius:f}),label:null})]})]})]})}),(0,b.jsxs)(w.Box,{sx:{flex:1,minWidth:0},children:[(0,b.jsxs)(w.Group,{position:"apart",mb:"xs",noWrap:!0,children:[(0,b.jsxs)(w.Group,{spacing:"xs",children:[(0,b.jsx)(w.Text,{weight:600,children:d("slide_editor.preview")}),te&&!Xe&&(0,b.jsx)(w.Tooltip,{label:yi.includes(n.type)?d("templates.auto_versions"):d("templates.list_repeat",{count:O,next:O+1,max:rs}),withinPortal:!0,multiline:!0,w:300,children:(0,b.jsxs)(w.Badge,{variant:"light",color:"grape",children:[d("templates.max",{max:O})," \xB7 ",d("templates.repeats")]})})]}),(0,b.jsxs)(w.Group,{spacing:"md",noWrap:!0,children:[te&&(0,b.jsxs)(w.Group,{spacing:"xs",noWrap:!0,children:[(0,b.jsx)(w.Text,{size:"sm",color:"dimmed",children:d("slide_editor.preview_items",{name:y(`collections.${se}.plural`)})}),(0,b.jsx)(w.SegmentedControl,{size:"xs",value:Se,onChange:ke,data:VH})]}),(!te||!ve)&&Pu]})]}),Ru,(0,b.jsxs)(w.Box,{sx:{display:"flex",gap:20,alignItems:"flex-start"},children:[(0,b.jsx)(w.Box,{sx:{flex:"1 1 55%",minWidth:0},children:_&&(0,b.jsx)(Un,{slide:_,imageUrl:J,shadow:!0,maxHeight:"calc(100vh - 330px)"})}),(0,b.jsxs)(w.Box,{sx:{flex:"1 1 45%",minWidth:0,maxHeight:"calc(100vh - 330px)",overflowY:"auto"},children:[(0,b.jsx)(ki,{fields:A,autoKeys:ku,onChange:X,richEditors:!0,revision:`${n.id}-${G.id}-${ne}`,tableHeaderRows:Object.fromEntries(G.layout.elements.flatMap(f=>f.kind==="table"?[[f.field,f.headerRows??0]]:[]))}),(0,b.jsx)(ZE,{value:Ee,revision:n.id,onChange:de},n.id)]})]}),(0,b.jsxs)(w.Group,{position:"right",mt:"md",children:[(0,b.jsx)(w.Button,{variant:"default",onClick:Dn,children:d("common.cancel")}),(0,b.jsx)(w.Button,{loading:Ve,disabled:!Ft,onClick:Kt,children:Vo.length>1?d("slide_editor.save_all",{count:Vo.length}):d("slide_editor.save")})]})]})]}),D&&hn&&(0,b.jsx)(i0,{opened:!0,onClose:()=>x(!1),slide:hn,theme:r,language:i,slideNumber:a,onApply:f=>{q(f),x(!1)}})]})}var W=t("react/jsx-runtime"),Vi=(e,o)=>JSON.stringify(e??null)===JSON.stringify(o??null);function y0({id:e}){let{t:o}=(0,m0.useTranslation)("presentation_builder"),n=o,r=(0,g0.useFirmLanguages)(),i=(0,f0.useAtomValue)(h0.accessTokenAtom),{data:a,loading:s,refetch:l}=(0,Ln.useQuery)(yb,{variables:{id:e},fetchPolicy:"network-only"}),[p]=(0,Ln.useMutation)(bb,{refetchQueries:Va.refetchQueries.DeckTemplate}),[c]=(0,Ln.useMutation)(rc),[u]=(0,Ln.useMutation)(Sb),[C]=(0,Ln.useMutation)(Cb,{refetchQueries:Va.refetchQueries.DeckTemplate}),[g]=(0,Ln.useMutation)(Tb,{refetchQueries:Va.refetchQueries.DeckTemplate}),[d]=(0,Ln.useMutation)(Ib),[y,{loading:v}]=(0,Ln.useMutation)(xb,{refetchQueries:Va.refetchQueries.DeckTemplate}),[h,{loading:F}]=(0,Ln.useMutation)(vb,{refetchQueries:Va.refetchQueries.DeckTemplate}),P=a?.deckTemplate,m=(0,We.useRef)(P);m.current=P;let[N,E]=(0,We.useState)(0),[I,D]=(0,We.useState)(""),[x,G]=(0,We.useState)(""),[M,A]=(0,We.useState)(null),[L,q]=(0,We.useState)(null),[X,Se]=(0,We.useState)([]),[ke,Re]=(0,We.useState)(!1),[oe,Ie]=(0,We.useState)(!1),[$e,De]=(0,We.useState)("sections"),[me,Ge]=(0,We.useState)(!1),[R,ne]=(0,We.useState)(null),[B,ee]=(0,We.useState)(null),[Ve,Ee]=(0,We.useState)(null),[de,pe]=(0,We.useState)(!1),[_e,Tt]=(0,We.useState)(null),[yt,Pt]=(0,We.useState)(!1),[bt,It]=(0,We.useState)(null),[co,gn]=(0,We.useState)(null),[xo,Vo]=(0,We.useState)(null),Ft=(0,We.useRef)(null),Wo=(0,We.useRef)(null),[Ao,hn]=(0,We.useState)(!1),[Er,k]=(0,We.useState)(!1),[we,te]=(0,We.useState)(!1);(0,We.useEffect)(()=>{let T=0,j=He=>Array.from(He.dataTransfer?.types??[]).includes("Files"),K=He=>{j(He)&&(T++,k(!0))},ie=He=>{j(He)&&(T=Math.max(0,T-1),T||k(!1))},Pe=He=>j(He)&&He.preventDefault(),Le=He=>{j(He)&&He.preventDefault(),T=0,k(!1),te(!1)};return window.addEventListener("dragenter",K),window.addEventListener("dragleave",ie),window.addEventListener("dragover",Pe),window.addEventListener("drop",Le),()=>{window.removeEventListener("dragenter",K),window.removeEventListener("dragleave",ie),window.removeEventListener("dragover",Pe),window.removeEventListener("drop",Le)}},[]),(0,We.useEffect)(()=>{let T=m.current;if(!T)return;D(T.name),G(T.description),A(xn(T.instructions)?T.instructions:null),q(Cn(T.theme));let j=[...T.slides].sort((K,ie)=>K.order-ie.order).map(Si);Se(T.output==="WEBSITE"?ra(j):j),Re(!1)},[P?.id,N]);let se=(0,We.useRef)(0),Ae=()=>{se.current+=1,Re(!0)},mt=T=>j=>{T(j),Ae()},je=P?.output==="WEBSITE",no=(T,j)=>{Se(K=>{let ie=K.map(Pe=>Pe.id===T?{...Pe,...j}:Pe);return je&&j.type?ra(ie):ie}),Ae()},ve=(T,j)=>{Se(K=>{let ie=[...K],Pe=ie[T],Le=ie[T+j];return!Pe||!Le||je&&!um(K,T,j)?K:(ie[T]=Le,ie[T+j]=Pe,ie)}),Ae()},ro=(0,We.useMemo)(()=>ia(o("new.sample_client"),r.default),[o,r.default]),wt=(0,We.useMemo)(()=>Gn(),[]),jt=(0,We.useRef)(()=>Promise.resolve(!1));Ol(ke,{onSave:()=>jt.current()});let zt=async(T,j)=>{let K=X.findIndex(He=>He.id===T),ie=X[K+j],Pe=X[K];if(!Pe||!ie)return;let Le=[...X];Le[K]=ie,Le[K+j]=Pe,Se(Le);try{await u({variables:{id:e,slideIds:Le.map(He=>He.id)}}),await l()}catch(He){St(He),await l()}},S=T=>new Promise(j=>{if(T.usageCount){Tt({slide:T,resolve:j});return}YT({title:o("templates.slide_delete"),text:o("slide_editor.delete_slide_confirm",{name:T.name}),remove:()=>fe(T)}).then(j)}),O=async(T,j)=>{let K=X.findIndex(Le=>Le.id===T.id),ie=X[K+1]??X[K-1]??null,Pe=await S(T);return Pe&&(j(),ne(ie)),Pe},U=T=>{let j=R?X.findIndex(ie=>ie.id===R.id):-1,K=j<0?void 0:X[j+T];return K?()=>ne(K):void 0},J=(0,We.useMemo)(()=>{if(!P||P.output==="WEBSITE")return{stored:[],groups:[],repeats:[],key:""};let T=[...P.slides].sort((Pe,Le)=>Pe.order-Le.order).map(Si),j=Rb(T),K=T.flatMap(Pe=>{let Le=Eb(Pe).length;return Le?[{slide:Pe,count:Le}]:[]}),ie=JSON.stringify([j.map(Pe=>Pe.map(Le=>Le.id)),K.map(({slide:Pe,count:Le})=>[Pe.id,Le])]);return{stored:T,groups:j,repeats:K,key:ie}},[P]);if(!P&&!s)return(0,W.jsx)(Q.Text,{color:"dimmed",children:o("templates.not_found")});if(!P||!L)return(0,W.jsx)(Q.Center,{py:80,children:(0,W.jsx)(Q.Loader,{})});let _=async()=>{await l(),E(T=>T+1)},ae=async()=>{Ie(!0);let T=se.current;try{let j={...I.trim()!==P.name?{name:I.trim()}:{},...x!==P.description?{description:x}:{},...Vi(M,xn(P.instructions)?P.instructions:null)?{}:{instructions:M},...Vi(L,P.theme)?{}:{theme:L}};Object.keys(j).length&&await p({variables:{id:e,data:j}});for(let K of X){let ie=P.slides.find(He=>He.id===K.id);if(!ie)continue;let Pe=Si(ie),Le={...Pe.name!==K.name?{name:K.name}:{},...Pe.type!==K.type?{type:cs(K.type)}:{},...Vi(Pe.fields,K.fields)?{}:{fields:K.fields},...!je&&!Vi(Pe.layout,K.layout)?{layout:K.layout}:{},...!je&&!Vi(Pe.variants,K.variants)?{variants:K.variants.length?K.variants:null}:{},...Vi(Pe.instructions,K.instructions)?{}:{instructions:K.instructions},...je&&!Vi(Pe.settings,K.settings)?{settings:K.settings}:{}};Object.keys(Le).length&&await c({variables:{id:K.id,data:Le}})}return X.map(K=>K.id).join()!==[...P.slides].sort((K,ie)=>K.order-ie.order).map(K=>K.id).join()&&await u({variables:{id:e,slideIds:X.map(K=>K.id)}}),Ne({state:"success",title:o("templates.saved"),message:I.trim()}),se.current===T?await _():await l(),!0}catch(j){return St(j,{onError:K=>Ne({state:"error",title:o("templates.save_failed"),message:K.message})}),!1}finally{Ie(!1)}};jt.current=ae;let fe=async(T,j)=>{try{return await C({variables:{id:T.id,force:!!j,pitchIds:j}}),Se(K=>K.filter(ie=>ie.id!==T.id)),await l(),!0}catch(K){if(j&&nc(K,"TEMPLATE_SLIDE_USAGE_CHANGED"))throw K;return St(K,{onError:ie=>Ne({state:"error",title:o("templates.delete_slide_failed"),message:On(ie.message,n)})}),!1}},re=T=>X.filter(j=>j.id!==T.id&&[T.layout,...T.variants.map(K=>K.layout)].every(K=>oa(K,j.type))),Xe=(T,j)=>j.variants.length+1+T.variants.length<=Oo,Be=async(T,j)=>{let ie=(await g({variables:{id:T.id,slideIds:j.map(Le=>Le.id)}})).data?.deckTemplateSlidesCombine,Pe=ie?{variants:ie.variants??[],instructions:xn(ie.instructions)?ie.instructions:null}:{};return Se(Le=>Le.filter(He=>!j.some(Kt=>Kt.id===He.id)).map(He=>He.id===T.id?{...He,...Pe}:He)),await l(),{...T,...Pe}},Fn=async(T,j)=>{let K=X.find(ie=>ie.id===j);if(K){pe(!0);try{let ie=await Be(K,[T]);ee(null),Ee(null),ne(Pe=>Pe?.id===T.id?ie:Pe)}catch(ie){St(ie,{onError:Pe=>Ne({state:"error",title:o("templates.make_version.failed"),message:On(Pe.message,n)})})}finally{pe(!1)}}},Ar=async([T,...j])=>{if(!(!T||!j.length)){It(T.id);try{await Be(T,j),Ne({state:"success",title:o("templates.combine.done"),message:o("templates.combine.done_text",{count:j.length+1,name:T.name})})}catch(K){St(K,{onError:ie=>Ne({state:"error",title:o("templates.combine.failed"),message:On(ie.message,n)})})}finally{It(null)}}},Ko=async T=>{It(T.id);let j=T.variants.length;try{let ie=(await d({variables:{id:T.id}})).data?.deckTemplateSlideRemoveRepeats.variants??[];Se(Pe=>Pe.map(Le=>Le.id===T.id?{...Le,variants:ie}:Le)),await l(),Ne({state:"success",title:o("templates.combine.repeats_done"),message:o("templates.combine.duplicates",{count:j-ie.length})})}catch(K){St(K,{onError:ie=>Ne({state:"error",title:o("templates.combine.repeats_failed"),message:On(ie.message,n)})})}finally{It(null)}},Lo=async T=>{if(T){hn(!0);try{let j=await qi(T,i),K=[],ie=[];for(let Le of j.slides)try{let{layout:He,fields:Kt}=ta(Le),Dn=await y({variables:{id:e,data:{type:cs(Le.type),content:{name:Le.name,fields:Kt,layout:He,format:nn(j.theme)},language:r.default}}});Dn.data?.deckTemplateSlideAdd&&K.push(Si(Dn.data.deckTemplateSlideAdd))}catch(He){St(He,{onError:()=>ie.push(Le.name)})}K.length&&(Se(Le=>[...Le,...K]),await l()),ie.length&&Ne({state:"error",title:o("templates.upload_slide"),message:o("templates.slides_not_added",{count:ie.length,names:ie.join(", ")})});let Pe=K[0];K.length&&Ne({state:"success",title:o("templates.one"),message:K.length===1&&Pe?o("templates.slide_uploaded",{type:n(`slide_types.${Pe.type}`)}):o("templates.slides_uploaded",{count:K.length,types:Array.from(new Set(K.map(Le=>n(`slide_types.${Le.type}`)))).join(", ")})}),K.length===1&&Pe&&!ie.length&&ne(Pe)}catch(j){Ne({state:"error",title:o("templates.upload_slide"),message:j instanceof Nn?n(`import.error.${j.code}`):j instanceof Error?j.message:String(j)})}finally{hn(!1),Ft.current&&(Ft.current.value="")}}},Mn=async T=>{let j=Array.from(T??[]).filter(Kt=>/\.pptx$/i.test(Kt.name)&&!Kt.name.startsWith("~$")).sort((Kt,Dn)=>Kt.name.localeCompare(Dn.name,void 0,{numeric:!0})),K=()=>{for(let Kt of[Ft.current,Wo.current])Kt&&(Kt.value="")};if(!j.length){Ne({state:"error",title:o("templates.upload_folder"),message:o("templates.folder.empty")}),K();return}let ie=j[0]?.webkitRelativePath.split("/")[0]||"",Pe=Kt=>Kt.name.replace(/\.pptx$/i,"");hn(!0);let Le=[],He=[];try{for(let en of j)try{let yn=await qi(en,i,{fixedSpots:!0});for(let[ku,Rl]of yn.slides.entries()){let{layout:El,fields:Pu}=ta(Rl),Ru=!Le.length&&ie?ie:yn.slides.length>1?`${Pe(en)} ${ku+1}`:Pe(en),f=await y({variables:{id:e,data:{type:cs(Rl.type),content:{name:Ru,fields:Pu,layout:El,format:nn(yn.theme)},language:r.default}}});f.data?.deckTemplateSlideAdd&&Le.push(Si(f.data.deckTemplateSlideAdd))}}catch(yn){He.push(yn instanceof Nn?`${en.name} (${n(`import.error.${yn.code}`)})`:en.name)}Le.length&&Se(en=>[...en,...Le]);let[Kt,...Dn]=Le;if(Kt&&Dn.length)try{await Be(Kt,Dn),Ne({state:"success",title:o("templates.upload_folder"),message:o("templates.folder.done",{count:Le.length,name:Kt.name})})}catch(en){await l(),St(en,{onError:yn=>Ne({state:"error",title:o("templates.folder.not_combined"),message:On(yn.message,n)})})}else Kt&&await l();He.length&&Ne({state:"error",title:o("templates.upload_folder"),message:o("templates.slides_not_added",{count:He.length,names:He.join(", ")})})}finally{hn(!1),K()}},Wa=async(T,j)=>{try{let K=await y({variables:{id:e,data:{type:cs(T),design:j,language:r.default}}});if(K.data?.deckTemplateSlideAdd){let ie=Si(K.data.deckTemplateSlideAdd);Se(Pe=>je?ra([...Pe,ie]):[...Pe,ie])}await l(),Ne({state:"success",title:o("templates.one"),message:o("templates.slide_added",{type:n(j?`templates.slide_designs.${j}.label`:`slide_types.${T}`)})})}catch(K){St(K,{onError:ie=>Ne({state:"error",title:o("templates.save_failed"),message:ie.message})})}},vu=(T,j)=>no(T.id,{settings:{...na(T.type,T.settings),...j}}),Wi=mm(L.colors.accent,L.colors.primary),kl=tb([L.fonts.heading,L.fonts.body],{office:o("fonts.office"),web:o("fonts.web"),template:o("fonts.template")}),Ka=async()=>{if(xo)try{await h({variables:{id:e,format:xo}}),Ne({state:"success",title:o("format.label"),message:o("format.converted",{format:n(_r(xo))})}),await _()}catch(T){St(T,{onError:j=>Ne({state:"error",title:o("templates.save_failed"),message:j.message})})}finally{Vo(null)}},Pl=(T,j)=>{Se(K=>K.map(ie=>ie.id===T?{...ie,...j}:ie)),l()};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Q.Group,{position:"apart",align:"flex-end",mb:"lg",noWrap:!0,children:[(0,W.jsx)(Q.TextInput,{value:I,onChange:T=>mt(D)(T.currentTarget.value),"aria-label":o("templates.name"),variant:"unstyled",rightSection:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faPen,size:"sm",color:"#9AA3AD"}),styles:{input:{fontSize:30,fontWeight:600,height:44,borderRadius:6,border:"1px dashed transparent",paddingLeft:6,"&:hover":{borderColor:"#CED4DA"},"&:focus":{borderColor:"#CED4DA",borderStyle:"solid"}}},sx:{flex:1}}),(0,W.jsxs)(Q.Group,{spacing:"xs",noWrap:!0,children:[(0,W.jsx)(Nb,{output:P.output,size:"lg"}),(0,W.jsx)(Q.Button,{variant:"default",leftIcon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faSliders}),onClick:()=>Ge(!0),children:o("templates.settings")}),(0,W.jsx)(Q.Button,{leftIcon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faFloppyDisk}),disabled:!ke||!I.trim(),loading:oe,onClick:ae,children:o("templates.save")})]})]}),P.pitchCount>0&&(0,W.jsx)(Q.Alert,{color:"blue",icon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faCircleInfo}),mb:"lg",children:o("templates.live_warning",{count:P.pitchCount})}),(0,W.jsx)(Q.Drawer,{opened:me,onClose:()=>Ge(!1),position:"left",size:440,padding:"lg",title:(0,W.jsx)(Q.Text,{weight:700,children:o("templates.settings")}),styles:{body:{maxHeight:"calc(100vh - 80px)",overflowY:"auto"}},children:(0,W.jsxs)(Q.Stack,{spacing:"sm",children:[(0,W.jsx)(Q.TextInput,{label:o("templates.name"),withAsterisk:!0,value:I,onChange:T=>mt(D)(T.currentTarget.value)}),(0,W.jsx)(Q.Textarea,{label:o("templates.description"),autosize:!0,minRows:2,value:x,onChange:T=>mt(G)(T.currentTarget.value)}),(0,W.jsx)(Q.Input.Wrapper,{label:o("templates.instructions"),description:o("templates.instructions_placeholder"),children:(0,W.jsx)(xa,{value:M,revision:`${P.id}-${N}`,onChange:mt(A)})}),!je&&(0,W.jsx)(Q.Tooltip,{label:o("format.save_first"),disabled:!ke,withinPortal:!0,children:(0,W.jsx)("div",{children:(0,W.jsx)(Q.Select,{label:o("format.label"),withinPortal:!0,disabled:ke||F,value:nn(L),data:Ku.map(T=>({value:T,label:n(_r(T))})),onChange:T=>T&&T!==nn(L)&&Vo(T)})})}),(0,W.jsx)(Q.TextInput,{label:o("templates.firm_name"),value:L.firmName,onChange:T=>mt(q)({...L,firmName:T.currentTarget.value})}),je&&(0,W.jsx)(aS,{value:L.logoUrl,onChange:T=>mt(q)({...L,logoUrl:T})}),(0,W.jsx)(Q.Select,{label:o("templates.font_heading"),data:kl,value:L.fonts.heading,searchable:!0,withinPortal:!0,itemComponent:lc,maxDropdownHeight:360,onChange:T=>T&&mt(q)({...L,fonts:{...L.fonts,heading:T}})}),(0,W.jsx)(Q.Select,{label:o("templates.font_body"),data:kl,value:L.fonts.body,searchable:!0,withinPortal:!0,itemComponent:lc,maxDropdownHeight:360,onChange:T=>T&&mt(q)({...L,fonts:{...L.fonts,body:T}})}),(0,W.jsx)(Q.Text,{size:"sm",weight:500,mt:4,children:o("templates.colors")}),(0,W.jsx)(Q.SimpleGrid,{cols:2,spacing:8,children:kb.map(T=>(0,W.jsx)(Q.ColorInput,{size:"xs",label:n(`templates.color.${T}`),format:"hex",withinPortal:!0,value:`#${L.colors[T]}`,onChange:j=>/^#[0-9a-f]{6}$/i.test(j)&&mt(q)({...L,colors:{...L.colors,[T]:j.slice(1).toUpperCase()}})},T))}),je&&Wi!==null&&Wi<4.5&&(0,W.jsx)(Q.Text,{size:"xs",color:"orange.8",children:o(Wi<3?"templates.contrast_title":"templates.contrast_label",{ratio:Wi.toFixed(1)})})]})}),(0,W.jsxs)(Q.Box,{children:[(0,W.jsxs)(Q.Group,{position:"apart",mb:"sm",children:[(0,W.jsx)(Q.Title,{order:4,children:o(je?"templates.sections_count":"templates.slides_count",{count:X.length})}),(0,W.jsxs)(Q.Group,{spacing:"xs",children:[je&&(0,W.jsx)(Q.SegmentedControl,{size:"xs",value:$e,onChange:T=>De(T),data:[{value:"sections",label:o("templates.site_sections")},{value:"preview",label:o("templates.site_preview")}]}),je?(0,W.jsxs)(Q.Menu,{withinPortal:!0,position:"bottom-end",width:320,children:[(0,W.jsx)(Q.Menu.Target,{children:(0,W.jsx)(Q.Button,{size:"xs",variant:"light",loading:v,leftIcon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faPlus}),children:o("templates.add_section")})}),(0,W.jsx)(Q.Menu.Dropdown,{children:Qa.map(T=>(0,W.jsxs)(Q.Menu.Item,{onClick:()=>Wa(T),children:[(0,W.jsx)(Q.Text,{size:"sm",weight:500,children:n(`slide_types.${T}`)}),(0,W.jsx)(Q.Text,{size:"xs",color:"dimmed",children:n(`templates.slide_type_help.${T}`)})]},T))})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Q.Button,{size:"xs",leftIcon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faPen}),disabled:!X.length,onClick:()=>X[0]&&ne(X[0]),children:o("templates.edit")}),(0,W.jsxs)(Q.Menu,{withinPortal:!0,position:"bottom-end",width:340,children:[(0,W.jsx)(Q.Menu.Target,{children:(0,W.jsx)(Q.Button,{size:"xs",variant:"light",loading:Ao,leftIcon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faFileArrowUp}),children:o("templates.upload_slide")})}),(0,W.jsxs)(Q.Menu.Dropdown,{sx:{overflowWrap:"anywhere"},children:[(0,W.jsxs)(Q.Menu.Item,{icon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faFileArrowUp}),onClick:()=>Ft.current?.click(),children:[(0,W.jsx)(Q.Text,{size:"sm",children:o("templates.upload_slide")}),(0,W.jsx)(Q.Text,{size:"xs",color:"dimmed",children:o("templates.upload_slide_help")})]}),(0,W.jsxs)(Q.Menu.Item,{icon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faFolderOpen}),onClick:()=>Wo.current?.click(),children:[(0,W.jsx)(Q.Text,{size:"sm",children:o("templates.upload_folder")}),(0,W.jsx)(Q.Text,{size:"xs",color:"dimmed",children:o("templates.upload_folder_help")})]}),(0,W.jsx)(Q.Menu.Divider,{}),ob.map(T=>(0,W.jsxs)(Q.Menu.Item,{icon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faAddressCard}),onClick:()=>Wa(nb[T],T),children:[(0,W.jsx)(Q.Text,{size:"sm",children:n(`templates.slide_designs.${T}.label`)}),(0,W.jsx)(Q.Text,{size:"xs",color:"dimmed",children:n(`templates.slide_designs.${T}.help`)})]},T))]})]})]}),(0,W.jsx)("input",{ref:Ft,type:"file",accept:".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation",hidden:!0,onChange:T=>Lo(T.target.files?.[0])}),(0,W.jsx)("input",{ref:Wo,type:"file",hidden:!0,multiple:!0,webkitdirectory:"",directory:"",onChange:T=>void Mn(T.target.files)})]})]}),je&&$e==="preview"?(0,W.jsx)(Q.Paper,{withBorder:!0,radius:"lg",sx:{overflow:"hidden",height:"calc(100vh - 210px)",overflowY:"auto"},children:(0,W.jsx)(Qb,{theme:L,meta:ro,sections:X.map(Pb),imageUrl:wt})}):(0,W.jsxs)(Q.Stack,{spacing:"md",children:[!je&&J.key!==co&&(0,W.jsx)(Zb,{slides:J.stored,groups:J.groups,repeats:J.repeats,theme:L,meta:ro,busy:bt,blocked:ke?o("templates.combine.save_first"):void 0,onCombine:T=>void Ar(T),onRemoveRepeats:T=>void Ko(T),onDismiss:()=>gn(J.key)}),je&&X.map((T,j)=>(0,W.jsx)(UT,{slide:T,index:j,count:X.length,revision:`${T.id}-${N}`,onPatch:K=>no(T.id,K),onSettings:K=>vu(T,K),canMove:K=>um(X,j,K),onMove:K=>ve(j,K),onRemove:()=>void S(T)},T.id)),!je&&X.map((T,j)=>(0,W.jsx)(WT,{slide:T,index:j,theme:L,meta:{...ro,slideNumber:j+1},showPlaceholders:!0,onOpen:()=>ne(T),onRename:K=>no(T.id,{name:K}),onRemove:X.length<=1?void 0:()=>void S(T),removeBlocked:X.length<=1?o("templates.slide_delete_last"):void 0,onMakeVersion:re(T).length>0?()=>{ee(T),Ee(null)}:void 0,makeVersionBlocked:re(T).length===0?o("templates.make_version.none"):void 0,onMoveUp:j>0?()=>void zt(T.id,-1):void 0,onMoveDown:j<X.length-1?()=>void zt(T.id,1):void 0},T.id)),!je&&(Er||Ao)&&(0,W.jsx)(Q.Paper,{p:"xl",radius:"md",onDragOver:T=>{T.preventDefault(),te(!0),T.dataTransfer.dropEffect="copy"},onDragLeave:()=>te(!1),onDrop:T=>{T.preventDefault(),T.dataTransfer.files.length>1?Mn(T.dataTransfer.files):Lo(T.dataTransfer.files[0])},sx:T=>({border:`2px dashed ${we?T.colors.primary[6]:T.colors.gray[4]}`,background:we?T.colors.primary[0]:"transparent",textAlign:"center",transition:"background 120ms, border-color 120ms"}),children:Ao?(0,W.jsxs)(Q.Group,{position:"center",spacing:"xs",children:[(0,W.jsx)(Q.Loader,{size:"sm"}),(0,W.jsx)(Q.Text,{size:"sm",children:o("templates.drop_uploading")})]}):(0,W.jsxs)(Q.Stack,{spacing:4,align:"center",sx:{pointerEvents:"none"},children:[(0,W.jsx)(Q.Text,{color:"primary",size:"xl",children:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faFileArrowUp})}),(0,W.jsx)(Q.Text,{weight:500,children:o("templates.drop_slide")}),(0,W.jsx)(Q.Text,{size:"xs",color:"dimmed",sx:{overflowWrap:"anywhere"},children:o("templates.upload_slide_help")})]})})]})]}),(0,W.jsx)(tI,{slide:_e?.slide??null,deleting:yt,onDelete:async T=>{if(_e){Pt(!0);try{let j=await fe(_e.slide,T);_e.resolve(j),Tt(null)}finally{Pt(!1)}}},onClose:()=>{_e?.resolve(!1),Tt(null)}}),(0,W.jsx)(Q.Modal,{opened:!!B,zIndex:1e3,onClose:()=>!de&&ee(null),title:(0,W.jsx)(Q.Text,{weight:700,children:o("templates.make_version.title")}),children:B&&(0,W.jsxs)(Q.Stack,{spacing:"md",children:[(0,W.jsx)(Q.Text,{size:"sm",children:o("templates.make_version.help",{slide:`${X.indexOf(B)+1}. ${B.name}`})}),(0,W.jsx)(Q.Select,{label:o("templates.make_version.target"),searchable:!0,withinPortal:!0,zIndex:1001,data:re(B).map(T=>({value:T.id,label:Xe(B,T)?`${X.indexOf(T)+1}. ${T.name}`:`${X.indexOf(T)+1}. ${T.name} (${o("templates.make_version.full",{max:Oo})})`,disabled:!Xe(B,T)})),value:Ve,onChange:Ee}),(0,W.jsxs)(Q.Group,{position:"right",children:[(0,W.jsx)(Q.Button,{variant:"default",disabled:de,onClick:()=>ee(null),children:o("templates.make_version.cancel")}),(0,W.jsx)(Q.Button,{disabled:!Ve,loading:de,onClick:()=>Ve&&Fn(B,Ve),children:o("templates.make_version.confirm")})]})]})}),(0,W.jsx)(Q.Modal,{opened:!!xo,onClose:()=>Vo(null),title:(0,W.jsx)(Q.Text,{weight:700,children:o("format.confirm_title")}),centered:!0,children:(0,W.jsxs)(Q.Stack,{spacing:"sm",children:[(0,W.jsx)(Q.Text,{size:"sm",children:o("format.confirm_text",{from:n(_r(nn(L))),to:xo?n(_r(xo)):""})}),P.pitchCount>0&&(0,W.jsx)(Q.Alert,{color:"orange",icon:(0,W.jsx)(Zo.FontAwesomeIcon,{icon:Xt.faCircleInfo}),children:o("format.live_pitches",{count:P.pitchCount})}),(0,W.jsxs)(Q.Group,{position:"right",mt:"sm",children:[(0,W.jsx)(Q.Button,{variant:"default",onClick:()=>Vo(null),children:o("common.cancel")}),(0,W.jsx)(Q.Button,{loading:F,onClick:Ka,children:o("format.convert")})]})]})}),R&&(0,W.jsx)(u0,{opened:!0,onClose:()=>ne(null),slide:R,theme:L,language:r.default,slideNumber:X.findIndex(T=>T.id===R.id)+1||void 0,slideCount:X.length,onSaved:Pl,onPrevious:U(-1),onNext:U(1),onRemove:X.length<=1?void 0:T=>O(R,T),removeBlocked:X.length<=1?o("templates.slide_delete_last"):void 0,onOpenSlide:T=>{let j=X.find(K=>K.id===T);j&&ne(j)}})]})}return v0(KH);})();
export default __klerq_remote.default;
