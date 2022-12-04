export type Column = {
    id: string;
    created_at: Date;
    todos: string[];
    title: string;
};

export type Columns = Column[];

export type ColumnState = {
    columns: Columns
}
