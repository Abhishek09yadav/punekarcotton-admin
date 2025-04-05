import{r as j,S as D,j as e,f as s,k,t as A,i as E}from"./index-eCljlgW-.js";import{U as P}from"./UploadMany-D5bm--AA.js";import{S as F,d as I,i as U}from"./Layout-CLuA73Dq.js";import{T,D as M,u as B,M as R}from"./DrawerButton-tXa7dQCi.js";import{D as L}from"./DeleteModal-BMrh0Yv2.js";import{T as Y}from"./Tooltip-6CKMISal.js";import{u as _,E as u}from"./index.esm-Z-EGr4Ry.js";import{I as b}from"./InputArea-CpsUikjn.js";import{L as f}from"./LabelArea-CKGaWpTG.js";import{b as w}from"./ProductServices-DyjR-0YH.js";import{a as v,n as q}from"./toast-B6PEetj3.js";import{E as O}from"./EditDeleteButton--X3X8gaA.js";import{T as V}from"./TableLoading-DCqgu7qm.js";import{N as H}from"./NotFound-Sn3b-FT4.js";import{P as J}from"./PageTitle-Dv34tRwz.js";import{u as Z}from"./useAsync-BLnx-5gf.js";import{u as $}from"./useFilter-ChDoaq5n.js";import{A as z}from"./AnimatedContent-uA-MGJA2.js";import"./exportFromJSON-fDIoOtpr.js";import"./iconBase-C8O02EAZ.js";import"./spinner-CkndCogW.js";import"./SelectLanguageTwo-CALhjDS1.js";import"./AdminServices-T6vH5A2p.js";import"./CouponServices-ClgVJs1S.js";import"./CurrencyServices-Cv5sLHdT.js";import"./useDisableForDemo-3Yn1Itnm.js";import"./react-tooltip.min-BQYePIUb.js";import"./index-DF7ydXMC.js";const G=l=>{const[i,n]=j.useState(""),[c,t]=j.useState(!1),{closeDrawer:a,setIsUpdate:h}=j.useContext(D),{register:C,handleSubmit:y,setValue:x,formState:{errors:N}}=_(),g=async d=>{var p,r;try{t(!0);const o={name:d.name,email:d.email,phone:d.phone,address:d.address};if(l){const m=await w.updateCustomer(l,o);h(!0),q(m.message),a()}t(!1)}catch(o){v(((r=(p=o==null?void 0:o.response)==null?void 0:p.data)==null?void 0:r.message)||(o==null?void 0:o.message)),a()}};return j.useEffect(()=>{l&&(async()=>{var d,p;try{const r=await w.getCustomerById(l);r&&(x("name",r.name),x("phone",r.phone),x("email",r.email),x("address",r.address))}catch(r){v(((p=(d=r==null?void 0:r.response)==null?void 0:d.data)==null?void 0:p.message)||(r==null?void 0:r.message))}})()},[l,x]),{register:C,handleSubmit:y,onSubmit:g,errors:N,setImageUrl:n,imageUrl:i,isSubmitting:c}},K=({id:l})=>{const{register:i,handleSubmit:n,onSubmit:c,errors:t,isSubmitting:a}=G(l);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:l?e.jsx(T,{title:"Update Customer",description:"Update your Customer necessary information from here"}):e.jsx(T,{title:"Add Customer",description:"Add your Customer necessary information from here"})}),e.jsx(F,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:n(c),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{required:!0,register:i,label:"Name",name:"name",type:"text",placeholder:"Name"}),e.jsx(u,{errorName:t.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Email"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{required:!0,register:i,label:"Email",name:"email",type:"email",placeholder:"Email"}),e.jsx(u,{errorName:t.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Phone"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:i,label:"Phone",name:"phone",type:"text",placeholder:"Phone"}),e.jsx(u,{errorName:t.phone})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Address"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:i,label:"Address",name:"address",type:"text",placeholder:"Address"}),e.jsx(u,{errorName:t.address})]})]})]}),e.jsx(M,{id:l,title:"Customer",isSubmitting:a})]})})]})},Q=({customers:l})=>{const{title:i,serviceId:n,handleModalOpen:c,handleUpdate:t}=B();return e.jsxs(e.Fragment,{children:[e.jsx(L,{id:n,title:i}),e.jsx(R,{children:e.jsx(K,{id:n})}),e.jsx(s.TableBody,{children:l==null?void 0:l.map(a=>{var h;return e.jsxs(s.TableRow,{children:[e.jsx(s.TableCell,{children:e.jsxs("span",{className:"font-semibold uppercase text-xs",children:[" ",(h=a==null?void 0:a._id)==null?void 0:h.substring(20,24)]})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:I(a.createdAt).format("MMM D, YYYY")})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:a.name})}),e.jsxs(s.TableCell,{children:[e.jsx("span",{className:"text-sm",children:a.email})," "]}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm font-medium",children:a.phone})}),e.jsx(s.TableCell,{children:e.jsxs("div",{className:"flex justify-end text-right",children:[e.jsxs("div",{className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600",children:[" ",e.jsx(k,{to:`/customer-order/${a._id}`,children:e.jsx(Y,{id:"view",Icon:U,title:A("ViewOrder"),bgColor:"#34D399"})})]}),e.jsx(O,{title:a.name,id:a._id,handleUpdate:t,handleModalOpen:c})]})})]},a._id)})})]})},Se=()=>{const{data:l,loading:i,error:n}=Z(w.getAllCustomers),{userRef:c,dataTable:t,serviceData:a,filename:h,isDisabled:C,setSearchUser:y,totalResults:x,resultsPerPage:N,handleSubmitUser:g,handleSelectFile:d,handleChangePage:p,handleUploadMultiple:r,handleRemoveSelectFile:o}=$(l),{t:m}=E(),S=()=>{y(""),c.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:m("CustomersPage")}),e.jsxs(z,{children:[e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsx("form",{onSubmit:g,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:e.jsx("div",{className:"items-center",children:e.jsx(P,{title:"Customers",exportData:l,filename:h,isDisabled:C,handleSelectFile:d,handleUploadMultiple:r,handleRemoveSelectFile:o})})})})}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("form",{onSubmit:g,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(s.Input,{ref:c,type:"search",name:"search",placeholder:m("CustomersPageSearchPlaceholder")}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(s.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(s.Button,{layout:"outline",onClick:S,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})})]}),i?e.jsx(V,{row:12,col:6,width:190,height:20}):n?e.jsx("span",{className:"text-center mx-auto text-red-500",children:n}):(a==null?void 0:a.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:m("CustomersId")}),e.jsx(s.TableCell,{children:m("CustomersJoiningDate")}),e.jsx(s.TableCell,{children:m("CustomersName")}),e.jsx(s.TableCell,{children:m("CustomersEmail")}),e.jsx(s.TableCell,{children:m("CustomersPhone")}),e.jsx(s.TableCell,{className:"text-right",children:m("CustomersActions")})]})}),e.jsx(Q,{customers:t})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:x,resultsPerPage:N,onChange:p,label:"Table navigation"})})]}):e.jsx(H,{title:"Sorry, There are no customers right now."})]})};export{Se as default};
