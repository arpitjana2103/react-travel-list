import styles from "../styles/ItemList.module.css";
import Item from "./Item";

const items = [
    { name: "Charger", count: 1, packed: true },
    { name: "Socks", count: 2, packed: false },
    { name: "Shirts", count: 4, packed: false },
    { name: "Jeans", count: 2, packed: true },
    { name: "PowerBank", count: 1, packed: false },
    { name: "Charger", count: 1, packed: true },
    { name: "Socks", count: 2, packed: false },
    { name: "Shirts", count: 4, packed: false },
    { name: "Jeans", count: 2, packed: true },
    { name: "PowerBank", count: 1, packed: false },
];

function ItemList() {
    return (
        <div className={styles.itemList}>
            {items.map(function (item, index) {
                return (
                    <Item
                        name={item.name}
                        count={item.count}
                        packed={item.packed}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
