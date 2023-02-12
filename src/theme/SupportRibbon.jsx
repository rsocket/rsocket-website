import React from 'react';
import classnames from 'classnames';
import styles from './SupportRibbon.module.css';

export function SupportRibbon() {
    return (
        <a
            href="https://crowdfunding.lfx.linuxfoundation.org/projects/bb4066fb-8137-4557-8224-f17dba073494"
            rel="noopener noreferrer"
            target={"_blank"}
            className={classnames([styles['ribbon-support'], styles['ribbon-right']])}>
            <span>Support RSocket</span>
        </a>
    )
}
