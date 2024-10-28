// table_scan_iterator.js
export class TableScanIterator {
    constructor(bufferManager, tableName) {
        this.bufferManager = bufferManager;
        this.tableName = tableName;
        this.currentPageId = 0;
    }

    /**
     * Returns the next row in the table.
     * @return {Object|null} - Next row or null if end of table.
     */
    next() {
        // Implementation
    }

    /**
     * Checks if the iterator has more rows.
     * @return {boolean} - Whether there are more rows.
     */
    hasNext() {
        // Implementation
    }
}
