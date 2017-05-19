import { sortLines, sortIcon } from '../src/utils'


describe('sorting icon', () => {
    it('should return different sorting icons', () => {
        let icon0 = sortIcon(0)
        let icon1 = sortIcon(1)
        let icon2 = sortIcon(2)
        let icon3 = sortIcon(3)
        let icon4 = sortIcon(4)

        expect(icon0).toEqual(sortIcon(0))
        expect(icon1).not.toEqual(icon2)
        expect(icon1).not.toEqual(icon3)
        expect(icon1).not.toEqual(icon4)
        expect(icon2).not.toEqual(icon3)
        expect(icon3).not.toEqual(icon4)
    })
})

const data = {
    all: {
        lineNumbers: [
            'hest',
            'next',
            'alpha',
            '12345',
            'beta',
            'zzzz',
            'a123',
            '_dsd',
            ' dsd',
        ]
    },
    daysValid: [
        {lineNumber: 'hest', days: 11,},
        {lineNumber: 'alpha', days: 11,},
        {lineNumber: '12345', days: 10,},
        {lineNumber: 'beta', days: -1,},
        {lineNumber: 'zzzz', days: 123,},
        {lineNumber: 'a123', days: -13,},
        {lineNumber: '_dsd', days: -12,},
        {lineNumber: ' dsd', days: 0,},
        {lineNumber: 'next', days: 124,},
    ]
}

describe('should be able to sort lines', () => {
    it('no sorting', () => {
        const sorted = sortLines(0, data, 'all')
        expect(sorted[0]).toBe('hest')
    })

    it('A->Z', () => {
        const sorted = sortLines(1, data, 'all')
        expect(sorted[0]).toBe(' dsd')
    })

    it('Z->A', () => {
        const sorted = sortLines(2, data, 'all')
        expect(sorted[0]).toBe('zzzz')
    })

    it('invalid first', () => {
        const sorted = sortLines(3, data, 'all')
        expect(sorted[0]).toBe('a123')
    })

    it('valid first', () => {
        const sorted = sortLines(4, data, 'all')
        expect(sorted[0]).toBe('next')
    })
})
