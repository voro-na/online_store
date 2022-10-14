import styles from './catalog.module.css'

const catalog = () => {
    const cart = {
        headphones: [
            {
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
            },
            {
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
        ],
        wirelessHeadphones:[
            {
                title: 'Apple AirPods',
                price: 9527,
                rate: 4.7,
            },
            {
                title: 'GERLAX GH-04',
                price: 6527,
                rate: 4.7,
            },
            {
                title: 'BOROFONE BO4',
                price: 7527,
                rate: 4.7,
            }
        ]
    }
    const result=[]
    for (let key in cart){
        const temp = cart[key].map((product)=>{
            return(
                <div className={styles.container}>
                    <div>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                    </div>
                    <div>
                        <div>{product.rate}</div>
                        <div>Купить</div>
                    </div>

                </div>
            )
        })

        result.push(temp)
    }
    console.log(result)
    const final = result.map((t)=><div>{t}</div>)

    return (

        <div>
            {final}
            catalog
        </div>
    )
}
export default catalog