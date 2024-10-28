export class DiskManager {
    constructor(filename) {
        this.filename = filename;
    }

    /**
     * Writes data to a page on disk
     * @param {number} pageId - The ID of the page.
     * @param {Buffer} data - The data to write (fixed size, e.g., 4KB).
     */
    writePage(pageId, data) {
        // Implementation
    }

    /**
     * Reads data from a page on disk
     * @param {number} pageId - The ID of the page to read.
     * @return {Buffer} - The data read from the page.
     */
    readPage(pageId) {
        // Implementation

    }
}

