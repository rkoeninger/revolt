// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t32388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32388 = (function (f,fn_handler,meta32389){
this.f = f;
this.fn_handler = fn_handler;
this.meta32389 = meta32389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32388.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t32388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t32388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32390){
var self__ = this;
var _32390__$1 = this;
return self__.meta32389;
});

cljs.core.async.t32388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32390,meta32389__$1){
var self__ = this;
var _32390__$1 = this;
return (new cljs.core.async.t32388(self__.f,self__.fn_handler,meta32389__$1));
});

cljs.core.async.t32388.cljs$lang$type = true;

cljs.core.async.t32388.cljs$lang$ctorStr = "cljs.core.async/t32388";

cljs.core.async.t32388.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t32388");
});

cljs.core.async.__GT_t32388 = (function __GT_t32388(f__$1,fn_handler__$1,meta32389){
return (new cljs.core.async.t32388(f__$1,fn_handler__$1,meta32389));
});

}

return (new cljs.core.async.t32388(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__32392 = buff;
if(G__32392){
var bit__16823__auto__ = null;
if(cljs.core.truth_((function (){var or__16142__auto__ = bit__16823__auto__;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return G__32392.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__32392.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32392);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32392);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32393,ret){
return (function (){
return fn1.call(null,val_32393);
});})(val_32393,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__17029__auto___32394 = n;
var x_32395 = (0);
while(true){
if((x_32395 < n__17029__auto___32394)){
(a[x_32395] = (0));

var G__32396 = (x_32395 + (1));
x_32395 = G__32396;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32397 = (i + (1));
i = G__32397;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t32401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32401 = (function (flag,alt_flag,meta32402){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32402 = meta32402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32401.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t32401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t32401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32403){
var self__ = this;
var _32403__$1 = this;
return self__.meta32402;
});})(flag))
;

cljs.core.async.t32401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32403,meta32402__$1){
var self__ = this;
var _32403__$1 = this;
return (new cljs.core.async.t32401(self__.flag,self__.alt_flag,meta32402__$1));
});})(flag))
;

cljs.core.async.t32401.cljs$lang$type = true;

cljs.core.async.t32401.cljs$lang$ctorStr = "cljs.core.async/t32401";

cljs.core.async.t32401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t32401");
});})(flag))
;

cljs.core.async.__GT_t32401 = ((function (flag){
return (function __GT_t32401(flag__$1,alt_flag__$1,meta32402){
return (new cljs.core.async.t32401(flag__$1,alt_flag__$1,meta32402));
});})(flag))
;

}

return (new cljs.core.async.t32401(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t32407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32407 = (function (cb,flag,alt_handler,meta32408){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32408 = meta32408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32407.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t32407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t32407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32409){
var self__ = this;
var _32409__$1 = this;
return self__.meta32408;
});

cljs.core.async.t32407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32409,meta32408__$1){
var self__ = this;
var _32409__$1 = this;
return (new cljs.core.async.t32407(self__.cb,self__.flag,self__.alt_handler,meta32408__$1));
});

cljs.core.async.t32407.cljs$lang$type = true;

cljs.core.async.t32407.cljs$lang$ctorStr = "cljs.core.async/t32407";

cljs.core.async.t32407.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t32407");
});

cljs.core.async.__GT_t32407 = (function __GT_t32407(cb__$1,flag__$1,alt_handler__$1,meta32408){
return (new cljs.core.async.t32407(cb__$1,flag__$1,alt_handler__$1,meta32408));
});

}

return (new cljs.core.async.t32407(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32410_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32410_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32411_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32411_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16142__auto__ = wport;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32412 = (i + (1));
i = G__32412;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16142__auto__ = ret;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16130__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16130__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16130__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__32413){
var map__32415 = p__32413;
var map__32415__$1 = ((cljs.core.seq_QMARK_.call(null,map__32415))?cljs.core.apply.call(null,cljs.core.hash_map,map__32415):map__32415);
var opts = map__32415__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__32413 = null;
if (arguments.length > 1) {
var G__32416__i = 0, G__32416__a = new Array(arguments.length -  1);
while (G__32416__i < G__32416__a.length) {G__32416__a[G__32416__i] = arguments[G__32416__i + 1]; ++G__32416__i;}
  p__32413 = new cljs.core.IndexedSeq(G__32416__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__32413);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32417){
var ports = cljs.core.first(arglist__32417);
var p__32413 = cljs.core.rest(arglist__32417);
return alts_BANG___delegate(ports,p__32413);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__19566__auto___32512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___32512){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___32512){
return (function (state_32488){
var state_val_32489 = (state_32488[(1)]);
if((state_val_32489 === (7))){
var inst_32484 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32490_32513 = state_32488__$1;
(statearr_32490_32513[(2)] = inst_32484);

(statearr_32490_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (1))){
var state_32488__$1 = state_32488;
var statearr_32491_32514 = state_32488__$1;
(statearr_32491_32514[(2)] = null);

(statearr_32491_32514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (4))){
var inst_32467 = (state_32488[(7)]);
var inst_32467__$1 = (state_32488[(2)]);
var inst_32468 = (inst_32467__$1 == null);
var state_32488__$1 = (function (){var statearr_32492 = state_32488;
(statearr_32492[(7)] = inst_32467__$1);

return statearr_32492;
})();
if(cljs.core.truth_(inst_32468)){
var statearr_32493_32515 = state_32488__$1;
(statearr_32493_32515[(1)] = (5));

} else {
var statearr_32494_32516 = state_32488__$1;
(statearr_32494_32516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (13))){
var state_32488__$1 = state_32488;
var statearr_32495_32517 = state_32488__$1;
(statearr_32495_32517[(2)] = null);

(statearr_32495_32517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (6))){
var inst_32467 = (state_32488[(7)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32488__$1,(11),to,inst_32467);
} else {
if((state_val_32489 === (3))){
var inst_32486 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32488__$1,inst_32486);
} else {
if((state_val_32489 === (12))){
var state_32488__$1 = state_32488;
var statearr_32496_32518 = state_32488__$1;
(statearr_32496_32518[(2)] = null);

(statearr_32496_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (2))){
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32488__$1,(4),from);
} else {
if((state_val_32489 === (11))){
var inst_32477 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32477)){
var statearr_32497_32519 = state_32488__$1;
(statearr_32497_32519[(1)] = (12));

} else {
var statearr_32498_32520 = state_32488__$1;
(statearr_32498_32520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (9))){
var state_32488__$1 = state_32488;
var statearr_32499_32521 = state_32488__$1;
(statearr_32499_32521[(2)] = null);

(statearr_32499_32521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (5))){
var state_32488__$1 = state_32488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32500_32522 = state_32488__$1;
(statearr_32500_32522[(1)] = (8));

} else {
var statearr_32501_32523 = state_32488__$1;
(statearr_32501_32523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (14))){
var inst_32482 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32502_32524 = state_32488__$1;
(statearr_32502_32524[(2)] = inst_32482);

(statearr_32502_32524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (10))){
var inst_32474 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32503_32525 = state_32488__$1;
(statearr_32503_32525[(2)] = inst_32474);

(statearr_32503_32525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (8))){
var inst_32471 = cljs.core.async.close_BANG_.call(null,to);
var state_32488__$1 = state_32488;
var statearr_32504_32526 = state_32488__$1;
(statearr_32504_32526[(2)] = inst_32471);

(statearr_32504_32526[(1)] = (10));


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
});})(c__19566__auto___32512))
;
return ((function (switch__19510__auto__,c__19566__auto___32512){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32508 = [null,null,null,null,null,null,null,null];
(statearr_32508[(0)] = state_machine__19511__auto__);

(statearr_32508[(1)] = (1));

return statearr_32508;
});
var state_machine__19511__auto____1 = (function (state_32488){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32509){if((e32509 instanceof Object)){
var ex__19514__auto__ = e32509;
var statearr_32510_32527 = state_32488;
(statearr_32510_32527[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_32488;
state_32488 = G__32528;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32488){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___32512))
})();
var state__19568__auto__ = (function (){var statearr_32511 = f__19567__auto__.call(null);
(statearr_32511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___32512);

return statearr_32511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___32512))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32712){
var vec__32713 = p__32712;
var v = cljs.core.nth.call(null,vec__32713,(0),null);
var p = cljs.core.nth.call(null,vec__32713,(1),null);
var job = vec__32713;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19566__auto___32895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results){
return (function (state_32718){
var state_val_32719 = (state_32718[(1)]);
if((state_val_32719 === (2))){
var inst_32715 = (state_32718[(2)]);
var inst_32716 = cljs.core.async.close_BANG_.call(null,res);
var state_32718__$1 = (function (){var statearr_32720 = state_32718;
(statearr_32720[(7)] = inst_32715);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32718__$1,inst_32716);
} else {
if((state_val_32719 === (1))){
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32718__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results))
;
return ((function (switch__19510__auto__,c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32724 = [null,null,null,null,null,null,null,null];
(statearr_32724[(0)] = state_machine__19511__auto__);

(statearr_32724[(1)] = (1));

return statearr_32724;
});
var state_machine__19511__auto____1 = (function (state_32718){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32725){if((e32725 instanceof Object)){
var ex__19514__auto__ = e32725;
var statearr_32726_32896 = state_32718;
(statearr_32726_32896[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32897 = state_32718;
state_32718 = G__32897;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32718){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results))
})();
var state__19568__auto__ = (function (){var statearr_32727 = f__19567__auto__.call(null);
(statearr_32727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___32895);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___32895,res,vec__32713,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32728){
var vec__32729 = p__32728;
var v = cljs.core.nth.call(null,vec__32729,(0),null);
var p = cljs.core.nth.call(null,vec__32729,(1),null);
var job = vec__32729;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17029__auto___32898 = n;
var __32899 = (0);
while(true){
if((__32899 < n__17029__auto___32898)){
var G__32730_32900 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32730_32900) {
case "async":
var c__19566__auto___32902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32899,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (__32899,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function (state_32743){
var state_val_32744 = (state_32743[(1)]);
if((state_val_32744 === (7))){
var inst_32739 = (state_32743[(2)]);
var state_32743__$1 = state_32743;
var statearr_32745_32903 = state_32743__$1;
(statearr_32745_32903[(2)] = inst_32739);

(statearr_32745_32903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (6))){
var state_32743__$1 = state_32743;
var statearr_32746_32904 = state_32743__$1;
(statearr_32746_32904[(2)] = null);

(statearr_32746_32904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (5))){
var state_32743__$1 = state_32743;
var statearr_32747_32905 = state_32743__$1;
(statearr_32747_32905[(2)] = null);

(statearr_32747_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (4))){
var inst_32733 = (state_32743[(2)]);
var inst_32734 = async.call(null,inst_32733);
var state_32743__$1 = state_32743;
if(cljs.core.truth_(inst_32734)){
var statearr_32748_32906 = state_32743__$1;
(statearr_32748_32906[(1)] = (5));

} else {
var statearr_32749_32907 = state_32743__$1;
(statearr_32749_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (3))){
var inst_32741 = (state_32743[(2)]);
var state_32743__$1 = state_32743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32743__$1,inst_32741);
} else {
if((state_val_32744 === (2))){
var state_32743__$1 = state_32743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32743__$1,(4),jobs);
} else {
if((state_val_32744 === (1))){
var state_32743__$1 = state_32743;
var statearr_32750_32908 = state_32743__$1;
(statearr_32750_32908[(2)] = null);

(statearr_32750_32908[(1)] = (2));


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
});})(__32899,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
;
return ((function (__32899,switch__19510__auto__,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32754 = [null,null,null,null,null,null,null];
(statearr_32754[(0)] = state_machine__19511__auto__);

(statearr_32754[(1)] = (1));

return statearr_32754;
});
var state_machine__19511__auto____1 = (function (state_32743){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32755){if((e32755 instanceof Object)){
var ex__19514__auto__ = e32755;
var statearr_32756_32909 = state_32743;
(statearr_32756_32909[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32910 = state_32743;
state_32743 = G__32910;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32743){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(__32899,switch__19510__auto__,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
})();
var state__19568__auto__ = (function (){var statearr_32757 = f__19567__auto__.call(null);
(statearr_32757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___32902);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(__32899,c__19566__auto___32902,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
);


break;
case "compute":
var c__19566__auto___32911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32899,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (__32899,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function (state_32770){
var state_val_32771 = (state_32770[(1)]);
if((state_val_32771 === (7))){
var inst_32766 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32772_32912 = state_32770__$1;
(statearr_32772_32912[(2)] = inst_32766);

(statearr_32772_32912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (6))){
var state_32770__$1 = state_32770;
var statearr_32773_32913 = state_32770__$1;
(statearr_32773_32913[(2)] = null);

(statearr_32773_32913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (5))){
var state_32770__$1 = state_32770;
var statearr_32774_32914 = state_32770__$1;
(statearr_32774_32914[(2)] = null);

(statearr_32774_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (4))){
var inst_32760 = (state_32770[(2)]);
var inst_32761 = process.call(null,inst_32760);
var state_32770__$1 = state_32770;
if(cljs.core.truth_(inst_32761)){
var statearr_32775_32915 = state_32770__$1;
(statearr_32775_32915[(1)] = (5));

} else {
var statearr_32776_32916 = state_32770__$1;
(statearr_32776_32916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (3))){
var inst_32768 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32770__$1,inst_32768);
} else {
if((state_val_32771 === (2))){
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32770__$1,(4),jobs);
} else {
if((state_val_32771 === (1))){
var state_32770__$1 = state_32770;
var statearr_32777_32917 = state_32770__$1;
(statearr_32777_32917[(2)] = null);

(statearr_32777_32917[(1)] = (2));


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
});})(__32899,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
;
return ((function (__32899,switch__19510__auto__,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null];
(statearr_32781[(0)] = state_machine__19511__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var state_machine__19511__auto____1 = (function (state_32770){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32782){if((e32782 instanceof Object)){
var ex__19514__auto__ = e32782;
var statearr_32783_32918 = state_32770;
(statearr_32783_32918[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32919 = state_32770;
state_32770 = G__32919;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32770){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(__32899,switch__19510__auto__,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
})();
var state__19568__auto__ = (function (){var statearr_32784 = f__19567__auto__.call(null);
(statearr_32784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___32911);

return statearr_32784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(__32899,c__19566__auto___32911,G__32730_32900,n__17029__auto___32898,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32920 = (__32899 + (1));
__32899 = G__32920;
continue;
} else {
}
break;
}

var c__19566__auto___32921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___32921,jobs,results,process,async){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___32921,jobs,results,process,async){
return (function (state_32806){
var state_val_32807 = (state_32806[(1)]);
if((state_val_32807 === (9))){
var inst_32799 = (state_32806[(2)]);
var state_32806__$1 = (function (){var statearr_32808 = state_32806;
(statearr_32808[(7)] = inst_32799);

return statearr_32808;
})();
var statearr_32809_32922 = state_32806__$1;
(statearr_32809_32922[(2)] = null);

(statearr_32809_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (8))){
var inst_32792 = (state_32806[(8)]);
var inst_32797 = (state_32806[(2)]);
var state_32806__$1 = (function (){var statearr_32810 = state_32806;
(statearr_32810[(9)] = inst_32797);

return statearr_32810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32806__$1,(9),results,inst_32792);
} else {
if((state_val_32807 === (7))){
var inst_32802 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
var statearr_32811_32923 = state_32806__$1;
(statearr_32811_32923[(2)] = inst_32802);

(statearr_32811_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (6))){
var inst_32787 = (state_32806[(10)]);
var inst_32792 = (state_32806[(8)]);
var inst_32792__$1 = cljs.core.async.chan.call(null,(1));
var inst_32793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32794 = [inst_32787,inst_32792__$1];
var inst_32795 = (new cljs.core.PersistentVector(null,2,(5),inst_32793,inst_32794,null));
var state_32806__$1 = (function (){var statearr_32812 = state_32806;
(statearr_32812[(8)] = inst_32792__$1);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32806__$1,(8),jobs,inst_32795);
} else {
if((state_val_32807 === (5))){
var inst_32790 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32806__$1 = state_32806;
var statearr_32813_32924 = state_32806__$1;
(statearr_32813_32924[(2)] = inst_32790);

(statearr_32813_32924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (4))){
var inst_32787 = (state_32806[(10)]);
var inst_32787__$1 = (state_32806[(2)]);
var inst_32788 = (inst_32787__$1 == null);
var state_32806__$1 = (function (){var statearr_32814 = state_32806;
(statearr_32814[(10)] = inst_32787__$1);

return statearr_32814;
})();
if(cljs.core.truth_(inst_32788)){
var statearr_32815_32925 = state_32806__$1;
(statearr_32815_32925[(1)] = (5));

} else {
var statearr_32816_32926 = state_32806__$1;
(statearr_32816_32926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (3))){
var inst_32804 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32806__$1,inst_32804);
} else {
if((state_val_32807 === (2))){
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32806__$1,(4),from);
} else {
if((state_val_32807 === (1))){
var state_32806__$1 = state_32806;
var statearr_32817_32927 = state_32806__$1;
(statearr_32817_32927[(2)] = null);

(statearr_32817_32927[(1)] = (2));


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
});})(c__19566__auto___32921,jobs,results,process,async))
;
return ((function (switch__19510__auto__,c__19566__auto___32921,jobs,results,process,async){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32821[(0)] = state_machine__19511__auto__);

(statearr_32821[(1)] = (1));

return statearr_32821;
});
var state_machine__19511__auto____1 = (function (state_32806){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32822){if((e32822 instanceof Object)){
var ex__19514__auto__ = e32822;
var statearr_32823_32928 = state_32806;
(statearr_32823_32928[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32929 = state_32806;
state_32806 = G__32929;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32806){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___32921,jobs,results,process,async))
})();
var state__19568__auto__ = (function (){var statearr_32824 = f__19567__auto__.call(null);
(statearr_32824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___32921);

return statearr_32824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___32921,jobs,results,process,async))
);


var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__,jobs,results,process,async){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__,jobs,results,process,async){
return (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32864_32930 = state_32862__$1;
(statearr_32864_32930[(2)] = inst_32858);

(statearr_32864_32930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (20))){
var state_32862__$1 = state_32862;
var statearr_32865_32931 = state_32862__$1;
(statearr_32865_32931[(2)] = null);

(statearr_32865_32931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (1))){
var state_32862__$1 = state_32862;
var statearr_32866_32932 = state_32862__$1;
(statearr_32866_32932[(2)] = null);

(statearr_32866_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (4))){
var inst_32827 = (state_32862[(7)]);
var inst_32827__$1 = (state_32862[(2)]);
var inst_32828 = (inst_32827__$1 == null);
var state_32862__$1 = (function (){var statearr_32867 = state_32862;
(statearr_32867[(7)] = inst_32827__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32828)){
var statearr_32868_32933 = state_32862__$1;
(statearr_32868_32933[(1)] = (5));

} else {
var statearr_32869_32934 = state_32862__$1;
(statearr_32869_32934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (15))){
var inst_32840 = (state_32862[(8)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32862__$1,(18),to,inst_32840);
} else {
if((state_val_32863 === (21))){
var inst_32853 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32870_32935 = state_32862__$1;
(statearr_32870_32935[(2)] = inst_32853);

(statearr_32870_32935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (13))){
var inst_32855 = (state_32862[(2)]);
var state_32862__$1 = (function (){var statearr_32871 = state_32862;
(statearr_32871[(9)] = inst_32855);

return statearr_32871;
})();
var statearr_32872_32936 = state_32862__$1;
(statearr_32872_32936[(2)] = null);

(statearr_32872_32936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (6))){
var inst_32827 = (state_32862[(7)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32862__$1,(11),inst_32827);
} else {
if((state_val_32863 === (17))){
var inst_32848 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
if(cljs.core.truth_(inst_32848)){
var statearr_32873_32937 = state_32862__$1;
(statearr_32873_32937[(1)] = (19));

} else {
var statearr_32874_32938 = state_32862__$1;
(statearr_32874_32938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (3))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (12))){
var inst_32837 = (state_32862[(10)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32862__$1,(14),inst_32837);
} else {
if((state_val_32863 === (2))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32862__$1,(4),results);
} else {
if((state_val_32863 === (19))){
var state_32862__$1 = state_32862;
var statearr_32875_32939 = state_32862__$1;
(statearr_32875_32939[(2)] = null);

(statearr_32875_32939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (11))){
var inst_32837 = (state_32862[(2)]);
var state_32862__$1 = (function (){var statearr_32876 = state_32862;
(statearr_32876[(10)] = inst_32837);

return statearr_32876;
})();
var statearr_32877_32940 = state_32862__$1;
(statearr_32877_32940[(2)] = null);

(statearr_32877_32940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (9))){
var state_32862__$1 = state_32862;
var statearr_32878_32941 = state_32862__$1;
(statearr_32878_32941[(2)] = null);

(statearr_32878_32941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (5))){
var state_32862__$1 = state_32862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32879_32942 = state_32862__$1;
(statearr_32879_32942[(1)] = (8));

} else {
var statearr_32880_32943 = state_32862__$1;
(statearr_32880_32943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (14))){
var inst_32842 = (state_32862[(11)]);
var inst_32840 = (state_32862[(8)]);
var inst_32840__$1 = (state_32862[(2)]);
var inst_32841 = (inst_32840__$1 == null);
var inst_32842__$1 = cljs.core.not.call(null,inst_32841);
var state_32862__$1 = (function (){var statearr_32881 = state_32862;
(statearr_32881[(11)] = inst_32842__$1);

(statearr_32881[(8)] = inst_32840__$1);

return statearr_32881;
})();
if(inst_32842__$1){
var statearr_32882_32944 = state_32862__$1;
(statearr_32882_32944[(1)] = (15));

} else {
var statearr_32883_32945 = state_32862__$1;
(statearr_32883_32945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (16))){
var inst_32842 = (state_32862[(11)]);
var state_32862__$1 = state_32862;
var statearr_32884_32946 = state_32862__$1;
(statearr_32884_32946[(2)] = inst_32842);

(statearr_32884_32946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (10))){
var inst_32834 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32885_32947 = state_32862__$1;
(statearr_32885_32947[(2)] = inst_32834);

(statearr_32885_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (18))){
var inst_32845 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32886_32948 = state_32862__$1;
(statearr_32886_32948[(2)] = inst_32845);

(statearr_32886_32948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (8))){
var inst_32831 = cljs.core.async.close_BANG_.call(null,to);
var state_32862__$1 = state_32862;
var statearr_32887_32949 = state_32862__$1;
(statearr_32887_32949[(2)] = inst_32831);

(statearr_32887_32949[(1)] = (10));


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
});})(c__19566__auto__,jobs,results,process,async))
;
return ((function (switch__19510__auto__,c__19566__auto__,jobs,results,process,async){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32891[(0)] = state_machine__19511__auto__);

(statearr_32891[(1)] = (1));

return statearr_32891;
});
var state_machine__19511__auto____1 = (function (state_32862){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object)){
var ex__19514__auto__ = e32892;
var statearr_32893_32950 = state_32862;
(statearr_32893_32950[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32951 = state_32862;
state_32862 = G__32951;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__,jobs,results,process,async))
})();
var state__19568__auto__ = (function (){var statearr_32894 = f__19567__auto__.call(null);
(statearr_32894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__,jobs,results,process,async))
);

return c__19566__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19566__auto___33052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___33052,tc,fc){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___33052,tc,fc){
return (function (state_33027){
var state_val_33028 = (state_33027[(1)]);
if((state_val_33028 === (7))){
var inst_33023 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
var statearr_33029_33053 = state_33027__$1;
(statearr_33029_33053[(2)] = inst_33023);

(statearr_33029_33053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (1))){
var state_33027__$1 = state_33027;
var statearr_33030_33054 = state_33027__$1;
(statearr_33030_33054[(2)] = null);

(statearr_33030_33054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (4))){
var inst_33004 = (state_33027[(7)]);
var inst_33004__$1 = (state_33027[(2)]);
var inst_33005 = (inst_33004__$1 == null);
var state_33027__$1 = (function (){var statearr_33031 = state_33027;
(statearr_33031[(7)] = inst_33004__$1);

return statearr_33031;
})();
if(cljs.core.truth_(inst_33005)){
var statearr_33032_33055 = state_33027__$1;
(statearr_33032_33055[(1)] = (5));

} else {
var statearr_33033_33056 = state_33027__$1;
(statearr_33033_33056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (13))){
var state_33027__$1 = state_33027;
var statearr_33034_33057 = state_33027__$1;
(statearr_33034_33057[(2)] = null);

(statearr_33034_33057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (6))){
var inst_33004 = (state_33027[(7)]);
var inst_33010 = p.call(null,inst_33004);
var state_33027__$1 = state_33027;
if(cljs.core.truth_(inst_33010)){
var statearr_33035_33058 = state_33027__$1;
(statearr_33035_33058[(1)] = (9));

} else {
var statearr_33036_33059 = state_33027__$1;
(statearr_33036_33059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (3))){
var inst_33025 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33027__$1,inst_33025);
} else {
if((state_val_33028 === (12))){
var state_33027__$1 = state_33027;
var statearr_33037_33060 = state_33027__$1;
(statearr_33037_33060[(2)] = null);

(statearr_33037_33060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (2))){
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33027__$1,(4),ch);
} else {
if((state_val_33028 === (11))){
var inst_33004 = (state_33027[(7)]);
var inst_33014 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33027__$1,(8),inst_33014,inst_33004);
} else {
if((state_val_33028 === (9))){
var state_33027__$1 = state_33027;
var statearr_33038_33061 = state_33027__$1;
(statearr_33038_33061[(2)] = tc);

(statearr_33038_33061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (5))){
var inst_33007 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33008 = cljs.core.async.close_BANG_.call(null,fc);
var state_33027__$1 = (function (){var statearr_33039 = state_33027;
(statearr_33039[(8)] = inst_33007);

return statearr_33039;
})();
var statearr_33040_33062 = state_33027__$1;
(statearr_33040_33062[(2)] = inst_33008);

(statearr_33040_33062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (14))){
var inst_33021 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
var statearr_33041_33063 = state_33027__$1;
(statearr_33041_33063[(2)] = inst_33021);

(statearr_33041_33063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (10))){
var state_33027__$1 = state_33027;
var statearr_33042_33064 = state_33027__$1;
(statearr_33042_33064[(2)] = fc);

(statearr_33042_33064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (8))){
var inst_33016 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
if(cljs.core.truth_(inst_33016)){
var statearr_33043_33065 = state_33027__$1;
(statearr_33043_33065[(1)] = (12));

} else {
var statearr_33044_33066 = state_33027__$1;
(statearr_33044_33066[(1)] = (13));

}

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
});})(c__19566__auto___33052,tc,fc))
;
return ((function (switch__19510__auto__,c__19566__auto___33052,tc,fc){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = state_machine__19511__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var state_machine__19511__auto____1 = (function (state_33027){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_33027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e33049){if((e33049 instanceof Object)){
var ex__19514__auto__ = e33049;
var statearr_33050_33067 = state_33027;
(statearr_33050_33067[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33068 = state_33027;
state_33027 = G__33068;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_33027){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_33027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___33052,tc,fc))
})();
var state__19568__auto__ = (function (){var statearr_33051 = f__19567__auto__.call(null);
(statearr_33051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___33052);

return statearr_33051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___33052,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__){
return (function (state_33115){
var state_val_33116 = (state_33115[(1)]);
if((state_val_33116 === (7))){
var inst_33111 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
var statearr_33117_33133 = state_33115__$1;
(statearr_33117_33133[(2)] = inst_33111);

(statearr_33117_33133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (6))){
var inst_33101 = (state_33115[(7)]);
var inst_33104 = (state_33115[(8)]);
var inst_33108 = f.call(null,inst_33101,inst_33104);
var inst_33101__$1 = inst_33108;
var state_33115__$1 = (function (){var statearr_33118 = state_33115;
(statearr_33118[(7)] = inst_33101__$1);

return statearr_33118;
})();
var statearr_33119_33134 = state_33115__$1;
(statearr_33119_33134[(2)] = null);

(statearr_33119_33134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (5))){
var inst_33101 = (state_33115[(7)]);
var state_33115__$1 = state_33115;
var statearr_33120_33135 = state_33115__$1;
(statearr_33120_33135[(2)] = inst_33101);

(statearr_33120_33135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (4))){
var inst_33104 = (state_33115[(8)]);
var inst_33104__$1 = (state_33115[(2)]);
var inst_33105 = (inst_33104__$1 == null);
var state_33115__$1 = (function (){var statearr_33121 = state_33115;
(statearr_33121[(8)] = inst_33104__$1);

return statearr_33121;
})();
if(cljs.core.truth_(inst_33105)){
var statearr_33122_33136 = state_33115__$1;
(statearr_33122_33136[(1)] = (5));

} else {
var statearr_33123_33137 = state_33115__$1;
(statearr_33123_33137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (3))){
var inst_33113 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33115__$1,inst_33113);
} else {
if((state_val_33116 === (2))){
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33115__$1,(4),ch);
} else {
if((state_val_33116 === (1))){
var inst_33101 = init;
var state_33115__$1 = (function (){var statearr_33124 = state_33115;
(statearr_33124[(7)] = inst_33101);

return statearr_33124;
})();
var statearr_33125_33138 = state_33115__$1;
(statearr_33125_33138[(2)] = null);

(statearr_33125_33138[(1)] = (2));


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
});})(c__19566__auto__))
;
return ((function (switch__19510__auto__,c__19566__auto__){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_33129 = [null,null,null,null,null,null,null,null,null];
(statearr_33129[(0)] = state_machine__19511__auto__);

(statearr_33129[(1)] = (1));

return statearr_33129;
});
var state_machine__19511__auto____1 = (function (state_33115){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_33115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e33130){if((e33130 instanceof Object)){
var ex__19514__auto__ = e33130;
var statearr_33131_33139 = state_33115;
(statearr_33131_33139[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_33115;
state_33115 = G__33140;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_33115){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_33115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__))
})();
var state__19568__auto__ = (function (){var statearr_33132 = f__19567__auto__.call(null);
(statearr_33132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__))
);

return c__19566__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__){
return (function (state_33214){
var state_val_33215 = (state_33214[(1)]);
if((state_val_33215 === (7))){
var inst_33196 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33216_33239 = state_33214__$1;
(statearr_33216_33239[(2)] = inst_33196);

(statearr_33216_33239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (1))){
var inst_33190 = cljs.core.seq.call(null,coll);
var inst_33191 = inst_33190;
var state_33214__$1 = (function (){var statearr_33217 = state_33214;
(statearr_33217[(7)] = inst_33191);

return statearr_33217;
})();
var statearr_33218_33240 = state_33214__$1;
(statearr_33218_33240[(2)] = null);

(statearr_33218_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (4))){
var inst_33191 = (state_33214[(7)]);
var inst_33194 = cljs.core.first.call(null,inst_33191);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33214__$1,(7),ch,inst_33194);
} else {
if((state_val_33215 === (13))){
var inst_33208 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33219_33241 = state_33214__$1;
(statearr_33219_33241[(2)] = inst_33208);

(statearr_33219_33241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (6))){
var inst_33199 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
if(cljs.core.truth_(inst_33199)){
var statearr_33220_33242 = state_33214__$1;
(statearr_33220_33242[(1)] = (8));

} else {
var statearr_33221_33243 = state_33214__$1;
(statearr_33221_33243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (3))){
var inst_33212 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33214__$1,inst_33212);
} else {
if((state_val_33215 === (12))){
var state_33214__$1 = state_33214;
var statearr_33222_33244 = state_33214__$1;
(statearr_33222_33244[(2)] = null);

(statearr_33222_33244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (2))){
var inst_33191 = (state_33214[(7)]);
var state_33214__$1 = state_33214;
if(cljs.core.truth_(inst_33191)){
var statearr_33223_33245 = state_33214__$1;
(statearr_33223_33245[(1)] = (4));

} else {
var statearr_33224_33246 = state_33214__$1;
(statearr_33224_33246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (11))){
var inst_33205 = cljs.core.async.close_BANG_.call(null,ch);
var state_33214__$1 = state_33214;
var statearr_33225_33247 = state_33214__$1;
(statearr_33225_33247[(2)] = inst_33205);

(statearr_33225_33247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (9))){
var state_33214__$1 = state_33214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33226_33248 = state_33214__$1;
(statearr_33226_33248[(1)] = (11));

} else {
var statearr_33227_33249 = state_33214__$1;
(statearr_33227_33249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (5))){
var inst_33191 = (state_33214[(7)]);
var state_33214__$1 = state_33214;
var statearr_33228_33250 = state_33214__$1;
(statearr_33228_33250[(2)] = inst_33191);

(statearr_33228_33250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (10))){
var inst_33210 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33229_33251 = state_33214__$1;
(statearr_33229_33251[(2)] = inst_33210);

(statearr_33229_33251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (8))){
var inst_33191 = (state_33214[(7)]);
var inst_33201 = cljs.core.next.call(null,inst_33191);
var inst_33191__$1 = inst_33201;
var state_33214__$1 = (function (){var statearr_33230 = state_33214;
(statearr_33230[(7)] = inst_33191__$1);

return statearr_33230;
})();
var statearr_33231_33252 = state_33214__$1;
(statearr_33231_33252[(2)] = null);

(statearr_33231_33252[(1)] = (2));


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
});})(c__19566__auto__))
;
return ((function (switch__19510__auto__,c__19566__auto__){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = state_machine__19511__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var state_machine__19511__auto____1 = (function (state_33214){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_33214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__19514__auto__ = e33236;
var statearr_33237_33253 = state_33214;
(statearr_33237_33253[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33254 = state_33214;
state_33214 = G__33254;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_33214){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_33214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__))
})();
var state__19568__auto__ = (function (){var statearr_33238 = f__19567__auto__.call(null);
(statearr_33238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__))
);

return c__19566__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj33256 = {};
return obj33256;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16130__auto__ = _;
if(and__16130__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16130__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16786__auto__ = (((_ == null))?null:_);
return (function (){var or__16142__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj33258 = {};
return obj33258;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t33480 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33480 = (function (cs,ch,mult,meta33481){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33481 = meta33481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33480.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t33480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t33480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t33480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t33480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t33480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33482){
var self__ = this;
var _33482__$1 = this;
return self__.meta33481;
});})(cs))
;

cljs.core.async.t33480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33482,meta33481__$1){
var self__ = this;
var _33482__$1 = this;
return (new cljs.core.async.t33480(self__.cs,self__.ch,self__.mult,meta33481__$1));
});})(cs))
;

cljs.core.async.t33480.cljs$lang$type = true;

cljs.core.async.t33480.cljs$lang$ctorStr = "cljs.core.async/t33480";

cljs.core.async.t33480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t33480");
});})(cs))
;

cljs.core.async.__GT_t33480 = ((function (cs){
return (function __GT_t33480(cs__$1,ch__$1,mult__$1,meta33481){
return (new cljs.core.async.t33480(cs__$1,ch__$1,mult__$1,meta33481));
});})(cs))
;

}

return (new cljs.core.async.t33480(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19566__auto___33701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___33701,cs,m,dchan,dctr,done){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___33701,cs,m,dchan,dctr,done){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33615_33702 = state_33613__$1;
(statearr_33615_33702[(2)] = inst_33609);

(statearr_33615_33702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (20))){
var inst_33514 = (state_33613[(7)]);
var inst_33524 = cljs.core.first.call(null,inst_33514);
var inst_33525 = cljs.core.nth.call(null,inst_33524,(0),null);
var inst_33526 = cljs.core.nth.call(null,inst_33524,(1),null);
var state_33613__$1 = (function (){var statearr_33616 = state_33613;
(statearr_33616[(8)] = inst_33525);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33526)){
var statearr_33617_33703 = state_33613__$1;
(statearr_33617_33703[(1)] = (22));

} else {
var statearr_33618_33704 = state_33613__$1;
(statearr_33618_33704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (27))){
var inst_33561 = (state_33613[(9)]);
var inst_33485 = (state_33613[(10)]);
var inst_33554 = (state_33613[(11)]);
var inst_33556 = (state_33613[(12)]);
var inst_33561__$1 = cljs.core._nth.call(null,inst_33554,inst_33556);
var inst_33562 = cljs.core.async.put_BANG_.call(null,inst_33561__$1,inst_33485,done);
var state_33613__$1 = (function (){var statearr_33619 = state_33613;
(statearr_33619[(9)] = inst_33561__$1);

return statearr_33619;
})();
if(cljs.core.truth_(inst_33562)){
var statearr_33620_33705 = state_33613__$1;
(statearr_33620_33705[(1)] = (30));

} else {
var statearr_33621_33706 = state_33613__$1;
(statearr_33621_33706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33622_33707 = state_33613__$1;
(statearr_33622_33707[(2)] = null);

(statearr_33622_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (24))){
var inst_33514 = (state_33613[(7)]);
var inst_33531 = (state_33613[(2)]);
var inst_33532 = cljs.core.next.call(null,inst_33514);
var inst_33494 = inst_33532;
var inst_33495 = null;
var inst_33496 = (0);
var inst_33497 = (0);
var state_33613__$1 = (function (){var statearr_33623 = state_33613;
(statearr_33623[(13)] = inst_33531);

(statearr_33623[(14)] = inst_33495);

(statearr_33623[(15)] = inst_33496);

(statearr_33623[(16)] = inst_33494);

(statearr_33623[(17)] = inst_33497);

return statearr_33623;
})();
var statearr_33624_33708 = state_33613__$1;
(statearr_33624_33708[(2)] = null);

(statearr_33624_33708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (39))){
var state_33613__$1 = state_33613;
var statearr_33628_33709 = state_33613__$1;
(statearr_33628_33709[(2)] = null);

(statearr_33628_33709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (4))){
var inst_33485 = (state_33613[(10)]);
var inst_33485__$1 = (state_33613[(2)]);
var inst_33486 = (inst_33485__$1 == null);
var state_33613__$1 = (function (){var statearr_33629 = state_33613;
(statearr_33629[(10)] = inst_33485__$1);

return statearr_33629;
})();
if(cljs.core.truth_(inst_33486)){
var statearr_33630_33710 = state_33613__$1;
(statearr_33630_33710[(1)] = (5));

} else {
var statearr_33631_33711 = state_33613__$1;
(statearr_33631_33711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (15))){
var inst_33495 = (state_33613[(14)]);
var inst_33496 = (state_33613[(15)]);
var inst_33494 = (state_33613[(16)]);
var inst_33497 = (state_33613[(17)]);
var inst_33510 = (state_33613[(2)]);
var inst_33511 = (inst_33497 + (1));
var tmp33625 = inst_33495;
var tmp33626 = inst_33496;
var tmp33627 = inst_33494;
var inst_33494__$1 = tmp33627;
var inst_33495__$1 = tmp33625;
var inst_33496__$1 = tmp33626;
var inst_33497__$1 = inst_33511;
var state_33613__$1 = (function (){var statearr_33632 = state_33613;
(statearr_33632[(14)] = inst_33495__$1);

(statearr_33632[(18)] = inst_33510);

(statearr_33632[(15)] = inst_33496__$1);

(statearr_33632[(16)] = inst_33494__$1);

(statearr_33632[(17)] = inst_33497__$1);

return statearr_33632;
})();
var statearr_33633_33712 = state_33613__$1;
(statearr_33633_33712[(2)] = null);

(statearr_33633_33712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (21))){
var inst_33535 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33637_33713 = state_33613__$1;
(statearr_33637_33713[(2)] = inst_33535);

(statearr_33637_33713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (31))){
var inst_33561 = (state_33613[(9)]);
var inst_33565 = done.call(null,null);
var inst_33566 = cljs.core.async.untap_STAR_.call(null,m,inst_33561);
var state_33613__$1 = (function (){var statearr_33638 = state_33613;
(statearr_33638[(19)] = inst_33565);

return statearr_33638;
})();
var statearr_33639_33714 = state_33613__$1;
(statearr_33639_33714[(2)] = inst_33566);

(statearr_33639_33714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (32))){
var inst_33554 = (state_33613[(11)]);
var inst_33553 = (state_33613[(20)]);
var inst_33555 = (state_33613[(21)]);
var inst_33556 = (state_33613[(12)]);
var inst_33568 = (state_33613[(2)]);
var inst_33569 = (inst_33556 + (1));
var tmp33634 = inst_33554;
var tmp33635 = inst_33553;
var tmp33636 = inst_33555;
var inst_33553__$1 = tmp33635;
var inst_33554__$1 = tmp33634;
var inst_33555__$1 = tmp33636;
var inst_33556__$1 = inst_33569;
var state_33613__$1 = (function (){var statearr_33640 = state_33613;
(statearr_33640[(11)] = inst_33554__$1);

(statearr_33640[(20)] = inst_33553__$1);

(statearr_33640[(21)] = inst_33555__$1);

(statearr_33640[(12)] = inst_33556__$1);

(statearr_33640[(22)] = inst_33568);

return statearr_33640;
})();
var statearr_33641_33715 = state_33613__$1;
(statearr_33641_33715[(2)] = null);

(statearr_33641_33715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (40))){
var inst_33581 = (state_33613[(23)]);
var inst_33585 = done.call(null,null);
var inst_33586 = cljs.core.async.untap_STAR_.call(null,m,inst_33581);
var state_33613__$1 = (function (){var statearr_33642 = state_33613;
(statearr_33642[(24)] = inst_33585);

return statearr_33642;
})();
var statearr_33643_33716 = state_33613__$1;
(statearr_33643_33716[(2)] = inst_33586);

(statearr_33643_33716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (33))){
var inst_33572 = (state_33613[(25)]);
var inst_33574 = cljs.core.chunked_seq_QMARK_.call(null,inst_33572);
var state_33613__$1 = state_33613;
if(inst_33574){
var statearr_33644_33717 = state_33613__$1;
(statearr_33644_33717[(1)] = (36));

} else {
var statearr_33645_33718 = state_33613__$1;
(statearr_33645_33718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (13))){
var inst_33504 = (state_33613[(26)]);
var inst_33507 = cljs.core.async.close_BANG_.call(null,inst_33504);
var state_33613__$1 = state_33613;
var statearr_33646_33719 = state_33613__$1;
(statearr_33646_33719[(2)] = inst_33507);

(statearr_33646_33719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (22))){
var inst_33525 = (state_33613[(8)]);
var inst_33528 = cljs.core.async.close_BANG_.call(null,inst_33525);
var state_33613__$1 = state_33613;
var statearr_33647_33720 = state_33613__$1;
(statearr_33647_33720[(2)] = inst_33528);

(statearr_33647_33720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (36))){
var inst_33572 = (state_33613[(25)]);
var inst_33576 = cljs.core.chunk_first.call(null,inst_33572);
var inst_33577 = cljs.core.chunk_rest.call(null,inst_33572);
var inst_33578 = cljs.core.count.call(null,inst_33576);
var inst_33553 = inst_33577;
var inst_33554 = inst_33576;
var inst_33555 = inst_33578;
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33648 = state_33613;
(statearr_33648[(11)] = inst_33554);

(statearr_33648[(20)] = inst_33553);

(statearr_33648[(21)] = inst_33555);

(statearr_33648[(12)] = inst_33556);

return statearr_33648;
})();
var statearr_33649_33721 = state_33613__$1;
(statearr_33649_33721[(2)] = null);

(statearr_33649_33721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (41))){
var inst_33572 = (state_33613[(25)]);
var inst_33588 = (state_33613[(2)]);
var inst_33589 = cljs.core.next.call(null,inst_33572);
var inst_33553 = inst_33589;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33650 = state_33613;
(statearr_33650[(27)] = inst_33588);

(statearr_33650[(11)] = inst_33554);

(statearr_33650[(20)] = inst_33553);

(statearr_33650[(21)] = inst_33555);

(statearr_33650[(12)] = inst_33556);

return statearr_33650;
})();
var statearr_33651_33722 = state_33613__$1;
(statearr_33651_33722[(2)] = null);

(statearr_33651_33722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (43))){
var state_33613__$1 = state_33613;
var statearr_33652_33723 = state_33613__$1;
(statearr_33652_33723[(2)] = null);

(statearr_33652_33723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (29))){
var inst_33597 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33653_33724 = state_33613__$1;
(statearr_33653_33724[(2)] = inst_33597);

(statearr_33653_33724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (44))){
var inst_33606 = (state_33613[(2)]);
var state_33613__$1 = (function (){var statearr_33654 = state_33613;
(statearr_33654[(28)] = inst_33606);

return statearr_33654;
})();
var statearr_33655_33725 = state_33613__$1;
(statearr_33655_33725[(2)] = null);

(statearr_33655_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var inst_33545 = (state_33613[(29)]);
var inst_33544 = cljs.core.deref.call(null,cs);
var inst_33545__$1 = cljs.core.keys.call(null,inst_33544);
var inst_33546 = cljs.core.count.call(null,inst_33545__$1);
var inst_33547 = cljs.core.reset_BANG_.call(null,dctr,inst_33546);
var inst_33552 = cljs.core.seq.call(null,inst_33545__$1);
var inst_33553 = inst_33552;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33656 = state_33613;
(statearr_33656[(29)] = inst_33545__$1);

(statearr_33656[(11)] = inst_33554);

(statearr_33656[(20)] = inst_33553);

(statearr_33656[(21)] = inst_33555);

(statearr_33656[(12)] = inst_33556);

(statearr_33656[(30)] = inst_33547);

return statearr_33656;
})();
var statearr_33657_33726 = state_33613__$1;
(statearr_33657_33726[(2)] = null);

(statearr_33657_33726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (28))){
var inst_33572 = (state_33613[(25)]);
var inst_33553 = (state_33613[(20)]);
var inst_33572__$1 = cljs.core.seq.call(null,inst_33553);
var state_33613__$1 = (function (){var statearr_33658 = state_33613;
(statearr_33658[(25)] = inst_33572__$1);

return statearr_33658;
})();
if(inst_33572__$1){
var statearr_33659_33727 = state_33613__$1;
(statearr_33659_33727[(1)] = (33));

} else {
var statearr_33660_33728 = state_33613__$1;
(statearr_33660_33728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (25))){
var inst_33555 = (state_33613[(21)]);
var inst_33556 = (state_33613[(12)]);
var inst_33558 = (inst_33556 < inst_33555);
var inst_33559 = inst_33558;
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33559)){
var statearr_33661_33729 = state_33613__$1;
(statearr_33661_33729[(1)] = (27));

} else {
var statearr_33662_33730 = state_33613__$1;
(statearr_33662_33730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (34))){
var state_33613__$1 = state_33613;
var statearr_33663_33731 = state_33613__$1;
(statearr_33663_33731[(2)] = null);

(statearr_33663_33731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (17))){
var state_33613__$1 = state_33613;
var statearr_33664_33732 = state_33613__$1;
(statearr_33664_33732[(2)] = null);

(statearr_33664_33732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (12))){
var inst_33540 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33665_33733 = state_33613__$1;
(statearr_33665_33733[(2)] = inst_33540);

(statearr_33665_33733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(4),ch);
} else {
if((state_val_33614 === (23))){
var state_33613__$1 = state_33613;
var statearr_33666_33734 = state_33613__$1;
(statearr_33666_33734[(2)] = null);

(statearr_33666_33734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (35))){
var inst_33595 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33667_33735 = state_33613__$1;
(statearr_33667_33735[(2)] = inst_33595);

(statearr_33667_33735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (19))){
var inst_33514 = (state_33613[(7)]);
var inst_33518 = cljs.core.chunk_first.call(null,inst_33514);
var inst_33519 = cljs.core.chunk_rest.call(null,inst_33514);
var inst_33520 = cljs.core.count.call(null,inst_33518);
var inst_33494 = inst_33519;
var inst_33495 = inst_33518;
var inst_33496 = inst_33520;
var inst_33497 = (0);
var state_33613__$1 = (function (){var statearr_33668 = state_33613;
(statearr_33668[(14)] = inst_33495);

(statearr_33668[(15)] = inst_33496);

(statearr_33668[(16)] = inst_33494);

(statearr_33668[(17)] = inst_33497);

return statearr_33668;
})();
var statearr_33669_33736 = state_33613__$1;
(statearr_33669_33736[(2)] = null);

(statearr_33669_33736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (11))){
var inst_33514 = (state_33613[(7)]);
var inst_33494 = (state_33613[(16)]);
var inst_33514__$1 = cljs.core.seq.call(null,inst_33494);
var state_33613__$1 = (function (){var statearr_33670 = state_33613;
(statearr_33670[(7)] = inst_33514__$1);

return statearr_33670;
})();
if(inst_33514__$1){
var statearr_33671_33737 = state_33613__$1;
(statearr_33671_33737[(1)] = (16));

} else {
var statearr_33672_33738 = state_33613__$1;
(statearr_33672_33738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (9))){
var inst_33542 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33673_33739 = state_33613__$1;
(statearr_33673_33739[(2)] = inst_33542);

(statearr_33673_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var inst_33492 = cljs.core.deref.call(null,cs);
var inst_33493 = cljs.core.seq.call(null,inst_33492);
var inst_33494 = inst_33493;
var inst_33495 = null;
var inst_33496 = (0);
var inst_33497 = (0);
var state_33613__$1 = (function (){var statearr_33674 = state_33613;
(statearr_33674[(14)] = inst_33495);

(statearr_33674[(15)] = inst_33496);

(statearr_33674[(16)] = inst_33494);

(statearr_33674[(17)] = inst_33497);

return statearr_33674;
})();
var statearr_33675_33740 = state_33613__$1;
(statearr_33675_33740[(2)] = null);

(statearr_33675_33740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (14))){
var state_33613__$1 = state_33613;
var statearr_33676_33741 = state_33613__$1;
(statearr_33676_33741[(2)] = null);

(statearr_33676_33741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (45))){
var inst_33603 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33677_33742 = state_33613__$1;
(statearr_33677_33742[(2)] = inst_33603);

(statearr_33677_33742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (26))){
var inst_33545 = (state_33613[(29)]);
var inst_33599 = (state_33613[(2)]);
var inst_33600 = cljs.core.seq.call(null,inst_33545);
var state_33613__$1 = (function (){var statearr_33678 = state_33613;
(statearr_33678[(31)] = inst_33599);

return statearr_33678;
})();
if(inst_33600){
var statearr_33679_33743 = state_33613__$1;
(statearr_33679_33743[(1)] = (42));

} else {
var statearr_33680_33744 = state_33613__$1;
(statearr_33680_33744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (16))){
var inst_33514 = (state_33613[(7)]);
var inst_33516 = cljs.core.chunked_seq_QMARK_.call(null,inst_33514);
var state_33613__$1 = state_33613;
if(inst_33516){
var statearr_33681_33745 = state_33613__$1;
(statearr_33681_33745[(1)] = (19));

} else {
var statearr_33682_33746 = state_33613__$1;
(statearr_33682_33746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (38))){
var inst_33592 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33683_33747 = state_33613__$1;
(statearr_33683_33747[(2)] = inst_33592);

(statearr_33683_33747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (30))){
var state_33613__$1 = state_33613;
var statearr_33684_33748 = state_33613__$1;
(statearr_33684_33748[(2)] = null);

(statearr_33684_33748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (10))){
var inst_33495 = (state_33613[(14)]);
var inst_33497 = (state_33613[(17)]);
var inst_33503 = cljs.core._nth.call(null,inst_33495,inst_33497);
var inst_33504 = cljs.core.nth.call(null,inst_33503,(0),null);
var inst_33505 = cljs.core.nth.call(null,inst_33503,(1),null);
var state_33613__$1 = (function (){var statearr_33685 = state_33613;
(statearr_33685[(26)] = inst_33504);

return statearr_33685;
})();
if(cljs.core.truth_(inst_33505)){
var statearr_33686_33749 = state_33613__$1;
(statearr_33686_33749[(1)] = (13));

} else {
var statearr_33687_33750 = state_33613__$1;
(statearr_33687_33750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (18))){
var inst_33538 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33688_33751 = state_33613__$1;
(statearr_33688_33751[(2)] = inst_33538);

(statearr_33688_33751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (42))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(45),dchan);
} else {
if((state_val_33614 === (37))){
var inst_33572 = (state_33613[(25)]);
var inst_33581 = (state_33613[(23)]);
var inst_33485 = (state_33613[(10)]);
var inst_33581__$1 = cljs.core.first.call(null,inst_33572);
var inst_33582 = cljs.core.async.put_BANG_.call(null,inst_33581__$1,inst_33485,done);
var state_33613__$1 = (function (){var statearr_33689 = state_33613;
(statearr_33689[(23)] = inst_33581__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33690_33752 = state_33613__$1;
(statearr_33690_33752[(1)] = (39));

} else {
var statearr_33691_33753 = state_33613__$1;
(statearr_33691_33753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (8))){
var inst_33496 = (state_33613[(15)]);
var inst_33497 = (state_33613[(17)]);
var inst_33499 = (inst_33497 < inst_33496);
var inst_33500 = inst_33499;
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33500)){
var statearr_33692_33754 = state_33613__$1;
(statearr_33692_33754[(1)] = (10));

} else {
var statearr_33693_33755 = state_33613__$1;
(statearr_33693_33755[(1)] = (11));

}

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
});})(c__19566__auto___33701,cs,m,dchan,dctr,done))
;
return ((function (switch__19510__auto__,c__19566__auto___33701,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_33697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33697[(0)] = state_machine__19511__auto__);

(statearr_33697[(1)] = (1));

return statearr_33697;
});
var state_machine__19511__auto____1 = (function (state_33613){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_33613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e33698){if((e33698 instanceof Object)){
var ex__19514__auto__ = e33698;
var statearr_33699_33756 = state_33613;
(statearr_33699_33756[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_33613;
state_33613 = G__33757;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___33701,cs,m,dchan,dctr,done))
})();
var state__19568__auto__ = (function (){var statearr_33700 = f__19567__auto__.call(null);
(statearr_33700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___33701);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___33701,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj33759 = {};
return obj33759;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16130__auto__ = m;
if(and__16130__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16786__auto__ = (((m == null))?null:m);
return (function (){var or__16142__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33760){
var map__33765 = p__33760;
var map__33765__$1 = ((cljs.core.seq_QMARK_.call(null,map__33765))?cljs.core.apply.call(null,cljs.core.hash_map,map__33765):map__33765);
var opts = map__33765__$1;
var statearr_33766_33769 = state;
(statearr_33766_33769[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__33765,map__33765__$1,opts){
return (function (val){
var statearr_33767_33770 = state;
(statearr_33767_33770[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33765,map__33765__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33768_33771 = state;
(statearr_33768_33771[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33760 = null;
if (arguments.length > 3) {
var G__33772__i = 0, G__33772__a = new Array(arguments.length -  3);
while (G__33772__i < G__33772__a.length) {G__33772__a[G__33772__i] = arguments[G__33772__i + 3]; ++G__33772__i;}
  p__33760 = new cljs.core.IndexedSeq(G__33772__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33760);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33773){
var state = cljs.core.first(arglist__33773);
arglist__33773 = cljs.core.next(arglist__33773);
var cont_block = cljs.core.first(arglist__33773);
arglist__33773 = cljs.core.next(arglist__33773);
var ports = cljs.core.first(arglist__33773);
var p__33760 = cljs.core.rest(arglist__33773);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33760);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t33893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33893 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33894){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33894 = meta33894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33893.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33893.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33895){
var self__ = this;
var _33895__$1 = this;
return self__.meta33894;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33895,meta33894__$1){
var self__ = this;
var _33895__$1 = this;
return (new cljs.core.async.t33893(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33894__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33893.cljs$lang$type = true;

cljs.core.async.t33893.cljs$lang$ctorStr = "cljs.core.async/t33893";

cljs.core.async.t33893.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t33893");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33893 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33894){
return (new cljs.core.async.t33893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33894));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33893(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19566__auto___34012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33965){
var state_val_33966 = (state_33965[(1)]);
if((state_val_33966 === (7))){
var inst_33909 = (state_33965[(7)]);
var inst_33914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33909);
var state_33965__$1 = state_33965;
var statearr_33967_34013 = state_33965__$1;
(statearr_33967_34013[(2)] = inst_33914);

(statearr_33967_34013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (20))){
var inst_33924 = (state_33965[(8)]);
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33965__$1,(23),out,inst_33924);
} else {
if((state_val_33966 === (1))){
var inst_33899 = (state_33965[(9)]);
var inst_33899__$1 = calc_state.call(null);
var inst_33900 = cljs.core.seq_QMARK_.call(null,inst_33899__$1);
var state_33965__$1 = (function (){var statearr_33968 = state_33965;
(statearr_33968[(9)] = inst_33899__$1);

return statearr_33968;
})();
if(inst_33900){
var statearr_33969_34014 = state_33965__$1;
(statearr_33969_34014[(1)] = (2));

} else {
var statearr_33970_34015 = state_33965__$1;
(statearr_33970_34015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (24))){
var inst_33917 = (state_33965[(10)]);
var inst_33909 = inst_33917;
var state_33965__$1 = (function (){var statearr_33971 = state_33965;
(statearr_33971[(7)] = inst_33909);

return statearr_33971;
})();
var statearr_33972_34016 = state_33965__$1;
(statearr_33972_34016[(2)] = null);

(statearr_33972_34016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (4))){
var inst_33899 = (state_33965[(9)]);
var inst_33905 = (state_33965[(2)]);
var inst_33906 = cljs.core.get.call(null,inst_33905,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33907 = cljs.core.get.call(null,inst_33905,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33908 = cljs.core.get.call(null,inst_33905,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33909 = inst_33899;
var state_33965__$1 = (function (){var statearr_33973 = state_33965;
(statearr_33973[(7)] = inst_33909);

(statearr_33973[(11)] = inst_33907);

(statearr_33973[(12)] = inst_33908);

(statearr_33973[(13)] = inst_33906);

return statearr_33973;
})();
var statearr_33974_34017 = state_33965__$1;
(statearr_33974_34017[(2)] = null);

(statearr_33974_34017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (15))){
var state_33965__$1 = state_33965;
var statearr_33975_34018 = state_33965__$1;
(statearr_33975_34018[(2)] = null);

(statearr_33975_34018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (21))){
var inst_33917 = (state_33965[(10)]);
var inst_33909 = inst_33917;
var state_33965__$1 = (function (){var statearr_33976 = state_33965;
(statearr_33976[(7)] = inst_33909);

return statearr_33976;
})();
var statearr_33977_34019 = state_33965__$1;
(statearr_33977_34019[(2)] = null);

(statearr_33977_34019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (13))){
var inst_33961 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33978_34020 = state_33965__$1;
(statearr_33978_34020[(2)] = inst_33961);

(statearr_33978_34020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (22))){
var inst_33959 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33979_34021 = state_33965__$1;
(statearr_33979_34021[(2)] = inst_33959);

(statearr_33979_34021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (6))){
var inst_33963 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33965__$1,inst_33963);
} else {
if((state_val_33966 === (25))){
var state_33965__$1 = state_33965;
var statearr_33980_34022 = state_33965__$1;
(statearr_33980_34022[(2)] = null);

(statearr_33980_34022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (17))){
var inst_33939 = (state_33965[(14)]);
var state_33965__$1 = state_33965;
var statearr_33981_34023 = state_33965__$1;
(statearr_33981_34023[(2)] = inst_33939);

(statearr_33981_34023[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (3))){
var inst_33899 = (state_33965[(9)]);
var state_33965__$1 = state_33965;
var statearr_33982_34024 = state_33965__$1;
(statearr_33982_34024[(2)] = inst_33899);

(statearr_33982_34024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (12))){
var inst_33920 = (state_33965[(15)]);
var inst_33939 = (state_33965[(14)]);
var inst_33925 = (state_33965[(16)]);
var inst_33939__$1 = inst_33920.call(null,inst_33925);
var state_33965__$1 = (function (){var statearr_33983 = state_33965;
(statearr_33983[(14)] = inst_33939__$1);

return statearr_33983;
})();
if(cljs.core.truth_(inst_33939__$1)){
var statearr_33984_34025 = state_33965__$1;
(statearr_33984_34025[(1)] = (17));

} else {
var statearr_33985_34026 = state_33965__$1;
(statearr_33985_34026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (2))){
var inst_33899 = (state_33965[(9)]);
var inst_33902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33899);
var state_33965__$1 = state_33965;
var statearr_33986_34027 = state_33965__$1;
(statearr_33986_34027[(2)] = inst_33902);

(statearr_33986_34027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (23))){
var inst_33950 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
if(cljs.core.truth_(inst_33950)){
var statearr_33987_34028 = state_33965__$1;
(statearr_33987_34028[(1)] = (24));

} else {
var statearr_33988_34029 = state_33965__$1;
(statearr_33988_34029[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (19))){
var inst_33947 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
if(cljs.core.truth_(inst_33947)){
var statearr_33989_34030 = state_33965__$1;
(statearr_33989_34030[(1)] = (20));

} else {
var statearr_33990_34031 = state_33965__$1;
(statearr_33990_34031[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (11))){
var inst_33924 = (state_33965[(8)]);
var inst_33930 = (inst_33924 == null);
var state_33965__$1 = state_33965;
if(cljs.core.truth_(inst_33930)){
var statearr_33991_34032 = state_33965__$1;
(statearr_33991_34032[(1)] = (14));

} else {
var statearr_33992_34033 = state_33965__$1;
(statearr_33992_34033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (9))){
var inst_33917 = (state_33965[(10)]);
var inst_33917__$1 = (state_33965[(2)]);
var inst_33918 = cljs.core.get.call(null,inst_33917__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33919 = cljs.core.get.call(null,inst_33917__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33920 = cljs.core.get.call(null,inst_33917__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_33965__$1 = (function (){var statearr_33993 = state_33965;
(statearr_33993[(15)] = inst_33920);

(statearr_33993[(17)] = inst_33919);

(statearr_33993[(10)] = inst_33917__$1);

return statearr_33993;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33965__$1,(10),inst_33918);
} else {
if((state_val_33966 === (5))){
var inst_33909 = (state_33965[(7)]);
var inst_33912 = cljs.core.seq_QMARK_.call(null,inst_33909);
var state_33965__$1 = state_33965;
if(inst_33912){
var statearr_33994_34034 = state_33965__$1;
(statearr_33994_34034[(1)] = (7));

} else {
var statearr_33995_34035 = state_33965__$1;
(statearr_33995_34035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (14))){
var inst_33925 = (state_33965[(16)]);
var inst_33932 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33925);
var state_33965__$1 = state_33965;
var statearr_33996_34036 = state_33965__$1;
(statearr_33996_34036[(2)] = inst_33932);

(statearr_33996_34036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (26))){
var inst_33955 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33997_34037 = state_33965__$1;
(statearr_33997_34037[(2)] = inst_33955);

(statearr_33997_34037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (16))){
var inst_33935 = (state_33965[(2)]);
var inst_33936 = calc_state.call(null);
var inst_33909 = inst_33936;
var state_33965__$1 = (function (){var statearr_33998 = state_33965;
(statearr_33998[(7)] = inst_33909);

(statearr_33998[(18)] = inst_33935);

return statearr_33998;
})();
var statearr_33999_34038 = state_33965__$1;
(statearr_33999_34038[(2)] = null);

(statearr_33999_34038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (10))){
var inst_33924 = (state_33965[(8)]);
var inst_33925 = (state_33965[(16)]);
var inst_33923 = (state_33965[(2)]);
var inst_33924__$1 = cljs.core.nth.call(null,inst_33923,(0),null);
var inst_33925__$1 = cljs.core.nth.call(null,inst_33923,(1),null);
var inst_33926 = (inst_33924__$1 == null);
var inst_33927 = cljs.core._EQ_.call(null,inst_33925__$1,change);
var inst_33928 = (inst_33926) || (inst_33927);
var state_33965__$1 = (function (){var statearr_34000 = state_33965;
(statearr_34000[(8)] = inst_33924__$1);

(statearr_34000[(16)] = inst_33925__$1);

return statearr_34000;
})();
if(cljs.core.truth_(inst_33928)){
var statearr_34001_34039 = state_33965__$1;
(statearr_34001_34039[(1)] = (11));

} else {
var statearr_34002_34040 = state_33965__$1;
(statearr_34002_34040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (18))){
var inst_33920 = (state_33965[(15)]);
var inst_33919 = (state_33965[(17)]);
var inst_33925 = (state_33965[(16)]);
var inst_33942 = cljs.core.empty_QMARK_.call(null,inst_33920);
var inst_33943 = inst_33919.call(null,inst_33925);
var inst_33944 = cljs.core.not.call(null,inst_33943);
var inst_33945 = (inst_33942) && (inst_33944);
var state_33965__$1 = state_33965;
var statearr_34003_34041 = state_33965__$1;
(statearr_34003_34041[(2)] = inst_33945);

(statearr_34003_34041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (8))){
var inst_33909 = (state_33965[(7)]);
var state_33965__$1 = state_33965;
var statearr_34004_34042 = state_33965__$1;
(statearr_34004_34042[(2)] = inst_33909);

(statearr_34004_34042[(1)] = (9));


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
});})(c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19510__auto__,c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = state_machine__19511__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var state_machine__19511__auto____1 = (function (state_33965){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_33965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34009){if((e34009 instanceof Object)){
var ex__19514__auto__ = e34009;
var statearr_34010_34043 = state_33965;
(statearr_34010_34043[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34044 = state_33965;
state_33965 = G__34044;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_33965){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_33965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19568__auto__ = (function (){var statearr_34011 = f__19567__auto__.call(null);
(statearr_34011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34012);

return statearr_34011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj34046 = {};
return obj34046;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16130__auto__ = p;
if(and__16130__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16130__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16786__auto__ = (((p == null))?null:p);
return (function (){var or__16142__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16130__auto__ = p;
if(and__16130__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16130__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16786__auto__ = (((p == null))?null:p);
return (function (){var or__16142__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__16130__auto__ = p;
if(and__16130__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16130__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16786__auto__ = (((p == null))?null:p);
return (function (){var or__16142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16130__auto__ = p;
if(and__16130__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16130__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16786__auto__ = (((p == null))?null:p);
return (function (){var or__16142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16786__auto__)]);
if(or__16142__auto__){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16142__auto____$1){
return or__16142__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16142__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16142__auto__,mults){
return (function (p1__34047_SHARP_){
if(cljs.core.truth_(p1__34047_SHARP_.call(null,topic))){
return p1__34047_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16142__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t34170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34170 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34171){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34171 = meta34171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34170.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t34170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34172){
var self__ = this;
var _34172__$1 = this;
return self__.meta34171;
});})(mults,ensure_mult))
;

cljs.core.async.t34170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34172,meta34171__$1){
var self__ = this;
var _34172__$1 = this;
return (new cljs.core.async.t34170(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34171__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t34170.cljs$lang$type = true;

cljs.core.async.t34170.cljs$lang$ctorStr = "cljs.core.async/t34170";

cljs.core.async.t34170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t34170");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t34170 = ((function (mults,ensure_mult){
return (function __GT_t34170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34171){
return (new cljs.core.async.t34170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34171));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t34170(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19566__auto___34292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34292,mults,ensure_mult,p){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34292,mults,ensure_mult,p){
return (function (state_34244){
var state_val_34245 = (state_34244[(1)]);
if((state_val_34245 === (7))){
var inst_34240 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34246_34293 = state_34244__$1;
(statearr_34246_34293[(2)] = inst_34240);

(statearr_34246_34293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (20))){
var state_34244__$1 = state_34244;
var statearr_34247_34294 = state_34244__$1;
(statearr_34247_34294[(2)] = null);

(statearr_34247_34294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (1))){
var state_34244__$1 = state_34244;
var statearr_34248_34295 = state_34244__$1;
(statearr_34248_34295[(2)] = null);

(statearr_34248_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (24))){
var inst_34223 = (state_34244[(7)]);
var inst_34232 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34223);
var state_34244__$1 = state_34244;
var statearr_34249_34296 = state_34244__$1;
(statearr_34249_34296[(2)] = inst_34232);

(statearr_34249_34296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (4))){
var inst_34175 = (state_34244[(8)]);
var inst_34175__$1 = (state_34244[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var state_34244__$1 = (function (){var statearr_34250 = state_34244;
(statearr_34250[(8)] = inst_34175__$1);

return statearr_34250;
})();
if(cljs.core.truth_(inst_34176)){
var statearr_34251_34297 = state_34244__$1;
(statearr_34251_34297[(1)] = (5));

} else {
var statearr_34252_34298 = state_34244__$1;
(statearr_34252_34298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (15))){
var inst_34217 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34253_34299 = state_34244__$1;
(statearr_34253_34299[(2)] = inst_34217);

(statearr_34253_34299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (21))){
var inst_34237 = (state_34244[(2)]);
var state_34244__$1 = (function (){var statearr_34254 = state_34244;
(statearr_34254[(9)] = inst_34237);

return statearr_34254;
})();
var statearr_34255_34300 = state_34244__$1;
(statearr_34255_34300[(2)] = null);

(statearr_34255_34300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (13))){
var inst_34199 = (state_34244[(10)]);
var inst_34201 = cljs.core.chunked_seq_QMARK_.call(null,inst_34199);
var state_34244__$1 = state_34244;
if(inst_34201){
var statearr_34256_34301 = state_34244__$1;
(statearr_34256_34301[(1)] = (16));

} else {
var statearr_34257_34302 = state_34244__$1;
(statearr_34257_34302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (22))){
var inst_34229 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
if(cljs.core.truth_(inst_34229)){
var statearr_34258_34303 = state_34244__$1;
(statearr_34258_34303[(1)] = (23));

} else {
var statearr_34259_34304 = state_34244__$1;
(statearr_34259_34304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (6))){
var inst_34175 = (state_34244[(8)]);
var inst_34223 = (state_34244[(7)]);
var inst_34225 = (state_34244[(11)]);
var inst_34223__$1 = topic_fn.call(null,inst_34175);
var inst_34224 = cljs.core.deref.call(null,mults);
var inst_34225__$1 = cljs.core.get.call(null,inst_34224,inst_34223__$1);
var state_34244__$1 = (function (){var statearr_34260 = state_34244;
(statearr_34260[(7)] = inst_34223__$1);

(statearr_34260[(11)] = inst_34225__$1);

return statearr_34260;
})();
if(cljs.core.truth_(inst_34225__$1)){
var statearr_34261_34305 = state_34244__$1;
(statearr_34261_34305[(1)] = (19));

} else {
var statearr_34262_34306 = state_34244__$1;
(statearr_34262_34306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (25))){
var inst_34234 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34263_34307 = state_34244__$1;
(statearr_34263_34307[(2)] = inst_34234);

(statearr_34263_34307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (17))){
var inst_34199 = (state_34244[(10)]);
var inst_34208 = cljs.core.first.call(null,inst_34199);
var inst_34209 = cljs.core.async.muxch_STAR_.call(null,inst_34208);
var inst_34210 = cljs.core.async.close_BANG_.call(null,inst_34209);
var inst_34211 = cljs.core.next.call(null,inst_34199);
var inst_34185 = inst_34211;
var inst_34186 = null;
var inst_34187 = (0);
var inst_34188 = (0);
var state_34244__$1 = (function (){var statearr_34264 = state_34244;
(statearr_34264[(12)] = inst_34210);

(statearr_34264[(13)] = inst_34186);

(statearr_34264[(14)] = inst_34188);

(statearr_34264[(15)] = inst_34185);

(statearr_34264[(16)] = inst_34187);

return statearr_34264;
})();
var statearr_34265_34308 = state_34244__$1;
(statearr_34265_34308[(2)] = null);

(statearr_34265_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (3))){
var inst_34242 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34244__$1,inst_34242);
} else {
if((state_val_34245 === (12))){
var inst_34219 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34266_34309 = state_34244__$1;
(statearr_34266_34309[(2)] = inst_34219);

(statearr_34266_34309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (2))){
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34244__$1,(4),ch);
} else {
if((state_val_34245 === (23))){
var state_34244__$1 = state_34244;
var statearr_34267_34310 = state_34244__$1;
(statearr_34267_34310[(2)] = null);

(statearr_34267_34310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (19))){
var inst_34175 = (state_34244[(8)]);
var inst_34225 = (state_34244[(11)]);
var inst_34227 = cljs.core.async.muxch_STAR_.call(null,inst_34225);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34244__$1,(22),inst_34227,inst_34175);
} else {
if((state_val_34245 === (11))){
var inst_34199 = (state_34244[(10)]);
var inst_34185 = (state_34244[(15)]);
var inst_34199__$1 = cljs.core.seq.call(null,inst_34185);
var state_34244__$1 = (function (){var statearr_34268 = state_34244;
(statearr_34268[(10)] = inst_34199__$1);

return statearr_34268;
})();
if(inst_34199__$1){
var statearr_34269_34311 = state_34244__$1;
(statearr_34269_34311[(1)] = (13));

} else {
var statearr_34270_34312 = state_34244__$1;
(statearr_34270_34312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (9))){
var inst_34221 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34271_34313 = state_34244__$1;
(statearr_34271_34313[(2)] = inst_34221);

(statearr_34271_34313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (5))){
var inst_34182 = cljs.core.deref.call(null,mults);
var inst_34183 = cljs.core.vals.call(null,inst_34182);
var inst_34184 = cljs.core.seq.call(null,inst_34183);
var inst_34185 = inst_34184;
var inst_34186 = null;
var inst_34187 = (0);
var inst_34188 = (0);
var state_34244__$1 = (function (){var statearr_34272 = state_34244;
(statearr_34272[(13)] = inst_34186);

(statearr_34272[(14)] = inst_34188);

(statearr_34272[(15)] = inst_34185);

(statearr_34272[(16)] = inst_34187);

return statearr_34272;
})();
var statearr_34273_34314 = state_34244__$1;
(statearr_34273_34314[(2)] = null);

(statearr_34273_34314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (14))){
var state_34244__$1 = state_34244;
var statearr_34277_34315 = state_34244__$1;
(statearr_34277_34315[(2)] = null);

(statearr_34277_34315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (16))){
var inst_34199 = (state_34244[(10)]);
var inst_34203 = cljs.core.chunk_first.call(null,inst_34199);
var inst_34204 = cljs.core.chunk_rest.call(null,inst_34199);
var inst_34205 = cljs.core.count.call(null,inst_34203);
var inst_34185 = inst_34204;
var inst_34186 = inst_34203;
var inst_34187 = inst_34205;
var inst_34188 = (0);
var state_34244__$1 = (function (){var statearr_34278 = state_34244;
(statearr_34278[(13)] = inst_34186);

(statearr_34278[(14)] = inst_34188);

(statearr_34278[(15)] = inst_34185);

(statearr_34278[(16)] = inst_34187);

return statearr_34278;
})();
var statearr_34279_34316 = state_34244__$1;
(statearr_34279_34316[(2)] = null);

(statearr_34279_34316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (10))){
var inst_34186 = (state_34244[(13)]);
var inst_34188 = (state_34244[(14)]);
var inst_34185 = (state_34244[(15)]);
var inst_34187 = (state_34244[(16)]);
var inst_34193 = cljs.core._nth.call(null,inst_34186,inst_34188);
var inst_34194 = cljs.core.async.muxch_STAR_.call(null,inst_34193);
var inst_34195 = cljs.core.async.close_BANG_.call(null,inst_34194);
var inst_34196 = (inst_34188 + (1));
var tmp34274 = inst_34186;
var tmp34275 = inst_34185;
var tmp34276 = inst_34187;
var inst_34185__$1 = tmp34275;
var inst_34186__$1 = tmp34274;
var inst_34187__$1 = tmp34276;
var inst_34188__$1 = inst_34196;
var state_34244__$1 = (function (){var statearr_34280 = state_34244;
(statearr_34280[(13)] = inst_34186__$1);

(statearr_34280[(14)] = inst_34188__$1);

(statearr_34280[(17)] = inst_34195);

(statearr_34280[(15)] = inst_34185__$1);

(statearr_34280[(16)] = inst_34187__$1);

return statearr_34280;
})();
var statearr_34281_34317 = state_34244__$1;
(statearr_34281_34317[(2)] = null);

(statearr_34281_34317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (18))){
var inst_34214 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34282_34318 = state_34244__$1;
(statearr_34282_34318[(2)] = inst_34214);

(statearr_34282_34318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (8))){
var inst_34188 = (state_34244[(14)]);
var inst_34187 = (state_34244[(16)]);
var inst_34190 = (inst_34188 < inst_34187);
var inst_34191 = inst_34190;
var state_34244__$1 = state_34244;
if(cljs.core.truth_(inst_34191)){
var statearr_34283_34319 = state_34244__$1;
(statearr_34283_34319[(1)] = (10));

} else {
var statearr_34284_34320 = state_34244__$1;
(statearr_34284_34320[(1)] = (11));

}

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
});})(c__19566__auto___34292,mults,ensure_mult,p))
;
return ((function (switch__19510__auto__,c__19566__auto___34292,mults,ensure_mult,p){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34288[(0)] = state_machine__19511__auto__);

(statearr_34288[(1)] = (1));

return statearr_34288;
});
var state_machine__19511__auto____1 = (function (state_34244){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34289){if((e34289 instanceof Object)){
var ex__19514__auto__ = e34289;
var statearr_34290_34321 = state_34244;
(statearr_34290_34321[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34322 = state_34244;
state_34244 = G__34322;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34244){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34292,mults,ensure_mult,p))
})();
var state__19568__auto__ = (function (){var statearr_34291 = f__19567__auto__.call(null);
(statearr_34291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34292);

return statearr_34291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34292,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19566__auto___34459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34429){
var state_val_34430 = (state_34429[(1)]);
if((state_val_34430 === (7))){
var state_34429__$1 = state_34429;
var statearr_34431_34460 = state_34429__$1;
(statearr_34431_34460[(2)] = null);

(statearr_34431_34460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (1))){
var state_34429__$1 = state_34429;
var statearr_34432_34461 = state_34429__$1;
(statearr_34432_34461[(2)] = null);

(statearr_34432_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (4))){
var inst_34393 = (state_34429[(7)]);
var inst_34395 = (inst_34393 < cnt);
var state_34429__$1 = state_34429;
if(cljs.core.truth_(inst_34395)){
var statearr_34433_34462 = state_34429__$1;
(statearr_34433_34462[(1)] = (6));

} else {
var statearr_34434_34463 = state_34429__$1;
(statearr_34434_34463[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (15))){
var inst_34425 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34435_34464 = state_34429__$1;
(statearr_34435_34464[(2)] = inst_34425);

(statearr_34435_34464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (13))){
var inst_34418 = cljs.core.async.close_BANG_.call(null,out);
var state_34429__$1 = state_34429;
var statearr_34436_34465 = state_34429__$1;
(statearr_34436_34465[(2)] = inst_34418);

(statearr_34436_34465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (6))){
var state_34429__$1 = state_34429;
var statearr_34437_34466 = state_34429__$1;
(statearr_34437_34466[(2)] = null);

(statearr_34437_34466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (3))){
var inst_34427 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34429__$1,inst_34427);
} else {
if((state_val_34430 === (12))){
var inst_34415 = (state_34429[(8)]);
var inst_34415__$1 = (state_34429[(2)]);
var inst_34416 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34415__$1);
var state_34429__$1 = (function (){var statearr_34438 = state_34429;
(statearr_34438[(8)] = inst_34415__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34416)){
var statearr_34439_34467 = state_34429__$1;
(statearr_34439_34467[(1)] = (13));

} else {
var statearr_34440_34468 = state_34429__$1;
(statearr_34440_34468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (2))){
var inst_34392 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34393 = (0);
var state_34429__$1 = (function (){var statearr_34441 = state_34429;
(statearr_34441[(7)] = inst_34393);

(statearr_34441[(9)] = inst_34392);

return statearr_34441;
})();
var statearr_34442_34469 = state_34429__$1;
(statearr_34442_34469[(2)] = null);

(statearr_34442_34469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (11))){
var inst_34393 = (state_34429[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34429,(10),Object,null,(9));
var inst_34402 = chs__$1.call(null,inst_34393);
var inst_34403 = done.call(null,inst_34393);
var inst_34404 = cljs.core.async.take_BANG_.call(null,inst_34402,inst_34403);
var state_34429__$1 = state_34429;
var statearr_34443_34470 = state_34429__$1;
(statearr_34443_34470[(2)] = inst_34404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (9))){
var inst_34393 = (state_34429[(7)]);
var inst_34406 = (state_34429[(2)]);
var inst_34407 = (inst_34393 + (1));
var inst_34393__$1 = inst_34407;
var state_34429__$1 = (function (){var statearr_34444 = state_34429;
(statearr_34444[(7)] = inst_34393__$1);

(statearr_34444[(10)] = inst_34406);

return statearr_34444;
})();
var statearr_34445_34471 = state_34429__$1;
(statearr_34445_34471[(2)] = null);

(statearr_34445_34471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (5))){
var inst_34413 = (state_34429[(2)]);
var state_34429__$1 = (function (){var statearr_34446 = state_34429;
(statearr_34446[(11)] = inst_34413);

return statearr_34446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34429__$1,(12),dchan);
} else {
if((state_val_34430 === (14))){
var inst_34415 = (state_34429[(8)]);
var inst_34420 = cljs.core.apply.call(null,f,inst_34415);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34429__$1,(16),out,inst_34420);
} else {
if((state_val_34430 === (16))){
var inst_34422 = (state_34429[(2)]);
var state_34429__$1 = (function (){var statearr_34447 = state_34429;
(statearr_34447[(12)] = inst_34422);

return statearr_34447;
})();
var statearr_34448_34472 = state_34429__$1;
(statearr_34448_34472[(2)] = null);

(statearr_34448_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (10))){
var inst_34397 = (state_34429[(2)]);
var inst_34398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34429__$1 = (function (){var statearr_34449 = state_34429;
(statearr_34449[(13)] = inst_34397);

return statearr_34449;
})();
var statearr_34450_34473 = state_34429__$1;
(statearr_34450_34473[(2)] = inst_34398);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (8))){
var inst_34411 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34451_34474 = state_34429__$1;
(statearr_34451_34474[(2)] = inst_34411);

(statearr_34451_34474[(1)] = (5));


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
});})(c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19510__auto__,c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = state_machine__19511__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var state_machine__19511__auto____1 = (function (state_34429){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__19514__auto__ = e34456;
var statearr_34457_34475 = state_34429;
(statearr_34457_34475[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34476 = state_34429;
state_34429 = G__34476;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34429){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19568__auto__ = (function (){var statearr_34458 = f__19567__auto__.call(null);
(statearr_34458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34459);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34459,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___34584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34584,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34584,out){
return (function (state_34560){
var state_val_34561 = (state_34560[(1)]);
if((state_val_34561 === (7))){
var inst_34540 = (state_34560[(7)]);
var inst_34539 = (state_34560[(8)]);
var inst_34539__$1 = (state_34560[(2)]);
var inst_34540__$1 = cljs.core.nth.call(null,inst_34539__$1,(0),null);
var inst_34541 = cljs.core.nth.call(null,inst_34539__$1,(1),null);
var inst_34542 = (inst_34540__$1 == null);
var state_34560__$1 = (function (){var statearr_34562 = state_34560;
(statearr_34562[(7)] = inst_34540__$1);

(statearr_34562[(9)] = inst_34541);

(statearr_34562[(8)] = inst_34539__$1);

return statearr_34562;
})();
if(cljs.core.truth_(inst_34542)){
var statearr_34563_34585 = state_34560__$1;
(statearr_34563_34585[(1)] = (8));

} else {
var statearr_34564_34586 = state_34560__$1;
(statearr_34564_34586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (1))){
var inst_34531 = cljs.core.vec.call(null,chs);
var inst_34532 = inst_34531;
var state_34560__$1 = (function (){var statearr_34565 = state_34560;
(statearr_34565[(10)] = inst_34532);

return statearr_34565;
})();
var statearr_34566_34587 = state_34560__$1;
(statearr_34566_34587[(2)] = null);

(statearr_34566_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (4))){
var inst_34532 = (state_34560[(10)]);
var state_34560__$1 = state_34560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34560__$1,(7),inst_34532);
} else {
if((state_val_34561 === (6))){
var inst_34556 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34567_34588 = state_34560__$1;
(statearr_34567_34588[(2)] = inst_34556);

(statearr_34567_34588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (3))){
var inst_34558 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34560__$1,inst_34558);
} else {
if((state_val_34561 === (2))){
var inst_34532 = (state_34560[(10)]);
var inst_34534 = cljs.core.count.call(null,inst_34532);
var inst_34535 = (inst_34534 > (0));
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34535)){
var statearr_34569_34589 = state_34560__$1;
(statearr_34569_34589[(1)] = (4));

} else {
var statearr_34570_34590 = state_34560__$1;
(statearr_34570_34590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (11))){
var inst_34532 = (state_34560[(10)]);
var inst_34549 = (state_34560[(2)]);
var tmp34568 = inst_34532;
var inst_34532__$1 = tmp34568;
var state_34560__$1 = (function (){var statearr_34571 = state_34560;
(statearr_34571[(10)] = inst_34532__$1);

(statearr_34571[(11)] = inst_34549);

return statearr_34571;
})();
var statearr_34572_34591 = state_34560__$1;
(statearr_34572_34591[(2)] = null);

(statearr_34572_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (9))){
var inst_34540 = (state_34560[(7)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34560__$1,(11),out,inst_34540);
} else {
if((state_val_34561 === (5))){
var inst_34554 = cljs.core.async.close_BANG_.call(null,out);
var state_34560__$1 = state_34560;
var statearr_34573_34592 = state_34560__$1;
(statearr_34573_34592[(2)] = inst_34554);

(statearr_34573_34592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (10))){
var inst_34552 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34574_34593 = state_34560__$1;
(statearr_34574_34593[(2)] = inst_34552);

(statearr_34574_34593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (8))){
var inst_34540 = (state_34560[(7)]);
var inst_34541 = (state_34560[(9)]);
var inst_34532 = (state_34560[(10)]);
var inst_34539 = (state_34560[(8)]);
var inst_34544 = (function (){var c = inst_34541;
var v = inst_34540;
var vec__34537 = inst_34539;
var cs = inst_34532;
return ((function (c,v,vec__34537,cs,inst_34540,inst_34541,inst_34532,inst_34539,state_val_34561,c__19566__auto___34584,out){
return (function (p1__34477_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34477_SHARP_);
});
;})(c,v,vec__34537,cs,inst_34540,inst_34541,inst_34532,inst_34539,state_val_34561,c__19566__auto___34584,out))
})();
var inst_34545 = cljs.core.filterv.call(null,inst_34544,inst_34532);
var inst_34532__$1 = inst_34545;
var state_34560__$1 = (function (){var statearr_34575 = state_34560;
(statearr_34575[(10)] = inst_34532__$1);

return statearr_34575;
})();
var statearr_34576_34594 = state_34560__$1;
(statearr_34576_34594[(2)] = null);

(statearr_34576_34594[(1)] = (2));


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
});})(c__19566__auto___34584,out))
;
return ((function (switch__19510__auto__,c__19566__auto___34584,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34580[(0)] = state_machine__19511__auto__);

(statearr_34580[(1)] = (1));

return statearr_34580;
});
var state_machine__19511__auto____1 = (function (state_34560){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34581){if((e34581 instanceof Object)){
var ex__19514__auto__ = e34581;
var statearr_34582_34595 = state_34560;
(statearr_34582_34595[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34596 = state_34560;
state_34560 = G__34596;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34560){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34584,out))
})();
var state__19568__auto__ = (function (){var statearr_34583 = f__19567__auto__.call(null);
(statearr_34583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34584);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34584,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___34689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34689,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34689,out){
return (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (7))){
var inst_34648 = (state_34666[(7)]);
var inst_34648__$1 = (state_34666[(2)]);
var inst_34649 = (inst_34648__$1 == null);
var inst_34650 = cljs.core.not.call(null,inst_34649);
var state_34666__$1 = (function (){var statearr_34668 = state_34666;
(statearr_34668[(7)] = inst_34648__$1);

return statearr_34668;
})();
if(inst_34650){
var statearr_34669_34690 = state_34666__$1;
(statearr_34669_34690[(1)] = (8));

} else {
var statearr_34670_34691 = state_34666__$1;
(statearr_34670_34691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (1))){
var inst_34643 = (0);
var state_34666__$1 = (function (){var statearr_34671 = state_34666;
(statearr_34671[(8)] = inst_34643);

return statearr_34671;
})();
var statearr_34672_34692 = state_34666__$1;
(statearr_34672_34692[(2)] = null);

(statearr_34672_34692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (4))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34666__$1,(7),ch);
} else {
if((state_val_34667 === (6))){
var inst_34661 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34673_34693 = state_34666__$1;
(statearr_34673_34693[(2)] = inst_34661);

(statearr_34673_34693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (3))){
var inst_34663 = (state_34666[(2)]);
var inst_34664 = cljs.core.async.close_BANG_.call(null,out);
var state_34666__$1 = (function (){var statearr_34674 = state_34666;
(statearr_34674[(9)] = inst_34663);

return statearr_34674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (2))){
var inst_34643 = (state_34666[(8)]);
var inst_34645 = (inst_34643 < n);
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34645)){
var statearr_34675_34694 = state_34666__$1;
(statearr_34675_34694[(1)] = (4));

} else {
var statearr_34676_34695 = state_34666__$1;
(statearr_34676_34695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (11))){
var inst_34643 = (state_34666[(8)]);
var inst_34653 = (state_34666[(2)]);
var inst_34654 = (inst_34643 + (1));
var inst_34643__$1 = inst_34654;
var state_34666__$1 = (function (){var statearr_34677 = state_34666;
(statearr_34677[(8)] = inst_34643__$1);

(statearr_34677[(10)] = inst_34653);

return statearr_34677;
})();
var statearr_34678_34696 = state_34666__$1;
(statearr_34678_34696[(2)] = null);

(statearr_34678_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (9))){
var state_34666__$1 = state_34666;
var statearr_34679_34697 = state_34666__$1;
(statearr_34679_34697[(2)] = null);

(statearr_34679_34697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var state_34666__$1 = state_34666;
var statearr_34680_34698 = state_34666__$1;
(statearr_34680_34698[(2)] = null);

(statearr_34680_34698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (10))){
var inst_34658 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34681_34699 = state_34666__$1;
(statearr_34681_34699[(2)] = inst_34658);

(statearr_34681_34699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34648 = (state_34666[(7)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34666__$1,(11),out,inst_34648);
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
});})(c__19566__auto___34689,out))
;
return ((function (switch__19510__auto__,c__19566__auto___34689,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34685[(0)] = state_machine__19511__auto__);

(statearr_34685[(1)] = (1));

return statearr_34685;
});
var state_machine__19511__auto____1 = (function (state_34666){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34686){if((e34686 instanceof Object)){
var ex__19514__auto__ = e34686;
var statearr_34687_34700 = state_34666;
(statearr_34687_34700[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34701 = state_34666;
state_34666 = G__34701;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34689,out))
})();
var state__19568__auto__ = (function (){var statearr_34688 = f__19567__auto__.call(null);
(statearr_34688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34689);

return statearr_34688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34689,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t34709 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34709 = (function (ch,f,map_LT_,meta34710){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34710 = meta34710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34712 = (function (fn1,_,meta34710,map_LT_,f,ch,meta34713){
this.fn1 = fn1;
this._ = _;
this.meta34710 = meta34710;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34713 = meta34713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34702_SHARP_){
return f1.call(null,(((p1__34702_SHARP_ == null))?null:self__.f.call(null,p1__34702_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34714){
var self__ = this;
var _34714__$1 = this;
return self__.meta34713;
});})(___$1))
;

cljs.core.async.t34712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34714,meta34713__$1){
var self__ = this;
var _34714__$1 = this;
return (new cljs.core.async.t34712(self__.fn1,self__._,self__.meta34710,self__.map_LT_,self__.f,self__.ch,meta34713__$1));
});})(___$1))
;

cljs.core.async.t34712.cljs$lang$type = true;

cljs.core.async.t34712.cljs$lang$ctorStr = "cljs.core.async/t34712";

cljs.core.async.t34712.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t34712");
});})(___$1))
;

cljs.core.async.__GT_t34712 = ((function (___$1){
return (function __GT_t34712(fn1__$1,___$2,meta34710__$1,map_LT___$1,f__$1,ch__$1,meta34713){
return (new cljs.core.async.t34712(fn1__$1,___$2,meta34710__$1,map_LT___$1,f__$1,ch__$1,meta34713));
});})(___$1))
;

}

return (new cljs.core.async.t34712(fn1,___$1,self__.meta34710,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16130__auto__ = ret;
if(cljs.core.truth_(and__16130__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16130__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34711){
var self__ = this;
var _34711__$1 = this;
return self__.meta34710;
});

cljs.core.async.t34709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34711,meta34710__$1){
var self__ = this;
var _34711__$1 = this;
return (new cljs.core.async.t34709(self__.ch,self__.f,self__.map_LT_,meta34710__$1));
});

cljs.core.async.t34709.cljs$lang$type = true;

cljs.core.async.t34709.cljs$lang$ctorStr = "cljs.core.async/t34709";

cljs.core.async.t34709.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t34709");
});

cljs.core.async.__GT_t34709 = (function __GT_t34709(ch__$1,f__$1,map_LT___$1,meta34710){
return (new cljs.core.async.t34709(ch__$1,f__$1,map_LT___$1,meta34710));
});

}

return (new cljs.core.async.t34709(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34718 = (function (ch,f,map_GT_,meta34719){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34719 = meta34719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34720){
var self__ = this;
var _34720__$1 = this;
return self__.meta34719;
});

cljs.core.async.t34718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34720,meta34719__$1){
var self__ = this;
var _34720__$1 = this;
return (new cljs.core.async.t34718(self__.ch,self__.f,self__.map_GT_,meta34719__$1));
});

cljs.core.async.t34718.cljs$lang$type = true;

cljs.core.async.t34718.cljs$lang$ctorStr = "cljs.core.async/t34718";

cljs.core.async.t34718.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t34718");
});

cljs.core.async.__GT_t34718 = (function __GT_t34718(ch__$1,f__$1,map_GT___$1,meta34719){
return (new cljs.core.async.t34718(ch__$1,f__$1,map_GT___$1,meta34719));
});

}

return (new cljs.core.async.t34718(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34724 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34724 = (function (ch,p,filter_GT_,meta34725){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34725 = meta34725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34726){
var self__ = this;
var _34726__$1 = this;
return self__.meta34725;
});

cljs.core.async.t34724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34726,meta34725__$1){
var self__ = this;
var _34726__$1 = this;
return (new cljs.core.async.t34724(self__.ch,self__.p,self__.filter_GT_,meta34725__$1));
});

cljs.core.async.t34724.cljs$lang$type = true;

cljs.core.async.t34724.cljs$lang$ctorStr = "cljs.core.async/t34724";

cljs.core.async.t34724.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"cljs.core.async/t34724");
});

cljs.core.async.__GT_t34724 = (function __GT_t34724(ch__$1,p__$1,filter_GT___$1,meta34725){
return (new cljs.core.async.t34724(ch__$1,p__$1,filter_GT___$1,meta34725));
});

}

return (new cljs.core.async.t34724(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___34809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___34809,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___34809,out){
return (function (state_34788){
var state_val_34789 = (state_34788[(1)]);
if((state_val_34789 === (7))){
var inst_34784 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34790_34810 = state_34788__$1;
(statearr_34790_34810[(2)] = inst_34784);

(statearr_34790_34810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (1))){
var state_34788__$1 = state_34788;
var statearr_34791_34811 = state_34788__$1;
(statearr_34791_34811[(2)] = null);

(statearr_34791_34811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (4))){
var inst_34770 = (state_34788[(7)]);
var inst_34770__$1 = (state_34788[(2)]);
var inst_34771 = (inst_34770__$1 == null);
var state_34788__$1 = (function (){var statearr_34792 = state_34788;
(statearr_34792[(7)] = inst_34770__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34771)){
var statearr_34793_34812 = state_34788__$1;
(statearr_34793_34812[(1)] = (5));

} else {
var statearr_34794_34813 = state_34788__$1;
(statearr_34794_34813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (6))){
var inst_34770 = (state_34788[(7)]);
var inst_34775 = p.call(null,inst_34770);
var state_34788__$1 = state_34788;
if(cljs.core.truth_(inst_34775)){
var statearr_34795_34814 = state_34788__$1;
(statearr_34795_34814[(1)] = (8));

} else {
var statearr_34796_34815 = state_34788__$1;
(statearr_34796_34815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (3))){
var inst_34786 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34788__$1,inst_34786);
} else {
if((state_val_34789 === (2))){
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34788__$1,(4),ch);
} else {
if((state_val_34789 === (11))){
var inst_34778 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34797_34816 = state_34788__$1;
(statearr_34797_34816[(2)] = inst_34778);

(statearr_34797_34816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (9))){
var state_34788__$1 = state_34788;
var statearr_34798_34817 = state_34788__$1;
(statearr_34798_34817[(2)] = null);

(statearr_34798_34817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (5))){
var inst_34773 = cljs.core.async.close_BANG_.call(null,out);
var state_34788__$1 = state_34788;
var statearr_34799_34818 = state_34788__$1;
(statearr_34799_34818[(2)] = inst_34773);

(statearr_34799_34818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (10))){
var inst_34781 = (state_34788[(2)]);
var state_34788__$1 = (function (){var statearr_34800 = state_34788;
(statearr_34800[(8)] = inst_34781);

return statearr_34800;
})();
var statearr_34801_34819 = state_34788__$1;
(statearr_34801_34819[(2)] = null);

(statearr_34801_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (8))){
var inst_34770 = (state_34788[(7)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34788__$1,(11),out,inst_34770);
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
});})(c__19566__auto___34809,out))
;
return ((function (switch__19510__auto__,c__19566__auto___34809,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_34805 = [null,null,null,null,null,null,null,null,null];
(statearr_34805[(0)] = state_machine__19511__auto__);

(statearr_34805[(1)] = (1));

return statearr_34805;
});
var state_machine__19511__auto____1 = (function (state_34788){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e34806){if((e34806 instanceof Object)){
var ex__19514__auto__ = e34806;
var statearr_34807_34820 = state_34788;
(statearr_34807_34820[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34821 = state_34788;
state_34788 = G__34821;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34788){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___34809,out))
})();
var state__19568__auto__ = (function (){var statearr_34808 = f__19567__auto__.call(null);
(statearr_34808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___34809);

return statearr_34808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___34809,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__){
return (function (state_34987){
var state_val_34988 = (state_34987[(1)]);
if((state_val_34988 === (7))){
var inst_34983 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
var statearr_34989_35030 = state_34987__$1;
(statearr_34989_35030[(2)] = inst_34983);

(statearr_34989_35030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (20))){
var inst_34953 = (state_34987[(7)]);
var inst_34964 = (state_34987[(2)]);
var inst_34965 = cljs.core.next.call(null,inst_34953);
var inst_34939 = inst_34965;
var inst_34940 = null;
var inst_34941 = (0);
var inst_34942 = (0);
var state_34987__$1 = (function (){var statearr_34990 = state_34987;
(statearr_34990[(8)] = inst_34941);

(statearr_34990[(9)] = inst_34964);

(statearr_34990[(10)] = inst_34940);

(statearr_34990[(11)] = inst_34942);

(statearr_34990[(12)] = inst_34939);

return statearr_34990;
})();
var statearr_34991_35031 = state_34987__$1;
(statearr_34991_35031[(2)] = null);

(statearr_34991_35031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (1))){
var state_34987__$1 = state_34987;
var statearr_34992_35032 = state_34987__$1;
(statearr_34992_35032[(2)] = null);

(statearr_34992_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (4))){
var inst_34928 = (state_34987[(13)]);
var inst_34928__$1 = (state_34987[(2)]);
var inst_34929 = (inst_34928__$1 == null);
var state_34987__$1 = (function (){var statearr_34993 = state_34987;
(statearr_34993[(13)] = inst_34928__$1);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34929)){
var statearr_34994_35033 = state_34987__$1;
(statearr_34994_35033[(1)] = (5));

} else {
var statearr_34995_35034 = state_34987__$1;
(statearr_34995_35034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (15))){
var state_34987__$1 = state_34987;
var statearr_34999_35035 = state_34987__$1;
(statearr_34999_35035[(2)] = null);

(statearr_34999_35035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (21))){
var state_34987__$1 = state_34987;
var statearr_35000_35036 = state_34987__$1;
(statearr_35000_35036[(2)] = null);

(statearr_35000_35036[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (13))){
var inst_34941 = (state_34987[(8)]);
var inst_34940 = (state_34987[(10)]);
var inst_34942 = (state_34987[(11)]);
var inst_34939 = (state_34987[(12)]);
var inst_34949 = (state_34987[(2)]);
var inst_34950 = (inst_34942 + (1));
var tmp34996 = inst_34941;
var tmp34997 = inst_34940;
var tmp34998 = inst_34939;
var inst_34939__$1 = tmp34998;
var inst_34940__$1 = tmp34997;
var inst_34941__$1 = tmp34996;
var inst_34942__$1 = inst_34950;
var state_34987__$1 = (function (){var statearr_35001 = state_34987;
(statearr_35001[(8)] = inst_34941__$1);

(statearr_35001[(10)] = inst_34940__$1);

(statearr_35001[(11)] = inst_34942__$1);

(statearr_35001[(14)] = inst_34949);

(statearr_35001[(12)] = inst_34939__$1);

return statearr_35001;
})();
var statearr_35002_35037 = state_34987__$1;
(statearr_35002_35037[(2)] = null);

(statearr_35002_35037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (22))){
var state_34987__$1 = state_34987;
var statearr_35003_35038 = state_34987__$1;
(statearr_35003_35038[(2)] = null);

(statearr_35003_35038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (6))){
var inst_34928 = (state_34987[(13)]);
var inst_34937 = f.call(null,inst_34928);
var inst_34938 = cljs.core.seq.call(null,inst_34937);
var inst_34939 = inst_34938;
var inst_34940 = null;
var inst_34941 = (0);
var inst_34942 = (0);
var state_34987__$1 = (function (){var statearr_35004 = state_34987;
(statearr_35004[(8)] = inst_34941);

(statearr_35004[(10)] = inst_34940);

(statearr_35004[(11)] = inst_34942);

(statearr_35004[(12)] = inst_34939);

return statearr_35004;
})();
var statearr_35005_35039 = state_34987__$1;
(statearr_35005_35039[(2)] = null);

(statearr_35005_35039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (17))){
var inst_34953 = (state_34987[(7)]);
var inst_34957 = cljs.core.chunk_first.call(null,inst_34953);
var inst_34958 = cljs.core.chunk_rest.call(null,inst_34953);
var inst_34959 = cljs.core.count.call(null,inst_34957);
var inst_34939 = inst_34958;
var inst_34940 = inst_34957;
var inst_34941 = inst_34959;
var inst_34942 = (0);
var state_34987__$1 = (function (){var statearr_35006 = state_34987;
(statearr_35006[(8)] = inst_34941);

(statearr_35006[(10)] = inst_34940);

(statearr_35006[(11)] = inst_34942);

(statearr_35006[(12)] = inst_34939);

return statearr_35006;
})();
var statearr_35007_35040 = state_34987__$1;
(statearr_35007_35040[(2)] = null);

(statearr_35007_35040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (3))){
var inst_34985 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34987__$1,inst_34985);
} else {
if((state_val_34988 === (12))){
var inst_34973 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
var statearr_35008_35041 = state_34987__$1;
(statearr_35008_35041[(2)] = inst_34973);

(statearr_35008_35041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (2))){
var state_34987__$1 = state_34987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34987__$1,(4),in$);
} else {
if((state_val_34988 === (23))){
var inst_34981 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
var statearr_35009_35042 = state_34987__$1;
(statearr_35009_35042[(2)] = inst_34981);

(statearr_35009_35042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (19))){
var inst_34968 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
var statearr_35010_35043 = state_34987__$1;
(statearr_35010_35043[(2)] = inst_34968);

(statearr_35010_35043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (11))){
var inst_34953 = (state_34987[(7)]);
var inst_34939 = (state_34987[(12)]);
var inst_34953__$1 = cljs.core.seq.call(null,inst_34939);
var state_34987__$1 = (function (){var statearr_35011 = state_34987;
(statearr_35011[(7)] = inst_34953__$1);

return statearr_35011;
})();
if(inst_34953__$1){
var statearr_35012_35044 = state_34987__$1;
(statearr_35012_35044[(1)] = (14));

} else {
var statearr_35013_35045 = state_34987__$1;
(statearr_35013_35045[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (9))){
var inst_34975 = (state_34987[(2)]);
var inst_34976 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34987__$1 = (function (){var statearr_35014 = state_34987;
(statearr_35014[(15)] = inst_34975);

return statearr_35014;
})();
if(cljs.core.truth_(inst_34976)){
var statearr_35015_35046 = state_34987__$1;
(statearr_35015_35046[(1)] = (21));

} else {
var statearr_35016_35047 = state_34987__$1;
(statearr_35016_35047[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (5))){
var inst_34931 = cljs.core.async.close_BANG_.call(null,out);
var state_34987__$1 = state_34987;
var statearr_35017_35048 = state_34987__$1;
(statearr_35017_35048[(2)] = inst_34931);

(statearr_35017_35048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (14))){
var inst_34953 = (state_34987[(7)]);
var inst_34955 = cljs.core.chunked_seq_QMARK_.call(null,inst_34953);
var state_34987__$1 = state_34987;
if(inst_34955){
var statearr_35018_35049 = state_34987__$1;
(statearr_35018_35049[(1)] = (17));

} else {
var statearr_35019_35050 = state_34987__$1;
(statearr_35019_35050[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (16))){
var inst_34971 = (state_34987[(2)]);
var state_34987__$1 = state_34987;
var statearr_35020_35051 = state_34987__$1;
(statearr_35020_35051[(2)] = inst_34971);

(statearr_35020_35051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34988 === (10))){
var inst_34940 = (state_34987[(10)]);
var inst_34942 = (state_34987[(11)]);
var inst_34947 = cljs.core._nth.call(null,inst_34940,inst_34942);
var state_34987__$1 = state_34987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34987__$1,(13),out,inst_34947);
} else {
if((state_val_34988 === (18))){
var inst_34953 = (state_34987[(7)]);
var inst_34962 = cljs.core.first.call(null,inst_34953);
var state_34987__$1 = state_34987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34987__$1,(20),out,inst_34962);
} else {
if((state_val_34988 === (8))){
var inst_34941 = (state_34987[(8)]);
var inst_34942 = (state_34987[(11)]);
var inst_34944 = (inst_34942 < inst_34941);
var inst_34945 = inst_34944;
var state_34987__$1 = state_34987;
if(cljs.core.truth_(inst_34945)){
var statearr_35021_35052 = state_34987__$1;
(statearr_35021_35052[(1)] = (10));

} else {
var statearr_35022_35053 = state_34987__$1;
(statearr_35022_35053[(1)] = (11));

}

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
});})(c__19566__auto__))
;
return ((function (switch__19510__auto__,c__19566__auto__){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_35026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35026[(0)] = state_machine__19511__auto__);

(statearr_35026[(1)] = (1));

return statearr_35026;
});
var state_machine__19511__auto____1 = (function (state_34987){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_34987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e35027){if((e35027 instanceof Object)){
var ex__19514__auto__ = e35027;
var statearr_35028_35054 = state_34987;
(statearr_35028_35054[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35055 = state_34987;
state_34987 = G__35055;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_34987){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_34987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__))
})();
var state__19568__auto__ = (function (){var statearr_35029 = f__19567__auto__.call(null);
(statearr_35029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_35029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__))
);

return c__19566__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___35152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___35152,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___35152,out){
return (function (state_35127){
var state_val_35128 = (state_35127[(1)]);
if((state_val_35128 === (7))){
var inst_35122 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35129_35153 = state_35127__$1;
(statearr_35129_35153[(2)] = inst_35122);

(statearr_35129_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (1))){
var inst_35104 = null;
var state_35127__$1 = (function (){var statearr_35130 = state_35127;
(statearr_35130[(7)] = inst_35104);

return statearr_35130;
})();
var statearr_35131_35154 = state_35127__$1;
(statearr_35131_35154[(2)] = null);

(statearr_35131_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (4))){
var inst_35107 = (state_35127[(8)]);
var inst_35107__$1 = (state_35127[(2)]);
var inst_35108 = (inst_35107__$1 == null);
var inst_35109 = cljs.core.not.call(null,inst_35108);
var state_35127__$1 = (function (){var statearr_35132 = state_35127;
(statearr_35132[(8)] = inst_35107__$1);

return statearr_35132;
})();
if(inst_35109){
var statearr_35133_35155 = state_35127__$1;
(statearr_35133_35155[(1)] = (5));

} else {
var statearr_35134_35156 = state_35127__$1;
(statearr_35134_35156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (6))){
var state_35127__$1 = state_35127;
var statearr_35135_35157 = state_35127__$1;
(statearr_35135_35157[(2)] = null);

(statearr_35135_35157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (3))){
var inst_35124 = (state_35127[(2)]);
var inst_35125 = cljs.core.async.close_BANG_.call(null,out);
var state_35127__$1 = (function (){var statearr_35136 = state_35127;
(statearr_35136[(9)] = inst_35124);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35127__$1,inst_35125);
} else {
if((state_val_35128 === (2))){
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35127__$1,(4),ch);
} else {
if((state_val_35128 === (11))){
var inst_35107 = (state_35127[(8)]);
var inst_35116 = (state_35127[(2)]);
var inst_35104 = inst_35107;
var state_35127__$1 = (function (){var statearr_35137 = state_35127;
(statearr_35137[(7)] = inst_35104);

(statearr_35137[(10)] = inst_35116);

return statearr_35137;
})();
var statearr_35138_35158 = state_35127__$1;
(statearr_35138_35158[(2)] = null);

(statearr_35138_35158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (9))){
var inst_35107 = (state_35127[(8)]);
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35127__$1,(11),out,inst_35107);
} else {
if((state_val_35128 === (5))){
var inst_35107 = (state_35127[(8)]);
var inst_35104 = (state_35127[(7)]);
var inst_35111 = cljs.core._EQ_.call(null,inst_35107,inst_35104);
var state_35127__$1 = state_35127;
if(inst_35111){
var statearr_35140_35159 = state_35127__$1;
(statearr_35140_35159[(1)] = (8));

} else {
var statearr_35141_35160 = state_35127__$1;
(statearr_35141_35160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (10))){
var inst_35119 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35142_35161 = state_35127__$1;
(statearr_35142_35161[(2)] = inst_35119);

(statearr_35142_35161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (8))){
var inst_35104 = (state_35127[(7)]);
var tmp35139 = inst_35104;
var inst_35104__$1 = tmp35139;
var state_35127__$1 = (function (){var statearr_35143 = state_35127;
(statearr_35143[(7)] = inst_35104__$1);

return statearr_35143;
})();
var statearr_35144_35162 = state_35127__$1;
(statearr_35144_35162[(2)] = null);

(statearr_35144_35162[(1)] = (2));


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
});})(c__19566__auto___35152,out))
;
return ((function (switch__19510__auto__,c__19566__auto___35152,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_35148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35148[(0)] = state_machine__19511__auto__);

(statearr_35148[(1)] = (1));

return statearr_35148;
});
var state_machine__19511__auto____1 = (function (state_35127){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_35127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e35149){if((e35149 instanceof Object)){
var ex__19514__auto__ = e35149;
var statearr_35150_35163 = state_35127;
(statearr_35150_35163[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35164 = state_35127;
state_35127 = G__35164;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_35127){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_35127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___35152,out))
})();
var state__19568__auto__ = (function (){var statearr_35151 = f__19567__auto__.call(null);
(statearr_35151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___35152);

return statearr_35151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___35152,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___35299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___35299,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___35299,out){
return (function (state_35269){
var state_val_35270 = (state_35269[(1)]);
if((state_val_35270 === (7))){
var inst_35265 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
var statearr_35271_35300 = state_35269__$1;
(statearr_35271_35300[(2)] = inst_35265);

(statearr_35271_35300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (1))){
var inst_35232 = (new Array(n));
var inst_35233 = inst_35232;
var inst_35234 = (0);
var state_35269__$1 = (function (){var statearr_35272 = state_35269;
(statearr_35272[(7)] = inst_35233);

(statearr_35272[(8)] = inst_35234);

return statearr_35272;
})();
var statearr_35273_35301 = state_35269__$1;
(statearr_35273_35301[(2)] = null);

(statearr_35273_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (4))){
var inst_35237 = (state_35269[(9)]);
var inst_35237__$1 = (state_35269[(2)]);
var inst_35238 = (inst_35237__$1 == null);
var inst_35239 = cljs.core.not.call(null,inst_35238);
var state_35269__$1 = (function (){var statearr_35274 = state_35269;
(statearr_35274[(9)] = inst_35237__$1);

return statearr_35274;
})();
if(inst_35239){
var statearr_35275_35302 = state_35269__$1;
(statearr_35275_35302[(1)] = (5));

} else {
var statearr_35276_35303 = state_35269__$1;
(statearr_35276_35303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (15))){
var inst_35259 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
var statearr_35277_35304 = state_35269__$1;
(statearr_35277_35304[(2)] = inst_35259);

(statearr_35277_35304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (13))){
var state_35269__$1 = state_35269;
var statearr_35278_35305 = state_35269__$1;
(statearr_35278_35305[(2)] = null);

(statearr_35278_35305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (6))){
var inst_35234 = (state_35269[(8)]);
var inst_35255 = (inst_35234 > (0));
var state_35269__$1 = state_35269;
if(cljs.core.truth_(inst_35255)){
var statearr_35279_35306 = state_35269__$1;
(statearr_35279_35306[(1)] = (12));

} else {
var statearr_35280_35307 = state_35269__$1;
(statearr_35280_35307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (3))){
var inst_35267 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35269__$1,inst_35267);
} else {
if((state_val_35270 === (12))){
var inst_35233 = (state_35269[(7)]);
var inst_35257 = cljs.core.vec.call(null,inst_35233);
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35269__$1,(15),out,inst_35257);
} else {
if((state_val_35270 === (2))){
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35269__$1,(4),ch);
} else {
if((state_val_35270 === (11))){
var inst_35249 = (state_35269[(2)]);
var inst_35250 = (new Array(n));
var inst_35233 = inst_35250;
var inst_35234 = (0);
var state_35269__$1 = (function (){var statearr_35281 = state_35269;
(statearr_35281[(10)] = inst_35249);

(statearr_35281[(7)] = inst_35233);

(statearr_35281[(8)] = inst_35234);

return statearr_35281;
})();
var statearr_35282_35308 = state_35269__$1;
(statearr_35282_35308[(2)] = null);

(statearr_35282_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (9))){
var inst_35233 = (state_35269[(7)]);
var inst_35247 = cljs.core.vec.call(null,inst_35233);
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35269__$1,(11),out,inst_35247);
} else {
if((state_val_35270 === (5))){
var inst_35242 = (state_35269[(11)]);
var inst_35237 = (state_35269[(9)]);
var inst_35233 = (state_35269[(7)]);
var inst_35234 = (state_35269[(8)]);
var inst_35241 = (inst_35233[inst_35234] = inst_35237);
var inst_35242__$1 = (inst_35234 + (1));
var inst_35243 = (inst_35242__$1 < n);
var state_35269__$1 = (function (){var statearr_35283 = state_35269;
(statearr_35283[(12)] = inst_35241);

(statearr_35283[(11)] = inst_35242__$1);

return statearr_35283;
})();
if(cljs.core.truth_(inst_35243)){
var statearr_35284_35309 = state_35269__$1;
(statearr_35284_35309[(1)] = (8));

} else {
var statearr_35285_35310 = state_35269__$1;
(statearr_35285_35310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (14))){
var inst_35262 = (state_35269[(2)]);
var inst_35263 = cljs.core.async.close_BANG_.call(null,out);
var state_35269__$1 = (function (){var statearr_35287 = state_35269;
(statearr_35287[(13)] = inst_35262);

return statearr_35287;
})();
var statearr_35288_35311 = state_35269__$1;
(statearr_35288_35311[(2)] = inst_35263);

(statearr_35288_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (10))){
var inst_35253 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
var statearr_35289_35312 = state_35269__$1;
(statearr_35289_35312[(2)] = inst_35253);

(statearr_35289_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (8))){
var inst_35242 = (state_35269[(11)]);
var inst_35233 = (state_35269[(7)]);
var tmp35286 = inst_35233;
var inst_35233__$1 = tmp35286;
var inst_35234 = inst_35242;
var state_35269__$1 = (function (){var statearr_35290 = state_35269;
(statearr_35290[(7)] = inst_35233__$1);

(statearr_35290[(8)] = inst_35234);

return statearr_35290;
})();
var statearr_35291_35313 = state_35269__$1;
(statearr_35291_35313[(2)] = null);

(statearr_35291_35313[(1)] = (2));


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
});})(c__19566__auto___35299,out))
;
return ((function (switch__19510__auto__,c__19566__auto___35299,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_35295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35295[(0)] = state_machine__19511__auto__);

(statearr_35295[(1)] = (1));

return statearr_35295;
});
var state_machine__19511__auto____1 = (function (state_35269){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_35269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e35296){if((e35296 instanceof Object)){
var ex__19514__auto__ = e35296;
var statearr_35297_35314 = state_35269;
(statearr_35297_35314[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35315 = state_35269;
state_35269 = G__35315;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_35269){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_35269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___35299,out))
})();
var state__19568__auto__ = (function (){var statearr_35298 = f__19567__auto__.call(null);
(statearr_35298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___35299);

return statearr_35298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___35299,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19566__auto___35458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___35458,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___35458,out){
return (function (state_35428){
var state_val_35429 = (state_35428[(1)]);
if((state_val_35429 === (7))){
var inst_35424 = (state_35428[(2)]);
var state_35428__$1 = state_35428;
var statearr_35430_35459 = state_35428__$1;
(statearr_35430_35459[(2)] = inst_35424);

(statearr_35430_35459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (1))){
var inst_35387 = [];
var inst_35388 = inst_35387;
var inst_35389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35428__$1 = (function (){var statearr_35431 = state_35428;
(statearr_35431[(7)] = inst_35389);

(statearr_35431[(8)] = inst_35388);

return statearr_35431;
})();
var statearr_35432_35460 = state_35428__$1;
(statearr_35432_35460[(2)] = null);

(statearr_35432_35460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (4))){
var inst_35392 = (state_35428[(9)]);
var inst_35392__$1 = (state_35428[(2)]);
var inst_35393 = (inst_35392__$1 == null);
var inst_35394 = cljs.core.not.call(null,inst_35393);
var state_35428__$1 = (function (){var statearr_35433 = state_35428;
(statearr_35433[(9)] = inst_35392__$1);

return statearr_35433;
})();
if(inst_35394){
var statearr_35434_35461 = state_35428__$1;
(statearr_35434_35461[(1)] = (5));

} else {
var statearr_35435_35462 = state_35428__$1;
(statearr_35435_35462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (15))){
var inst_35418 = (state_35428[(2)]);
var state_35428__$1 = state_35428;
var statearr_35436_35463 = state_35428__$1;
(statearr_35436_35463[(2)] = inst_35418);

(statearr_35436_35463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (13))){
var state_35428__$1 = state_35428;
var statearr_35437_35464 = state_35428__$1;
(statearr_35437_35464[(2)] = null);

(statearr_35437_35464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (6))){
var inst_35388 = (state_35428[(8)]);
var inst_35413 = inst_35388.length;
var inst_35414 = (inst_35413 > (0));
var state_35428__$1 = state_35428;
if(cljs.core.truth_(inst_35414)){
var statearr_35438_35465 = state_35428__$1;
(statearr_35438_35465[(1)] = (12));

} else {
var statearr_35439_35466 = state_35428__$1;
(statearr_35439_35466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (3))){
var inst_35426 = (state_35428[(2)]);
var state_35428__$1 = state_35428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35428__$1,inst_35426);
} else {
if((state_val_35429 === (12))){
var inst_35388 = (state_35428[(8)]);
var inst_35416 = cljs.core.vec.call(null,inst_35388);
var state_35428__$1 = state_35428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35428__$1,(15),out,inst_35416);
} else {
if((state_val_35429 === (2))){
var state_35428__$1 = state_35428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35428__$1,(4),ch);
} else {
if((state_val_35429 === (11))){
var inst_35396 = (state_35428[(10)]);
var inst_35392 = (state_35428[(9)]);
var inst_35406 = (state_35428[(2)]);
var inst_35407 = [];
var inst_35408 = inst_35407.push(inst_35392);
var inst_35388 = inst_35407;
var inst_35389 = inst_35396;
var state_35428__$1 = (function (){var statearr_35440 = state_35428;
(statearr_35440[(11)] = inst_35408);

(statearr_35440[(7)] = inst_35389);

(statearr_35440[(8)] = inst_35388);

(statearr_35440[(12)] = inst_35406);

return statearr_35440;
})();
var statearr_35441_35467 = state_35428__$1;
(statearr_35441_35467[(2)] = null);

(statearr_35441_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (9))){
var inst_35388 = (state_35428[(8)]);
var inst_35404 = cljs.core.vec.call(null,inst_35388);
var state_35428__$1 = state_35428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35428__$1,(11),out,inst_35404);
} else {
if((state_val_35429 === (5))){
var inst_35396 = (state_35428[(10)]);
var inst_35389 = (state_35428[(7)]);
var inst_35392 = (state_35428[(9)]);
var inst_35396__$1 = f.call(null,inst_35392);
var inst_35397 = cljs.core._EQ_.call(null,inst_35396__$1,inst_35389);
var inst_35398 = cljs.core.keyword_identical_QMARK_.call(null,inst_35389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35399 = (inst_35397) || (inst_35398);
var state_35428__$1 = (function (){var statearr_35442 = state_35428;
(statearr_35442[(10)] = inst_35396__$1);

return statearr_35442;
})();
if(cljs.core.truth_(inst_35399)){
var statearr_35443_35468 = state_35428__$1;
(statearr_35443_35468[(1)] = (8));

} else {
var statearr_35444_35469 = state_35428__$1;
(statearr_35444_35469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (14))){
var inst_35421 = (state_35428[(2)]);
var inst_35422 = cljs.core.async.close_BANG_.call(null,out);
var state_35428__$1 = (function (){var statearr_35446 = state_35428;
(statearr_35446[(13)] = inst_35421);

return statearr_35446;
})();
var statearr_35447_35470 = state_35428__$1;
(statearr_35447_35470[(2)] = inst_35422);

(statearr_35447_35470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (10))){
var inst_35411 = (state_35428[(2)]);
var state_35428__$1 = state_35428;
var statearr_35448_35471 = state_35428__$1;
(statearr_35448_35471[(2)] = inst_35411);

(statearr_35448_35471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35429 === (8))){
var inst_35396 = (state_35428[(10)]);
var inst_35388 = (state_35428[(8)]);
var inst_35392 = (state_35428[(9)]);
var inst_35401 = inst_35388.push(inst_35392);
var tmp35445 = inst_35388;
var inst_35388__$1 = tmp35445;
var inst_35389 = inst_35396;
var state_35428__$1 = (function (){var statearr_35449 = state_35428;
(statearr_35449[(14)] = inst_35401);

(statearr_35449[(7)] = inst_35389);

(statearr_35449[(8)] = inst_35388__$1);

return statearr_35449;
})();
var statearr_35450_35472 = state_35428__$1;
(statearr_35450_35472[(2)] = null);

(statearr_35450_35472[(1)] = (2));


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
});})(c__19566__auto___35458,out))
;
return ((function (switch__19510__auto__,c__19566__auto___35458,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_35454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35454[(0)] = state_machine__19511__auto__);

(statearr_35454[(1)] = (1));

return statearr_35454;
});
var state_machine__19511__auto____1 = (function (state_35428){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_35428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e35455){if((e35455 instanceof Object)){
var ex__19514__auto__ = e35455;
var statearr_35456_35473 = state_35428;
(statearr_35456_35473[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35474 = state_35428;
state_35428 = G__35474;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_35428){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_35428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___35458,out))
})();
var state__19568__auto__ = (function (){var statearr_35457 = f__19567__auto__.call(null);
(statearr_35457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___35458);

return statearr_35457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___35458,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1429499341675