import{r as c,j as o}from"./index-0d636274.js";const d=({advert:e,onToggleFavorite:r})=>{const[n,s]=c.useState(!1),l=()=>{r(e.id)},t=()=>{s(!0)},i=()=>{s(!1)};return o.jsxs("div",{children:[o.jsx("img",{src:e.img,alt:e.model}),o.jsxs("h3",{children:[e.make," ",e.model]}),o.jsxs("p",{children:[e.rentalPrice," per hour"]}),o.jsx("button",{onClick:l,children:e.isFavorite?"Remove from Favorites":"Add to Favorites"}),o.jsx("button",{onClick:t,children:"Learn more"}),n&&o.jsx("div",{children:o.jsx("button",{onClick:i,children:"Close"})})]})};export{d as A};
