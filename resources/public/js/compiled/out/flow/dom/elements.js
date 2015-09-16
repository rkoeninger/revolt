// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.dom.elements');
goog.require('cljs.core');
goog.require('flow.dom.attributes');
flow.dom.elements.text_el = (function text_el(s){
return document.createTextNode(s);
});
flow.dom.elements.svg_ns = "http://www.w3.org/2000/svg";
flow.dom.elements.svg_tag_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
flow.dom.elements.new_element = (function new_element(tag){
if(cljs.core.truth_(flow.dom.elements.svg_tag_QMARK_.call(null,tag))){
return document.createElementNS(flow.dom.elements.svg_ns,tag);
} else {
return document.createElement(tag);
}
});
flow.dom.elements.append_child_BANG_ = (function append_child_BANG_($parent,$child){
return $parent.appendChild($child);
});
flow.dom.elements.insert_before_BANG_ = (function insert_before_BANG_($parent,$sibling,$child){
return $parent.insertBefore($child,$sibling);
});
flow.dom.elements.remove_child_BANG_ = (function remove_child_BANG_($parent,$child){
if(cljs.core.truth_((function (){var and__16117__auto__ = $parent;
if(cljs.core.truth_(and__16117__auto__)){
return $child;
} else {
return and__16117__auto__;
}
})())){
return $parent.removeChild($child);
} else {
return null;
}
});
flow.dom.elements.clear_BANG_ = (function clear_BANG_($el){
while(true){
var temp__4126__auto__ = $el.firstChild;
if(cljs.core.truth_(temp__4126__auto__)){
var $child = temp__4126__auto__;
flow.dom.elements.remove_child_BANG_.call(null,$el,$child);

continue;
} else {
return null;
}
break;
}
});
flow.dom.elements.replace_child_BANG_ = (function replace_child_BANG_($parent,$old_child,$new_child){
if(cljs.core.truth_($old_child)){
return $parent.replaceChild($new_child,$old_child);
} else {
return flow.dom.elements.append_child_BANG_.call(null,$parent,$new_child);
}
});
flow.dom.elements.next_sibling = (function next_sibling($parent,$child){
return $child.nextSibling;
});
flow.dom.elements.add_event_listener_BANG_ = (function add_event_listener_BANG_($el,event,listener){
if(typeof window.jQuery !== 'undefined'){
return $($el).on(cljs.core.name.call(null,event),listener);
} else {
return $el.addEventListener(cljs.core.name.call(null,event),listener);
}
});
flow.dom.elements.value = (function value($el){
var G__25480 = $el.type;
switch (G__25480) {
case "checkbox":
return $el.checked;

break;
default:
return $el.value;

}
});
flow.dom.elements.bind_value_BANG_ = (function bind_value_BANG_(_BANG_atom){
return (function (e){
return cljs.core.reset_BANG_.call(null,_BANG_atom,flow.dom.elements.value.call(null,e.target));
});
});
flow.dom.elements.null_elem = (function null_elem(){
var G__25483 = document.createElement("span");
flow.dom.attributes.set_style_BANG_.call(null,G__25483,new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478));

flow.dom.attributes.set_attr_BANG_.call(null,G__25483,new cljs.core.Keyword(null,"data-flow-placeholder","data-flow-placeholder",-1333658152),true);

return G__25483;
});
flow.dom.elements.__GT_el = (function __GT_el(el_ish){
if(cljs.core.map_QMARK_.call(null,el_ish)){
return __GT_el.call(null,cljs.core.pr_str.call(null,el_ish));
} else {
if(cljs.core.coll_QMARK_.call(null,el_ish)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,__GT_el,el_ish));
} else {
if(((el_ish == null)) || ((cljs.core.seq_QMARK_.call(null,el_ish)) && (cljs.core.empty_QMARK_.call(null,el_ish)))){
return flow.dom.elements.null_elem.call(null);
} else {
if(cljs.core.truth_(el_ish.nodeType)){
return el_ish;
} else {
return flow.dom.elements.text_el.call(null,((typeof el_ish === 'string')?el_ish:cljs.core.pr_str.call(null,el_ish)));

}
}
}
}
});

//# sourceMappingURL=elements.js.map?rel=1442373854768