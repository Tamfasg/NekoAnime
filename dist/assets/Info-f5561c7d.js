import{r as t,j as e,u as E,L as b,a as w}from"./index-f7ccdac8.js";import{F as p,m as _,n as S,o as F,b as A}from"./index-f8d6305d.js";/* empty css                */const q=({idn:o})=>{const[r,h]=t.useState(!1),[i,m]=t.useState([]),[s,x]=t.useState([]),[d,u]=t.useState(!1),[l,j]=t.useState([]);let n=`
query ($id: Int, $chid: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
    genres
    characters {
    nodes {
      image { 
          medium
        }
      }
    }
  }
  Character(id: $chid) {
    id
    image {
      large
      medium
    }
  }
}
`,c={id:o,chid:13042},g="https://graphql.anilist.co",y={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:n,variables:c})};t.useEffect(()=>{(async()=>{await fetch(g,y).then(N).then(v).catch(I).finally(()=>h(!0))})()},[!r]);function N(a){return a.json().then(function(f){return a.ok?f:Promise.reject(f)})}function v(a){m(a.data.Media),x(a.data.Media.genres),j(a.data.characters)}function I(a){a.errors[0].status===404&&u(!0)}return t.useEffect(()=>{console.log(l)},[l]),e.jsx(e.Fragment,{children:!d&&r?e.jsxs("div",{className:"w-fit h-full margin: 10px 2px,",children:[e.jsxs("div",{className:"flex flex-row name",children:[e.jsxs("h2",{className:"synone",children:[e.jsx("strong",{children:"Japanese"}),":"]}),e.jsx("p",{children:i==null?void 0:i.title.native},i==null?void 0:i.id)]}),e.jsxs("div",{className:"flex flex-row genre",children:[e.jsxs("h2",{className:"synone",children:[e.jsx("strong",{children:"Genre"}),":"]}),e.jsx("div",{id:"genreC",children:r&&(s==null?void 0:s.map(a=>e.jsxs("p",{children:[a," "]},a)))})]})]}):e.jsx(e.Fragment,{})})},D=()=>{const{id:o}=E(),[r,h]=t.useState(!1),[i,m]=t.useState(!0),[s,x]=t.useState([]),[d,u]=t.useState(),l=`https://consumet-api-mpty.onrender.com/anime/zoro/info?id=${o}`,j=async()=>{try{const n=await A.get(l).then(c=>c.data).catch(c=>{if(c.message==="Request failed with status code 404")return h(!0)}).finally(()=>m(!1));x(n),u(n.alID),console.error(r)}catch(n){console.error(n)}};return t.useEffect(()=>{j()},[i]),e.jsxs(e.Fragment,{children:[i?e.jsx(e.Fragment,{children:e.jsx(w,{})}):e.jsx(e.Fragment,{children:e.jsxs("main",{children:[e.jsxs("div",{className:"cardn",children:[e.jsx("div",{className:"imgC",children:e.jsx("img",{src:s.image,className:"animate__animated animate__fadeInDown animate__deplay-1s"})}),e.jsx("h1",{className:"animate__animated animate__fadeInLeft animate__deplay-2s",children:s.title}),e.jsxs("div",{className:"flex justify-evenly",id:"icon",children:[e.jsxs("div",{className:"type",children:[s.type==="TV"?e.jsx(p,{icon:_,className:"tv"}):s.type==="MOVIE"?e.jsx(p,{icon:S,className:"film"}):e.jsx(e.Fragment,{}),e.jsx("p",{children:s.type})]}),e.jsxs("div",{className:"sub",children:[e.jsx(p,{icon:F,className:"cc"}),e.jsx("p",{children:s.subOrDub})]}),e.jsxs("div",{className:"episodeN",children:[e.jsxs("p",{children:[s.episodes.length,"/",s.totalEpisodes]}),e.jsx("p",{children:"Eps"})]})]}),e.jsx("div",{className:"but",children:e.jsx(b,{to:`/watch/${s.episodes[0].id}`,state:{id:d},children:e.jsx("button",{children:"Watch Now"})},s.episodes.id)})]}),e.jsx("div",{className:"db"}),e.jsxs("div",{className:"second",children:[e.jsx("div",{className:"character"}),e.jsx("div",{className:"desc",children:e.jsx("p",{children:s.description})})]})]})}),i?e.jsx(e.Fragment,{}):e.jsx(q,{idn:d})]})};export{D as default};
