import React, { useState } from "react";
import { CommonDialog } from "./types";
import { isDialogOpen } from "@/utils/CommonService";

const SignupCommonDialog = () => {
    const defaultOptions = {
        signupIsOpen: false,
        onConfirm: () => { },
    };

    const [dialogOptions, setDialogOptions] =
        useState<any>(defaultOptions);

    isDialogOpen.subscribe((data: CommonDialog) => {
        if (data.signupIsOpen && !dialogOptions.signupIsOpen) setDialogOptions(data);
        else if (!data.signupIsOpen && dialogOptions.signupIsOpen) setDialogOptions(defaultOptions);
    });

    const { signupIsOpen, onConfirm } = dialogOptions;

    const handleConfirm = (confirm: boolean) => {
        if (typeof onConfirm !== "undefined") onConfirm(confirm);
        isDialogOpen.onNext(defaultOptions);
    };

    const handleClose = () => {
        isDialogOpen.onNext(defaultOptions);
    };

    return (
        <>
            {signupIsOpen && (
                <div className="react-confirm-alert-overlay">
                    <div className="confirmModel">
                        <div className="modelHeader">
                            {<h4>signup</h4>}
                            <button onClick={handleClose}>
                                X
                            </button>
                        </div>
                        <div className="modelBody">
                            <p>{"user"}</p>
                        </div>
                        <div className="comonWdth btnWrap commonModelFooter">
                            <button
                                className="mr-3 btn_secondary"
                                color="primary"
                                onClick={handleClose}
                            >
                                {"Cancel"}
                            </button>

                            <button
                                onClick={() => handleConfirm(true)}
                            >
                                {"Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignupCommonDialog;