
import React, { useState } from "react";

function App() {
  const menu = [
    {
      id: 1,
      name: "Buttermilk Pancakes",
      category: "Breakfast",
      price: 120,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400"
    },
    {
      id: 2,
      name: "Egg Toast",
      category: "Breakfast",
      price: 100,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
    },
    {
      id: 3,
      name: "Chicken Steak",
      category: "Lunch",
      price: 250,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400"
    },
    {
      id: 4,
      name: "Veg Salad",
      category: "Lunch",
      price: 180,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
    },
    {
      id: 5,
      name: "Chocolate Shake",
      category: "Shakes",
      price: 150,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "Shakes",
      price: 140,
      image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=400"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const filteredMenu =
    activeCategory === "All"
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {filteredMenu.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-info">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <h3>₹{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
