import{u as F,r as a,j as s}from"./index-f7ccdac8.js";import{b as y,F as l,c as P,d as L,e as I,g as R,h as V,i as T,j as U}from"./index-f8d6305d.js";function A(d){const p=`https://consumet-api-mpty.onrender.com/anime/zoro/watch?episodeId=${d}&server=vidcloud`;return async()=>await(await y.get(p)).data}const B=()=>{var b,v;const{id:d}=F(),[p,m]=a.useState([]),[o,f]=a.useState(!1),[x]=a.useState([]),[c]=a.useState([]),i=a.useRef(null),j=a.useRef(null);let n={big:"2xl",medium:"xl",small:"lg"};const r={first:"#0544b0",second:"#5E4CB6"},[N,h]=a.useState(null),[g,E]=a.useState(null);a.useEffect(()=>{A(d)().then(e=>{m(e.sources),f(!0),e.subtitles.forEach(u=>{x.push({url:u.url,lang:u.lang})})})},[d,!o]),a.useEffect(()=>{const t=async e=>{try{const k=(await y.get(e)).data;E(k)}catch(u){console.error(u)}};x.map(e=>{e.lang==="Arabic"?c.push({url:e.url,lang:e.lang}):e.lang==="English"&&c.push({url:e.url,lang:e.lang})}),o&&t(c[0].url)},[o,x,c]),(b=i.current)==null||b.addEventListener("play",()=>{h(!0)}),(v=i.current)==null||v.addEventListener("pause",()=>{h(!1)});let C=()=>{var t,e;(t=i.current)!=null&&t.paused?i.current.play():(e=i.current)==null||e.pause()},w=()=>{console.log("Prev Episode")},z=()=>{console.log("Next Episode")},S=()=>{var t;screen.orientation.type=="landscape-primary",(t=j.current)==null||t.requestFullscreen(),console.log(document.fullscreenEnabled)};return s.jsxs("div",{className:"relative",id:"videoC",ref:j,children:[s.jsx("div",{className:"PlayerControle",children:s.jsxs("div",{className:"Controle",children:[s.jsx("div",{className:"TimelineCountainer",children:s.jsx("div",{className:"Timeline"})}),s.jsxs("div",{className:"Start",children:[s.jsx("button",{children:s.jsx(l,{icon:P,size:n.small,color:r.first})}),s.jsxs("div",{className:"Time",children:[s.jsx("span",{className:"move",children:"00.00"}),s.jsx("span",{className:"separater",children:"/"}),s.jsx("span",{className:"duration",children:"00.00"})]})]}),s.jsxs("div",{className:"center",children:[s.jsx("button",{onClick:w,children:s.jsx(l,{icon:L,color:r.second,size:n.medium})}),s.jsx("button",{onClick:C,children:N?s.jsx(l,{icon:I,color:r.first,size:n.big}):s.jsx(l,{icon:R,color:r.first,size:n.big})}),s.jsx("button",{children:s.jsx(l,{onClick:z,icon:V,color:r.second,size:n.medium})})]}),s.jsxs("div",{className:"end",children:[s.jsx("button",{children:s.jsx(l,{icon:T,color:r.first,size:n.small})}),s.jsx("button",{onClick:S,children:s.jsx(l,{icon:U,color:r.first,size:n.small})})]})]})}),s.jsxs("video",{ref:i,children:[o&&s.jsx("source",{src:p[0].url,type:"application/x-mpegURL",lang:"auto"}),g&&o?s.jsx("track",{src:`data:text/vtt;charset=utf-8,${encodeURIComponent(g)}`,kind:"subtitles",label:c[0].lang,srcLang:c[0].label}):s.jsx(s.Fragment,{})]})]})},G=()=>s.jsx("div",{children:s.jsx(B,{})});export{G as default};