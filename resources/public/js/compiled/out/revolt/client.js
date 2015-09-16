// Compiled by ClojureScript 0.0-2850 {}
goog.provide('revolt.client');
goog.require('cljs.core');
goog.require('cemerick.url');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
revolt.client.languages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"us","us",746429226),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Printer","Figure","Mercenary","Blackmail","Viceroy","Force","General","Captain","Messenger","Spy","Support","Town Hall","Sign Up","Submit","Constable","Fortress","Rogue","Priest","Cap","All tokens must be used.","Start Game","Harbor","Gold","Cathedral","Mayor","Innkeeper","Apothecary","Player","Market","Magistrate","Add","No more than six figures can be bid on.","Merchant","Palace","Location","Tavern","Aristocrat","Clear"]),new cljs.core.Keyword(null,"mx","mx",-199887020),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantaci\u00F3n","Impresor","Persona","Mercenario","Chantaje","Virrey","Fuerza","General","Capit\u00E1n","Mensajero","Esp\u00EDa","Apoyo","Ayuntamiento","Contratar","Entregar","Alguacil","Fortaleza","Maleante","Sacerdote","L\u00EDmite","Todas las fichas deben utilizarse.","Empezar Juego","Puerto","Oro","Catedral","Alcalde","Posadero","Boticario","Jugador","Mercado","Juez","A\u00F1adir","No m\u00E1s de seis cifras pueden pujar por.","Mercader","Palacio","Localizaci\u00F3n","Taberna","Arist\u00F3crata","Despejar"]),new cljs.core.Keyword(null,"fr","fr",1577713888),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Imprimante","Personnage","Mercenaire","Chantage","Vice-roi","Force","G\u00E9n\u00E9ral","Capitaine","Messager","Espion","Appui","Mairie","Signer","Soumettre","Gendarme","Forteresse","Coquin","Pr\u00EAtre","Limite","Tous les jetons doivent \u00EAtre utilis\u00E9s.","D\u00E9marrer le Jeu","Port","Or","Cath\u00E9drale","Maire","Aubergiste","Apothicaire","Joueur","March\u00E9","Magistrat","Ajouter","Pas plus de six chiffres peuvent \u00EAtre ench\u00E9rir sur.","Commer\u00E7ant","Palais","Emplacement","Taverne","Aristocrate","D\u00E9barrasser"])], null);
revolt.client.bid0 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null);
revolt.client.figures = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null)], null);
revolt.client.ps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rob","Joe","Moe"], null);
revolt.client.locs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"cap","cap",-817621587),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"cap","cap",-817621587),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"cap","cap",-817621587),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"cap","cap",-817621587),(8)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"cap","cap",-817621587),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null)], null);
revolt.client.localize = (function localize(data,key){
var or__18925__auto__ = cljs.core.get_in.call(null,revolt.client.languages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(data),key], null));
if(cljs.core.truth_(or__18925__auto__)){
return or__18925__auto__;
} else {
return console.error([cljs.core.str(key),cljs.core.str(" is not in "),cljs.core.str(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str(" dictionary")].join(''));
}
});
revolt.client.adjust_bid = (function adjust_bid(data,id,denomination,adj){
var bid_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)) + adj);
var bank_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null)) - adj);
if(((bank_denom_adjusted >= (0))) && ((bid_denom_adjusted >= (0)))){
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__21598_SHARP_){
return (p1__21598_SHARP_ - adj);
});})(bid_denom_adjusted,bank_denom_adjusted))
);

return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__21599_SHARP_){
return (p1__21599_SHARP_ + adj);
});})(bid_denom_adjusted,bank_denom_adjusted))
);
} else {
return null;
}
});
revolt.client.dont_show_zero = (function dont_show_zero(x){
if((x === (0))){
return "";
} else {
return x;
}
});
revolt.client.denomination_remaining_QMARK_ = (function denomination_remaining_QMARK_(data,denomination){
return (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null)) > (0));
});
revolt.client.pos_bid_QMARK_ = (function pos_bid_QMARK_(bid){
return ((new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(bid) > (0))) || ((new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077).cljs$core$IFn$_invoke$arity$1(bid) > (0))) || ((new cljs.core.Keyword(null,"force","force",781957286).cljs$core$IFn$_invoke$arity$1(bid) > (0)));
});
revolt.client.nothing_on_figure_QMARK_ = (function nothing_on_figure_QMARK_(data,id){
return !(revolt.client.pos_bid_QMARK_.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id], null))));
});
revolt.client.figure_limit_reached_QMARK_ = (function figure_limit_reached_QMARK_(data){
return (cljs.core.count.call(null,cljs.core.filter.call(null,revolt.client.pos_bid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(data)))) >= (6));
});
revolt.client.denomination_input = (function denomination_input(data,id,immunities,denomination){
var immune = cljs.core.contains_QMARK_.call(null,immunities,denomination);
var amount = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null));
return React.DOM.td(null,(function (){var disabled = (immune) || (!(revolt.client.denomination_remaining_QMARK_.call(null,data,denomination))) || ((revolt.client.nothing_on_figure_QMARK_.call(null,data,id)) && (revolt.client.figure_limit_reached_QMARK_.call(null,data)));
return React.DOM.button({"onClick": ((function (disabled,immune,amount){
return (function (){
return revolt.client.adjust_bid.call(null,data,id,denomination,(1));
});})(disabled,immune,amount))
, "className": ((disabled)?"adjust disabled":"adjust enabled"), "disabled": disabled},"\u2191");
})(),(function (){var disabled = (immune) || (cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)))) || ((revolt.client.nothing_on_figure_QMARK_.call(null,data,id)) && (revolt.client.figure_limit_reached_QMARK_.call(null,data)));
return React.DOM.button({"onClick": ((function (disabled,immune,amount){
return (function (){
return revolt.client.adjust_bid.call(null,data,id,denomination,(-1));
});})(disabled,immune,amount))
, "className": ((disabled)?"adjust disabled":"adjust enabled"), "disabled": disabled},"\u2193");
})(),om.dom.input.call(null,{"value": revolt.client.dont_show_zero.call(null,amount), "id": [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "disabled": immune, "type": "text"}));
});
revolt.client.immunity_class = new cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentHashSet.EMPTY,"immunity-none",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null),"immunity-blackmail",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-force",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-both"], true, false);
revolt.client.bid_row = (function bid_row(data,owner,p__21600){
var map__21605 = p__21600;
var map__21605__$1 = ((cljs.core.seq_QMARK_.call(null,map__21605))?cljs.core.apply.call(null,cljs.core.hash_map,map__21605):map__21605);
var immunities = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"immunities","immunities",1511351521));
var id = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof revolt.client.t21606 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21606 = (function (id,immunities,map__21605,p__21600,owner,data,bid_row,meta21607){
this.id = id;
this.immunities = immunities;
this.map__21605 = map__21605;
this.p__21600 = p__21600;
this.owner = owner;
this.data = data;
this.bid_row = bid_row;
this.meta21607 = meta21607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21606.prototype.om$core$IRender$ = true;

revolt.client.t21606.prototype.om$core$IRender$render$arity$1 = ((function (map__21605,map__21605__$1,immunities,id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td({"className": [cljs.core.str("figure-name "),cljs.core.str(cljs.core.get.call(null,revolt.client.immunity_class,self__.immunities))].join('')},revolt.client.localize.call(null,self__.data,self__.id)),revolt.client.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"gold","gold",-806826416)),revolt.client.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),revolt.client.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"force","force",781957286)));
});})(map__21605,map__21605__$1,immunities,id))
;

