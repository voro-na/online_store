import {Routes, Route} from "react-router-dom";
import Catalog from "./catalog/catalog";
import ShopingCart from "./ShopingCart/ShopingCart";
import useStores from "../../store/RootStore";

const Main = () => {


    return (
        <div>
            <Routes>
                <Route path='/calalog' element={<Catalog/>} />
                <Route path='*' element={<Catalog/>} />
                <Route path='/cart' element={<ShopingCart/>}/>
            </Routes>
        </div>
    )
}
export default Main