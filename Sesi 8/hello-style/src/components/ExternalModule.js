import React from 'react';
import styles from "./ExternalModuleCSS.module.css";

const ExternalModule = () => {
    return (
        <div className={styles.container}>
            <h1>external module</h1>
        </div>
    );
};

export default ExternalModule;