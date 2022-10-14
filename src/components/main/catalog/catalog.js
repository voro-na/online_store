import styles from './catalog.module.css'


const catalog = () => {
    const cart = {
        headphones: [
            {
                img: 'img/1.svg',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                img: 'img/2.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                img: 'img/3.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                img: 'img/1.svg',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                img: 'img/2.svg',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                img: 'img/3.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
        ],
        wirelessHeadphones: [
            {
                img: 'img/4.svg',
                title: 'Apple AirPods',
                price: 9527,
                rate: 4.7,
            },
            {
                img: 'img/5.svg',
                title: 'GERLAX GH-04',
                price: 6527,
                rate: 4.7,
            },
            {
                img: 'img/6.svg',
                title: 'BOROFONE BO4',
                price: 7527,
                rate: 4.7,
            }
        ]
    }
    const result = []
    for (let key in cart) {
        const temp = cart[key].map((product) => {
            return (
                <div className={styles.cardContainer}>
                    <img src={`${product.img}`}/>

                    <div className={styles.title}>
                        <div>{product.title}</div>
                        <div style={{color: '#FFA542'}}>{product.price} ₽</div>
                    </div>

                    <div className={styles.rate}>
                        <div className='_icon-star'></div>
                        <div style={{color: '#838383'}}>{product.rate}</div>
                        <div>Купить</div>
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
}
export default catalog