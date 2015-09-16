// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.dom.children');
goog.require('cljs.core');
goog.require('flow.dom.diff');
goog.require('flow.dom.elements');
flow.dom.children.with_lock = (function with_lock(obj,f){
return f.call(null);
});
flow.dom.children.new_child_holder_BANG_ = (function new_child_holder_BANG_($parent){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$parent","$parent",655677771),$parent,new cljs.core.Keyword(null,"el-ish","el-ish",526475566),new cljs.core.Keyword("flow.dom.children","init","flow.dom.children/init",-668168527)], null));
});
flow.dom.children.swap_child_seqs_BANG_ = (function swap_child_seqs_BANG_($parent,old_els,new_els){
var $last_elem = cljs.core.last.call(null,old_els);
var $next_sibling = flow.dom.elements.next_sibling.call(null,$parent,$last_elem);
var diff = flow.dom.diff.vector_diff.call(null,old_els,new_els);
var seq__25165_25174 = cljs.core.seq.call(null,diff);
var chunk__25166_25175 = null;
var count__25167_25176 = (0);
var i__25168_25177 = (0);
while(true){
if((i__25168_25177 < count__25167_25176)){
var vec__25169_25178 = cljs.core._nth.call(null,chunk__25166_25175,i__25168_25177);
var action_25179 = cljs.core.nth.call(null,vec__25169_25178,(0),null);
var $el_25180 = cljs.core.nth.call(null,vec__25169_25178,(1),null);
if(cljs.core._EQ_.call(null,action_25179,new cljs.core.Keyword(null,"moved-out","moved-out",-540663928))){
flow.dom.elements.remove_child_BANG_.call(null,$parent,$el_25180);
} else {
}

var G__25181 = seq__25165_25174;
var G__25182 = chunk__25166_25175;
var G__25183 = count__25167_25176;
var G__25184 = (i__25168_25177 + (1));
seq__25165_25174 = G__25181;
chunk__25166_25175 = G__25182;
count__25167_25176 = G__25183;
i__25168_25177 = G__25184;
continue;
} else {
var temp__4126__auto___25185 = cljs.core.seq.call(null,seq__25165_25174);
if(temp__4126__auto___25185){
var seq__25165_25186__$1 = temp__4126__auto___25185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25165_25186__$1)){
var c__16916__auto___25187 = cljs.core.chunk_first.call(null,seq__25165_25186__$1);
var G__25188 = cljs.core.chunk_rest.call(null,seq__25165_25186__$1);
var G__25189 = c__16916__auto___25187;
var G__25190 = cljs.core.count.call(null,c__16916__auto___25187);
var G__25191 = (0);
seq__25165_25174 = G__25188;
chunk__25166_25175 = G__25189;
count__25167_25176 = G__25190;
i__25168_25177 = G__25191;
continue;
} else {
var vec__25170_25192 = cljs.core.first.call(null,seq__25165_25186__$1);
var action_25193 = cljs.core.nth.call(null,vec__25170_25192,(0),null);
var $el_25194 = cljs.core.nth.call(null,vec__25170_25192,(1),null);
if(cljs.core._EQ_.call(null,action_25193,new cljs.core.Keyword(null,"moved-out","moved-out",-540663928))){
flow.dom.elements.remove_child_BANG_.call(null,$parent,$el_25194);
} else {
}

var G__25195 = cljs.core.next.call(null,seq__25165_25186__$1);
var G__25196 = null;
var G__25197 = (0);
var G__25198 = (0);
seq__25165_25174 = G__25195;
chunk__25166_25175 = G__25196;
count__25167_25176 = G__25197;
i__25168_25177 = G__25198;
continue;
}
} else {
}
}
break;
}

