// Compiled by ClojureScript 0.0-2850 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.core.async');

chord.format.ChordFormatter = (function (){var obj20943 = {};
return obj20943;
})();

chord.format.freeze = (function freeze(_,obj){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.chord$format$ChordFormatter$freeze$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (chord.format.freeze[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (chord.format.freeze["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
})().call(null,_,obj);
}
});

chord.format.thaw = (function thaw(_,s){
if((function (){var and__16117__auto__ = _;
if(and__16117__auto__){
return _.chord$format$ChordFormatter$thaw$arity$2;
} else {
return and__16117__auto__;
}
})()){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__16773__auto__ = (((_ == null))?null:_);
return (function (){var or__16129__auto__ = (chord.format.thaw[goog.typeOf(x__16773__auto__)]);
if(or__16129__auto__){
return or__16129__auto__;
} else {
var or__16129__auto____$1 = (chord.format.thaw["_"]);
if(or__16129__auto____$1){
return or__16129__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
})().call(null,_,s);
}
});

chord.format.formatter_STAR_ = (function (){var method_table__17026__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17030__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17030__auto__,method_table__17026__auto__,prefer_table__17027__auto__,method_cache__17028__auto__,cached_hierarchy__17029__auto__));
})();
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t20944 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t20944 = (function (_,meta20945){
this._ = _;
this.meta20945 = meta20945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t20944.prototype.chord$format$ChordFormatter$ = true;

chord.format.t20944.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t20944.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t20944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20946){
var self__ = this;
var _20946__$1 = this;
return self__.meta20945;
});

chord.format.t20944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20946,meta20945__$1){
var self__ = this;
var _20946__$1 = this;
return (new chord.format.t20944(self__._,meta20945__$1));
});

chord.format.t20944.cljs$lang$type = true;

chord.format.t20944.cljs$lang$ctorStr = "chord.format/t20944";

chord.format.t20944.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.format/t20944");
});

chord.format.__GT_t20944 = (function __GT_t20944(___$1,meta20945){
return (new chord.format.t20944(___$1,meta20945));
});

}

return (new chord.format.t20944(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t20947 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t20947 = (function (_,meta20948){
this._ = _;
this.meta20948 = meta20948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t20947.prototype.chord$format$ChordFormatter$ = true;

chord.format.t20947.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t20947.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t20947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20949){
var self__ = this;
var _20949__$1 = this;
return self__.meta20948;
});

chord.format.t20947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20949,meta20948__$1){
var self__ = this;
var _20949__$1 = this;
return (new chord.format.t20947(self__._,meta20948__$1));
});

chord.format.t20947.cljs$lang$type = true;

chord.format.t20947.cljs$lang$ctorStr = "chord.format/t20947";

chord.format.t20947.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.format/t20947");
});

chord.format.__GT_t20947 = (function __GT_t20947(___$1,meta20948){
return (new chord.format.t20947(___$1,meta20948));
});

}

return (new chord.format.t20947(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t20950 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t20950 = (function (json_formatter,opts,meta20951){
this.json_formatter = json_formatter;
this.opts = opts;
this.meta20951 = meta20951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t20950.prototype.chord$format$ChordFormatter$ = true;

chord.format.t20950.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t20950.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t20950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_20952){
var self__ = this;
var _20952__$1 = this;
return self__.meta20951;
});})(json_formatter))
;

chord.format.t20950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_20952,meta20951__$1){
var self__ = this;
var _20952__$1 = this;
return (new chord.format.t20950(self__.json_formatter,self__.opts,meta20951__$1));
});})(json_formatter))
;

chord.format.t20950.cljs$lang$type = true;

chord.format.t20950.cljs$lang$ctorStr = "chord.format/t20950";

chord.format.t20950.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.format/t20950");
});})(json_formatter))
;

chord.format.__GT_t20950 = ((function (json_formatter){
return (function __GT_t20950(json_formatter__$1,opts__$1,meta20951){
return (new chord.format.t20950(json_formatter__$1,opts__$1,meta20951));
});})(json_formatter))
;

}

return (new chord.format.t20950(json_formatter,opts,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t20953 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t20953 = (function (_,meta20954){
this._ = _;
this.meta20954 = meta20954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t20953.prototype.chord$format$ChordFormatter$ = true;

chord.format.t20953.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t20953.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t20953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20955){
var self__ = this;
var _20955__$1 = this;
return self__.meta20954;
});

chord.format.t20953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20955,meta20954__$1){
var self__ = this;
var _20955__$1 = this;
return (new chord.format.t20953(self__._,meta20954__$1));
});

chord.format.t20953.cljs$lang$type = true;

chord.format.t20953.cljs$lang$ctorStr = "chord.format/t20953";

chord.format.t20953.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.format/t20953");
});

chord.format.__GT_t20953 = (function __GT_t20953(___$1,meta20954){
return (new chord.format.t20953(___$1,meta20954));
});

}

return (new chord.format.t20953(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t20956 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t20956 = (function (_,meta20957){
this._ = _;
this.meta20957 = meta20957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t20956.prototype.chord$format$ChordFormatter$ = true;

chord.format.t20956.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t20956.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t20956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20958){
var self__ = this;
var _20958__$1 = this;
return self__.meta20957;
});

chord.format.t20956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20958,meta20957__$1){
var self__ = this;
var _20958__$1 = this;
return (new chord.format.t20956(self__._,meta20957__$1));
});

chord.format.t20956.cljs$lang$type = true;

chord.format.t20956.cljs$lang$ctorStr = "chord.format/t20956";

chord.format.t20956.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"chord.format/t20956");
});

chord.format.__GT_t20956 = (function __GT_t20956(___$1,meta20957){
return (new chord.format.t20956(___$1,meta20957));
});

}

return (new chord.format.t20956(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function wrap_format(p__20960,p__20961){
var map__20967 = p__20960;
var map__20967__$1 = ((cljs.core.seq_QMARK_.call(null,map__20967))?cljs.core.apply.call(null,cljs.core.hash_map,map__20967):map__20967);
var write_ch = cljs.core.get.call(null,map__20967__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch = cljs.core.get.call(null,map__20967__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var map__20968 = p__20961;
var map__20968__$1 = ((cljs.core.seq_QMARK_.call(null,map__20968))?cljs.core.apply.call(null,cljs.core.hash_map,map__20968):map__20968);
var opts = map__20968__$1;
var format = cljs.core.get.call(null,map__20968__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__20967,map__20967__$1,write_ch,read_ch,map__20968,map__20968__$1,opts,format){
return (function (p__20969){
var map__20970 = p__20969;
var map__20970__$1 = ((cljs.core.seq_QMARK_.call(null,map__20970))?cljs.core.apply.call(null,cljs.core.hash_map,map__20970):map__20970);
var message = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
}catch (e20971){if((e20971 instanceof Error)){
var e = e20971;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e20971;

}
}});})(fmtr,map__20967,map__20967__$1,write_ch,read_ch,map__20968,map__20968__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__20967,map__20967__$1,write_ch,read_ch,map__20968,map__20968__$1,opts,format){
return (function (p1__20959_SHARP_){
return chord.format.freeze.call(null,fmtr,p1__20959_SHARP_);
});})(fmtr,map__20967,map__20967__$1,write_ch,read_ch,map__20968,map__20968__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1442373573768