const range = (start, end, step = 1) => {
    if (!Number.isInteger(start)) {
        throw new TypeError('start should be an integer');
    }
    if (!Number.isInteger(end)) {
        throw new TypeError('end should be an integer');
    }
    if (!Number.isInteger(step)) {
        throw new TypeError('step should be an integer');
    }

    if (end < start) {
        throw new RangeError('end should be greater than start');
    }
    if (step < 1) {
        throw new RangeError('step should be a positive integer');
    }

    return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
};

export { range };
