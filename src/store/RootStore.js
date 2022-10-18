import StoreCart from "./CartStore";
import StoreProducts from "./CatalogStore";
import React from "react";

class RootStore {
    constructor() {
        this.storeCart = new StoreCart(this)
        this.storeProducts = new StoreProducts(this)

    }
}
export default new RootStore()
