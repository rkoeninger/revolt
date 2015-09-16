// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.deps');
goog.require('cljs.core');
goog.require('flow.cursors');

flow.deps.Context = (function (){var obj25637 = {};
return obj25637;
})();

flow.deps._read_dep = (function _read_dep(_,dep){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$deps$Context$_read_dep$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.flow$deps$Context$_read_dep$arity$2(_,dep);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.deps._read_dep[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.deps._read_dep["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Context.-read-dep",_);
}
}
})().call(null,_,dep);
}
});

flow.deps._mark_deps_BANG_ = (function _mark_deps_BANG_(_,deps){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$deps$Context$_mark_deps_BANG_$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.flow$deps$Context$_mark_deps_BANG_$arity$2(_,deps);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.deps._mark_deps_BANG_[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.deps._mark_deps_BANG_["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Context.-mark-deps!",_);
}
}
})().call(null,_,deps);
}
});

flow.deps._STAR_ctx_STAR_ = (function (){
if(typeof flow.deps.t25638 !== 'undefined'){
} else {

/**
* @constructor
*/
flow.deps.t25638 = (function (meta25639){
this.meta25639 = meta25639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
flow.deps.t25638.prototype.flow$deps$Context$ = true;

flow.deps.t25638.prototype.flow$deps$Context$_read_dep$arity$2 = (function (_,dep){
var self__ = this;
var ___$1 = this;
return flow.cursors.__GT_cursor.call(null,cljs.core.deref.call(null,dep),dep,cljs.core.PersistentVector.EMPTY);
});

flow.deps.t25638.prototype.flow$deps$Context$_mark_deps_BANG_$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
});

flow.deps.t25638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25640){
var self__ = this;
var _25640__$1 = this;
return self__.meta25639;
});

flow.deps.t25638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25640,meta25639__$1){
var self__ = this;
var _25640__$1 = this;
return (new flow.deps.t25638(meta25639__$1));
});

flow.deps.t25638.cljs$lang$type = true;

flow.deps.t25638.cljs$lang$ctorStr = "flow.deps/t25638";

flow.deps.t25638.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"flow.deps/t25638");
});

flow.deps.__GT_t25638 = (function __GT_t25638(meta25639){
return (new flow.deps.t25638(meta25639));
});

}

