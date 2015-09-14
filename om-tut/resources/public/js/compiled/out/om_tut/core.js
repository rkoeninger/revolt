// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
om_tut.core.languages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"us","us",746429226),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Printer","Figure","Mercenary","Blackmail","Viceroy","Force","General","Captain","Messenger","Spy","Support","Town Hall","Sign Up","Submit","Constable","Fortress","Rogue","Priest","All tokens must be used.","Start Game","Harbor","Gold","Cathedral","Mayor","Innkeeper","Apothecary","Player","Market","Magistrate","Add","No more than six figures can be bid on.","Merchant","Palace","Tavern","Aristocrat","Clear"]),new cljs.core.Keyword(null,"mx","mx",-199887020),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantaci\u00F3n","Impresor","Persona","Mercenario","Chantaje","Virrey","Fuerza","General","Capit\u00E1n","Mensajero","Esp\u00EDa","Apoyo","Ayuntamiento","Contratar","Entregar","Alguacil","Fortaleza","P\u00EDcaro","Sacerdote","Todas las fichas deben utilizarse.","Puerto","Oro","Catedral","Alcalde","Posadero","Boticario","Jugador","Mercado","Magistrado","A\u00F1adir","No m\u00E1s de seis cifras pueden pujar por.","Comerciante","Palacio","Taberna","Arist\u00F3crata","Despejar"]),new cljs.core.Keyword(null,"fr","fr",1577713888),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Imprimante","Personnage","Mercenaire","Chantage","Vice-roi","Force","G\u00E9n\u00E9ral","Capitaine","Messager","Espion","Appui","Mairie","Signer","Soumettre","Gendarme","Forteresse","Coquin","Pr\u00EAtre","Tous les jetons doivent \u00EAtre utilis\u00E9s.","Port","Or","Cath\u00E9drale","Maire","Aubergiste","Apothicaire","Joueur","March\u00E9","Magistrat","Ajouter","Pas plus de six chiffres peuvent \u00EAtre ench\u00E9rir sur.","Commer\u00E7ant","Palais","Taverne","Aristocrate","D\u00E9barrasser"])], null);
om_tut.core.bid0 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null);
om_tut.core.figures = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null)], null);
om_tut.core.ps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rob","Joe","Moe"], null);
om_tut.core.locs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"palace","palace",-1827494949)], null);
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"bank","bank",-1982531798),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"reassignments","reassignments",945581004),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"original-bank","original-bank",-952771138)],[cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),om_tut.core.figures),cljs.core.repeat.call(null,om_tut.core.bid0)),cljs.core.zipmap.call(null,om_tut.core.ps,cljs.core.repeat.call(null,(0))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null),new cljs.core.Keyword(null,"signup","signup",1961016747),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"us","us",746429226),om_tut.core.locs,om_tut.core.ps,cljs.core.zipmap.call(null,om_tut.core.locs,cljs.core.repeat.call(null,cljs.core.zipmap.call(null,om_tut.core.ps,cljs.core.repeat.call(null,(0))))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null)]));
}
om_tut.core.localize = (function localize(data,key){
var or__16142__auto__ = cljs.core.get_in.call(null,om_tut.core.languages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(data),key], null));
if(cljs.core.truth_(or__16142__auto__)){
return or__16142__auto__;
} else {
var or__16142__auto____$1 = cljs.core.get_in.call(null,om_tut.core.languages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",746429226),key], null));
if(cljs.core.truth_(or__16142__auto____$1)){
return or__16142__auto____$1;
} else {
return cljs.core.name.call(null,key);
}
}
});
om_tut.core.adjust_bid = (function adjust_bid(data,id,denomination,adj){
var bid_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)) + adj);
var bank_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null)) - adj);
if(((bank_denom_adjusted >= (0))) && ((bid_denom_adjusted >= (0)))){
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__48348_SHARP_){
return (p1__48348_SHARP_ - adj);
});})(bid_denom_adjusted,bank_denom_adjusted))
);

