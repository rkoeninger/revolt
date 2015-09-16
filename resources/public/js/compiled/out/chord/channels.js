// Compiled by ClojureScript 0.0-2850 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.channels.read_from_ws_BANG_ = (function read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function write_to_ws_BANG_(ws,ch){
var c__18056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18056__auto__){
return (function (){
var f__18057__auto__ = (function (){var switch__18041__auto__ = ((function (c__18056__auto__){
return (function (state_21169){
var state_val_21170 = (state_21169[(1)]);
if((state_val_21170 === (7))){
var inst_21165 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
var statearr_21171_21186 = state_21169__$1;
(statearr_21171_21186[(2)] = inst_21165);

(statearr_21171_21186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (6))){
var state_21169__$1 = state_21169;
var statearr_21172_21187 = state_21169__$1;
(statearr_21172_21187[(2)] = null);

(statearr_21172_21187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (5))){
var inst_21159 = (state_21169[(7)]);
var inst_21161 = ws.send(inst_21159);
var state_21169__$1 = (function (){var statearr_21173 = state_21169;
(statearr_21173[(8)] = inst_21161);

return statearr_21173;
})();
var statearr_21174_21188 = state_21169__$1;
(statearr_21174_21188[(2)] = null);

(statearr_21174_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (4))){
var inst_21159 = (state_21169[(7)]);
var inst_21159__$1 = (state_21169[(2)]);
var state_21169__$1 = (function (){var statearr_21175 = state_21169;
(statearr_21175[(7)] = inst_21159__$1);

return statearr_21175;
})();
if(cljs.core.truth_(inst_21159__$1)){
var statearr_21176_21189 = state_21169__$1;
(statearr_21176_21189[(1)] = (5));

} else {
var statearr_21177_21190 = state_21169__$1;
(statearr_21177_21190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21170 === (3))){
var inst_21167 = (state_21169[(2)]);
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21169__$1,inst_21167);
} else {
if((state_val_21170 === (2))){
var state_21169__$1 = state_21169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21169__$1,(4),ch);
} else {
if((state_val_21170 === (1))){
var state_21169__$1 = state_21169;
var statearr_21178_21191 = state_21169__$1;
(statearr_21178_21191[(2)] = null);

(statearr_21178_21191[(1)] = (2));


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
var statearr_21182 = [null,null,null,null,null,null,null,null,null];
(statearr_21182[(0)] = state_machine__18042__auto__);

(statearr_21182[(1)] = (1));

return statearr_21182;
});
var state_machine__18042__auto____1 = (function (state_21169){
while(true){
var ret_value__18043__auto__ = (function (){try{while(true){
var result__18044__auto__ = switch__18041__auto__.call(null,state_21169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18044__auto__;
}
break;
}
}catch (e21183){if((e21183 instanceof Object)){
var ex__18045__auto__ = e21183;
var statearr_21184_21192 = state_21169;
(statearr_21184_21192[(5)] = ex__18045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21193 = state_21169;
state_21169 = G__21193;
continue;
} else {
return ret_value__18043__auto__;
}
break;
}
});
state_machine__18042__auto__ = function(state_21169){
switch(arguments.length){
case 0:
return state_machine__18042__auto____0.call(this);
case 1:
return state_machine__18042__auto____1.call(this,state_21169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18042__auto____0;
state_machine__18042__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18042__auto____1;
return state_machine__18042__auto__;
})()
;})(switch__18041__auto__,c__18056__auto__))
})();
var state__18058__auto__ = (function (){var statearr_21185 = f__18057__auto__.call(null);
(statearr_21185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18056__auto__);

return statearr_21185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18058__auto__);
});})(c__18056__auto__))
);

return c__18056__auto__;
});
/**
* @param {...*} var_args
*/
chord.channels.bidi_ch = (function() { 
var bidi_ch__delegate = function (read_ch,write_ch,p__21194){
var vec__21200 = p__21194;
var map__21201 = cljs.core.nth.call(null,vec__21200,(0),null);
var map__21201__$1 = ((cljs.core.seq_QMARK_.call(null,map__21201))?cljs.core.apply.call(null,cljs.core.hash_map,map__21201):map__21201);
var on_close = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t21202 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.channels.t21202 = (function (on_close,map__21201,vec__21200,p__21194,write_ch,read_ch,bidi_ch,meta21203){
this.on_close = on_close;
this.map__21201 = map__21201;
this.vec__21200 = vec__21200;
this.p__21194 = p__21194;
this.write_ch = write_ch;
this.read_ch = read_ch;
this.bidi_ch = bidi_ch;
this.meta21203 = meta21203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.channels.t21202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t21202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.t21202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t21202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.t21202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t21202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.t21202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (_21204){
var self__ = this;
var _21204__$1 = this;
return self__.meta21203;
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.t21202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (_21204,meta21203__$1){
var self__ = this;
var _21204__$1 = this;
return (new chord.channels.t21202(self__.on_close,self__.map__21201,self__.vec__21200,self__.p__21194,self__.write_ch,self__.read_ch,self__.bidi_ch,meta21203__$1));
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.t21202.cljs$lang$type = true;

chord.channels.t21202.cljs$lang$ctorStr = "chord.channels/t21202";

chord.channels.t21202.cljs$lang$ctorPrWriter = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.channels/t21202");
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

chord.channels.__GT_t21202 = ((function (vec__21200,map__21201,map__21201__$1,on_close){
return (function __GT_t21202(on_close__$1,map__21201__$2,vec__21200__$1,p__21194__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta21203){
return (new chord.channels.t21202(on_close__$1,map__21201__$2,vec__21200__$1,p__21194__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta21203));
});})(vec__21200,map__21201,map__21201__$1,on_close))
;

}

return (new chord.channels.t21202(on_close,map__21201__$1,vec__21200,p__21194,write_ch,read_ch,bidi_ch,cljs.core.PersistentArrayMap.EMPTY));
};
var bidi_ch = function (read_ch,write_ch,var_args){
var p__21194 = null;
if (arguments.length > 2) {
var G__21205__i = 0, G__21205__a = new Array(arguments.length -  2);
while (G__21205__i < G__21205__a.length) {G__21205__a[G__21205__i] = arguments[G__21205__i + 2]; ++G__21205__i;}
  p__21194 = new cljs.core.IndexedSeq(G__21205__a,0);
} 
return bidi_ch__delegate.call(this,read_ch,write_ch,p__21194);};
bidi_ch.cljs$lang$maxFixedArity = 2;
bidi_ch.cljs$lang$applyTo = (function (arglist__21206){
var read_ch = cljs.core.first(arglist__21206);
arglist__21206 = cljs.core.next(arglist__21206);
var write_ch = cljs.core.first(arglist__21206);
var p__21194 = cljs.core.rest(arglist__21206);
return bidi_ch__delegate(read_ch,write_ch,p__21194);
});
bidi_ch.cljs$core$IFn$_invoke$arity$variadic = bidi_ch__delegate;
return bidi_ch;
})()
;

//# sourceMappingURL=channels.js.map?rel=1442373574100