return (new flow.deps.t25638(cljs.core.PersistentArrayMap.EMPTY));
})()
;
flow.deps.mark_dep = (function mark_dep(dep_tree,dep,value){
var state_PLUS_path = (((function (){var G__25650 = dep;
if(G__25650){
var bit__16810__auto__ = null;
if(cljs.core.truth_((function (){var or__16129__auto__ = bit__16810__auto__;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return G__25650.flow$cursors$Cursor$;
}
})())){
return true;
} else {
if((!G__25650.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25650);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__25650);
}
})())?cljs.core.cons.call(null,flow.cursors.__BANG_state.call(null,dep),flow.cursors._path.call(null,dep)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null));
var dep_marked_QMARK_ = ((function (state_PLUS_path){
return (function dep_marked_QMARK_(dep_tree__$1,path){
var or__16129__auto__ = cljs.core.boolean$.call(null,new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411).cljs$core$IFn$_invoke$arity$1(dep_tree__$1));
if(or__16129__auto__){
return or__16129__auto__;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,path);
if(temp__4126__auto__){
var vec__25658 = temp__4126__auto__;
var p = cljs.core.nth.call(null,vec__25658,(0),null);
var more = cljs.core.nthnext.call(null,vec__25658,(1));
return dep_marked_QMARK_.call(null,cljs.core.get.call(null,dep_tree__$1,p),more);
} else {
return null;
}
}
});})(state_PLUS_path))
;
if(cljs.core.truth_(dep_marked_QMARK_.call(null,dep_tree,state_PLUS_path))){
return dep_tree;
} else {
return cljs.core.assoc_in.call(null,dep_tree,state_PLUS_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411),((flow.cursors.cursor_QMARK_.call(null,value))?flow.cursors._value.call(null,value):value)], null));
}
});
flow.deps.merge_deps = (function merge_deps(deps_1,deps_2){
return cljs.core.merge_with.call(null,(function (v1,v2){
if(cljs.core.truth_(new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411).cljs$core$IFn$_invoke$arity$1(v1))){
return v1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411).cljs$core$IFn$_invoke$arity$1(v2))){
return v2;
} else {
return merge_deps.call(null,v1,v2);

}
}
}),deps_1,deps_2);
});
flow.deps.tree_unchanged_QMARK_ = (function tree_unchanged_QMARK_(new_value,tree){
if((cljs.core.map_QMARK_.call(null,tree)) && (cljs.core.contains_QMARK_.call(null,tree,new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411)))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("flow.deps","value","flow.deps/value",-1222763411).cljs$core$IFn$_invoke$arity$1(tree),new_value);
} else {
return cljs.core.every_QMARK_.call(null,(function (p__25661){
var vec__25662 = p__25661;
var path = cljs.core.nth.call(null,vec__25662,(0),null);
var sub_tree = cljs.core.nth.call(null,vec__25662,(1),null);
return tree_unchanged_QMARK_.call(null,flow.cursors.get_at_path.call(null,new_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)),sub_tree);
}),tree);
}
});
flow.deps.deps_unchanged_QMARK_ = (function deps_unchanged_QMARK_(deps){
return cljs.core.every_QMARK_.call(null,(function (p__25665){
var vec__25666 = p__25665;
var _BANG_atom = cljs.core.nth.call(null,vec__25666,(0),null);
var tree = cljs.core.nth.call(null,vec__25666,(1),null);
return flow.deps.tree_unchanged_QMARK_.call(null,cljs.core.deref.call(null,_BANG_atom),tree);
}),deps);
});
flow.deps.with_watch_context = (function with_watch_context(f){
var _BANG_dep_tree = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var parent_ctx = flow.deps._STAR_ctx_STAR_;
var _STAR_ctx_STAR_25671 = flow.deps._STAR_ctx_STAR_;
flow.deps._STAR_ctx_STAR_ = (function (){
if(typeof flow.deps.t25672 !== 'undefined'){
} else {

/**
* @constructor
*/
flow.deps.t25672 = (function (_STAR_ctx_STAR_25671,parent_ctx,_BANG_dep_tree,f,with_watch_context,meta25673){
this._STAR_ctx_STAR_25671 = _STAR_ctx_STAR_25671;
this.parent_ctx = parent_ctx;
this._BANG_dep_tree = _BANG_dep_tree;
this.f = f;
this.with_watch_context = with_watch_context;
this.meta25673 = meta25673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
flow.deps.t25672.prototype.flow$deps$Context$ = true;

flow.deps.t25672.prototype.flow$deps$Context$_read_dep$arity$2 = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function (_,dep){
var self__ = this;
var ___$1 = this;
var value = flow.deps._read_dep.call(null,self__.parent_ctx,dep);
cljs.core.swap_BANG_.call(null,self__._BANG_dep_tree,flow.deps.mark_dep,dep,value);

return value;
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

flow.deps.t25672.prototype.flow$deps$Context$_mark_deps_BANG_$arity$2 = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function (_,deps){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__._BANG_dep_tree,flow.deps.merge_deps,deps);

return flow.deps._mark_deps_BANG_.call(null,self__.parent_ctx,deps);
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

flow.deps.t25672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function (_25674){
var self__ = this;
var _25674__$1 = this;
return self__.meta25673;
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

flow.deps.t25672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function (_25674,meta25673__$1){
var self__ = this;
var _25674__$1 = this;
return (new flow.deps.t25672(self__._STAR_ctx_STAR_25671,self__.parent_ctx,self__._BANG_dep_tree,self__.f,self__.with_watch_context,meta25673__$1));
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

flow.deps.t25672.cljs$lang$type = true;

flow.deps.t25672.cljs$lang$ctorStr = "flow.deps/t25672";

flow.deps.t25672.cljs$lang$ctorPrWriter = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"flow.deps/t25672");
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

flow.deps.__GT_t25672 = ((function (_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx){
return (function __GT_t25672(_STAR_ctx_STAR_25671__$1,parent_ctx__$1,_BANG_dep_tree__$1,f__$1,with_watch_context__$1,meta25673){
return (new flow.deps.t25672(_STAR_ctx_STAR_25671__$1,parent_ctx__$1,_BANG_dep_tree__$1,f__$1,with_watch_context__$1,meta25673));
});})(_STAR_ctx_STAR_25671,_BANG_dep_tree,parent_ctx))
;

}

return (new flow.deps.t25672(_STAR_ctx_STAR_25671,parent_ctx,_BANG_dep_tree,f,with_watch_context,cljs.core.PersistentArrayMap.EMPTY));
})()
;

try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null),new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.deref.call(null,_BANG_dep_tree)], null);
}finally {flow.deps._STAR_ctx_STAR_ = _STAR_ctx_STAR_25671;
}});
flow.deps.read_dep = (function read_dep(dep){
return flow.deps._read_dep.call(null,flow.deps._STAR_ctx_STAR_,dep);
});
flow.deps.mark_deps_BANG_ = (function mark_deps_BANG_(deps){
return flow.deps._mark_deps_BANG_.call(null,flow.deps._STAR_ctx_STAR_,deps);
});

//# sourceMappingURL=deps.js.map?rel=1442373855018