return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__48349_SHARP_){
return (p1__48349_SHARP_ + adj);
});})(bid_denom_adjusted,bank_denom_adjusted))
);
} else {
return null;
}
});
om_tut.core.dont_show_zero = (function dont_show_zero(x){
if((x === (0))){
return "";
} else {
return x;
}
});
om_tut.core.denomination_remaining_QMARK_ = (function denomination_remaining_QMARK_(data,denomination){
return (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null)) > (0));
});
om_tut.core.pos_bid_QMARK_ = (function pos_bid_QMARK_(bid){
return ((new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(bid) > (0))) || ((new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077).cljs$core$IFn$_invoke$arity$1(bid) > (0))) || ((new cljs.core.Keyword(null,"force","force",781957286).cljs$core$IFn$_invoke$arity$1(bid) > (0)));
});
om_tut.core.nothing_on_figure_QMARK_ = (function nothing_on_figure_QMARK_(data,id){
return !(om_tut.core.pos_bid_QMARK_.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id], null))));
});
om_tut.core.figure_limit_reached_QMARK_ = (function figure_limit_reached_QMARK_(data){
return (cljs.core.count.call(null,cljs.core.filter.call(null,om_tut.core.pos_bid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(data)))) >= (6));
});
om_tut.core.denomination_input = (function denomination_input(data,id,immunities,denomination){
var immune = cljs.core.contains_QMARK_.call(null,immunities,denomination);
var amount = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null));
return React.DOM.td(null,React.DOM.button({"onClick": ((function (immune,amount){
return (function (){
return om_tut.core.adjust_bid.call(null,data,id,denomination,(1));
});})(immune,amount))
, "disabled": (immune) || (!(om_tut.core.denomination_remaining_QMARK_.call(null,data,denomination))) || ((om_tut.core.nothing_on_figure_QMARK_.call(null,data,id)) && (om_tut.core.figure_limit_reached_QMARK_.call(null,data)))},"\u2191"),React.DOM.button({"onClick": ((function (immune,amount){
return (function (){
return om_tut.core.adjust_bid.call(null,data,id,denomination,(-1));
});})(immune,amount))
, "disabled": (immune) || (cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)))) || ((om_tut.core.nothing_on_figure_QMARK_.call(null,data,id)) && (om_tut.core.figure_limit_reached_QMARK_.call(null,data)))},"\u2193"),om.dom.input.call(null,{"value": om_tut.core.dont_show_zero.call(null,amount), "id": [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "disabled": immune, "type": "text"}));
});
om_tut.core.immunity_class = new cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentHashSet.EMPTY,"immunity-none",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null),"immunity-blackmail",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-force",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-both"], true, false);
om_tut.core.bid_row = (function bid_row(data,owner,p__48350){
var map__48355 = p__48350;
var map__48355__$1 = ((cljs.core.seq_QMARK_.call(null,map__48355))?cljs.core.apply.call(null,cljs.core.hash_map,map__48355):map__48355);
var immunities = cljs.core.get.call(null,map__48355__$1,new cljs.core.Keyword(null,"immunities","immunities",1511351521));
var id = cljs.core.get.call(null,map__48355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof om_tut.core.t48356 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48356 = (function (id,immunities,map__48355,p__48350,owner,data,bid_row,meta48357){
this.id = id;
this.immunities = immunities;
this.map__48355 = map__48355;
this.p__48350 = p__48350;
this.owner = owner;
this.data = data;
this.bid_row = bid_row;
this.meta48357 = meta48357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48356.prototype.om$core$IRender$ = true;

om_tut.core.t48356.prototype.om$core$IRender$render$arity$1 = ((function (map__48355,map__48355__$1,immunities,id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td({"className": [cljs.core.str("figure-name "),cljs.core.str(cljs.core.get.call(null,om_tut.core.immunity_class,self__.immunities))].join('')},om_tut.core.localize.call(null,self__.data,self__.id)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"gold","gold",-806826416)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"force","force",781957286)));
});})(map__48355,map__48355__$1,immunities,id))
;

om_tut.core.t48356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48355,map__48355__$1,immunities,id){
return (function (_48358){
var self__ = this;
var _48358__$1 = this;
return self__.meta48357;
});})(map__48355,map__48355__$1,immunities,id))
;

om_tut.core.t48356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48355,map__48355__$1,immunities,id){
return (function (_48358,meta48357__$1){
var self__ = this;
var _48358__$1 = this;
return (new om_tut.core.t48356(self__.id,self__.immunities,self__.map__48355,self__.p__48350,self__.owner,self__.data,self__.bid_row,meta48357__$1));
});})(map__48355,map__48355__$1,immunities,id))
;

om_tut.core.t48356.cljs$lang$type = true;

om_tut.core.t48356.cljs$lang$ctorStr = "om-tut.core/t48356";

om_tut.core.t48356.cljs$lang$ctorPrWriter = ((function (map__48355,map__48355__$1,immunities,id){
return (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48356");
});})(map__48355,map__48355__$1,immunities,id))
;

om_tut.core.__GT_t48356 = ((function (map__48355,map__48355__$1,immunities,id){
return (function __GT_t48356(id__$1,immunities__$1,map__48355__$2,p__48350__$1,owner__$1,data__$1,bid_row__$1,meta48357){
return (new om_tut.core.t48356(id__$1,immunities__$1,map__48355__$2,p__48350__$1,owner__$1,data__$1,bid_row__$1,meta48357));
});})(map__48355,map__48355__$1,immunities,id))
;

}

return (new om_tut.core.t48356(id,immunities,map__48355__$1,p__48350,owner,data,bid_row,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bid_area = (function bid_area(data,owner){
if(typeof om_tut.core.t48363 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48363 = (function (owner,data,bid_area,meta48364){
this.owner = owner;
this.data = data;
this.bid_area = bid_area;
this.meta48364 = meta48364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48363.prototype.om$core$IRender$ = true;

om_tut.core.t48363.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"figure","figure",-561394079))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p1__48359_SHARP_){
return om.core.build.call(null,om_tut.core.bid_row,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),p1__48359_SHARP_], null));
});})(this$__$1))
,om_tut.core.figures));
});

om_tut.core.t48363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48365){
var self__ = this;
var _48365__$1 = this;
return self__.meta48364;
});

om_tut.core.t48363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48365,meta48364__$1){
var self__ = this;
var _48365__$1 = this;
return (new om_tut.core.t48363(self__.owner,self__.data,self__.bid_area,meta48364__$1));
});

om_tut.core.t48363.cljs$lang$type = true;

om_tut.core.t48363.cljs$lang$ctorStr = "om-tut.core/t48363";

om_tut.core.t48363.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48363");
});

om_tut.core.__GT_t48363 = (function __GT_t48363(owner__$1,data__$1,bid_area__$1,meta48364){
return (new om_tut.core.t48363(owner__$1,data__$1,bid_area__$1,meta48364));
});

}

return (new om_tut.core.t48363(owner,data,bid_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bank_denomination = (function bank_denomination(data,denomination){
var remaining = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null));
var total = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"original-bank","original-bank",-952771138),denomination], null));
return om.dom.input.call(null,{"value": [cljs.core.str(remaining),cljs.core.str("/"),cljs.core.str(total)].join(''), "id": [cljs.core.str("bank-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "type": "text"});
});
om_tut.core.tokens_remaining_QMARK_ = (function tokens_remaining_QMARK_(data){
return om_tut.core.pos_bid_QMARK_.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(data));
});
om_tut.core.too_many_figures_QMARK_ = (function too_many_figures_QMARK_(data){
return ((6) < cljs.core.count.call(null,cljs.core.filter.call(null,om_tut.core.pos_bid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(data)))));
});
om_tut.core.submit_button = (function submit_button(data,owner){
if(typeof om_tut.core.t48369 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48369 = (function (owner,data,submit_button,meta48370){
this.owner = owner;
this.data = data;
this.submit_button = submit_button;
this.meta48370 = meta48370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48369.prototype.om$core$IRender$ = true;

om_tut.core.t48369.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return cljs.core.println.call(null,"submitting...");
});})(this$__$1))
, "disabled": (om_tut.core.tokens_remaining_QMARK_.call(null,self__.data)) || (om_tut.core.too_many_figures_QMARK_.call(null,self__.data))},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317)));
});

om_tut.core.t48369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48371){
var self__ = this;
var _48371__$1 = this;
return self__.meta48370;
});

om_tut.core.t48369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48371,meta48370__$1){
var self__ = this;
var _48371__$1 = this;
return (new om_tut.core.t48369(self__.owner,self__.data,self__.submit_button,meta48370__$1));
});

om_tut.core.t48369.cljs$lang$type = true;

om_tut.core.t48369.cljs$lang$ctorStr = "om-tut.core/t48369";

om_tut.core.t48369.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48369");
});

om_tut.core.__GT_t48369 = (function __GT_t48369(owner__$1,data__$1,submit_button__$1,meta48370){
return (new om_tut.core.t48369(owner__$1,data__$1,submit_button__$1,meta48370));
});

}

return (new om_tut.core.t48369(owner,data,submit_button,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.error_label = (function error_label(data,owner){
if(typeof om_tut.core.t48375 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48375 = (function (owner,data,error_label,meta48376){
this.owner = owner;
this.data = data;
this.error_label = error_label;
this.meta48376 = meta48376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48375.prototype.om$core$IRender$ = true;

om_tut.core.t48375.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.span({"className": (((om_tut.core.tokens_remaining_QMARK_.call(null,self__.data)) || (om_tut.core.too_many_figures_QMARK_.call(null,self__.data)))?"error-label":"hide")},((om_tut.core.tokens_remaining_QMARK_.call(null,self__.data))?om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183)):((om_tut.core.too_many_figures_QMARK_.call(null,self__.data))?om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443)):""
)));
});

om_tut.core.t48375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48377){
var self__ = this;
var _48377__$1 = this;
return self__.meta48376;
});

