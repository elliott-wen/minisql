export class Update {
    constructor(childPlan, assignments) {
        this.childPlan = childPlan; // The child plan (e.g., TableScan with Filter)
        this.assignments = assignments; // The columns and values to update
    }

    next() {
        if (this.childPlan.hasNext()) {
            const row = this.childPlan.next();
            this.applyUpdates(row);
            return row;
        }
        return null; // No more rows
    }

    hasNext() {
        return this.childPlan.hasNext();
    }

    applyUpdates(row) {
        this.assignments.forEach(({ column, value }) => {
            row[column] = value; // Apply the update
        });
    }
}