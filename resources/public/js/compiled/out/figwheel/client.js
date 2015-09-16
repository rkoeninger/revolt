// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30619__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30620__i = 0, G__30620__a = new Array(arguments.length -  0);
while (G__30620__i < G__30620__a.length) {G__30620__a[G__30620__i] = arguments[G__30620__i + 0]; ++G__30620__i;}
  args = new cljs.core.IndexedSeq(G__30620__a,0);
} 
return G__30619__delegate.call(this,args);};
G__30619.cljs$lang$maxFixedArity = 0;
G__30619.cljs$lang$applyTo = (function (arglist__30621){
var args = cljs.core.seq(arglist__30621);
return G__30619__delegate(args);
});
G__30619.cljs$core$IFn$_invoke$arity$variadic = G__30619__delegate;
return G__30619;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30622){
var map__30624 = p__30622;
var map__30624__$1 = ((cljs.core.seq_QMARK_.call(null,map__30624))?cljs.core.apply.call(null,cljs.core.hash_map,map__30624):map__30624);
var class$ = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16142__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16130__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16130__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16130__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19566__auto___30753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___30753,ch){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___30753,ch){
return (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (7))){
var inst_30723 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30729_30754 = state_30727__$1;
(statearr_30729_30754[(2)] = inst_30723);

(statearr_30729_30754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (1))){
var state_30727__$1 = state_30727;
var statearr_30730_30755 = state_30727__$1;
(statearr_30730_30755[(2)] = null);

(statearr_30730_30755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (4))){
var inst_30691 = (state_30727[(7)]);
var inst_30691__$1 = (state_30727[(2)]);
var state_30727__$1 = (function (){var statearr_30731 = state_30727;
(statearr_30731[(7)] = inst_30691__$1);

return statearr_30731;
})();
if(cljs.core.truth_(inst_30691__$1)){
var statearr_30732_30756 = state_30727__$1;
(statearr_30732_30756[(1)] = (5));

} else {
var statearr_30733_30757 = state_30727__$1;
(statearr_30733_30757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (13))){
var state_30727__$1 = state_30727;
var statearr_30734_30758 = state_30727__$1;
(statearr_30734_30758[(2)] = null);

(statearr_30734_30758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (6))){
var state_30727__$1 = state_30727;
var statearr_30735_30759 = state_30727__$1;
(statearr_30735_30759[(2)] = null);

(statearr_30735_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (3))){
var inst_30725 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30727__$1,inst_30725);
} else {
if((state_val_30728 === (12))){
var inst_30698 = (state_30727[(8)]);
var inst_30711 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30698);
var inst_30712 = cljs.core.first.call(null,inst_30711);
var inst_30713 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30712);
var inst_30714 = console.warn("Figwheel: Not loading code with warnings - ",inst_30713);
var state_30727__$1 = state_30727;
var statearr_30736_30760 = state_30727__$1;
(statearr_30736_30760[(2)] = inst_30714);

