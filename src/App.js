import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Example webshop</h1>
      {renderItems()}
    </main>
  );
}

export default App;