revolt.client.t21606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21605,map__21605__$1,immunities,id){
return (function (_21608){
var self__ = this;
var _21608__$1 = this;
return self__.meta21607;
});})(map__21605,map__21605__$1,immunities,id))
;

revolt.client.t21606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21605,map__21605__$1,immunities,id){
return (function (_21608,meta21607__$1){
var self__ = this;
var _21608__$1 = this;
return (new revolt.client.t21606(self__.id,self__.immunities,self__.map__21605,self__.p__21600,self__.owner,self__.data,self__.bid_row,meta21607__$1));
});})(map__21605,map__21605__$1,immunities,id))
;

revolt.client.t21606.cljs$lang$type = true;

revolt.client.t21606.cljs$lang$ctorStr = "revolt.client/t21606";

revolt.client.t21606.cljs$lang$ctorPrWriter = ((function (map__21605,map__21605__$1,immunities,id){
return (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21606");
});})(map__21605,map__21605__$1,immunities,id))
;

revolt.client.__GT_t21606 = ((function (map__21605,map__21605__$1,immunities,id){
return (function __GT_t21606(id__$1,immunities__$1,map__21605__$2,p__21600__$1,owner__$1,data__$1,bid_row__$1,meta21607){
return (new revolt.client.t21606(id__$1,immunities__$1,map__21605__$2,p__21600__$1,owner__$1,data__$1,bid_row__$1,meta21607));
});})(map__21605,map__21605__$1,immunities,id))
;

}

return (new revolt.client.t21606(id,immunities,map__21605__$1,p__21600,owner,data,bid_row,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.bid_area = (function bid_area(data,owner){
if(typeof revolt.client.t21613 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21613 = (function (owner,data,bid_area,meta21614){
this.owner = owner;
this.data = data;
this.bid_area = bid_area;
this.meta21614 = meta21614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21613.prototype.om$core$IRender$ = true;

revolt.client.t21613.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"figure","figure",-561394079))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p1__21609_SHARP_){
return om.core.build.call(null,revolt.client.bid_row,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),p1__21609_SHARP_], null));
});})(this$__$1))
,revolt.client.figures));
});

revolt.client.t21613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21615){
var self__ = this;
var _21615__$1 = this;
return self__.meta21614;
});

revolt.client.t21613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21615,meta21614__$1){
var self__ = this;
var _21615__$1 = this;
return (new revolt.client.t21613(self__.owner,self__.data,self__.bid_area,meta21614__$1));
});

revolt.client.t21613.cljs$lang$type = true;

revolt.client.t21613.cljs$lang$ctorStr = "revolt.client/t21613";

revolt.client.t21613.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21613");
});

revolt.client.__GT_t21613 = (function __GT_t21613(owner__$1,data__$1,bid_area__$1,meta21614){
return (new revolt.client.t21613(owner__$1,data__$1,bid_area__$1,meta21614));
});

}

return (new revolt.client.t21613(owner,data,bid_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.bank_denomination = (function bank_denomination(data,denomination){
var remaining = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null));
var total = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"original-bank","original-bank",-952771138),denomination], null));
return React.DOM.span(null,React.DOM.span(null,revolt.client.localize.call(null,data,denomination)),om.dom.input.call(null,{"value": [cljs.core.str(remaining),cljs.core.str("/"),cljs.core.str(total)].join(''), "id": [cljs.core.str("bank-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "type": "text"}));
});
revolt.client.tokens_remaining_QMARK_ = (function tokens_remaining_QMARK_(data){
return revolt.client.pos_bid_QMARK_.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(data));
});
revolt.client.too_many_figures_QMARK_ = (function too_many_figures_QMARK_(data){
return ((6) < cljs.core.count.call(null,cljs.core.filter.call(null,revolt.client.pos_bid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(data)))));
});
revolt.client.submit_button = (function submit_button(data,owner){
if(typeof revolt.client.t21619 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21619 = (function (owner,data,submit_button,meta21620){
this.owner = owner;
this.data = data;
this.submit_button = submit_button;
this.meta21620 = meta21620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21619.prototype.om$core$IRender$ = true;

revolt.client.t21619.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return cljs.core.println.call(null,"submitting...");
});})(this$__$1))
, "disabled": (revolt.client.tokens_remaining_QMARK_.call(null,self__.data)) || (revolt.client.too_many_figures_QMARK_.call(null,self__.data))},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317)));
});

revolt.client.t21619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21621){
var self__ = this;
var _21621__$1 = this;
return self__.meta21620;
});

revolt.client.t21619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21621,meta21620__$1){
var self__ = this;
var _21621__$1 = this;
return (new revolt.client.t21619(self__.owner,self__.data,self__.submit_button,meta21620__$1));
});

revolt.client.t21619.cljs$lang$type = true;

revolt.client.t21619.cljs$lang$ctorStr = "revolt.client/t21619";

revolt.client.t21619.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21619");
});

revolt.client.__GT_t21619 = (function __GT_t21619(owner__$1,data__$1,submit_button__$1,meta21620){
return (new revolt.client.t21619(owner__$1,data__$1,submit_button__$1,meta21620));
});

}

return (new revolt.client.t21619(owner,data,submit_button,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.bank_area = (function bank_area(data,owner){
if(typeof revolt.client.t21625 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21625 = (function (owner,data,bank_area,meta21626){
this.owner = owner;
this.data = data;
this.bank_area = bank_area;
this.meta21626 = meta21626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21625.prototype.om$core$IRender$ = true;

revolt.client.t21625.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,revolt.client.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416)),revolt.client.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),revolt.client.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)),om.core.build.call(null,revolt.client.submit_button,self__.data));
});

revolt.client.t21625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21627){
var self__ = this;
var _21627__$1 = this;
return self__.meta21626;
});

revolt.client.t21625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21627,meta21626__$1){
var self__ = this;
var _21627__$1 = this;
return (new revolt.client.t21625(self__.owner,self__.data,self__.bank_area,meta21626__$1));
});

revolt.client.t21625.cljs$lang$type = true;

revolt.client.t21625.cljs$lang$ctorStr = "revolt.client/t21625";

revolt.client.t21625.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21625");
});

revolt.client.__GT_t21625 = (function __GT_t21625(owner__$1,data__$1,bank_area__$1,meta21626){
return (new revolt.client.t21625(owner__$1,data__$1,bank_area__$1,meta21626));
});

}

return (new revolt.client.t21625(owner,data,bank_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.map_area = (function map_area(data,owner){
if(typeof revolt.client.t21631 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21631 = (function (owner,data,map_area,meta21632){
this.owner = owner;
this.data = data;
this.map_area = map_area;
this.meta21632 = meta21632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21631.prototype.om$core$IRender$ = true;

revolt.client.t21631.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location))),React.DOM.td(null,new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location),p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

revolt.client.t21631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21633){
var self__ = this;
var _21633__$1 = this;
return self__.meta21632;
});

revolt.client.t21631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21633,meta21632__$1){
var self__ = this;
var _21633__$1 = this;
return (new revolt.client.t21631(self__.owner,self__.data,self__.map_area,meta21632__$1));
});

revolt.client.t21631.cljs$lang$type = true;

revolt.client.t21631.cljs$lang$ctorStr = "revolt.client/t21631";

revolt.client.t21631.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21631");
});

revolt.client.__GT_t21631 = (function __GT_t21631(owner__$1,data__$1,map_area__$1,meta21632){
return (new revolt.client.t21631(owner__$1,data__$1,map_area__$1,meta21632));
});

}

return (new revolt.client.t21631(owner,data,map_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.support_area = (function support_area(data,owner){
if(typeof revolt.client.t21637 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21637 = (function (owner,data,support_area,meta21638){
this.owner = owner;
this.data = data;
this.support_area = support_area;
this.meta21638 = meta21638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21637.prototype.om$core$IRender$ = true;

revolt.client.t21637.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"player","player",-97687400))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"support","support",1392531368)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.tr(null,React.DOM.td(null,p),React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"support","support",1392531368),p], null))));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

revolt.client.t21637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21639){
var self__ = this;
var _21639__$1 = this;
return self__.meta21638;
});

revolt.client.t21637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21639,meta21638__$1){
var self__ = this;
var _21639__$1 = this;
return (new revolt.client.t21637(self__.owner,self__.data,self__.support_area,meta21638__$1));
});

revolt.client.t21637.cljs$lang$type = true;

revolt.client.t21637.cljs$lang$ctorStr = "revolt.client/t21637";

revolt.client.t21637.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21637");
});

revolt.client.__GT_t21637 = (function __GT_t21637(owner__$1,data__$1,support_area__$1,meta21638){
return (new revolt.client.t21637(owner__$1,data__$1,support_area__$1,meta21638));
});

}

return (new revolt.client.t21637(owner,data,support_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.language_flag = (function language_flag(data,title,key){
return React.DOM.img({"onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"lang","lang",-1819677104),key);
}), "className": "language-flag", "title": title, "src": [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,key)),cljs.core.str(".png")].join('')});
});
revolt.client.languages_area = (function languages_area(data,owner){
if(typeof revolt.client.t21643 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21643 = (function (owner,data,languages_area,meta21644){
this.owner = owner;
this.data = data;
this.languages_area = languages_area;
this.meta21644 = meta21644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21643.prototype.om$core$IRender$ = true;

revolt.client.t21643.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,revolt.client.language_flag.call(null,self__.data,"English",new cljs.core.Keyword(null,"us","us",746429226)),revolt.client.language_flag.call(null,self__.data,"Spanish",new cljs.core.Keyword(null,"mx","mx",-199887020)),revolt.client.language_flag.call(null,self__.data,"French",new cljs.core.Keyword(null,"fr","fr",1577713888)));
});

revolt.client.t21643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21645){
var self__ = this;
var _21645__$1 = this;
return self__.meta21644;
});

revolt.client.t21643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21645,meta21644__$1){
var self__ = this;
var _21645__$1 = this;
return (new revolt.client.t21643(self__.owner,self__.data,self__.languages_area,meta21644__$1));
});

revolt.client.t21643.cljs$lang$type = true;

revolt.client.t21643.cljs$lang$ctorStr = "revolt.client/t21643";

revolt.client.t21643.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21643");
});

revolt.client.__GT_t21643 = (function __GT_t21643(owner__$1,data__$1,languages_area__$1,meta21644){
return (new revolt.client.t21643(owner__$1,data__$1,languages_area__$1,meta21644));
});

}

return (new revolt.client.t21643(owner,data,languages_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.signup_area = (function signup_area(data,owner){
if(typeof revolt.client.t21649 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21649 = (function (owner,data,signup_area,meta21650){
this.owner = owner;
this.data = data;
this.signup_area = signup_area;
this.meta21650 = meta21650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21649.prototype.om$core$IRender$ = true;

revolt.client.t21649.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,null),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"signup","signup",1961016747))));
});

revolt.client.t21649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21651){
var self__ = this;
var _21651__$1 = this;
return self__.meta21650;
});

revolt.client.t21649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21651,meta21650__$1){
var self__ = this;
var _21651__$1 = this;
return (new revolt.client.t21649(self__.owner,self__.data,self__.signup_area,meta21650__$1));
});

revolt.client.t21649.cljs$lang$type = true;

revolt.client.t21649.cljs$lang$ctorStr = "revolt.client/t21649";

revolt.client.t21649.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21649");
});

revolt.client.__GT_t21649 = (function __GT_t21649(owner__$1,data__$1,signup_area__$1,meta21650){
return (new revolt.client.t21649(owner__$1,data__$1,signup_area__$1,meta21650));
});

}