om_tut.core.t48375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48377,meta48376__$1){
var self__ = this;
var _48377__$1 = this;
return (new om_tut.core.t48375(self__.owner,self__.data,self__.error_label,meta48376__$1));
});

om_tut.core.t48375.cljs$lang$type = true;

om_tut.core.t48375.cljs$lang$ctorStr = "om-tut.core/t48375";

om_tut.core.t48375.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48375");
});

om_tut.core.__GT_t48375 = (function __GT_t48375(owner__$1,data__$1,error_label__$1,meta48376){
return (new om_tut.core.t48375(owner__$1,data__$1,error_label__$1,meta48376));
});

}

return (new om_tut.core.t48375(owner,data,error_label,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bank_area = (function bank_area(data,owner){
if(typeof om_tut.core.t48381 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48381 = (function (owner,data,bank_area,meta48382){
this.owner = owner;
this.data = data;
this.bank_area = bank_area;
this.meta48382 = meta48382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48381.prototype.om$core$IRender$ = true;

om_tut.core.t48381.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416)),om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416)),om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)),om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)),om.core.build.call(null,om_tut.core.submit_button,self__.data),om.core.build.call(null,om_tut.core.error_label,self__.data));
});

om_tut.core.t48381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48383){
var self__ = this;
var _48383__$1 = this;
return self__.meta48382;
});

om_tut.core.t48381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48383,meta48382__$1){
var self__ = this;
var _48383__$1 = this;
return (new om_tut.core.t48381(self__.owner,self__.data,self__.bank_area,meta48382__$1));
});

om_tut.core.t48381.cljs$lang$type = true;

om_tut.core.t48381.cljs$lang$ctorStr = "om-tut.core/t48381";

om_tut.core.t48381.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48381");
});

om_tut.core.__GT_t48381 = (function __GT_t48381(owner__$1,data__$1,bank_area__$1,meta48382){
return (new om_tut.core.t48381(owner__$1,data__$1,bank_area__$1,meta48382));
});

}

return (new om_tut.core.t48381(owner,data,bank_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.map_area = (function map_area(data,owner){
if(typeof om_tut.core.t48387 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48387 = (function (owner,data,map_area,meta48388){
this.owner = owner;
this.data = data;
this.map_area = map_area;
this.meta48388 = meta48388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48387.prototype.om$core$IRender$ = true;

om_tut.core.t48387.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,location)),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),location,p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t48387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48389){
var self__ = this;
var _48389__$1 = this;
return self__.meta48388;
});

om_tut.core.t48387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48389,meta48388__$1){
var self__ = this;
var _48389__$1 = this;
return (new om_tut.core.t48387(self__.owner,self__.data,self__.map_area,meta48388__$1));
});

om_tut.core.t48387.cljs$lang$type = true;

om_tut.core.t48387.cljs$lang$ctorStr = "om-tut.core/t48387";

om_tut.core.t48387.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48387");
});

om_tut.core.__GT_t48387 = (function __GT_t48387(owner__$1,data__$1,map_area__$1,meta48388){
return (new om_tut.core.t48387(owner__$1,data__$1,map_area__$1,meta48388));
});

}

return (new om_tut.core.t48387(owner,data,map_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.support_area = (function support_area(data,owner){
if(typeof om_tut.core.t48393 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48393 = (function (owner,data,support_area,meta48394){
this.owner = owner;
this.data = data;
this.support_area = support_area;
this.meta48394 = meta48394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48393.prototype.om$core$IRender$ = true;

om_tut.core.t48393.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"player","player",-97687400))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"support","support",1392531368)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.tr(null,React.DOM.td(null,p),React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"support","support",1392531368),p], null))));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t48393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48395){
var self__ = this;
var _48395__$1 = this;
return self__.meta48394;
});

om_tut.core.t48393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48395,meta48394__$1){
var self__ = this;
var _48395__$1 = this;
return (new om_tut.core.t48393(self__.owner,self__.data,self__.support_area,meta48394__$1));
});

om_tut.core.t48393.cljs$lang$type = true;

om_tut.core.t48393.cljs$lang$ctorStr = "om-tut.core/t48393";

om_tut.core.t48393.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48393");
});

om_tut.core.__GT_t48393 = (function __GT_t48393(owner__$1,data__$1,support_area__$1,meta48394){
return (new om_tut.core.t48393(owner__$1,data__$1,support_area__$1,meta48394));
});

}

