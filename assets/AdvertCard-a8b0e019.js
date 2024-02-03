import{s,d as r,r as g,j as o}from"./index-fac79a1a.js";const k=e=>e.adverts.list,y=e=>e.adverts.favorites,n="/car-rental-app/assets/sprite-cca42520.svg",j=s.div`
  position: relative;

  width: 274px;
  box-sizing: border-box;
`,b=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,f=s.button`
  position: absolute;
  right: 12px;
  top: 12px;

  padding: 0;

  border: none;

  background-color: transparent;
`,u=s.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
`,m=s.svg`
  width: 18px;
  height: 18px;
  stroke: ${r.blueMainColor};
  fill: ${r.blueMainColor};
`,w=s.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,l=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,a=s.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;

  margin-top: 8px;

  width: 100%;
  max-height: 40px;
`,i=s.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`,C=s.button`
  margin-top: 28px;
  padding: 12px 50px;

  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${r.whiteColor};

  border: 1px solid ${r.blueMainColor};
  border-radius: 12px;

  background-color: ${r.blueMainColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: ${r.blueHoverColor};
  }
`,F=({advert:e,onToggleFavorite:c})=>{const[d,t]=g.useState(!1),p=()=>{c(e.id)},x=()=>{t(!0)},h=()=>{t(!1)};return o.jsxs(j,{children:[o.jsx(f,{onClick:p,children:e.isFavorite?o.jsx(m,{children:o.jsx("use",{href:`${n}#icon-heart`})}):o.jsx(u,{children:o.jsx("use",{href:`${n}#icon-heart`})})}),o.jsx(w,{src:e.img,alt:e.model}),o.jsxs(b,{children:[o.jsxs(l,{children:[e.make," ",o.jsx("span",{style:{color:"#3470FF"},children:e.model}),", ",e.year]}),o.jsx(l,{children:e.rentalPrice})]}),o.jsxs(a,{children:[o.jsx(i,{children:e.address.split(",")[1]}),o.jsx(i,{children:e.address.split(",")[2]}),o.jsx(i,{children:e.rentalCompany})]}),o.jsxs(a,{children:[o.jsx(i,{children:e.type}),o.jsx(i,{children:e.model}),o.jsx(i,{children:e.mileage}),o.jsx(i,{children:e.accessories[0]})]}),o.jsx(C,{onClick:x,children:"Learn more"}),d&&o.jsx("div",{children:o.jsx("button",{onClick:h,children:"Close"})})]})};export{F as A,y as a,k as s};
