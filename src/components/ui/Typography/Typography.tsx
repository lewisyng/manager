import clsx from 'clsx';
import { FunctionComponent } from 'react';

type TypographyProps = {
    as?: 'p' | 'span';
    content: string;
    className?: string;
};

export const Typography: FunctionComponent<TypographyProps> = ({
    as = 'p',
    content,
    className,
}) => {
    const As = as;

    return <As className={clsx(className)}>{content}</As>;
};
