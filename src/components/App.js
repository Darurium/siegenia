import './App.css';
import Forms from './selects/Forms';
import {useState, useEffect} from "react";

const PRIVOD = [
	{id: "FGMK4010-100040", name: "Привод пов/откидной центр 461-600мм", min: 461, max: 600, opening: "pov-otkid", position: "center", capfa: 0, quantity: 0},
	{id: "FGMK4020-100040", name: "Привод пов/откидной центр 601-1000мм", min: 601, max: 800, opening: "pov-otkid", position: "center", capfa: 0, quantity: 0},
	{id: "FGMK4040-100040", name: "Привод пов/откидной центр 801-1200мм", min: 801, max: 1200, opening: "pov-otkid", position: "center", capfa: 1, quantity: 0},
	{id: "FGMK4050-100040", name: "Привод пов/откидной центр 1201-1600мм", min: 1201, max: 1600, opening: "pov-otkid", position: "center", capfa: 1, quantity: 0},
	{id: "FGMK4060-100020", name: "Привод пов/откидной центр 1601-2000мм", min: 1601, max: 2000, opening: "pov-otkid", position: "center", capfa: 2, quantity: 0},
	{id: "FGMK4110-100020", name: "Привод пов/откидной центр 2001-2400мм", min: 2001, max: 2400, opening: "pov-otkid", position: "center", capfa: 3, quantity: 0},
]

// const ff = {
// 	opening: "pov-otkid",
// 	profile: "kbe",
// 	position: "center",
// 	orientation: "right",
// 	color: "white",
// 	quantity: 1,
// 	height: 1350,
// 	width: 550
// };


function App() {

	const [currentValues, setCurrentValues] = useState([]);

	const zap = [];

	const addValues = (selected) => {
		
		for (let i = 0; i < PRIVOD.length; i++) {
			if (PRIVOD[i].opening === selected.opening
				&& selected.height >= PRIVOD[i].min
				&& selected.height <= PRIVOD[i].max
				&& PRIVOD[i].position === selected.position) {		
					const privod = PRIVOD[i];
					zap.push(privod);
					for (let j = 0; j < zap.length; j++) {
						if (zap[j].id === privod.id) {
							zap[j].quantity += selected.quantity 
						} else {
							zap[j].push(privod)
						}
						console.log(zap)
					}													
			}

		}
		setCurrentValues(zap);
	}

		return (
		<div className="App">
			<Forms addValues={addValues}/>
			{currentValues.map((item, index) => 
				<div key={index}>
					<span>{item.id} </span>				
					<span>{item.name} </span>				
					<span>{item.quantity} шт</span>		
				</div>		
				)}
		</div>
	);
}

export default App;