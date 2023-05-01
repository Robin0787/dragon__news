import React from 'react';
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className='p-4 text-center bg-light'>
            <img src={qzone1} alt="" className='img-fluid'/>
            <img src={qzone2} alt="" className='img-fluid my-2'/>
            <img src={qzone3} alt="" className='img-fluid'/>
        </div>
    );
};

export default QZone;