import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./Dialog.module.scss";

type DialogProps = {
    children: React.ReactNode;
    containerClassNames?: string;
}

const Dialog: FunctionComponent<DialogProps> = ({ children, containerClassNames }) => {
    return (
        <div className={clsx(styles["dialog"], "relative", containerClassNames)}>
            <div className="absolute z-[-1] rounded-2xl inset-0 bg-gradient-to-b from-gray-900 to-gray-600"></div>
            <div>{children}</div>
        </div>
    );
};

export default Dialog;