return (new revolt.client.t21649(owner,data,signup_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.spy_select = (function spy_select(data,owner){
if(typeof revolt.client.t21657 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21657 = (function (owner,data,spy_select,meta21658){
this.owner = owner;
this.data = data;
this.spy_select = spy_select;
this.meta21658 = meta21658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21657.prototype.om$core$IRender$ = true;

revolt.client.t21657.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection = new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection,this$__$1){
return (function (p__21660){
var map__21661 = p__21660;
var map__21661__$1 = ((cljs.core.seq_QMARK_.call(null,map__21661))?cljs.core.apply.call(null,cljs.core.hash_map,map__21661):map__21661);
var cap = cljs.core.get.call(null,map__21661__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__21661__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,id)),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__21661,map__21661__$1,cap,id,selection,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,p], null);
var selected = cljs.core._EQ_.call(null,combo,selection);
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,map__21661,map__21661__$1,cap,id,selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),combo);
});})(combo,selected,map__21661,map__21661__$1,cap,id,selection,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,p], null))));
});})(map__21661,map__21661__$1,cap,id,selection,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),null);
});})(selection,this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_(selection)?React.DOM.button(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

revolt.client.t21657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21659){
var self__ = this;
var _21659__$1 = this;
return self__.meta21658;
});

revolt.client.t21657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21659,meta21658__$1){
var self__ = this;
var _21659__$1 = this;
return (new revolt.client.t21657(self__.owner,self__.data,self__.spy_select,meta21658__$1));
});

revolt.client.t21657.cljs$lang$type = true;

revolt.client.t21657.cljs$lang$ctorStr = "revolt.client/t21657";

revolt.client.t21657.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21657");
});

revolt.client.__GT_t21657 = (function __GT_t21657(owner__$1,data__$1,spy_select__$1,meta21658){
return (new revolt.client.t21657(owner__$1,data__$1,spy_select__$1,meta21658));
});

}

return (new revolt.client.t21657(owner,data,spy_select,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.apothecary_select = (function apothecary_select(data,owner){
if(typeof revolt.client.t21667 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21667 = (function (owner,data,apothecary_select,meta21668){
this.owner = owner;
this.data = data;
this.apothecary_select = apothecary_select;
this.meta21668 = meta21668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21667.prototype.om$core$IRender$ = true;

revolt.client.t21667.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection_1 = new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection_1,selection_2,this$__$1){
return (function (p__21670){
var map__21671 = p__21670;
var map__21671__$1 = ((cljs.core.seq_QMARK_.call(null,map__21671))?cljs.core.apply.call(null,cljs.core.hash_map,map__21671):map__21671);
var cap = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,id)),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__21671,map__21671__$1,cap,id,selection_1,selection_2,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,p], null);
var selected = (cljs.core._EQ_.call(null,combo,selection_1)) || (cljs.core._EQ_.call(null,combo,selection_2));
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,map__21671,map__21671__$1,cap,id,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),combo);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),combo);
}
});})(combo,selected,map__21671,map__21671__$1,cap,id,selection_1,selection_2,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,p], null))));
});})(map__21671,map__21671__$1,cap,id,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),null);
});})(selection_1,selection_2,this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_((function (){var and__18913__auto__ = selection_1;
if(cljs.core.truth_(and__18913__auto__)){
return selection_2;
} else {
return and__18913__auto__;
}
})())?React.DOM.button(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

revolt.client.t21667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21669){
var self__ = this;
var _21669__$1 = this;
return self__.meta21668;
});

revolt.client.t21667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21669,meta21668__$1){
var self__ = this;
var _21669__$1 = this;
return (new revolt.client.t21667(self__.owner,self__.data,self__.apothecary_select,meta21668__$1));
});

revolt.client.t21667.cljs$lang$type = true;

revolt.client.t21667.cljs$lang$ctorStr = "revolt.client/t21667";

revolt.client.t21667.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21667");
});

revolt.client.__GT_t21667 = (function __GT_t21667(owner__$1,data__$1,apothecary_select__$1,meta21668){
return (new revolt.client.t21667(owner__$1,data__$1,apothecary_select__$1,meta21668));
});

}

return (new revolt.client.t21667(owner,data,apothecary_select,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.messenger_select = (function messenger_select(data,owner){
if(typeof revolt.client.t21679 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21679 = (function (owner,data,messenger_select,meta21680){
this.owner = owner;
this.data = data;
this.messenger_select = messenger_select;
this.meta21680 = meta21680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21679.prototype.om$core$IRender$ = true;

revolt.client.t21679.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var reassignments = new cljs.core.Keyword(null,"reassignments","reassignments",945581004).cljs$core$IFn$_invoke$arity$1(self__.data);
var any_reassignments = (cljs.core.count.call(null,reassignments) > (0));
var selection_1 = new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (p__21682){
var map__21683 = p__21682;
var map__21683__$1 = ((cljs.core.seq_QMARK_.call(null,map__21683))?cljs.core.apply.call(null,cljs.core.hash_map,map__21683):map__21683);
var cap = cljs.core.get.call(null,map__21683__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__21683__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,{"className": (((cljs.core._EQ_.call(null,id,selection_1)) || (cljs.core._EQ_.call(null,id,selection_2)))?"selected":null)},React.DOM.td(null,React.DOM.button({"disabled": (function (){var or__18925__auto__ = (cljs.core.not.call(null,selection_1)) && (cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,"Rob"], null))));
if(or__18925__auto__){
return or__18925__auto__;
} else {
var and__18913__auto__ = selection_1;
if(cljs.core.truth_(and__18913__auto__)){
return (cap <= cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id], null)))));
} else {
return and__18913__auto__;
}
}
})(), "onClick": ((function (map__21683,map__21683__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),id);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),id);
}
});})(map__21683,map__21683__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},revolt.client.localize.call(null,self__.data,id))),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__21683,map__21683__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (player){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,player], null)));
});})(map__21683,map__21683__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),((any_reassignments)?cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (p__21684){
var vec__21685 = p__21684;
var l1 = cljs.core.nth.call(null,vec__21685,(0),null);
var l2 = cljs.core.nth.call(null,vec__21685,(1),null);
return React.DOM.li(null,[cljs.core.str(revolt.client.localize.call(null,self__.data,l1)),cljs.core.str(" -> "),cljs.core.str(revolt.client.localize.call(null,self__.data,l2))].join(''));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,reassignments)):null),React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reassignments","reassignments",945581004),cljs.core.PersistentVector.EMPTY);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),null);
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_((function (){var and__18913__auto__ = selection_1;
if(cljs.core.truth_(and__18913__auto__)){
var and__18913__auto____$1 = selection_2;
if(cljs.core.truth_(and__18913__auto____$1)){
return ((2) > cljs.core.count.call(null,reassignments));
} else {
return and__18913__auto____$1;
}
} else {
return and__18913__auto__;
}
})())?React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reassignments","reassignments",945581004),((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (rs){
return cljs.core.conj.call(null,rs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_1,selection_2], null));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),null);
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"add","add",235287739))):null),React.DOM.button(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))));
});