(statearr_30736_30760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (2))){
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(4),ch);
} else {
if((state_val_30728 === (11))){
var inst_30707 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30737_30761 = state_30727__$1;
(statearr_30737_30761[(2)] = inst_30707);

(statearr_30737_30761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (9))){
var inst_30697 = (state_30727[(9)]);
var inst_30709 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30697,opts);
var state_30727__$1 = state_30727;
if(inst_30709){
var statearr_30738_30762 = state_30727__$1;
(statearr_30738_30762[(1)] = (12));

} else {
var statearr_30739_30763 = state_30727__$1;
(statearr_30739_30763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (5))){
var inst_30697 = (state_30727[(9)]);
var inst_30691 = (state_30727[(7)]);
var inst_30693 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30694 = (new cljs.core.PersistentArrayMap(null,2,inst_30693,null));
var inst_30695 = (new cljs.core.PersistentHashSet(null,inst_30694,null));
var inst_30696 = figwheel.client.focus_msgs.call(null,inst_30695,inst_30691);
var inst_30697__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30696);
var inst_30698 = cljs.core.first.call(null,inst_30696);
var inst_30699 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30697__$1,opts);
var state_30727__$1 = (function (){var statearr_30740 = state_30727;
(statearr_30740[(9)] = inst_30697__$1);

(statearr_30740[(8)] = inst_30698);

return statearr_30740;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30741_30764 = state_30727__$1;
(statearr_30741_30764[(1)] = (8));

} else {
var statearr_30742_30765 = state_30727__$1;
(statearr_30742_30765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (14))){
var inst_30717 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30743_30766 = state_30727__$1;
(statearr_30743_30766[(2)] = inst_30717);

(statearr_30743_30766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (10))){
var inst_30719 = (state_30727[(2)]);
var state_30727__$1 = (function (){var statearr_30744 = state_30727;
(statearr_30744[(10)] = inst_30719);

return statearr_30744;
})();
var statearr_30745_30767 = state_30727__$1;
(statearr_30745_30767[(2)] = null);

(statearr_30745_30767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (8))){
var inst_30698 = (state_30727[(8)]);
var inst_30701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30702 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30698);
var inst_30703 = cljs.core.async.timeout.call(null,(1000));
var inst_30704 = [inst_30702,inst_30703];
var inst_30705 = (new cljs.core.PersistentVector(null,2,(5),inst_30701,inst_30704,null));
var state_30727__$1 = state_30727;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30727__$1,(11),inst_30705);
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
}
}
}
}
}
}
});})(c__19566__auto___30753,ch))
;
return ((function (switch__19510__auto__,c__19566__auto___30753,ch){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_30749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30749[(0)] = state_machine__19511__auto__);

(statearr_30749[(1)] = (1));

return statearr_30749;
});
var state_machine__19511__auto____1 = (function (state_30727){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_30727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e30750){if((e30750 instanceof Object)){
var ex__19514__auto__ = e30750;
var statearr_30751_30768 = state_30727;
(statearr_30751_30768[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30769 = state_30727;
state_30727 = G__30769;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___30753,ch))
})();
var state__19568__auto__ = (function (){var statearr_30752 = f__19567__auto__.call(null);
(statearr_30752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___30753);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___30753,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30770_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30770_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30779 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30772_SHARP_,p2__30771_SHARP_){
return [cljs.core.str(p2__30771_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30779){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30777 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30778 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30777,_STAR_print_newline_STAR_30778,base_path_30779){
return (function() { 
var G__30780__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30781__i = 0, G__30781__a = new Array(arguments.length -  0);
while (G__30781__i < G__30781__a.length) {G__30781__a[G__30781__i] = arguments[G__30781__i + 0]; ++G__30781__i;}
  args = new cljs.core.IndexedSeq(G__30781__a,0);
} 
return G__30780__delegate.call(this,args);};
G__30780.cljs$lang$maxFixedArity = 0;
G__30780.cljs$lang$applyTo = (function (arglist__30782){
var args = cljs.core.seq(arglist__30782);
return G__30780__delegate(args);
});
G__30780.cljs$core$IFn$_invoke$arity$variadic = G__30780__delegate;
return G__30780;
})()
;})(_STAR_print_fn_STAR_30777,_STAR_print_newline_STAR_30778,base_path_30779))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30778;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30777;
}}catch (e30776){if((e30776 instanceof Error)){
var e = e30776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30779], null));
} else {
var e = e30776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30779))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__30783){
var map__30788 = p__30783;
var map__30788__$1 = ((cljs.core.seq_QMARK_.call(null,map__30788))?cljs.core.apply.call(null,cljs.core.hash_map,map__30788):map__30788);
var opts = map__30788__$1;
var build_id = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30788,map__30788__$1,opts,build_id){
return (function (p__30789){
var vec__30790 = p__30789;
var map__30791 = cljs.core.nth.call(null,vec__30790,(0),null);
var map__30791__$1 = ((cljs.core.seq_QMARK_.call(null,map__30791))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var msg = map__30791__$1;
var msg_name = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30790,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30790,map__30791,map__30791__$1,msg,msg_name,_,map__30788,map__30788__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30790,map__30791,map__30791__$1,msg,msg_name,_,map__30788,map__30788__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30788,map__30788__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30795){
var vec__30796 = p__30795;
var map__30797 = cljs.core.nth.call(null,vec__30796,(0),null);
var map__30797__$1 = ((cljs.core.seq_QMARK_.call(null,map__30797))?cljs.core.apply.call(null,cljs.core.hash_map,map__30797):map__30797);
var msg = map__30797__$1;
var msg_name = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30796,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30798){
var map__30806 = p__30798;
var map__30806__$1 = ((cljs.core.seq_QMARK_.call(null,map__30806))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var on_compile_fail = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30806,map__30806__$1,on_compile_fail,on_compile_warning){
return (function (p__30807){
var vec__30808 = p__30807;
var map__30809 = cljs.core.nth.call(null,vec__30808,(0),null);
var map__30809__$1 = ((cljs.core.seq_QMARK_.call(null,map__30809))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var msg = map__30809__$1;
var msg_name = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30808,(1));
var pred__30810 = cljs.core._EQ_;
var expr__30811 = msg_name;
if(cljs.core.truth_(pred__30810.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30811))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30810.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30811))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30806,map__30806__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__,msg_hist,msg_names,msg){
return (function (state_31008){
var state_val_31009 = (state_31008[(1)]);
if((state_val_31009 === (7))){
var inst_30944 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31010_31051 = state_31008__$1;
(statearr_31010_31051[(2)] = inst_30944);

(statearr_31010_31051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (20))){
var inst_30970 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30970){
var statearr_31011_31052 = state_31008__$1;
(statearr_31011_31052[(1)] = (22));

} else {
var statearr_31012_31053 = state_31008__$1;
(statearr_31012_31053[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (27))){
var inst_30982 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30983 = figwheel.client.heads_up.display_warning.call(null,inst_30982);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(30),inst_30983);
} else {
if((state_val_31009 === (1))){
var inst_30932 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30932)){
var statearr_31013_31054 = state_31008__$1;
(statearr_31013_31054[(1)] = (2));

} else {
var statearr_31014_31055 = state_31008__$1;
(statearr_31014_31055[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (24))){
var inst_30998 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31015_31056 = state_31008__$1;
(statearr_31015_31056[(2)] = inst_30998);

(statearr_31015_31056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (4))){
var inst_31006 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31008__$1,inst_31006);
} else {
if((state_val_31009 === (15))){
var inst_30959 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30960 = figwheel.client.format_messages.call(null,inst_30959);
var inst_30961 = figwheel.client.heads_up.display_error.call(null,inst_30960);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(18),inst_30961);
} else {
if((state_val_31009 === (21))){
var inst_31000 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31016_31057 = state_31008__$1;
(statearr_31016_31057[(2)] = inst_31000);

(statearr_31016_31057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (31))){
var inst_30989 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(34),inst_30989);
} else {
if((state_val_31009 === (32))){
var state_31008__$1 = state_31008;
var statearr_31017_31058 = state_31008__$1;
(statearr_31017_31058[(2)] = null);

(statearr_31017_31058[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (33))){
var inst_30994 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31018_31059 = state_31008__$1;
(statearr_31018_31059[(2)] = inst_30994);

(statearr_31018_31059[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (13))){
var inst_30950 = (state_31008[(2)]);
var inst_30951 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30952 = figwheel.client.format_messages.call(null,inst_30951);
var inst_30953 = figwheel.client.heads_up.display_error.call(null,inst_30952);
var state_31008__$1 = (function (){var statearr_31019 = state_31008;
(statearr_31019[(7)] = inst_30950);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(14),inst_30953);
} else {
if((state_val_31009 === (22))){
var inst_30972 = figwheel.client.heads_up.clear.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(25),inst_30972);
} else {
if((state_val_31009 === (29))){
var inst_30996 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31020_31060 = state_31008__$1;
(statearr_31020_31060[(2)] = inst_30996);

(statearr_31020_31060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (6))){
var inst_30940 = figwheel.client.heads_up.clear.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(9),inst_30940);
} else {
if((state_val_31009 === (28))){
var inst_30987 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30987){
var statearr_31021_31061 = state_31008__$1;
(statearr_31021_31061[(1)] = (31));

} else {
var statearr_31022_31062 = state_31008__$1;
(statearr_31022_31062[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (25))){
var inst_30974 = (state_31008[(2)]);
var inst_30975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30976 = figwheel.client.heads_up.display_warning.call(null,inst_30975);
var state_31008__$1 = (function (){var statearr_31023 = state_31008;
(statearr_31023[(8)] = inst_30974);

return statearr_31023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(26),inst_30976);
} else {
if((state_val_31009 === (34))){
var inst_30991 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31024_31063 = state_31008__$1;
(statearr_31024_31063[(2)] = inst_30991);

(statearr_31024_31063[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (17))){
var inst_31002 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31025_31064 = state_31008__$1;
(statearr_31025_31064[(2)] = inst_31002);

(statearr_31025_31064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (3))){
var inst_30946 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30946){
var statearr_31026_31065 = state_31008__$1;
(statearr_31026_31065[(1)] = (10));

} else {
var statearr_31027_31066 = state_31008__$1;
(statearr_31027_31066[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (12))){
var inst_31004 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31028_31067 = state_31008__$1;
(statearr_31028_31067[(2)] = inst_31004);

(statearr_31028_31067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (2))){
var inst_30934 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30934)){
var statearr_31029_31068 = state_31008__$1;
(statearr_31029_31068[(1)] = (5));

} else {
var statearr_31030_31069 = state_31008__$1;
(statearr_31030_31069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (23))){
var inst_30980 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30980){
var statearr_31031_31070 = state_31008__$1;
(statearr_31031_31070[(1)] = (27));

} else {
var statearr_31032_31071 = state_31008__$1;
(statearr_31032_31071[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (19))){
var inst_30967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30968 = figwheel.client.heads_up.append_message.call(null,inst_30967);
var state_31008__$1 = state_31008;
var statearr_31033_31072 = state_31008__$1;
(statearr_31033_31072[(2)] = inst_30968);

(statearr_31033_31072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (11))){
var inst_30957 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30957){
var statearr_31034_31073 = state_31008__$1;
(statearr_31034_31073[(1)] = (15));

} else {
var statearr_31035_31074 = state_31008__$1;
(statearr_31035_31074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (9))){
var inst_30942 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31036_31075 = state_31008__$1;
(statearr_31036_31075[(2)] = inst_30942);

(statearr_31036_31075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (5))){
var inst_30936 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(8),inst_30936);
} else {
if((state_val_31009 === (14))){
var inst_30955 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31037_31076 = state_31008__$1;
(statearr_31037_31076[(2)] = inst_30955);

(statearr_31037_31076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (26))){
var inst_30978 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31038_31077 = state_31008__$1;
(statearr_31038_31077[(2)] = inst_30978);

(statearr_31038_31077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (16))){
var inst_30965 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31008__$1 = state_31008;
if(inst_30965){
var statearr_31039_31078 = state_31008__$1;
(statearr_31039_31078[(1)] = (19));

} else {
var statearr_31040_31079 = state_31008__$1;
(statearr_31040_31079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (30))){
var inst_30985 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31041_31080 = state_31008__$1;
(statearr_31041_31080[(2)] = inst_30985);

(statearr_31041_31080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (10))){
var inst_30948 = figwheel.client.heads_up.clear.call(null);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(13),inst_30948);
} else {
if((state_val_31009 === (18))){
var inst_30963 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31042_31081 = state_31008__$1;
(statearr_31042_31081[(2)] = inst_30963);

(statearr_31042_31081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (8))){
var inst_30938 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31043_31082 = state_31008__$1;
(statearr_31043_31082[(2)] = inst_30938);

(statearr_31043_31082[(1)] = (7));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19566__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19510__auto__,c__19566__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_31047 = [null,null,null,null,null,null,null,null,null];
(statearr_31047[(0)] = state_machine__19511__auto__);

(statearr_31047[(1)] = (1));

return statearr_31047;
});
var state_machine__19511__auto____1 = (function (state_31008){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_31008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e31048){if((e31048 instanceof Object)){
var ex__19514__auto__ = e31048;
var statearr_31049_31083 = state_31008;
(statearr_31049_31083[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31084 = state_31008;
state_31008 = G__31084;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_31008){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_31008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__,msg_hist,msg_names,msg))
})();
var state__19568__auto__ = (function (){var statearr_31050 = f__19567__auto__.call(null);
(statearr_31050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_31050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__,msg_hist,msg_names,msg))
);

return c__19566__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19566__auto___31147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___31147,ch){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___31147,ch){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (8))){
var inst_31122 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31132 = state_31130;
(statearr_31132[(7)] = inst_31122);

return statearr_31132;
})();
var statearr_31133_31148 = state_31130__$1;
(statearr_31133_31148[(2)] = null);

(statearr_31133_31148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (7))){
var inst_31126 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31134_31149 = state_31130__$1;
(statearr_31134_31149[(2)] = inst_31126);

(statearr_31134_31149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (6))){
var state_31130__$1 = state_31130;
var statearr_31135_31150 = state_31130__$1;
(statearr_31135_31150[(2)] = null);

(statearr_31135_31150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (5))){
var inst_31118 = (state_31130[(8)]);
var inst_31120 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31118);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31130__$1,(8),inst_31120);
} else {
if((state_val_31131 === (4))){
var inst_31118 = (state_31130[(8)]);
var inst_31118__$1 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31136 = state_31130;
(statearr_31136[(8)] = inst_31118__$1);

return statearr_31136;
})();
if(cljs.core.truth_(inst_31118__$1)){
var statearr_31137_31151 = state_31130__$1;
(statearr_31137_31151[(1)] = (5));

} else {
var statearr_31138_31152 = state_31130__$1;
(statearr_31138_31152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (3))){
var inst_31128 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31130__$1,inst_31128);
} else {
if((state_val_31131 === (2))){
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31130__$1,(4),ch);
} else {
if((state_val_31131 === (1))){
var state_31130__$1 = state_31130;
var statearr_31139_31153 = state_31130__$1;
(statearr_31139_31153[(2)] = null);

(statearr_31139_31153[(1)] = (2));


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
});})(c__19566__auto___31147,ch))
;
return ((function (switch__19510__auto__,c__19566__auto___31147,ch){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_31143 = [null,null,null,null,null,null,null,null,null];
(statearr_31143[(0)] = state_machine__19511__auto__);

(statearr_31143[(1)] = (1));

return statearr_31143;
});
var state_machine__19511__auto____1 = (function (state_31130){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_31130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e31144){if((e31144 instanceof Object)){
var ex__19514__auto__ = e31144;
var statearr_31145_31154 = state_31130;
(statearr_31145_31154[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31155 = state_31130;
state_31130 = G__31155;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___31147,ch))
})();
var state__19568__auto__ = (function (){var statearr_31146 = f__19567__auto__.call(null);
(statearr_31146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___31147);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___31147,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__){
return (function (state_31176){
var state_val_31177 = (state_31176[(1)]);
if((state_val_31177 === (2))){
var inst_31173 = (state_31176[(2)]);
var inst_31174 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31176__$1 = (function (){var statearr_31178 = state_31176;
(statearr_31178[(7)] = inst_31173);

return statearr_31178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31176__$1,inst_31174);
} else {
if((state_val_31177 === (1))){
var inst_31171 = cljs.core.async.timeout.call(null,(3000));
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31176__$1,(2),inst_31171);
} else {
return null;
}
}
});})(c__19566__auto__))
;
return ((function (switch__19510__auto__,c__19566__auto__){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_31182 = [null,null,null,null,null,null,null,null];
(statearr_31182[(0)] = state_machine__19511__auto__);

(statearr_31182[(1)] = (1));

return statearr_31182;
});
var state_machine__19511__auto____1 = (function (state_31176){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_31176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e31183){if((e31183 instanceof Object)){
var ex__19514__auto__ = e31183;
var statearr_31184_31186 = state_31176;
(statearr_31184_31186[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31187 = state_31176;
state_31176 = G__31187;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_31176){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_31176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__))
})();
var state__19568__auto__ = (function (){var statearr_31185 = f__19567__auto__.call(null);
(statearr_31185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_31185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__))
);

return c__19566__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16130__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16130__auto__)){
return ("CustomEvent" in window);
} else {
return and__16130__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31191 = {"detail":url};
return obj31191;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31192){
var map__31198 = p__31192;
var map__31198__$1 = ((cljs.core.seq_QMARK_.call(null,map__31198))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var ed = map__31198__$1;
var exception_data = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31199_31203 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31200_31204 = null;
var count__31201_31205 = (0);
var i__31202_31206 = (0);
while(true){
if((i__31202_31206 < count__31201_31205)){
var msg_31207 = cljs.core._nth.call(null,chunk__31200_31204,i__31202_31206);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31207);

var G__31208 = seq__31199_31203;
var G__31209 = chunk__31200_31204;
var G__31210 = count__31201_31205;
var G__31211 = (i__31202_31206 + (1));
seq__31199_31203 = G__31208;
chunk__31200_31204 = G__31209;
count__31201_31205 = G__31210;
i__31202_31206 = G__31211;
continue;
} else {
var temp__4126__auto___31212 = cljs.core.seq.call(null,seq__31199_31203);
if(temp__4126__auto___31212){
var seq__31199_31213__$1 = temp__4126__auto___31212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31199_31213__$1)){
var c__16929__auto___31214 = cljs.core.chunk_first.call(null,seq__31199_31213__$1);
var G__31215 = cljs.core.chunk_rest.call(null,seq__31199_31213__$1);
var G__31216 = c__16929__auto___31214;
var G__31217 = cljs.core.count.call(null,c__16929__auto___31214);
var G__31218 = (0);
seq__31199_31203 = G__31215;
chunk__31200_31204 = G__31216;
count__31201_31205 = G__31217;
i__31202_31206 = G__31218;
continue;
} else {
var msg_31219 = cljs.core.first.call(null,seq__31199_31213__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31219);

var G__31220 = cljs.core.next.call(null,seq__31199_31213__$1);
var G__31221 = null;
var G__31222 = (0);
var G__31223 = (0);
seq__31199_31203 = G__31220;
chunk__31200_31204 = G__31221;
count__31201_31205 = G__31222;
i__31202_31206 = G__31223;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31224){
var map__31226 = p__31224;
var map__31226__$1 = ((cljs.core.seq_QMARK_.call(null,map__31226))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var w = map__31226__$1;
var message = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16130__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16130__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16130__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__31233 = cljs.core.seq.call(null,plugins);
var chunk__31234 = null;
var count__31235 = (0);
var i__31236 = (0);
while(true){
if((i__31236 < count__31235)){
var vec__31237 = cljs.core._nth.call(null,chunk__31234,i__31236);
var k = cljs.core.nth.call(null,vec__31237,(0),null);
var plugin = cljs.core.nth.call(null,vec__31237,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31233,chunk__31234,count__31235,i__31236,pl_31239,vec__31237,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31239.call(null,msg_hist);
});})(seq__31233,chunk__31234,count__31235,i__31236,pl_31239,vec__31237,k,plugin))
);
} else {
}

var G__31240 = seq__31233;
var G__31241 = chunk__31234;
var G__31242 = count__31235;
var G__31243 = (i__31236 + (1));
seq__31233 = G__31240;
chunk__31234 = G__31241;
count__31235 = G__31242;
i__31236 = G__31243;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31233);
if(temp__4126__auto__){
var seq__31233__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31233__$1)){
var c__16929__auto__ = cljs.core.chunk_first.call(null,seq__31233__$1);
var G__31244 = cljs.core.chunk_rest.call(null,seq__31233__$1);
var G__31245 = c__16929__auto__;
var G__31246 = cljs.core.count.call(null,c__16929__auto__);
var G__31247 = (0);
seq__31233 = G__31244;
chunk__31234 = G__31245;
count__31235 = G__31246;
i__31236 = G__31247;
continue;
} else {
var vec__31238 = cljs.core.first.call(null,seq__31233__$1);
var k = cljs.core.nth.call(null,vec__31238,(0),null);
var plugin = cljs.core.nth.call(null,vec__31238,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31248 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31233,chunk__31234,count__31235,i__31236,pl_31248,vec__31238,k,plugin,seq__31233__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31248.call(null,msg_hist);
});})(seq__31233,chunk__31234,count__31235,i__31236,pl_31248,vec__31238,k,plugin,seq__31233__$1,temp__4126__auto__))
);
} else {
}

var G__31249 = cljs.core.next.call(null,seq__31233__$1);
var G__31250 = null;
var G__31251 = (0);
var G__31252 = (0);
seq__31233 = G__31249;
chunk__31234 = G__31250;
count__31235 = G__31251;
i__31236 = G__31252;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__31253){
var map__31255 = p__31253;
var map__31255__$1 = ((cljs.core.seq_QMARK_.call(null,map__31255))?cljs.core.apply.call(null,cljs.core.hash_map,map__31255):map__31255);
var opts = map__31255__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31253 = null;
if (arguments.length > 0) {
var G__31256__i = 0, G__31256__a = new Array(arguments.length -  0);
while (G__31256__i < G__31256__a.length) {G__31256__a[G__31256__i] = arguments[G__31256__i + 0]; ++G__31256__i;}
  p__31253 = new cljs.core.IndexedSeq(G__31256__a,0);
} 
return watch_and_reload__delegate.call(this,p__31253);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31257){
var p__31253 = cljs.core.seq(arglist__31257);
return watch_and_reload__delegate(p__31253);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1429499339262