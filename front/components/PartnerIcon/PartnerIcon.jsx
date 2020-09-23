import React from 'react';
import PropTypes from 'prop-types';

const PartnerIcon = props => {
    return ( 
        <li>
            <a href={props.link} key={props.id} className={`partners-com-${props.PaymentPartner} sprited`} shipping={props.ShippingPartner} quality={props.QualityPartner}>{props.text}</a>
        </li>
    );
};

PartnerIcon.propTypes = {
    
};

export default PartnerIcon;