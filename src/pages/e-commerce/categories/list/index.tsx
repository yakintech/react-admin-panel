import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ECOMMERCE_API_URL } from '../../../../config/api'

function List() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        axios.get(`${ECOMMERCE_API_URL}categories`)
            .then(response => {
                console.log("response", response)
                setCategories(response.data)
            })
            .catch(error => {
                console.log("error", error)
            })

    }, [])



    return <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category: any) => {
                    return <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                    </tr>
                })}
            </tbody>
        </table>

    </>
}

export default List