revolt.client.t21679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21681){
var self__ = this;
var _21681__$1 = this;
return self__.meta21680;
});

revolt.client.t21679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21681,meta21680__$1){
var self__ = this;
var _21681__$1 = this;
return (new revolt.client.t21679(self__.owner,self__.data,self__.messenger_select,meta21680__$1));
});

revolt.client.t21679.cljs$lang$type = true;

revolt.client.t21679.cljs$lang$ctorStr = "revolt.client/t21679";

revolt.client.t21679.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21679");
});

revolt.client.__GT_t21679 = (function __GT_t21679(owner__$1,data__$1,messenger_select__$1,meta21680){
return (new revolt.client.t21679(owner__$1,data__$1,messenger_select__$1,meta21680));
});

}

return (new revolt.client.t21679(owner,data,messenger_select,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.mayor_select = (function mayor_select(data,owner){
if(typeof revolt.client.t21689 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21689 = (function (owner,data,mayor_select,meta21690){
this.owner = owner;
this.data = data;
this.mayor_select = mayor_select;
this.meta21690 = meta21690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21689.prototype.om$core$IRender$ = true;

revolt.client.t21689.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,React.DOM.button({"disabled": (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)], null)))) >= new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)), "onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)))),React.DOM.td(null,new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location),p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

revolt.client.t21689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21691){
var self__ = this;
var _21691__$1 = this;
return self__.meta21690;
});

revolt.client.t21689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21691,meta21690__$1){
var self__ = this;
var _21691__$1 = this;
return (new revolt.client.t21689(self__.owner,self__.data,self__.mayor_select,meta21690__$1));
});

revolt.client.t21689.cljs$lang$type = true;

revolt.client.t21689.cljs$lang$ctorStr = "revolt.client/t21689";

revolt.client.t21689.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21689");
});

revolt.client.__GT_t21689 = (function __GT_t21689(owner__$1,data__$1,mayor_select__$1,meta21690){
return (new revolt.client.t21689(owner__$1,data__$1,mayor_select__$1,meta21690));
});

}

return (new revolt.client.t21689(owner,data,mayor_select,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.debug_panel = (function debug_panel(data,owner){
if(typeof revolt.client.t21695 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21695 = (function (owner,data,debug_panel,meta21696){
this.owner = owner;
this.data = data;
this.debug_panel = debug_panel;
this.meta21696 = meta21696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21695.prototype.om$core$IRender$ = true;

revolt.client.t21695.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

revolt.client.t21695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21697){
var self__ = this;
var _21697__$1 = this;
return self__.meta21696;
});

revolt.client.t21695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21697,meta21696__$1){
var self__ = this;
var _21697__$1 = this;
return (new revolt.client.t21695(self__.owner,self__.data,self__.debug_panel,meta21696__$1));
});

revolt.client.t21695.cljs$lang$type = true;

revolt.client.t21695.cljs$lang$ctorStr = "revolt.client/t21695";

revolt.client.t21695.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21695");
});

revolt.client.__GT_t21695 = (function __GT_t21695(owner__$1,data__$1,debug_panel__$1,meta21696){
return (new revolt.client.t21695(owner__$1,data__$1,debug_panel__$1,meta21696));
});

}

return (new revolt.client.t21695(owner,data,debug_panel,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.lobby_area = (function lobby_area(data,owner){
if(typeof revolt.client.t21701 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21701 = (function (owner,data,lobby_area,meta21702){
this.owner = owner;
this.data = data;
this.lobby_area = lobby_area;
this.meta21702 = meta21702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21701.prototype.om$core$IRender$ = true;

revolt.client.t21701.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},revolt.client.localize.call(null,self__.data,new cljs.core.Keyword(null,"start-game","start-game",115628303))),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.li(null,p);
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

revolt.client.t21701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21703){
var self__ = this;
var _21703__$1 = this;
return self__.meta21702;
});

revolt.client.t21701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21703,meta21702__$1){
var self__ = this;
var _21703__$1 = this;
return (new revolt.client.t21701(self__.owner,self__.data,self__.lobby_area,meta21702__$1));
});

revolt.client.t21701.cljs$lang$type = true;

revolt.client.t21701.cljs$lang$ctorStr = "revolt.client/t21701";

revolt.client.t21701.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21701");
});

revolt.client.__GT_t21701 = (function __GT_t21701(owner__$1,data__$1,lobby_area__$1,meta21702){
return (new revolt.client.t21701(owner__$1,data__$1,lobby_area__$1,meta21702));
});

}

return (new revolt.client.t21701(owner,data,lobby_area,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.root_view = (function root_view(data,owner){
if(typeof revolt.client.t21730 !== 'undefined'){
} else {

/**
* @constructor
*/
revolt.client.t21730 = (function (owner,data,root_view,meta21731){
this.owner = owner;
this.data = data;
this.root_view = root_view;
this.meta21731 = meta21731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
revolt.client.t21730.prototype.om$core$IRenderState$ = true;

revolt.client.t21730.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,om.core.build.call(null,revolt.client.languages_area,self__.data),om.core.build.call(null,revolt.client.debug_panel,self__.data),(function (){var G__21733 = (((new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__21733) {
case "mayor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.mayor_select,self__.data)], null);

break;
case "messenger":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.messenger_select,self__.data)], null);

break;
case "apothecary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.apothecary_select,self__.data)], null);

break;
case "spy":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.spy_select,self__.data)], null);

break;
case "game-over":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.support_area,self__.data),om.core.build.call(null,revolt.client.map_area,self__.data)], null);

break;
case "take-bids":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.support_area,self__.data),om.core.build.call(null,revolt.client.map_area,self__.data),om.core.build.call(null,revolt.client.bank_area,self__.data),om.core.build.call(null,revolt.client.bid_area,self__.data)], null);

