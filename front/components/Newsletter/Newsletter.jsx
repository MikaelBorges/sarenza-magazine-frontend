import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const Newsletter = props => {
    return (
            <form action="/subscription/contest" className='subscribe-newsletter'>
                <div className="title-level1">{props.title}</div>
                <div className="n1-subtitle">{props.subTitle}</div>
                <p>{props.text}</p>
                <Input label={props.input.Label} placeholder={props.input.Placeholder} buttons={props.input.Button}/>
                <div className='legal-message'>{props.terms}</div>
            </form>
        );
    };
    
    Newsletter.propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        terms: PropTypes.string.isRequired
    };
    
    export default Newsletter;