const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {Object.values(columns).map((column) => (
                    <th key={column} scope="col">
                        {column}
                    </th>
                ))}
                <th />
            </tr>
        </thead>
    );
};

export default TableHeader;
