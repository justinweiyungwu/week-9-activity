import { useState } from "react";
import styles from "./Ad.module.css";

export default function Ad() {
    const [popup,setPopup] = useState(true);
    return (
        <>
        {
            popup ?
                <div className={styles.container}>
                    <div className={styles.popup__area}>
                    <h1 className={styles.welcome}>Welcome</h1>
                        <div onClick={() => setPopup(false)}>Close</div>
                      
                    </div>
                </div>
                :<></>
        }
        </>
    )
}