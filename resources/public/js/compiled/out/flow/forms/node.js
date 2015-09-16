// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.forms.node');
goog.require('cljs.core');
goog.require('flow.dom.elements');
goog.require('flow.dom.children');
goog.require('flow.dom.attributes');
flow.forms.node.update_attrs_BANG_ = (function update_attrs_BANG_($el,attrs){
return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = (function iter__25002(s__25003){
return (new cljs.core.LazySeq(null,(function (){
var s__25003__$1 = s__25003;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25003__$1);
if(temp__4126__auto__){
var s__25003__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25003__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25003__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25005 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25004 = (0);
while(true){
if((i__25004 < size__16884__auto__)){
var map__25008 = cljs.core._nth.call(null,c__16883__auto__,i__25004);
var map__25008__$1 = ((cljs.core.seq_QMARK_.call(null,map__25008))?cljs.core.apply.call(null,cljs.core.hash_map,map__25008):map__25008);
var attr = map__25008__$1;
var value_fn = cljs.core.get.call(null,map__25008__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
var attr_key = cljs.core.get.call(null,map__25008__$1,new cljs.core.Keyword(null,"attr-key","attr-key",30742589));
cljs.core.chunk_append.call(null,b__25005,(function (){var new_value = value_fn.call(null);
if(!(cljs.core._EQ_.call(null,new_value,cljs.core.get.call(null,attr,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword("flow.forms.node","nil","flow.forms.node/nil",186834712))))){
flow.dom.attributes.set_attr_BANG_.call(null,$el,attr_key,new_value);

return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new_value);
} else {
return attr;
}
})());

var G__25010 = (i__25004 + (1));
i__25004 = G__25010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25005),iter__25002.call(null,cljs.core.chunk_rest.call(null,s__25003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25005),null);
}
} else {
var map__25009 = cljs.core.first.call(null,s__25003__$2);
var map__25009__$1 = ((cljs.core.seq_QMARK_.call(null,map__25009))?cljs.core.apply.call(null,cljs.core.hash_map,map__25009):map__25009);
var attr = map__25009__$1;
var value_fn = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
var attr_key = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"attr-key","attr-key",30742589));
return cljs.core.cons.call(null,(function (){var new_value = value_fn.call(null);
if(!(cljs.core._EQ_.call(null,new_value,cljs.core.get.call(null,attr,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword("flow.forms.node","nil","flow.forms.node/nil",186834712))))){
flow.dom.attributes.set_attr_BANG_.call(null,$el,attr_key,new_value);

return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new_value);
} else {
return attr;
}
})(),iter__25002.call(null,cljs.core.rest.call(null,s__25003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,attrs);
})());
});
flow.forms.node.update_styles_BANG_ = (function update_styles_BANG_($el,styles){
return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = (function iter__25019(s__25020){
return (new cljs.core.LazySeq(null,(function (){
var s__25020__$1 = s__25020;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25020__$1);
if(temp__4126__auto__){
var s__25020__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25020__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25020__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25022 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25021 = (0);
while(true){
if((i__25021 < size__16884__auto__)){
var map__25025 = cljs.core._nth.call(null,c__16883__auto__,i__25021);
var map__25025__$1 = ((cljs.core.seq_QMARK_.call(null,map__25025))?cljs.core.apply.call(null,cljs.core.hash_map,map__25025):map__25025);
var style = map__25025__$1;
var value_fn = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
var style_key = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"style-key","style-key",-567658392));
cljs.core.chunk_append.call(null,b__25022,(function (){var new_value = value_fn.call(null);
if(cljs.core._EQ_.call(null,new_value,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword("flow.forms.node","nil","flow.forms.node/nil",186834712)))){
return style;
} else {
flow.dom.attributes.set_style_BANG_.call(null,$el,style_key,new_value);

return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new_value);
}
})());

var G__25027 = (i__25021 + (1));
i__25021 = G__25027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25022),iter__25019.call(null,cljs.core.chunk_rest.call(null,s__25020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25022),null);
}
} else {
var map__25026 = cljs.core.first.call(null,s__25020__$2);
var map__25026__$1 = ((cljs.core.seq_QMARK_.call(null,map__25026))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);
var style = map__25026__$1;
var value_fn = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));
var style_key = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"style-key","style-key",-567658392));
return cljs.core.cons.call(null,(function (){var new_value = value_fn.call(null);
if(cljs.core._EQ_.call(null,new_value,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword("flow.forms.node","nil","flow.forms.node/nil",186834712)))){
return style;
} else {
flow.dom.attributes.set_style_BANG_.call(null,$el,style_key,new_value);

return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new_value);
}
})(),iter__25019.call(null,cljs.core.rest.call(null,s__25020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,styles);
})());
});
flow.forms.node.update_classes_BANG_ = (function update_classes_BANG_($el,classes){
if(cljs.core.seq.call(null,classes)){
var new_classes = (function (){var iter__16885__auto__ = (function iter__25036(s__25037){
return (new cljs.core.LazySeq(null,(function (){
var s__25037__$1 = s__25037;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25037__$1);
if(temp__4126__auto__){
var s__25037__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25037__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25037__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25039 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25038 = (0);
while(true){
if((i__25038 < size__16884__auto__)){
var map__25042 = cljs.core._nth.call(null,c__16883__auto__,i__25038);
var map__25042__$1 = ((cljs.core.seq_QMARK_.call(null,map__25042))?cljs.core.apply.call(null,cljs.core.hash_map,map__25042):map__25042);
var class$ = map__25042__$1;
var class_value_fn = cljs.core.get.call(null,map__25042__$1,new cljs.core.Keyword(null,"class-value-fn","class-value-fn",2025367985));
cljs.core.chunk_append.call(null,b__25039,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"previous-values","previous-values",-1377036486),(function (){var new_value = class_value_fn.call(null);
if(cljs.core.coll_QMARK_.call(null,new_value)){
return new_value;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value], null);
}
})(),new cljs.core.Keyword(null,"class-value-fn","class-value-fn",2025367985),class_value_fn], null));

var G__25044 = (i__25038 + (1));
i__25038 = G__25044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25039),iter__25036.call(null,cljs.core.chunk_rest.call(null,s__25037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25039),null);
}
} else {
var map__25043 = cljs.core.first.call(null,s__25037__$2);
var map__25043__$1 = ((cljs.core.seq_QMARK_.call(null,map__25043))?cljs.core.apply.call(null,cljs.core.hash_map,map__25043):map__25043);
var class$ = map__25043__$1;
var class_value_fn = cljs.core.get.call(null,map__25043__$1,new cljs.core.Keyword(null,"class-value-fn","class-value-fn",2025367985));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"previous-values","previous-values",-1377036486),(function (){var new_value = class_value_fn.call(null);
if(cljs.core.coll_QMARK_.call(null,new_value)){
return new_value;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value], null);
}
})(),new cljs.core.Keyword(null,"class-value-fn","class-value-fn",2025367985),class_value_fn], null),iter__25036.call(null,cljs.core.rest.call(null,s__25037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,classes);
})();
var new_classes_set = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"previous-values","previous-values",-1377036486),new_classes)));
if(cljs.core._EQ_.call(null,new_classes_set,cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"previous-values","previous-values",-1377036486),classes))))){
return classes;
} else {
flow.dom.attributes.set_classes_BANG_.call(null,$el,new_classes_set);

return new_classes;
}
} else {
return null;
}
});
flow.forms.node.with_child_holders = (function with_child_holders($parent,children){
var iter__16885__auto__ = (function iter__25049(s__25050){
return (new cljs.core.LazySeq(null,(function (){
var s__25050__$1 = s__25050;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25050__$1);
if(temp__4126__auto__){
var s__25050__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25050__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25050__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25052 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25051 = (0);
while(true){
if((i__25051 < size__16884__auto__)){
var child = cljs.core._nth.call(null,c__16883__auto__,i__25051);
cljs.core.chunk_append.call(null,b__25052,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"holder","holder",1786017528),flow.dom.children.new_child_holder_BANG_.call(null,$parent)], null));

var G__25053 = (i__25051 + (1));
i__25051 = G__25053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25052),iter__25049.call(null,cljs.core.chunk_rest.call(null,s__25050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25052),null);
}
} else {
var child = cljs.core.first.call(null,s__25050__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"holder","holder",1786017528),flow.dom.children.new_child_holder_BANG_.call(null,$parent)], null),iter__25049.call(null,cljs.core.rest.call(null,s__25050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,children);
});
flow.forms.node.update_children_BANG_ = (function update_children_BANG_(children){
return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = (function iter__25066(s__25067){
return (new cljs.core.LazySeq(null,(function (){
var s__25067__$1 = s__25067;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25067__$1);
if(temp__4126__auto__){
var s__25067__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25067__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25067__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25069 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25068 = (0);
while(true){
if((i__25068 < size__16884__auto__)){
var map__25074 = cljs.core._nth.call(null,c__16883__auto__,i__25068);
var map__25074__$1 = ((cljs.core.seq_QMARK_.call(null,map__25074))?cljs.core.apply.call(null,cljs.core.hash_map,map__25074):map__25074);
var holder = cljs.core.get.call(null,map__25074__$1,new cljs.core.Keyword(null,"holder","holder",1786017528));
var child = cljs.core.get.call(null,map__25074__$1,new cljs.core.Keyword(null,"child","child",623967545));
cljs.core.chunk_append.call(null,b__25069,(function (){var vec__25075 = child.call(null);
var $child = cljs.core.nth.call(null,vec__25075,(0),null);
var update_child_BANG_ = cljs.core.nth.call(null,vec__25075,(1),null);
flow.dom.children.replace_child_BANG_.call(null,holder,$child);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child","child",623967545),update_child_BANG_,new cljs.core.Keyword(null,"holder","holder",1786017528),holder], null);
})());

var G__25078 = (i__25068 + (1));
i__25068 = G__25078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25069),iter__25066.call(null,cljs.core.chunk_rest.call(null,s__25067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25069),null);
}
} else {
var map__25076 = cljs.core.first.call(null,s__25067__$2);
var map__25076__$1 = ((cljs.core.seq_QMARK_.call(null,map__25076))?cljs.core.apply.call(null,cljs.core.hash_map,map__25076):map__25076);
var holder = cljs.core.get.call(null,map__25076__$1,new cljs.core.Keyword(null,"holder","holder",1786017528));
var child = cljs.core.get.call(null,map__25076__$1,new cljs.core.Keyword(null,"child","child",623967545));
return cljs.core.cons.call(null,(function (){var vec__25077 = child.call(null);
var $child = cljs.core.nth.call(null,vec__25077,(0),null);
var update_child_BANG_ = cljs.core.nth.call(null,vec__25077,(1),null);
flow.dom.children.replace_child_BANG_.call(null,holder,$child);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child","child",623967545),update_child_BANG_,new cljs.core.Keyword(null,"holder","holder",1786017528),holder], null);
})(),iter__25066.call(null,cljs.core.rest.call(null,s__25067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,children);
})());
});
flow.forms.node.build_listeners_BANG_ = (function build_listeners_BANG_($el,listeners){
return cljs.core.doall.call(null,(function (){var iter__16885__auto__ = (function iter__25087(s__25088){
return (new cljs.core.LazySeq(null,(function (){
var s__25088__$1 = s__25088;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25088__$1);
if(temp__4126__auto__){
var s__25088__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25088__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25088__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25090 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25089 = (0);
while(true){
if((i__25089 < size__16884__auto__)){
var map__25093 = cljs.core._nth.call(null,c__16883__auto__,i__25089);
var map__25093__$1 = ((cljs.core.seq_QMARK_.call(null,map__25093))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);
var build_listener = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674));
var event = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.chunk_append.call(null,b__25090,(function (){var initial_listener = build_listener.call(null);
var _BANG_listener = cljs.core.atom.call(null,initial_listener);
flow.dom.elements.add_event_listener_BANG_.call(null,$el,event,((function (i__25089,initial_listener,_BANG_listener,map__25093,map__25093__$1,build_listener,event,c__16883__auto__,size__16884__auto__,b__25090,s__25088__$2,temp__4126__auto__){
return (function (e){
var temp__4126__auto____$1 = cljs.core.deref.call(null,_BANG_listener);
if(cljs.core.truth_(temp__4126__auto____$1)){
var listener = temp__4126__auto____$1;
return listener.call(null,e);
} else {
return null;
}
});})(i__25089,initial_listener,_BANG_listener,map__25093,map__25093__$1,build_listener,event,c__16883__auto__,size__16884__auto__,b__25090,s__25088__$2,temp__4126__auto__))
);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!listener","!listener",1694622962),_BANG_listener,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),build_listener], null);
})());

var G__25095 = (i__25089 + (1));
i__25089 = G__25095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25090),iter__25087.call(null,cljs.core.chunk_rest.call(null,s__25088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25090),null);
}
} else {
var map__25094 = cljs.core.first.call(null,s__25088__$2);
var map__25094__$1 = ((cljs.core.seq_QMARK_.call(null,map__25094))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094):map__25094);
var build_listener = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674));
var event = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.cons.call(null,(function (){var initial_listener = build_listener.call(null);
var _BANG_listener = cljs.core.atom.call(null,initial_listener);
flow.dom.elements.add_event_listener_BANG_.call(null,$el,event,((function (initial_listener,_BANG_listener,map__25094,map__25094__$1,build_listener,event,s__25088__$2,temp__4126__auto__){
return (function (e){
var temp__4126__auto____$1 = cljs.core.deref.call(null,_BANG_listener);
if(cljs.core.truth_(temp__4126__auto____$1)){
var listener = temp__4126__auto____$1;
return listener.call(null,e);
} else {
return null;
}
});})(initial_listener,_BANG_listener,map__25094,map__25094__$1,build_listener,event,s__25088__$2,temp__4126__auto__))
);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!listener","!listener",1694622962),_BANG_listener,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),build_listener], null);
})(),iter__25087.call(null,cljs.core.rest.call(null,s__25088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,listeners);
})());
});
flow.forms.node.update_listeners_BANG_ = (function update_listeners_BANG_(listeners){
var seq__25102_25108 = cljs.core.seq.call(null,listeners);
var chunk__25103_25109 = null;
var count__25104_25110 = (0);
var i__25105_25111 = (0);
while(true){
if((i__25105_25111 < count__25104_25110)){
var map__25106_25112 = cljs.core._nth.call(null,chunk__25103_25109,i__25105_25111);
var map__25106_25113__$1 = ((cljs.core.seq_QMARK_.call(null,map__25106_25112))?cljs.core.apply.call(null,cljs.core.hash_map,map__25106_25112):map__25106_25112);
var build_listener_25114 = cljs.core.get.call(null,map__25106_25113__$1,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674));
var _BANG_listener_25115 = cljs.core.get.call(null,map__25106_25113__$1,new cljs.core.Keyword(null,"!listener","!listener",1694622962));
cljs.core.reset_BANG_.call(null,_BANG_listener_25115,build_listener_25114.call(null));

var G__25116 = seq__25102_25108;
var G__25117 = chunk__25103_25109;
var G__25118 = count__25104_25110;
var G__25119 = (i__25105_25111 + (1));
seq__25102_25108 = G__25116;
chunk__25103_25109 = G__25117;
count__25104_25110 = G__25118;
i__25105_25111 = G__25119;
continue;
} else {
var temp__4126__auto___25120 = cljs.core.seq.call(null,seq__25102_25108);
if(temp__4126__auto___25120){
var seq__25102_25121__$1 = temp__4126__auto___25120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25102_25121__$1)){
var c__16916__auto___25122 = cljs.core.chunk_first.call(null,seq__25102_25121__$1);
var G__25123 = cljs.core.chunk_rest.call(null,seq__25102_25121__$1);
var G__25124 = c__16916__auto___25122;
var G__25125 = cljs.core.count.call(null,c__16916__auto___25122);
var G__25126 = (0);
seq__25102_25108 = G__25123;
chunk__25103_25109 = G__25124;
count__25104_25110 = G__25125;
i__25105_25111 = G__25126;
continue;
} else {
var map__25107_25127 = cljs.core.first.call(null,seq__25102_25121__$1);
var map__25107_25128__$1 = ((cljs.core.seq_QMARK_.call(null,map__25107_25127))?cljs.core.apply.call(null,cljs.core.hash_map,map__25107_25127):map__25107_25127);
var build_listener_25129 = cljs.core.get.call(null,map__25107_25128__$1,new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674));
var _BANG_listener_25130 = cljs.core.get.call(null,map__25107_25128__$1,new cljs.core.Keyword(null,"!listener","!listener",1694622962));
cljs.core.reset_BANG_.call(null,_BANG_listener_25130,build_listener_25129.call(null));

var G__25131 = cljs.core.next.call(null,seq__25102_25121__$1);
var G__25132 = null;
var G__25133 = (0);
var G__25134 = (0);
seq__25102_25108 = G__25131;
chunk__25103_25109 = G__25132;
count__25104_25110 = G__25133;
i__25105_25111 = G__25134;
continue;
}
} else {
}
}
break;
}

return listeners;
});
flow.forms.node.build_node = (function build_node(p__25137){
var map__25145 = p__25137;
var map__25145__$1 = ((cljs.core.seq_QMARK_.call(null,map__25145))?cljs.core.apply.call(null,cljs.core.hash_map,map__25145):map__25145);
var node = map__25145__$1;
var lifecycle_callbacks = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408));
var id = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tag = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return ((function (map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag){
return (function (){
var $el = flow.dom.elements.new_element.call(null,tag);
if(cljs.core.truth_(id)){
flow.dom.attributes.set_id_BANG_.call(null,$el,id);
} else {
}

var compiled_node = (function (){var update_node_BANG_ = ((function ($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag){
return (function update_node_BANG_(p__25149){
var map__25151 = p__25149;
var map__25151__$1 = ((cljs.core.seq_QMARK_.call(null,map__25151))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var listeners = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"listeners","listeners",394544445));
var classes = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var children = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var styles = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var attrs = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var updated_children = flow.forms.node.update_children_BANG_.call(null,children);
var updated_attrs = flow.forms.node.update_attrs_BANG_.call(null,$el,attrs);
var updated_styles = flow.forms.node.update_styles_BANG_.call(null,$el,styles);
var updated_classes = flow.forms.node.update_classes_BANG_.call(null,$el,classes);
var updated_listeners = flow.forms.node.update_listeners_BANG_.call(null,listeners);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [$el,((function (updated_children,updated_attrs,updated_styles,updated_classes,updated_listeners,map__25151,map__25151__$1,listeners,classes,children,styles,attrs,$el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag){
return (function (){
return update_node_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),updated_attrs,new cljs.core.Keyword(null,"styles","styles",1954480375),updated_styles,new cljs.core.Keyword(null,"children","children",-940561982),updated_children,new cljs.core.Keyword(null,"classes","classes",2037804510),updated_classes,new cljs.core.Keyword(null,"listeners","listeners",394544445),updated_listeners], null));
});})(updated_children,updated_attrs,updated_styles,updated_classes,updated_listeners,map__25151,map__25151__$1,listeners,classes,children,styles,attrs,$el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag))
], null);
});})($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag))
;
return update_node_BANG_.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function ($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag){
return (function (p1__25135_SHARP_){
return flow.forms.node.with_child_holders.call(null,$el,p1__25135_SHARP_);
});})($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445)], null),((function ($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag){
return (function (p1__25136_SHARP_){
return flow.forms.node.build_listeners_BANG_.call(null,$el,p1__25136_SHARP_);
});})($el,map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag))
));
})();
var temp__4126__auto___25152 = cljs.core.get.call(null,lifecycle_callbacks,new cljs.core.Keyword(null,"mount","mount",-1560582470));
if(cljs.core.truth_(temp__4126__auto___25152)){
var on_mount_25153 = temp__4126__auto___25152;
on_mount_25153.call(null,$el);
} else {
}

return compiled_node;
});
;})(map__25145,map__25145__$1,node,lifecycle_callbacks,id,tag))
});

//# sourceMappingURL=node.js.map?rel=1442373854237