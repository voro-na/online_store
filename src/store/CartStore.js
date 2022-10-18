import {makeAutoObservable} from "mobx"

class storeCart {
    cart = [{
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

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    add(obj) {
        if (this.cart.find(t => t.id === obj.id)) {
            this.cart.find(t => t.id === obj.id).amount++
        } else
            this.cart.push(obj)

    }

    increment(id) {
        this.cart.map(t => (
            t.id === id ? t.amount++ : t
        ))
    }

    decrement(id) {
        this.cart.map(t => (
            t.id === id ? t.amount-- : t
        ))
    }

    price = () => {
        return this.cart.reduce((final, temp) => final.price * final.amount + temp.price * temp.amount)
    }

}

export default storeCart