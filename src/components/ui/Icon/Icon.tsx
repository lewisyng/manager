import { FunctionComponent } from 'react';

type IconProps = {
    width?: number;
    height?: number;
    iconName: string;
};

export const Icon: FunctionComponent<IconProps> = ({
    width = 24,
    height = 24,
    iconName,
}) => {
    return (
        <img
            src={`/assets/icons/${iconName}.svg`}
            alt="plus"
            width={width}
            height={height}
        />
    );
};
