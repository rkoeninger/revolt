// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
om_tut.core.languages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"us","us",746429226),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Printer","Figure","Mercenary","Blackmail","Viceroy","Force","General","Captain","Messenger","Spy","Support","Town Hall","Sign Up","Submit","Constable","Fortress","Rogue","Priest","Cap","All tokens must be used.","Start Game","Harbor","Gold","Cathedral","Mayor","Innkeeper","Apothecary","Player","Market","Magistrate","Add","No more than six figures can be bid on.","Merchant","Palace","Location","Tavern","Aristocrat","Clear"]),new cljs.core.Keyword(null,"mx","mx",-199887020),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantaci\u00F3n","Impresor","Persona","Mercenario","Chantaje","Virrey","Fuerza","General","Capit\u00E1n","Mensajero","Esp\u00EDa","Apoyo","Ayuntamiento","Contratar","Entregar","Alguacil","Fortaleza","Maleante","Sacerdote","L\u00EDmite","Todas las fichas deben utilizarse.","Empezar Juego","Puerto","Oro","Catedral","Alcalde","Posadero","Boticario","Jugador","Mercado","Juez","A\u00F1adir","No m\u00E1s de seis cifras pueden pujar por.","Mercader","Palacio","Localizaci\u00F3n","Taberna","Arist\u00F3crata","Despejar"]),new cljs.core.Keyword(null,"fr","fr",1577713888),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"cap","cap",-817621587),new cljs.core.Keyword(null,"all-tokens-must-be-used","all-tokens-must-be-used",661851183),new cljs.core.Keyword(null,"start-game","start-game",115628303),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"no-more-than-six-figures","no-more-than-six-figures",1876904443),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"clear","clear",1877104959)],["Plantation","Imprimante","Personnage","Mercenaire","Chantage","Vice-roi","Force","G\u00E9n\u00E9ral","Capitaine","Messager","Espion","Appui","Mairie","Signer","Soumettre","Gendarme","Forteresse","Coquin","Pr\u00EAtre","Limite","Tous les jetons doivent \u00EAtre utilis\u00E9s.","D\u00E9marrer le Jeu","Port","Or","Cath\u00E9drale","Maire","Aubergiste","Apothicaire","Joueur","March\u00E9","Magistrat","Ajouter","Pas plus de six chiffres peuvent \u00EAtre ench\u00E9rir sur.","Commer\u00E7ant","Palais","Emplacement","Taverne","Aristocrate","D\u00E9barrasser"])], null);
om_tut.core.bid0 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null);
om_tut.core.figures = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"captain","captain",475784807),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"innkeeper","innkeeper",902528084),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"magistrate","magistrate",-605145382),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"viceroy","viceroy",-596613980),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"priest","priest",1556489453),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"aristocrat","aristocrat",-81925218),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"printer","printer",-1267797056),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spy","spy",704719400),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"apothecary","apothecary",197898358),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"messenger","messenger",2092803528),new cljs.core.Keyword(null,"immunities","immunities",1511351521),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mayor","mayor",84933652),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"constable","constable",718572363),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rogue","rogue",-2026991668),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mercenary","mercenary",-1405715037),new cljs.core.Keyword(null,"immunities","immunities",1511351521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null)], null)], null);
om_tut.core.ps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rob","Joe","Moe"], null);
om_tut.core.locs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tavern","tavern",1362249469),new cljs.core.Keyword(null,"cap","cap",-817621587),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"cap","cap",-817621587),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"town-hall","town-hall",1194643849),new cljs.core.Keyword(null,"cap","cap",-817621587),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fortress","fortress",1814639628),new cljs.core.Keyword(null,"cap","cap",-817621587),(8)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"harbor","harbor",-638543472),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cathedral","cathedral",-2103272045),new cljs.core.Keyword(null,"cap","cap",-817621587),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plantation","plantation",1198864544),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"palace","palace",-1827494949),new cljs.core.Keyword(null,"cap","cap",-817621587),(6)], null)], null);
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.Keyword(null,"support","support",1392531368),new cljs.core.Keyword(null,"bank","bank",-1982531798),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"reassignments","reassignments",945581004),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"original-bank","original-bank",-952771138)],[cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),om_tut.core.figures),cljs.core.repeat.call(null,om_tut.core.bid0)),cljs.core.zipmap.call(null,om_tut.core.ps,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(50));
}))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null),new cljs.core.Keyword(null,"signup","signup",1961016747),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"us","us",746429226),om_tut.core.locs,om_tut.core.ps,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),om_tut.core.locs),cljs.core.repeatedly.call(null,(function (){
return cljs.core.zipmap.call(null,om_tut.core.ps,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(4));
})));
}))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gold","gold",-806826416),(5),new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),(1),new cljs.core.Keyword(null,"force","force",781957286),(1)], null)]));
}
om_tut.core.localize = (function localize(data,key){
var or__16029__auto__ = cljs.core.get_in.call(null,om_tut.core.languages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(data),key], null));
if(cljs.core.truth_(or__16029__auto__)){
return or__16029__auto__;
} else {
return console.error([cljs.core.str(key),cljs.core.str(" is not in "),cljs.core.str(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str(" dictionary")].join(''));
}
});
om_tut.core.adjust_bid = (function adjust_bid(data,id,denomination,adj){
var bid_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)) + adj);
var bank_denom_adjusted = (cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null)) - adj);
if(((bank_denom_adjusted >= (0))) && ((bid_denom_adjusted >= (0)))){
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__30148_SHARP_){
return (p1__30148_SHARP_ - adj);
});})(bid_denom_adjusted,bank_denom_adjusted))
);

return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null),((function (bid_denom_adjusted,bank_denom_adjusted){
return (function (p1__30149_SHARP_){
return (p1__30149_SHARP_ + adj);
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
return React.DOM.td(null,(function (){var disabled = (immune) || (!(om_tut.core.denomination_remaining_QMARK_.call(null,data,denomination))) || ((om_tut.core.nothing_on_figure_QMARK_.call(null,data,id)) && (om_tut.core.figure_limit_reached_QMARK_.call(null,data)));
return React.DOM.button({"onClick": ((function (disabled,immune,amount){
return (function (){
return om_tut.core.adjust_bid.call(null,data,id,denomination,(1));
});})(disabled,immune,amount))
, "className": ((disabled)?"adjust disabled":"adjust enabled"), "disabled": disabled},"\u2191");
})(),(function (){var disabled = (immune) || (cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bids","bids",-1493194652),id,denomination], null)))) || ((om_tut.core.nothing_on_figure_QMARK_.call(null,data,id)) && (om_tut.core.figure_limit_reached_QMARK_.call(null,data)));
return React.DOM.button({"onClick": ((function (disabled,immune,amount){
return (function (){
return om_tut.core.adjust_bid.call(null,data,id,denomination,(-1));
});})(disabled,immune,amount))
, "className": ((disabled)?"adjust disabled":"adjust enabled"), "disabled": disabled},"\u2193");
})(),om.dom.input.call(null,{"value": om_tut.core.dont_show_zero.call(null,amount), "id": [cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "disabled": immune, "type": "text"}));
});
om_tut.core.immunity_class = new cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentHashSet.EMPTY,"immunity-none",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null], null), null),"immunity-blackmail",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-force",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077),null,new cljs.core.Keyword(null,"force","force",781957286),null], null), null),"immunity-both"], true, false);
om_tut.core.bid_row = (function bid_row(data,owner,p__30150){
var map__30155 = p__30150;
var map__30155__$1 = ((cljs.core.seq_QMARK_.call(null,map__30155))?cljs.core.apply.call(null,cljs.core.hash_map,map__30155):map__30155);
var immunities = cljs.core.get.call(null,map__30155__$1,new cljs.core.Keyword(null,"immunities","immunities",1511351521));
var id = cljs.core.get.call(null,map__30155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof om_tut.core.t30156 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30156 = (function (id,immunities,map__30155,p__30150,owner,data,bid_row,meta30157){
this.id = id;
this.immunities = immunities;
this.map__30155 = map__30155;
this.p__30150 = p__30150;
this.owner = owner;
this.data = data;
this.bid_row = bid_row;
this.meta30157 = meta30157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30156.prototype.om$core$IRender$ = true;

om_tut.core.t30156.prototype.om$core$IRender$render$arity$1 = ((function (map__30155,map__30155__$1,immunities,id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td({"className": [cljs.core.str("figure-name "),cljs.core.str(cljs.core.get.call(null,om_tut.core.immunity_class,self__.immunities))].join('')},om_tut.core.localize.call(null,self__.data,self__.id)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"gold","gold",-806826416)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),om_tut.core.denomination_input.call(null,self__.data,self__.id,self__.immunities,new cljs.core.Keyword(null,"force","force",781957286)));
});})(map__30155,map__30155__$1,immunities,id))
;

om_tut.core.t30156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30155,map__30155__$1,immunities,id){
return (function (_30158){
var self__ = this;
var _30158__$1 = this;
return self__.meta30157;
});})(map__30155,map__30155__$1,immunities,id))
;

om_tut.core.t30156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30155,map__30155__$1,immunities,id){
return (function (_30158,meta30157__$1){
var self__ = this;
var _30158__$1 = this;
return (new om_tut.core.t30156(self__.id,self__.immunities,self__.map__30155,self__.p__30150,self__.owner,self__.data,self__.bid_row,meta30157__$1));
});})(map__30155,map__30155__$1,immunities,id))
;

om_tut.core.t30156.cljs$lang$type = true;

om_tut.core.t30156.cljs$lang$ctorStr = "om-tut.core/t30156";

om_tut.core.t30156.cljs$lang$ctorPrWriter = ((function (map__30155,map__30155__$1,immunities,id){
return (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30156");
});})(map__30155,map__30155__$1,immunities,id))
;

om_tut.core.__GT_t30156 = ((function (map__30155,map__30155__$1,immunities,id){
return (function __GT_t30156(id__$1,immunities__$1,map__30155__$2,p__30150__$1,owner__$1,data__$1,bid_row__$1,meta30157){
return (new om_tut.core.t30156(id__$1,immunities__$1,map__30155__$2,p__30150__$1,owner__$1,data__$1,bid_row__$1,meta30157));
});})(map__30155,map__30155__$1,immunities,id))
;

}

return (new om_tut.core.t30156(id,immunities,map__30155__$1,p__30150,owner,data,bid_row,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bid_area = (function bid_area(data,owner){
if(typeof om_tut.core.t30163 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30163 = (function (owner,data,bid_area,meta30164){
this.owner = owner;
this.data = data;
this.bid_area = bid_area;
this.meta30164 = meta30164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30163.prototype.om$core$IRender$ = true;

om_tut.core.t30163.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"figure","figure",-561394079))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p1__30159_SHARP_){
return om.core.build.call(null,om_tut.core.bid_row,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),p1__30159_SHARP_], null));
});})(this$__$1))
,om_tut.core.figures));
});

om_tut.core.t30163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30165){
var self__ = this;
var _30165__$1 = this;
return self__.meta30164;
});

om_tut.core.t30163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30165,meta30164__$1){
var self__ = this;
var _30165__$1 = this;
return (new om_tut.core.t30163(self__.owner,self__.data,self__.bid_area,meta30164__$1));
});

om_tut.core.t30163.cljs$lang$type = true;

om_tut.core.t30163.cljs$lang$ctorStr = "om-tut.core/t30163";

om_tut.core.t30163.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30163");
});

om_tut.core.__GT_t30163 = (function __GT_t30163(owner__$1,data__$1,bid_area__$1,meta30164){
return (new om_tut.core.t30163(owner__$1,data__$1,bid_area__$1,meta30164));
});

}

return (new om_tut.core.t30163(owner,data,bid_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bank_denomination = (function bank_denomination(data,denomination){
var remaining = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bank","bank",-1982531798),denomination], null));
var total = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"original-bank","original-bank",-952771138),denomination], null));
return React.DOM.span(null,React.DOM.span(null,om_tut.core.localize.call(null,data,denomination)),om.dom.input.call(null,{"value": [cljs.core.str(remaining),cljs.core.str("/"),cljs.core.str(total)].join(''), "id": [cljs.core.str("bank-"),cljs.core.str(cljs.core.name.call(null,denomination))].join(''), "size": (1), "readOnly": true, "type": "text"}));
});
om_tut.core.tokens_remaining_QMARK_ = (function tokens_remaining_QMARK_(data){
return om_tut.core.pos_bid_QMARK_.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(data));
});
om_tut.core.too_many_figures_QMARK_ = (function too_many_figures_QMARK_(data){
return ((6) < cljs.core.count.call(null,cljs.core.filter.call(null,om_tut.core.pos_bid_QMARK_,cljs.core.vals.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(data)))));
});
om_tut.core.submit_button = (function submit_button(data,owner){
if(typeof om_tut.core.t30169 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30169 = (function (owner,data,submit_button,meta30170){
this.owner = owner;
this.data = data;
this.submit_button = submit_button;
this.meta30170 = meta30170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30169.prototype.om$core$IRender$ = true;

om_tut.core.t30169.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return cljs.core.println.call(null,"submitting...");
});})(this$__$1))
, "disabled": (om_tut.core.tokens_remaining_QMARK_.call(null,self__.data)) || (om_tut.core.too_many_figures_QMARK_.call(null,self__.data))},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317)));
});

om_tut.core.t30169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30171){
var self__ = this;
var _30171__$1 = this;
return self__.meta30170;
});

om_tut.core.t30169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30171,meta30170__$1){
var self__ = this;
var _30171__$1 = this;
return (new om_tut.core.t30169(self__.owner,self__.data,self__.submit_button,meta30170__$1));
});

om_tut.core.t30169.cljs$lang$type = true;

om_tut.core.t30169.cljs$lang$ctorStr = "om-tut.core/t30169";

om_tut.core.t30169.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30169");
});

om_tut.core.__GT_t30169 = (function __GT_t30169(owner__$1,data__$1,submit_button__$1,meta30170){
return (new om_tut.core.t30169(owner__$1,data__$1,submit_button__$1,meta30170));
});

}

