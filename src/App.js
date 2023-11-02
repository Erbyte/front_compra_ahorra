import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import CategoriesFilter from './components/categories-filter';
import Products from './components/products';
import React from 'react';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid my-2">
				<div className="row">
					<div className="col-2">
						<CategoriesFilter />
					</div>
					<div className="col-10">
						<Products />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
