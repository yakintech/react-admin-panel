import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Product } from '../model/Product'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { trTR } from '@mui/x-data-grid/locales';
import { FavoritesContext } from '../../../../context/FavoritesContext'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../../../utils/tokenStorage'
import { baseService } from '../../../../api/baseService'
import { useDispatch } from 'react-redux'
import { CartItem } from '../../../../store/slices/CartSlice'

function List() {



    const [products, setproducts] = useState<Product[]>([])
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState({})

    const { favOperation, hasFavorite } = useContext(FavoritesContext)

    useEffect(() => {
        baseService.getAll("products")
            .then(data => {
                setproducts(data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })
    }, [])

    const deleteProduct = (id: number) => {
        var result = window.confirm("Do you want to delete this product?")

        if (result) {
            axiosInstance.delete(`products/${id}`)
                .then(res => {
                    setproducts(products.filter(p => p.id !== id))
                })
                .catch(err => {
                    console.error(err)
                })
        }

    }

    const dispatch = useDispatch()

    const add = (item: any) => {
        
        let cartItem : CartItem = {
            id: item.id,
            name: item.name,
            price: item.unitPrice,
            quantity: 1
        }
        dispatch({ type: 'cart/addToCart', payload: cartItem })
    }

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 2
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 1
        },
        {
            field: "unitsInStock",
            headerName: "Units In Stock",
            flex: 1
        },
        {
            field: "quantityPerUnit",
            headerName: "Quantity Per Unit",
            flex: 2
        },
        {
            field: "Detail",
            headerName: "Detail",
            flex: 1,
            renderCell: (params) => {
                return <Link to={`/products/${params.row.id}`}>Detail</Link>
            }
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 1,
            renderCell: (params) => {
                return <Button variant="contained" onClick={() => deleteProduct(params.row.id)} color="error">Delete</Button>
            }
        },
        {
            field: "Favorite",
            headerName: "Favorite",
            flex: 2,
            renderCell: (params: any) => {
                if (params.row.unitPrice > 0) {
                    return <Button variant="contained" onClick={() => favOperation(params.row)} color="primary">
                        {hasFavorite(params.row) ? "Remove from Fav" : "Add to Fav"}
                    </Button>
                }
                else {
                    return <></>
                }
            }
        },
        {
            field: "AddtoCart",
            headerName: "Add to Cart",
            flex: 2,
            renderCell: (params: any) => {
                return <Button variant="contained" color="primary" onClick={() => add(params.row)}>Add to Cart</Button>
            }
        }
    ]


    return <>
        <hr />
        <Link to={`/products/add`}>Add</Link>
        <hr />
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 100]}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>

    </>
}

export default List

