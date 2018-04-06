/////////vis for Chart 4/////////////

var biPartitePlot = function(chartElementId)
{
	var biPartiteObj = new biPartite();
	var width = 1500, height = 610, margin = {b:0, t:60, l:500, r:10};

	var svg = d3.select("#"+chartElementId)
		.append("svg").attr('width',width).attr('height',(height+margin.b+margin.t))
		.append("g").attr("transform","translate("+ margin.l+","+margin.t+")");

	this.bP = biPartiteObj.bP;
	this.biPartite = biPartiteObj;
	this.svg = svg;
};

biPartitePlot.prototype.draw = function(data){
	this.bP.draw(data, this.svg);
};

biPartitePlot.prototype.partData = function(data, index){
	return this.bP.partData(data, index);
};

d3.json("../data/vis_4_1.json", function(v4_data_1) {
	d3.json("../data/vis_4_2.json", function(v4_data_2) {
	var plot = new biPartitePlot("bg4");
	var data = [
	{data: plot.partData(v4_data_1, 2), id:'TechResponsibility', header:["Tech", "Who", "Tech Level & Who protect safety, security and privacy online"]}
	,{data: plot.partData(v4_data_2, 2), id:'TechResponsibilityFuture', header:["Tech", "Attitude", "Tech Level & Attitude towards a connected future"]}
	];
	plot.draw(data);});
});
