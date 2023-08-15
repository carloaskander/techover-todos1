import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input'
import List from './List'

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const uncompletedTodos = data.filter(todo => !todo.complete)
					.map(todo => todo.title);
				setTimeout(() => {
					setTodos(uncompletedTodos);
					setLoading(false);
				}, 2000);
			});
	}, []);

	const addTodo = () => {
		console.log(todos);
		if(todo !== '') {
			setTodos([...todos, todo])
			setTodo('');
		}
	}

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncompletedTodos);
	}

	return <div className="App">
		<img src="../../public/logo.png" alt="" />
		<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
		<List todos={todos} complete={complete} loading={loading} />
	</div>;
}

export default App;