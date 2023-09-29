import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems(items => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }


    // First way
    function handlePackedItem(id) {
        // setItems(items => )
        setItems(items => {
            return items.map(item => {
                return item.id === id ? {...item, packed: !item.packed} : item
            })
        })
    }

/*    // Other way
    function handlePackedItem(id) {
        setItems(items => {
            return items.map(item => {
                if (item.id === id) {
                    return { ...item, packed: !item.packed };
                }
                return item;
            });
        });
    }*/


    return (
        <main className={"app"}>
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onPackedItem={handlePackedItem}/>
            <Stats items={items}/>
        </main>
    );
}

export default App;
