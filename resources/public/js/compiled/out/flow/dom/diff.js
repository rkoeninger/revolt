// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flow.dom.diff');
goog.require('cljs.core');
goog.require('clojure.set');
flow.dom.diff.diff_threshold = 5.0;
flow.dom.diff.kept_ids = (function kept_ids(x1,x2){
var kept_QMARK_ = clojure.set.intersection.call(null,cljs.core.set.call(null,x1),cljs.core.set.call(null,x2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,kept_QMARK_,x1),cljs.core.filter.call(null,kept_QMARK_,x2),kept_QMARK_], null);
});
flow.dom.diff.indices = (function indices(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,m,cljs.core.range.call(null)));
});
flow.dom.diff.abs = (function abs(x){
return Math.abs(x);
});
flow.dom.diff.to_diff_QMARK_ = (function to_diff_QMARK_(x1,x2){
var vec__25258 = flow.dom.diff.kept_ids.call(null,x1,x2);
var x1_kept = cljs.core.nth.call(null,vec__25258,(0),null);
var x2_kept = cljs.core.nth.call(null,vec__25258,(1),null);
var ids = cljs.core.nth.call(null,vec__25258,(2),null);
var vec__25259 = cljs.core.map.call(null,flow.dom.diff.indices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_kept,x2_kept], null));
var x1_indices = cljs.core.nth.call(null,vec__25259,(0),null);
var x2_indices = cljs.core.nth.call(null,vec__25259,(1),null);
return ((flow.dom.diff.diff_threshold * cljs.core.count.call(null,ids)) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__25258,x1_kept,x2_kept,ids,vec__25259,x1_indices,x2_indices){
return (function (p1__25255_SHARP_){
return flow.dom.diff.abs.call(null,cljs.core.apply.call(null,cljs.core._,p1__25255_SHARP_));
});})(vec__25258,x1_kept,x2_kept,ids,vec__25259,x1_indices,x2_indices))
,cljs.core.map.call(null,cljs.core.juxt.call(null,x1_indices,x2_indices),ids))));
});
flow.dom.diff.do_diff = (function do_diff(olds,news){
var res = cljs.core.PersistentVector.EMPTY;
var displaced_olds = cljs.core.PersistentVector.EMPTY;
var displaced_news = cljs.core.PersistentVector.EMPTY;
var G__25306 = olds;
var vec__25308 = G__25306;
var old_el = cljs.core.nth.call(null,vec__25308,(0),null);
var more_olds = cljs.core.nthnext.call(null,vec__25308,(1));
var olds__$1 = vec__25308;
var G__25307 = news;
var vec__25309 = G__25307;
var new_el = cljs.core.nth.call(null,vec__25309,(0),null);
var more_news = cljs.core.nthnext.call(null,vec__25309,(1));
var news__$1 = vec__25309;
var res__$1 = res;
var displaced_olds__$1 = displaced_olds;
var displaced_news__$1 = displaced_news;
var G__25306__$1 = G__25306;
var G__25307__$1 = G__25307;
while(true){
var res__$2 = res__$1;
var displaced_olds__$2 = displaced_olds__$1;
var displaced_news__$2 = displaced_news__$1;
var vec__25310 = G__25306__$1;
var old_el__$1 = cljs.core.nth.call(null,vec__25310,(0),null);
var more_olds__$1 = cljs.core.nthnext.call(null,vec__25310,(1));
var olds__$2 = vec__25310;
var vec__25311 = G__25307__$1;
var new_el__$1 = cljs.core.nth.call(null,vec__25311,(0),null);
var more_news__$1 = cljs.core.nthnext.call(null,vec__25311,(1));
var news__$2 = vec__25311;
if((cljs.core.empty_QMARK_.call(null,olds__$2)) && (cljs.core.empty_QMARK_.call(null,news__$2))){
return cljs.core.concat.call(null,res__$2,(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25312(s__25313){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25313__$1 = s__25313;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25313__$1);
if(temp__4126__auto__){
var s__25313__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25313__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25313__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25315 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25314 = (0);
while(true){
if((i__25314 < size__16884__auto__)){
var displaced_new = cljs.core._nth.call(null,c__16883__auto__,i__25314);
cljs.core.chunk_append.call(null,b__25315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null));

var G__25346 = (i__25314 + (1));
i__25314 = G__25346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25315),iter__25312.call(null,cljs.core.chunk_rest.call(null,s__25313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25315),null);
}
} else {
var displaced_new = cljs.core.first.call(null,s__25313__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null),iter__25312.call(null,cljs.core.rest.call(null,s__25313__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_news__$2);
})(),(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25316(s__25317){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25317__$1 = s__25317;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25317__$1);
if(temp__4126__auto__){
var s__25317__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25317__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25317__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25319 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25318 = (0);
while(true){
if((i__25318 < size__16884__auto__)){
var displaced_old = cljs.core._nth.call(null,c__16883__auto__,i__25318);
cljs.core.chunk_append.call(null,b__25319,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null));

var G__25347 = (i__25318 + (1));
i__25318 = G__25347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25319),iter__25316.call(null,cljs.core.chunk_rest.call(null,s__25317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25319),null);
}
} else {
var displaced_old = cljs.core.first.call(null,s__25317__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null),iter__25316.call(null,cljs.core.rest.call(null,s__25317__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_olds__$2);
})());
} else {
if(cljs.core._EQ_.call(null,old_el__$1,new_el__$1)){
var G__25348 = cljs.core.concat.call(null,res__$2,(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25320(s__25321){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25321__$1 = s__25321;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25321__$1);
if(temp__4126__auto__){
var s__25321__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25321__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25321__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25323 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25322 = (0);
while(true){
if((i__25322 < size__16884__auto__)){
var displaced_new = cljs.core._nth.call(null,c__16883__auto__,i__25322);
cljs.core.chunk_append.call(null,b__25323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null));

var G__25353 = (i__25322 + (1));
i__25322 = G__25353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25323),iter__25320.call(null,cljs.core.chunk_rest.call(null,s__25321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25323),null);
}
} else {
var displaced_new = cljs.core.first.call(null,s__25321__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null),iter__25320.call(null,cljs.core.rest.call(null,s__25321__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_news__$2);
})(),(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25324(s__25325){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25325__$1 = s__25325;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25325__$1);
if(temp__4126__auto__){
var s__25325__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25325__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25325__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25327 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25326 = (0);
while(true){
if((i__25326 < size__16884__auto__)){
var displaced_old = cljs.core._nth.call(null,c__16883__auto__,i__25326);
cljs.core.chunk_append.call(null,b__25327,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null));

var G__25354 = (i__25326 + (1));
i__25326 = G__25354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25327),iter__25324.call(null,cljs.core.chunk_rest.call(null,s__25325__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25327),null);
}
} else {
var displaced_old = cljs.core.first.call(null,s__25325__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null),iter__25324.call(null,cljs.core.rest.call(null,s__25325__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_olds__$2);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kept","kept",1300991554),new_el__$1], null)], null));
var G__25349 = cljs.core.PersistentVector.EMPTY;
var G__25350 = cljs.core.PersistentVector.EMPTY;
var G__25351 = more_olds__$1;
var G__25352 = more_news__$1;
res__$1 = G__25348;
displaced_olds__$1 = G__25349;
displaced_news__$1 = G__25350;
G__25306__$1 = G__25351;
G__25307__$1 = G__25352;
continue;
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,displaced_olds__$2),new_el__$1)){
var vec__25328 = cljs.core.split_with.call(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (p1__25260_SHARP_){
return cljs.core.not_EQ_.call(null,new_el__$1,p1__25260_SHARP_);
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,displaced_olds__$2);
var moved_out_olds = cljs.core.nth.call(null,vec__25328,(0),null);
var still_displaced_olds = cljs.core.nth.call(null,vec__25328,(1),null);
var G__25355 = cljs.core.concat.call(null,res__$2,(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25329(s__25330){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25330__$1 = s__25330;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25330__$1);
if(temp__4126__auto__){
var s__25330__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25330__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25330__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25332 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25331 = (0);
while(true){
if((i__25331 < size__16884__auto__)){
var displaced_new = cljs.core._nth.call(null,c__16883__auto__,i__25331);
cljs.core.chunk_append.call(null,b__25332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null));

var G__25360 = (i__25331 + (1));
i__25331 = G__25360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25332),iter__25329.call(null,cljs.core.chunk_rest.call(null,s__25330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25332),null);
}
} else {
var displaced_new = cljs.core.first.call(null,s__25330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),displaced_new], null),iter__25329.call(null,cljs.core.rest.call(null,s__25330__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_news__$2);
})(),(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25333(s__25334){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25334__$1 = s__25334;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25334__$1);
if(temp__4126__auto__){
var s__25334__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25334__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25334__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25336 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25335 = (0);
while(true){
if((i__25335 < size__16884__auto__)){
var moved_out_old = cljs.core._nth.call(null,c__16883__auto__,i__25335);
cljs.core.chunk_append.call(null,b__25336,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),moved_out_old], null));

var G__25361 = (i__25335 + (1));
i__25335 = G__25361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25336),iter__25333.call(null,cljs.core.chunk_rest.call(null,s__25334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25336),null);
}
} else {
var moved_out_old = cljs.core.first.call(null,s__25334__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),moved_out_old], null),iter__25333.call(null,cljs.core.rest.call(null,s__25334__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25328,moved_out_olds,still_displaced_olds,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,moved_out_olds);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kept","kept",1300991554),new_el__$1], null)], null));
var G__25356 = cljs.core.rest.call(null,still_displaced_olds);
var G__25357 = cljs.core.PersistentVector.EMPTY;
var G__25358 = olds__$2;
var G__25359 = more_news__$1;
res__$1 = G__25355;
displaced_olds__$1 = G__25356;
displaced_news__$1 = G__25357;
G__25306__$1 = G__25358;
G__25307__$1 = G__25359;
continue;
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,displaced_news__$2),old_el__$1)){
var vec__25337 = cljs.core.split_with.call(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (p1__25261_SHARP_){
return cljs.core.not_EQ_.call(null,old_el__$1,p1__25261_SHARP_);
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,displaced_news__$2);
var moved_in_news = cljs.core.nth.call(null,vec__25337,(0),null);
var still_displaced_news = cljs.core.nth.call(null,vec__25337,(1),null);
var G__25362 = cljs.core.concat.call(null,res__$2,(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25338(s__25339){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25339__$1 = s__25339;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25339__$1);
if(temp__4126__auto__){
var s__25339__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25339__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25339__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25341 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25340 = (0);
while(true){
if((i__25340 < size__16884__auto__)){
var displaced_old = cljs.core._nth.call(null,c__16883__auto__,i__25340);
cljs.core.chunk_append.call(null,b__25341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null));

var G__25367 = (i__25340 + (1));
i__25340 = G__25367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25341),iter__25338.call(null,cljs.core.chunk_rest.call(null,s__25339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25341),null);
}
} else {
var displaced_old = cljs.core.first.call(null,s__25339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),displaced_old], null),iter__25338.call(null,cljs.core.rest.call(null,s__25339__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,displaced_olds__$2);
})(),(function (){var iter__16885__auto__ = ((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function iter__25342(s__25343){
return (new cljs.core.LazySeq(null,((function (res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1){
return (function (){
var s__25343__$1 = s__25343;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25343__$1);
if(temp__4126__auto__){
var s__25343__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25343__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25343__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25345 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25344 = (0);
while(true){
if((i__25344 < size__16884__auto__)){
var moved_in_new = cljs.core._nth.call(null,c__16883__auto__,i__25344);
cljs.core.chunk_append.call(null,b__25345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),moved_in_new], null));

var G__25368 = (i__25344 + (1));
i__25344 = G__25368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25345),iter__25342.call(null,cljs.core.chunk_rest.call(null,s__25343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25345),null);
}
} else {
var moved_in_new = cljs.core.first.call(null,s__25343__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),moved_in_new], null),iter__25342.call(null,cljs.core.rest.call(null,s__25343__$2)));
}
} else {
return null;
}
break;
}
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
,null,null));
});})(res__$1,displaced_olds__$1,displaced_news__$1,G__25306__$1,G__25307__$1,vec__25337,moved_in_news,still_displaced_news,res__$2,displaced_olds__$2,displaced_news__$2,vec__25310,old_el__$1,more_olds__$1,olds__$2,vec__25311,new_el__$1,more_news__$1,news__$2,res,displaced_olds,displaced_news,G__25306,vec__25308,old_el,more_olds,olds__$1,G__25307,vec__25309,new_el,more_news,news__$1))
;
return iter__16885__auto__.call(null,moved_in_news);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kept","kept",1300991554),old_el__$1], null)], null));
var G__25363 = cljs.core.PersistentVector.EMPTY;
var G__25364 = cljs.core.rest.call(null,still_displaced_news);
var G__25365 = more_olds__$1;
var G__25366 = news__$2;
res__$1 = G__25362;
displaced_olds__$1 = G__25363;
displaced_news__$1 = G__25364;
G__25306__$1 = G__25365;
G__25307__$1 = G__25366;
continue;
} else {
if(cljs.core.not_EQ_.call(null,old_el__$1,new_el__$1)){
var G__25369 = res__$2;
var G__25370 = cljs.core.concat.call(null,displaced_olds__$2,((cljs.core.seq.call(null,olds__$2))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_el__$1], null):null));
var G__25371 = cljs.core.concat.call(null,displaced_news__$2,((cljs.core.seq.call(null,news__$2))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_el__$1], null):null));
var G__25372 = more_olds__$1;
var G__25373 = more_news__$1;
res__$1 = G__25369;
displaced_olds__$1 = G__25370;
displaced_news__$1 = G__25371;
G__25306__$1 = G__25372;
G__25307__$1 = G__25373;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
flow.dom.diff.vector_diff = (function vector_diff(olds,news){
if(flow.dom.diff.to_diff_QMARK_.call(null,olds,news)){
return flow.dom.diff.do_diff.call(null,olds,news);
} else {
return cljs.core.concat.call(null,(function (){var iter__16885__auto__ = (function iter__25382(s__25383){
return (new cljs.core.LazySeq(null,(function (){
var s__25383__$1 = s__25383;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25383__$1);
if(temp__4126__auto__){
var s__25383__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25383__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25383__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25385 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25384 = (0);
while(true){
if((i__25384 < size__16884__auto__)){
var old_el = cljs.core._nth.call(null,c__16883__auto__,i__25384);
cljs.core.chunk_append.call(null,b__25385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),old_el], null));

var G__25390 = (i__25384 + (1));
i__25384 = G__25390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25385),iter__25382.call(null,cljs.core.chunk_rest.call(null,s__25383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25385),null);
}
} else {
var old_el = cljs.core.first.call(null,s__25383__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-out","moved-out",-540663928),old_el], null),iter__25382.call(null,cljs.core.rest.call(null,s__25383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,olds);
})(),(function (){var iter__16885__auto__ = (function iter__25386(s__25387){
return (new cljs.core.LazySeq(null,(function (){
var s__25387__$1 = s__25387;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25387__$1);
if(temp__4126__auto__){
var s__25387__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25387__$2)){
var c__16883__auto__ = cljs.core.chunk_first.call(null,s__25387__$2);
var size__16884__auto__ = cljs.core.count.call(null,c__16883__auto__);
var b__25389 = cljs.core.chunk_buffer.call(null,size__16884__auto__);
if((function (){var i__25388 = (0);
while(true){
if((i__25388 < size__16884__auto__)){
var new_el = cljs.core._nth.call(null,c__16883__auto__,i__25388);
cljs.core.chunk_append.call(null,b__25389,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),new_el], null));

var G__25391 = (i__25388 + (1));
i__25388 = G__25391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25389),iter__25386.call(null,cljs.core.chunk_rest.call(null,s__25387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25389),null);
}
} else {
var new_el = cljs.core.first.call(null,s__25387__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moved-in","moved-in",-1556564364),new_el], null),iter__25386.call(null,cljs.core.rest.call(null,s__25387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16885__auto__.call(null,news);
})());
}
});

//# sourceMappingURL=diff.js.map?rel=1442373854527