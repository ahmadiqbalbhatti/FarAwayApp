function Item({item}) {
    return <li>
        <input type="checkbox"/>
        <span style={item.packed ? {textDecoration: "line-through"} :  {textDecoration: "none"}}>
            {item.quantity} {item.description}
        </span>
        <button>❌</button>
    </li>;
}

export default function PackingList() {

    const initialItems = [
        {
            id: 1,
            description: "Passports",
            quantity: 2,
            packed: false
        }, {
            id: 2,
            description: "Socks",
            quantity: 12,
            packed: false
        }, {
            id: 3,
            description: "Charger",
            quantity: 5,
            packed: true,
        }
    ];

    return (<div className={"list"}>
            <ul>
                {initialItems.map(item => <Item item={item}/>)}
            </ul>
        </div>

    );
}
