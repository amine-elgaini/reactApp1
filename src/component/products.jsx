import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import DisplayProduct from './displayProduct'
import SearchBox from './searchBox'
export default function ProductList() {

    const [productList, setProductList] = useState([]);
    const [searchBox, setSearchBox] = useState('');

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(response => setProductList(response))
    }

    const display = () => {
        const filtredProductList = productList.filter((product)=>{
            let description = product.description.toLowerCase();
            if (description.includes(searchBox)) {
                return true
            }
            return false
        })
        const products = filtredProductList.map((product)=>{
            return <DisplayProduct key ={product.id} product={product}/>
        })
        return products;
    }

    const handleSearch = (value) => {
        setSearchBox(value);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <SearchBox search={handleSearch}/>
            <div className="my-5 relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {display()}
                    </tbody>
                </table>
            </div>
        </>
    )
}
