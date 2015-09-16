// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.core');
goog.require('cljs.core');
goog.require('flow.forms.symbols');
goog.require('flow.forms.cursors');
goog.require('flow.forms.collections');
goog.require('flow.el');
goog.require('flow.forms.sub_component');
goog.require('flow.dom.elements');
goog.require('flow.forms.case$');
goog.require('flow.forms.list');
goog.require('flow.forms.fn_calls');
goog.require('flow.forms.if$');
goog.require('flow.cursors');
goog.require('flow.forms.do$');
goog.require('flow.forms.let$');
goog.require('flow.forms.node');
goog.require('flow.forms.primitive');
goog.require('flow.forms.text');
goog.require('flow.forms.fn_decls');
goog.require('flow.forms.for$');
flow.core.root = (function root($container,el){
return flow.el.root.call(null,$container,el);
});
flow.core.bind_value_BANG_ = (function bind_value_BANG_(cursor){
return flow.dom.elements.bind_value_BANG_.call(null,cursor);
});
flow.core.on = (function on($el,event,listener){
return flow.dom.elements.add_event_listener_BANG_.call(null,$el,event,listener);
});
flow.core.keyed_by = (function keyed_by(f,coll){
if(cljs.core.truth_(coll)){
return flow.cursors.keyed_by.call(null,coll,f);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1442373853541