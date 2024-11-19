import React, { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    { id: 2, checked: false, item: 'Item 2' },
    { id: 3, checked: false, item: 'Item 3' },
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

  }
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
