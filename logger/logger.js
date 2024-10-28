// logger.js
export class Logger {
    /**
     * Logs general information.
     * @param {string} message - The message to log.
     */
    static log(message) {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }

    /**
     * Logs an error message.
     * @param {string} message - The error message.
     */
    static error(message) {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
}
