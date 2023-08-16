import React from 'react';
import Item from './Item';
import './List.css';
import MyLoader from './MyLoader';

const List = ({ todos, complete, loading }) => {
	if(loading) {
		return (
			<div className="todo-list">
			  {/* Display shimmer effect loader 5 times */}
			  {[...Array(5)].map((_, i) => (
				<MyLoader key={i} />
			  ))}
			</div>
		  );
	}
	
	if (todos.length === 0) {
		return <div className="empty">All tasks completed!</div>;
	}

	return (
		<div className="todo-list">
			{todos.map((todo, i) => (
				<Item text={todo} key={i} complete={complete} />
			))}
		</div>
	);
};

export default List;
