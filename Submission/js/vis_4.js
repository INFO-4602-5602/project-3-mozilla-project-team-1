/////////vis for Chart 4/////////////

var biPartitePlot = function(chartElementId)
{
	var biPartiteObj = new biPartite();
	var width = 1100, height = 610, margin = {b:0, t:40, l:170, r:50};

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

d3.json("../data/vis_4_b.json", function(v4_data) {
	var plot = new biPartitePlot("bg4");
	var data = [
	{data: plot.partData(v4_data, 2), id:'TechResponsibility', header:["Tech", "Res", "Tech Level & Responsibility"]}
	//,{data: plot.partData(v4_data,2), id:'Sales', header:["Channel","State", "Sales"]}
	];
	plot.draw(data);
});
