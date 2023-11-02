import React, { useState } from 'react';

export default function CategoriesFilter() {
    const [categories, setCategories] = useState([]);

    fetch('http://localhost:8080/api/categories', { method: 'GET' })
        .then(response => response.json())
        .then(data => setCategories(data.categories))
        .catch(error => console.log(error));

    const filterCategory = (event) => {
        console.log(event.target.id);
    }

    return (
        <div className="text-start">
            <h5>Categories</h5>
            {categories.map((category, index) => (
                <div key={category._id} class="form-check">
                    <input type="checkbox" class="form-check-input" id={category._id} name={category.name} value="category" onClick={filterCategory} />
                    <label className="form-check-label">{category.name}</label>
                </div>
            ))}
        </div>
    );
}