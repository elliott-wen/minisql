class BufferManager {
    constructor(diskManager, maxPages) {
        this.diskManager = diskManager;
        this.maxPages = maxPages; // Maximum number of pages in memory

    }

    /**
     * Fetches a page from the buffer or disk if not cached
     * @param {number} pageId - The ID of the page.
     * @return {Buffer} - The page data.
     */
    getPage(pageId) {
        // Implementation
    }

    /**
     * Writes a page to the disk and updates the buffer
     * @param {number} pageId - The ID of the page.
     * @param {Buffer} data - The data to write.
     */
    writePage(pageId, data) {
        // Implementation
    }
}

module.exports = BufferManager;