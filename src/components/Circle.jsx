import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Circle = () => {
	//ref to store a reference to our rendered <svg> element
    const ref = useRef();
    
    useEffect(() => {
			// d3.select() to turn our ref into a d3 selection object
			const svgElement = d3.select(ref.current);
			svgElement.append('circle').attr('cx', 150).attr('cy', 70).attr('r', 50);
		}, []);
    
	return <svg ref={ref} />;
};

export default Circle;
 