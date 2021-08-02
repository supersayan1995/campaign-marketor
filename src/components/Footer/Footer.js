import {Fragment} from 'react';

import classes from './Footer.module.css';

const Footer = ()=>
{
    return(
        <Fragment>
            <div className={`container ${classes.footer}`}>
                <p>Campaign Marketor</p>
                <p>&copy; All rights reserved</p>
            </div>
        </Fragment>
    );
};

export default Footer;