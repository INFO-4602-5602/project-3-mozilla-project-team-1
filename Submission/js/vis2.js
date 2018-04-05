var div = d3v3.select("#chart_2").append("div").attr("class", "toolTip");
var dataset = [
    { name: 'Firearms', total: 8124, percent: 67.9 },
    { name: 'Knives or cutting instruments', total: 1567, percent: 13.1 },
    { name: 'Other weapons', total: 1610, percent: 13.5 },
    { name: 'Hands, fists, feet, etc.', total: 660, percent: 5.5 }
];

var width = 960,
    height = 600,
    radius = Math.min(width, height-100) / 2;

var color = d3v3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

var arc = d3v3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3v3.layout.pie()
    .sort(null)
     .startAngle(1.1*Math.PI)
    .endAngle(3.1*Math.PI)
    .value(function(d) { return d.total; });

var svg = d3v3.select("#chart_2").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2.4 + "," + height /2 + ")");


 var g = svg.selectAll(".arc")
      .data(pie(dataset))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
    .style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
    return i * 500; }).duration(500)
    .attrTween('d', function(d) {
        var i = d3v3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
            d.endAngle = i(t); 
            return arc(d)
            }
        }); 
  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .transition()
      .delay(1000)
      .text(function(d) { return d.data.name; });

    d3v3.selectAll("path").on("mousemove", function(d) {
        //div.style("left", d3v3.event.pageX+"px");
          //div.style("top", d3v3.event.pageY+"px");
          div.style("display", "inline-block");//.attr("transform", "translate(" + 1000 + "," + 1000 + ")");
    div.html((d.data.name)+"<br>"+(d.data.total) + "<br>"+(d.data.percent) + "%");
});
      
d3v3.selectAll("path").on("mouseout", function(d){
    div.style("display", "none");
});
      
      
//d3v3.select("body").transition().style("background-color", "#d3v3");
function type(d) {
  d.total = +d.total;
  return d;
}

