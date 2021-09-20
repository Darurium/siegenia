import React from 'react';
import MySelect from '../UI/select/MySelect';

const MySelects = () => {
    return (
        <div>
            <MySelect 
				options={[
					{value: "pov-otkid", name: "Поворотно откидное"},
					{value: "pov", name: "Поворотное"},
					{value: "fram", name: "Фрамуга"}
				]}
			/>
			<MySelect 
				options={[
					{value: "kbe", name: "KBE"},
					{value: "gealan", name: "Gealan"},
					{value: "tissen", name: "Tissen"},
					{value: "rehau", name: "Rehau"}
				]}
			/>
			<MySelect 
				options={[
					{value: "center", name: "Центральное положение"},
					{value: "fix", name: "Фиксирование положение"}
				]}
			/>
			<MySelect 
				options={[
					{value: "right", name: "Правое"},
					{value: "left", name: "Левое"}
				]}
			/>
        </div>
    );
};

export default MySelects;