return (new om_tut.core.t48393(owner,data,support_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.language_flag = (function language_flag(data,title,key){
return React.DOM.img({"onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"lang","lang",-1819677104),key);
}), "className": "language-flag", "title": title, "src": [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,key)),cljs.core.str(".png")].join('')});
});
om_tut.core.languages_area = (function languages_area(data,owner){
if(typeof om_tut.core.t48399 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48399 = (function (owner,data,languages_area,meta48400){
this.owner = owner;
this.data = data;
this.languages_area = languages_area;
this.meta48400 = meta48400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48399.prototype.om$core$IRender$ = true;

om_tut.core.t48399.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om_tut.core.language_flag.call(null,self__.data,"English",new cljs.core.Keyword(null,"us","us",746429226)),om_tut.core.language_flag.call(null,self__.data,"Spanish",new cljs.core.Keyword(null,"mx","mx",-199887020)),om_tut.core.language_flag.call(null,self__.data,"French",new cljs.core.Keyword(null,"fr","fr",1577713888)));
});

om_tut.core.t48399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48401){
var self__ = this;
var _48401__$1 = this;
return self__.meta48400;
});

om_tut.core.t48399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48401,meta48400__$1){
var self__ = this;
var _48401__$1 = this;
return (new om_tut.core.t48399(self__.owner,self__.data,self__.languages_area,meta48400__$1));
});

om_tut.core.t48399.cljs$lang$type = true;

om_tut.core.t48399.cljs$lang$ctorStr = "om-tut.core/t48399";

om_tut.core.t48399.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48399");
});

om_tut.core.__GT_t48399 = (function __GT_t48399(owner__$1,data__$1,languages_area__$1,meta48400){
return (new om_tut.core.t48399(owner__$1,data__$1,languages_area__$1,meta48400));
});

}

return (new om_tut.core.t48399(owner,data,languages_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.signup_area = (function signup_area(data,owner){
if(typeof om_tut.core.t48405 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48405 = (function (owner,data,signup_area,meta48406){
this.owner = owner;
this.data = data;
this.signup_area = signup_area;
this.meta48406 = meta48406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48405.prototype.om$core$IRender$ = true;

om_tut.core.t48405.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,null),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"signup","signup",1961016747))));
});

om_tut.core.t48405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48407){
var self__ = this;
var _48407__$1 = this;
return self__.meta48406;
});

om_tut.core.t48405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48407,meta48406__$1){
var self__ = this;
var _48407__$1 = this;
return (new om_tut.core.t48405(self__.owner,self__.data,self__.signup_area,meta48406__$1));
});

om_tut.core.t48405.cljs$lang$type = true;

om_tut.core.t48405.cljs$lang$ctorStr = "om-tut.core/t48405";

om_tut.core.t48405.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48405");
});

om_tut.core.__GT_t48405 = (function __GT_t48405(owner__$1,data__$1,signup_area__$1,meta48406){
return (new om_tut.core.t48405(owner__$1,data__$1,signup_area__$1,meta48406));
});

}

return (new om_tut.core.t48405(owner,data,signup_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.spy_select = (function spy_select(data,owner){
if(typeof om_tut.core.t48411 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48411 = (function (owner,data,spy_select,meta48412){
this.owner = owner;
this.data = data;
this.spy_select = spy_select;
this.meta48412 = meta48412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48411.prototype.om$core$IRender$ = true;

om_tut.core.t48411.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection = new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection,this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,location)),cljs.core.map.call(null,((function (selection,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,p], null);
var selected = cljs.core._EQ_.call(null,combo,selection);
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),combo);
});})(combo,selected,selection,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),location,p], null))));
});})(selection,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),null);
});})(selection,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_(selection)?React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

om_tut.core.t48411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48413){
var self__ = this;
var _48413__$1 = this;
return self__.meta48412;
});

om_tut.core.t48411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48413,meta48412__$1){
var self__ = this;
var _48413__$1 = this;
return (new om_tut.core.t48411(self__.owner,self__.data,self__.spy_select,meta48412__$1));
});

om_tut.core.t48411.cljs$lang$type = true;

om_tut.core.t48411.cljs$lang$ctorStr = "om-tut.core/t48411";

om_tut.core.t48411.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48411");
});

om_tut.core.__GT_t48411 = (function __GT_t48411(owner__$1,data__$1,spy_select__$1,meta48412){
return (new om_tut.core.t48411(owner__$1,data__$1,spy_select__$1,meta48412));
});

}

