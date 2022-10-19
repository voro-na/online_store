import {makeAutoObservable} from "mobx"

class storeCart {
    cart = []

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
        const index = this.cart.findIndex(t => t.amount === 0)
        if (index !== -1)
            this.cart.splice(index, 1)
    }

    Price = () => {

        if (this.cart.length === 0)
            return 0
        else if (this.cart.length === 1)
            return this.cart[0].price * this.cart[0].amount

        let finalPrice = 0
        for (let key in this.cart) {
            finalPrice += this.cart[key].amount * this.cart[key].price
        }
        return finalPrice
    }
}

export default storeCart