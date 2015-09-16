// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.dom.attributes');
goog.require('cljs.core');
goog.require('clojure.string');
flow.dom.attributes.set_id_BANG_ = (function set_id_BANG_($el,id){
return $el.id = id;
});
flow.dom.attributes.set_style_BANG_ = (function set_style_BANG_($el,attr,value){
return $el.style.setProperty(cljs.core.name.call(null,attr),(function (){var G__25395 = value;
var G__25395__$1 = (((value instanceof cljs.core.Keyword))?cljs.core.name.call(null,G__25395):G__25395);
return G__25395__$1;
})());
});
flow.dom.attributes.set_attr_BANG_ = (function set_attr_BANG_($el,attr,value){
var G__25397 = (((attr instanceof cljs.core.Keyword))?attr.fqn:null);
switch (G__25397) {
case "checked":
if(cljs.core.boolean$.call(null,value)){
return $el.checked = true;
} else {
return $el.checked = null;
}

break;
case "value":
return $el.value = value;

break;
default:
if(!((value == null))){
return $el.setAttribute(cljs.core.name.call(null,attr),value);
} else {
return $el.removeAttribute(cljs.core.name.call(null,attr),value);
}

}
});
flow.dom.attributes.set_classes_BANG_ = (function set_classes_BANG_($el,new_classes){
return $el.className = clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,new_classes));
});

//# sourceMappingURL=attributes.js.map?rel=1442373854567