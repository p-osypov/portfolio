import { TableHTMLAttributes } from 'react';

const Table = (props: TableHTMLAttributes<HTMLTableElement>): JSX.Element => {
  return (
    <div className="table-wrapper">
      <table>{props.children}</table>
    </div>
  );
};
export default Table;
