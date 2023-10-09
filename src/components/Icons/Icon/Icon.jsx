import React from 'react';
import styles from "./Icon.module.scss";
import classNames from 'classnames';


const Icon = ({
   className,
   width,
   height,
   color = 'inherit',
   icon,
   onClick
}) => {

    return (
        <div onClick={() => onClick} className={classNames(styles.block, className)} style={{ width, height, color }}>
            {icon}
        </div>
    );
};

export default Icon;