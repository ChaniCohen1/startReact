import React, { useEffect , useState} from "react";
import SelectedItem from "./SelectedItem";

const ItemList = () => {

    const [item, setItem] = useState(null);

    const fruits = ["Apple", "Banana", "Orange", "Grapes"];
    const listItems = fruits.map((fruit) =>
        <li key={fruit}>
            {fruit} <button onClick={() => setItem(fruit)}>select</button>
        </li>
      );
    return(
        <div>
            <h1>Select Item</h1>
            <ul>{listItems}</ul>
            <SelectedItem item={item}/>
        </div>
    )
}

export default ItemList;


