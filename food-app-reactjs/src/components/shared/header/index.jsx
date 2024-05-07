import React from 'react'
import classes from './styles.module.scss'
import { logout } from 'redux/action/authAction'
import { isDialogOpen } from 'utils/common/CommonService'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    const handleConfirm = () => {
        isDialogOpen.onNext({
          open: true,
          data: {
            message: "Are you sure want to logout?",
            title: "Confirmation"
          },
          cancelText: "Cancel",
          confirmText: "Logout",
          onCancel: () => isDialogOpen.onNext(false),
          onConfirm: () => {
            isDialogOpen.onNext(false)
            dispatch(logout())
          }
        });
    }

    return (
        <header className={classes.header}>
            <div className={classes.user_dropdown}>
                <div>
                    <div>
                        <div onClick={handleConfirm} className='btn btn-danger'>Logout</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header