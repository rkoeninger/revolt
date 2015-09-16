// Compiled by ClojureScript 0.0-2850 {}
goog.provide('revolt_client');
goog.require('cljs.core');
goog.require('cemerick.url');
goog.require('flow.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('chord.client');
cljs.core.enable_console_print_BANG_.call(null);
revolt_client._BANG_message_channel = cljs.core.atom.call(null,null);
revolt_client.element = (function element(id){
return document.getElementById(id);
});
revolt_client.value = (function value(id){
return (revolt_client.element.call(null,id)["value"]);
});
revolt_client.set_value = (function set_value(id,x){
return (revolt_client.element.call(null,id)["value"] = x);
});
revolt_client.read_message = (function read_message(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-id","player-id",1003896428),revolt_client.value.call(null,"player-id"),new cljs.core.Keyword(null,"content","content",15833224),cljs.reader.read_string.call(null,revolt_client.value.call(null,"input-box"))], null);
});
revolt_client.message_box = (function message_box(new_msg_ch){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"h3",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.text.text_node.call(null,"Send a message to the server: (either EDN or raw string)")], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "text";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "input-box";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return (50);
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),(function (){
var state24495 = flow.state._STAR_state_STAR_;
return ((function (state24495){
return (function (e){
var _STAR_state_STAR_24496 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state24495;

try{if(cljs.core._EQ_.call(null,(13),e.keyCode)){
cljs.core.async.put_BANG_.call(null,new_msg_ch,revolt_client.read_message.call(null));

return revolt_client.set_value.call(null,"input-box","");
} else {
return null;
}
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24496;
}});
;})(state24495))
})], null)], null),new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null)));
});
revolt_client.message_list = (function message_list(_BANG_msgs){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"h3",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.text.text_node.call(null,"Messages from the server:")], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"ul",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.let$.build_let.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return cljs.core.seq.call(null,flow.deps.read_dep.call(null,_BANG_msgs));
}),new cljs.core.Keyword(null,"destructure-fn","destructure-fn",822729401),(function (temp__4124__auto__){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"temp__4124__auto__","temp__4124__auto__",-775953797,null),temp__4124__auto__], null);
})], null)], null),(function (){
return flow.forms.if$.build_if.call(null,(function (){
return cljs.core.get.call(null,flow.state._STAR_state_STAR_,new cljs.core.Symbol(null,"temp__4124__auto__","temp__4124__auto__",-775953797,null));
}),(function (){
return flow.forms.let$.build_let.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return cljs.core.get.call(null,flow.state._STAR_state_STAR_,new cljs.core.Symbol(null,"temp__4124__auto__","temp__4124__auto__",-775953797,null));
}),new cljs.core.Keyword(null,"destructure-fn","destructure-fn",822729401),(function (msgs){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),msgs], null);
})], null)], null),(function (){
return flow.forms.for$.build_for.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return cljs.core.get.call(null,flow.state._STAR_state_STAR_,new cljs.core.Symbol(null,"msgs","msgs",464041754,null));
}),new cljs.core.Keyword(null,"destructure-fn","destructure-fn",822729401),(function (msg){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msg","msg",254428083,null),msg], null);
})], null)], null),(function (){
return flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"li",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.fn_calls.build_fn_call.call(null,(function (){
return cljs.core.pr_str.call(null,cljs.core.get.call(null,flow.state._STAR_state_STAR_,new cljs.core.Symbol(null,"msg","msg",254428083,null)));
}))], null)], null));
}));
}));
}),(function (){
return flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"li",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.text.text_node.call(null,"None yet.")], null)], null));
}));
}))], null)], null))], null)], null)));
});
revolt_client.user_name_box = (function user_name_box(){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"h3",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.text.text_node.call(null,"User name:")], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "text";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "player-id";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return (20);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return true;
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "signup-button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "Signup";
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),(function (){
var state24509 = flow.state._STAR_state_STAR_;
return ((function (state24509){
return (function (_){
var _STAR_state_STAR_24511 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state24509;

try{return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,revolt_client._BANG_message_channel),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-id","player-id",1003896428),revolt_client.value.call(null,"player-id"),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"signup","signup",1961016747)], null)], null));
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24511;
}});
;})(state24509))
})], null)], null),new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "start-game-button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "Start Game";
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),(function (){
var state24510 = flow.state._STAR_state_STAR_;
return ((function (state24510){
return (function (_){
var _STAR_state_STAR_24512 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state24510;

try{return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,revolt_client._BANG_message_channel),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-id","player-id",1003896428),revolt_client.value.call(null,"player-id"),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"start-game","start-game",115628303)], null)], null));
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24512;
}});
;})(state24510))
})], null)], null),new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null)));
});
revolt_client.figure_input = (function figure_input(id){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"tr",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"td",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"span",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.fn_calls.build_fn_call.call(null,(function (){
return [cljs.core.str(id)].join('');
}))], null)], null))], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"td",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "text";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return (2);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-gold")].join('');
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"td",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "text";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return (2);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-blackmail")].join('');
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"td",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "text";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return (2);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-force")].join('');
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null))], null)], null)));
});
revolt_client.figure_ids = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037)], null);
revolt_client.parse_or_nil = (function parse_or_nil(x){
var n = parseInt(x);
if(cljs.core.truth_(isNaN(n))){
return (0);
} else {
return n;
}
});
revolt_client.get_val = (function get_val(id,suffix){
return revolt_client.parse_or_nil.call(null,revolt_client.value.call(null,[cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-"),cljs.core.str(suffix)].join('')));
});
revolt_client.zero_bid = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null);
revolt_client.get_bid = (function get_bid(id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),revolt_client.get_val.call(null,id,"gold"),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),revolt_client.get_val.call(null,id,"blackmail"),new cljs.core.Keyword(null,"force","force",781957286),revolt_client.get_val.call(null,id,"force")], null);
});
revolt_client.get_bids = (function get_bids(){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p__24515){
var vec__24516 = p__24515;
var id = cljs.core.nth.call(null,vec__24516,(0),null);
var bid = cljs.core.nth.call(null,vec__24516,(1),null);
return cljs.core.not_EQ_.call(null,bid,revolt_client.zero_bid);
}),cljs.core.map.call(null,(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,revolt_client.get_bid.call(null,id)], null);
}),revolt_client.figure_ids))));
});
revolt_client.figure_grid = (function figure_grid(){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"table",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"general","general",380803686);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"captain","captain",475784807);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"magistrate","magistrate",-605145382);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"viceroy","viceroy",-596613980);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"priest","priest",1556489453);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"merchant","merchant",-1662127621);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"printer","printer",-1267797056);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"spy","spy",704719400);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"apothecary","apothecary",197898358);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"messenger","messenger",2092803528);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"mayor","mayor",84933652);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"constable","constable",718572363);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"rogue","rogue",-2026991668);
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_input;
}),(function (){
return new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037);
})], null))], null)], null)),flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "submit-bids-button";
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr-key","attr-key",30742589),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (){
return "Submit Bids";
})], null)], null),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"build-listener","build-listener",-1283879674),(function (){
var state24519 = flow.state._STAR_state_STAR_;
return ((function (state24519){
return (function (_){
var _STAR_state_STAR_24520 = flow.state._STAR_state_STAR_;
flow.state._STAR_state_STAR_ = state24519;

try{return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,revolt_client._BANG_message_channel),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-id","player-id",1003896428),revolt_client.value.call(null,"player-id"),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit-bids","submit-bids",-64814202),new cljs.core.Keyword(null,"bids","bids",-1493194652),(function (){var b = revolt_client.get_bids.call(null);
console.log(b);

return b;
})()], null)], null));
}finally {flow.state._STAR_state_STAR_ = _STAR_state_STAR_24520;
}});
;})(state24519))
})], null)], null),new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null))], null)], null)));
});
revolt_client.message_component = (function message_component(_BANG_msgs,new_msg_ch){
return flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.user_name_box;
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.message_box;
}),(function (){
return new_msg_ch;
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.figure_grid;
})], null)),flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return revolt_client.message_list;
}),(function (){
return _BANG_msgs;
})], null))], null)], null)));
});
revolt_client.receive_msgs_BANG_ = (function receive_msgs_BANG_(_BANG_msgs,server_ch){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__){
return (function (state_24570){
var state_val_24571 = (state_24570[(1)]);
if((state_val_24571 === (7))){
var inst_24566 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24572_24587 = state_24570__$1;
(statearr_24572_24587[(2)] = inst_24566);

(statearr_24572_24587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (6))){
var state_24570__$1 = state_24570;
var statearr_24573_24588 = state_24570__$1;
(statearr_24573_24588[(2)] = null);

(statearr_24573_24588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (5))){
var inst_24556 = (state_24570[(7)]);
var inst_24558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24559 = [inst_24556];
var inst_24560 = (new cljs.core.PersistentVector(null,1,(5),inst_24558,inst_24559,null));
var inst_24561 = cljs.core.partial.call(null,cljs.core.concat,inst_24560);
var inst_24562 = cljs.core.swap_BANG_.call(null,_BANG_msgs,inst_24561);
var state_24570__$1 = (function (){var statearr_24574 = state_24570;
(statearr_24574[(8)] = inst_24562);

return statearr_24574;
})();
var statearr_24575_24589 = state_24570__$1;
(statearr_24575_24589[(2)] = null);

(statearr_24575_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (4))){
var inst_24556 = (state_24570[(7)]);
var inst_24556__$1 = (state_24570[(2)]);
var state_24570__$1 = (function (){var statearr_24576 = state_24570;
(statearr_24576[(7)] = inst_24556__$1);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24556__$1)){
var statearr_24577_24590 = state_24570__$1;
(statearr_24577_24590[(1)] = (5));

} else {
var statearr_24578_24591 = state_24570__$1;
(statearr_24578_24591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (3))){
var inst_24568 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24570__$1,inst_24568);
} else {
if((state_val_24571 === (2))){
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(4),server_ch);
} else {
if((state_val_24571 === (1))){
var state_24570__$1 = state_24570;
var statearr_24579_24592 = state_24570__$1;
(statearr_24579_24592[(2)] = null);

(statearr_24579_24592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18056__auto__))
;
return ((function (switch__18041__auto__,c__18056__auto__){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null,null,null];
(statearr_24583[(0)] = state_machine__18042__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var state_machine__18042__auto____1 = (function (state_24570){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_24570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e24584){if((e24584 instanceof Object)){
var ex__18045__auto__ = e24584;
var statearr_24585_24593 = state_24570;
(statearr_24585_24593[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24594 = state_24570;
state_24570 = G__24594;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__))
})();
var state__18058__auto__ = (function (){var statearr_24586 = f__18057__auto__.call(null);
(statearr_24586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__))
);

return c__18056__auto__;
});
revolt_client.send_msgs_BANG_ = (function send_msgs_BANG_(new_msg_ch,server_ch){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__){
return (function (state_24638){
var state_val_24639 = (state_24638[(1)]);
if((state_val_24639 === (8))){
var inst_24630 = (state_24638[(2)]);
var state_24638__$1 = (function (){var statearr_24640 = state_24638;
(statearr_24640[(7)] = inst_24630);

return statearr_24640;
})();
var statearr_24641_24655 = state_24638__$1;
(statearr_24641_24655[(2)] = null);

(statearr_24641_24655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (7))){
var inst_24634 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
var statearr_24642_24656 = state_24638__$1;
(statearr_24642_24656[(2)] = inst_24634);

(statearr_24642_24656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (6))){
var state_24638__$1 = state_24638;
var statearr_24643_24657 = state_24638__$1;
(statearr_24643_24657[(2)] = null);

(statearr_24643_24657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (5))){
var inst_24627 = (state_24638[(8)]);
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24638__$1,(8),server_ch,inst_24627);
} else {
if((state_val_24639 === (4))){
var inst_24627 = (state_24638[(8)]);
var inst_24627__$1 = (state_24638[(2)]);
var state_24638__$1 = (function (){var statearr_24644 = state_24638;
(statearr_24644[(8)] = inst_24627__$1);

return statearr_24644;
})();
if(cljs.core.truth_(inst_24627__$1)){
var statearr_24645_24658 = state_24638__$1;
(statearr_24645_24658[(1)] = (5));

} else {
var statearr_24646_24659 = state_24638__$1;
(statearr_24646_24659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (3))){
var inst_24636 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24638__$1,inst_24636);
} else {
if((state_val_24639 === (2))){
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24638__$1,(4),new_msg_ch);
} else {
if((state_val_24639 === (1))){
var state_24638__$1 = state_24638;
var statearr_24647_24660 = state_24638__$1;
(statearr_24647_24660[(2)] = null);

(statearr_24647_24660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18056__auto__))
;
return ((function (switch__18041__auto__,c__18056__auto__){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_24651 = [null,null,null,null,null,null,null,null,null];
(statearr_24651[(0)] = state_machine__18042__auto__);

(statearr_24651[(1)] = (1));

return statearr_24651;
});
var state_machine__18042__auto____1 = (function (state_24638){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_24638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object)){
var ex__18045__auto__ = e24652;
var statearr_24653_24661 = state_24638;
(statearr_24653_24661[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24662 = state_24638;
state_24638 = G__24662;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_24638){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_24638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__))
})();
var state__18058__auto__ = (function (){var statearr_24654 = f__18057__auto__.call(null);
(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__))
);

return c__18056__auto__;
});
revolt_client.ws_url = [cljs.core.str("ws://"),cljs.core.str(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,window.location))),cljs.core.str(":3000/ws")].join('');
revolt_client.show_error = (function show_error(error){
return flow.core.root.call(null,document.body,flow.el.render_el.call(null,flow.forms.node.build_node.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"div",new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lifecycle-callbacks","lifecycle-callbacks",-895187408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow.forms.text.text_node.call(null,"Couldn't connect to websocket: "),flow.forms.fn_calls.build_fn_call.call(null,(function (){
return cljs.core.pr_str.call(null,error);
})),flow.forms.text.text_node.call(null," @ "),flow.forms.symbols.build_symbol.call(null,(function (){
return revolt_client.ws_url;
}))], null)], null))));
});
revolt_client.send_receive = (function send_receive(ws_channel){
var _BANG_msgs = (function (){var G__24665 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
revolt_client.receive_msgs_BANG_.call(null,G__24665,ws_channel);

return G__24665;
})();
var new_msg_ch = (function (){var G__24666 = cljs.core.async.chan.call(null);
revolt_client.send_msgs_BANG_.call(null,G__24666,ws_channel);

return G__24666;
})();
cljs.core.reset_BANG_.call(null,revolt_client._BANG_message_channel,new_msg_ch);

return flow.core.root.call(null,document.body,flow.el.render_el.call(null,flow.forms.sub_component.build_sub_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (_BANG_msgs,new_msg_ch){
return (function (){
return revolt_client.message_component;
});})(_BANG_msgs,new_msg_ch))
,((function (_BANG_msgs,new_msg_ch){
return (function (){
return _BANG_msgs;
});})(_BANG_msgs,new_msg_ch))
,((function (_BANG_msgs,new_msg_ch){
return (function (){
return new_msg_ch;
});})(_BANG_msgs,new_msg_ch))
], null))));
});
window.onload = (function (){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__){
return (function (state_24689){
var state_val_24690 = (state_24689[(1)]);
if((state_val_24690 === (8))){
var inst_24687 = (state_24689[(2)]);
var state_24689__$1 = state_24689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24689__$1,inst_24687);
} else {
if((state_val_24690 === (7))){
var inst_24681 = (state_24689[(7)]);
var inst_24685 = revolt_client.send_receive.call(null,inst_24681);
var state_24689__$1 = state_24689;
var statearr_24691_24708 = state_24689__$1;
(statearr_24691_24708[(2)] = inst_24685);

(statearr_24691_24708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (6))){
var inst_24680 = (state_24689[(8)]);
var inst_24683 = revolt_client.show_error.call(null,inst_24680);
var state_24689__$1 = state_24689;
var statearr_24692_24709 = state_24689__$1;
(statearr_24692_24709[(2)] = inst_24683);

(statearr_24692_24709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (5))){
var inst_24680 = (state_24689[(8)]);
var inst_24679 = (state_24689[(2)]);
var inst_24680__$1 = cljs.core.get.call(null,inst_24679,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_24681 = cljs.core.get.call(null,inst_24679,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var state_24689__$1 = (function (){var statearr_24693 = state_24689;
(statearr_24693[(7)] = inst_24681);

(statearr_24693[(8)] = inst_24680__$1);

return statearr_24693;
})();
if(cljs.core.truth_(inst_24680__$1)){
var statearr_24694_24710 = state_24689__$1;
(statearr_24694_24710[(1)] = (6));

} else {
var statearr_24695_24711 = state_24689__$1;
(statearr_24695_24711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (4))){
var inst_24673 = (state_24689[(9)]);
var state_24689__$1 = state_24689;
var statearr_24696_24712 = state_24689__$1;
(statearr_24696_24712[(2)] = inst_24673);

(statearr_24696_24712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (3))){
var inst_24673 = (state_24689[(9)]);
var inst_24676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24673);
var state_24689__$1 = state_24689;
var statearr_24697_24713 = state_24689__$1;
(statearr_24697_24713[(2)] = inst_24676);

(statearr_24697_24713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (2))){
var inst_24673 = (state_24689[(9)]);
var inst_24673__$1 = (state_24689[(2)]);
var inst_24674 = cljs.core.seq_QMARK_.call(null,inst_24673__$1);
var state_24689__$1 = (function (){var statearr_24698 = state_24689;
(statearr_24698[(9)] = inst_24673__$1);

return statearr_24698;
})();
if(inst_24674){
var statearr_24699_24714 = state_24689__$1;
(statearr_24699_24714[(1)] = (3));

} else {
var statearr_24700_24715 = state_24689__$1;
(statearr_24700_24715[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (1))){
var inst_24668 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_24669 = [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579)];
var inst_24670 = cljs.core.PersistentHashMap.fromArrays(inst_24668,inst_24669);
var inst_24671 = chord.client.ws_ch.call(null,revolt_client.ws_url,inst_24670);
var state_24689__$1 = state_24689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24689__$1,(2),inst_24671);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18056__auto__))
;
return ((function (switch__18041__auto__,c__18056__auto__){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = state_machine__18042__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var state_machine__18042__auto____1 = (function (state_24689){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_24689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e24705){if((e24705 instanceof Object)){
var ex__18045__auto__ = e24705;
var statearr_24706_24716 = state_24689;
(statearr_24706_24716[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24717 = state_24689;
state_24689 = G__24717;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_24689){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_24689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__))
})();
var state__18058__auto__ = (function (){var statearr_24707 = f__18057__auto__.call(null);
(statearr_24707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_24707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__))
);

return c__18056__auto__;
});

//# sourceMappingURL=revolt_client.js.map?rel=1442373853411