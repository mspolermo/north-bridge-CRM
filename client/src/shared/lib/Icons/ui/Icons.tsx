import { FC } from 'react';
import IconsSVG from './iconsLibrary.svg';
import { Mods } from '../../classNames/classNames';
import classNames from 'classnames';
import cls from './icons.module.scss';

export enum IconsTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    PRIMARY_INVERTED = 'primary_inverted',
    SECONDARY_INVERTED = 'secondary_inverted'
}

export enum IconsSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IconsProps {
    name: string;
    color?: string;
    theme?: IconsTheme;
    size?: IconsSize;
    className?: string;
    strokeWidth?: string;
}

export const Icons:FC<IconsProps> = (props: IconsProps) => {
    const {
        name, theme = IconsTheme.PRIMARY, size = IconsSize.M, className, strokeWidth='1'
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return(
        <svg 
            //className={`icon icon-${name} ${className}`}
            className={classNames(cls.icons, mods, [className])}
            // fill={color}
            // stroke={color}
            // width={size}
            // height={size}
            strokeWidth={strokeWidth}
        >
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    );
};
  