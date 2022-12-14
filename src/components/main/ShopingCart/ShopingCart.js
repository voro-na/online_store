import styles from './ShopingCart.module.css'
import {observer} from "mobx-react-lite";
import useStores from "../../../store/RootStore";


const ShopingCart = observer(() => {
    const {storeProducts, storeCart} = useStores

    let result = ''
    if (storeCart.cart.length === 0)
        result = 'Корзина пуста'
    else {
        result = storeCart.cart.map((product) => {
            return (
                <div className={styles.cardContainer} key={product.id}>
                    <div className={styles.inform}>
                        <img alt={product.title} src={process.env.PUBLIC_URL + product.img}/>
                        <ul>
                            <li>{product.title}</li>
                            <li style={{color: '#FFA542'}}>{product.price} ₽</li>
                        </ul>
                    </div>
                    <div className={styles.amount}>
                        <button onClick={(e) => storeCart.decrement(product.id)} className={styles.btnorange}>-</button>
                        <div>{product.amount}</div>
                        <button onClick={(e) => storeCart.increment(product.id)} className={styles.btnorange}>+
                        </button>
                        <div>{product.price * product.amount} ₽</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h3 style={{textAlign: 'left'}}>Корзина</h3>
            <div className={styles.container}>
                <div>{result}</div>

                <div className={styles.sum}>
                    <div className={styles.finalPrice}>
                        <div>ИТОГО</div>
                        <div>₽ {storeCart.Price()}</div>
                    </div>
                    <div className={styles.btn}>Перейти к оформлению</div>
                </div>
            </div>
        </div>
    )
})
export default ShopingCart