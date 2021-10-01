import './App.scss';
import Forms from './selects/Forms';
import {useState} from "react";
import ListItems from './list-Items/ListItems';
// import MyButton from './UI/button/MyButton';




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

	const schereList = [
		{articule: "FSKK2010-100040", name: "Ножницы 290-625мм р.30 TS",   min: 290,  max: 625,  opening: "pov-otkid", capfa: 0, quantity: 1},
		{articule: "FSKK2020-100040", name: "Ножницы 571-800мм р.35 TS",   min: 626,  max: 800,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FSKK2030-100040", name: "Ножницы 800-1030мм р.50 MV",   min: 801,  max: 1030,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FSKK2040-100040", name: "Ножницы 1031-1260мм р.55 MV",   min: 1031,  max: 1260,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FSKD1010-100040", name: "Ножницы 7 DF CLIP TS",   min: 290,  max: 1500,  opening: "pov", capfa: 0, quantity: 1}
	]

	const uglovoyList = [
		{articule: "FEUL0500-100050", name: "Угловой переключатель VSO 1V TS",   min: 411,  max: 1500,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FEUL0520-100050", name: "Угловой переключатель VSO  1V TS узкий",   min: 290,  max: 410,  opening: "pov-otkid", capfa: 1, quantity: 1},
	]

	const kochergaList = [
		{articule: "FEUL2510-100040", name: "Передача угловая 801-1200мм BS р.50 1V TS",   min: 800,  max: 1100,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FEUL2520-100040", name: "Передача угловая 1001-1400мм BS р.70 1V TS",   min: 1101,  max: 1400,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FEUL2530-100040", name: "Передача угловая  1401-1920мм BS р.90 1V TS",   min: 1401,  max: 1800,  opening: "pov-otkid", capfa: 1, quantity: 1},
		{articule: "FEUL2540-100040", name: "Передача угловая  BS р.130 2V TS",   min: 1801,  max: 2400,  opening: "pov-otkid", capfa: 2, quantity: 1}
	]

	const petliList = [
		{articule: "704196", name: "S280010 Штифт верхней петли", quantity: 1},
		{articule: "707616", name: "S707616 Петля на раме верхняя 100кг пластик", quantity: 1},
		{articule: "TBEB6180-100060", name: "Петля нижняя на створке KF-D6X12/12 TS", quantity: 1},
		{articule: "TBLB0010-100060", name: "Штифт опоры нижней петли", quantity: 1},
	]

	const dekorList = [
		{articule: "833216", name: "S.FKEO0010-002060 Дек.накл.(белая) низ рама (верх) универсальная", color: "white", quantity: 1},
		{articule: "833230", name: "S.FKEU0010-002060 Дек.накл.(белая) низ рама (низ) универсальная", color: "white", quantity: 1},
		{articule: "834145", name: "S.FKSL0010-002060 Дек.накл.(белая) на раму верх универсальная", color: "white", quantity: 1},
		{articule: "836194", name: "S.FKWB0010-002060 Дек.накл.(белая) верхняя на 'ухо' пластик", color: "white", quantity: 1},
		{articule: "TKEB0020-002061", name: "TKEB0020-002061 Декоративная накладка EB белая нижняя петля створки", color: "white", quantity: 1}
	]

	const [currentValues, setCurrentValues] = useState([]);

	let zap = [...currentValues];
	
	const addValues = (selected) => {

		for (let i = 0; i < privodList.length; i++) {
			if (privodList[i].opening === selected.opening
				&& selected.height >= privodList[i].min
				&& selected.height <= privodList[i].max
				&& privodList[i].position === selected.position
				) {
					const privod = {...privodList[i]};
					privod.quantity = selected.quantity;
					let candidate = zap.find((item) => item.articule === privod.articule);
					if (!candidate) {
						zap.push(privod);
					} else {
						candidate.quantity += privod.quantity;
					}
				}				
		}	

		for (let i = 0; i < schereList.length; i++) {
			if (schereList[i].opening === selected.opening
				&& selected.width >= schereList[i].min
				&& selected.width <= schereList[i].max
				) {
					const schere = {...schereList[i]};
					schere.quantity = selected.quantity;
					let candidate = zap.find((item) => item.articule === schere.articule);
					if (!candidate) {
						zap.push(schere)
					} else {
						candidate.quantity += schere.quantity
					}
				}
		}

		for (let i = 0; i < uglovoyList.length; i++) {
			if (uglovoyList[i].opening === selected.opening
				&& selected.width >= uglovoyList[i].min
				&& selected.width <= uglovoyList[i].max
				) {
					const uglovoy = {...uglovoyList[i]};
					uglovoy.quantity = selected.quantity;
					let candidate = zap.find((item) => item.articule === uglovoy.articule);
					if (!candidate) {
						zap.push(uglovoy)
					} else {
						candidate.quantity += uglovoy.quantity
					}
				}
		}

		for (let i = 0; i < kochergaList.length; i++) {
			if (kochergaList[i].opening === selected.opening
				&& selected.height >= kochergaList[i].min
				&& selected.height <= kochergaList[i].max
				) {
					const kocherga = {...kochergaList[i]};
					kocherga.quantity = selected.quantity;
					let candidate = zap.find((item) => item.articule === kocherga.articule);
					if (!candidate) {
						zap.push(kocherga)
					} else {
						candidate.quantity += kocherga.quantity
					}
				}
		}

		for (let i = 0; i < petliList.length; i++) {			
			const petli = {...petliList[i]};
			petli.quantity = selected.quantity;
			let candidate = zap.find((item) => item.articule === petli.articule);
			if (!candidate) {
				zap.push(petli)
			} else {
				candidate.quantity += petli.quantity
			}
				
		}
	
		setCurrentValues(zap)
		
	}

	return (
		<>
			<div className="app">
				<div className="app__form">
					<Forms addValues={addValues}/>
					<ListItems currentValues={currentValues}/>				
				</div>
			</div>
			
		</>
	);
}

export default App;

// dekorList