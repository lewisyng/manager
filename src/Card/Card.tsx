import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

type CardProps = {
    header?: React.ReactNode;
    body?: React.ReactNode;
};

const Card: FunctionComponent<CardProps> = ({ header, body }) => {
    return (
        <motion.div
            initial={{ opacity: 0, marginTop: '-10px' }}
            animate={{ opacity: 1, marginTop: 0 }}
            exit={{ opacity: 0, marginTop: '10px' }}
            transition={{ duration: 0.2 }}
            className="p-4 shadow shadow-[rgba(0,0,0,0.5)] cursor-pointer hover:bg-slate-200 transition-all rounded"
        >
            {header && <div className="font-bold">{header}</div>}
            {body && <div className="font-bold text-slate-900">{body}</div>}
        </motion.div>
    );
};

export default Card;
