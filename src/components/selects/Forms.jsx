import React, {useState} from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import "./Forms.scss";
import MyButton from '../UI/button/MyButton';

const Forms = ({addValues}) => {

	const [selected, setSelected] = useState({
		opening: "pov-otkid",
		profile: "kbe",
		position: "center",
		orientation: "right",
		color: "white",
		quantity: 1,
		height: 1350,
		width: 550
	});


	const openingValue = (val) => {
		console.log("1", val);
		setSelected({...selected, opening: val})
	}

	const profileValue = (val) => {
		console.log("1", val);
		setSelected({...selected, profile: val})
	}

	const positionValue = (val) => {
		console.log("1", val);
		setSelected({...selected, position: val})
	}

	const orientationValue = (val) => {
		console.log("1", val);
		setSelected({...selected, orientation: val})
	}

	const colorionValue = (val) => {
		console.log("1", val);
		setSelected({...selected, color: val})
	}



    return (
        <div className="my-selects">
            <MySelect 
				value={selected.opening}
				onChange={openingValue}	
				options={[
					{value: "pov-otkid", name: "Поворотно откидное"},
					{value: "pov", name: "Поворотное"},
					{value: "fram", name: "Фрамуга"}
				]}
			/>
			<MySelect 
				value={selected.profile}
				onChange={profileValue}	
				options={[
					{value: "kbe", name: "KBE"},
					{value: "gealan", name: "Gealan"},
					{value: "tissen", name: "Tissen"},
					{value: "rehau", name: "Rehau"}
				]}
			/>
			<MySelect 
				value={selected.position}
				onChange={positionValue}	
				options={[
					{value: "center", name: "Центральное положение"},
					{value: "fix", name: "Фиксирование положение"}
				]}
			/>
			<MySelect 
				value={selected.orientation}
				onChange={orientationValue}
				options={[
					{value: "right", name: "Правое"},
					{value: "left", name: "Левое"}
				]}
			/>
			<MySelect 
				value={selected.color}
				onChange={colorionValue}
				options={[
					{value: "white", name: "Белое"},
					{value: "brown", name: "Коричневое"}
				]}
			/>
			<MyInput
				value={selected.quantity}
				onChange={event => setSelected({...selected, quantity: +event.target.value})}
				placeholder="Количество"
				type="number"
			/>
			<MyInput
				value={selected.height}
				onChange={event => setSelected({...selected, height: +event.target.value})}
				placeholder="Высота"
				type="number"
			/>
			<MyInput
				value={selected.width}
				onChange={event => setSelected({...selected, width: +event.target.value})}
				placeholder="Ширина"
				type="number"
			/>

			<MyButton
				onClick={() => addValues(selected)}
				name="Добавить"
			/>
        </div>
    );
};

export default Forms;