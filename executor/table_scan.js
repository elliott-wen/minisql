import {TableScanIterator} from './table_scan_iterator.js';

export class TableScan {
    constructor(tableName) {
        this.tableName = tableName;
        this.iterator = null;
    }

    // Initialize the iterator lazily
    init() {
        if (!this.iterator) {
            console.log(`Initializing TableScan for table ${this.tableName}`);

            // Create the TableScanIterator with mock data
            this.iterator = new TableScanIterator();
        }
    }

    // Fetch the next row lazily
    next() {
        this.init(); // Initialize the iterator if it hasn't been initialized
        return this.iterator.next(); // Get the next row from the iterator
    }

    // Check if there are more rows
    hasNext() {
        this.init();
        return this.iterator.hasNext();
    }
}
