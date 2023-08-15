import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input'
import List from './List'

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const uncompletedTodos = data.filter(todo => todo.completed)
					.map(todo => todo.title)
				setTodos(uncompletedTodos);
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
		<List todos={todos} complete={complete} />
	</div>;
}

export default App;