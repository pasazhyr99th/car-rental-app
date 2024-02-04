import{s as n,a as s,r as u,j as e}from"./index-0eb31562.js";const R=i=>i.adverts.list,O=i=>i.adverts.favorites,p="/car-rental-app/assets/sprite-4cf49c6b.svg",m=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${i=>i.isOpen?"block":"none"};
  z-index: 1000;
`,w=n.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 24px;
  width: 541px;
  height: 752px;

  background-color: ${s.whiteColor};
  padding: 40px;
  display: ${i=>i.isOpen?"block":"none"};
  z-index: 1001;
`,C=n.button`
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
`,y=n.svg`
  width: 24px;
  height: 24px;
  stroke: ${s.blackMain};
`,k=n.img`
  width: 100%;
  height: 314px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`,$=n.p`
  margin-top: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,x=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 8px;
`,M=n.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: 1.43;
`,a=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 6px;

  width: 100%;
  height: 16px;

  overflow: hidden;
`,t=n.li`
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
`,g=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43%;
  color: #121417;
`,z=n.a`
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
`,F=({isOpen:i,onClose:c,advert:o})=>{const d=()=>{c()};return u.useEffect(()=>{const r=h=>{h.key==="Escape"&&d()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[d]),e.jsx("div",{children:e.jsx(m,{onClick:c,isOpen:i,children:e.jsxs(w,{isOpen:i,children:[e.jsx(C,{onClick:c,children:e.jsx(y,{children:e.jsx("use",{href:`${p}#icon-close`})})}),e.jsx(k,{src:o.img,alt:o.model}),e.jsxs($,{children:[o.make," ",e.jsx("span",{style:{color:"#3470FF"},children:o.model}),","," ",o.year]}),e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(t,{children:o.address.split(",")[1]}),e.jsx(t,{children:o.address.split(",")[2]}),e.jsxs(t,{children:["Id: ",o.id]}),e.jsxs(t,{children:["Year: ",o.year]}),e.jsxs(t,{children:["Type: ",o.type]})]}),e.jsxs(a,{children:[e.jsxs(t,{children:["Fuel Consumption: ",o.fuelConsumption]}),e.jsxs(t,{children:["Engine Size: ",o.engineSize]})]})]}),e.jsx(M,{children:o.description}),e.jsx(g,{children:"Accessories and functionalities:"}),e.jsxs(x,{children:[e.jsx(a,{children:o.accessories.map(r=>e.jsx(t,{children:r},r))}),e.jsx(a,{children:o.functionalities.map(r=>e.jsx(t,{children:r},r))})]}),e.jsx(g,{children:"Rental Conditions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Minimum age: ",e.jsx("span",{children:o.rentalConditions.slice(13,16)})]}),e.jsx("li",{children:o.rentalConditions.split(`
`)[1]}),e.jsx("li",{children:o.rentalConditions.split(`
`)[2]}),e.jsxs("li",{children:["Mileage: ",e.jsx("span",{children:o.mileage.toLocaleString("en-US")})]}),e.jsxs("li",{children:["Price: ",e.jsx("span",{children:o.rentalPrice})]})]}),e.jsx(z,{href:"tel:+380730000000",children:"Rental car"})]})})})},I=n.div`
  position: relative;

  width: 274px;
  height: 426px;
  box-sizing: border-box;
`,L=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  overflow: hidden;
`,T=n.button`
  position: absolute;
  right: 12px;
  top: 12px;

  padding: 0;

  border: none;
  outline: none;

  background-color: transparent;
`,B=n.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
`,D=n.svg`
  width: 18px;
  height: 18px;
  stroke: ${s.blueMainColor};
  fill: ${s.blueMainColor};
`,E=n.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,j=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,f=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;

  margin-top: 8px;

  width: 100%;
  height: 16px;

  overflow: hidden;
`,l=n.li`
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
`,S=n.button`
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
`,P=({advert:i,onToggleFavorite:c})=>{const[o,d]=u.useState(!1),r=()=>{c(i.id)},h=()=>{d(!0)},b=()=>{d(!1)};return e.jsxs(I,{children:[e.jsx(T,{onClick:r,children:i.isFavorite?e.jsx(D,{children:e.jsx("use",{href:`${p}#icon-heart`})}):e.jsx(B,{children:e.jsx("use",{href:`${p}#icon-heart`})})}),e.jsx(E,{src:i.img,alt:i.model}),e.jsxs(L,{children:[e.jsxs(j,{children:[i.make," ",i.model.length<=8?e.jsx("span",{style:{color:"#3470FF"},children:i.model}):"",", ",i.year]}),e.jsx(j,{children:i.rentalPrice})]}),e.jsxs(f,{children:[e.jsx(l,{children:i.address.split(",")[1]}),e.jsx(l,{children:i.address.split(",")[2]}),e.jsx(l,{children:i.rentalCompany})]}),e.jsxs(f,{children:[e.jsx(l,{children:i.type}),e.jsx(l,{children:i.model}),e.jsx(l,{children:i.mileage}),e.jsx(l,{children:i.accessories[0]})]}),e.jsx(S,{onClick:h,children:"Learn more"}),o&&e.jsx(F,{isOpen:o,onClose:b,advert:i})]})};export{P as A,O as a,R as s};
