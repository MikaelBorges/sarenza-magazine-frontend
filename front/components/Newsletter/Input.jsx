import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';


const Input = props => {
    return (
        <div className='fields-n1'>
            <div className='field'>
            <label htmlFor='email' >
                    {props.label}
                </label>
                <input type="email" name='email' placeholder={props.placeholder}/>
                {
                    props.buttons.map((button)=>{
                       return <Button key={button.id} action={button.link} value={button.label} className="button" />
                    })
                }
            </div>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;