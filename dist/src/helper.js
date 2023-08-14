"use strict";
function getOffset(currentPage = 1, listPerPage = 10) {
    return (currentPage - 1) * listPerPage;
}
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}
module.exports = {
    getOffset,
    emptyOrRows
};
