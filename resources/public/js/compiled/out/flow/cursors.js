// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.cursors');
goog.require('cljs.core');

flow.cursors.Cursor = (function (){var obj24919 = {};
return obj24919;
})();

flow.cursors._value = (function _value(_){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$cursors$Cursor$_value$arity$1;
} else {
return and__16117__auto__;
}
})()){
return _.flow$cursors$Cursor$_value$arity$1(_);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.cursors._value[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.cursors._value["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Cursor.-value",_);
}
}
})().call(null,_);
}
});

flow.cursors.__BANG_state = (function __BANG_state(_){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$cursors$Cursor$__BANG_state$arity$1;
} else {
return and__16117__auto__;
}
})()){
return _.flow$cursors$Cursor$__BANG_state$arity$1(_);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.cursors.__BANG_state[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.cursors.__BANG_state["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Cursor.-!state",_);
}
}
})().call(null,_);
}
});

flow.cursors._path = (function _path(_){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$cursors$Cursor$_path$arity$1;
} else {
return and__16117__auto__;
}
})()){
return _.flow$cursors$Cursor$_path$arity$1(_);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.cursors._path[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.cursors._path["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Cursor.-path",_);
}
}
})().call(null,_);
}
});

flow.cursors.__GT_atom = (function __GT_atom(_,extra_path){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$cursors$Cursor$__GT_atom$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.flow$cursors$Cursor$__GT_atom$arity$2(_,extra_path);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.cursors.__GT_atom[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.cursors.__GT_atom["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Cursor.->atom",_);
}
}
})().call(null,_,extra_path);
}
});


flow.cursors.Keyable = (function (){var obj24921 = {};
return obj24921;
})();

flow.cursors._keyed_by = (function _keyed_by(_,f){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.flow$cursors$Keyable$_keyed_by$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.flow$cursors$Keyable$_keyed_by$arity$2(_,f);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (flow.cursors._keyed_by[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (flow.cursors._keyed_by["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Keyable.-keyed-by",_);
}
}
})().call(null,_,f);
}
});

flow.cursors.cursor_QMARK_ = (function cursor_QMARK_(v){
var G__24923 = v;
if(G__24923){
var bit__16810__auto__ = null;
if(cljs.core.truth_((function (){var or__16129__auto__ = bit__16810__auto__;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return G__24923.flow$cursors$Cursor$;
}
})())){
return true;
} else {
if((!G__24923.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__24923);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Cursor,G__24923);
}
});
flow.cursors.get_at_path = (function get_at_path(m,p__24925){
var vec__24930 = p__24925;
var p = cljs.core.nth.call(null,vec__24930,(0),null);
var more_path = cljs.core.nthnext.call(null,vec__24930,(1));
var path = vec__24930;
if(cljs.core.truth_((function (){var and__16117__auto__ = m;
if(cljs.core.truth_(and__16117__auto__)){
return cljs.core.seq.call(null,path);
} else {
return and__16117__auto__;
}
})())){
if((cljs.core.vector_QMARK_.call(null,p)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p),new cljs.core.Keyword("flow.cursors","pk","flow.cursors/pk",-89207551)))){
var vec__24931 = p;
var _ = cljs.core.nth.call(null,vec__24931,(0),null);
var key_fn = cljs.core.nth.call(null,vec__24931,(1),null);
var key_value = cljs.core.nth.call(null,vec__24931,(2),null);
return get_at_path.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (vec__24931,_,key_fn,key_value,vec__24930,p,more_path,path){
return (function (p1__24924_SHARP_){
return cljs.core._EQ_.call(null,key_value,p1__24924_SHARP_);
});})(vec__24931,_,key_fn,key_value,vec__24930,p,more_path,path))
,key_fn),m)),more_path);
} else {
if((function (){var or__16129__auto__ = (function (){var G__24933 = m;
if(G__24933){
var bit__16810__auto__ = (G__24933.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__16810__auto__) || (G__24933.cljs$core$ILookup$)){
return true;
} else {
if((!G__24933.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__24933);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__24933);
}
})();
if(or__16129__auto__){
return or__16129__auto__;
} else {
return (m == null);
}
})()){
return get_at_path.call(null,cljs.core.get.call(null,m,p),more_path);
} else {
if(typeof p === 'number'){
return get_at_path.call(null,cljs.core.nth.call(null,m,p),more_path);
} else {
return null;
}
}
}
} else {
return m;
}
});
flow.cursors.assoc_at_path = (function assoc_at_path(m,p__24934,v){
var vec__24943 = p__24934;
var p = cljs.core.nth.call(null,vec__24943,(0),null);
var more_path = cljs.core.nthnext.call(null,vec__24943,(1));
var path = vec__24943;
if(cljs.core.seq.call(null,path)){
if((cljs.core.vector_QMARK_.call(null,p)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p),new cljs.core.Keyword("flow.cursors","pk","flow.cursors/pk",-89207551)))){
var vec__24944 = p;
var _ = cljs.core.nth.call(null,vec__24944,(0),null);
var key_fn = cljs.core.nth.call(null,vec__24944,(1),null);
var key_value = cljs.core.nth.call(null,vec__24944,(2),null);
return cljs.core.into.call(null,cljs.core.empty.call(null,m),(function (){var iter__16885__auto__ = ((function (vec__24944,_,key_fn,key_value,vec__24943,p,more_path,path){
return (function iter__24945(s__24946){
return (new cljs.core.LazySeq(null,((function (vec__24944,_,key_fn,key_value,vec__24943,p,more_path,path){
return (function (){
var s__24946__$1 = s__24946;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24946__$1);
if(temp__4126__auto__){
var s__24946__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24946__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__24946__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__24948 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__24947 = (0);
while(true){
if((i__24947 < size__16884__auto__)){
var el = cljs.core._nth.call(null,c__16883__auto__,i__24947);
cljs.core.chunk_append.call(null,b__24948,((cljs.core._EQ_.call(null,key_value,key_fn.call(null,el)))?assoc_at_path.call(null,el,more_path,v):el));

var G__24951 = (i__24947 + (1));
i__24947 = G__24951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24948),iter__24945.call(null,cljs.core.chunk_rest.call(null,s__24946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24948),null);
}
} else {
var el = cljs.core.first.call(null,s__24946__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,key_value,key_fn.call(null,el)))?assoc_at_path.call(null,el,more_path,v):el),iter__24945.call(null,cljs.core.rest.call(null,s__24946__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24944,_,key_fn,key_value,vec__24943,p,more_path,path))
,null,null));
});})(vec__24944,_,key_fn,key_value,vec__24943,p,more_path,path))
;
return iter__16885__auto__.call(null,m);
})());
} else {
if((function (){var or__16129__auto__ = (function (){var G__24950 = m;
if(G__24950){
var bit__16810__auto__ = (G__24950.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__16810__auto__) || (G__24950.cljs$core$IAssociative$)){
return true;
} else {
if((!G__24950.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__24950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__24950);
}
})();
if(or__16129__auto__){
return or__16129__auto__;
} else {
return (m == null);
}
})()){
return cljs.core.assoc.call(null,m,p,assoc_at_path.call(null,cljs.core.get.call(null,m,p),more_path,v));
} else {
if((cljs.core.seq_QMARK_.call(null,m)) && (typeof p === 'number')){
if((p === (0))){
return cljs.core.cons.call(null,assoc_at_path.call(null,cljs.core.first.call(null,m),more_path,v),cljs.core.rest.call(null,m));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,m),assoc_at_path.call(null,cljs.core.rest.call(null,m),cljs.core.cons.call(null,(p - (1)),more_path),v));
}
} else {
return null;
}
}
}
} else {
return v;
}
});
flow.cursors.cursor__GT_atom = (function cursor__GT_atom(_BANG_state,path){
if(typeof flow.cursors.t24955 !== 'undefined'){
} else {

/**
* @constructor
*/
flow.cursors.t24955 = (function (path,_BANG_state,cursor__GT_atom,meta24956){
this.path = path;
this._BANG_state = _BANG_state;
this.cursor__GT_atom = cursor__GT_atom;
this.meta24956 = meta24956;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 98304;
})
flow.cursors.t24955.prototype.flow$cursors$Cursor$ = true;

flow.cursors.t24955.prototype.flow$cursors$Cursor$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,this$__$1);
});

flow.cursors.t24955.prototype.flow$cursors$Cursor$__BANG_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._BANG_state;
});

flow.cursors.t24955.prototype.flow$cursors$Cursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

flow.cursors.t24955.prototype.flow$cursors$Cursor$__GT_atom$arity$2 = (function (_,extra_path){
var self__ = this;
var ___$1 = this;
return self__.cursor__GT_atom.call(null,self__._BANG_state,cljs.core.vec.call(null,cljs.core.concat.call(null,self__.path,extra_path)));
});

flow.cursors.t24955.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core._write.call(null,writer,cljs.core.pr_str.call(null,cljs.core.deref.call(null,this$__$1)));

return cljs.core._write.call(null,writer,">");
});

flow.cursors.t24955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state,new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null);
});

flow.cursors.t24955.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

flow.cursors.t24955.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (flow.cursors.cursor_QMARK_.call(null,other)) && ((self__._BANG_state === flow.cursors.__BANG_state.call(null,other))) && (cljs.core._EQ_.call(null,self__.path,self__.path.call(null,other)));
});

flow.cursors.t24955.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var old_value = cljs.core._deref.call(null,this$__$1);
cljs.core.swap_BANG_.call(null,self__._BANG_state,flow.cursors.assoc_at_path,self__.path,new_value);

return new_value;
});

flow.cursors.t24955.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

flow.cursors.t24955.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a1){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a1));
});

flow.cursors.t24955.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a1,a2){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a1,a2));
});

flow.cursors.t24955.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a1,a2,as){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a1,a2,as));
});

flow.cursors.t24955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24957){
var self__ = this;
var _24957__$1 = this;
return self__.meta24956;
});

flow.cursors.t24955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24957,meta24956__$1){
var self__ = this;
var _24957__$1 = this;
return (new flow.cursors.t24955(self__.path,self__._BANG_state,self__.cursor__GT_atom,meta24956__$1));
});

flow.cursors.t24955.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return flow.cursors.get_at_path.call(null,cljs.core.deref.call(null,self__._BANG_state),self__.path);
});

flow.cursors.t24955.cljs$lang$type = true;

flow.cursors.t24955.cljs$lang$ctorStr = "flow.cursors/t24955";

flow.cursors.t24955.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"flow.cursors/t24955");
});

flow.cursors.__GT_t24955 = (function __GT_t24955(path__$1,_BANG_state__$1,cursor__GT_atom__$1,meta24956){
return (new flow.cursors.t24955(path__$1,_BANG_state__$1,cursor__GT_atom__$1,meta24956));
});

}

return (new flow.cursors.t24955(path,_BANG_state,cursor__GT_atom,cljs.core.PersistentArrayMap.EMPTY));
});
flow.cursors.map_cursor = (function map_cursor(value,_BANG_state,path){
if(typeof flow.cursors.t24964 !== 'undefined'){
} else {

/**
* @constructor
*/
flow.cursors.t24964 = (function (path,_BANG_state,value,map_cursor,meta24965){
this.path = path;
this._BANG_state = _BANG_state;
this.value = value;
this.map_cursor = map_cursor;
this.meta24965 = meta24965;
this.cljs$lang$protocol_mask$partition0$ = 2158364427;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
flow.cursors.t24964.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

flow.cursors.t24964.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,not_found);
if(!(cljs.core._EQ_.call(null,v,not_found))){
return flow.cursors.__GT_cursor.call(null,v,self__._BANG_state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

flow.cursors.t24964.prototype.flow$cursors$Cursor$ = true;

flow.cursors.t24964.prototype.flow$cursors$Cursor$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

flow.cursors.t24964.prototype.flow$cursors$Cursor$__BANG_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._BANG_state;
});

flow.cursors.t24964.prototype.flow$cursors$Cursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

flow.cursors.t24964.prototype.flow$cursors$Cursor$__GT_atom$arity$2 = (function (_,extra_path){
var self__ = this;
var ___$1 = this;
return flow.cursors.cursor__GT_atom.call(null,self__._BANG_state,cljs.core.vec.call(null,cljs.core.concat.call(null,self__.path,extra_path)));
});

flow.cursors.t24964.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write.call(null,writer,cljs.core.pr_str.call(null,self__.value));
});

flow.cursors.t24964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

flow.cursors.t24964.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.map_cursor.call(null,self__.value,self__._BANG_state,self__.path);
});

flow.cursors.t24964.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.value);
});

flow.cursors.t24964.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(flow.cursors.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,flow.cursors._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

flow.cursors.t24964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24966){
var self__ = this;
var _24966__$1 = this;
return self__.meta24965;
});

flow.cursors.t24964.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return self__.map_cursor.call(null,cljs.core._dissoc.call(null,self__.value,k),self__._BANG_state,self__.path);
});

flow.cursors.t24964.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

flow.cursors.t24964.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return self__.map_cursor.call(null,cljs.core._assoc.call(null,self__.value,k,v),self__._BANG_state,self__.path);
});

flow.cursors.t24964.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__24968){
var vec__24969 = p__24968;
var k = cljs.core.nth.call(null,vec__24969,(0),null);
var v = cljs.core.nth.call(null,vec__24969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,flow.cursors.__GT_cursor.call(null,v,self__._BANG_state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

flow.cursors.t24964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return self__.map_cursor.call(null,cljs.core.with_meta.call(null,self__.value,new_meta),self__._BANG_state,self__.path);
});

flow.cursors.t24964.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return flow.cursors.__GT_cursor.call(null,cljs.core._conj.call(null,self__.value,o),self__._BANG_state,self__.path);
});

flow.cursors.t24964.prototype.call = (function() {
var G__24970 = null;
var G__24970__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__24970__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__24970 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24970__2.call(this,self__,k);
case 3:
return G__24970__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24970.cljs$core$IFn$_invoke$arity$2 = G__24970__2;
G__24970.cljs$core$IFn$_invoke$arity$3 = G__24970__3;
return G__24970;
})()
;

flow.cursors.t24964.prototype.apply = (function (self__,args24967){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24967)));
});

flow.cursors.t24964.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

flow.cursors.t24964.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

flow.cursors.t24964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24966,meta24965__$1){
var self__ = this;
var _24966__$1 = this;
return (new flow.cursors.t24964(self__.path,self__._BANG_state,self__.value,self__.map_cursor,meta24965__$1));
});

flow.cursors.t24964.cljs$lang$type = true;

flow.cursors.t24964.cljs$lang$ctorStr = "flow.cursors/t24964";

flow.cursors.t24964.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"flow.cursors/t24964");
});

flow.cursors.__GT_t24964 = (function __GT_t24964(path__$1,_BANG_state__$1,value__$1,map_cursor__$1,meta24965){
return (new flow.cursors.t24964(path__$1,_BANG_state__$1,value__$1,map_cursor__$1,meta24965));
});

}

