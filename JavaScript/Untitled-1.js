var cellList = [];
var selectedArea = {sRow: 2, sCol:3, eRow: 1, eCol: 1}
var i = parseInt(selectedArea.sCol) > parseInt(selectedArea.eCol) ? parseInt(selectedArea.eCol) : parseInt(selectedArea.sCol);
var colLen = parseInt(selectedArea.sCol) <= parseInt(selectedArea.eCol) ? parseInt(selectedArea.eCol) : parseInt(selectedArea.sCol);

var j = parseInt(selectedArea.sRow) > parseInt(selectedArea.eRow) ? parseInt(selectedArea.eRow): parseInt(selectedArea.sRow);
var rowLen = parseInt(selectedArea.sRow) <= parseInt(selectedArea.eRow) ? parseInt(selectedArea.eRow): parseInt(selectedArea.sRow);

for (i; i <= rowLen; i++) {
    for (j; j <= colLen; j++) {
        cellList.push(i + '_' + j);
    }
}
console.log(cellList)