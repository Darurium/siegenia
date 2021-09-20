import './App.css';
import MySelect from './UI/select/MySelect';



function App() {


	return (
		<div className="App">
			<MySelect 
				options={[
					{value: "pov-otkid", name: "Поворотно откидное"},
					{value: "pov", name: "Поворотное"},
					{value: "fram", name: "Фрамуга"}
				]}
			/>
		</div>
	);
}

export default App;
