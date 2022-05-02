import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Table.css'

const Table = () => {

    const [data, setData] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users';
    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response?.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    console.log(data)
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        axios.get(url)
            .then(res => console.log(res, 'res'))
            .catch(err => console.log(err))
    })

    const handleDeleteItems = (index) => {
        const filteredItems = data?.filter((item, arrIndex) => {
            return arrIndex !== index;
        })
        setData(filteredItems)
        // console.log(data)
    }

    return (
        <div className='tabel_wrapper'>
            <h1>Employees Table Data</h1>

            <table id="customers">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions...</th>
                </thead>
                <tbody>
                    {data?.length === 0 ? (
                        <tr>
                            <td colSpan="7">
                                <h2 className='employees_not_found'>Employees Not Found!</h2>
                            </td>
                        </tr>
                    ) : (
                        data?.map((data, index) => {
                            const { id, name, username, email, phone, website } = data
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{website}</td>
                                    <td className='d-flex'>
                                        <div>
                                            <svg
                                                onClick={() => handleDeleteItems(index)}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#FF0000" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg></div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Table
