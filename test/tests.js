import { equal, deepEqual } from 'assert';
import { range } from '../src/index.js';

describe('basic range tests', () => {
    it('creates a range', () => {
        deepEqual(range(2, 5), [2, 3, 4, 5]);
    });
    it('creates a range starting with a negative number', () => {
        deepEqual(range(-1, 5), [-1, 0, 1, 2, 3, 4, 5]);
    });
    it('creates a negative range', () => {
        deepEqual(range(-10, -5), [-10, -9, -8, -7, -6, -5]);
    });
});

describe('stepped range tests (pos)', () => {
    it('creates a range with step size 2', () => {
        deepEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
    });
    it('creates a range with step size 5', () => {
        deepEqual(range(1, 10, 5), [1, 6]);
    });
    it('creates a range with step size 10', () => {
        deepEqual(range(0, 100, 10), [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
});

describe('stepped range tests (neg)', () => {
    it('creates a range with step size 2', () => {
        deepEqual(range(-1, 10, 2), [-1, 1, 3, 5, 7, 9]);
    });
    it('creates a range with step size 10', () => {
        deepEqual(range(-100, 100, 10), [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
});

describe('faulty numbers should throw', () => {
    it('end > start should throw', () => {
        let error;
        try {
            range(100, 10);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'RangeError');
    });
    it('end < 1 should throw', () => {
        let error;
        try {
            range(1, 10, 0);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'RangeError');
    });
});

describe('non-integers should throw', () => {
    it('string start should throw', () => {
        let error;
        try {
            range('1', 10);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
    it('double start should throw', () => {
        let error;
        try {
            range(1.5, 10);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
    it('string end should throw', () => {
        let error;
        try {
            range(1, '10');
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
    it('double end should throw', () => {
        let error;
        try {
            range(1, 10.5);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
    it('string step should throw', () => {
        let error;
        try {
            range(1, 10, '1');
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
    it('double step should throw', () => {
        let error;
        try {
            range(1, 10, 1.2);
        } catch (e) {
            error = e;
        }
        equal(error.name, 'TypeError');
    });
});
