import{a as e,b as l,e as a,i as n,k as o,m as t,n as s,q as u,at as i,l as d,j as r,F as c,z as p,p as m,ar as v}from"./index-9ae5cd82.js";function f(a){const{api:n}=a,o=e(!1),t=e([]),s=e("");return l((()=>{o.value=!0,t.value=[],n().then((e=>{t.value=e.data})).finally((()=>{o.value=!1}))})),{loading:o,options:t,value:s}}const h={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"};function b(){return new Promise(((e,l)=>{setTimeout((()=>{Math.random()<.8?e(h):l(new Error("接口发生错误"))}),2e3)}))}const g={class:"app-container"},V=d("h4",null,"该示例是演示：通过 hook 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件",-1),S=d("h5",null,"Select 示例",-1),k=d("h5",null,"Select V2 示例（如果数据量过多，可以选择该组件）",-1),_=a({__name:"use-fetch-select",setup(e){const{loading:l,options:a,value:d}=f({api:b});return(e,f)=>{const h=n("el-option"),b=n("el-select"),_=n("el-select-v2");return r(),o("div",g,[V,S,t(b,{loading:u(l),modelValue:u(d),"onUpdate:modelValue":f[0]||(f[0]=e=>i(d)?d.value=e:null),filterable:""},{default:s((()=>[(r(!0),o(c,null,p(u(a),((e,l)=>(r(),m(h,v(e,{key:l,placeholder:"请选择"}),null,16)))),128))])),_:1},8,["loading","modelValue"]),k,t(_,{loading:u(l),modelValue:u(d),"onUpdate:modelValue":f[1]||(f[1]=e=>i(d)?d.value=e:null),options:u(a),filterable:"",placeholder:"请选择"},null,8,["loading","modelValue","options"])])}}});export{_ as default};
