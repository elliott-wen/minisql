export class TableScanIterator {
    constructor(tableName) {
        this.tableName = tableName;
        this.currentIndex = 0;       // Track the current row index
        // Mock table data for demonstration purposes
        this.tableData = [
            {name: 'Alice', age: 25},
            {name: 'Bob', age: 35},
            {name: 'Charlie', age: 40}
        ];
    }

    // Return the next row in the table
    next() {
        if (this.currentIndex < this.tableData.length) {
            const row = this.tableData[this.currentIndex];
            this.currentIndex++;
            return row;
        } else {
            return null;  // No more rows
        }
    }

    // Check if there are more rows
    hasNext() {
        return this.currentIndex < this.tableData.length;
    }
}