return (new flow.cursors.t24964(path,_BANG_state,value,map_cursor,cljs.core.PersistentArrayMap.EMPTY));
});
flow.cursors.vec_cursor = (function vec_cursor(value,_BANG_state,path,key_fn){
var pk = (function pk(v,i){
if(cljs.core.truth_(key_fn)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flow.cursors","pk","flow.cursors/pk",-89207551),key_fn,key_fn.call(null,v)], null);
} else {
return i;
}
});
if(typeof flow.cursors.t24975 !== 'undefined'){
} else {

/**
* @constructor
*/
flow.cursors.t24975 = (function (pk,key_fn,path,_BANG_state,value,vec_cursor,meta24976){
this.pk = pk;
this.key_fn = key_fn;
this.path = path;
this._BANG_state = _BANG_state;
this.value = value;
this.vec_cursor = vec_cursor;
this.meta24976 = meta24976;
this.cljs$lang$protocol_mask$partition0$ = 2175148827;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
flow.cursors.t24975.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

flow.cursors.t24975.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

flow.cursors.t24975.prototype.flow$cursors$Cursor$ = true;

flow.cursors.t24975.prototype.flow$cursors$Cursor$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

flow.cursors.t24975.prototype.flow$cursors$Cursor$__BANG_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._BANG_state;
});

flow.cursors.t24975.prototype.flow$cursors$Cursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

flow.cursors.t24975.prototype.flow$cursors$Cursor$__GT_atom$arity$2 = (function (_,extra_path){
var self__ = this;
var ___$1 = this;
return flow.cursors.cursor__GT_atom.call(null,self__._BANG_state,cljs.core.vec.call(null,cljs.core.concat.call(null,self__.path,extra_path)));
});

flow.cursors.t24975.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var v = cljs.core.nth.call(null,self__.value,n);
return flow.cursors.__GT_cursor.call(null,v,self__._BANG_state,cljs.core.conj.call(null,self__.path,self__.pk.call(null,v,n)));
});

flow.cursors.t24975.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
var v = cljs.core.nth.call(null,self__.value,n);
return flow.cursors.__GT_cursor.call(null,v,self__._BANG_state,cljs.core.conj.call(null,self__.path,self__.pk.call(null,v,n)));
} else {
return not_found;
}
});

flow.cursors.t24975.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write.call(null,writer,cljs.core.pr_str.call(null,self__.value));
});

flow.cursors.t24975.prototype.flow$cursors$Keyable$ = true;

flow.cursors.t24975.prototype.flow$cursors$Keyable$_keyed_by$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return self__.vec_cursor.call(null,self__.value,self__._BANG_state,self__.path,f);
});

flow.cursors.t24975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

flow.cursors.t24975.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.vec_cursor.call(null,self__.value,self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.value);
});

flow.cursors.t24975.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.vec_cursor.call(null,cljs.core._peek.call(null,self__.value),self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.vec_cursor.call(null,cljs.core._pop.call(null,self__.value),self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(flow.cursors.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,flow.cursors._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

flow.cursors.t24975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24977){
var self__ = this;
var _24977__$1 = this;
return self__.meta24976;
});

flow.cursors.t24975.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

flow.cursors.t24975.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return self__.vec_cursor.call(null,cljs.core._assoc_n.call(null,self__.value,n,v),self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.not_empty.call(null,self__.value))){
return cljs.core.map_indexed.call(null,((function (this$__$1){
return (function (i,v){
return flow.cursors.__GT_cursor.call(null,v,self__._BANG_state,cljs.core.conj.call(null,self__.path,self__.pk.call(null,v,i)));
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

flow.cursors.t24975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return self__.vec_cursor.call(null,cljs.core.with_meta.call(null,self__.value,new_meta),self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return self__.vec_cursor.call(null,cljs.core.conj.call(null,self__.value,o),self__._BANG_state,self__.path,self__.key_fn);
});

flow.cursors.t24975.prototype.call = (function() {
var G__24979 = null;
var G__24979__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__24979__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__24979 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24979__2.call(this,self__,k);
case 3:
return G__24979__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24979.cljs$core$IFn$_invoke$arity$2 = G__24979__2;
G__24979.cljs$core$IFn$_invoke$arity$3 = G__24979__3;
return G__24979;
})()
;

flow.cursors.t24975.prototype.apply = (function (self__,args24978){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24978)));
});

flow.cursors.t24975.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

flow.cursors.t24975.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

flow.cursors.t24975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24977,meta24976__$1){
var self__ = this;
var _24977__$1 = this;
return (new flow.cursors.t24975(self__.pk,self__.key_fn,self__.path,self__._BANG_state,self__.value,self__.vec_cursor,meta24976__$1));
});

flow.cursors.t24975.cljs$lang$type = true;

flow.cursors.t24975.cljs$lang$ctorStr = "flow.cursors/t24975";

flow.cursors.t24975.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"flow.cursors/t24975");
});

