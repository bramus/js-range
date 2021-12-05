const range = (start, end, step = 1) => {
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
};

export { range };
