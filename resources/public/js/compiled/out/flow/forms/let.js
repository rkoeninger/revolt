// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.let$');
goog.require('cljs.core');
goog.require('flow.state');
flow.forms.let$.build_let = (function build_let(compiled_bindings,build_body){
return (function (){
var update_let_BANG_ = (function update_let_BANG_(body){
var _STAR_state_STAR_25436 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = cljs.core.reduce.call(null,((function (_STAR_state_STAR_25436){
return (function (state,p__25437){
var map__25438 = p__25437;
var map__25438__$1 = ((cljs.core.seq_QMARK_.call(null,map__25438))?cljs.core.apply.call(null,cljs.core.hash_map,map__25438):map__25438);
var destructure_fn = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"destructure-fn","destructure-fn",822729401));
var value_fn = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
var _STAR_state_STAR_25439 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state;

try{return cljs.core.merge.call(null,state,destructure_fn.call(null,value_fn.call(null)));
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_25439;
}});})(_STAR_state_STAR_25436))
,flow.state._STAR_state_STAR_,compiled_bindings);

try{var vec__25440 = (function (){var or__16129__auto__ = body;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return build_body.call(null);
}
})().call(null);
var $el = cljs.core.nth.call(null,vec__25440,(0),null);
var update_body_BANG_ = cljs.core.nth.call(null,vec__25440,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el,((function (vec__25440,$el,update_body_BANG_,_STAR_state_STAR_25436){
return (function (){
return update_let_BANG_.call(null,update_body_BANG_);
});})(vec__25440,$el,update_body_BANG_,_STAR_state_STAR_25436))
], null);
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_25436;
}});
return update_let_BANG_.call(null,null);
});
});

//# sourceMappingURL=let.js.map?rel=1442373854602