const Table = ({ data, columns, title, action, showHeader }) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div className=" bg-white overflow-x-auto p-4 w-[68%] shadow-lg sm:rounded-lg rounded-xl ">
      <div className="flex justify-between items-center pb-2">
        <p className="font-medium text-base text-gray-400">{title}</p>
        {action ? action : <p>&#8230;</p>}
      </div>
      <table className="text-sm  text-gray-500 dark:text-gray-400 w-full">
        <thead className="text-sm text-gray-700 uppercase bg-white">
          {showHeader && (
            <tr>
              {columns &&
                columns.map((head) => (
                  <th
                    key={head.header}
                    className=" py-2 text-base font-medium"
                    scope="col"
                  >
                    {getCaps(head.header, head.field)}
                  </th>
                ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr
                className="bg-white dark:bg-gray-900 dark:border-gray-700"
                key={index}
              >
                {columns &&
                  columns.map((col, index) => (
                    <td
                      key={index}
                      className=" py-3 pr-0.5 text-[#2B3B45] font-bold text-base"
                    >
                      {col.field === "icon" ? (
                        <div className="bg-gray-200 w-10 flex justify-center py-2 rounded-md -ml-2">
                          <img src={row.icon} alt="image" className="w-8 " />
                        </div>
                      ) : col.field === "status" ? (
                        <div
                          className={`flex justify-center py-1 px-2 rounded-full ${
                            row.status === "pending"
                              ? "bg-[#FFF2EE]"
                              : "bg-shadowgreen"
                          }`}
                        >
                          <p
                            className={`text-sm ${
                              row.status === "pending"
                                ? "text-[#FEAA92]"
                                : "text-[#35BEB9]"
                            }`}
                          >
                            {row[col.field]}
                          </p>
                        </div>
                      ) : col.field === "name" ? (
                        <div className="flex flex-col justify-center">
                          <p className="whitespace-nowrap">{row.name}</p>
                          <p className="text-gray-400 text-sm">
                            {row.variants}
                          </p>
                        </div>
                      ) : (
                        row[col.field]
                      )}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
