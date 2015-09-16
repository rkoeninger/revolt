// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.sub_component');
goog.require('cljs.core');
goog.require('flow.cursors');
flow.forms.sub_component.unchanged_QMARK_ = (function unchanged_QMARK_(p__25486){
var vec__25504 = p__25486;
var old_value = cljs.core.nth.call(null,vec__25504,(0),null);
var new_value = cljs.core.nth.call(null,vec__25504,(1),null);
var or__16129__auto__ = (function (){var and__16117__auto__ = (function (){var G__25514 = old_value;
if(G__25514){
var bit__16810__auto__ = null;
if(cljs.core.truth_((function (){var or__16129__auto__ = bit__16810__auto__;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return G__25514.flow$cursors$Cursor$;
}
})())){
return true;
} else {
if((!G__25514.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25514);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25514);
}
})();
if(and__16117__auto__){
var and__16117__auto____$1 = (function (){var G__25516 = new_value;
if(G__25516){
var bit__16810__auto__ = null;
if(cljs.core.truth_((function (){var or__16129__auto__ = bit__16810__auto__;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return G__25516.flow$cursors$Cursor$;
}
})())){
return true;
} else {
if((!G__25516.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25516);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25516);
}
})();
if(and__16117__auto____$1){
var and__16117__auto____$2 = (function (){var G__25518 = old_value;
if(G__25518){
var bit__16810__auto__ = (G__25518.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__16810__auto__) || (G__25518.cljs$core$IDeref$)){
return true;
} else {
if((!G__25518.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25518);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25518);
}
})();
if(and__16117__auto____$2){
var and__16117__auto____$3 = (function (){var G__25520 = new_value;
if(G__25520){
var bit__16810__auto__ = (G__25520.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__16810__auto__) || (G__25520.cljs$core$IDeref$)){
return true;
} else {
if((!G__25520.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25520);
}
})();
if(and__16117__auto____$3){
return (cljs.core._EQ_.call(null,flow.cursors.__BANG_state.call(null,old_value),flow.cursors.__BANG_state.call(null,new_value))) && (cljs.core._EQ_.call(null,flow.cursors._path.call(null,old_value),flow.cursors._path.call(null,new_value)));
} else {
return and__16117__auto____$3;
}
} else {
return and__16117__auto____$2;
}
} else {
return and__16117__auto____$1;
}
} else {
return and__16117__auto__;
}
})();
if(or__16129__auto__){
return or__16129__auto__;
} else {
return cljs.core._EQ_.call(null,old_value,new_value);
}
});
flow.forms.sub_component.build_sub_component = (function build_sub_component(args){
return (function (){
var build_component = (function build_component(arg_values){
return cljs.core.apply.call(null,cljs.core.first.call(null,arg_values),cljs.core.rest.call(null,arg_values));
});
var update_sub_component_BANG_ = (function update_sub_component_BANG_(old_arg_values,update_component_BANG_){
var new_arg_values = cljs.core.map.call(null,(function (p1__25521_SHARP_){
return cljs.core.apply.call(null,p1__25521_SHARP_,cljs.core.PersistentVector.EMPTY);
}),args);
var arg_pairs = cljs.core.map.call(null,cljs.core.vector,old_arg_values,new_arg_values);
var vec__25529 = ((((update_component_BANG_ == null)) || (cljs.core.not_EQ_.call(null,cljs.core.count.call(null,old_arg_values),cljs.core.count.call(null,new_arg_values))) || (!(cljs.core.every_QMARK_.call(null,flow.forms.sub_component.unchanged_QMARK_,arg_pairs))))?build_component.call(null,new_arg_values):update_component_BANG_).call(null);
var $el = cljs.core.nth.call(null,vec__25529,(0),null);
var update_component_BANG___$1 = cljs.core.nth.call(null,vec__25529,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el,((function (new_arg_values,arg_pairs,vec__25529,$el,update_component_BANG___$1){
return (function (){
return update_sub_component_BANG_.call(null,new_arg_values,update_component_BANG___$1);
});})(new_arg_values,arg_pairs,vec__25529,$el,update_component_BANG___$1))
], null);
});
return update_sub_component_BANG_.call(null,null,null);
});
});

//# sourceMappingURL=sub_component.js.map?rel=1442373854833