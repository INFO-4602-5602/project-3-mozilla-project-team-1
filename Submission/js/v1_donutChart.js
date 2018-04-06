var donut = donutChart()
  .width(200)
  .height(200)
  .cornerRadius(3) // sets how rounded the corners are on each slice
  .padAngle(0.015) // effectively dictates the gap between slices
  .variable_sub(20)
  .variable_total(100);

d3.select('#vis_1_donut')
  .call(donut);

function donutChart() {
  var width,
    height,
    margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    colour = d3.scaleOrdinal(d3.schemeCategory20c), // colour scheme
    variable, // value in data that will dictate proportions on chart
    variable_sub,
    variable_total,
    category, // compare data by
    padAngle, // effectively dictates the gap between slices
    floatFormat = d3.format('.4r'),
    cornerRadius, // sets how rounded the corners are on each slice
    percentFormat = d3.format(',.2%');

  function chart() {
    var dataset = [{
        vsub: "s1",
        value: variable_sub
      },
      {
        vsub: "s2",
        value: (variable_total - variable_sub)
      },
    ];

    var radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    var svg = d3.select('#vis_1_donut')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    var donutWidth = 55;

    var arc = d3.arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function(d) {
        return d.value;
      })
      .sort(null);

    var path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return color(d.data.vsub);
      });

    var text = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.5em')
      .attr('y', 12)
      .text(variable_sub + "/" + variable_total);
  }

  // getter and setter functions.
  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.margin = function(value) {
    if (!arguments.length) return margin;
    margin = value;
    return chart;
  };

  chart.radius = function(value) {
    if (!arguments.length) return radius;
    radius = value;
    return chart;
  };

  chart.padAngle = function(value) {
    if (!arguments.length) return padAngle;
    padAngle = value;
    return chart;
  };

  chart.cornerRadius = function(value) {
    if (!arguments.length) return cornerRadius;
    cornerRadius = value;
    return chart;
  };

  chart.colour = function(value) {
    if (!arguments.length) return colour;
    colour = value;
    return chart;
  };

  chart.variable = function(value) {
    if (!arguments.length) return variable;
    variable = value;
    return chart;
  };
  chart.variable_sub = function(value) {
    if (!arguments.length) return variable_sub;
    variable_sub = value;
    return chart;
  };
  chart.variable_total = function(value) {
    if (!arguments.length) return variable_total;
    variable_total = value;
    return chart;
  };

  chart.category = function(value) {
    if (!arguments.length) return category;
    category = value;
    return chart;
  };

  return chart;
}