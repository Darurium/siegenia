import './App.scss';
import Forms from './selects/Forms';
import {useState} from "react";
import ListItems from './list-Items/ListItems';
import MyButton from './UI/button/MyButton';
import {addPrivod} from "../utils/addPrivod";



function App() {	

	const privodList = [
		{id: 1, articule: "FGMK4010-100040", name: "Привод пов/откидной центр 461-600мм",   min: 461,  max: 600,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
		{id: 2, articule: "FGMK4020-100040", name: "Привод пов/откидной центр 601-1000мм",  min: 601,  max: 800,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
		{id: 3, articule: "FGMK4040-100040", name: "Привод пов/откидной центр 801-1200мм",  min: 801,  max: 1200, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
		{id: 4, articule: "FGMK4050-100040", name: "Привод пов/откидной центр 1201-1600мм", min: 1201, max: 1600, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
		{id: 5, articule: "FGMK4060-100020", name: "Привод пов/откидной центр 1601-2000мм", min: 1601, max: 2000, opening: "pov-otkid", position: "center", capfa: 2, quantity: 1},
		{id: 6, articule: "FGMK4110-100020", name: "Привод пов/откидной центр 2001-2400мм", min: 2001, max: 2400, opening: "pov-otkid", position: "center", capfa: 3, quantity: 1},
		{id: 7, articule: "FGMD4010-100040", name: "Поворотный привод 200-430мм",           min: 200,  max: 400,  opening: "pov",       position: "center", capfa: 1, quantity: 1},
		{id: 8, articule: "FGMD4020-100040", name: "Поворотный привод 401-600мм",           min: 401,  max: 600,  opening: "pov",       position: "center", capfa: 2, quantity: 1},
		{id: 9, articule: "FGMD4030-100040", name: "Поворотный привод 601-800мм",           min: 601,  max: 800,  opening: "pov",       position: "center", capfa: 2, quantity: 1},
		{id: 10, articule: "FGMD4040-100040", name: "Поворотный привод 801-1000мм",         min: 801,  max: 1000, opening: "pov",       position: "center", capfa: 2, quantity: 1},
		{id: 11, articule: "FGMD4050-100040", name: "Поворотный привод 1001-1200мм",        min: 1001,  max: 1200, opening: "pov",       position: "center", capfa: 3, quantity: 1},
		{id: 12, articule: "FGMD4060-100040", name: "Поворотный привод 1201-1400мм",        min: 1201,  max: 1400, opening: "pov",       position: "center", capfa: 3, quantity: 1},
		{id: 13, articule: "FGMD4070-100040", name: "Поворотный привод 1401-1600мм",        min: 1401,  max: 1600, opening: "pov",       position: "center", capfa: 3, quantity: 1},
		{id: 14, articule: "FGMD4080-100040", name: "Поворотный привод 1601-1800мм",        min: 1601,  max: 1800, opening: "pov",       position: "center", capfa: 3, quantity: 1},
		{id: 15, articule: "FGMD4090-100040", name: "Поворотный привод 1801-2000мм",        min: 1801,  max: 2000, opening: "pov",       position: "center", capfa: 3, quantity: 1},
		{id: 16, articule: "FGMD4100-100040", name: "Поворотный привод 2000-2200мм",        min: 2001,  max: 2200, opening: "pov",       position: "center", capfa: 4, quantity: 1},
		{id: 17, articule: "FGMD4110-100040", name: "Поворотный привод 2200-2400мм",        min: 2201,  max: 2400, opening: "pov",       position: "center", capfa: 4, quantity: 1}
	]

	const [currentValues, setCurrentValues] = useState([]);		
	const [totalList, setTotalList] = useState([]);

	let zap = [...currentValues];
	
	const addValues = (selected) => { // selected - объект настроек для выбора привода (количество/высота)
		zap = addPrivod(selected, privodList, zap);
		setCurrentValues(zap);
	}	

	const total = (values) => {
		const tempArray = [...values];
		let array = [];
		tempArray.forEach(item => {
			let candidate = array.find((elem) => elem.articule === item.articule);
			if (!candidate) {
				return array.push(item);
			}
			candidate.quantity += item.quantity;
		})
		setTotalList(array);
	}

	return (
		<>
			<div className="app">
				<div className="app__form">
					<Forms addValues={addValues}/>
					<ListItems totalList={totalList}/>				
				</div>	
				<MyButton name="Итог" onClick={() => total(currentValues)}/ >
			</div>
			
		</>
	);
}

export default App;