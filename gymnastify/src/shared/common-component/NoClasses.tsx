import Image from 'next/image'
import React from 'react'
import emptyBoxicn from "../../assets/images/icons/empty_boxicn.png";

const NoClassesComponent = () => {
    return (
        <div className="no_datafind">
            <div className="no_datafind_block">
                <div className="nodata_img">
                    <Image src={emptyBoxicn} alt="icons"></Image>
                </div>
                <p>No classes found</p>
            </div>
        </div>
    )
}

export default NoClassesComponent;