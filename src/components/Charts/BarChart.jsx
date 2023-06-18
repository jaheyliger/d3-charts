import { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width, height }) => {

	useEffect(() => {
		const data = [12, 5, 6, 6, 9, 10];

		const svg = d3
			.select('body')
			.append('svg')
			.attr('width', width)
			.attr('height', height);

		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 70)
			.attr('y', 0)
			.attr('width', 65)
			.attr('height', (d, i) => d)
			.attr('fill', 'green');
	}, [height, width]);

	return <div></div>;
};

export default BarChart;
