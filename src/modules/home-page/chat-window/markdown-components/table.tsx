const Table: React.FC<any> = ({ children }) => {
  return (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  );
};
export default Table;
