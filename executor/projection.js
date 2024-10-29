export class Projection {
    constructor(columns, childPlan) {
        this.columns = columns; // The columns to project
        this.childPlan = childPlan; // The child plan (e.g., Filter or TableScan)
    }

    // Fetch the next row lazily and project only the selected columns
    next() {
        if (this.childPlan.hasNext()) {
            const row = this.childPlan.next();
            return this.projectColumns(row);
        }
        return null;
    }

    // Check if there are more rows
    hasNext() {
        return this.childPlan.hasNext();
    }

    // Project only the required columns from the row
    projectColumns(row) {
        const projectedRow = {};
        this.columns.forEach(col => {
            projectedRow[col] = row[col];
        });
        return projectedRow;
    }
}
