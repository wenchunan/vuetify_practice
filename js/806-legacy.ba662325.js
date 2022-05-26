"use strict";(self["webpackChunkvuetify_practice"]=self["webpackChunkvuetify_practice"]||[]).push([[806],{3237:function(t,e,r){r.d(e,{Z:function(){return u}});var i=r(4367),n=(r(9653),r(4944),r(3792),r(5648)),s=r(1226),a=r(6505),o=r(3325),u=(0,o.Z)(s.Z,a.Z,n.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({"v-card":!0},a.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.Z.options.computed.classes.call(this))},styles:function(){var t=(0,i.Z)({},n.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,r){r.d(e,{EB:function(){return u},ZB:function(){return o},h7:function(){return s}});var i=r(3237),n=r(4589),s=(0,n.Ji)("v-card__actions"),a=(0,n.Ji)("v-card__subtitle"),o=(0,n.Ji)("v-card__text"),u=(0,n.Ji)("v-card__title");i.Z},806:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticStyle:{background:"#01579B"}},[r("v-form",{staticClass:"ma-auto",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[r("v-card",{staticClass:"mx-auto py-6",attrs:{width:"500"}},[r("v-card-title",{staticClass:"text-h5 font-weight-bold justify-center"},[t._v("請先登入")]),r("v-card-text",[r("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),r("v-text-field",{attrs:{label:"Password",type:"password","prepend-icon":"mdi-lock"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{color:"light-blue darken-4 white--text",type:"submit"}},[t._v("登入")])],1)],1)],1)],1)},n=[],s=(r(2222),{data:function(){return{user:{}}},methods:{login:function(){var t=this,e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((function(e){console.log(e.data);var r=e.data,i=r.token,n=r.expired;document.cookie="annaToken=".concat(i,"; expires=").concat(new Date(n),"; "),t.$router.push("/admin/home")})).catch((function(t){alert("登入失敗"),console.log(t)}))}}}),a=s,o=r(1001),u=r(3453),c=r.n(u),l=r(7524),d=r(680),h=r(3237),f=r(7118),p=r(4367),v=(r(6699),r(2023),r(2479),r(7327),r(1539),r(4747),r(9826),r(3325)),m=r(6210),g=r(6257),_=(0,v.Z)(m.Z,(0,g.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=r(t)))})):i.valid=r(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:(0,p.Z)({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),b=r(1347),B=(0,o.Z)(a,i,n,!1,null,null,null),Z=B.exports;c()(B,{VApp:l.Z,VBtn:d.Z,VCard:h.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VForm:_,VTextField:b.Z})}}]);
//# sourceMappingURL=806-legacy.ba662325.js.map