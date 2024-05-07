import React, { useState } from "react";
import { CommonDialog } from "./types";
import { isDialogOpen } from "@/utils/CommonService";

const ConfirmDialog = () => {
  const defaultOptions = {
    open: false,
    data: { message: "Are you Sure?", title: "" },
    cancelText: "Cancel",
    confirmText: "Okay",
    onConfirm: () => { },
  };

  const [dialogOptions, setDialogOptions] =
    useState<CommonDialog>(defaultOptions);

  isDialogOpen.subscribe((data: CommonDialog) => {
    if (data.open && !dialogOptions.open) setDialogOptions(data);
    else if (!data.open && dialogOptions.open) setDialogOptions(defaultOptions);
  });

  const { open, data, cancelText, confirmText, onConfirm } = dialogOptions;

  const handleConfirm = (confirm: boolean) => {
    if (typeof onConfirm !== "undefined") onConfirm(confirm);
    isDialogOpen.onNext(defaultOptions);
  };

  const handleClose = () => {
    isDialogOpen.onNext(defaultOptions);
  };

  return (
    <>
      {open && (
        <div className="react-confirm-alert-overlay">
          <div className="confirmModel">
            <div className="modelHeader">
              {data.title ? <h4>{data.title}</h4> : null}
              <button onClick={handleClose}>
                X
              </button>
            </div>
            <div className="modelBody">
              <p>{data.message}</p>
            </div>
            <div className="comonWdth btnWrap commonModelFooter">
              <button
                className="mr-3 btn_secondary"
                color="primary"
                onClick={handleClose}
              >
                {cancelText}
              </button>
              {confirmText ? (
                <button
                  onClick={() => handleConfirm(true)}
                >
                  {confirmText}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDialog;