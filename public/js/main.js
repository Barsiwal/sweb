var graph = Viva.Graph.graph();

var graphics = Viva.Graph.View.svgGraphics(),
    nodeSize = 30;
$.getJSON( "../download/got.json", function( data ) {
    $.each(data,function(key,val){
        if(key==="graph"){
            val.forEach(function(data){
                if(data.type==="owl:Class"&&data.type!="owl:ObjectProperty")
                    graph.addNode(data.id,{size:40,color:'r'});
            });
        }
    });
});
graph.addNode('thing', {
    size: 60,
    color: 'r'
});
graph.addNode('person', {
    size: 40,
    color: 'r'
});
graph.addNode('Continent', {
    size: 40,
    color: 'r'
});
graph.addNode('sword', {
    size: 40,
    color: 'r'
});
graph.addNode('Gods', {
    size: 40,
    color: 'r'
});
graph.addNode('Castle', {
    size: 40,
    color: 'r'
});
graph.addNode('Sigil', {
    size: 40,
    color: 'r'
});
graph.addNode('Battle', {
    size: 40,
    color: 'r'
});
graph.addNode('Creature', {
    size: 40,
    color: 'r'
});
graph.addNode('House', {
    size: 40,
    color: 'r'
});
graph.addNode('WhiteWalkers', {
    size: 20,
    color: 'r'
});
graph.addNode('theChildren', {
    size: 20,
    color: 'r'
});
graph.addNode('Wargs', {
    size: 20,
    color: 'r'
});
graph.addNode('Wildling', {
    size: 20,
    color: 'r'
});
graph.addNode('direwolf', {
    size: 20,
    color: 'r'
});
graph.addNode('dragon', {
    size: 20,
    color: 'r'
});
graph.addNode('ValyrianSteel', {
    size: 20,
    color: 'r'
});
graph.addNode('NormalSword', {
    size: 20,
    color: 'r'
});
graph.addNode('winterfell', {
    size: 20,
    color: 'g'
});
graph.addNode('harrenhall', {
    size: 20,
    color: 'g'
});
var DireWolfs = ['Ghost', 'ShaggyDog', 'Lady', 'Nymeria', 'Summer'];
var People = ['Jon_Snow', 'Arya_Stark', 'Tyrion_Lannister', 'Denarys_Targaryen'];
var Houses = ['HouseStark', 'HouseLannister', 'HouseTargaryen'];
var Gods = ['ManyFacedGods', 'TheRedGods', 'TheGreatWhite', 'TheOldGods'];
Gods.forEach(function (items) {
    graph.addNode(items, {
        size: 20,
        color: 'g'
    });
});
DireWolfs.forEach(function (items) {
    graph.addNode(items, {
        size: 20,
        color: 'g'
    });
});
Houses.forEach(function (items) {
    graph.addNode(items, {
        size: 20,
        color: 'g'
    });
});
People.forEach(function (items) {
    graph.addNode(items, {
        size: 20,
        color: 'g'
    });
});
////////////////////////////////
var NymOwn = ['Arya_Stark'];
var LongClawOwner = ['Jon_Snow'];
var GhostOwner = ['Jon_Snow'];
var DrogonOwner = ['Denarys_Targaryen'];
var HouseTargaryen = ['Denarys_Targaryen'];
var HouseLannister = ['Tyrion_Lannister'];
graph.addNode('LongClaw', {
    size: 20,
    color: 'g'
});
graph.addNode('oathKeeper', {
    size: 20,
    color: 'g'
});
graph.addNode('Drogon', {
    size: 20,
    color: 'g'
});
graph.addNode('Westeros', {
    size: 20,
    color: 'g'
});
graph.addNode('Essos', {
    size: 20,
    color: 'g'
});
graph.addNode('DothrakiSea', {
    size: 20,
    color: 'g'
});
graph.addNode('theNorth', {
    size: 20,
    color: 'g'
});
graph.addNode('Valyria', {
    size: 20,
    color: 'g'
});
////////////////////////////////
graph.addLink("Nymeria", "Arya_Stark");
graph.addLink("LongClaw", "Jon_Snow");
graph.addLink("Ghost", "Jon_Snow");
graph.addLink("Drogon", "dragon");
graph.addLink("Drogon", "Denarys_Targaryen");
graph.addLink("HouseTargaryen", "Denarys_Targaryen");
graph.addLink("HouseTargaryen", "Valyria");
graph.addLink("HouseLannister", "Tyrion_Lannister");
graph.addLink("ValyrianSteel", "oathKeeper");
graph.addLink("Continent", "Westeros");
graph.addLink("Continent", "Essos");
graph.addLink("theNorth", "Westeros");
graph.addLink("DothrakiSea", "Essos");
graph.addLink("Valyria", "Essos");
//
///////////////////////
var WesterosPeople = ['Jon_Snow', 'Arya_Stark', 'Tyrion_Lannister', 'HouseStark', 'HouseLannister'];
var EssosPeople = ['Denarys_Targaryen'];
Gods.forEach(function (items) {
    graph.addLink('Gods', items);
});
WesterosPeople.forEach(function (items) {
    graph.addLink('Westeros', items);
});
graph.addLink("Essos", "Denarys_Targaryen");
graph.addLink("Essos", "HouseTargaryen");
graph.addLink("Essos", "Denarys_Targaryen");
//
///////////////////////////
var Things = ['person', 'Continent', 'sword', 'Gods', 'Castle', 'Sigil', 'Battle', 'Creature', 'House'];
var Castles = ['winterfell', 'harrenhall'];
var Swords = ['ValyrianSteel', 'NormalSword'];
var Persons = ['WhiteWalkers', 'theChildren', 'Wargs', 'Wildling'];
var Creatures = ["direwolf", "dragon"];
Things.forEach(function (items) {
    graph.addLink('thing', items);
});
Houses.forEach(function (items) {
    graph.addLink('House', items);
});
Castles.forEach(function (items) {
    graph.addLink('Castle', items);
});
DireWolfs.forEach(function (items) {
    graph.addLink('direwolf', items);
});
Swords.forEach(function (items) {
    graph.addLink('sword', items);
});
Persons.forEach(function (items) {
    graph.addLink('person', items);
});
People.forEach(function (items) {
    graph.addLink('person', items);
});
Creatures.forEach(function (items) {
    graph.addLink('Creature', items);
});
var HouseStark = ['Jon_Snow', 'Arya_Stark'];
HouseStark.forEach(function (items) {
    graph.addLink('HouseStark', items);
});

graphics.node(function (node) {
    var ui = Viva.Graph.svg('g'),
        svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
        img = Viva.Graph.svg('image')
        .attr('width', node.data.size)
        .attr('height', node.data.size)
        .attr('class', "clickme")
        .link('image/' + node.data.color + '.png');

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
