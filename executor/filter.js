export class Filter {
    constructor(condition, childPlan) {
        this.condition = condition; // The filter condition
        this.childPlan = childPlan; // The child plan (e.g., TableScan)
    }

    // Fetch the next row lazily, only if it satisfies the condition
    next() {
        while (this.childPlan.hasNext()) {
            const row = this.childPlan.next();
            if (this.matchesCondition(row)) {
                return row;
            }
        }
        return null; // No more matching rows
    }

    // Check if there are more rows that satisfy the condition
    hasNext() {
        return this.childPlan.hasNext();
    }

    // Check if the row matches the filter condition
    matchesCondition(row) {
        const { column, operator, value } = this.condition;
        switch (operator) {
            case '>':
                return row[column] > value;
            case '<':
                return row[column] < value;
            case '=':
                return row[column] === value;
            default:
                return false;
        }
    }
}