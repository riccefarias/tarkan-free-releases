(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5fc5d8a"],{"07d7":function(e,t,n){},6123:function(e,t,n){"use strict";n.r(t);n("4de4"),n("d3b7"),n("ac1f"),n("466d"),n("b0c0");var c=n("7a23"),a=n("5502"),r=n("c84e"),o=function(e){return Object(c["pushScopeId"])("data-v-4e01e4e4"),e=e(),Object(c["popScopeId"])(),e},l={style:{display:"flex","justify-content":"space-between","align-content":"space-between"}},i=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"30%"}},null,-1)})),u=o((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-folder-plus"},null,-1)})),d=o((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-plus"},null,-1)})),s={style:{border:"silver 1px solid","border-radius":"5px","margin-top":"20px",height:"calc(100vh - 200px)"}},f=o((function(){return Object(c["createElementVNode"])("div",{class:"device"},[Object(c["createElementVNode"])("div",{class:"name",style:{"font-size":"12px","font-weight":"100",padding:"5px",width:"calc(60% + 3.5px)"}},"Titulo"),Object(c["createElementVNode"])("div",{class:"icons",style:{"font-size":"12px","font-weight":"100",padding:"5px"}},"Estado")],-1)})),b={style:{"overflow-x":"hidden","overflow-y":"scroll",height:"calc(100vh - 230px)"}},O=["onClick","set"],p={class:"name"},j={key:0,class:"icons"},m=o((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-key"},null,-1)})),v=[m],N=o((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-lock"},null,-1)})),V=[N],y=o((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-signal"},null,-1)})),C=[y],x={setup:function(e){var t=Object(a["b"])(),n=Object(c["ref"])(""),o=Object(c["ref"])(null),m=Object(c["computed"])((function(){return""===n.value?t.state.geofences.fenceList:t.state.geofences.fenceList.filter((function(e){return e.name.toLowerCase().match(n.value.toLowerCase())}))}));return function(e,a){var N=Object(c["resolveComponent"])("el-input"),y=Object(c["resolveComponent"])("el-button"),x=Object(c["resolveComponent"])("el-tooltip");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(Object(c["unref"])(r["a"]),{ref_key:"editGeofenceRef",ref:o},null,512),Object(c["createElementVNode"])("div",l,[i,Object(c["createVNode"])(N,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=function(e){return n.value=e}),placeholder:"Buscar Geocerca",style:{"--el-input-border-radius":"5px","margin-right":"5px"}},null,8,["modelValue"]),Object(c["createVNode"])(x,{effect:"dark",content:"Cadastrar Grupo",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{type:"primary",plain:""},{default:Object(c["withCtx"])((function(){return[u]})),_:1})]})),_:1}),Object(c["createVNode"])(x,{effect:"dark",content:"Cadastrar Geocerca",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{type:"primary",onClick:a[1]||(a[1]=function(e){return o.value.newGeofence()})},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]})),_:1})]),Object(c["createElementVNode"])("div",s,[f,Object(c["createElementVNode"])("div",b,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(m),(function(n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:n.id,class:"device",onClick:function(t){return e.markerClick(n)},set:e.position=Object(c["unref"])(t).getters["devices/getPosition"](n.positionId)},[Object(c["createElementVNode"])("div",p,Object(c["toDisplayString"])(n.name),1),e.position?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",j,[Object(c["createElementVNode"])("div",{style:Object(c["normalizeStyle"])({color:e.position.attributes.ignition?"var(--text-blue)":""})},v,4),Object(c["createElementVNode"])("div",{style:Object(c["normalizeStyle"])({color:e.position.attributes.blocked?"red":""})},V,4),Object(c["createVNode"])(x,{content:"offline"===n.status?"Desconectado":e.position.attributes.rssi?"RSSI"+e.position.attributes.rssi:"Conectado"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{style:Object(c["normalizeStyle"])({color:"offline"===n.status?"silver":""})},C,4)]})),_:2},1032,["content"])])):Object(c["createCommentVNode"])("",!0)],8,O)})),128))])])],64)}}},h=(n("e9d8"),n("6b0d")),g=n.n(h);const E=g()(x,[["__scopeId","data-v-4e01e4e4"]]);t["default"]=E},9948:function(e,t,n){},c84e:function(e,t,n){"use strict";n("e9c4"),n("498a"),n("ac1f"),n("1276"),n("466d"),n("d3b7"),n("159b"),n("5319"),n("b0c0");var c=n("7a23"),a=n("047a"),r=n("5502"),o=n("c9a1"),l=n("2295"),i=n("db9d"),u=n("d8e8"),d=n("c349"),s={style:{"border-bottom":"#e0e0e0 1px solid",padding:"20px"}},f={class:"modal-title"},b={style:{"border-top":"#e0e0e0 1px solid",padding:"20px",display:"flex","justify-content":"space-between"}},O=Object(c["createTextVNode"])("Excluir"),p=Object(c["createTextVNode"])("Cancelar"),j=Object(c["createTextVNode"])("Salvar"),m=Object(c["createTextVNode"])("LINHA"),v=Object(c["createTextVNode"])("CIRCULO"),N=Object(c["createTextVNode"])("POLIGONO"),V={style:{display:"flex","flex-direction":"row"}},y={style:{flex:"1"}},C={style:{"padding-top":"35px","margin-left":"10px"}},x=Object(c["createTextVNode"])("Editar Área"),h={setup:function(e,t){var n=t.expose,h={name:"",type:"LINESTRING",attributes:[]},g={id:0,name:"",description:"",area:"",calendarId:0,attributes:{}},E=Object(r["b"])(),w=Object(c["ref"])(!1),k=Object(c["ref"])("first"),I=Object(c["ref"])(""),L=Object(c["ref"])(h),G=function(){o["a"].confirm("Deseja realmente excluir esta geocerca?","Tem certeza?").then((function(){E.dispatch("geofences/delete",L.value.id).then((function(){w.value=!1,Object(l["a"])({title:"Info",message:"Geocerca deletada com suceso.",type:"info"})}))}))},S=function(){I.value="Cadastrar Geocerca",L.value=JSON.parse(JSON.stringify(h)),w.value=!0},_=function(e){I.value="Editar Geocerca",L.value=JSON.parse(JSON.stringify(h)),Object.assign(L.value,JSON.parse(JSON.stringify(e)));var t=z(e.area);L.value.type=t.type,E.commit("geofences/setParams",t.params),w.value=!0};n({newGeofence:S,editGeofence:_});var T=function(){E.dispatch("geofences/enableEditing",L.value.type)},R=function(){w.value=!1},B=/\((.*?) (.*?),(.*?)\)/gi,P=/(\s?([-\d.]*)\s([-\d.]*),?)/gm,J=/(\s?([-\d.]*)\s([-\d.]*),?)/gm,z=function(e){var t=e.split("(")[0].trim();if("LINESTRING"===t){var n=e.match(J),c=[];return n.forEach((function(e){var t=e.trim().replace(",","").split(" ");2===t.length&&c.push(t)})),{type:"LINESTRING",params:c}}if("POLYGON"===t){var a=e.match(P),r=[];return a.forEach((function(e){var t=e.trim().replace(",","").split(" ");2===t.length&&r.push(t)})),{type:"POLYGON",params:r}}return"CIRCLE"===t?{type:"CIRCLE",params:B.exec(e)}:{type:t}},U=function(){var e=L.value.type,t=E.state.geofences.mapPointEditingParams;if("CIRCLE"===e)return"CIRCLE ("+t[0]+" "+t[1]+", "+t[2]+")";if("LINESTRING"===e){var n="LINESTRING (";return t.forEach((function(e){n+=e[0]+" "+e[1]+", "})),n=n.substring(0,n.length-2),n+=")",n}if("POLYGON"===e){var c="POLYGON((";return t.forEach((function(e){c+=e[0]+" "+e[1]+", "})),c=c.substring(0,c.length-2),c+="))",c}},Y=function(){var e=JSON.parse(JSON.stringify(g));e.id=L.value.id,e.name=L.value.name,e.area=U(),e.attributes=L.value.attributes,E.dispatch("geofences/save",e).then((function(){w.value=!1}))};return function(e,t){var n=Object(c["resolveComponent"])("el-button"),r=Object(c["resolveComponent"])("el-button-group"),o=Object(c["resolveComponent"])("el-tab-pane"),l=Object(c["resolveComponent"])("el-tabs");return Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(i["a"]),{"lock-scroll":!0,modelValue:w.value,"onUpdate:modelValue":t[10]||(t[10]=function(e){return w.value=e})},{title:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",f,Object(c["toDisplayString"])(I.value),1)])]})),footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(n,{type:"danger",onClick:t[0]||(t[0]=function(e){return G()})},{default:Object(c["withCtx"])((function(){return[O]})),_:1})]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(n,{type:"danger",plain:"",onClick:t[1]||(t[1]=function(e){return R()})},{default:Object(c["withCtx"])((function(){return[p]})),_:1}),Object(c["createVNode"])(n,{type:"primary",onClick:t[2]||(t[2]=function(e){return Y()})},{default:Object(c["withCtx"])((function(){return[j]})),_:1})])])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{modelValue:k.value,"onUpdate:modelValue":t[9]||(t[9]=function(e){return k.value=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,{label:"Geocerca",name:"first"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(u["a"]),{"label-width":"120px","label-position":"top"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(u["b"]),{label:"Nome da Geocerca"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(d["a"]),{modelValue:L.value.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return L.value.name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(Object(c["unref"])(u["b"]),{label:"Tipo de Cerca"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,{size:"large"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,{type:"primary",plain:!("LINESTRING"===L.value.type),onClick:t[4]||(t[4]=function(e){return L.value.type="LINESTRING"})},{default:Object(c["withCtx"])((function(){return[m]})),_:1},8,["plain"]),Object(c["createVNode"])(n,{type:"primary",plain:!("CIRCLE"===L.value.type),onClick:t[5]||(t[5]=function(e){return L.value.type="CIRCLE"})},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["plain"]),Object(c["createVNode"])(n,{type:"primary",plain:!("POLYGON"===L.value.type),onClick:t[6]||(t[6]=function(e){return L.value.type="POLYGON"})},{default:Object(c["withCtx"])((function(){return[N]})),_:1},8,["plain"])]})),_:1})]})),_:1}),Object(c["createElementVNode"])("div",V,[Object(c["createElementVNode"])("div",y,[Object(c["createVNode"])(Object(c["unref"])(u["b"]),{label:"Área Total"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(d["a"]),{disabled:"",value:Object(c["unref"])(E).getters["geofences/getTotalArea"]},null,8,["value"])]})),_:1})]),Object(c["createElementVNode"])("div",C,[Object(c["createVNode"])(n,{type:"primary",onClick:t[7]||(t[7]=function(e){return T()})},{default:Object(c["withCtx"])((function(){return[x]})),_:1})])])]})),_:1})]})),_:1}),Object(c["createVNode"])(o,{label:"Atributos",name:"attributes"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(a["a"]),{modelValue:L.value.attributes,"onUpdate:modelValue":t[8]||(t[8]=function(e){return L.value.attributes=e})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"])}}};n("cd01");const g=h;t["a"]=g},cd01:function(e,t,n){"use strict";n("9948")},e9d8:function(e,t,n){"use strict";n("07d7")}}]);