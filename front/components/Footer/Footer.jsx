import React, { useEffect, useState } from 'react';
import { getFooter } from 'strapi/strapi.service';

import NeedHelp from '../NeedHelp/NeedHelp';

const Footer = () => {
    const [footer, setFooter] = useState({});
    useEffect(() => {
        async function fetch() {
            const data = await getFooter();
            setFooter(data);
        }
        fetch();
    }, []);
    return (
        <footer id="MainFooter">
            <NeedHelp data={footer.needHelp} />
        </footer>
    );
};

export default Footer;
