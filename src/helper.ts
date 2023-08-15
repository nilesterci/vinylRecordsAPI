function getOffset(currentPage = 1, listPerPage = 10) {
    return (currentPage - 1) * listPerPage;
  }
  
  function emptyOrRows(rows: any) {
    if (!rows) {
      return [];
    }
    return rows;
  }

  function emptyOrRow(rows){
    return rows[0];
  }
  
  module.exports = {
    getOffset,
    emptyOrRows,
    emptyOrRow
  };
  