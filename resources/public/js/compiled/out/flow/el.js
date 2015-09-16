// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.el');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('flow.state');
goog.require('flow.cursors');
goog.require('flow.render');
goog.require('flow.dom.elements');
goog.require('flow.deps');
goog.require('flow.dom.children');
flow.el.update_watches_BANG_ = (function update_watches_BANG_(p__25532){
var map__25542 = p__25532;
var map__25542__$1 = ((cljs.core.seq_QMARK_.call(null,map__25542))?cljs.core.apply.call(null,cljs.core.hash_map,map__25542):map__25542);
var watch_id = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919));
var on_change = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var new_deps = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"new-deps","new-deps",1460231001));
var old_deps = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"old-deps","old-deps",1729377789));
var old_atoms = cljs.core.set.call(null,cljs.core.keys.call(null,old_deps));
var new_atoms = cljs.core.set.call(null,cljs.core.keys.call(null,new_deps));
var seq__25543_25551 = cljs.core.seq.call(null,clojure.set.difference.call(null,old_atoms,new_atoms));
var chunk__25544_25552 = null;
var count__25545_25553 = (0);
var i__25546_25554 = (0);
while(true){
if((i__25546_25554 < count__25545_25553)){
var old_atom_25555 = cljs.core._nth.call(null,chunk__25544_25552,i__25546_25554);
cljs.core.remove_watch.call(null,old_atom_25555,watch_id);

var G__25556 = seq__25543_25551;
var G__25557 = chunk__25544_25552;
var G__25558 = count__25545_25553;
var G__25559 = (i__25546_25554 + (1));
seq__25543_25551 = G__25556;
chunk__25544_25552 = G__25557;
count__25545_25553 = G__25558;
i__25546_25554 = G__25559;
continue;
} else {
var temp__4126__auto___25560 = cljs.core.seq.call(null,seq__25543_25551);
if(temp__4126__auto___25560){
var seq__25543_25561__$1 = temp__4126__auto___25560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25543_25561__$1)){
var c__16916__auto___25562 = cljs.core.chunk_first.call(null,seq__25543_25561__$1);
var G__25563 = cljs.core.chunk_rest.call(null,seq__25543_25561__$1);
var G__25564 = c__16916__auto___25562;
var G__25565 = cljs.core.count.call(null,c__16916__auto___25562);
var G__25566 = (0);
seq__25543_25551 = G__25563;
chunk__25544_25552 = G__25564;
count__25545_25553 = G__25565;
i__25546_25554 = G__25566;
continue;
} else {
var old_atom_25567 = cljs.core.first.call(null,seq__25543_25561__$1);
cljs.core.remove_watch.call(null,old_atom_25567,watch_id);

var G__25568 = cljs.core.next.call(null,seq__25543_25561__$1);
var G__25569 = null;
var G__25570 = (0);
var G__25571 = (0);
seq__25543_25551 = G__25568;
chunk__25544_25552 = G__25569;
count__25545_25553 = G__25570;
i__25546_25554 = G__25571;
continue;
}
} else {
}
}
break;
}

