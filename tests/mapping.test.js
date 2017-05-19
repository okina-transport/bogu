import expect from 'expect'
import { segmentName, segmentName2Key, validity } from '../src/utils'


describe('should be able return mapping', () => {
    it('all lines: nb', () => {
        expect(segmentName('all', 1000, 'nb')).toBe('Alle linjer')
        expect(segmentName2Key('Alle linjer').segment).toBe('all')
    })

    it('all lines: en', () => {
        expect(segmentName('all', 1000, 'en')).toBe('All lines')
        expect(segmentName2Key('All lines').segment).toBe('all')
    })

    it('all lines: default', () => {
        expect(segmentName('all', 1000)).toBe('All lines')
        expect(segmentName2Key('All lines').segment).toBe('all')
    })

    it('Dynamic: nb', () => {
        expect(segmentName('dynamic', 1011, 'nb')).toBe('Utgående linjer (< 1011 dager)')
        //expect(segmentName2Key('Expiring lines (< 1245 days)', 'en')).toBe({daysValid: 1245, segment: 'dynamic'})
    })

    it('Dynamic: en', () => {
        expect(segmentName('dynamic', 12345, 'en')).toBe('Expiring lines (< 12345 days)')
        //expect(segmentName2Key('Expiring lines (< 4521 days)', 'en')).toBe({daysValid: 4521, segment: 'dynamic'})
    })
})


describe('validity', () => {
    it('INVALID', () => expect(validity(-12)).toBe('INVALID') )
    it('EXPIRING', () => expect(validity(12)).toBe('EXPIRING') )
    it('EXPIRING', () => expect(validity(0)).toBe('EXPIRING') )
    it('VALID', () => expect(validity(120)).toBe('VALID') )
    it('VALID', () => expect(validity(121)).toBe('VALID') )
})