return (new om_tut.core.t30169(owner,data,submit_button,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.bank_area = (function bank_area(data,owner){
if(typeof om_tut.core.t30175 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30175 = (function (owner,data,bank_area,meta30176){
this.owner = owner;
this.data = data;
this.bank_area = bank_area;
this.meta30176 = meta30176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30175.prototype.om$core$IRender$ = true;

om_tut.core.t30175.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"gold","gold",-806826416)),om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"blackmail","blackmail",-1972994077)),om_tut.core.bank_denomination.call(null,self__.data,new cljs.core.Keyword(null,"force","force",781957286)),om.core.build.call(null,om_tut.core.submit_button,self__.data));
});

om_tut.core.t30175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30177){
var self__ = this;
var _30177__$1 = this;
return self__.meta30176;
});

om_tut.core.t30175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30177,meta30176__$1){
var self__ = this;
var _30177__$1 = this;
return (new om_tut.core.t30175(self__.owner,self__.data,self__.bank_area,meta30176__$1));
});

om_tut.core.t30175.cljs$lang$type = true;

om_tut.core.t30175.cljs$lang$ctorStr = "om-tut.core/t30175";

om_tut.core.t30175.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30175");
});

om_tut.core.__GT_t30175 = (function __GT_t30175(owner__$1,data__$1,bank_area__$1,meta30176){
return (new om_tut.core.t30175(owner__$1,data__$1,bank_area__$1,meta30176));
});

}

return (new om_tut.core.t30175(owner,data,bank_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.map_area = (function map_area(data,owner){
if(typeof om_tut.core.t30181 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30181 = (function (owner,data,map_area,meta30182){
this.owner = owner;
this.data = data;
this.map_area = map_area;
this.meta30182 = meta30182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30181.prototype.om$core$IRender$ = true;

om_tut.core.t30181.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location))),React.DOM.td(null,new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location),p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t30181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30183){
var self__ = this;
var _30183__$1 = this;
return self__.meta30182;
});

om_tut.core.t30181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30183,meta30182__$1){
var self__ = this;
var _30183__$1 = this;
return (new om_tut.core.t30181(self__.owner,self__.data,self__.map_area,meta30182__$1));
});

om_tut.core.t30181.cljs$lang$type = true;

om_tut.core.t30181.cljs$lang$ctorStr = "om-tut.core/t30181";

om_tut.core.t30181.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30181");
});

om_tut.core.__GT_t30181 = (function __GT_t30181(owner__$1,data__$1,map_area__$1,meta30182){
return (new om_tut.core.t30181(owner__$1,data__$1,map_area__$1,meta30182));
});

}

return (new om_tut.core.t30181(owner,data,map_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.support_area = (function support_area(data,owner){
if(typeof om_tut.core.t30187 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30187 = (function (owner,data,support_area,meta30188){
this.owner = owner;
this.data = data;
this.support_area = support_area;
this.meta30188 = meta30188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30187.prototype.om$core$IRender$ = true;

om_tut.core.t30187.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,React.DOM.tr(null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"player","player",-97687400))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"support","support",1392531368)))),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.tr(null,React.DOM.td(null,p),React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"support","support",1392531368),p], null))));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t30187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30189){
var self__ = this;
var _30189__$1 = this;
return self__.meta30188;
});

om_tut.core.t30187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30189,meta30188__$1){
var self__ = this;
var _30189__$1 = this;
return (new om_tut.core.t30187(self__.owner,self__.data,self__.support_area,meta30188__$1));
});

om_tut.core.t30187.cljs$lang$type = true;

om_tut.core.t30187.cljs$lang$ctorStr = "om-tut.core/t30187";

om_tut.core.t30187.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30187");
});

om_tut.core.__GT_t30187 = (function __GT_t30187(owner__$1,data__$1,support_area__$1,meta30188){
return (new om_tut.core.t30187(owner__$1,data__$1,support_area__$1,meta30188));
});

}

return (new om_tut.core.t30187(owner,data,support_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.language_flag = (function language_flag(data,title,key){
return React.DOM.img({"onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"lang","lang",-1819677104),key);
}), "className": "language-flag", "title": title, "src": [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,key)),cljs.core.str(".png")].join('')});
});
om_tut.core.languages_area = (function languages_area(data,owner){
if(typeof om_tut.core.t30193 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30193 = (function (owner,data,languages_area,meta30194){
this.owner = owner;
this.data = data;
this.languages_area = languages_area;
this.meta30194 = meta30194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30193.prototype.om$core$IRender$ = true;

om_tut.core.t30193.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om_tut.core.language_flag.call(null,self__.data,"English",new cljs.core.Keyword(null,"us","us",746429226)),om_tut.core.language_flag.call(null,self__.data,"Spanish",new cljs.core.Keyword(null,"mx","mx",-199887020)),om_tut.core.language_flag.call(null,self__.data,"French",new cljs.core.Keyword(null,"fr","fr",1577713888)));
});

om_tut.core.t30193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30195){
var self__ = this;
var _30195__$1 = this;
return self__.meta30194;
});

om_tut.core.t30193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30195,meta30194__$1){
var self__ = this;
var _30195__$1 = this;
return (new om_tut.core.t30193(self__.owner,self__.data,self__.languages_area,meta30194__$1));
});

om_tut.core.t30193.cljs$lang$type = true;

om_tut.core.t30193.cljs$lang$ctorStr = "om-tut.core/t30193";

om_tut.core.t30193.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30193");
});

om_tut.core.__GT_t30193 = (function __GT_t30193(owner__$1,data__$1,languages_area__$1,meta30194){
return (new om_tut.core.t30193(owner__$1,data__$1,languages_area__$1,meta30194));
});

}

return (new om_tut.core.t30193(owner,data,languages_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.signup_area = (function signup_area(data,owner){
if(typeof om_tut.core.t30199 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30199 = (function (owner,data,signup_area,meta30200){
this.owner = owner;
this.data = data;
this.signup_area = signup_area;
this.meta30200 = meta30200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30199.prototype.om$core$IRender$ = true;

om_tut.core.t30199.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,null),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"signup","signup",1961016747))));
});

om_tut.core.t30199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30201){
var self__ = this;
var _30201__$1 = this;
return self__.meta30200;
});

om_tut.core.t30199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30201,meta30200__$1){
var self__ = this;
var _30201__$1 = this;
return (new om_tut.core.t30199(self__.owner,self__.data,self__.signup_area,meta30200__$1));
});

om_tut.core.t30199.cljs$lang$type = true;

om_tut.core.t30199.cljs$lang$ctorStr = "om-tut.core/t30199";

om_tut.core.t30199.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30199");
});

om_tut.core.__GT_t30199 = (function __GT_t30199(owner__$1,data__$1,signup_area__$1,meta30200){
return (new om_tut.core.t30199(owner__$1,data__$1,signup_area__$1,meta30200));
});

}

return (new om_tut.core.t30199(owner,data,signup_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.spy_select = (function spy_select(data,owner){
if(typeof om_tut.core.t30207 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30207 = (function (owner,data,spy_select,meta30208){
this.owner = owner;
this.data = data;
this.spy_select = spy_select;
this.meta30208 = meta30208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30207.prototype.om$core$IRender$ = true;

om_tut.core.t30207.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection = new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection,this$__$1){
return (function (p__30210){
var map__30211 = p__30210;
var map__30211__$1 = ((cljs.core.seq_QMARK_.call(null,map__30211))?cljs.core.apply.call(null,cljs.core.hash_map,map__30211):map__30211);
var cap = cljs.core.get.call(null,map__30211__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__30211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,id)),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__30211,map__30211__$1,cap,id,selection,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,p], null);
var selected = cljs.core._EQ_.call(null,combo,selection);
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,map__30211,map__30211__$1,cap,id,selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),combo);
});})(combo,selected,map__30211,map__30211__$1,cap,id,selection,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,p], null))));
});})(map__30211,map__30211__$1,cap,id,selection,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"spy-selection","spy-selection",-73130664),null);
});})(selection,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_(selection)?React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

om_tut.core.t30207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30209){
var self__ = this;
var _30209__$1 = this;
return self__.meta30208;
});

om_tut.core.t30207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30209,meta30208__$1){
var self__ = this;
var _30209__$1 = this;
return (new om_tut.core.t30207(self__.owner,self__.data,self__.spy_select,meta30208__$1));
});

om_tut.core.t30207.cljs$lang$type = true;

om_tut.core.t30207.cljs$lang$ctorStr = "om-tut.core/t30207";

om_tut.core.t30207.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30207");
});

om_tut.core.__GT_t30207 = (function __GT_t30207(owner__$1,data__$1,spy_select__$1,meta30208){
return (new om_tut.core.t30207(owner__$1,data__$1,spy_select__$1,meta30208));
});

}

return (new om_tut.core.t30207(owner,data,spy_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.apothecary_select = (function apothecary_select(data,owner){
if(typeof om_tut.core.t30217 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30217 = (function (owner,data,apothecary_select,meta30218){
this.owner = owner;
this.data = data;
this.apothecary_select = apothecary_select;
this.meta30218 = meta30218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30217.prototype.om$core$IRender$ = true;

om_tut.core.t30217.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var selection_1 = new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (selection_1,selection_2,this$__$1){
return (function (p__30220){
var map__30221 = p__30220;
var map__30221__$1 = ((cljs.core.seq_QMARK_.call(null,map__30221))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var cap = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,id)),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__30221,map__30221__$1,cap,id,selection_1,selection_2,this$__$1){
return (function (p){
var combo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,p], null);
var selected = (cljs.core._EQ_.call(null,combo,selection_1)) || (cljs.core._EQ_.call(null,combo,selection_2));
return React.DOM.td({"className": ((selected)?"selected":null)},React.DOM.button({"onClick": ((function (combo,selected,map__30221,map__30221__$1,cap,id,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),combo);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),combo);
}
});})(combo,selected,map__30221,map__30221__$1,cap,id,selection_1,selection_2,this$__$1))
},cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,p], null))));
});})(map__30221,map__30221__$1,cap,id,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.button({"onClick": ((function (selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-1","apothecary-selection-1",-362138571),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"apothecary-selection-2","apothecary-selection-2",871440194),null);
});})(selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_((function (){var and__16017__auto__ = selection_1;
if(cljs.core.truth_(and__16017__auto__)){
return selection_2;
} else {
return and__16017__auto__;
}
})())?React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))):null));
});

om_tut.core.t30217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30219){
var self__ = this;
var _30219__$1 = this;
return self__.meta30218;
});

om_tut.core.t30217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30219,meta30218__$1){
var self__ = this;
var _30219__$1 = this;
return (new om_tut.core.t30217(self__.owner,self__.data,self__.apothecary_select,meta30218__$1));
});

om_tut.core.t30217.cljs$lang$type = true;

om_tut.core.t30217.cljs$lang$ctorStr = "om-tut.core/t30217";

om_tut.core.t30217.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30217");
});

om_tut.core.__GT_t30217 = (function __GT_t30217(owner__$1,data__$1,apothecary_select__$1,meta30218){
return (new om_tut.core.t30217(owner__$1,data__$1,apothecary_select__$1,meta30218));
});

}

return (new om_tut.core.t30217(owner,data,apothecary_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.messenger_select = (function messenger_select(data,owner){
if(typeof om_tut.core.t30229 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30229 = (function (owner,data,messenger_select,meta30230){
this.owner = owner;
this.data = data;
this.messenger_select = messenger_select;
this.meta30230 = meta30230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30229.prototype.om$core$IRender$ = true;

om_tut.core.t30229.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var reassignments = new cljs.core.Keyword(null,"reassignments","reassignments",945581004).cljs$core$IFn$_invoke$arity$1(self__.data);
var any_reassignments = (cljs.core.count.call(null,reassignments) > (0));
var selection_1 = new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248).cljs$core$IFn$_invoke$arity$1(self__.data);
var selection_2 = new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (p__30232){
var map__30233 = p__30232;
var map__30233__$1 = ((cljs.core.seq_QMARK_.call(null,map__30233))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);
var cap = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
var id = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.apply.call(null,om.dom.tr,{"className": (((cljs.core._EQ_.call(null,id,selection_1)) || (cljs.core._EQ_.call(null,id,selection_2)))?"selected":null)},React.DOM.td(null,React.DOM.button({"disabled": (function (){var or__16029__auto__ = (cljs.core.not.call(null,selection_1)) && (cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,"Rob"], null))));
if(or__16029__auto__){
return or__16029__auto__;
} else {
var and__16017__auto__ = selection_1;
if(cljs.core.truth_(and__16017__auto__)){
return (cap <= cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id], null)))));
} else {
return and__16017__auto__;
}
}
})(), "onClick": ((function (map__30233,map__30233__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
if(cljs.core.truth_(selection_1)){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),id);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),id);
}
});})(map__30233,map__30233__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,id))),React.DOM.td(null,cap),cljs.core.map.call(null,((function (map__30233,map__30233__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (player){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),id,player], null)));
});})(map__30233,map__30233__$1,cap,id,reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data))),((any_reassignments)?cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (p__30234){
var vec__30235 = p__30234;
var l1 = cljs.core.nth.call(null,vec__30235,(0),null);
var l2 = cljs.core.nth.call(null,vec__30235,(1),null);
return React.DOM.li(null,[cljs.core.str(om_tut.core.localize.call(null,self__.data,l1)),cljs.core.str(" -> "),cljs.core.str(om_tut.core.localize.call(null,self__.data,l2))].join(''));
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
,reassignments)):null),React.DOM.button({"onClick": ((function (reassignments,any_reassignments,selection_1,selection_2,this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reassignments","reassignments",945581004),cljs.core.PersistentVector.EMPTY);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-1","messenger-selection-1",376970248),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"messenger-selection-2","messenger-selection-2",1337753110),null);
});})(reassignments,any_reassignments,selection_1,selection_2,this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"clear","clear",1877104959))),(cljs.core.truth_((function (){var and__16017__auto__ = selection_1;
if(cljs.core.truth_(and__16017__auto__)){
var and__16017__auto____$1 = selection_2;
if(cljs.core.truth_(and__16017__auto____$1)){
return ((2) > cljs.core.count.call(null,reassignments));
} else {
return and__16017__auto____$1;
}
} else {
return and__16017__auto__;
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
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"add","add",235287739))):null),React.DOM.button(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"submit","submit",-49315317))));
});

om_tut.core.t30229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30231){
var self__ = this;
var _30231__$1 = this;
return self__.meta30230;
});

om_tut.core.t30229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30231,meta30230__$1){
var self__ = this;
var _30231__$1 = this;
return (new om_tut.core.t30229(self__.owner,self__.data,self__.messenger_select,meta30230__$1));
});

om_tut.core.t30229.cljs$lang$type = true;

om_tut.core.t30229.cljs$lang$ctorStr = "om-tut.core/t30229";

om_tut.core.t30229.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30229");
});

om_tut.core.__GT_t30229 = (function __GT_t30229(owner__$1,data__$1,messenger_select__$1,meta30230){
return (new om_tut.core.t30229(owner__$1,data__$1,messenger_select__$1,meta30230));
});

}

return (new om_tut.core.t30229(owner,data,messenger_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.mayor_select = (function mayor_select(data,owner){
if(typeof om_tut.core.t30239 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30239 = (function (owner,data,mayor_select,meta30240){
this.owner = owner;
this.data = data;
this.mayor_select = mayor_select;
this.meta30240 = meta30240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30239.prototype.om$core$IRender$ = true;

om_tut.core.t30239.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"location","location",1815599388))),React.DOM.td(null,om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"cap","cap",-817621587))),cljs.core.map.call(null,cljs.core.partial.call(null,om.dom.td,null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.map.call(null,((function (this$__$1){
return (function (location){
return cljs.core.apply.call(null,om.dom.tr,null,React.DOM.td(null,React.DOM.button({"disabled": (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)], null)))) >= new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)), "onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"take-bids","take-bids",612015680));
});})(this$__$1))
},om_tut.core.localize.call(null,self__.data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)))),React.DOM.td(null,new cljs.core.Keyword(null,"cap","cap",-817621587).cljs$core$IFn$_invoke$arity$1(location)),cljs.core.map.call(null,((function (this$__$1){
return (function (p){
return React.DOM.td(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"influence","influence",1453493017),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location),p], null)));
});})(this$__$1))
,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this$__$1))
,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t30239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30241){
var self__ = this;
var _30241__$1 = this;
return self__.meta30240;
});

om_tut.core.t30239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30241,meta30240__$1){
var self__ = this;
var _30241__$1 = this;
return (new om_tut.core.t30239(self__.owner,self__.data,self__.mayor_select,meta30240__$1));
});

om_tut.core.t30239.cljs$lang$type = true;

om_tut.core.t30239.cljs$lang$ctorStr = "om-tut.core/t30239";

om_tut.core.t30239.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30239");
});

om_tut.core.__GT_t30239 = (function __GT_t30239(owner__$1,data__$1,mayor_select__$1,meta30240){
return (new om_tut.core.t30239(owner__$1,data__$1,mayor_select__$1,meta30240));
});

}

return (new om_tut.core.t30239(owner,data,mayor_select,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.debug_panel = (function debug_panel(data,owner){
if(typeof om_tut.core.t30245 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30245 = (function (owner,data,debug_panel,meta30246){
this.owner = owner;
this.data = data;
this.debug_panel = debug_panel;
this.meta30246 = meta30246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30245.prototype.om$core$IRender$ = true;

om_tut.core.t30245.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

om_tut.core.t30245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30247){
var self__ = this;
var _30247__$1 = this;
return self__.meta30246;
});

om_tut.core.t30245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30247,meta30246__$1){
var self__ = this;
var _30247__$1 = this;
return (new om_tut.core.t30245(self__.owner,self__.data,self__.debug_panel,meta30246__$1));
});

om_tut.core.t30245.cljs$lang$type = true;

om_tut.core.t30245.cljs$lang$ctorStr = "om-tut.core/t30245";

om_tut.core.t30245.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30245");
});

om_tut.core.__GT_t30245 = (function __GT_t30245(owner__$1,data__$1,debug_panel__$1,meta30246){
return (new om_tut.core.t30245(owner__$1,data__$1,debug_panel__$1,meta30246));
});

}

return (new om_tut.core.t30245(owner,data,debug_panel,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.lobby_area = (function lobby_area(data,owner){
if(typeof om_tut.core.t30251 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30251 = (function (owner,data,lobby_area,meta30252){
this.owner = owner;
this.data = data;
this.lobby_area = lobby_area;
this.meta30252 = meta30252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30251.prototype.om$core$IRender$ = true;

om_tut.core.t30251.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

om_tut.core.t30251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30253){
var self__ = this;
var _30253__$1 = this;
return self__.meta30252;
});

om_tut.core.t30251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30253,meta30252__$1){
var self__ = this;
var _30253__$1 = this;
return (new om_tut.core.t30251(self__.owner,self__.data,self__.lobby_area,meta30252__$1));
});

om_tut.core.t30251.cljs$lang$type = true;

om_tut.core.t30251.cljs$lang$ctorStr = "om-tut.core/t30251";

om_tut.core.t30251.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30251");
});

om_tut.core.__GT_t30251 = (function __GT_t30251(owner__$1,data__$1,lobby_area__$1,meta30252){
return (new om_tut.core.t30251(owner__$1,data__$1,lobby_area__$1,meta30252));
});

}

