import styles from './catalog.module.css'
import {observer} from "mobx-react-lite";
import useStores from "../../../store/RootStore";


const catalog = observer(() => {
    const {storeProducts,storeCart}=useStores
    const result = []
    for (let key in storeProducts.catalogProducts) {
        const temp = storeProducts.catalogProducts[key].map((product) => {
            return (
                <div className={styles.cardContainer} key={product.id}>
                    <img alt={`${product.title}`} src={process.env.PUBLIC_URL + product.img}/>

                    <div className={styles.title}>
                        <div>{product.title}</div>
                        <div style={{color: '#FFA542'}}>{product.price} ₽</div>
                    </div>

                    <div className={styles.rate}>
                        <div className='_icon-star'></div>
                        <div style={{color: '#838383'}}>{product.rate}</div>
                        <button onClick={(e)=> storeProducts.AddtoCart(product.id)} className={styles.btn}>Купить</button>
                    </div>
                </div>
            )
        })
        result.push(temp)
    }
    const final = result.map((t) => t)

    return (
        <div className={styles.container}>
            {final}
        </div>
    )
})
export default catalog