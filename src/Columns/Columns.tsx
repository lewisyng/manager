import styles from './Columns.module.scss';
import clsx from 'clsx';
import Column from '../Column/Column';
import columnSelectors from '../store/selectors/columns';
import { useAppSelector } from '../store/store';

const Columns = () => {
    const state = useAppSelector((state) => state);
    const columns = columnSelectors.selectColumns(state);

    return (
        <div className={clsx(styles.columns, 'flex gap-4')}>
            {columns &&
                columns.map((column, idx) => (
                    <Column key={idx} column={column} />
                ))}
        </div>
    );
};

export default Columns;
