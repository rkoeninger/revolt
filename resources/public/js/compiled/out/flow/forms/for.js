// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.for$');
goog.require('cljs.core');
goog.require('flow.state');
goog.require('flow.cursors');
goog.require('flow.dom.elements');
flow.forms.for$.value_pk = (function value_pk(value){
if(flow.cursors.cursor_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flow.forms.for","cursor","flow.forms.for/cursor",-1202429058),flow.cursors.__BANG_state.call(null,value),flow.cursors._path.call(null,value)], null);
} else {
return value;
}
});
flow.forms.for$.for_values = (function for_values(compiled_bindings){
return cljs.core.reduce.call(null,(function (acc,p__24752){
var map__24753 = p__24752;
var map__24753__$1 = ((cljs.core.seq_QMARK_.call(null,map__24753))?cljs.core.apply.call(null,cljs.core.hash_map,map__24753):map__24753);
var destructure_fn = cljs.core.get.call(null,map__24753__$1,new cljs.core.Keyword(null,"destructure-fn","destructure-fn",822729401));
var value_fn = cljs.core.get.call(null,map__24753__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__16885__auto__ = ((function (map__24753,map__24753__$1,destructure_fn,value_fn){
return (function iter__24754(s__24755){
return (new cljs.core.LazySeq(null,((function (map__24753,map__24753__$1,destructure_fn,value_fn){
return (function (){
var s__24755__$1 = s__24755;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24755__$1);
if(temp__4126__auto__){
var s__24755__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24755__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__24755__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__24757 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__24756 = (0);
while(true){
if((i__24756 < size__16884__auto__)){
var map__24770 = cljs.core._nth.call(null,c__16883__auto__,i__24756);
var map__24770__$1 = ((cljs.core.seq_QMARK_.call(null,map__24770))?cljs.core.apply.call(null,cljs.core.hash_map,map__24770):map__24770);
var pks = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"pks","pks",2106689326));
var state = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.chunk_append.call(null,b__24757,(function (){var _STAR_state_STAR_24771 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state;

try{return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = ((function (i__24756,_STAR_state_STAR_24771,map__24770,map__24770__$1,pks,state,c__16883__auto__,size__16884__auto__,b__24757,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn){
return (function iter__24772(s__24773){
return (new cljs.core.LazySeq(null,((function (i__24756,_STAR_state_STAR_24771,map__24770,map__24770__$1,pks,state,c__16883__auto__,size__16884__auto__,b__24757,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn){
return (function (){
var s__24773__$1 = s__24773;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__24773__$1);
if(temp__4126__auto____$1){
var s__24773__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24773__$2)){
var c__16883__auto____$1 = cljs.core.chunk_first.call(null,s__24773__$2);
var size__16884__auto____$1 = cljs.core.count.call(null,c__16883__auto____$1);
var b__24775 = cljs.core.chunk_buffer.call(null,size__16884__auto____$1);
if((function (){var i__24774 = (0);
while(true){
if((i__24774 < size__16884__auto____$1)){
var value = cljs.core._nth.call(null,c__16883__auto____$1,i__24774);
cljs.core.chunk_append.call(null,b__24775,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.call(null,state,destructure_fn.call(null,value)),new cljs.core.Keyword(null,"pks","pks",2106689326),cljs.core.conj.call(null,pks,flow.forms.for$.value_pk.call(null,value))], null));

var G__24782 = (i__24774 + (1));
i__24774 = G__24782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24775),iter__24772.call(null,cljs.core.chunk_rest.call(null,s__24773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24775),null);
}
} else {
var value = cljs.core.first.call(null,s__24773__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.call(null,state,destructure_fn.call(null,value)),new cljs.core.Keyword(null,"pks","pks",2106689326),cljs.core.conj.call(null,pks,flow.forms.for$.value_pk.call(null,value))], null),iter__24772.call(null,cljs.core.rest.call(null,s__24773__$2)));
}
} else {
return null;
}
break;
}
});})(i__24756,_STAR_state_STAR_24771,map__24770,map__24770__$1,pks,state,c__16883__auto__,size__16884__auto__,b__24757,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn))
,null,null));
});})(i__24756,_STAR_state_STAR_24771,map__24770,map__24770__$1,pks,state,c__16883__auto__,size__16884__auto__,b__24757,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn))
;
return iter__16885__auto__.call(null,value_fn.call(null));
})());
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24771;
}})());

var G__24783 = (i__24756 + (1));
i__24756 = G__24783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24757),iter__24754.call(null,cljs.core.chunk_rest.call(null,s__24755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24757),null);
}
} else {
var map__24776 = cljs.core.first.call(null,s__24755__$2);
var map__24776__$1 = ((cljs.core.seq_QMARK_.call(null,map__24776))?cljs.core.apply.call(null,cljs.core.hash_map,map__24776):map__24776);
var pks = cljs.core.get.call(null,map__24776__$1,new cljs.core.Keyword(null,"pks","pks",2106689326));
var state = cljs.core.get.call(null,map__24776__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.cons.call(null,(function (){var _STAR_state_STAR_24777 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state;

try{return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = ((function (_STAR_state_STAR_24777,map__24776,map__24776__$1,pks,state,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn){
return (function iter__24778(s__24779){
return (new cljs.core.LazySeq(null,((function (_STAR_state_STAR_24777,map__24776,map__24776__$1,pks,state,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn){
return (function (){
var s__24779__$1 = s__24779;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__24779__$1);
if(temp__4126__auto____$1){
var s__24779__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24779__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__24779__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__24781 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__24780 = (0);
while(true){
if((i__24780 < size__16884__auto__)){
var value = cljs.core._nth.call(null,c__16883__auto__,i__24780);
cljs.core.chunk_append.call(null,b__24781,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.call(null,state,destructure_fn.call(null,value)),new cljs.core.Keyword(null,"pks","pks",2106689326),cljs.core.conj.call(null,pks,flow.forms.for$.value_pk.call(null,value))], null));

var G__24784 = (i__24780 + (1));
i__24780 = G__24784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24781),iter__24778.call(null,cljs.core.chunk_rest.call(null,s__24779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24781),null);
}
} else {
var value = cljs.core.first.call(null,s__24779__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.call(null,state,destructure_fn.call(null,value)),new cljs.core.Keyword(null,"pks","pks",2106689326),cljs.core.conj.call(null,pks,flow.forms.for$.value_pk.call(null,value))], null),iter__24778.call(null,cljs.core.rest.call(null,s__24779__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_state_STAR_24777,map__24776,map__24776__$1,pks,state,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn))
,null,null));
});})(_STAR_state_STAR_24777,map__24776,map__24776__$1,pks,state,s__24755__$2,temp__4126__auto__,map__24753,map__24753__$1,destructure_fn,value_fn))
;
return iter__16885__auto__.call(null,value_fn.call(null));
})());
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24777;
}})(),iter__24754.call(null,cljs.core.rest.call(null,s__24755__$2)));
}
} else {
return null;
}
break;
}
});})(map__24753,map__24753__$1,destructure_fn,value_fn))
,null,null));
});})(map__24753,map__24753__$1,destructure_fn,value_fn))
;
return iter__16885__auto__.call(null,acc);
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),flow.state._STAR_state_STAR_,new cljs.core.Keyword(null,"pks","pks",2106689326),cljs.core.PersistentVector.EMPTY], null)], null),compiled_bindings);
});
flow.forms.for$.build_for = (function build_for(compiled_bindings,build_body){
return (function (){
var update_for_BANG_ = (function update_for_BANG_(body_cache){
var for_bodies = cljs.core.doall.call(null,(function (){var iter__16885__auto__ = (function iter__24897(s__24898){
return (new cljs.core.LazySeq(null,(function (){
var s__24898__$1 = s__24898;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24898__$1);
if(temp__4126__auto__){
var s__24898__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24898__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__24898__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__24900 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__24899 = (0);
while(true){
if((i__24899 < size__16884__auto__)){
var map__24907 = cljs.core._nth.call(null,c__16883__auto__,i__24899);
var map__24907__$1 = ((cljs.core.seq_QMARK_.call(null,map__24907))?cljs.core.apply.call(null,cljs.core.hash_map,map__24907):map__24907);
var pks = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"pks","pks",2106689326));
var state = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.chunk_append.call(null,b__24900,(function (){var _STAR_state_STAR_24908 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state;

try{var vec__24909 = (function (){var or__16129__auto__ = cljs.core.get.call(null,body_cache,pks);
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return build_body.call(null);
}
})().call(null);
var $el = cljs.core.nth.call(null,vec__24909,(0),null);
var update_body_BANG_ = cljs.core.nth.call(null,vec__24909,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$el","$el",-583727377),$el,new cljs.core.Keyword(null,"update!","update!",-1453508586),update_body_BANG_,new cljs.core.Keyword(null,"pks","pks",2106689326),pks], null);
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24908;
}})());

var G__24913 = (i__24899 + (1));
i__24899 = G__24913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24900),iter__24897.call(null,cljs.core.chunk_rest.call(null,s__24898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24900),null);
}
} else {
var map__24910 = cljs.core.first.call(null,s__24898__$2);
var map__24910__$1 = ((cljs.core.seq_QMARK_.call(null,map__24910))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);
var pks = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"pks","pks",2106689326));
var state = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.cons.call(null,(function (){var _STAR_state_STAR_24911 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state;

try{var vec__24912 = (function (){var or__16129__auto__ = cljs.core.get.call(null,body_cache,pks);
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return build_body.call(null);
}
})().call(null);
var $el = cljs.core.nth.call(null,vec__24912,(0),null);
var update_body_BANG_ = cljs.core.nth.call(null,vec__24912,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$el","$el",-583727377),$el,new cljs.core.Keyword(null,"update!","update!",-1453508586),update_body_BANG_,new cljs.core.Keyword(null,"pks","pks",2106689326),pks], null);
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24911;
}})(),iter__24897.call(null,cljs.core.rest.call(null,s__24898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,flow.forms.for$.for_values.call(null,compiled_bindings));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__16129__auto__ = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"$el","$el",-583727377),for_bodies));
if(or__16129__auto__){
return or__16129__auto__;
} else {
return flow.dom.elements.null_elem.call(null);
}
})(),((function (for_bodies){
return (function (){
return update_for_BANG_.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"pks","pks",2106689326),new cljs.core.Keyword(null,"update!","update!",-1453508586))),for_bodies));
});})(for_bodies))
], null);
});
return update_for_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
});

//# sourceMappingURL=for.js.map?rel=1442373853721