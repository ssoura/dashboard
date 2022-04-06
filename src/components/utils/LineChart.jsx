import React, { useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data = [], dimensions = {} }) => {
  const svgRef = useRef(null);
  const { width, height, margin = {} } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  const xScale = d3
    .scaleTime()
    .domain([
      d3.min(data[0].items, (d) => 0),
      d3.max(data[0].items, (d) => d.index),
    ])
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([
      d3.min(data[0].items, (d) => 0),
      d3.max(data[0].items, (d) => d.age + 10),
    ])
    .range([height, 0]);

  // Create root container where we will append all other chart elements
  const svgEl = d3.select(svgRef.current);
  svgEl.selectAll('*').remove(); // Clear svg content before adding new elements
  const svg = svgEl
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Add X grid lines with labels
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(4)
    .tickSize(-height)
    .tickFormat((val) => {
      if (val * 1 === 0) {
        return '';
      }
      return `${val * 1}`;
    });
  const xAxisGroup = svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);
  xAxisGroup.select('.domain').remove();
  xAxisGroup.selectAll('line').attr('stroke', 'rgba(234, 234, 234, 1)');
  xAxisGroup
    .selectAll('text')
    .attr('color', '#858585')
    .attr('font-size', '0.75rem');

  // Add Y grid lines with labels
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(4)
    .tickSize(-width)
    .tickFormat((val) => {
      if (val === 0) {
        return '';
      }
      return val;
    });
  const yAxisGroup = svg.append('g').call(yAxis);
  yAxisGroup.select('.domain').remove();
  yAxisGroup.selectAll('line').attr('stroke', 'rgba(234, 234, 234, 1)');
  yAxisGroup
    .selectAll('text')
    .attr('color', '#858585')
    .attr('font-size', '0.75rem');

  // Draw the lines
  const line = d3
    .line()
    .x((d) => xScale(d.index))
    .y((d) => yScale(d.age))
    .curve(d3.curveMonotoneX);

  svg
    .selectAll('.line')
    .data(data)
    .enter()
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', (d) => d.color)
    .attr('stroke-width', 4)
    .attr('d', (d) => line(d.items));

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default LineChart;
