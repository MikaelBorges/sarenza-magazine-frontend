import React from 'react';
import styled from 'styled-components';

import ReassuranceItem from "./ReassuranceItem";


const Reassurance = styled.div`
    margin: 0;
    list-style: none;
    width: 25%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-family: robotoc,"Arial Narrow",sans-serif;
    font-size: 14px;
    color: #000;
    line-height: 18px;
    padding: 0 15px;
    flex-flow: row wrap;
    font-weight: 700;
`;

const Reassurance = (data) => {
    return (
        <div>
           { data.map((item,i)=>{
               return (
                   <ReassuranceItem text={item.text} classIcon={item.classIcon} key={i}/>
               )
           })}
        </div>
    );
};

export default Reassurance;