return (new om_tut.core.t30251(owner,data,lobby_area,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.root_view = (function root_view(data,owner){
if(typeof om_tut.core.t30280 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30280 = (function (owner,data,root_view,meta30281){
this.owner = owner;
this.data = data;
this.root_view = root_view;
this.meta30281 = meta30281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30280.prototype.om$core$IRenderState$ = true;

om_tut.core.t30280.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,om.core.build.call(null,om_tut.core.languages_area,self__.data),om.core.build.call(null,om_tut.core.debug_panel,self__.data),(function (){var G__30283 = (((new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__30283) {
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

om_tut.core.t30280.prototype.om$core$IWillMount$ = true;

om_tut.core.t30280.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,delete$,___$1){
return (function (){
var f__19080__auto__ = (function (){var switch__19064__auto__ = ((function (c__19079__auto__,delete$,___$1){
return (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (4))){
var inst_30286 = (state_30293[(2)]);
var inst_30287 = (function (){var contact = inst_30286;
return ((function (contact,inst_30286,state_val_30294,c__19079__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_30286,state_val_30294,c__19079__auto__,delete$,___$1){
return (function (p1__30254_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__30254_SHARP_);
});})(contact,inst_30286,state_val_30294,c__19079__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_30286,state_val_30294,c__19079__auto__,delete$,___$1))
})();
var inst_30288 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_30287);
var state_30293__$1 = (function (){var statearr_30295 = state_30293;
(statearr_30295[(7)] = inst_30288);

return statearr_30295;
})();
var statearr_30296_30306 = state_30293__$1;
(statearr_30296_30306[(2)] = null);

(statearr_30296_30306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (3))){
var inst_30291 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30293__$1,inst_30291);
} else {
if((state_val_30294 === (2))){
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(4),delete$);
} else {
if((state_val_30294 === (1))){
var state_30293__$1 = state_30293;
var statearr_30297_30307 = state_30293__$1;
(statearr_30297_30307[(2)] = null);

(statearr_30297_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19079__auto__,delete$,___$1))
;
return ((function (switch__19064__auto__,c__19079__auto__,delete$,___$1){
return (function() {
var state_machine__19065__auto__ = null;
var state_machine__19065__auto____0 = (function (){
var statearr_30301 = [null,null,null,null,null,null,null,null];
(statearr_30301[(0)] = state_machine__19065__auto__);

(statearr_30301[(1)] = (1));

return statearr_30301;
});
var state_machine__19065__auto____1 = (function (state_30293){
while(true){
var ret_value__19066__auto__ = (function (){try{while(true){
var result__19067__auto__ = switch__19064__auto__.call(null,state_30293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19067__auto__;
}
break;
}
}catch (e30302){if((e30302 instanceof Object)){
var ex__19068__auto__ = e30302;
var statearr_30303_30308 = state_30293;
(statearr_30303_30308[(5)] = ex__19068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30309 = state_30293;
state_30293 = G__30309;
continue;
} else {
return ret_value__19066__auto__;
}
break;
}
});
state_machine__19065__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return state_machine__19065__auto____0.call(this);
case 1:
return state_machine__19065__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19065__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19065__auto____0;
state_machine__19065__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19065__auto____1;
return state_machine__19065__auto__;
})()
;})(switch__19064__auto__,c__19079__auto__,delete$,___$1))
})();
var state__19081__auto__ = (function (){var statearr_30304 = f__19080__auto__.call(null);
(statearr_30304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_30304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,delete$,___$1))
);

return c__19079__auto__;
});

om_tut.core.t30280.prototype.om$core$IInitState$ = true;

om_tut.core.t30280.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

om_tut.core.t30280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30282){
var self__ = this;
var _30282__$1 = this;
return self__.meta30281;
});

om_tut.core.t30280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30282,meta30281__$1){
var self__ = this;
var _30282__$1 = this;
return (new om_tut.core.t30280(self__.owner,self__.data,self__.root_view,meta30281__$1));
});

om_tut.core.t30280.cljs$lang$type = true;

om_tut.core.t30280.cljs$lang$ctorStr = "om-tut.core/t30280";

om_tut.core.t30280.cljs$lang$ctorPrWriter = (function (this__16616__auto__,writer__16617__auto__,opt__16618__auto__){
return cljs.core._write.call(null,writer__16617__auto__,"om-tut.core/t30280");
});

om_tut.core.__GT_t30280 = (function __GT_t30280(owner__$1,data__$1,root_view__$1,meta30281){
return (new om_tut.core.t30280(owner__$1,data__$1,root_view__$1,meta30281));
});

}

return (new om_tut.core.t30280(owner,data,root_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_tut.core.root_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));

//# sourceMappingURL=core.js.map?rel=1442263339544