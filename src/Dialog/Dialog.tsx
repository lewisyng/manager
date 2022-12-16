import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./Dialog.module.scss";

type DialogProps = {
    children: React.ReactNode;
    containerClassNames?: string;
}

const Dialog: FunctionComponent<DialogProps> = ({ children, containerClassNames }) => {
    return (
        <div className={clsx(styles["dialog"], containerClassNames)}>
            <div>{children}</div>
        </div>
    );
};

export default Dialog;