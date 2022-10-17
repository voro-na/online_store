import styles from './ShopingCart.module.css'
import {useState} from "react";

const ShopingCart = () => {
    let cart = [{
        img: 'img/1.svg',
        title: 'Apple BYZ S852I',
        price: 2927,
        rate: 4.7,
        amount: 1,
        id: 1
    },
        {
            img: 'img/3.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            amount: 1,
            id: 2
        }]

    const [products, SetProducts] = useState(cart)

    const finalPrice = cart.reduce((final, temp) => final.price + temp.price)

    const DeleteProduct = (e,id) => {
        e.preventDefault()
        SetProducts(products.map(t => (
            t.id === id ? {...t, amount: t.amount--} : t
        )))
        console.log(products)
    }
    const AddProduct = (e,id) => {
        e.preventDefault()
        SetProducts(products.map(t => (
            t.id === id ? {...t, amount: t.amount++} : t
        )))
        console.log(products)
    }

    const result = products.map((product) => {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.inform}>
                    <img alt={`${product.title}`} src={`${product.img}`}/>
                    <ul>
                        <li>{product.title}</li>
                        <li style={{color: '#FFA542'}}>{product.price} ₽</li>
                    </ul>
                </div>
                <div className={styles.amount}>
                    <button onClick={(e) => DeleteProduct(e,product.id)}>-</button>
                    <div>{product.amount}</div>
                    <button onClick={(e) => AddProduct(e, product.id)}>+
                    </button>
                    <div>{product.price} ₽</div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h3 style={{textAlign: 'left'}}>Корзина</h3>
            <div className={styles.container}>
                <div>{result}</div>

                <div className={styles.sum}>
                    <div className={styles.finalPrice}>
                        <div>ИТОГО</div>
                        <div>₽ {finalPrice}</div>
                    </div>
                    <div className={styles.btn}>Перейти к оформлению</div>
                </div>
            </div>
        </div>
    )
}
export default ShopingCart