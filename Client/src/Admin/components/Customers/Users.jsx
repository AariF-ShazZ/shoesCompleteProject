import React, {useState, useEffect} from 'react';
import DashboardHeader from '../DashboardHeader';
import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';
import "../../pages/styles.css"; 
import { useDispatch, useSelector } from 'react-redux';
import {RiDeleteBin5Line} from "react-icons/ri"
import { Heading } from '@chakra-ui/react';
import { deleteUsersData, getUsersData } from '../../../Redux/authReducer/actions';

const Users = () => {
    const usersData = useSelector((store) => store.authReducer.usersData) || []
    console.log("usersData",usersData);
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(usersData);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setPagination(calculateRange(usersData, 5));
        setOrders(sliceData(usersData, page, 5));
        if(usersData.length === 0)dispatch(getUsersData())
        
    }, [dispatch, usersData]);

    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(usersData, new_page, 5));
    }

    const handleUserDelete = (id) => {
            dispatch(deleteUsersData(id)).then((res) =>  dispatch(getUsersData()))
            .catch((err) => console.log("delete User",err))
    }

  return (
    <>
     <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Order" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <Heading color={"#f00"}>Users List</Heading>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>S.NO.</th>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>COSTUMER</th>
                        <th>EMAIL</th>
                        <th>DELETE</th>
                    </thead>

                    {usersData.length !== 0 ?
                        <tbody>
                            {usersData.map((user, index) => (
                                <tr key={index}>
                                    <td><span>{index+1}</span></td>
                                    <td><span>{user._id}</span></td>
                                    <td><span>{new Date(user.createdAt).toLocaleDateString()}</span></td>
                                    <td>
                                            <span>{user.username}</span>
                                    </td>
                                    <td><span>{user.useremail}</span></td>
                                    <td><RiDeleteBin5Line fontSize={"20px"}  m={"auto"} cursor={"pointer"} onClick={() => handleUserDelete(user._id)}/></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {usersData.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Users