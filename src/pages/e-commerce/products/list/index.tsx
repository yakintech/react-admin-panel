import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../config/axiosInstance'

function List() {

    const [products, setproducts] = useState<Product[]>([])
    const [loading, setloading] = useState<boolean>(true)

    useEffect(() => {
        axiosInstance.get<Product[]>("products")
            .then(res => {
                setproducts(res.data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p =>
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name.toUpperCase()}</td>
                                <td>{p.unitPrice}</td>
                                <td>{p.unitsInStock}</td>
                                <td>{p.quantityPerUnit}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
        }
    </>
}

export default List

interface Product {
    id: number,
    name: string,
    unitsInStock: number,
    unitPrice: number,
    quantityPerUnit: string
}