cljs.core.reduce.call(null,((function ($last_elem,$next_sibling,diff){
return (function ($next_sibling__$1,p__25171){
var vec__25172 = p__25171;
var action = cljs.core.nth.call(null,vec__25172,(0),null);
var $new_el = cljs.core.nth.call(null,vec__25172,(1),null);
var G__25173 = (((action instanceof cljs.core.Keyword))?action.fqn:null);
switch (G__25173) {
case "moved-out":
return $next_sibling__$1;

break;
case "moved-in":
if(cljs.core.truth_($next_sibling__$1)){
flow.dom.elements.insert_before_BANG_.call(null,$parent,$next_sibling__$1,$new_el);
} else {
flow.dom.elements.append_child_BANG_.call(null,$parent,$new_el);
}

return $new_el;

break;
case "kept":
return $new_el;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
});})($last_elem,$next_sibling,diff))
,$next_sibling,cljs.core.reverse.call(null,diff));

return new_els;
});
flow.dom.children.swap_child_el_BANG_ = (function swap_child_el_BANG_($parent,$old_el,$new_el){
var G__25209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_.call(null,$old_el),cljs.core.coll_QMARK_.call(null,$new_el)], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__25209)){
return flow.dom.children.swap_child_seqs_BANG_.call(null,$parent,$old_el,$new_el);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__25209)){
flow.dom.elements.insert_before_BANG_.call(null,$parent,cljs.core.first.call(null,$old_el),$new_el);

var seq__25210 = cljs.core.seq.call(null,$old_el);
var chunk__25211 = null;
var count__25212 = (0);
var i__25213 = (0);
while(true){
if((i__25213 < count__25212)){
var $el = cljs.core._nth.call(null,chunk__25211,i__25213);
flow.dom.elements.remove_child_BANG_.call(null,$parent,$el);

var G__25218 = seq__25210;
var G__25219 = chunk__25211;
var G__25220 = count__25212;
var G__25221 = (i__25213 + (1));
seq__25210 = G__25218;
chunk__25211 = G__25219;
count__25212 = G__25220;
i__25213 = G__25221;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25210);
if(temp__4126__auto__){
var seq__25210__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25210__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__25210__$1);
var G__25222 = cljs.core.chunk_rest.call(null,seq__25210__$1);
var G__25223 = c__16916__auto__;
var G__25224 = cljs.core.count.call(null,c__16916__auto__);
var G__25225 = (0);
seq__25210 = G__25222;
chunk__25211 = G__25223;
count__25212 = G__25224;
i__25213 = G__25225;
continue;
} else {
var $el = cljs.core.first.call(null,seq__25210__$1);
flow.dom.elements.remove_child_BANG_.call(null,$parent,$el);

var G__25226 = cljs.core.next.call(null,seq__25210__$1);
var G__25227 = null;
var G__25228 = (0);
var G__25229 = (0);
seq__25210 = G__25226;
chunk__25211 = G__25227;
count__25212 = G__25228;
i__25213 = G__25229;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__25209)){
var seq__25214_25230 = cljs.core.seq.call(null,$new_el);
var chunk__25215_25231 = null;
var count__25216_25232 = (0);
var i__25217_25233 = (0);
while(true){
if((i__25217_25233 < count__25216_25232)){
var $el_25234 = cljs.core._nth.call(null,chunk__25215_25231,i__25217_25233);
flow.dom.elements.insert_before_BANG_.call(null,$parent,$old_el,$el_25234);

var G__25235 = seq__25214_25230;
var G__25236 = chunk__25215_25231;
var G__25237 = count__25216_25232;
var G__25238 = (i__25217_25233 + (1));
seq__25214_25230 = G__25235;
chunk__25215_25231 = G__25236;
count__25216_25232 = G__25237;
i__25217_25233 = G__25238;
continue;
} else {
var temp__4126__auto___25239 = cljs.core.seq.call(null,seq__25214_25230);
if(temp__4126__auto___25239){
var seq__25214_25240__$1 = temp__4126__auto___25239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25214_25240__$1)){
var c__16916__auto___25241 = cljs.core.chunk_first.call(null,seq__25214_25240__$1);
var G__25242 = cljs.core.chunk_rest.call(null,seq__25214_25240__$1);
var G__25243 = c__16916__auto___25241;
var G__25244 = cljs.core.count.call(null,c__16916__auto___25241);
var G__25245 = (0);
seq__25214_25230 = G__25242;
chunk__25215_25231 = G__25243;
count__25216_25232 = G__25244;
i__25217_25233 = G__25245;
continue;
} else {
var $el_25246 = cljs.core.first.call(null,seq__25214_25240__$1);
flow.dom.elements.insert_before_BANG_.call(null,$parent,$old_el,$el_25246);

var G__25247 = cljs.core.next.call(null,seq__25214_25240__$1);
var G__25248 = null;
var G__25249 = (0);
var G__25250 = (0);
seq__25214_25230 = G__25247;
chunk__25215_25231 = G__25248;
count__25216_25232 = G__25249;
i__25217_25233 = G__25250;
continue;
}
} else {
}
}
break;
}

return flow.dom.elements.remove_child_BANG_.call(null,$parent,$old_el);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__25209)){
if(($old_el === $new_el)){
return null;
} else {
return flow.dom.elements.replace_child_BANG_.call(null,$parent,$old_el,$new_el);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_.call(null,$old_el),cljs.core.coll_QMARK_.call(null,$new_el)], null))].join('')));

}
}
}
}
});
flow.dom.children.replace_child_BANG_ = (function replace_child_BANG_(_BANG_child_holder,new_el_ish){
return flow.dom.children.with_lock.call(null,_BANG_child_holder,(function (){
var map__25252 = cljs.core.deref.call(null,_BANG_child_holder);
var map__25252__$1 = ((cljs.core.seq_QMARK_.call(null,map__25252))?cljs.core.apply.call(null,cljs.core.hash_map,map__25252):map__25252);
var $parent = cljs.core.get.call(null,map__25252__$1,new cljs.core.Keyword(null,"$parent","$parent",655677771));
var old_el_ish = cljs.core.get.call(null,map__25252__$1,new cljs.core.Keyword(null,"el-ish","el-ish",526475566));
var $old_el = cljs.core.get.call(null,map__25252__$1,new cljs.core.Keyword(null,"$el","$el",-583727377));
if(cljs.core._EQ_.call(null,old_el_ish,new_el_ish)){
return null;
} else {
var $new_el = flow.dom.elements.__GT_el.call(null,new_el_ish);
cljs.core.reset_BANG_.call(null,_BANG_child_holder,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$parent","$parent",655677771),$parent,new cljs.core.Keyword(null,"el-ish","el-ish",526475566),new_el_ish,new cljs.core.Keyword(null,"$el","$el",-583727377),$new_el], null));

return flow.dom.children.swap_child_el_BANG_.call(null,$parent,$old_el,$new_el);
}
}));
});

//# sourceMappingURL=children.js.map?rel=1442373854317