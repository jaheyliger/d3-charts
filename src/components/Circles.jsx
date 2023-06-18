import { useEffect, useRef, useState } from "react";
import * as d3 from 'd3'

const Circles = () => {
	const [dataset, setDataset] = useState([]);
	const ref = useRef();
	useEffect(() => {
		const svgElement = d3.select(ref.current);
		svgElement
			.selectAll('circle')
			.data(dataset)
			.join('circle')
			.attr('cx', (d) => d[0])
			.attr('cy', (d) => d[1])
			.attr('r', 3);
	}, [dataset]);

	return <svg viewBox='0 0 100 50' ref={ref} />;
};

export default Circles