break;
case "lobby":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.lobby_area,self__.data)], null);

break;
case "signup":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,revolt.client.signup_area,self__.data)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')));

}
})());
});

revolt.client.t21730.prototype.om$core$IWillMount$ = true;

revolt.client.t21730.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__20852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20852__auto__,delete$,___$1){
return (function (){
var f__20853__auto__ = (function (){var switch__20837__auto__ = ((function (c__20852__auto__,delete$,___$1){
return (function (state_21743){
var state_val_21744 = (state_21743[(1)]);
if((state_val_21744 === (4))){
var inst_21736 = (state_21743[(2)]);
var inst_21737 = (function (){var contact = inst_21736;
return ((function (contact,inst_21736,state_val_21744,c__20852__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_21736,state_val_21744,c__20852__auto__,delete$,___$1){
return (function (p1__21704_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__21704_SHARP_);
});})(contact,inst_21736,state_val_21744,c__20852__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_21736,state_val_21744,c__20852__auto__,delete$,___$1))
})();
var inst_21738 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_21737);
var state_21743__$1 = (function (){var statearr_21745 = state_21743;
(statearr_21745[(7)] = inst_21738);

return statearr_21745;
})();
var statearr_21746_21756 = state_21743__$1;
(statearr_21746_21756[(2)] = null);

(statearr_21746_21756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (3))){
var inst_21741 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21743__$1,inst_21741);
} else {
if((state_val_21744 === (2))){
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21743__$1,(4),delete$);
} else {
if((state_val_21744 === (1))){
var state_21743__$1 = state_21743;
var statearr_21747_21757 = state_21743__$1;
(statearr_21747_21757[(2)] = null);

(statearr_21747_21757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20852__auto__,delete$,___$1))
;
return ((function (switch__20837__auto__,c__20852__auto__,delete$,___$1){
return (function() {
var state_machine__20838__auto__ = null;
var state_machine__20838__auto____0 = (function (){
var statearr_21751 = [null,null,null,null,null,null,null,null];
(statearr_21751[(0)] = state_machine__20838__auto__);

(statearr_21751[(1)] = (1));

return statearr_21751;
});
var state_machine__20838__auto____1 = (function (state_21743){
while(true){
var ret_value__20839__auto__ = (function (){try{while(true){
var result__20840__auto__ = switch__20837__auto__.call(null,state_21743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20840__auto__;
}
break;
}
}catch (e21752){if((e21752 instanceof Object)){
var ex__20841__auto__ = e21752;
var statearr_21753_21758 = state_21743;
(statearr_21753_21758[(5)] = ex__20841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21759 = state_21743;
state_21743 = G__21759;
continue;
} else {
return ret_value__20839__auto__;
}
break;
}
});
state_machine__20838__auto__ = function(state_21743){
switch(arguments.length){
case 0:
return state_machine__20838__auto____0.call(this);
case 1:
return state_machine__20838__auto____1.call(this,state_21743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20838__auto____0;
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20838__auto____1;
return state_machine__20838__auto__;
})()
;})(switch__20837__auto__,c__20852__auto__,delete$,___$1))
})();
var state__20854__auto__ = (function (){var statearr_21754 = f__20853__auto__.call(null);
(statearr_21754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20852__auto__);

return statearr_21754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20854__auto__);
});})(c__20852__auto__,delete$,___$1))
);

return c__20852__auto__;
});

revolt.client.t21730.prototype.om$core$IInitState$ = true;

revolt.client.t21730.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

revolt.client.t21730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21732){
var self__ = this;
var _21732__$1 = this;
return self__.meta21731;
});

revolt.client.t21730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21732,meta21731__$1){
var self__ = this;
var _21732__$1 = this;
return (new revolt.client.t21730(self__.owner,self__.data,self__.root_view,meta21731__$1));
});

revolt.client.t21730.cljs$lang$type = true;

revolt.client.t21730.cljs$lang$ctorStr = "revolt.client/t21730";

revolt.client.t21730.cljs$lang$ctorPrWriter = (function (this__19512__auto__,writer__19513__auto__,opt__19514__auto__){
return cljs.core._write.call(null,writer__19513__auto__,"revolt.client/t21730");
});

revolt.client.__GT_t21730 = (function __GT_t21730(owner__$1,data__$1,root_view__$1,meta21731){
return (new revolt.client.t21730(owner__$1,data__$1,root_view__$1,meta21731));
});

}

return (new revolt.client.t21730(owner,data,root_view,cljs.core.PersistentArrayMap.EMPTY));
});
revolt.client.ws_url = (function (){var map__21760 = cemerick.url.url.call(null,window.location);
var map__21760__$1 = ((cljs.core.seq_QMARK_.call(null,map__21760))?cljs.core.apply.call(null,cljs.core.hash_map,map__21760):map__21760);
var port = cljs.core.get.call(null,map__21760__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var host = cljs.core.get.call(null,map__21760__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return [cljs.core.str("ws://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str(port),cljs.core.str("/ws")].join('');
})();
revolt.client.show_error = (function show_error(error){
return alert([cljs.core.str("Couldn't connect to websocket: "),cljs.core.str(cljs.core.pr_str.call(null,error)),cljs.core.str(" @ "),cljs.core.str(revolt.client.ws_url)].join(''));
});
if(typeof revolt.client.app_state !== 'undefined'){
} else {
revolt.client.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"bank","bank",-1982531798),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"reassignments","reassignments",945581004),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"original-bank","original-bank",-952771138)],[cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),revolt.client.figures),cljs.core.repeat.call(null,revolt.client.bid0)),cljs.core.zipmap.call(null,revolt.client.ps,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(50));
}))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null),new cljs.core.Keyword(null,"signup","signup",1961016747),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"us","us",746429226),revolt.client.locs,revolt.client.ps,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),revolt.client.locs),cljs.core.repeatedly.call(null,(function (){
return cljs.core.zipmap.call(null,revolt.client.ps,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(4));
})));
}))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null)]));
}
if(typeof revolt.client.message_channel !== 'undefined'){
} else {
revolt.client.message_channel = cljs.core.atom.call(null,null);
}
revolt.client.receive_msgs_BANG_ = (function receive_msgs_BANG_(server_ch){
var c__20852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20852__auto__){
return (function (){
var f__20853__auto__ = (function (){var switch__20837__auto__ = ((function (c__20852__auto__){
return (function (state_21802){
var state_val_21803 = (state_21802[(1)]);
if((state_val_21803 === (7))){
var inst_21798 = (state_21802[(2)]);
var state_21802__$1 = state_21802;
var statearr_21804_21819 = state_21802__$1;
(statearr_21804_21819[(2)] = inst_21798);

(statearr_21804_21819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21803 === (6))){
var state_21802__$1 = state_21802;
var statearr_21805_21820 = state_21802__$1;
(statearr_21805_21820[(2)] = null);

(statearr_21805_21820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21803 === (5))){
var inst_21792 = (state_21802[(7)]);
var inst_21794 = inst_21792.call(null);
var state_21802__$1 = (function (){var statearr_21806 = state_21802;
(statearr_21806[(8)] = inst_21794);

return statearr_21806;
})();
var statearr_21807_21821 = state_21802__$1;
(statearr_21807_21821[(2)] = null);

(statearr_21807_21821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21803 === (4))){
var inst_21792 = (state_21802[(7)]);
var inst_21792__$1 = (state_21802[(2)]);
var state_21802__$1 = (function (){var statearr_21808 = state_21802;
(statearr_21808[(7)] = inst_21792__$1);

return statearr_21808;
})();
if(cljs.core.truth_(inst_21792__$1)){
var statearr_21809_21822 = state_21802__$1;
(statearr_21809_21822[(1)] = (5));

} else {
var statearr_21810_21823 = state_21802__$1;
(statearr_21810_21823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21803 === (3))){
var inst_21800 = (state_21802[(2)]);
var state_21802__$1 = state_21802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21802__$1,inst_21800);
} else {
if((state_val_21803 === (2))){
var state_21802__$1 = state_21802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21802__$1,(4),server_ch);
} else {
if((state_val_21803 === (1))){
var state_21802__$1 = state_21802;
var statearr_21811_21824 = state_21802__$1;
(statearr_21811_21824[(2)] = null);

(statearr_21811_21824[(1)] = (2));


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
});})(c__20852__auto__))
;
return ((function (switch__20837__auto__,c__20852__auto__){
return (function() {
var state_machine__20838__auto__ = null;
var state_machine__20838__auto____0 = (function (){
var statearr_21815 = [null,null,null,null,null,null,null,null,null];
(statearr_21815[(0)] = state_machine__20838__auto__);

(statearr_21815[(1)] = (1));

return statearr_21815;
});
var state_machine__20838__auto____1 = (function (state_21802){
while(true){
var ret_value__20839__auto__ = (function (){try{while(true){
var result__20840__auto__ = switch__20837__auto__.call(null,state_21802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20840__auto__;
}
break;
}
}catch (e21816){if((e21816 instanceof Object)){
var ex__20841__auto__ = e21816;
var statearr_21817_21825 = state_21802;
(statearr_21817_21825[(5)] = ex__20841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21826 = state_21802;
state_21802 = G__21826;
continue;
} else {
return ret_value__20839__auto__;
}
break;
}
});
state_machine__20838__auto__ = function(state_21802){
switch(arguments.length){
case 0:
return state_machine__20838__auto____0.call(this);
case 1:
return state_machine__20838__auto____1.call(this,state_21802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20838__auto____0;
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20838__auto____1;
return state_machine__20838__auto__;
})()
;})(switch__20837__auto__,c__20852__auto__))
})();
var state__20854__auto__ = (function (){var statearr_21818 = f__20853__auto__.call(null);
(statearr_21818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20852__auto__);

return statearr_21818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20854__auto__);
});})(c__20852__auto__))
);

return c__20852__auto__;
});
revolt.client.send_msgs_BANG_ = (function send_msgs_BANG_(new_msg_ch,server_ch){
var c__20852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20852__auto__){
return (function (){
var f__20853__auto__ = (function (){var switch__20837__auto__ = ((function (c__20852__auto__){
return (function (state_21870){
var state_val_21871 = (state_21870[(1)]);
if((state_val_21871 === (8))){
var inst_21862 = (state_21870[(2)]);
var state_21870__$1 = (function (){var statearr_21872 = state_21870;
(statearr_21872[(7)] = inst_21862);

return statearr_21872;
})();
var statearr_21873_21887 = state_21870__$1;
(statearr_21873_21887[(2)] = null);

(statearr_21873_21887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21871 === (7))){
var inst_21866 = (state_21870[(2)]);
var state_21870__$1 = state_21870;
var statearr_21874_21888 = state_21870__$1;
(statearr_21874_21888[(2)] = inst_21866);

(statearr_21874_21888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21871 === (6))){
var state_21870__$1 = state_21870;
var statearr_21875_21889 = state_21870__$1;
(statearr_21875_21889[(2)] = null);

(statearr_21875_21889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21871 === (5))){
var inst_21859 = (state_21870[(8)]);
var state_21870__$1 = state_21870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21870__$1,(8),server_ch,inst_21859);
} else {
if((state_val_21871 === (4))){
var inst_21859 = (state_21870[(8)]);
var inst_21859__$1 = (state_21870[(2)]);
var state_21870__$1 = (function (){var statearr_21876 = state_21870;
(statearr_21876[(8)] = inst_21859__$1);

return statearr_21876;
})();
if(cljs.core.truth_(inst_21859__$1)){
var statearr_21877_21890 = state_21870__$1;
(statearr_21877_21890[(1)] = (5));

} else {
var statearr_21878_21891 = state_21870__$1;
(statearr_21878_21891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21871 === (3))){
var inst_21868 = (state_21870[(2)]);
var state_21870__$1 = state_21870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21870__$1,inst_21868);
} else {
if((state_val_21871 === (2))){
var state_21870__$1 = state_21870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21870__$1,(4),new_msg_ch);
} else {
if((state_val_21871 === (1))){
var state_21870__$1 = state_21870;
var statearr_21879_21892 = state_21870__$1;
(statearr_21879_21892[(2)] = null);

(statearr_21879_21892[(1)] = (2));


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
});})(c__20852__auto__))
;
return ((function (switch__20837__auto__,c__20852__auto__){
return (function() {
var state_machine__20838__auto__ = null;
var state_machine__20838__auto____0 = (function (){
var statearr_21883 = [null,null,null,null,null,null,null,null,null];
(statearr_21883[(0)] = state_machine__20838__auto__);

(statearr_21883[(1)] = (1));

return statearr_21883;
});
var state_machine__20838__auto____1 = (function (state_21870){
while(true){
var ret_value__20839__auto__ = (function (){try{while(true){
var result__20840__auto__ = switch__20837__auto__.call(null,state_21870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20840__auto__;
}
break;
}
}catch (e21884){if((e21884 instanceof Object)){
var ex__20841__auto__ = e21884;
var statearr_21885_21893 = state_21870;
(statearr_21885_21893[(5)] = ex__20841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21894 = state_21870;
state_21870 = G__21894;
continue;
} else {
return ret_value__20839__auto__;
}
break;
}
});
state_machine__20838__auto__ = function(state_21870){
switch(arguments.length){
case 0:
return state_machine__20838__auto____0.call(this);
case 1:
return state_machine__20838__auto____1.call(this,state_21870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20838__auto____0;
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20838__auto____1;
return state_machine__20838__auto__;
})()
;})(switch__20837__auto__,c__20852__auto__))
})();
var state__20854__auto__ = (function (){var statearr_21886 = f__20853__auto__.call(null);
(statearr_21886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20852__auto__);

return statearr_21886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20854__auto__);
});})(c__20852__auto__))
);

return c__20852__auto__;
});
revolt.client.send_receive = (function send_receive(ws_channel){
var new_msg_ch = (function (){var G__21896 = cljs.core.async.chan.call(null);
revolt.client.send_msgs_BANG_.call(null,G__21896,ws_channel);

return G__21896;
})();
cljs.core.reset_BANG_.call(null,revolt.client.message_channel,new_msg_ch);

om.core.root.call(null,revolt.client.root_view,revolt.client.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

return revolt.client.receive_msgs_BANG_.call(null,ws_channel);
});
window.onload = (function (){
var c__20852__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20852__auto__){
return (function (){
var f__20853__auto__ = (function (){var switch__20837__auto__ = ((function (c__20852__auto__){
return (function (state_21919){
var state_val_21920 = (state_21919[(1)]);
if((state_val_21920 === (8))){
var inst_21917 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21919__$1,inst_21917);
} else {
if((state_val_21920 === (7))){
var inst_21911 = (state_21919[(7)]);
var inst_21915 = revolt.client.send_receive.call(null,inst_21911);
var state_21919__$1 = state_21919;
var statearr_21921_21938 = state_21919__$1;
(statearr_21921_21938[(2)] = inst_21915);

(statearr_21921_21938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (6))){
var inst_21910 = (state_21919[(8)]);
var inst_21913 = revolt.client.show_error.call(null,inst_21910);
var state_21919__$1 = state_21919;
var statearr_21922_21939 = state_21919__$1;
(statearr_21922_21939[(2)] = inst_21913);

(statearr_21922_21939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (5))){
var inst_21910 = (state_21919[(8)]);
var inst_21909 = (state_21919[(2)]);
var inst_21910__$1 = cljs.core.get.call(null,inst_21909,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_21911 = cljs.core.get.call(null,inst_21909,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var state_21919__$1 = (function (){var statearr_21923 = state_21919;
(statearr_21923[(8)] = inst_21910__$1);

(statearr_21923[(7)] = inst_21911);

return statearr_21923;
})();
if(cljs.core.truth_(inst_21910__$1)){
var statearr_21924_21940 = state_21919__$1;
(statearr_21924_21940[(1)] = (6));

} else {
var statearr_21925_21941 = state_21919__$1;
(statearr_21925_21941[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (4))){
var inst_21903 = (state_21919[(9)]);
var state_21919__$1 = state_21919;
var statearr_21926_21942 = state_21919__$1;
(statearr_21926_21942[(2)] = inst_21903);

(statearr_21926_21942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (3))){
var inst_21903 = (state_21919[(9)]);
var inst_21906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21903);
var state_21919__$1 = state_21919;
var statearr_21927_21943 = state_21919__$1;
(statearr_21927_21943[(2)] = inst_21906);

(statearr_21927_21943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (2))){
var inst_21903 = (state_21919[(9)]);
var inst_21903__$1 = (state_21919[(2)]);
var inst_21904 = cljs.core.seq_QMARK_.call(null,inst_21903__$1);
var state_21919__$1 = (function (){var statearr_21928 = state_21919;
(statearr_21928[(9)] = inst_21903__$1);

return statearr_21928;
})();
if(inst_21904){
var statearr_21929_21944 = state_21919__$1;
(statearr_21929_21944[(1)] = (3));

} else {
var statearr_21930_21945 = state_21919__$1;
(statearr_21930_21945[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (1))){
var inst_21898 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_21899 = [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579)];
var inst_21900 = cljs.core.PersistentHashMap.fromArrays(inst_21898,inst_21899);
var inst_21901 = chord.client.ws_ch.call(null,revolt.client.ws_url,inst_21900);
var state_21919__$1 = state_21919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21919__$1,(2),inst_21901);
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
});})(c__20852__auto__))
;
return ((function (switch__20837__auto__,c__20852__auto__){
return (function() {
var state_machine__20838__auto__ = null;
var state_machine__20838__auto____0 = (function (){
var statearr_21934 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21934[(0)] = state_machine__20838__auto__);

(statearr_21934[(1)] = (1));

return statearr_21934;
});
var state_machine__20838__auto____1 = (function (state_21919){
while(true){
var ret_value__20839__auto__ = (function (){try{while(true){
var result__20840__auto__ = switch__20837__auto__.call(null,state_21919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20840__auto__;
}
break;
}
}catch (e21935){if((e21935 instanceof Object)){
var ex__20841__auto__ = e21935;
var statearr_21936_21946 = state_21919;
(statearr_21936_21946[(5)] = ex__20841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21947 = state_21919;
state_21919 = G__21947;
continue;
} else {
return ret_value__20839__auto__;
}
break;
}
});
state_machine__20838__auto__ = function(state_21919){
switch(arguments.length){
case 0:
return state_machine__20838__auto____0.call(this);
case 1:
return state_machine__20838__auto____1.call(this,state_21919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20838__auto____0;
state_machine__20838__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20838__auto____1;
return state_machine__20838__auto__;
})()
;})(switch__20837__auto__,c__20852__auto__))
})();
var state__20854__auto__ = (function (){var statearr_21937 = f__20853__auto__.call(null);
(statearr_21937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20852__auto__);

return statearr_21937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20854__auto__);
});})(c__20852__auto__))
);

return c__20852__auto__;
});

//# sourceMappingURL=client.js.map?rel=1442376063261