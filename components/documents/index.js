import React from "react";

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const DocumentTableRow = ({ data, ...props }) => (
  <>
    <tr key={data.key}>
      {Object.values(data).map((d) => (
        <td className={`max-w-lg min-w-sm`} {...props}>
          {d.label}
        </td>
      ))}
    </tr>
  </>
);

const DocumentTableHead = ({ cells }) => (
  <>
    <thead>
      <tr>
        {cells &&
          cells.map((cell) => <th className="text-sm text-left">{cell}</th>)}
      </tr>
    </thead>
  </>
);

const DocumentTable = ({ children }) => {
  //on component mount load data from users

  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full">{children}</table>
    </div>
  );
};

// const DocumentSummary = ({ data }) => ();
// const DocumentDetails = ({ data }) => ();
// const DocumentEdit = ({ data }) => ();

export { DocumentTableRow, DocumentTable, DocumentTableHead };
