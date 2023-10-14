import { ReactNode, memo, useEffect } from 'react';
import cls from './Page.module.scss';

interface PageProps {
    className? : string;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const {
        children
    } = props;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div
            className={cls.Page}
        >
            {children}    
        </div>
    );
});