var seq__25547 = cljs.core.seq.call(null,clojure.set.difference.call(null,new_atoms,old_atoms));
var chunk__25548 = null;
var count__25549 = (0);
var i__25550 = (0);
while(true){
if((i__25550 < count__25549)){
var new_atom = cljs.core._nth.call(null,chunk__25548,i__25550);
cljs.core.add_watch.call(null,new_atom,watch_id,((function (seq__25547,chunk__25548,count__25549,i__25550,new_atom,old_atoms,new_atoms,map__25542,map__25542__$1,watch_id,on_change,new_deps,old_deps){
return (function (_,___$1,old,new$){
if((old === new$)){
return null;
} else {
return on_change.call(null);
}
});})(seq__25547,chunk__25548,count__25549,i__25550,new_atom,old_atoms,new_atoms,map__25542,map__25542__$1,watch_id,on_change,new_deps,old_deps))
);

var G__25572 = seq__25547;
var G__25573 = chunk__25548;
var G__25574 = count__25549;
var G__25575 = (i__25550 + (1));
seq__25547 = G__25572;
chunk__25548 = G__25573;
count__25549 = G__25574;
i__25550 = G__25575;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25547);
if(temp__4126__auto__){
var seq__25547__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25547__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__25547__$1);
var G__25576 = cljs.core.chunk_rest.call(null,seq__25547__$1);
var G__25577 = c__16916__auto__;
var G__25578 = cljs.core.count.call(null,c__16916__auto__);
var G__25579 = (0);
seq__25547 = G__25576;
chunk__25548 = G__25577;
count__25549 = G__25578;
i__25550 = G__25579;
continue;
} else {
var new_atom = cljs.core.first.call(null,seq__25547__$1);
cljs.core.add_watch.call(null,new_atom,watch_id,((function (seq__25547,chunk__25548,count__25549,i__25550,new_atom,seq__25547__$1,temp__4126__auto__,old_atoms,new_atoms,map__25542,map__25542__$1,watch_id,on_change,new_deps,old_deps){
return (function (_,___$1,old,new$){
if((old === new$)){
return null;
} else {
return on_change.call(null);
}
});})(seq__25547,chunk__25548,count__25549,i__25550,new_atom,seq__25547__$1,temp__4126__auto__,old_atoms,new_atoms,map__25542,map__25542__$1,watch_id,on_change,new_deps,old_deps))
);

var G__25580 = cljs.core.next.call(null,seq__25547__$1);
var G__25581 = null;
var G__25582 = (0);
var G__25583 = (0);
seq__25547 = G__25580;
chunk__25548 = G__25581;
count__25549 = G__25582;
i__25550 = G__25583;
continue;
}
} else {
return null;
}
}
break;
}
});
flow.el.root = (function root($container,el){
var _BANG_deps = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var _BANG_child = cljs.core.atom.call(null,el);
var el_holder = flow.dom.children.new_child_holder_BANG_.call(null,$container);
var _BANG_dirty_QMARK_ = cljs.core.atom.call(null,true);
var watch_id = cljs.core.gensym.call(null,"watch");
var update_root_BANG_ = ((function (_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id){
return (function update_root_BANG_(){
return flow.render.schedule_rendering_frame.call(null,((function (_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id){
return (function (){
cljs.core.reset_BANG_.call(null,_BANG_dirty_QMARK_,false);

var map__25598 = flow.deps.with_watch_context.call(null,((function (_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id){
return (function (){
return cljs.core.deref.call(null,_BANG_child).call(null);
});})(_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id))
);
var map__25598__$1 = ((cljs.core.seq_QMARK_.call(null,map__25598))?cljs.core.apply.call(null,cljs.core.hash_map,map__25598):map__25598);
var deps = cljs.core.get.call(null,map__25598__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var result = cljs.core.get.call(null,map__25598__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var vec__25599_25600 = result;
var $child_25601 = cljs.core.nth.call(null,vec__25599_25600,(0),null);
var update_child_BANG__25602 = cljs.core.nth.call(null,vec__25599_25600,(1),null);
cljs.core.reset_BANG_.call(null,_BANG_child,update_child_BANG__25602);

flow.dom.children.replace_child_BANG_.call(null,el_holder,$child_25601);

var old_deps_25603 = cljs.core.deref.call(null,_BANG_deps);
flow.el.update_watches_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old-deps","old-deps",1729377789),old_deps_25603,new cljs.core.Keyword(null,"new-deps","new-deps",1460231001),deps,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),watch_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (old_deps_25603,map__25598,map__25598__$1,deps,result,_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id){
return (function (){
if(cljs.core.compare_and_set_BANG_.call(null,_BANG_dirty_QMARK_,false,true)){
return update_root_BANG_.call(null);
} else {
return null;
}
});})(old_deps_25603,map__25598,map__25598__$1,deps,result,_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id))
], null));

cljs.core.reset_BANG_.call(null,_BANG_deps,deps);

return $container;
});})(_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id))
);
});})(_BANG_deps,_BANG_child,el_holder,_BANG_dirty_QMARK_,watch_id))
;
flow.dom.elements.clear_BANG_.call(null,$container);

return update_root_BANG_.call(null);
});
flow.el.render_el = (function render_el(build_el){
return (function (){
var update_el_BANG_ = (function update_el_BANG_(p__25625){
var map__25629 = p__25625;
var map__25629__$1 = ((cljs.core.seq_QMARK_.call(null,map__25629))?cljs.core.apply.call(null,cljs.core.hash_map,map__25629):map__25629);
var deps = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var $el = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"$el","$el",-583727377));
var update_component_BANG_ = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"update-component!","update-component!",-391351872));
var map__25630 = (function (){var or__16129__auto__ = (cljs.core.truth_((function (){var and__16117__auto__ = update_component_BANG_;
if(cljs.core.truth_(and__16117__auto__)){
return flow.deps.deps_unchanged_QMARK_.call(null,deps);
} else {
return and__16117__auto__;
}
})())?(function (){
flow.deps.mark_deps_BANG_.call(null,deps);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el,update_component_BANG_], null),new cljs.core.Keyword(null,"deps","deps",1883360319),deps], null);
})()
:null);
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return flow.deps.with_watch_context.call(null,((function (or__16129__auto__,map__25629,map__25629__$1,deps,$el,update_component_BANG_){
return (function (){
return (function (){var or__16129__auto____$1 = update_component_BANG_;
if(cljs.core.truth_(or__16129__auto____$1)){
return or__16129__auto____$1;
} else {
return build_el;
}
})().call(null);
});})(or__16129__auto__,map__25629,map__25629__$1,deps,$el,update_component_BANG_))
);
}
})();
var map__25630__$1 = ((cljs.core.seq_QMARK_.call(null,map__25630))?cljs.core.apply.call(null,cljs.core.hash_map,map__25630):map__25630);
var deps__$1 = cljs.core.get.call(null,map__25630__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var result = cljs.core.get.call(null,map__25630__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var vec__25631 = result;
var $el__$1 = cljs.core.nth.call(null,vec__25631,(0),null);
var update_component_BANG___$1 = cljs.core.nth.call(null,vec__25631,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el__$1,((function (map__25630,map__25630__$1,deps__$1,result,vec__25631,$el__$1,update_component_BANG___$1,map__25629,map__25629__$1,deps,$el,update_component_BANG_){
return (function (){
return update_el_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$el","$el",-583727377),$el__$1,new cljs.core.Keyword(null,"update-component!","update-component!",-391351872),update_component_BANG___$1,new cljs.core.Keyword(null,"deps","deps",1883360319),deps__$1], null));
});})(map__25630,map__25630__$1,deps__$1,result,vec__25631,$el__$1,update_component_BANG___$1,map__25629,map__25629__$1,deps,$el,update_component_BANG_))
], null);
});
return update_el_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
});

//# sourceMappingURL=el.js.map?rel=1442373854918