import React from 'react'
import BasketList from '../BasketList/BasketList'
import { Button } from '../index'
import styles from './CartContent.module.scss'

const CartContent = ({ items, totalPrice, totalCount }) => {
    return (
        <div className={styles.cartContent}>
            <h2 className={styles.cartContentTitle}>Товары в корзине</h2>
            <div className={styles.basketCart}>
                <div className={styles.basketCartMain}>
                    <BasketList items={items} />
                </div>
                <div className={styles.basketCartSidebar}>
                    <div className={styles.basketCartSection}>
                        <div className={styles.sidebarRow}>
                            <div className={styles.sidebarTitle}>
                                Ваша корзина
                            </div>
                            <div>
                                <span className={styles.sidebarCount}>
                                    {totalCount} товар
                                </span>
                            </div>
                        </div>
                        <div className={styles.sidebarRow}>
                            <div className={styles.sidebarSubtitle}>
                                Товары ({totalCount})
                            </div>
                            <div>
                                <span className={styles.sidebarPrice}>
                                    {totalPrice}
                                </span>
                            </div>
                        </div>
                        <div className={styles.sidebarRow}>
                            <div className={styles.sidebarSubtitle}>Скидка</div>
                            <div>
                                <span className={styles.sidebarDiscount}>
                                    -58 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.basketCartSection}>
                        <div className={styles.sidebarRow}>
                            <div className={styles.sidebarTitle}>
                                Общая стоимость
                            </div>
                            <div>
                                <span className={styles.sidebarPriceBig}>
                                    {totalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.basketCartSection}>
                        <div className={styles.sidebarRow}>
                            <Button
                                mode="primary"
                                size="lg"
                                className={styles.sidebarButton}
                            >
                                Перейти к оформлению
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContent
