/*

1. App
    1.1. Header
    1.2. AddItems
    1.3. Items
         1.3.1. Item
    1.4. Filter
    1.5. Footer

#5CB338 ==> Heading
#ECE852 ==> AddItems
#FFC145 ==> ItemList
#FB4141 ==> Footer

*/

import { useState } from "react";

import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";

import "./index.css";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem 1fr 4rem auto",
};

// const items = [
//     { name: "shirts", count: 2, packed: false },
//     { name: "shirts", count: 2, packed: false },
//     { name: "charger", count: 2, packed: false },
// ];

// const items = {
//     shirts: { count: 2, packed: false, name: "shirts" },
//     cable: { count: 1, packed: true, name: "cable" },
//     powerBank: { count: 2, packed: false, name: "powerBank" },
// };

// [{ count: 2, packed: false, name: "shirts" }, { count: 1, packed: true, name: "cable" }, { count: 2, packed: false, name: "powerBank" }]

function App() {
    const [items, setItems] = useState({});

    function updateItem(nameKey, packed) {
        setItems(function (items) {
            // Update
            items[nameKey].packed = packed;
            return { ...items };
        });
    }

    function deleteItem(nameKey) {
        setItems(function (items) {
            // Delete
            delete items[nameKey];
            return { ...items };
        });
    }

    // PROP-DRILLING
    // APP -> ItemList -> Item

    return (
        <div style={appStyle}>
            <Header />
            <AddItem setItems={setItems} />
            <ItemList
                deleteItem={deleteItem}
                updateItem={updateItem}
                items={Object.values(items)}
            />
            <Filter />
            <Footer />
        </div>
    );
}

export default App;
