import './App.css';
import Forms from './selects/Forms';
import {useState} from "react";
import ListItems from './list-Items/ListItems';

const PRIVOD = [
	{id: "FGMK4010-100040", name: "Привод пов/откидной центр 461-600мм", min: 461, max: 600, opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
	{id: "FGMK4020-100040", name: "Привод пов/откидной центр 601-1000мм", min: 601, max: 800, opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
	{id: "FGMK4040-100040", name: "Привод пов/откидной центр 801-1200мм", min: 801, max: 1200, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
	{id: "FGMK4050-100040", name: "Привод пов/откидной центр 1201-1600мм", min: 1201, max: 1600, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
	{id: "FGMK4060-100020", name: "Привод пов/откидной центр 1601-2000мм", min: 1601, max: 2000, opening: "pov-otkid", position: "center", capfa: 2, quantity: 1},
	{id: "FGMK4110-100020", name: "Привод пов/откидной центр 2001-2400мм", min: 2001, max: 2400, opening: "pov-otkid", position: "center", capfa: 3, quantity: 1},
]


let zap = []

function App() {

	const [currentValues, setCurrentValues] = useState([]);		
	
	const addValues = (selected) => {
		let privod = {}
		for (let i = 0; i < PRIVOD.length; i++) {
			if (PRIVOD[i].opening === selected.opening
				&& selected.height >= PRIVOD[i].min
				&& selected.height <= PRIVOD[i].max
				&& PRIVOD[i].position === selected.position
				) {
					privod = JSON.parse(JSON.stringify(PRIVOD[i]));
					privod.quantity = selected.quantity;	
							
					break;
				}
		}
		if (zap.length === 0 ){
			zap.push(privod.id);
		}
		console.log(privod)		
		let index = zap.indexOf(item => item.id === privod.id);

		setCurrentValues(zap);
	}	

	return (
		<div className="app">
			<Forms addValues={addValues}/>
			<div  className="items">
				<ListItems currentValues={currentValues}/>
			</div>
		</div>
	);
}

export default App;