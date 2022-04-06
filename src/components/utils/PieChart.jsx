import React from 'react';
import * as d3 from 'd3';

const PieChart = (props) => {
  const { data, outerRadius, innerRadius } = props;

  const width = 2 * outerRadius;
  const height = 2 * outerRadius;

  const colorScale = d3
    .scaleOrdinal()
    .domain(['Basic Tees', 'Custom Short Pants', 'Super Hoodies'])
    .range(['#98D89E', '#F6DC7D', '#EE8484']);

  const drawChart = () => {
    // Remove the old svg
    d3.select('#pie-container').select('svg').remove();

    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);
  };

  drawChart();

  return <div id='pie-container' />;
};

export default PieChart;
