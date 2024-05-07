import React from 'react'
import classes from './styles.module.scss'
import { Link } from 'react-router-dom'
import { MailOutline } from '@material-ui/icons'
import { ROUTES, brandLogo } from 'utils/common/constant/constant'
import { useSelector } from 'react-redux'

const Sidebar = (props) => {
    const isActiveURL = (path) => {
        return props.history.location.pathname.includes(path)
    }
    const {user} = useSelector(state => state.auth)
    return (
        <div className={classes.sidebar}>
            <div className={classes.logo}>
                <img src={brandLogo} alt="logo" />
            </div>
            <div className={classes.sidebarList}>
               { user?.is_qa ? "" :
                <ul>
                    <li>
                        <Link to={ROUTES.USERS_PATH} className={isActiveURL(ROUTES.USERS_PATH) ? classes.active : ''}>
                            <MailOutline /> Users
                        </Link>
                    </li>
                    
                </ul>}
            </div>
        </div>
    )
}

export default Sidebar