import { CSSProperties } from 'react';
import styles from './NavIcon.module.scss';

type Props = {
    icon: string;
    notificationNumber?: number;
    imgStyle?: CSSProperties;
}

export const NavIcon = ({ icon, notificationNumber = 0, imgStyle }: Props) => {

    return (
        <div className={styles.icon}><img src={icon} style={imgStyle} />{notificationNumber ? <span className={styles.dot}>{notificationNumber}</span> : null}</div>
    )
}