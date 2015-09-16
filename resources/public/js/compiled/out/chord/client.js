// Compiled by ClojureScript 0.0-2850 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('chord.channels');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
chord.client.on_close = (function() { 
var on_close__delegate = function (ws,read_ch,write_ch,p__20519){
var vec__20592 = p__20519;
var err_meta_channel = cljs.core.nth.call(null,vec__20592,(0),null);
return ws.onclose = ((function (vec__20592,err_meta_channel){
return (function (ev){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__,vec__20592,err_meta_channel){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__,vec__20592,err_meta_channel){
return (function (state_20631){
var state_val_20632 = (state_20631[(1)]);
if((state_val_20632 === (7))){
var inst_20627 = (state_20631[(2)]);
var inst_20628 = cljs.core.async.close_BANG_.call(null,read_ch);
var inst_20629 = cljs.core.async.close_BANG_.call(null,write_ch);
var state_20631__$1 = (function (){var statearr_20633 = state_20631;
(statearr_20633[(7)] = inst_20628);

(statearr_20633[(8)] = inst_20627);

return statearr_20633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20631__$1,inst_20629);
} else {
if((state_val_20632 === (1))){
var inst_20593 = (state_20631[(9)]);
var inst_20593__$1 = ws.error_seen;
var state_20631__$1 = (function (){var statearr_20634 = state_20631;
(statearr_20634[(9)] = inst_20593__$1);

return statearr_20634;
})();
if(cljs.core.truth_(inst_20593__$1)){
var statearr_20635_20664 = state_20631__$1;
(statearr_20635_20664[(1)] = (2));

} else {
var statearr_20636_20665 = state_20631__$1;
(statearr_20636_20665[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (4))){
var inst_20599 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
if(cljs.core.truth_(inst_20599)){
var statearr_20637_20666 = state_20631__$1;
(statearr_20637_20666[(1)] = (5));

} else {
var statearr_20638_20667 = state_20631__$1;
(statearr_20638_20667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (6))){
var state_20631__$1 = state_20631;
var statearr_20639_20668 = state_20631__$1;
(statearr_20639_20668[(2)] = null);

(statearr_20639_20668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (3))){
var inst_20596 = ev.wasClean;
var inst_20597 = cljs.core.not.call(null,inst_20596);
var state_20631__$1 = state_20631;
var statearr_20640_20669 = state_20631__$1;
(statearr_20640_20669[(2)] = inst_20597);

(statearr_20640_20669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (12))){
var inst_20624 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20641_20670 = state_20631__$1;
(statearr_20641_20670[(2)] = inst_20624);

(statearr_20641_20670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (2))){
var inst_20593 = (state_20631[(9)]);
var state_20631__$1 = state_20631;
var statearr_20642_20671 = state_20631__$1;
(statearr_20642_20671[(2)] = inst_20593);

(statearr_20642_20671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (11))){
var inst_20619 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20643_20672 = state_20631__$1;
(statearr_20643_20672[(2)] = inst_20619);

(statearr_20643_20672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (9))){
var state_20631__$1 = state_20631;
var statearr_20644_20673 = state_20631__$1;
(statearr_20644_20673[(2)] = null);

(statearr_20644_20673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (5))){
var inst_20601 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];
var inst_20602 = ev.reason;
var inst_20603 = ev.code;
var inst_20604 = ev.wasClean;
var inst_20605 = [inst_20602,inst_20603,inst_20604];
var inst_20606 = cljs.core.PersistentHashMap.fromArrays(inst_20601,inst_20605);
var state_20631__$1 = (function (){var statearr_20645 = state_20631;
(statearr_20645[(10)] = inst_20606);

return statearr_20645;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_20646_20674 = state_20631__$1;
(statearr_20646_20674[(1)] = (8));

} else {
var statearr_20647_20675 = state_20631__$1;
(statearr_20647_20675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (10))){
var inst_20606 = (state_20631[(10)]);
var inst_20622 = (state_20631[(2)]);
var state_20631__$1 = (function (){var statearr_20648 = state_20631;
(statearr_20648[(11)] = inst_20622);

return statearr_20648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(12),read_ch,inst_20606);
} else {
if((state_val_20632 === (8))){
var inst_20593 = (state_20631[(9)]);
var inst_20606 = (state_20631[(10)]);
var inst_20611 = cljs.core.async.chan.call(null,(1));
var inst_20612 = (function (){var c__18056__auto____$1 = inst_20611;
var error_desc = inst_20606;
var error_seen_QMARK_ = inst_20593;
return ((function (c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel){
return (function (state_20609){
var state_val_20610 = (state_20609[(1)]);
if((state_val_20610 === (1))){
var state_20609__$1 = state_20609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20609__$1,error_desc);
} else {
return null;
}
});})(c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel))
;
return ((function (switch__18041__auto__,c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_20652 = [null,null,null,null,null,null,null];
(statearr_20652[(0)] = state_machine__18042__auto__);

(statearr_20652[(1)] = (1));

return statearr_20652;
});
var state_machine__18042__auto____1 = (function (state_20609){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_20609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e20653){if((e20653 instanceof Object)){
var ex__18045__auto__ = e20653;
var statearr_20654_20676 = state_20609;
(statearr_20654_20676[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20677 = state_20609;
state_20609 = G__20677;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_20609){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_20609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel))
})();
var state__18058__auto__ = (function (){var statearr_20655 = f__18057__auto__.call(null);
(statearr_20655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto____$1);

return statearr_20655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});
;})(c__18056__auto____$1,error_desc,error_seen_QMARK_,inst_20593,inst_20606,inst_20611,state_val_20632,c__18056__auto__,vec__20592,err_meta_channel))
})();
var inst_20613 = cljs.core.async.impl.dispatch.run.call(null,inst_20612);
var inst_20615 = cljs.core.async.chan.call(null);
var inst_20616 = cljs.core.async.close_BANG_.call(null,inst_20615);
var inst_20617 = chord.channels.bidi_ch.call(null,inst_20611,inst_20615);
var state_20631__$1 = (function (){var statearr_20656 = state_20631;
(statearr_20656[(12)] = inst_20613);

(statearr_20656[(13)] = inst_20616);

return statearr_20656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(11),err_meta_channel,inst_20617);
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
});})(c__18056__auto__,vec__20592,err_meta_channel))
;
return ((function (switch__18041__auto__,c__18056__auto__,vec__20592,err_meta_channel){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_20660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20660[(0)] = state_machine__18042__auto__);

(statearr_20660[(1)] = (1));

return statearr_20660;
});
var state_machine__18042__auto____1 = (function (state_20631){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_20631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e20661){if((e20661 instanceof Object)){
var ex__18045__auto__ = e20661;
var statearr_20662_20678 = state_20631;
(statearr_20662_20678[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20679 = state_20631;
state_20631 = G__20679;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_20631){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_20631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__,vec__20592,err_meta_channel))
})();
var state__18058__auto__ = (function (){var statearr_20663 = f__18057__auto__.call(null);
(statearr_20663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_20663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__,vec__20592,err_meta_channel))
);

return c__18056__auto__;
});})(vec__20592,err_meta_channel))
;
};
var on_close = function (ws,read_ch,write_ch,var_args){
var p__20519 = null;
if (arguments.length > 3) {
var G__20680__i = 0, G__20680__a = new Array(arguments.length -  3);
while (G__20680__i < G__20680__a.length) {G__20680__a[G__20680__i] = arguments[G__20680__i + 3]; ++G__20680__i;}
  p__20519 = new cljs.core.IndexedSeq(G__20680__a,0);
} 
return on_close__delegate.call(this,ws,read_ch,write_ch,p__20519);};
on_close.cljs$lang$maxFixedArity = 3;
on_close.cljs$lang$applyTo = (function (arglist__20681){
var ws = cljs.core.first(arglist__20681);
arglist__20681 = cljs.core.next(arglist__20681);
var read_ch = cljs.core.first(arglist__20681);
arglist__20681 = cljs.core.next(arglist__20681);
var write_ch = cljs.core.first(arglist__20681);
var p__20519 = cljs.core.rest(arglist__20681);
return on_close__delegate(ws,read_ch,write_ch,p__20519);
});
on_close.cljs$core$IFn$_invoke$arity$variadic = on_close__delegate;
return on_close;
})()
;
chord.client.make_open_ch = (function make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.call(null);
chord.client.on_close.call(null,ws,read_ch,write_ch,ch);

ws.onopen = ((function (ch){
return (function (){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__,ch){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__,ch){
return (function (state_20700){
var state_val_20701 = (state_20700[(1)]);
if((state_val_20701 === (2))){
var inst_20697 = (state_20700[(2)]);
var inst_20698 = cljs.core.async.close_BANG_.call(null,ch);
var state_20700__$1 = (function (){var statearr_20702 = state_20700;
(statearr_20702[(7)] = inst_20697);

return statearr_20702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20700__$1,inst_20698);
} else {
if((state_val_20701 === (1))){
var state_20700__$1 = state_20700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20700__$1,(2),ch,v);
} else {
return null;
}
}
});})(c__18056__auto__,ch))
;
return ((function (switch__18041__auto__,c__18056__auto__,ch){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_20706 = [null,null,null,null,null,null,null,null];
(statearr_20706[(0)] = state_machine__18042__auto__);

(statearr_20706[(1)] = (1));

return statearr_20706;
});
var state_machine__18042__auto____1 = (function (state_20700){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_20700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e20707){if((e20707 instanceof Object)){
var ex__18045__auto__ = e20707;
var statearr_20708_20710 = state_20700;
(statearr_20708_20710[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20711 = state_20700;
state_20700 = G__20711;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_20700){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_20700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__,ch))
})();
var state__18058__auto__ = (function (){var statearr_20709 = f__18057__auto__.call(null);
(statearr_20709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_20709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__,ch))
);

return c__18056__auto__;
});})(ch))
;

return ch;
});
chord.client.close_event__GT_maybe_error = (function close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* opts             - (optional) map to configure reading/writing channels
* :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
* :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
* :format        - (optional) data format to use on the channel, (at the moment)
* either :edn (default), :json, :json-kw or :str.
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__20714){
var vec__20814 = p__20714;
var map__20815 = cljs.core.nth.call(null,vec__20814,(0),null);
var map__20815__$1 = ((cljs.core.seq_QMARK_.call(null,map__20815))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);
var opts = map__20815__$1;
var format = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_ch = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var web_socket = (new WebSocket(ws_url));
var map__20816 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__16129__auto__ = read_ch;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__16129__auto__ = write_ch;
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__20816__$1 = ((cljs.core.seq_QMARK_.call(null,map__20816))?cljs.core.apply.call(null,cljs.core.hash_map,map__20816):map__20816);
var write_ch__$1 = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch__$1 = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function (p1__20712_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__20712_SHARP_);
});})(web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
;

web_socket.onclose = ((function (web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function (p1__20713_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__20713_SHARP_);
});})(web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function (){
return web_socket.close();
});})(web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__18056__auto___20913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function (state_20876){
var state_val_20877 = (state_20876[(1)]);
if((state_val_20877 === (7))){
var inst_20872 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20878_20914 = state_20876__$1;
(statearr_20878_20914[(2)] = inst_20872);

(statearr_20878_20914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (20))){
var state_20876__$1 = state_20876;
var statearr_20879_20915 = state_20876__$1;
(statearr_20879_20915[(2)] = null);

(statearr_20879_20915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (1))){
var inst_20817 = false;
var state_20876__$1 = (function (){var statearr_20880 = state_20876;
(statearr_20880[(7)] = inst_20817);

return statearr_20880;
})();
var statearr_20881_20916 = state_20876__$1;
(statearr_20881_20916[(2)] = null);

(statearr_20881_20916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (4))){
var inst_20828 = (state_20876[(8)]);
var inst_20830 = (state_20876[(9)]);
var inst_20828__$1 = (state_20876[(2)]);
var inst_20829 = cljs.core.nth.call(null,inst_20828__$1,(0),null);
var inst_20830__$1 = cljs.core.nth.call(null,inst_20828__$1,(1),null);
var inst_20831 = cljs.core._EQ_.call(null,inst_20830__$1,open_ch);
var state_20876__$1 = (function (){var statearr_20882 = state_20876;
(statearr_20882[(8)] = inst_20828__$1);

(statearr_20882[(10)] = inst_20829);

(statearr_20882[(9)] = inst_20830__$1);

return statearr_20882;
})();
if(inst_20831){
var statearr_20883_20917 = state_20876__$1;
(statearr_20883_20917[(1)] = (5));

} else {
var statearr_20884_20918 = state_20876__$1;
(statearr_20884_20918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (15))){
var inst_20857 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20885_20919 = state_20876__$1;
(statearr_20885_20919[(2)] = inst_20857);

(statearr_20885_20919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (21))){
var inst_20868 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20886_20920 = state_20876__$1;
(statearr_20886_20920[(2)] = inst_20868);

(statearr_20886_20920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (13))){
var state_20876__$1 = state_20876;
var statearr_20887_20921 = state_20876__$1;
(statearr_20887_20921[(2)] = null);

(statearr_20887_20921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (6))){
var inst_20830 = (state_20876[(9)]);
var inst_20843 = cljs.core._EQ_.call(null,inst_20830,close_ch);
var state_20876__$1 = state_20876;
if(inst_20843){
var statearr_20888_20922 = state_20876__$1;
(statearr_20888_20922[(1)] = (9));

} else {
var statearr_20889_20923 = state_20876__$1;
(statearr_20889_20923[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (17))){
var state_20876__$1 = state_20876;
var statearr_20890_20924 = state_20876__$1;
(statearr_20890_20924[(2)] = initial_ch);

(statearr_20890_20924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (3))){
var inst_20874 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20876__$1,inst_20874);
} else {
if((state_val_20877 === (12))){
var inst_20817 = (state_20876[(7)]);
var state_20876__$1 = state_20876;
if(cljs.core.truth_(inst_20817)){
var statearr_20891_20925 = state_20876__$1;
(statearr_20891_20925[(1)] = (16));

} else {
var statearr_20892_20926 = state_20876__$1;
(statearr_20892_20926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (2))){
var inst_20824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20825 = [open_ch,close_ch];
var inst_20826 = (new cljs.core.PersistentVector(null,2,(5),inst_20824,inst_20825,null));
var state_20876__$1 = state_20876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20876__$1,(4),inst_20826);
} else {
if((state_val_20877 === (19))){
var inst_20829 = (state_20876[(10)]);
var state_20876__$1 = state_20876;
var statearr_20893_20927 = state_20876__$1;
(statearr_20893_20927[(2)] = inst_20829);

(statearr_20893_20927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (11))){
var inst_20870 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20894_20928 = state_20876__$1;
(statearr_20894_20928[(2)] = inst_20870);

(statearr_20894_20928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (9))){
var inst_20828 = (state_20876[(8)]);
var inst_20847 = (state_20876[(11)]);
var inst_20846 = cljs.core.nth.call(null,inst_20828,(0),null);
var inst_20847__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_20846);
var state_20876__$1 = (function (){var statearr_20895 = state_20876;
(statearr_20895[(11)] = inst_20847__$1);

return statearr_20895;
})();
if(cljs.core.truth_(inst_20847__$1)){
var statearr_20896_20929 = state_20876__$1;
(statearr_20896_20929[(1)] = (12));

} else {
var statearr_20897_20930 = state_20876__$1;
(statearr_20897_20930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (5))){
var inst_20828 = (state_20876[(8)]);
var inst_20834 = cljs.core.nth.call(null,inst_20828,(0),null);
var inst_20835 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_20836 = [ws_chan];
var inst_20837 = cljs.core.PersistentHashMap.fromArrays(inst_20835,inst_20836);
var state_20876__$1 = (function (){var statearr_20898 = state_20876;
(statearr_20898[(12)] = inst_20834);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20876__$1,(8),initial_ch,inst_20837);
} else {
if((state_val_20877 === (14))){
var inst_20860 = (state_20876[(2)]);
var inst_20861 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_20862 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_20876__$1 = (function (){var statearr_20899 = state_20876;
(statearr_20899[(13)] = inst_20861);

(statearr_20899[(14)] = inst_20860);

return statearr_20899;
})();
var statearr_20900_20931 = state_20876__$1;
(statearr_20900_20931[(2)] = inst_20862);

(statearr_20900_20931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (16))){
var state_20876__$1 = state_20876;
var statearr_20901_20932 = state_20876__$1;
(statearr_20901_20932[(2)] = read_ch__$1);

(statearr_20901_20932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (10))){
var inst_20830 = (state_20876[(9)]);
var inst_20864 = cljs.core._EQ_.call(null,inst_20830,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20876__$1 = state_20876;
if(inst_20864){
var statearr_20902_20933 = state_20876__$1;
(statearr_20902_20933[(1)] = (19));

} else {
var statearr_20903_20934 = state_20876__$1;
(statearr_20903_20934[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (18))){
var inst_20847 = (state_20876[(11)]);
var inst_20852 = (state_20876[(2)]);
var inst_20853 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20854 = [inst_20847];
var inst_20855 = cljs.core.PersistentHashMap.fromArrays(inst_20853,inst_20854);
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20876__$1,(15),inst_20852,inst_20855);
} else {
if((state_val_20877 === (8))){
var inst_20839 = (state_20876[(2)]);
var inst_20840 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_20817 = true;
var state_20876__$1 = (function (){var statearr_20904 = state_20876;
(statearr_20904[(15)] = inst_20840);

(statearr_20904[(7)] = inst_20817);

(statearr_20904[(16)] = inst_20839);

return statearr_20904;
})();
var statearr_20905_20935 = state_20876__$1;
(statearr_20905_20935[(2)] = null);

(statearr_20905_20935[(1)] = (2));


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
});})(c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
;
return ((function (switch__18041__auto__,c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch){
return (function() {
var state_machine__18042__auto__ = null;
var state_machine__18042__auto____0 = (function (){
var statearr_20909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20909[(0)] = state_machine__18042__auto__);

(statearr_20909[(1)] = (1));

return statearr_20909;
});
var state_machine__18042__auto____1 = (function (state_20876){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_20876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e20910){if((e20910 instanceof Object)){
var ex__18045__auto__ = e20910;
var statearr_20911_20936 = state_20876;
(statearr_20911_20936[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20937 = state_20876;
state_20876 = G__20937;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_20876){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_20876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
})();
var state__18058__auto__ = (function (){var statearr_20912 = f__18057__auto__.call(null);
(statearr_20912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto___20913);

return statearr_20912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto___20913,ws_chan,initial_ch,web_socket,map__20816,map__20816__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__20814,map__20815,map__20815__$1,opts,format,write_ch,read_ch))
);


return initial_ch;
};
var ws_ch = function (ws_url,var_args){
var p__20714 = null;
if (arguments.length > 1) {
var G__20938__i = 0, G__20938__a = new Array(arguments.length -  1);
while (G__20938__i < G__20938__a.length) {G__20938__a[G__20938__i] = arguments[G__20938__i + 1]; ++G__20938__i;}
  p__20714 = new cljs.core.IndexedSeq(G__20938__a,0);
} 
return ws_ch__delegate.call(this,ws_url,p__20714);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__20939){
var ws_url = cljs.core.first(arglist__20939);
var p__20714 = cljs.core.rest(arglist__20939);
return ws_ch__delegate(ws_url,p__20714);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;

//# sourceMappingURL=client.js.map?rel=1442373573668