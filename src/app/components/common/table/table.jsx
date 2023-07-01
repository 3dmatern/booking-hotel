import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, data, onClick, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ columns }} />
                    <TableBody {...{ data, onClick }} />
                </>
            )}
        </table>
    );
};

export default Table;
