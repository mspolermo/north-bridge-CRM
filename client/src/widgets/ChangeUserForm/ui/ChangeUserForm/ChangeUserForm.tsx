import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChangeUserForm.module.scss';

interface ChangeUserFormProps {
    className? : string;
}

export const ChangeUserForm = memo((props: ChangeUserFormProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ChangeUserForm, {}, [className])}>
            <h2>Форма изменения пользователя</h2>
        </div>
    );
});
