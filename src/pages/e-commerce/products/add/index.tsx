import React, { useState } from 'react'
import { useCategories } from '../../../../hooks/api/useCategories'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Product } from '../model/Product'
import { useNavigate } from 'react-router-dom'

function Add() {

    const { categories, loading, error } = useCategories()
    const [selectedCategoryId, setselectedCategoryId] = useState(1)

    const [name, setName] = useState<string>("")
    const [unitPrice, setUnitPrice] = useState<number>(0)
    const [unitsInStock, setUnitsInStock] = useState<number>(0)


    const navigate = useNavigate()


    const add = () => {
        
        let newProduct : Product = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,
            categoryId: selectedCategoryId
        }

        axiosInstance.post("products", newProduct)
            .then(res => {
                navigate("/products")
            })
            .catch(err => {
                console.log(err)
            })

    }


    return <>
        <div>
            <select onChange={(e) => setselectedCategoryId(parseInt(e.target.value))}>
                {categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
        </div>
        <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Unit Price</label>
            <input type="number" onChange={(e) => setUnitPrice(parseInt(e.target.value))} />
        </div>
        <div>
            <label>Units In Stock</label>
            <input type="number" onChange={(e) => setUnitsInStock(parseInt(e.target.value))} />
         </div> 
         <div>
            <button onClick={add}>Add</button>
         </div>
    </>
}

export default Add