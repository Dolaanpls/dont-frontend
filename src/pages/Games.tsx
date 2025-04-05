import { PropsWithChildren } from "react";
import { Link } from "react-router";

import chatIcon from '../assets/messages.png';
import mailIcon from '../assets/mail.png';
import socialIcon from '../assets/social.png';
import tinderIcon from '../assets/tinder.png';

import styles from './Games.module.scss';
import { NavIcon } from "../components/NavIcon";

const twitterStyle = { width: '25px' };

export const Games = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
            <nav className={styles.menu}>
                <Link to="chat"><NavIcon icon={chatIcon} notificationNumber={4} /></Link>
                <Link to="mail"><NavIcon icon={mailIcon} /></Link>
                <Link to="social-media"><NavIcon icon={socialIcon} imgStyle={twitterStyle} /></Link>
                <Link to="tinder"><NavIcon icon={tinderIcon} /></Link>
            </nav>
        </div>
    );
}