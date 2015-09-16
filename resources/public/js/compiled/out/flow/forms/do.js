// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.do$');
goog.require('cljs.core');
flow.forms.do$.build_do = (function build_do(run_side_effects_BANG_,build_body){
return (function (){
var update_do_BANG_ = (function update_do_BANG_(body){
run_side_effects_BANG_.call(null);

var body__$1 = (function (){var or__16129__auto__ = body;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return build_body.call(null);
}
})();
var vec__25450 = body__$1.call(null);
var $el = cljs.core.nth.call(null,vec__25450,(0),null);
var update_body_BANG_ = cljs.core.nth.call(null,vec__25450,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el,((function (body__$1,vec__25450,$el,update_body_BANG_){
return (function (){
return update_do_BANG_.call(null,update_body_BANG_);
});})(body__$1,vec__25450,$el,update_body_BANG_))
], null);
});
return update_do_BANG_.call(null,null);
});
});

//# sourceMappingURL=do.js.map?rel=1442373854627