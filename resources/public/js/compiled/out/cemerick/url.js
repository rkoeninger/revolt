// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('pathetic.core');
cemerick.url.url_encode = (function url_encode(string){
var G__21210 = string;
var G__21210__$1 = (((G__21210 == null))?null:[cljs.core.str(G__21210)].join(''));
var G__21210__$2 = (((G__21210__$1 == null))?null:encodeURIComponent(G__21210__$1));
var G__21210__$3 = (((G__21210__$2 == null))?null:G__21210__$2.replace("+","%20"));
return G__21210__$3;
});
cemerick.url.url_decode = (function url_decode(string){
var G__21212 = string;
var G__21212__$1 = (((G__21212 == null))?null:[cljs.core.str(G__21212)].join(''));
var G__21212__$2 = (((G__21212__$1 == null))?null:decodeURIComponent(G__21212__$1));
return G__21212__$2;
});
cemerick.url.map__GT_query = (function map__GT_query(m){
var G__21216 = cljs.core.seq.call(null,m);
var G__21216__$1 = (((G__21216 == null))?null:cljs.core.sort.call(null,G__21216));
var G__21216__$2 = (((G__21216__$1 == null))?null:cljs.core.map.call(null,((function (G__21216,G__21216__$1){
return (function (p__21217){
var vec__21218 = p__21217;
var k = cljs.core.nth.call(null,vec__21218,(0),null);
var v = cljs.core.nth.call(null,vec__21218,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str(v)].join(''))], null);
});})(G__21216,G__21216__$1))
,G__21216__$1));
var G__21216__$3 = (((G__21216__$2 == null))?null:cljs.core.interpose.call(null,"&",G__21216__$2));
var G__21216__$4 = (((G__21216__$3 == null))?null:cljs.core.flatten.call(null,G__21216__$3));
var G__21216__$5 = (((G__21216__$4 == null))?null:cljs.core.apply.call(null,cljs.core.str,G__21216__$4));
return G__21216__$5;
});
cemerick.url.split_param = (function split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function query__GT_map(qstr){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,qstr))){
var G__21220 = clojure.string.split.call(null,qstr,/&/);
var G__21220__$1 = (((G__21220 == null))?null:cljs.core.seq.call(null,G__21220));
var G__21220__$2 = (((G__21220__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__21220__$1));
var G__21220__$3 = (((G__21220__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__21220__$2));
var G__21220__$4 = (((G__21220__$3 == null))?null:cljs.core.apply.call(null,cljs.core.hash_map,G__21220__$3));
return G__21220__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
* @param {*} protocol
* @param {*} username
* @param {*} password
* @param {*} host
* @param {*} port
* @param {*} path
* @param {*} query
* @param {*} anchor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq.call(null,self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16732__auto__,k__16733__auto__){
var self__ = this;
var this__16732__auto____$1 = this;
return cljs.core._lookup.call(null,this__16732__auto____$1,k__16733__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16734__auto__,k21222,else__16735__auto__){
var self__ = this;
var this__16734__auto____$1 = this;
var G__21224 = (((k21222 instanceof cljs.core.Keyword))?k21222.fqn:null);
switch (G__21224) {
case "anchor":
return self__.anchor;

break;
case "query":
return self__.query;

break;
case "path":
return self__.path;

break;
case "port":
return self__.port;

break;
case "host":
return self__.host;

break;
case "password":
return self__.password;

break;
case "username":
return self__.username;

break;
case "protocol":
return self__.protocol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21222,else__16735__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16746__auto__,writer__16747__auto__,opts__16748__auto__){
var self__ = this;
var this__16746__auto____$1 = this;
var pr_pair__16749__auto__ = ((function (this__16746__auto____$1){
return (function (keyval__16750__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16747__auto__,cljs.core.pr_writer,""," ","",opts__16748__auto__,keyval__16750__auto__);
});})(this__16746__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16747__auto__,pr_pair__16749__auto__,"#cemerick.url.URL{",", ","}",opts__16748__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16730__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16726__auto__){
var self__ = this;
var this__16726__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16736__auto__){
var self__ = this;
var this__16736__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16727__auto__){
var self__ = this;
var this__16727__auto____$1 = this;
var h__16550__auto__ = self__.__hash;
if(!((h__16550__auto__ == null))){
return h__16550__auto__;
} else {
var h__16550__auto____$1 = cljs.core.hash_imap.call(null,this__16727__auto____$1);
self__.__hash = h__16550__auto____$1;

return h__16550__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16728__auto__,other__16729__auto__){
var self__ = this;
var this__16728__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16117__auto__ = other__16729__auto__;
if(cljs.core.truth_(and__16117__auto__)){
return ((this__16728__auto____$1.constructor === other__16729__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__16728__auto____$1,other__16729__auto__));
} else {
return and__16117__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16741__auto__,k__16742__auto__){
var self__ = this;
var this__16741__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__16742__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16741__auto____$1),self__.__meta),k__16742__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16742__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16739__auto__,k__16740__auto__,G__21221){
var self__ = this;
var this__16739__auto____$1 = this;
var pred__21225 = cljs.core.keyword_identical_QMARK_;
var expr__21226 = k__16740__auto__;
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__21226))){
return (new cemerick.url.URL(G__21221,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__21226))){
return (new cemerick.url.URL(self__.protocol,G__21221,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__21221,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__21221,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__21221,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__21221,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__21221,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21225.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__21226))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__21221,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16740__auto__,G__21221),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16744__auto__){
var self__ = this;
var this__16744__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16731__auto__,G__21221){
var self__ = this;
var this__16731__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__21221,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16737__auto__,entry__16738__auto__){
var self__ = this;
var this__16737__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16738__auto__)){
return cljs.core._assoc.call(null,this__16737__auto____$1,cljs.core._nth.call(null,entry__16738__auto__,(0)),cljs.core._nth.call(null,entry__16738__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16737__auto____$1,entry__16738__auto__);
}
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__16766__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__16766__auto__,writer__16767__auto__){
return cljs.core._write.call(null,writer__16767__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function __GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function map__GT_URL(G__21223){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__21223),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__21223),null,cljs.core.dissoc.call(null,G__21223,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)),null));
});

