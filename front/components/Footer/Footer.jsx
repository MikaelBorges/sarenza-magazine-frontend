import React, { useEffect, useState } from 'react';
import { getFooter } from 'strapi/strapi.service';

import NeedHelp from '../NeedHelp/NeedHelp';

const Footer = () => {
    const [footer, setFooter] = useState(null);
    useEffect(() => {
        async function fetch() {
            const data = await getFooter();
            setFooter(data);
        }
        fetch();
    }, []);
    return (
        footer && (
            <footer id="MainFooter">
                <div className="help">
                    <NeedHelp data={footer.needHelp} />
                </div>
            </footer>
        )
    );
};

export default Footer;
