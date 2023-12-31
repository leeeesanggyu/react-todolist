import React, {PropsWithChildren} from "react";
import styles from "./Container.module.css";

type Props = PropsWithChildren<{

}>

export default function Container({children} :Props) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}