cemerick.url.translate_default = (function translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__21230 = clojure.string.split.call(null,(function (){var or__16129__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__16129__auto__)){
return or__16129__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__21230,(0),null);
var pass = cljs.core.nth.call(null,vec__21230,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__16117__auto__ = cljs.core.seq.call(null,user);
if(and__16117__auto__){
return user;
} else {
return and__16117__auto__;
}
})(),(function (){var and__16117__auto__ = cljs.core.seq.call(null,pass);
if(and__16117__auto__){
return pass;
} else {
return and__16117__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
* Returns a new URL record for the given url string(s).
* 
* The first argument must be a base url — either a complete url string, or
* a pre-existing URL record instance that will serve as the basis for the new
* URL.  Any additional arguments must be strings, which are interpreted as
* relative paths that are successively resolved against the base url's path
* to construct the final :path in the returned URL record.
* 
* This function does not perform any url-encoding.  Use `url-encode` to encode
* URL path segments as desired before passing them into this fn.
* @param {...*} var_args
*/
cemerick.url.url = (function() {
var url = null;
var url__1 = (function (url__$1){
if((url__$1 instanceof cemerick.url.URL)){
return url__$1;
} else {
return cemerick.url.url_STAR_.call(null,url__$1);
}
});
var url__2 = (function() { 
var G__21231__delegate = function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
};
var G__21231 = function (base_url,var_args){
var path_segments = null;
if (arguments.length > 1) {
var G__21232__i = 0, G__21232__a = new Array(arguments.length -  1);
while (G__21232__i < G__21232__a.length) {G__21232__a[G__21232__i] = arguments[G__21232__i + 1]; ++G__21232__i;}
  path_segments = new cljs.core.IndexedSeq(G__21232__a,0);
} 
return G__21231__delegate.call(this,base_url,path_segments);};
G__21231.cljs$lang$maxFixedArity = 1;
G__21231.cljs$lang$applyTo = (function (arglist__21233){
var base_url = cljs.core.first(arglist__21233);
var path_segments = cljs.core.rest(arglist__21233);
return G__21231__delegate(base_url,path_segments);
});
G__21231.cljs$core$IFn$_invoke$arity$variadic = G__21231__delegate;
return G__21231;
})()
;
url = function(base_url,var_args){
var path_segments = var_args;
switch(arguments.length){
case 1:
return url__1.call(this,base_url);
default:
var G__21234 = null;
if (arguments.length > 1) {
var G__21235__i = 0, G__21235__a = new Array(arguments.length -  1);
while (G__21235__i < G__21235__a.length) {G__21235__a[G__21235__i] = arguments[G__21235__i + 1]; ++G__21235__i;}
G__21234 = new cljs.core.IndexedSeq(G__21235__a,0);
}
return url__2.cljs$core$IFn$_invoke$arity$variadic(base_url, G__21234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url.cljs$lang$maxFixedArity = 1;
url.cljs$lang$applyTo = url__2.cljs$lang$applyTo;
url.cljs$core$IFn$_invoke$arity$1 = url__1;
url.cljs$core$IFn$_invoke$arity$variadic = url__2.cljs$core$IFn$_invoke$arity$variadic;
return url;
})()
;

//# sourceMappingURL=url.js.map?rel=1442373574260