return (new om_tut.core.t48411(owner,data,spy_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.apothecary_select = (function apothecary_select(data,owner){
if(typeof om_tut.core.t48417 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48417 = (function (owner,data,apothecary_select,meta48418){
this.owner = owner;
this.data = data;
this.apothecary_select = apothecary_select;
this.meta48418 = meta48418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48417.prototype.om$core$IRender$ = true;

om_tut.core.t48417.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection_1 = new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection_1,selection_2,this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,location)),cljs.core.map.call(null,((function (selection_1,selection_2,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,p], null);
var selected = (cljs.core._EQ_.call(null,combo,selection_1)) || (cljs.core._EQ_.call(null,combo,selection_2));
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),combo);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),combo);
}
});})(combo,selected,selection_1,selection_2,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),location,p], null))));
});})(selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),null);
});})(selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_((function (){var and__16130__auto__ = selection_1;
if(cljs.core.truth_(and__16130__auto__)){
return selection_2;
} else {
return and__16130__auto__;
}
})())?React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

om_tut.core.t48417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48419){
var self__ = this;
var _48419__$1 = this;
return self__.meta48418;
});

om_tut.core.t48417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48419,meta48418__$1){
var self__ = this;
var _48419__$1 = this;
return (new om_tut.core.t48417(self__.owner,self__.data,self__.apothecary_select,meta48418__$1));
});

om_tut.core.t48417.cljs$lang$type = true;

om_tut.core.t48417.cljs$lang$ctorStr = "om-tut.core/t48417";

om_tut.core.t48417.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48417");
});

om_tut.core.__GT_t48417 = (function __GT_t48417(owner__$1,data__$1,apothecary_select__$1,meta48418){
return (new om_tut.core.t48417(owner__$1,data__$1,apothecary_select__$1,meta48418));
});

}

return (new om_tut.core.t48417(owner,data,apothecary_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.messenger_select = (function messenger_select(data,owner){
if(typeof om_tut.core.t48425 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48425 = (function (owner,data,messenger_select,meta48426){
this.owner = owner;
this.data = data;
this.messenger_select = messenger_select;
this.meta48426 = meta48426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48425.prototype.om$core$IRender$ = true;

om_tut.core.t48425.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var reassignments = new cljs.core.Keyword(null,"reassignments","reassignments",945581004).cljs$core$IFn$_invoke$arity$1(self__.data);
var any_reassignments = (cljs.core.count.call(null,reassignments) > (0));
var selection_1 = new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,{"className": (((cljs.core._EQ_.call(null,location,selection_1)) || (cljs.core._EQ_.call(null,location,selection_2)))?"selected":null)},React.DOM.td(null,React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),location);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),location);
}
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,location))),cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (player){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),location,player], null)));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),((any_reassignments)?cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (p__48428){
var vec__48429 = p__48428;
var l1 = cljs.core.nth.call(null,vec__48429,(0),null);
var l2 = cljs.core.nth.call(null,vec__48429,(1),null);
return React.DOM.li(null,[cljs.core.str(om_tut.core.localize.call(null,self__.data,l1)),cljs.core.str(" -> "),cljs.core.str(om_tut.core.localize.call(null,self__.data,l2))].join(''));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,reassignments)):null),React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reassignments","reassignments",945581004),cljs.core.PersistentVector.EMPTY);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),null);
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),((((2) > cljs.core.count.call(null,reassignments)))?React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reassignments","reassignments",945581004),((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (rs){
return cljs.core.conj.call(null,rs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_1,selection_2], null));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),null);
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"add","add",235287739))):null),React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))));
});

om_tut.core.t48425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48427){
var self__ = this;
var _48427__$1 = this;
return self__.meta48426;
});

om_tut.core.t48425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48427,meta48426__$1){
var self__ = this;
var _48427__$1 = this;
return (new om_tut.core.t48425(self__.owner,self__.data,self__.messenger_select,meta48426__$1));
});

om_tut.core.t48425.cljs$lang$type = true;

om_tut.core.t48425.cljs$lang$ctorStr = "om-tut.core/t48425";

om_tut.core.t48425.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48425");
});

om_tut.core.__GT_t48425 = (function __GT_t48425(owner__$1,data__$1,messenger_select__$1,meta48426){
return (new om_tut.core.t48425(owner__$1,data__$1,messenger_select__$1,meta48426));
});

}

return (new om_tut.core.t48425(owner,data,messenger_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.mayor_select = (function mayor_select(data,owner){
if(typeof om_tut.core.t48433 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48433 = (function (owner,data,mayor_select,meta48434){
this.owner = owner;
this.data = data;
this.mayor_select = mayor_select;
this.meta48434 = meta48434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48433.prototype.om$core$IRender$ = true;

om_tut.core.t48433.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},om_tut.core.localize.call(null,self__.data,location))),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),location,p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t48433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48435){
var self__ = this;
var _48435__$1 = this;
return self__.meta48434;
});

om_tut.core.t48433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48435,meta48434__$1){
var self__ = this;
var _48435__$1 = this;
return (new om_tut.core.t48433(self__.owner,self__.data,self__.mayor_select,meta48434__$1));
});

