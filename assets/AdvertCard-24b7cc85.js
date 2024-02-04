import{s as e,a as s,r as w,j as o}from"./index-965d89c7.js";const v=n=>n.adverts.list,K=n=>n.adverts.favorites,f="/car-rental-app/assets/sprite-4cf49c6b.svg",C=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${n=>n["data-isopen"]?"block":"none"};
  z-index: 1000;
`,y=e.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 24px;
  width: 541px;

  background-color: ${s.whiteColor};
  padding: 35px;

  display: ${n=>n["data-isopen"]?"block":"none"};
  z-index: 1001;
`,k=e.button`
  position: absolute;
  right: 15px;
  top: 15px;

  width: 24px;
  height: 24px;

  padding: 0;

  border: none;
  outline: none;
  border-radius: 50%;

  background-color: transparent;

  &:hover {
    background-color: ${s.lightGreyTextColor};
  }
`,$=e.svg`
  width: 24px;
  height: 24px;
  stroke: ${s.blackMain};
`,M=e.img`
  width: 100%;
  height: 248px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`,z=e.p`
  margin-top: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,j=e.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 8px;
`,F=e.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: 1.43;
`,p=e.ul`
  display: flex;
  flex-wrap: wrap;

  width: 461px;

  overflow: hidden;
`,r=e.li`
  color: ${s.greyTagColor};
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
`,u=e.p`
  margin-top: 24px;
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
`,I=e.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`,d=e.li`
  padding: 6px 12px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;

  background-color: ${s.lightGreyBackground};

  border-radius: 35px;
`,g=e.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${s.blueMainColor};
`,L=e.button`
  margin-top: 16px;
  padding: 12px 50px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${s.whiteColor};

  border: 1px solid ${s.blueMainColor};
  border-radius: 12px;

  background-color: ${s.blueMainColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: ${s.blueHoverColor};
  }
`,B="+380730000000",T=({isOpen:n,onClose:c,advert:i})=>{const a=()=>{c()};w.useEffect(()=>{const t=x=>{x.key==="Escape"&&a()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[a]);const h=()=>{window.location.href=`tel:${B}`};return o.jsxs("div",{children:[o.jsx(C,{onClick:c,"data-isopen":n}),o.jsxs(y,{"data-isopen":n,children:[o.jsx(k,{onClick:c,children:o.jsx($,{children:o.jsx("use",{href:`${f}#icon-close`})})}),o.jsx(M,{src:i.img,alt:i.model}),o.jsxs(z,{children:[i.make," ",o.jsx("span",{style:{color:"#3470FF"},children:i.model}),", ",i.year]}),o.jsxs(j,{children:[o.jsxs(p,{children:[o.jsx(r,{children:i.address.split(",")[1]}),o.jsx(r,{children:i.address.split(",")[2]}),o.jsxs(r,{children:["Id: ",i.id]}),o.jsxs(r,{children:["Year: ",i.year]}),o.jsxs(r,{children:["Type: ",i.type]})]}),o.jsxs(p,{children:[o.jsxs(r,{children:["Fuel Consumption: ",i.fuelConsumption]}),o.jsxs(r,{children:["Engine Size: ",i.engineSize]})]})]}),o.jsx(F,{children:i.description}),o.jsx(u,{children:"Accessories and functionalities:"}),o.jsxs(j,{children:[o.jsx(p,{children:i.accessories.map(t=>o.jsx(r,{children:t},t))}),o.jsx(p,{children:i.functionalities.map(t=>o.jsx(r,{children:t},t))})]}),o.jsx(u,{children:"Rental Conditions:"}),o.jsxs(I,{children:[o.jsxs(d,{children:["Minimum age:"," ",o.jsx(g,{children:i.rentalConditions.slice(13,16)})]}),o.jsx(d,{children:i.rentalConditions.split(`
`)[1]}),o.jsx(d,{children:i.rentalConditions.split(`
`)[2]}),o.jsxs(d,{children:["Mileage:"," ",o.jsx(g,{children:i.mileage.toLocaleString("en-US")})]}),o.jsxs(d,{children:["Price: ",o.jsx(g,{children:i.rentalPrice})]})]}),o.jsx(L,{onClick:h,children:"Rental car"})]})]})},D=e.div`
  position: relative;

  width: 274px;
  height: 426px;
  box-sizing: border-box;
`,E=e.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  overflow: hidden;
`,S=e.button`
  position: absolute;
  right: 12px;
  top: 12px;

  padding: 0;

  border: none;
  outline: none;

  background-color: transparent;
`,A=e.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
`,R=e.svg`
  width: 18px;
  height: 18px;
  stroke: ${s.blueMainColor};
  fill: ${s.blueMainColor};
`,G=e.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,b=e.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,m=e.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;

  margin-top: 8px;

  width: 100%;
  height: 16px;

  overflow: hidden;
`,l=e.li`
  color: ${s.greyTagColor};
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
`,P=e.button`
  margin-top: 28px;
  padding: 12px 50px;

  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${s.whiteColor};

  border: 1px solid ${s.blueMainColor};
  border-radius: 12px;
  outline: none;

  background-color: ${s.blueMainColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: ${s.blueHoverColor};
  }
`,N=({advert:n,onToggleFavorite:c})=>{const[i,a]=w.useState(!1),h=()=>{c(n.id)},t=()=>{a(!0)},x=()=>{a(!1)};return o.jsxs(D,{children:[o.jsx(S,{onClick:h,children:n.isFavorite?o.jsx(R,{children:o.jsx("use",{href:`${f}#icon-heart`})}):o.jsx(A,{children:o.jsx("use",{href:`${f}#icon-heart`})})}),o.jsx(G,{src:n.img,alt:n.model}),o.jsxs(E,{children:[o.jsxs(b,{children:[n.make," ",n.model.length<=8?o.jsx("span",{style:{color:"#3470FF"},children:n.model}):"",", ",n.year]}),o.jsx(b,{children:n.rentalPrice})]}),o.jsxs(m,{children:[o.jsx(l,{children:n.address.split(",")[1]}),o.jsx(l,{children:n.address.split(",")[2]}),o.jsx(l,{children:n.rentalCompany})]}),o.jsxs(m,{children:[o.jsx(l,{children:n.type}),o.jsx(l,{children:n.model}),o.jsx(l,{children:n.mileage}),o.jsx(l,{children:n.accessories[0]})]}),o.jsx(P,{onClick:t,children:"Learn more"}),i&&o.jsx(T,{isOpen:i,onClose:x,advert:n})]})};export{N as A,K as a,v as s};