flow.cursors.__GT_t24975 = (function __GT_t24975(pk__$1,key_fn__$1,path__$1,_BANG_state__$1,value__$1,vec_cursor__$1,meta24976){
return (new flow.cursors.t24975(pk__$1,key_fn__$1,path__$1,_BANG_state__$1,value__$1,vec_cursor__$1,meta24976));
});

}

return (new flow.cursors.t24975(pk,key_fn,path,_BANG_state,value,vec_cursor,cljs.core.PersistentArrayMap.EMPTY));
});
flow.cursors.cloneable__GT_cursor = (function cloneable__GT_cursor(value,_BANG_state,path){
var x24981 = cljs.core.clone.call(null,value);
x24981.cljs$core$IEquiv$ = true;

x24981.cljs$core$IEquiv$_equiv$arity$2 = ((function (x24981){
return (function (_,other){
var ___$1 = this;
if(flow.cursors.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,cljs.core.val,flow.cursors._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,cljs.core.val,other);
}
});})(x24981))
;

x24981.flow$cursors$Cursor$ = true;

x24981.flow$cursors$Cursor$_value$arity$1 = ((function (x24981){
return (function (_){
var ___$1 = this;
return value;
});})(x24981))
;

x24981.flow$cursors$Cursor$__BANG_state$arity$1 = ((function (x24981){
return (function (_){
var ___$1 = this;
return _BANG_state;
});})(x24981))
;

x24981.flow$cursors$Cursor$_path$arity$1 = ((function (x24981){
return (function (_){
var ___$1 = this;
return path;
});})(x24981))
;

x24981.flow$cursors$Cursor$__GT_atom$arity$2 = ((function (x24981){
return (function (_,extra_path){
var ___$1 = this;
return flow.cursors.cursor__GT_atom.call(null,_BANG_state,cljs.core.vec.call(null,cljs.core.concat.call(null,path,extra_path)));
});})(x24981))
;

return x24981;
});
flow.cursors.__GT_cursor = (function __GT_cursor(value,_BANG_state,path){
if(flow.cursors.cursor_QMARK_.call(null,value)){
return value;
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return flow.cursors.map_cursor.call(null,value,_BANG_state,path);
} else {
if((cljs.core.coll_QMARK_.call(null,value)) || (cljs.core.seq_QMARK_.call(null,value))){
return flow.cursors.vec_cursor.call(null,value,_BANG_state,path,null);
} else {
if((function (){var G__24983 = value;
if(G__24983){
var bit__16810__auto__ = (G__24983.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__16810__auto__) || (G__24983.cljs$core$ICloneable$)){
return true;
} else {
if((!G__24983.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__24983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__24983);
}
})()){
return flow.cursors.cloneable__GT_cursor.call(null,value,_BANG_state,path);
} else {
return value;

}
}
}
}
});
flow.cursors.keyed_by = (function keyed_by(f,coll){
if((function (){var G__24985 = coll;
if(G__24985){
var bit__16810__auto__ = null;
if(cljs.core.truth_((function (){var or__16129__auto__ = bit__16810__auto__;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return G__24985.flow$cursors$Keyable$;
}
})())){
return true;
} else {
if((!G__24985.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Keyable,G__24985);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,flow.cursors.Keyable,G__24985);
}
})()){
return flow.cursors._keyed_by.call(null,coll,f);
} else {
if((cljs.core.sequential_QMARK_.call(null,coll)) || (cljs.core.seqable_QMARK_.call(null,coll))){
return cljs.core.map.call(null,(function (el){
if(flow.cursors.cursor_QMARK_.call(null,el)){
return flow.cursors.__GT_cursor.call(null,flow.cursors._value.call(null,el),flow.cursors.__BANG_state.call(null,el),cljs.core.concat.call(null,cljs.core.butlast.call(null,flow.cursors._path.call(null,el)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flow.cursors","pk","flow.cursors/pk",-89207551),f,f.call(null,el)], null)], null)));
} else {
return el;
}
}),coll);
} else {
if((coll == null)){
return null;
} else {
return null;
}
}
}
});

//# sourceMappingURL=cursors.js.map?rel=1442373853977