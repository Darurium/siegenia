import React, {useState} from 'react';
import Forms from '../Forms/Forms';
import ListItems from '../listItems/ListItems';

import "./Titan.scss";



const privodList = [
    {id: 1, articule: "TGMK4010-100040", name: "Привод пов/откидной центр 461-600мм",   min: 461,  max: 600,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
    {id: 2, articule: "TGMK4020-100040", name: "Привод пов/откидной центр 601-1000мм",  min: 601,  max: 800,  opening: "pov-otkid", position: "center", capfa: 0, quantity: 1},
    {id: 3, articule: "TGMK4040-100040", name: "Привод пов/откидной центр 801-1200мм",  min: 801,  max: 1200, opening: "pov-otkid", position: "center", capfa: 1, quantity: 1},
    {id: 4, articule: "TGMK4160-100040", name: "Привод пов/откидной центр 1201-1600мм", min: 1201, max: 1600, opening: "pov-otkid", position: "center", capfa: 2, quantity: 1},
    {id: 5, articule: "TGMK4170-100020", name: "Привод пов/откидной центр 1601-2000мм", min: 1601, max: 2000, opening: "pov-otkid", position: "center", capfa: 2, quantity: 1},
    {id: 6, articule: "TGMK4110-100020", name: "Привод пов/откидной центр 2001-2400мм", min: 2001, max: 2400, opening: "pov-otkid", position: "center", capfa: 3, quantity: 1},
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
    {articule: "TSKK2010-100040", name: "Ножницы 290-680мм р.30 TS",   min: 290,  max: 680,  opening: "pov-otkid", capfa: 0, quantity: 1},
    {articule: "TSKK2120-100040", name: "Ножницы 681-850мм р.35 TS",   min: 681,  max: 850,  opening: "pov-otkid", capfa: 1, quantity: 1},
    {articule: "TSKK2030-100040", name: "Ножницы 851-1050мм р.50 MV",   min: 851,  max: 1050,  opening: "pov-otkid", capfa: 1, quantity: 1},
    {articule: "TSKK2040-100040", name: "Ножницы 1051-1250мм р.55 MV",   min: 1051,  max: 1250,  opening: "pov-otkid", capfa: 1, quantity: 1},
    {articule: "TSKD1010-100040", name: "Ножницы 7 DF CLIP TS",   min: 290,  max: 1500,  opening: "pov", capfa: 0, quantity: 1}
]

const uglovoyList = [
    {articule: "TEUL4010-100050", name: "Угловой переключатель VSO 1V TS",   min: 411,  max: 1500,  opening: "pov-otkid", capfa: 1, quantity: 1},
    {articule: "TEUL4020-100050", name: "Угловой переключатель VSO  1V TS узкий",   min: 290,  max: 410,  opening: "pov-otkid", capfa: 1, quantity: 1},
]

const kochergaList = [
    {articule: "TEUL2410-100040", name: "Передача угловая 801-1200мм BS р.50 1V TS",   min: 800,  max: 1100,  opening: "pov-otkid", capfa: 1, quantity: 1},
    {articule: "TEUL2420-100040", name: "Передача угловая 1001-1400мм BS р.70 1V TS",   min: 1101,  max: 1400,  opening: "pov-otkid", capfa: 1, quantity: 1},
]

const petliList = [
    {articule: "TBSB6020-100060", name: "Штифт опоры верхней петли", quantity: 1},
    {articule: "TBSL6110-100060", name: "Опора верхней петли KF-D3x3 DH", quantity: 1},
    {articule: "TBEL6110-100070", name: "Опора нижней петли KF-D3x3/3", quantity: 1},
    {articule: "TBEB6150-100061", name: "Петля нижняя KF-D6x16/20 D5 ADV", quantity: 1}
]

const dekorList = [
    {articule: "TKWB0010-002061", name: "Дек. накладка W KF белая RAL9003", color: "white", quantity: 1},
    {articule: "TKEO0010-002061", name: "Дек.накладка EL-O белая RAL9003", color: "white", quantity: 1},
    {articule: "TKEU0010-002061", name: "Дек.накладка EL-U белая RAL9003", color: "white", quantity: 1},
    {articule: "TKSL0020-004011", name: "Дек.накладка S белая RAL9003", color: "white", quantity: 1},
    {articule: "TKEB0020-002061", name: "Декоративная накладка EB белая нижняя петля створки", color: "white", quantity: 1},
    {articule: "TKEO0010-011061", name: "Дек.накладка EL-O МВ коричневая RAL8019", color: "brown", quantity: 1},
    {articule: "TKEU0010-001061", name: "Дек.накладка EL-U коричневая RAL8019", color: "brown", quantity: 1},
    {articule: "TKSL0020-011061", name: "Дек.накладка S коричневая RAL8019", color: "brown", quantity: 1},
    {articule: "TKWB0010-011061", name: "Дек.накладка S коричневая RAL8019", color: "brown", quantity: 1},
    {articule: "TKEB0020-011061", name: "ДДек.накладка W KF коричневая RAL8019", color: "brown", quantity: 1}
]

const uhoList = [
    {articule: "TBWB6020-100061", name: "Петля верхняя KF-12/20-9", profile: "kbe", quantity: 1},
    {articule: "TBWB6250-100060", name: "Петля верхняя KF-12/20-13", profile: "rehau", quantity: 1},
    {articule: "TBWB6100-100060", name: "ППетля верхняя KF-12/20-14", profile: "gealan", quantity: 1},
    {articule: "TBWB6070-100061", name: "Петля верхняя KF-12/21-13", profile: "tissen", quantity: 1}
]

const povOtkList = [
    {articule: "706121", name: "S283257 Откидная опора KBE.", profile: "kbe", opening: "pov-otkid", quantity: 1},
    {articule: "FRKA0540-100060", name: "Откидная опора  Rehau.", profile: "rehau", opening: "pov-otkid", quantity: 1},
    {articule: "TFRKA0200-100060", name: "Откидная опора Gealan, KBE70 706152", profile: "gealan", opening: "pov-otkid", quantity: 1},
    {articule: "706145", name: "Откидная опора S-ES FH A1860", profile: "tissen", opening: "pov-otkid", quantity: 1},
]

const povList = [
    {articule: "TRSM0300-100080", name: "Отв.планка поворотная Gealan", profile: "gealan", quantity: 1},
    {articule: "712382", name: "Ответная  планка пов. KBE.", profile: "kbe", quantity: 1},
    {articule: "TRSM0060-100080", name: "Отв.планка поворотная Aluplast,Rexau", profile: "rehau", quantity: 1},
    {articule: "TRSM0160-100080", name: "Запорная планка Tissen", profile: "tissen", quantity: 1},
]

const shpinaletList = [
    {articule: "TEUL5010-100050", name: "Переключатель угловой нижний VSU/K+FH", opening: "pov-otkid", position: "center", quantity: 1},
]


const Titan = (props) => {    

	const [currentValues, setCurrentValues] = useState([]);

	let zap = [...currentValues];
	
	const addValues = (selected) => {
		let otvetka = 0;
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
					otvetka += privod.quantity * privod.capfa
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
					otvetka += schere.quantity * schere.capfa
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
					otvetka += uglovoy.quantity * uglovoy.capfa
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
					otvetka += kocherga.quantity * kocherga.capfa
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

		for (let i = 0; i < dekorList.length; i++) {	
			if (dekorList[i].color === selected.color) {
				const dekor = {...dekorList[i]};
				dekor.quantity = selected.quantity;
				let candidate = zap.find((item) => item.articule === dekor.articule);
				if (!candidate) {
					zap.push(dekor)
				} else {
					candidate.quantity += dekor.quantity
				}
			}				
				
		}
		for (let i = 0; i < uhoList.length; i++) {	
			if (uhoList[i].profile === selected.profile) {
				const uho = {...uhoList[i]};
				uho.quantity = selected.quantity;
				let candidate = zap.find((item) => item.articule === uho.articule);
				if (!candidate) {
					zap.push(uho)
				} else {
					candidate.quantity += uho.quantity
				}
			}				
				
		}

		for (let i = 0; i < povOtkList.length; i++) {	
			if (povOtkList[i].profile === selected.profile
				&& povOtkList[i].opening === selected.opening) {
				const povOtk = {...povOtkList[i]};
				povOtk.quantity = selected.quantity;
				let candidate = zap.find((item) => item.articule === povOtk.articule);
				if (!candidate) {
					zap.push(povOtk)
				} else {
					candidate.quantity += povOtk.quantity
				}
			}				
				
		}

		for (let i = 0; i < povList.length; i++) {	
			if (povList[i].profile === selected.profile) {
				const pov = {...povList[i]};
				pov.quantity = otvetka;
				let candidate = zap.find((item) => item.articule === pov.articule);
				if (!candidate) {
					zap.push(pov)
				} else {
					candidate.quantity += pov.quantity
				}
			}				
				
		}

		for (let i = 0; i < shpinaletList.length; i++) {	
			if (shpinaletList[i].opening === selected.opening
				&& shpinaletList[i].position === selected.position) {
				const shpinalet = {...shpinaletList[i]};
				shpinalet.quantity = selected.quantity;
				let candidate = zap.find((item) => item.articule === shpinalet.articule);
				if (!candidate) {
					zap.push(shpinalet)
				} else {
					candidate.quantity += shpinalet.quantity
				}
			}				
				
		}


		setCurrentValues(zap)

		
	}
    return (
        <div className="titan">
            <Forms addValues={addValues}/>
			<ListItems currentValues={currentValues}/>	
        </div>
    );
};

export default Titan;