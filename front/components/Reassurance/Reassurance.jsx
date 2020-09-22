import React from 'react';

import ReassuranceItem from "./ReassuranceItem";



const Reassurance = ({data}) => { data && data.map((item,id)=><ReassuranceItem text={item.text} classIcon={item.classIcon} key={id}/>)};


export default Reassurance;