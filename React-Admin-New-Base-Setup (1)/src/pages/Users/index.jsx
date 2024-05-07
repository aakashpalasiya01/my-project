/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import classes from './styles.module.scss'
import UserTable from './UserTable'
import { useDispatch, useSelector } from 'react-redux'
import { listLimit,SearchFilter } from 'utils/common/constant/constant'
import { getUsers } from 'redux/action/Users'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
const Users = () => {
    const dispatch = useDispatch()
    const { users, count } = useSelector(state => state.userReducers)
    const defaultPagination = {
        page: 1,
        limit: listLimit,
        code: ""
    };

    const [pagination, setPagination] = useState(defaultPagination)
   const [userData,setUserData]=useState([]) 



   useEffect(() => {
    if (users?.length){
       setUserData(users)

    }
}, [users])  
    useEffect(() => {
        if (!users.length){
            dispatch(getUsers(pagination))

        }
    }, [])

    const setPage = (page) => {
        setPagination({ ...pagination, page });
        dispatch(getUsers({ ...pagination, page }))
    };

    
    const handleChangeUser = (e) => {
       let filterData=users?.filter((val)=>val?.name?.toLowerCase()?.includes(e?.target?.value)||val?.phoneNumber?.includes(e?.target?.value) || val?.email?.includes(e?.target?.value) ||val?.occupation?.toLowerCase()?.includes(e?.target?.value) || val?.city?.toLowerCase()?.includes(e?.target?.value) )
        setUserData(filterData)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(getUsers({ ...pagination, page: 1 }))  
        setPagination({ ...pagination, page: 1 });
    }
    
    const optimiseUser = useCallback(SearchFilter(handleChangeUser))
    return (
        <div>
            <div className={classes.user_page}>
                <div className={`${classes.search_bar} common_shadow`}>
                    <form className={classes.search_div} onSubmit={handleSubmit}>
                        <div className={classes.SearchUser}>
                        <input placeholder='Search by user...' type="text" defautlValue={pagination.user} className='input-form' onChange={(e) => {
                                optimiseUser(e)
                            }}  />
                        </div>
                    </form>
                   <Link to={'/adduser'}> <Button type='button' size='medium' variant='contained'>ADD USERS</Button></Link>
                </div>
                <UserTable
                    totalCount={count}
                    pagination={pagination}
                    setPagination={setPage}
                    userList={userData}
                ></UserTable>
            </div>
        </div>
    )
}

export default Users