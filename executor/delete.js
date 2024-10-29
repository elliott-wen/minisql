export class Delete {
    constructor(childPlan) {
        this.childPlan = childPlan; // The child plan (e.g., TableScan with Filter)
    }

    next() {
        if (this.childPlan.hasNext()) {
            const row = this.childPlan.next();
            this.markForDeletion(row);
            return row;
        }
        return null; // No more rows
    }

    hasNext() {
        return this.childPlan.hasNext();
    }

    markForDeletion(row) {
        // Mark the row for deletion (this can be handled in a more complex way in a real system)
        row._deleted = true;
        console.log('Row marked for deletion:', row);
    }
}
