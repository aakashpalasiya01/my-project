import React, { useState } from "react";
import { Button } from "@material-ui/core";

import { isDialogOpen } from "utils/common/CommonService";
import './confirmDialog.scss'


const ConfirmDialog = () => {
  const defaultOptions = {
    open: false,
    data: { message: "Are you Sure?" },
    cancelText: "Cancel",
    ConfirmText: "Okay",
    onConfirm: () => {}
  };
  const [dialogOptions, setDialogOptions] = useState(defaultOptions);

  isDialogOpen.subscribe(data => {
    if (data && !dialogOptions.open) setDialogOptions(data);
    else if (!data && dialogOptions.open) setDialogOptions(defaultOptions);
  });

  const {open,data,cancelText,confirmText,onConfirm,onCancel} = dialogOptions;

  const handleConfirm = confirm => { 
    if (typeof onConfirm !== "undefined") onConfirm(confirm)
  };

  const handleClose = () => {
    if (typeof onCancel !== "undefined") onCancel();
  };
  return (
    <>
    {open &&
    <div className="react-confirm-alert-overlay">
        <div className="confirmModel">
            <div className="modelHeader">
                {data.title ? <h4>{ data.title }</h4> : null }
               {dialogOptions.status ? "" : <button onClick={handleClose}>x</button>}
            </div>
            <div className="modelBody">
                <p>{ data.message }</p>  
            </div>
            <div className="comonWdth btnWrap commonModelFooter">
                <Button className="mr-3" variant="contained" color="primary" onClick={onCancel}>{ cancelText }</Button>
                {confirmText ? 
                  <Button className="theme_primary" variant="contained" onClick={() => handleConfirm(true)}>{ confirmText }</Button> 
                : null }
            </div>
        </div>
    </div>
    }
    </>
  );
};

export default ConfirmDialog;