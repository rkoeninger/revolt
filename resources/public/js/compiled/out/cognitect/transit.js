// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__20988_20992 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20989_20993 = null;
var count__20990_20994 = (0);
var i__20991_20995 = (0);
while(true){
if((i__20991_20995 < count__20990_20994)){
var k_20996 = cljs.core._nth.call(null,chunk__20989_20993,i__20991_20995);
var v_20997 = (b[k_20996]);
(a[k_20996] = v_20997);

var G__20998 = seq__20988_20992;
var G__20999 = chunk__20989_20993;
var G__21000 = count__20990_20994;
var G__21001 = (i__20991_20995 + (1));
seq__20988_20992 = G__20998;
chunk__20989_20993 = G__20999;
count__20990_20994 = G__21000;
i__20991_20995 = G__21001;
continue;
} else {
var temp__4126__auto___21002 = cljs.core.seq.call(null,seq__20988_20992);
if(temp__4126__auto___21002){
var seq__20988_21003__$1 = temp__4126__auto___21002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20988_21003__$1)){
var c__16916__auto___21004 = cljs.core.chunk_first.call(null,seq__20988_21003__$1);
var G__21005 = cljs.core.chunk_rest.call(null,seq__20988_21003__$1);
var G__21006 = c__16916__auto___21004;
var G__21007 = cljs.core.count.call(null,c__16916__auto___21004);
var G__21008 = (0);
seq__20988_20992 = G__21005;
chunk__20989_20993 = G__21006;
count__20990_20994 = G__21007;
i__20991_20995 = G__21008;
continue;
} else {
var k_21009 = cljs.core.first.call(null,seq__20988_21003__$1);
var v_21010 = (b[k_21009]);
(a[k_21009] = v_21010);

var G__21011 = cljs.core.next.call(null,seq__20988_21003__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20988_20992 = G__21011;
chunk__20989_20993 = G__21012;
count__20990_20994 = G__21013;
i__20991_20995 = G__21014;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21015 = (i + (2));
var G__21016 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21015;
ret = G__21016;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21017_21021 = cljs.core.seq.call(null,v);
var chunk__21018_21022 = null;
var count__21019_21023 = (0);
var i__21020_21024 = (0);
while(true){
if((i__21020_21024 < count__21019_21023)){
var x_21025 = cljs.core._nth.call(null,chunk__21018_21022,i__21020_21024);
ret.push(x_21025);

var G__21026 = seq__21017_21021;
var G__21027 = chunk__21018_21022;
var G__21028 = count__21019_21023;
var G__21029 = (i__21020_21024 + (1));
seq__21017_21021 = G__21026;
chunk__21018_21022 = G__21027;
count__21019_21023 = G__21028;
i__21020_21024 = G__21029;
continue;
} else {
var temp__4126__auto___21030 = cljs.core.seq.call(null,seq__21017_21021);
if(temp__4126__auto___21030){
var seq__21017_21031__$1 = temp__4126__auto___21030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21017_21031__$1)){
var c__16916__auto___21032 = cljs.core.chunk_first.call(null,seq__21017_21031__$1);
var G__21033 = cljs.core.chunk_rest.call(null,seq__21017_21031__$1);
var G__21034 = c__16916__auto___21032;
var G__21035 = cljs.core.count.call(null,c__16916__auto___21032);
var G__21036 = (0);
seq__21017_21021 = G__21033;
chunk__21018_21022 = G__21034;
count__21019_21023 = G__21035;
i__21020_21024 = G__21036;
continue;
} else {
var x_21037 = cljs.core.first.call(null,seq__21017_21031__$1);
ret.push(x_21037);

var G__21038 = cljs.core.next.call(null,seq__21017_21031__$1);
var G__21039 = null;
var G__21040 = (0);
var G__21041 = (0);
seq__21017_21021 = G__21038;
chunk__21018_21022 = G__21039;
count__21019_21023 = G__21040;
i__21020_21024 = G__21041;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21042_21046 = cljs.core.seq.call(null,v);
var chunk__21043_21047 = null;
var count__21044_21048 = (0);
var i__21045_21049 = (0);
while(true){
if((i__21045_21049 < count__21044_21048)){
var x_21050 = cljs.core._nth.call(null,chunk__21043_21047,i__21045_21049);
ret.push(x_21050);

var G__21051 = seq__21042_21046;
var G__21052 = chunk__21043_21047;
var G__21053 = count__21044_21048;
var G__21054 = (i__21045_21049 + (1));
seq__21042_21046 = G__21051;
chunk__21043_21047 = G__21052;
count__21044_21048 = G__21053;
i__21045_21049 = G__21054;
continue;
} else {
var temp__4126__auto___21055 = cljs.core.seq.call(null,seq__21042_21046);
if(temp__4126__auto___21055){
var seq__21042_21056__$1 = temp__4126__auto___21055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21042_21056__$1)){
var c__16916__auto___21057 = cljs.core.chunk_first.call(null,seq__21042_21056__$1);
var G__21058 = cljs.core.chunk_rest.call(null,seq__21042_21056__$1);
var G__21059 = c__16916__auto___21057;
var G__21060 = cljs.core.count.call(null,c__16916__auto___21057);
var G__21061 = (0);
seq__21042_21046 = G__21058;
chunk__21043_21047 = G__21059;
count__21044_21048 = G__21060;
i__21045_21049 = G__21061;
continue;
} else {
var x_21062 = cljs.core.first.call(null,seq__21042_21056__$1);
ret.push(x_21062);

var G__21063 = cljs.core.next.call(null,seq__21042_21056__$1);
var G__21064 = null;
var G__21065 = (0);
var G__21066 = (0);
seq__21042_21046 = G__21063;
chunk__21043_21047 = G__21064;
count__21044_21048 = G__21065;
i__21045_21049 = G__21066;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21067_21071 = cljs.core.seq.call(null,v);
var chunk__21068_21072 = null;
var count__21069_21073 = (0);
var i__21070_21074 = (0);
while(true){
if((i__21070_21074 < count__21069_21073)){
var x_21075 = cljs.core._nth.call(null,chunk__21068_21072,i__21070_21074);
ret.push(x_21075);

var G__21076 = seq__21067_21071;
var G__21077 = chunk__21068_21072;
var G__21078 = count__21069_21073;
var G__21079 = (i__21070_21074 + (1));
seq__21067_21071 = G__21076;
chunk__21068_21072 = G__21077;
count__21069_21073 = G__21078;
i__21070_21074 = G__21079;
continue;
} else {
var temp__4126__auto___21080 = cljs.core.seq.call(null,seq__21067_21071);
if(temp__4126__auto___21080){
var seq__21067_21081__$1 = temp__4126__auto___21080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21067_21081__$1)){
var c__16916__auto___21082 = cljs.core.chunk_first.call(null,seq__21067_21081__$1);
var G__21083 = cljs.core.chunk_rest.call(null,seq__21067_21081__$1);
var G__21084 = c__16916__auto___21082;
var G__21085 = cljs.core.count.call(null,c__16916__auto___21082);
var G__21086 = (0);
seq__21067_21071 = G__21083;
chunk__21068_21072 = G__21084;
count__21069_21073 = G__21085;
i__21070_21074 = G__21086;
continue;
} else {
var x_21087 = cljs.core.first.call(null,seq__21067_21081__$1);
ret.push(x_21087);

var G__21088 = cljs.core.next.call(null,seq__21067_21081__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__21067_21071 = G__21088;
chunk__21068_21072 = G__21089;
count__21069_21073 = G__21090;
i__21070_21074 = G__21091;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21101 = cljs.core.clone.call(null,handlers);
x21101.forEach = ((function (x21101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21102 = cljs.core.seq.call(null,coll);
var chunk__21103 = null;
var count__21104 = (0);
var i__21105 = (0);
while(true){
if((i__21105 < count__21104)){
var vec__21106 = cljs.core._nth.call(null,chunk__21103,i__21105);
var k = cljs.core.nth.call(null,vec__21106,(0),null);
var v = cljs.core.nth.call(null,vec__21106,(1),null);
f.call(null,v,k);

var G__21108 = seq__21102;
var G__21109 = chunk__21103;
var G__21110 = count__21104;
var G__21111 = (i__21105 + (1));
seq__21102 = G__21108;
chunk__21103 = G__21109;
count__21104 = G__21110;
i__21105 = G__21111;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21102);
if(temp__4126__auto__){
var seq__21102__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21102__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__21102__$1);
var G__21112 = cljs.core.chunk_rest.call(null,seq__21102__$1);
var G__21113 = c__16916__auto__;
var G__21114 = cljs.core.count.call(null,c__16916__auto__);
var G__21115 = (0);
seq__21102 = G__21112;
chunk__21103 = G__21113;
count__21104 = G__21114;
i__21105 = G__21115;
continue;
} else {
var vec__21107 = cljs.core.first.call(null,seq__21102__$1);
var k = cljs.core.nth.call(null,vec__21107,(0),null);
var v = cljs.core.nth.call(null,vec__21107,(1),null);
f.call(null,v,k);

var G__21116 = cljs.core.next.call(null,seq__21102__$1);
var G__21117 = null;
var G__21118 = (0);
var G__21119 = (0);
seq__21102 = G__21116;
chunk__21103 = G__21117;
count__21104 = G__21118;
i__21105 = G__21119;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21101;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21100 = obj;
G__21100.push(kfn.call(null,k),vfn.call(null,v));

return G__21100;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t21123 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t21123 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21124){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21123.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t21123.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t21123.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t21123.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
});

cognitect.transit.t21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cognitect.transit.t21123(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21124__$1));
});

cognitect.transit.t21123.cljs$lang$type = true;

cognitect.transit.t21123.cljs$lang$ctorStr = "cognitect.transit/t21123";

cognitect.transit.t21123.cljs$lang$ctorPrWriter = (function (this__16716__auto__,writer__16717__auto__,opt__16718__auto__){
return cljs.core._write.call(null,writer__16717__auto__,"cognitect.transit/t21123");
});

cognitect.transit.__GT_t21123 = (function __GT_t21123(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21124){
return (new cognitect.transit.t21123(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21124));
});

}

return (new cognitect.transit.t21123(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1442373574005