om_tut.core.t48433.cljs$lang$type = true;

om_tut.core.t48433.cljs$lang$ctorStr = "om-tut.core/t48433";

om_tut.core.t48433.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48433");
});

om_tut.core.__GT_t48433 = (function __GT_t48433(owner__$1,data__$1,mayor_select__$1,meta48434){
return (new om_tut.core.t48433(owner__$1,data__$1,mayor_select__$1,meta48434));
});

}

return (new om_tut.core.t48433(owner,data,mayor_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.debug_panel = (function debug_panel(data,owner){
if(typeof om_tut.core.t48439 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48439 = (function (owner,data,debug_panel,meta48440){
this.owner = owner;
this.data = data;
this.debug_panel = debug_panel;
this.meta48440 = meta48440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48439.prototype.om$core$IRender$ = true;

om_tut.core.t48439.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this$__$1){
return (function (m){
return React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),m);
});})(this$__$1))
},cljs.core.name.call(null,m));
});})(this$__$1))
,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"lobby","lobby",1193995861),new cljs.core.Keyword(null,"take-bids","take-bids",612015680),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"mayor","mayor",84933652)], null)));
});

om_tut.core.t48439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48441){
var self__ = this;
var _48441__$1 = this;
return self__.meta48440;
});

om_tut.core.t48439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48441,meta48440__$1){
var self__ = this;
var _48441__$1 = this;
return (new om_tut.core.t48439(self__.owner,self__.data,self__.debug_panel,meta48440__$1));
});

om_tut.core.t48439.cljs$lang$type = true;

om_tut.core.t48439.cljs$lang$ctorStr = "om-tut.core/t48439";

om_tut.core.t48439.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48439");
});

om_tut.core.__GT_t48439 = (function __GT_t48439(owner__$1,data__$1,debug_panel__$1,meta48440){
return (new om_tut.core.t48439(owner__$1,data__$1,debug_panel__$1,meta48440));
});

}

return (new om_tut.core.t48439(owner,data,debug_panel,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.lobby_area = (function lobby_area(data,owner){
if(typeof om_tut.core.t48445 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48445 = (function (owner,data,lobby_area,meta48446){
this.owner = owner;
this.data = data;
this.lobby_area = lobby_area;
this.meta48446 = meta48446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48445.prototype.om$core$IRender$ = true;

om_tut.core.t48445.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"start-game","start-game",115628303))),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.li(null,p);
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

om_tut.core.t48445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48447){
var self__ = this;
var _48447__$1 = this;
return self__.meta48446;
});

om_tut.core.t48445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48447,meta48446__$1){
var self__ = this;
var _48447__$1 = this;
return (new om_tut.core.t48445(self__.owner,self__.data,self__.lobby_area,meta48446__$1));
});

om_tut.core.t48445.cljs$lang$type = true;

om_tut.core.t48445.cljs$lang$ctorStr = "om-tut.core/t48445";

om_tut.core.t48445.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48445");
});

om_tut.core.__GT_t48445 = (function __GT_t48445(owner__$1,data__$1,lobby_area__$1,meta48446){
return (new om_tut.core.t48445(owner__$1,data__$1,lobby_area__$1,meta48446));
});

}

return (new om_tut.core.t48445(owner,data,lobby_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.root_view = (function root_view(data,owner){
if(typeof om_tut.core.t48474 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t48474 = (function (owner,data,root_view,meta48475){
this.owner = owner;
this.data = data;
this.root_view = root_view;
this.meta48475 = meta48475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t48474.prototype.om$core$IRenderState$ = true;

om_tut.core.t48474.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,om.core.build.call(null,om_tut.core.languages_area,self__.data),om.core.build.call(null,om_tut.core.debug_panel,self__.data),(function (){var G__48477 = (((new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__48477) {
case "mayor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.mayor_select,self__.data)], null);

break;
case "messenger":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.messenger_select,self__.data)], null);

break;
case "apothecary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.apothecary_select,self__.data)], null);

break;
case "spy":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.spy_select,self__.data)], null);

break;
case "game-over":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.support_area,self__.data),om.core.build.call(null,om_tut.core.map_area,self__.data)], null);

break;
case "take-bids":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.support_area,self__.data),om.core.build.call(null,om_tut.core.map_area,self__.data),om.core.build.call(null,om_tut.core.bank_area,self__.data),om.core.build.call(null,om_tut.core.bid_area,self__.data)], null);

break;
case "lobby":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.lobby_area,self__.data)], null);

