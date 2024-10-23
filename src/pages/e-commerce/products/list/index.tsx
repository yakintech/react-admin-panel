import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Product } from '../model/Product'
import { Link } from 'react-router-dom'

function List() {

    const [products, setproducts] = useState<Product[]>([])
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState({})

    useEffect(() => {
        axiosInstance.get<Product[]>("products")
            .then(res => {
                setproducts(res.data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })
    }, [])


    return <>
        {
            loading ? <h1>loading...</h1> :
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th>Quantity Per Unit</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p =>
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name?.toUpperCase()}</td>
                                <td>{p.unitPrice}</td>
                                <td>{p.unitsInStock}</td>
                                <td>{p.quantityPerUnit}</td>
                                <td><Link to={`/products/${p.id}`}>Detail</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        }
    </>
}

export default List

