import styles from "../styles/AddItem.module.css";
import Emoji from "./Emoji";

function AddItem() {
    return (
        <div className={styles.addItem}>
            <p>
                What do you need for your <Emoji txt="😍" /> trip ?
            </p>
            <form>
                <select>
                    {new Array(10).fill(0).map(function (_, index) {
                        return (
                            <option value={`${index + 1}`} key={index}>
                                {index + 1}
                            </option>
                        );
                    })}
                </select>

                <input type="text" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddItem;
