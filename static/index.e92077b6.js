import{a as e,r as a,K as s,b as l,e as r,y as o,w as d,Z as i,h as t,C as n,D as u,o as p,u as m,$ as c,a0 as g,a1 as f,n as v,B as x,m as _,x as b,_ as h}from"./index.47366859.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang.ebc06b4b.js";const y={class:"login-container"},V={class:"login-card"},k=(e=>(n("data-v-8686bd8c"),e=e(),u(),e))((()=>o("div",{class:"title"},[o("img",{src:"/v3-admin-vite/static/logo-text-2.f252b556.png"})],-1))),z={class:"content"},C={class:"show-code"},M=["src"],q=x(" 登 录 "),K=h(e({__name:"index",setup(e){const n=_(),u=a(null),x=a(!1),h=a(""),K=s({username:"admin",password:"12345678",code:"abcd"}),U={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},j=()=>{var e;null==(e=u.value)||e.validate((e=>{if(!e)return!1;x.value=!0,b().login({username:K.username,password:K.password}).then((()=>{n.push({path:"/"})})).catch((()=>{B(),K.password=""})).finally((()=>{x.value=!1}))}))},B=()=>{K.code="",h.value="/api/v1/login/code?"+1e3*Math.random()};return(e,a)=>{const s=t("el-input"),n=t("el-form-item"),_=t("el-button"),b=t("el-form");return p(),l("div",y,[r(w,{class:"theme-switch"}),o("div",V,[k,o("div",z,[r(b,{ref_key:"loginFormRef",ref:u,model:K,rules:U,onKeyup:i(j,["enter"])},{default:d((()=>[r(n,{prop:"username"},{default:d((()=>[r(s,{modelValue:K.username,"onUpdate:modelValue":a[0]||(a[0]=e=>K.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":m(c),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),r(n,{prop:"password"},{default:d((()=>[r(s,{modelValue:K.password,"onUpdate:modelValue":a[1]||(a[1]=e=>K.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":m(g),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),r(n,{prop:"code"},{default:d((()=>[r(s,{modelValue:K.code,"onUpdate:modelValue":a[2]||(a[2]=e=>K.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":m(f),maxlength:"4",size:"large"},null,8,["modelValue","prefix-icon"]),o("span",C,[o("img",{src:h.value,onClick:B},null,8,M)])])),_:1}),r(_,{loading:x.value,type:"primary",size:"large",onClick:v(j,["prevent"])},{default:d((()=>[q])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-8686bd8c"]]);export{K as default};