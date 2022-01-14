import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className="container">
                    <div className={[styles.headerWrapper, 'flexCenterBetween'].join(' ')}>
                        <div className={styles.headerLogo}>
                            <img width="150" height="70" src="https://dummyimage.com/170x70/000000/ff0000.png&text=Book+Store" alt="Logo" className={[styles.headerImage, 'imageCover'].join(' ')} />
                        </div>
                        <div className={styles.headerBtn}>Button</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;