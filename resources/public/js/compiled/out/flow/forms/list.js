// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.list');
goog.require('cljs.core');
flow.forms.list.build_list = (function build_list(elem_builders){
return (function (){
var update_list_BANG_ = (function update_list_BANG_(elem_updaters){
var updated_elems = cljs.core.map.call(null,(function (p1__25465_SHARP_){
return cljs.core.apply.call(null,p1__25465_SHARP_,cljs.core.PersistentVector.EMPTY);
}),(function (){var or__16129__auto__ = elem_updaters;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return cljs.core.map.call(null,((function (or__16129__auto__){
return (function (p1__25466_SHARP_){
return cljs.core.apply.call(null,p1__25466_SHARP_,cljs.core.PersistentVector.EMPTY);
});})(or__16129__auto__))
,elem_builders);
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,updated_elems),((function (updated_elems){
return (function (){
return update_list_BANG_.call(null,cljs.core.map.call(null,cljs.core.second,updated_elems));
});})(updated_elems))
], null);
});
return update_list_BANG_.call(null,null);
});
});

//# sourceMappingURL=list.js.map?rel=1442373854702