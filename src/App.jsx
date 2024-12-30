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

function App() {
    const [items, setItems] = useState([]);
    return (
        <div style={appStyle}>
            <Header />
            <AddItem setItems={setItems} />
            <ItemList items={items} />
            <Filter />
            <Footer />
        </div>
    );
}

export default App;
