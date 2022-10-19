import {makeAutoObservable} from "mobx"

class StoreProducts {
    catalogProducts = {
        headphones: [
            {
                img: "/img/1.svg",
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
                id: 1
            },
            {
                img: '/img/2.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
                id: 2
            },
            {
                img: '/img/3.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
                id: 3
            },
            {
                img: '/img/1.svg',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
                id: 4
            },
            {
                img: '/img/2.svg',
                title: 'Apple BYZ S852I',
                price: 2927,
                rate: 4.7,
                id: 5
            },
            {
                img: '/img/3.svg',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
                id: 6
            },
        ],
        wirelessHeadphones: [
            {
                img: '/img/4.svg',
                title: 'Apple AirPods',
                price: 9527,
                rate: 4.7,
                id: 7
            },
            {
                img: '/img/5.svg',
                title: 'GERLAX GH-04',
                price: 6527,
                rate: 4.7,
                id: 8
            },
            {
                img: '/img/6.svg',
                title: 'BOROFONE BO4',
                price: 7527,
                rate: 4.7,
                id: 9
            }
        ]
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    AddtoCart(id) {
        let obj = null
        for (let key in this.catalogProducts) {
            obj = (this.catalogProducts)[key].find(t => (t.id === id))
            if (obj)
                break
        }
        let temp = {
            title: obj.title,
            id: obj.id,
            price: obj.price,
            img: obj.img,
            amount: 1
        }
        console.log(temp)
        this.rootStore.storeCart.add(temp)
    }
}

export default StoreProducts
