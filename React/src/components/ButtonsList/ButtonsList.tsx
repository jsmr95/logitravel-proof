import undoIcon from './assets/undo.svg'
import styles from './ButtonsList.module.css'
import openBox from '../../actions/actions';

interface ButtonsListProps {
    onUndo: () => void;
    onDelete: () => void;
}

const ButtonsList = ({ onUndo, onDelete}: ButtonsListProps) => {
    return (
        <div className={`${styles.buttons}`}>
            <button className={`${styles.undoButton}`} onClick={onUndo}>
                <img src={undoIcon} alt="Undo.svg" />
            </button>
            <button id="deleteButton" onClick={onDelete}>DELETE</button>
            <button className={`${styles.addButton}`} onClick={openBox}>ADD</button>
        </div>
    )
}

export default ButtonsList;