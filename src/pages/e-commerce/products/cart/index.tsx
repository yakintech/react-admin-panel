import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {

    const { cart } = useSelector((state: any) => state)

    let totalPrice = 0

    cart.items.forEach((product: any) => {
        totalPrice += product.price * product.quantity
    })


    const dispatch = useDispatch()

    return <>
        <hr />
        <h1>Total Price: {totalPrice.toFixed(2)}</h1>
        <Button color="error" onClick={() => dispatch({ type: "cart/empty" })} variant="outlined">Empty Cart</Button>
        <hr />
        <ul>
            {cart.items.map((product: any) => {
                return <>
                    <li style={{ marginTop: 20 }} key={product.id}>{product.name} - {product.price.toFixed(2)} * {product.quantity} = {(product.price * product.quantity).toFixed(2)}

                        <Button style={{ marginLeft: 20 }} variant="outlined" onClick={() => dispatch({ type: "cart/decrease", payload: product.id })}> - </Button>
                        <Button onClick={() => dispatch({ type: "cart/increase", payload: product.id })} style={{ marginLeft: 20 }} variant="outlined"> + </Button>

                    </li>
                </>
            })}
        </ul>
    </>
}

export default Cart