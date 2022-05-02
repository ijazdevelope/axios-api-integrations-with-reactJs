import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './TableSorting.scss'

const TableSorting = () => {
    const [data, setData] = useState([])
    const url = 'https://randomuser.me/api/'

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res?.data?.results)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(data)

    return (
        <div className='table_sorting'>
            <h1>table sorting</h1>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Gender</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Cell</th>
                </thead>
                <tbody>
                    {data?.length === 0 ? (
                        <tr>
                            <td colSpan='7'><h2>Employess Not Found!</h2></td>
                        </tr>
                    ) : (
                        data?.map((item, index) => {
                            const { gender, email, phone, cell } = item;
                            console.log(item, 'items')
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{gender}</td>
                                    <td>{item?.id?.name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{item?.registered?.date}</td>
                                    <td>{cell}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableSorting
