import React from 'react';

import ReassuranceItem from "./ReassuranceItem";



const Reassurance = ({data}) => {
    return (
        <div>
           { data && data.map((item,i)=><ReassuranceItem text={item.text} classIcon={item.classIcon} key={i}/>)}
        </div>
    );
};

export default Reassurance;