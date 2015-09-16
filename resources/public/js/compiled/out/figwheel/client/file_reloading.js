// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31685_SHARP_,p2__31686_SHARP_){
var and__16130__auto__ = p1__31685_SHARP_;
if(cljs.core.truth_(and__16130__auto__)){
return p2__31686_SHARP_;
} else {
return and__16130__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16142__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16142__auto__){
return or__16142__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31688_SHARP_,p2__31687_SHARP_){
return [cljs.core.str(p2__31687_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16142__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16142__auto__){
return or__16142__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16142__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17040__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17041__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17043__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17043__auto__,method_table__17039__auto__,prefer_table__17040__auto__,method_cache__17041__auto__,cached_hierarchy__17042__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31689){
var map__31690 = p__31689;
var map__31690__$1 = ((cljs.core.seq_QMARK_.call(null,map__31690))?cljs.core.apply.call(null,cljs.core.hash_map,map__31690):map__31690);
var file = cljs.core.get.call(null,map__31690__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31691){
var map__31692 = p__31691;
var map__31692__$1 = ((cljs.core.seq_QMARK_.call(null,map__31692))?cljs.core.apply.call(null,cljs.core.hash_map,map__31692):map__31692);
var namespace = cljs.core.get.call(null,map__31692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17040__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17041__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17043__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17043__auto__,method_table__17039__auto__,prefer_table__17040__auto__,method_cache__17041__auto__,cached_hierarchy__17042__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31693){if((e31693 instanceof Error)){
var e = e31693;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31693;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__31694,callback){
var map__31696 = p__31694;
var map__31696__$1 = ((cljs.core.seq_QMARK_.call(null,map__31696))?cljs.core.apply.call(null,cljs.core.hash_map,map__31696):map__31696);
var file_msg = map__31696__$1;
var request_url = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31696,map__31696__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31696,map__31696__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31697){
var map__31699 = p__31697;
var map__31699__$1 = ((cljs.core.seq_QMARK_.call(null,map__31699))?cljs.core.apply.call(null,cljs.core.hash_map,map__31699):map__31699);
var file_msg = map__31699__$1;
var meta_data = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16142__auto__ = meta_data;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16130__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16130__auto__){
var or__16142__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16142__auto____$1)){
return or__16142__auto____$1;
} else {
var and__16130__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16130__auto____$1){
var or__16142__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16142__auto____$2){
return or__16142__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16130__auto____$1;
}
}
}
} else {
return and__16130__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31700,callback){
var map__31702 = p__31700;
var map__31702__$1 = ((cljs.core.seq_QMARK_.call(null,map__31702))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var file_msg = map__31702__$1;
var namespace = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19566__auto___31789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto___31789,out){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto___31789,out){
return (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (7))){
var inst_31755 = (state_31771[(7)]);
var inst_31761 = (state_31771[(2)]);
var inst_31762 = cljs.core.async.put_BANG_.call(null,out,inst_31761);
var inst_31751 = inst_31755;
var state_31771__$1 = (function (){var statearr_31773 = state_31771;
(statearr_31773[(8)] = inst_31751);

(statearr_31773[(9)] = inst_31762);

return statearr_31773;
})();
var statearr_31774_31790 = state_31771__$1;
(statearr_31774_31790[(2)] = null);

(statearr_31774_31790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (6))){
var inst_31767 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31775_31791 = state_31771__$1;
(statearr_31775_31791[(2)] = inst_31767);

(statearr_31775_31791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (5))){
var inst_31765 = cljs.core.async.close_BANG_.call(null,out);
var state_31771__$1 = state_31771;
var statearr_31776_31792 = state_31771__$1;
(statearr_31776_31792[(2)] = inst_31765);

(statearr_31776_31792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (4))){
var inst_31754 = (state_31771[(10)]);
var inst_31759 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31754);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(7),inst_31759);
} else {
if((state_val_31772 === (3))){
var inst_31769 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31771__$1,inst_31769);
} else {
if((state_val_31772 === (2))){
var inst_31754 = (state_31771[(10)]);
var inst_31751 = (state_31771[(8)]);
var inst_31754__$1 = cljs.core.nth.call(null,inst_31751,(0),null);
var inst_31755 = cljs.core.nthnext.call(null,inst_31751,(1));
var inst_31756 = (inst_31754__$1 == null);
var inst_31757 = cljs.core.not.call(null,inst_31756);
var state_31771__$1 = (function (){var statearr_31777 = state_31771;
(statearr_31777[(7)] = inst_31755);

(statearr_31777[(10)] = inst_31754__$1);

return statearr_31777;
})();
if(inst_31757){
var statearr_31778_31793 = state_31771__$1;
(statearr_31778_31793[(1)] = (4));

} else {
var statearr_31779_31794 = state_31771__$1;
(statearr_31779_31794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (1))){
var inst_31749 = cljs.core.nth.call(null,files,(0),null);
var inst_31750 = cljs.core.nthnext.call(null,files,(1));
var inst_31751 = files;
var state_31771__$1 = (function (){var statearr_31780 = state_31771;
(statearr_31780[(11)] = inst_31749);

(statearr_31780[(8)] = inst_31751);

(statearr_31780[(12)] = inst_31750);

return statearr_31780;
})();
var statearr_31781_31795 = state_31771__$1;
(statearr_31781_31795[(2)] = null);

(statearr_31781_31795[(1)] = (2));


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
});})(c__19566__auto___31789,out))
;
return ((function (switch__19510__auto__,c__19566__auto___31789,out){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_31785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31785[(0)] = state_machine__19511__auto__);

(statearr_31785[(1)] = (1));

return statearr_31785;
});
var state_machine__19511__auto____1 = (function (state_31771){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_31771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e31786){if((e31786 instanceof Object)){
var ex__19514__auto__ = e31786;
var statearr_31787_31796 = state_31771;
(statearr_31787_31796[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31797 = state_31771;
state_31771 = G__31797;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto___31789,out))
})();
var state__19568__auto__ = (function (){var statearr_31788 = f__19567__auto__.call(null);
(statearr_31788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto___31789);

return statearr_31788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto___31789,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31798,p__31799){
var map__31802 = p__31798;
var map__31802__$1 = ((cljs.core.seq_QMARK_.call(null,map__31802))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var opts = map__31802__$1;
var url_rewriter = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31803 = p__31799;
var map__31803__$1 = ((cljs.core.seq_QMARK_.call(null,map__31803))?cljs.core.apply.call(null,cljs.core.hash_map,map__31803):map__31803);
var file_msg = map__31803__$1;
var file = cljs.core.get.call(null,map__31803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31804){
var map__31807 = p__31804;
var map__31807__$1 = ((cljs.core.seq_QMARK_.call(null,map__31807))?cljs.core.apply.call(null,cljs.core.hash_map,map__31807):map__31807);
var file = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16130__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16130__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16130__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31808){var e = e31808;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31813,p__31814){
var map__32015 = p__31813;
var map__32015__$1 = ((cljs.core.seq_QMARK_.call(null,map__32015))?cljs.core.apply.call(null,cljs.core.hash_map,map__32015):map__32015);
var opts = map__32015__$1;
var load_unchanged_files = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32016 = p__31814;
var map__32016__$1 = ((cljs.core.seq_QMARK_.call(null,map__32016))?cljs.core.apply.call(null,cljs.core.hash_map,map__32016):map__32016);
var msg = map__32016__$1;
var files = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (state_32140){
var state_val_32141 = (state_32140[(1)]);
if((state_val_32141 === (7))){
var inst_32030 = (state_32140[(7)]);
var inst_32027 = (state_32140[(8)]);
var inst_32028 = (state_32140[(9)]);
var inst_32029 = (state_32140[(10)]);
var inst_32035 = cljs.core._nth.call(null,inst_32028,inst_32030);
var inst_32036 = figwheel.client.file_reloading.eval_body.call(null,inst_32035);
var inst_32037 = (inst_32030 + (1));
var tmp32142 = inst_32027;
var tmp32143 = inst_32028;
var tmp32144 = inst_32029;
var inst_32027__$1 = tmp32142;
var inst_32028__$1 = tmp32143;
var inst_32029__$1 = tmp32144;
var inst_32030__$1 = inst_32037;
var state_32140__$1 = (function (){var statearr_32145 = state_32140;
(statearr_32145[(11)] = inst_32036);

(statearr_32145[(7)] = inst_32030__$1);

(statearr_32145[(8)] = inst_32027__$1);

(statearr_32145[(9)] = inst_32028__$1);

(statearr_32145[(10)] = inst_32029__$1);

return statearr_32145;
})();
var statearr_32146_32215 = state_32140__$1;
(statearr_32146_32215[(2)] = null);

(statearr_32146_32215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (20))){
var inst_32072 = (state_32140[(12)]);
var inst_32079 = (state_32140[(13)]);
var inst_32076 = (state_32140[(14)]);
var inst_32073 = (state_32140[(15)]);
var inst_32077 = (state_32140[(16)]);
var inst_32082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32084 = (function (){var files_not_loaded = inst_32079;
var res = inst_32077;
var res_SINGLEQUOTE_ = inst_32076;
var files_SINGLEQUOTE_ = inst_32073;
var all_files = inst_32072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32073,inst_32077,inst_32082,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p__32083){
var map__32147 = p__32083;
var map__32147__$1 = ((cljs.core.seq_QMARK_.call(null,map__32147))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var file = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32073,inst_32077,inst_32082,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32085 = cljs.core.map.call(null,inst_32084,inst_32077);
var inst_32086 = cljs.core.pr_str.call(null,inst_32085);
var inst_32087 = figwheel.client.utils.log.call(null,inst_32086);
var inst_32088 = (function (){var files_not_loaded = inst_32079;
var res = inst_32077;
var res_SINGLEQUOTE_ = inst_32076;
var files_SINGLEQUOTE_ = inst_32073;
var all_files = inst_32072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32073,inst_32077,inst_32082,inst_32084,inst_32085,inst_32086,inst_32087,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32073,inst_32077,inst_32082,inst_32084,inst_32085,inst_32086,inst_32087,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32089 = setTimeout(inst_32088,(10));
var state_32140__$1 = (function (){var statearr_32148 = state_32140;
(statearr_32148[(17)] = inst_32082);

(statearr_32148[(18)] = inst_32087);

return statearr_32148;
})();
var statearr_32149_32216 = state_32140__$1;
(statearr_32149_32216[(2)] = inst_32089);

(statearr_32149_32216[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (27))){
var inst_32099 = (state_32140[(19)]);
var state_32140__$1 = state_32140;
var statearr_32150_32217 = state_32140__$1;
(statearr_32150_32217[(2)] = inst_32099);

(statearr_32150_32217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (1))){
var inst_32019 = (state_32140[(20)]);
var inst_32017 = before_jsload.call(null,files);
var inst_32018 = (function (){return ((function (inst_32019,inst_32017,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p1__31809_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31809_SHARP_);
});
;})(inst_32019,inst_32017,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32019__$1 = cljs.core.filter.call(null,inst_32018,files);
var inst_32020 = cljs.core.not_empty.call(null,inst_32019__$1);
var state_32140__$1 = (function (){var statearr_32151 = state_32140;
(statearr_32151[(21)] = inst_32017);

(statearr_32151[(20)] = inst_32019__$1);

return statearr_32151;
})();
if(cljs.core.truth_(inst_32020)){
var statearr_32152_32218 = state_32140__$1;
(statearr_32152_32218[(1)] = (2));

} else {
var statearr_32153_32219 = state_32140__$1;
(statearr_32153_32219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (24))){
var state_32140__$1 = state_32140;
var statearr_32154_32220 = state_32140__$1;
(statearr_32154_32220[(2)] = null);

(statearr_32154_32220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (4))){
var inst_32064 = (state_32140[(2)]);
var inst_32065 = (function (){return ((function (inst_32064,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p1__31810_SHARP_){
var and__16130__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31810_SHARP_);
if(cljs.core.truth_(and__16130__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31810_SHARP_));
} else {
return and__16130__auto__;
}
});
;})(inst_32064,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32066 = cljs.core.filter.call(null,inst_32065,files);
var state_32140__$1 = (function (){var statearr_32155 = state_32140;
(statearr_32155[(22)] = inst_32064);

(statearr_32155[(23)] = inst_32066);

return statearr_32155;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32156_32221 = state_32140__$1;
(statearr_32156_32221[(1)] = (16));

} else {
var statearr_32157_32222 = state_32140__$1;
(statearr_32157_32222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (15))){
var inst_32054 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32158_32223 = state_32140__$1;
(statearr_32158_32223[(2)] = inst_32054);

(statearr_32158_32223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (21))){
var state_32140__$1 = state_32140;
var statearr_32159_32224 = state_32140__$1;
(statearr_32159_32224[(2)] = null);

(statearr_32159_32224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (31))){
var inst_32107 = (state_32140[(24)]);
var inst_32117 = (state_32140[(2)]);
var inst_32118 = cljs.core.not_empty.call(null,inst_32107);
var state_32140__$1 = (function (){var statearr_32160 = state_32140;
(statearr_32160[(25)] = inst_32117);

return statearr_32160;
})();
if(cljs.core.truth_(inst_32118)){
var statearr_32161_32225 = state_32140__$1;
(statearr_32161_32225[(1)] = (32));

} else {
var statearr_32162_32226 = state_32140__$1;
(statearr_32162_32226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (32))){
var inst_32107 = (state_32140[(24)]);
var inst_32120 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32107);
var inst_32121 = cljs.core.pr_str.call(null,inst_32120);
var inst_32122 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32121)].join('');
var inst_32123 = figwheel.client.utils.log.call(null,inst_32122);
var state_32140__$1 = state_32140;
var statearr_32163_32227 = state_32140__$1;
(statearr_32163_32227[(2)] = inst_32123);

(statearr_32163_32227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (33))){
var state_32140__$1 = state_32140;
var statearr_32164_32228 = state_32140__$1;
(statearr_32164_32228[(2)] = null);

(statearr_32164_32228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (13))){
var inst_32040 = (state_32140[(26)]);
var inst_32044 = cljs.core.chunk_first.call(null,inst_32040);
var inst_32045 = cljs.core.chunk_rest.call(null,inst_32040);
var inst_32046 = cljs.core.count.call(null,inst_32044);
var inst_32027 = inst_32045;
var inst_32028 = inst_32044;
var inst_32029 = inst_32046;
var inst_32030 = (0);
var state_32140__$1 = (function (){var statearr_32165 = state_32140;
(statearr_32165[(7)] = inst_32030);

(statearr_32165[(8)] = inst_32027);

(statearr_32165[(9)] = inst_32028);

(statearr_32165[(10)] = inst_32029);

return statearr_32165;
})();
var statearr_32166_32229 = state_32140__$1;
(statearr_32166_32229[(2)] = null);

(statearr_32166_32229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (22))){
var inst_32079 = (state_32140[(13)]);
var inst_32092 = (state_32140[(2)]);
var inst_32093 = cljs.core.not_empty.call(null,inst_32079);
var state_32140__$1 = (function (){var statearr_32167 = state_32140;
(statearr_32167[(27)] = inst_32092);

return statearr_32167;
})();
if(cljs.core.truth_(inst_32093)){
var statearr_32168_32230 = state_32140__$1;
(statearr_32168_32230[(1)] = (23));

} else {
var statearr_32169_32231 = state_32140__$1;
(statearr_32169_32231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (36))){
var state_32140__$1 = state_32140;
var statearr_32170_32232 = state_32140__$1;
(statearr_32170_32232[(2)] = null);

(statearr_32170_32232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (29))){
var inst_32108 = (state_32140[(28)]);
var inst_32111 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32108);
var inst_32112 = cljs.core.pr_str.call(null,inst_32111);
var inst_32113 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32112)].join('');
var inst_32114 = figwheel.client.utils.log.call(null,inst_32113);
var state_32140__$1 = state_32140;
var statearr_32171_32233 = state_32140__$1;
(statearr_32171_32233[(2)] = inst_32114);

(statearr_32171_32233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (6))){
var inst_32061 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32172_32234 = state_32140__$1;
(statearr_32172_32234[(2)] = inst_32061);

(statearr_32172_32234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (28))){
var inst_32108 = (state_32140[(28)]);
var inst_32105 = (state_32140[(2)]);
var inst_32106 = cljs.core.get.call(null,inst_32105,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32107 = cljs.core.get.call(null,inst_32105,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32108__$1 = cljs.core.get.call(null,inst_32105,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32109 = cljs.core.not_empty.call(null,inst_32108__$1);
var state_32140__$1 = (function (){var statearr_32173 = state_32140;
(statearr_32173[(29)] = inst_32106);

(statearr_32173[(28)] = inst_32108__$1);

(statearr_32173[(24)] = inst_32107);

return statearr_32173;
})();
if(cljs.core.truth_(inst_32109)){
var statearr_32174_32235 = state_32140__$1;
(statearr_32174_32235[(1)] = (29));

} else {
var statearr_32175_32236 = state_32140__$1;
(statearr_32175_32236[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (25))){
var inst_32138 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32140__$1,inst_32138);
} else {
if((state_val_32141 === (34))){
var inst_32106 = (state_32140[(29)]);
var inst_32126 = (state_32140[(2)]);
var inst_32127 = cljs.core.not_empty.call(null,inst_32106);
var state_32140__$1 = (function (){var statearr_32176 = state_32140;
(statearr_32176[(30)] = inst_32126);

return statearr_32176;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32177_32237 = state_32140__$1;
(statearr_32177_32237[(1)] = (35));

} else {
var statearr_32178_32238 = state_32140__$1;
(statearr_32178_32238[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (17))){
var inst_32066 = (state_32140[(23)]);
var state_32140__$1 = state_32140;
var statearr_32179_32239 = state_32140__$1;
(statearr_32179_32239[(2)] = inst_32066);

(statearr_32179_32239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (3))){
var state_32140__$1 = state_32140;
var statearr_32180_32240 = state_32140__$1;
(statearr_32180_32240[(2)] = null);

(statearr_32180_32240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (12))){
var inst_32057 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32181_32241 = state_32140__$1;
(statearr_32181_32241[(2)] = inst_32057);

(statearr_32181_32241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (2))){
var inst_32019 = (state_32140[(20)]);
var inst_32026 = cljs.core.seq.call(null,inst_32019);
var inst_32027 = inst_32026;
var inst_32028 = null;
var inst_32029 = (0);
var inst_32030 = (0);
var state_32140__$1 = (function (){var statearr_32182 = state_32140;
(statearr_32182[(7)] = inst_32030);

(statearr_32182[(8)] = inst_32027);

(statearr_32182[(9)] = inst_32028);

(statearr_32182[(10)] = inst_32029);

return statearr_32182;
})();
var statearr_32183_32242 = state_32140__$1;
(statearr_32183_32242[(2)] = null);

(statearr_32183_32242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (23))){
var inst_32072 = (state_32140[(12)]);
var inst_32079 = (state_32140[(13)]);
var inst_32076 = (state_32140[(14)]);
var inst_32099 = (state_32140[(19)]);
var inst_32073 = (state_32140[(15)]);
var inst_32077 = (state_32140[(16)]);
var inst_32095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32098 = (function (){var files_not_loaded = inst_32079;
var res = inst_32077;
var res_SINGLEQUOTE_ = inst_32076;
var files_SINGLEQUOTE_ = inst_32073;
var all_files = inst_32072;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32099,inst_32073,inst_32077,inst_32095,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p__32097){
var map__32184 = p__32097;
var map__32184__$1 = ((cljs.core.seq_QMARK_.call(null,map__32184))?cljs.core.apply.call(null,cljs.core.hash_map,map__32184):map__32184);
var meta_data = cljs.core.get.call(null,map__32184__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32079,inst_32076,inst_32099,inst_32073,inst_32077,inst_32095,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32099__$1 = cljs.core.group_by.call(null,inst_32098,inst_32079);
var inst_32100 = cljs.core.seq_QMARK_.call(null,inst_32099__$1);
var state_32140__$1 = (function (){var statearr_32185 = state_32140;
(statearr_32185[(19)] = inst_32099__$1);

(statearr_32185[(31)] = inst_32095);

return statearr_32185;
})();
if(inst_32100){
var statearr_32186_32243 = state_32140__$1;
(statearr_32186_32243[(1)] = (26));

} else {
var statearr_32187_32244 = state_32140__$1;
(statearr_32187_32244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (35))){
var inst_32106 = (state_32140[(29)]);
var inst_32129 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32106);
var inst_32130 = cljs.core.pr_str.call(null,inst_32129);
var inst_32131 = [cljs.core.str("not required: "),cljs.core.str(inst_32130)].join('');
var inst_32132 = figwheel.client.utils.log.call(null,inst_32131);
var state_32140__$1 = state_32140;
var statearr_32188_32245 = state_32140__$1;
(statearr_32188_32245[(2)] = inst_32132);

(statearr_32188_32245[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (19))){
var inst_32072 = (state_32140[(12)]);
var inst_32076 = (state_32140[(14)]);
var inst_32073 = (state_32140[(15)]);
var inst_32077 = (state_32140[(16)]);
var inst_32076__$1 = (state_32140[(2)]);
var inst_32077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32076__$1);
var inst_32078 = (function (){var res = inst_32077__$1;
var res_SINGLEQUOTE_ = inst_32076__$1;
var files_SINGLEQUOTE_ = inst_32073;
var all_files = inst_32072;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32076,inst_32073,inst_32077,inst_32076__$1,inst_32077__$1,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p1__31812_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31812_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32072,inst_32076,inst_32073,inst_32077,inst_32076__$1,inst_32077__$1,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32079 = cljs.core.filter.call(null,inst_32078,inst_32076__$1);
var inst_32080 = cljs.core.not_empty.call(null,inst_32077__$1);
var state_32140__$1 = (function (){var statearr_32189 = state_32140;
(statearr_32189[(13)] = inst_32079);

(statearr_32189[(14)] = inst_32076__$1);

(statearr_32189[(16)] = inst_32077__$1);

return statearr_32189;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32190_32246 = state_32140__$1;
(statearr_32190_32246[(1)] = (20));

} else {
var statearr_32191_32247 = state_32140__$1;
(statearr_32191_32247[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (11))){
var state_32140__$1 = state_32140;
var statearr_32192_32248 = state_32140__$1;
(statearr_32192_32248[(2)] = null);

(statearr_32192_32248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (9))){
var inst_32059 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32193_32249 = state_32140__$1;
(statearr_32193_32249[(2)] = inst_32059);

(statearr_32193_32249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (5))){
var inst_32030 = (state_32140[(7)]);
var inst_32029 = (state_32140[(10)]);
var inst_32032 = (inst_32030 < inst_32029);
var inst_32033 = inst_32032;
var state_32140__$1 = state_32140;
if(cljs.core.truth_(inst_32033)){
var statearr_32194_32250 = state_32140__$1;
(statearr_32194_32250[(1)] = (7));

} else {
var statearr_32195_32251 = state_32140__$1;
(statearr_32195_32251[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (14))){
var inst_32040 = (state_32140[(26)]);
var inst_32049 = cljs.core.first.call(null,inst_32040);
var inst_32050 = figwheel.client.file_reloading.eval_body.call(null,inst_32049);
var inst_32051 = cljs.core.next.call(null,inst_32040);
var inst_32027 = inst_32051;
var inst_32028 = null;
var inst_32029 = (0);
var inst_32030 = (0);
var state_32140__$1 = (function (){var statearr_32196 = state_32140;
(statearr_32196[(32)] = inst_32050);

(statearr_32196[(7)] = inst_32030);

(statearr_32196[(8)] = inst_32027);

(statearr_32196[(9)] = inst_32028);

(statearr_32196[(10)] = inst_32029);

return statearr_32196;
})();
var statearr_32197_32252 = state_32140__$1;
(statearr_32197_32252[(2)] = null);

(statearr_32197_32252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (26))){
var inst_32099 = (state_32140[(19)]);
var inst_32102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32099);
var state_32140__$1 = state_32140;
var statearr_32198_32253 = state_32140__$1;
(statearr_32198_32253[(2)] = inst_32102);

(statearr_32198_32253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (16))){
var inst_32066 = (state_32140[(23)]);
var inst_32068 = (function (){var all_files = inst_32066;
return ((function (all_files,inst_32066,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function (p1__31811_SHARP_){
return cljs.core.update_in.call(null,p1__31811_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32066,state_val_32141,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var inst_32069 = cljs.core.map.call(null,inst_32068,inst_32066);
var state_32140__$1 = state_32140;
var statearr_32199_32254 = state_32140__$1;
(statearr_32199_32254[(2)] = inst_32069);

(statearr_32199_32254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (30))){
var state_32140__$1 = state_32140;
var statearr_32200_32255 = state_32140__$1;
(statearr_32200_32255[(2)] = null);

(statearr_32200_32255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (10))){
var inst_32040 = (state_32140[(26)]);
var inst_32042 = cljs.core.chunked_seq_QMARK_.call(null,inst_32040);
var state_32140__$1 = state_32140;
if(inst_32042){
var statearr_32201_32256 = state_32140__$1;
(statearr_32201_32256[(1)] = (13));

} else {
var statearr_32202_32257 = state_32140__$1;
(statearr_32202_32257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (18))){
var inst_32072 = (state_32140[(12)]);
var inst_32073 = (state_32140[(15)]);
var inst_32072__$1 = (state_32140[(2)]);
var inst_32073__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32072__$1);
var inst_32074 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32073__$1);
var state_32140__$1 = (function (){var statearr_32203 = state_32140;
(statearr_32203[(12)] = inst_32072__$1);

(statearr_32203[(15)] = inst_32073__$1);

return statearr_32203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32140__$1,(19),inst_32074);
} else {
if((state_val_32141 === (37))){
var inst_32135 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32204_32258 = state_32140__$1;
(statearr_32204_32258[(2)] = inst_32135);

(statearr_32204_32258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (8))){
var inst_32027 = (state_32140[(8)]);
var inst_32040 = (state_32140[(26)]);
var inst_32040__$1 = cljs.core.seq.call(null,inst_32027);
var state_32140__$1 = (function (){var statearr_32205 = state_32140;
(statearr_32205[(26)] = inst_32040__$1);

return statearr_32205;
})();
if(inst_32040__$1){
var statearr_32206_32259 = state_32140__$1;
(statearr_32206_32259[(1)] = (10));

} else {
var statearr_32207_32260 = state_32140__$1;
(statearr_32207_32260[(1)] = (11));

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
});})(c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
;
return ((function (switch__19510__auto__,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32211[(0)] = state_machine__19511__auto__);

(statearr_32211[(1)] = (1));

return statearr_32211;
});
var state_machine__19511__auto____1 = (function (state_32140){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32212){if((e32212 instanceof Object)){
var ex__19514__auto__ = e32212;
var statearr_32213_32261 = state_32140;
(statearr_32213_32261[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32262 = state_32140;
state_32140 = G__32262;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32140){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
})();
var state__19568__auto__ = (function (){var statearr_32214 = f__19567__auto__.call(null);
(statearr_32214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__,map__32015,map__32015__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32016,map__32016__$1,msg,files))
);

return c__19566__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__32265,link){
var map__32267 = p__32265;
var map__32267__$1 = ((cljs.core.seq_QMARK_.call(null,map__32267))?cljs.core.apply.call(null,cljs.core.hash_map,map__32267):map__32267);
var file = cljs.core.get.call(null,map__32267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32267,map__32267__$1,file){
return (function (p1__32263_SHARP_,p2__32264_SHARP_){
if(cljs.core._EQ_.call(null,p1__32263_SHARP_,p2__32264_SHARP_)){
return p1__32263_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32267,map__32267__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32271){
var map__32272 = p__32271;
var map__32272__$1 = ((cljs.core.seq_QMARK_.call(null,map__32272))?cljs.core.apply.call(null,cljs.core.hash_map,map__32272):map__32272);
var current_url_length = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32268_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32268_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__32273){
var map__32275 = p__32273;
var map__32275__$1 = ((cljs.core.seq_QMARK_.call(null,map__32275))?cljs.core.apply.call(null,cljs.core.hash_map,map__32275):map__32275);
var f_data = map__32275__$1;
var request_url = cljs.core.get.call(null,map__32275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16142__auto__ = request_url;
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__32276,files_msg){
var map__32298 = p__32276;
var map__32298__$1 = ((cljs.core.seq_QMARK_.call(null,map__32298))?cljs.core.apply.call(null,cljs.core.hash_map,map__32298):map__32298);
var opts = map__32298__$1;
var on_cssload = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32299_32319 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32300_32320 = null;
var count__32301_32321 = (0);
var i__32302_32322 = (0);
while(true){
if((i__32302_32322 < count__32301_32321)){
var f_32323 = cljs.core._nth.call(null,chunk__32300_32320,i__32302_32322);
figwheel.client.file_reloading.reload_css_file.call(null,f_32323);

var G__32324 = seq__32299_32319;
var G__32325 = chunk__32300_32320;
var G__32326 = count__32301_32321;
var G__32327 = (i__32302_32322 + (1));
seq__32299_32319 = G__32324;
chunk__32300_32320 = G__32325;
count__32301_32321 = G__32326;
i__32302_32322 = G__32327;
continue;
} else {
var temp__4126__auto___32328 = cljs.core.seq.call(null,seq__32299_32319);
if(temp__4126__auto___32328){
var seq__32299_32329__$1 = temp__4126__auto___32328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32299_32329__$1)){
var c__16929__auto___32330 = cljs.core.chunk_first.call(null,seq__32299_32329__$1);
var G__32331 = cljs.core.chunk_rest.call(null,seq__32299_32329__$1);
var G__32332 = c__16929__auto___32330;
var G__32333 = cljs.core.count.call(null,c__16929__auto___32330);
var G__32334 = (0);
seq__32299_32319 = G__32331;
chunk__32300_32320 = G__32332;
count__32301_32321 = G__32333;
i__32302_32322 = G__32334;
continue;
} else {
var f_32335 = cljs.core.first.call(null,seq__32299_32329__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32335);

var G__32336 = cljs.core.next.call(null,seq__32299_32329__$1);
var G__32337 = null;
var G__32338 = (0);
var G__32339 = (0);
seq__32299_32319 = G__32336;
chunk__32300_32320 = G__32337;
count__32301_32321 = G__32338;
i__32302_32322 = G__32339;
continue;
}
} else {
}
}
break;
}

var c__19566__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload){
return (function (){
var f__19567__auto__ = (function (){var switch__19510__auto__ = ((function (c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload){
return (function (state_32309){
var state_val_32310 = (state_32309[(1)]);
if((state_val_32310 === (2))){
var inst_32305 = (state_32309[(2)]);
var inst_32306 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32307 = on_cssload.call(null,inst_32306);
var state_32309__$1 = (function (){var statearr_32311 = state_32309;
(statearr_32311[(7)] = inst_32305);

return statearr_32311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32309__$1,inst_32307);
} else {
if((state_val_32310 === (1))){
var inst_32303 = cljs.core.async.timeout.call(null,(100));
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32309__$1,(2),inst_32303);
} else {
return null;
}
}
});})(c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload))
;
return ((function (switch__19510__auto__,c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload){
return (function() {
var state_machine__19511__auto__ = null;
var state_machine__19511__auto____0 = (function (){
var statearr_32315 = [null,null,null,null,null,null,null,null];
(statearr_32315[(0)] = state_machine__19511__auto__);

(statearr_32315[(1)] = (1));

return statearr_32315;
});
var state_machine__19511__auto____1 = (function (state_32309){
while(true){
var ret_value__19512__auto__ = (function (){try{while(true){
var result__19513__auto__ = switch__19510__auto__.call(null,state_32309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19513__auto__;
}
break;
}
}catch (e32316){if((e32316 instanceof Object)){
var ex__19514__auto__ = e32316;
var statearr_32317_32340 = state_32309;
(statearr_32317_32340[(5)] = ex__19514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32341 = state_32309;
state_32309 = G__32341;
continue;
} else {
return ret_value__19512__auto__;
}
break;
}
});
state_machine__19511__auto__ = function(state_32309){
switch(arguments.length){
case 0:
return state_machine__19511__auto____0.call(this);
case 1:
return state_machine__19511__auto____1.call(this,state_32309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19511__auto____0;
state_machine__19511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19511__auto____1;
return state_machine__19511__auto__;
})()
;})(switch__19510__auto__,c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload))
})();
var state__19568__auto__ = (function (){var statearr_32318 = f__19567__auto__.call(null);
(statearr_32318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19566__auto__);

return statearr_32318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19568__auto__);
});})(c__19566__auto__,map__32298,map__32298__$1,opts,on_cssload))
);

return c__19566__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1429499340353