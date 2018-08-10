import React from 'react';

import './Pagination.css';

export default props => {
  const {
    pageSize,
    pageNumber,
    itemsCount,
    pageSizeOptions,
    onPageSizeChange,
    onPageNumberChange
  } = props;

  const { onNext, onPrev, onFirst, onLast } = props;

  const pagesCount = Math.round(itemsCount / pageSize);

  const inputProps = {
    size: 4,
    maxLength: 4,
    value: pageNumber,
    onChange: onPageNumberChange
  };

  const options = pageSizeOptions.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));

  return (
    <table className="table pagination-compact">
      <tbody>
        <tr className="pagination-controls bg-success">
          <td>
            <span className="icon first" onClick={onFirst} />
          </td>
          <td>
            <span className="icon prev" onClick={onPrev} />
          </td>
          <td>
            <span>Page&nbsp;</span>
          </td>
          <td>
            <input className="page-number" {...inputProps} />
          </td>
          <td>
            <span>
              of&nbsp;
              {pagesCount}
            </span>
          </td>
          <td>
            <select
              className="page-size"
              value={pageSize}
              onChange={onPageSizeChange}
            >
              {options}
            </select>
          </td>
          <td>
            <span className="icon next" onClick={onNext} />
          </td>
          <td>
            <span className="icon last" onClick={onLast} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
