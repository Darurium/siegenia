import './App.css';
import Forms from './selects/Forms';
import {useState} from "react";
import ListItems from './list-Items/ListItems';
import MyButton from './UI/button/MyButton';


function App() {	

	const privodList = [
		{id: 1, articule: "FGMK4010-100040", name: "Привод пов/откидной центр 461-600мм",   min: 461,  max: 600,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
		{id: 2, articule: "FGMK4020-100040", name: "Привод пов/откидной центр 601-1000мм",  min: 601,  max: 800,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
		{id: 3, articule: "FGMK4040-100040", name: "Привод пов/откидной центр 801-1200мм",  min: 801,  max: 1200, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
		{id: 4, articule: "FGMK4050-100040", name: "Привод пов/откидной центр 1201-1600мм", min: 1201, max: 1600, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
		{id: 5, articule: "FGMK4060-100020", name: "Привод пов/откидной центр 1601-2000мм", min: 1601, max: 2000, opening: "pov-otkid", position: "center", capfa: 2, quantity: 1},
		{id: 6, articule: "FGMK4110-100020", name: "Привод пов/откидной центр 2001-2400мм", min: 2001, max: 2400, opening: "pov-otkid", position: "center", capfa: 3, quantity: 1},
	]

	const [currentValues, setCurrentValues] = useState([]);		

	const zap = [...currentValues];
	
	const addValues = (selected) => { // selected - объект настроек для выбора привода (количество/высота)

		for (let i = 0; i < privodList.length; i++) {
			if (privodList[i].opening === selected.opening
				&& selected.height >= privodList[i].min
				&& selected.height <= privodList[i].max
				&& privodList[i].position === selected.position
				) {
					const privod = {...privodList[i]};
					privod.quantity = selected.quantity;
					zap.push(privod);
				}				
		}	

		setCurrentValues(zap);
	}	

	const total = (values) => {

		console.log(values)
		
	}

	return (
		<>
			<div className="app">
				<Forms addValues={addValues}/>
				<div  className="items">
					<ListItems currentValues={currentValues}/>
				</div>			
			</div>
			<MyButton name="Итог" onClick={() => total(currentValues)}/ >
		</>
	);
}

export default App;