import{j as e,f as l,t as O,k as Q,r as N,S as J,i as R}from"./index-eCljlgW-.js";import{u as M,i as W,e as X,f as Y,g as ee}from"./Layout-CLuA73Dq.js";import{u as _}from"./useAsync-BLnx-5gf.js";import{u as E,M as L}from"./DrawerButton-tXa7dQCi.js";import{U as se}from"./UploadMany-D5bm--AA.js";import{N as le}from"./NotFound-Sn3b-FT4.js";import{a as te,P as U,c as ae,C as ie}from"./ProductServices-DyjR-0YH.js";import{P as re}from"./PageTitle-Dv34tRwz.js";import{P as V}from"./ProductDrawer-CP8ST-ZU.js";import{C as H,S as ne,B as oe}from"./BulkActionDrawer-CYX6KEn7.js";import{D as $}from"./DeleteModal-BMrh0Yv2.js";import{E as de}from"./EditDeleteButton--X3X8gaA.js";import{T as ce}from"./Tooltip-6CKMISal.js";import{a as F,n as I}from"./toast-B6PEetj3.js";import{u as xe}from"./useDisableForDemo-3Yn1Itnm.js";import{T as me}from"./TableLoading-DCqgu7qm.js";import{A as ge}from"./AnimatedContent-uA-MGJA2.js";import"./iconBase-C8O02EAZ.js";import"./SelectLanguageTwo-CALhjDS1.js";import"./spinner-CkndCogW.js";import"./exportFromJSON-fDIoOtpr.js";import"./index-DF7ydXMC.js";import"./ParentCategory-DUNG3mn6.js";import"./index-D3xxFJjS.js";import"./index.esm-Z-EGr4Ry.js";import"./InputArea-CpsUikjn.js";import"./LabelArea-CKGaWpTG.js";import"./InputValue-UhKWR0Jo.js";import"./useTranslationValue-Bzejfx2N.js";import"./Uploader-DGGggdPK.js";import"./_commonjs-dynamic-modules-LM44EJN2.js";import"./index.prod-DLjbbcrz.js";import"./CouponServices-ClgVJs1S.js";import"./CurrencyServices-Cv5sLHdT.js";import"./SwitchToggle-CSUCzwig.js";import"./AdminServices-T6vH5A2p.js";import"./react-tooltip.min-BQYePIUb.js";const he=({products:g,isCheck:r,setIsCheck:x})=>{const{title:T,serviceId:d,handleModalOpen:a,handleUpdate:S}=E(),{currency:p,showingTranslateValue:h,getNumberTwo:f}=M(),b=s=>{const{id:u,checked:w}=s.target;x([...r,u]),w||x(r.filter(y=>y!==u))};return e.jsxs(e.Fragment,{children:[(r==null?void 0:r.length)<1&&e.jsx($,{id:d,title:T}),(r==null?void 0:r.length)<2&&e.jsx(L,{children:e.jsx(V,{currency:p,id:d})}),e.jsx(l.TableBody,{children:g==null?void 0:g.map((s,u)=>{var w,y,A,v,D,t,c;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{children:e.jsx(H,{type:"checkbox",name:(w=s==null?void 0:s.title)==null?void 0:w.en,id:s._id,handleClick:b,isChecked:r==null?void 0:r.includes(s._id)})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[s!=null&&s.image[0]?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:s==null?void 0:s.image[0],alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsx("div",{children:e.jsx("h2",{className:`text-sm font-medium ${(s==null?void 0:s.title.length)>30?"wrap-long-title":""}`,children:(y=h(s==null?void 0:s.title))==null?void 0:y.substring(0,28)})})]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:h((A=s==null?void 0:s.category)==null?void 0:A.name)})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[p,s!=null&&s.isCombination?f((v=s==null?void 0:s.variants[0])==null?void 0:v.originalPrice):f((D=s==null?void 0:s.prices)==null?void 0:D.originalPrice)]})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[p,s!=null&&s.isCombination?f((t=s==null?void 0:s.variants[0])==null?void 0:t.price):f((c=s==null?void 0:s.prices)==null?void 0:c.price)]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:s.stock})}),e.jsx(l.TableCell,{children:s.stock>0?e.jsx(l.Badge,{type:"success",children:O("Selling")}):e.jsx(l.Badge,{type:"danger",children:O("SoldOut")})}),e.jsx(l.TableCell,{children:e.jsx(Q,{to:`/product/${s._id}`,className:"flex justify-center text-gray-400 hover:text-emerald-600",children:e.jsx(ce,{id:"view",Icon:W,title:O("DetailsTbl"),bgColor:"#10B981"})})}),e.jsx(l.TableCell,{className:"text-center",children:e.jsx(ne,{id:s._id,status:s.status})}),e.jsx(l.TableCell,{children:e.jsx(de,{id:s._id,product:s,isCheck:r,handleUpdate:S,handleModalOpen:a,title:h(s==null?void 0:s.title)})})]},u+1)})})]})},je={type:"object",properties:{categories:{type:"array"},image:{type:"array"},tag:{type:"array"},variants:{type:"array"},show:{type:"array"},status:{type:"string"},prices:{type:"object"},isCombination:{type:"boolean"},title:{type:"object"},productId:{type:"string"},slug:{type:"string"},category:{type:"object"},stock:{type:"number"},description:{type:"object"}},required:["categories","category","prices","title"]},pe=g=>{const r=new te({allErrors:!0}),{setLoading:x,setIsUpdate:T}=N.useContext(J),[d]=N.useState([]),[a,S]=N.useState([]),[p,h]=N.useState(""),[f,b]=N.useState(!1),{handleDisableForDemo:s}=xe();return{data:g,filename:p,isDisabled:f,handleSelectFile:async t=>{var C;t.preventDefault();const c=new FileReader,i=(C=t.target)==null?void 0:C.files[0];i&&i.type==="application/json"?(h(i==null?void 0:i.name),b(!0),c.readAsText(i,"UTF-8"),c.onload=m=>{const P=JSON.parse(m.target.result).map(n=>({categories:n.categories,image:n.image,barcode:n.barcode,tag:n.tag,variants:n.variants,status:n.status,prices:n.prices,isCombination:JSON.parse(n.isCombination.toLowerCase()),title:n.title,productId:n.productId,slug:n.slug,sku:n.sku,category:n.category,stock:n.stock,description:n.description}));S(P)}):i&&i.type==="text/csv"?(h(i==null?void 0:i.name),b(!0),c.onload=async m=>{const j=m.target.result,n=(await ae().fromString(j)).map(o=>({categories:JSON.parse(o.categories),image:JSON.parse(o.image),barcode:o.barcode,tag:JSON.parse(o.tag),variants:JSON.parse(o.variants),status:o.status,prices:JSON.parse(o.prices),isCombination:JSON.parse(o.isCombination.toLowerCase()),title:JSON.parse(o.title),productId:o.productId,slug:o.slug,sku:o.sku,category:JSON.parse(o.category),stock:JSON.parse(o.stock),description:JSON.parse(o.description)}));S(n)},c.readAsText(i)):(h(i==null?void 0:i.name),b(!0),F("Unsupported file type!"))},serviceData:g,handleOnDrop:t=>{for(let c=0;c<t.length;c++)d.push(t[c].data)},handleUploadProducts:()=>{if(!s())if(d.length<1)F("Please upload/select csv file first!");else{if(s())return;U.addAllProducts(d).then(t=>{I(t.message)}).catch(t=>F(t.message))}},handleRemoveSelectFile:t=>{h(""),S([]),setTimeout(()=>b(!1),1e3)},handleUploadMultiple:t=>{if(!s())if(a.length>1){x(!0);let c=a.map(m=>r.validate(je,m));const i=m=>m===!0;c.every(i)?U.addAllProducts(a).then(m=>{T(!0),x(!1),I(m.message)}).catch(m=>{x(!1),F(m.message)}):(x(!1),F("Please enter valid data!"))}else x(!1),F("Please select a valid json, csv & xls file first!")}}},fe=({setCategory:g})=>{const{t:r}=R(),{data:x}=_(ie.getAllCategories),{showingTranslateValue:T}=M();return e.jsx(e.Fragment,{children:e.jsxs(l.Select,{onChange:d=>g(d.target.value),children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:r("Category")}),x==null?void 0:x.map(d=>e.jsx("option",{value:d._id,children:T(d==null?void 0:d.name)},d._id))]})})},ss=()=>{const{title:g,allId:r,serviceId:x,handleDeleteMany:T,handleUpdateMany:d}=E(),{t:a}=R(),{toggleDrawer:S,lang:p,currentPage:h,handleChangePage:f,searchText:b,category:s,setCategory:u,searchRef:w,handleSubmitForAll:y,sortedField:A,setSortedField:v,limitData:D}=N.useContext(J),{data:t,loading:c,error:i}=_(()=>U.getAllProducts({page:h,limit:D,category:s,title:b,price:A})),[C,m]=N.useState(!1),[j,P]=N.useState([]),n=()=>{m(!C),P(t==null?void 0:t.products.map(B=>B._id)),C&&P([])},o=()=>{u(""),v(""),w.current.value=""},{serviceData:k,filename:q,isDisabled:Z,handleSelectFile:z,handleUploadMultiple:G,handleRemoveSelectFile:K}=pe(t==null?void 0:t.products);return e.jsxs(e.Fragment,{children:[e.jsx(re,{children:a("ProductsPage")}),e.jsx($,{ids:r,setIsCheck:P,title:g}),e.jsx(oe,{ids:r,title:"Products"}),e.jsx(L,{children:e.jsx(V,{id:x})}),e.jsxs(ge,{children:[e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:y,className:"py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex",children:[e.jsx("div",{className:"flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(se,{title:"Products",filename:q,isDisabled:Z,totalDoc:t==null?void 0:t.totalDoc,handleSelectFile:z,handleUploadMultiple:G,handleRemoveSelectFile:K})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{disabled:j.length<1,onClick:()=>d(j),className:"w-full rounded-md h-12 btn-gray text-gray-600",children:[e.jsx("span",{className:"mr-2",children:e.jsx(X,{})}),a("BulkAction")]})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{disabled:(j==null?void 0:j.length)<1,onClick:()=>T(j,t.products),className:"w-full rounded-md h-12 bg-red-300 disabled btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(Y,{})}),a("Delete")]})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{onClick:S,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ee,{})}),a("AddProduct")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:y,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(l.Input,{ref:w,type:"search",name:"search",placeholder:"Search Product"}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(fe,{setCategory:u,lang:p})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Select,{onChange:B=>v(B.target.value),children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:a("Price")}),e.jsx("option",{value:"low",children:a("LowtoHigh")}),e.jsx("option",{value:"high",children:a("HightoLow")}),e.jsx("option",{value:"published",children:a("Published")}),e.jsx("option",{value:"unPublished",children:a("Unpublished")}),e.jsx("option",{value:"status-selling",children:a("StatusSelling")}),e.jsx("option",{value:"status-out-of-stock",children:a("StatusStock")}),e.jsx("option",{value:"date-added-asc",children:a("DateAddedAsc")}),e.jsx("option",{value:"date-added-desc",children:a("DateAddedDesc")}),e.jsx("option",{value:"date-updated-asc",children:a("DateUpdatedAsc")}),e.jsx("option",{value:"date-updated-desc",children:a("DateUpdatedDesc")})]})}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{layout:"outline",onClick:o,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})})]}),c?e.jsx(me,{row:12,col:7,width:160,height:20}):i?e.jsx("span",{className:"text-center mx-auto text-red-500",children:i}):(k==null?void 0:k.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(H,{type:"checkbox",name:"selectAll",id:"selectAll",isChecked:C,handleClick:n})}),e.jsx(l.TableCell,{children:a("ProductNameTbl")}),e.jsx(l.TableCell,{children:a("CategoryTbl")}),e.jsx(l.TableCell,{children:a("PriceTbl")}),e.jsx(l.TableCell,{children:"Sale Price"}),e.jsx(l.TableCell,{children:a("StockTbl")}),e.jsx(l.TableCell,{children:a("StatusTbl")}),e.jsx(l.TableCell,{className:"text-center",children:a("DetailsTbl")}),e.jsx(l.TableCell,{className:"text-center",children:a("PublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:a("ActionsTbl")})]})}),e.jsx(he,{lang:p,isCheck:j,products:t==null?void 0:t.products,setIsCheck:P})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:t==null?void 0:t.totalDoc,resultsPerPage:D,onChange:f,label:"Product Page Navigation"})})]}):e.jsx(le,{title:"Product"})]})};export{ss as default};
