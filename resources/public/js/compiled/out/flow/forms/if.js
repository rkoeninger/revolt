// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.if$');
goog.require('cljs.core');
flow.forms.if$.build_if = (function build_if(test_fn,build_then,build_else){
return (function (){
var build_branch = (function build_branch(test_value){
if(cljs.core.truth_(test_value)){
return build_then.call(null);
} else {
return build_else.call(null);
}
});
var update_if = (function update_if(old_test_value,update_current_branch_BANG_){
var new_test_value = cljs.core.boolean$.call(null,test_fn.call(null));
var new_branch = (cljs.core.truth_((function (){var and__16117__auto__ = update_current_branch_BANG_;
if(cljs.core.truth_(and__16117__auto__)){
return cljs.core._EQ_.call(null,old_test_value,new_test_value);
} else {
return and__16117__auto__;
}
})())?update_current_branch_BANG_:build_branch.call(null,new_test_value));
var vec__25460 = new_branch.call(null);
var $branch_el = cljs.core.nth.call(null,vec__25460,(0),null);
var update_branch_BANG_ = cljs.core.nth.call(null,vec__25460,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$branch_el,((function (new_test_value,new_branch,vec__25460,$branch_el,update_branch_BANG_){
return (function (){
return update_if.call(null,new_test_value,update_branch_BANG_);
});})(new_test_value,new_branch,vec__25460,$branch_el,update_branch_BANG_))
], null);
});
return update_if.call(null,null,null);
});
});

//# sourceMappingURL=if.js.map?rel=1442373854652