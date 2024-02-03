import{s as a,u as c,a as i,b as l,r as d,f,j as s,l as p,t as g}from"./index-0d636274.js";import{A as x}from"./AdvertCard-c103d243.js";const h=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`,m=a.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #f23224,
    0 0 10px #f23224,
    0 0 20px #f23224,
    0 0 40px #f23224,
    0 0 80px #f23224;
`,u=()=>{const t=c(),o=i(l);d.useEffect(()=>{t(f())},[t]);const r=()=>{t(p())},n=e=>{t(g(e))};return s.jsxs(h,{children:[s.jsx(m,{children:"Catalog Page"}),o.map(e=>s.jsx(x,{advert:e,onToggleFavorite:n},e.id)),s.jsx("button",{onClick:r,children:"Load more"})]})},C=u;export{C as default};
