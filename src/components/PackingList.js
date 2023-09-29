import {useState} from "react";

function PackingList({items, onDeleteItem, onPackedItem}) {

    // const initialItems = [{
    //     id: 1, description: "Passports", quantity: 2, packed: false
    // }, {
    //     id: 2, description: "Socks", quantity: 12, packed: false
    // }, {
    //     id: 3, description: "Charger", quantity: 5, packed: true,
    // }];

    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


    return (<div className={"list"}>
            <ul>
                {sortedItems.map(item => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onPackedItem={onPackedItem}/>))}
            </ul>
            <div className="actions">
                <select name="action" id="action" value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}>
                    <option value="input">Sort by Input Order</option>
                    <option value="packed">Sort by Packed Status</option>
                    <option value="description">Sort by Description</option>
                </select>
            </div>
        </div>

    );
}


function Item({item, onDeleteItem, onPackedItem}) {


    return <li>
        <input type="checkbox" value={item.packed} onChange={() => onPackedItem(item.id)}/>
        <span style={item.packed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
            {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>;
}


export default PackingList;
