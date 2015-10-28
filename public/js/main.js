var graph = Viva.Graph.graph();

var graphics = Viva.Graph.View.svgGraphics(),
    nodeSize = 30;

graph.addNode('thing',{size:60,color:'r'});
graph.addNode('person',{size:40,color:'r'});
graph.addNode('continent',{size:40,color:'r'});
graph.addNode('sword',{size:40,color:'r'});
graph.addNode('God',{size:40,color:'r'});
graph.addNode('Castle',{size:40,color:'r'});
graph.addNode('Sigil',{size:40,color:'r'});
graph.addNode('Battle',{size:40,color:'r'});
graph.addNode('Creature',{size:40,color:'r'});
graph.addNode('House',{size:40,color:'r'});
graph.addNode('WhiteWalkers',{size:20,color:'r'});
graph.addNode('theChildren',{size:20,color:'r'});
graph.addNode('Wargs',{size:20,color:'r'});
graph.addNode('Wildling',{size:20,color:'r'});
graph.addNode('direwolf',{size:20,color:'r'});
graph.addNode('dragon',{size:20,color:'r'});
graph.addNode('ValyrianSteel',{size:20,color:'r'});
graph.addNode('NormalSword',{size:20,color:'r'});
graph.addNode('winterfell',{size:20,color:'g'});
graph.addNode('harrenhall',{size:20,color:'g'});
var DireWolfs =['ghost','shaggyDog','Lady','Nymeria'];
var People = ['JonSnow', 'AryaStark', 'TyrionLannister','DenarysTargaryen'];
var Houses = ['HouseStark','HouseLannister','HouseTargaryen'];
var Gods = ['ManyFacedGod','TheRedGod','TheGreatWhite','TheOldGod'];
Gods.forEach(function(items){
    graph.addNode(items,{size:20,color:'g'});
});
DireWolfs.forEach(function(items){
    graph.addNode(items,{size:20,color:'g'});
});
Houses.forEach(function(items){
    graph.addNode(items,{size:20,color:'g'});
});
People.forEach(function(items){
    graph.addNode(items,{size:20,color:'g'});
});
////////////////////////////////
var NymOwn = ['AryaStark'];
var LongClawOwner = ['JonSnow'];
var GhostOwner = ['JonSnow'];
var DrogonOwner = ['DenarysTargaryen'];
var HouseTargaryen = ['DenarysTargaryen'];
var HouseLannister = ['TyrionLannister'];
graph.addNode('LongClaw',{size:20,color:'g'});
graph.addNode('oathKeeper',{size:20,color:'g'});
graph.addNode('drogon',{size:20,color:'g'});
graph.addNode('Westeros',{size:20,color:'g'});
graph.addNode('Essos',{size:20,color:'g'});
graph.addNode('DothrakiSea',{size:20,color:'g'});
graph.addNode('theNorth',{size:20,color:'g'});
graph.addNode('Valyria',{size:20,color:'g'});
//////////////////////////////
graph.addLink("Nymeria","AryaStark");
graph.addLink("LongClaw","JonSnow");
graph.addLink("ghost","JonSnow");
graph.addLink("drogon","dragon");
graph.addLink("drogon","DenarysTargaryen");
graph.addLink("HouseTargaryen","DenarysTargaryen");
graph.addLink("HouseTargaryen","Valyria");
graph.addLink("HouseLannister","TyrionLannister");
graph.addLink("ValyrianSteel","oathKeeper");
graph.addLink("continent","Westeros");
graph.addLink("continent","Essos");
graph.addLink("theNorth","Westeros");
graph.addLink("DothrakiSea","Essos");
graph.addLink("Valyria","Essos");

/////////////////////
var WesterosPeople = ['JonSnow','AryaStark','TyrionLannister','HouseStark','HouseLannister'];
var EssosPeople = ['DenarysTargaryen'];
Gods.forEach(function(items){
    graph.addLink('God',items);
});
WesterosPeople.forEach(function(items){
    graph.addLink('Westeros',items);
});
graph.addLink("Essos","DenarysTargaryen");
graph.addLink("Essos","HouseTargaryen");
graph.addLink("Essos","DenarysTargaryen");

/////////////////////////
var Things=['person','continent','sword','God','Castle','Sigil','Battle','Creature','House'];
var Castles = ['winterfell','harrenhall'];
var Swords = ['ValyrianSteel','NormalSword'];
var Persons = ['WhiteWalkers','theChildren','Wargs','Wildling'];
var Creatures = ["direwolf","dragon"];
Things.forEach(function(items){
    graph.addLink('thing',items);
});
Houses.forEach(function(items){
    graph.addLink('House',items);
});
Castles.forEach(function(items){
    graph.addLink('Castle',items);
});
DireWolfs.forEach(function(items){
    graph.addLink('direwolf',items);
});
Swords.forEach(function(items){
    graph.addLink('sword',items);
});
Persons.forEach(function(items){
    graph.addLink('person',items);
});
People.forEach(function(items){
    graph.addLink('person',items);
});
Creatures.forEach(function(items){
    graph.addLink('Creature',items);
});
var HouseStark = ['JonSnow','AryaStark'];
HouseStark.forEach(function(items){
    graph.addLink('HouseStark',items);
});
                  
graphics.node(function (node) {
    var ui = Viva.Graph.svg('g'),
        svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
        img = Viva.Graph.svg('image')
        .attr('width', node.data.size)
        .attr('height', node.data.size)
        .attr('class',"yoyo")
        .link('image/'+node.data.color+'.png');

    ui.append(svgText);
    ui.append(img);
    return ui;
}).placeNode(function (nodeUI, pos) {
    nodeUI.attr('transform',
        'translate(' +
        (pos.x - nodeSize / 2) + ',' + (pos.y - nodeSize / 2) +
        ')');
});
var renderer = Viva.Graph.View.renderer(graph, {
    graphics: graphics
});
renderer.run();