break;
case "signup":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,om_tut.core.signup_area,self__.data)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')));

}
})());
});

om_tut.core.t48474.prototype.om$core$IWillMount$ = true;

om_tut.core.t48474.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__18069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18069__auto__,delete$,___$1){
return (function (){
var f__18070__auto__ = (function (){var switch__18054__auto__ = ((function (c__18069__auto__,delete$,___$1){
return (function (state_48487){
var state_val_48488 = (state_48487[(1)]);
if((state_val_48488 === (4))){
var inst_48480 = (state_48487[(2)]);
var inst_48481 = (function (){var contact = inst_48480;
return ((function (contact,inst_48480,state_val_48488,c__18069__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_48480,state_val_48488,c__18069__auto__,delete$,___$1){
return (function (p1__48448_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__48448_SHARP_);
});})(contact,inst_48480,state_val_48488,c__18069__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_48480,state_val_48488,c__18069__auto__,delete$,___$1))
})();
var inst_48482 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_48481);
var state_48487__$1 = (function (){var statearr_48489 = state_48487;
(statearr_48489[(7)] = inst_48482);

return statearr_48489;
})();
var statearr_48490_48500 = state_48487__$1;
(statearr_48490_48500[(2)] = null);

(statearr_48490_48500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (3))){
var inst_48485 = (state_48487[(2)]);
var state_48487__$1 = state_48487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48487__$1,inst_48485);
} else {
if((state_val_48488 === (2))){
var state_48487__$1 = state_48487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48487__$1,(4),delete$);
} else {
if((state_val_48488 === (1))){
var state_48487__$1 = state_48487;
var statearr_48491_48501 = state_48487__$1;
(statearr_48491_48501[(2)] = null);

(statearr_48491_48501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__18069__auto__,delete$,___$1))
;
return ((function (switch__18054__auto__,c__18069__auto__,delete$,___$1){
return (function() {
var state_machine__18055__auto__ = null;
var state_machine__18055__auto____0 = (function (){
var statearr_48495 = [null,null,null,null,null,null,null,null];
(statearr_48495[(0)] = state_machine__18055__auto__);

(statearr_48495[(1)] = (1));

return statearr_48495;
});
var state_machine__18055__auto____1 = (function (state_48487){
while(true){
var ret_value__18056__auto__ = (function (){try{while(true){
var result__18057__auto__ = switch__18054__auto__.call(null,state_48487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18057__auto__;
}
break;
}
}catch (e48496){if((e48496 instanceof Object)){
var ex__18058__auto__ = e48496;
var statearr_48497_48502 = state_48487;
(statearr_48497_48502[(5)] = ex__18058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48503 = state_48487;
state_48487 = G__48503;
continue;
} else {
return ret_value__18056__auto__;
}
break;
}
});
state_machine__18055__auto__ = function(state_48487){
switch(arguments.length){
case 0:
return state_machine__18055__auto____0.call(this);
case 1:
return state_machine__18055__auto____1.call(this,state_48487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18055__auto____0;
state_machine__18055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18055__auto____1;
return state_machine__18055__auto__;
})()
;})(switch__18054__auto__,c__18069__auto__,delete$,___$1))
})();
var state__18071__auto__ = (function (){var statearr_48498 = f__18070__auto__.call(null);
(statearr_48498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18069__auto__);

return statearr_48498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18071__auto__);
});})(c__18069__auto__,delete$,___$1))
);

return c__18069__auto__;
});

om_tut.core.t48474.prototype.om$core$IInitState$ = true;

om_tut.core.t48474.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

om_tut.core.t48474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48476){
var self__ = this;
var _48476__$1 = this;
return self__.meta48475;
});

om_tut.core.t48474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48476,meta48475__$1){
var self__ = this;
var _48476__$1 = this;
return (new om_tut.core.t48474(self__.owner,self__.data,self__.root_view,meta48475__$1));
});

om_tut.core.t48474.cljs$lang$type = true;

om_tut.core.t48474.cljs$lang$ctorStr = "om-tut.core/t48474";

om_tut.core.t48474.cljs$lang$ctorPrWriter = (function (this__16729__auto__,writer__16730__auto__,opt__16731__auto__){
return cljs.core._write.call(null,writer__16730__auto__,"om-tut.core/t48474");
});

om_tut.core.__GT_t48474 = (function __GT_t48474(owner__$1,data__$1,root_view__$1,meta48475){
return (new om_tut.core.t48474(owner__$1,data__$1,root_view__$1,meta48475));
});

}

return (new om_tut.core.t48474(owner,data,root_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_tut.core.root_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));

//# sourceMappingURL=core.js.map?rel=1442177927966