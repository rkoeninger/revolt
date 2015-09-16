// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.case$');
goog.require('cljs.core');
flow.forms.case$.build_case = (function build_case(value_fn,values,build_branch){
return (function (){
var update_case = (function update_case(old_value,update_current_branch_BANG_){
var new_value = cljs.core.get.call(null,values,value_fn.call(null),new cljs.core.Keyword("flow.forms.case","default","flow.forms.case/default",-1798169929));
var new_branch = ((cljs.core.not_EQ_.call(null,old_value,new_value))?build_branch.call(null,new_value):update_current_branch_BANG_);
var vec__25476 = new_branch.call(null);
var $branch_el = cljs.core.nth.call(null,vec__25476,(0),null);
var update_branch_BANG_ = cljs.core.nth.call(null,vec__25476,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$branch_el,((function (new_value,new_branch,vec__25476,$branch_el,update_branch_BANG_){
return (function (){
return update_case.call(null,new_value,update_branch_BANG_);
});})(new_value,new_branch,vec__25476,$branch_el,update_branch_BANG_))
], null);
});
return update_case.call(null,new cljs.core.Keyword("flow.forms.case","init","flow.forms.case/init",-2008316331),null);
});
});

//# sourceMappingURL=case.js.map?rel=1442373854730