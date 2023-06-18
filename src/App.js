import './App.css';
import BarChart from './components/Charts/BarChart';
import { salesData } from './data/salesData';

function App() {
	return (
		<div className='App'>
			<BarChart data={salesData} />
		</div>
	);
}

export default App;
