import { sortLines, sortIcon, filterLines } from '../src/utils'


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
  invalid: {
    lineNumbers: [
      'beta',
      'a123',
      '_dsd'
    ]
  },
  valid: {
    lineNumbers: [
      'zzzz',
      'next'
    ]
  },
  expiring: {
    lineNumbers: [
      'hest',
      'alpha',
      '12345',
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
    expect(sorted).toEqual([
      'hest',
      'next',
      'alpha',
      '12345',
      'beta',
      'zzzz',
      'a123',
      '_dsd',
      ' dsd',
    ])
  })

  it('A->Z', () => {
    const sorted = sortLines(1, data, 'all')
    expect(sorted).toEqual([
      ' dsd',
      '_dsd',
      '12345',
      'a123',
      'alpha',
      'beta',
      'hest',
      'next',
      'zzzz',
    ])
  })

  it('Z->A', () => {
    const sorted = sortLines(2, data, 'all')
    expect(sorted).toEqual([
      'zzzz',
      'next',
      'hest',
      'beta',
      'alpha',
      'a123',
      '12345',
      '_dsd',
      ' dsd',
    ])
  })

  it('invalid first', () => {
    const sorted = sortLines(3, data, 'all')
    expect(sorted).toEqual([
      'a123',
      '_dsd',
      'beta',
      ' dsd',
      '12345',
      'hest',
      'alpha',
      'zzzz',
      'next',
    ])
  })

  it('valid first', () => {
    const sorted = sortLines(4, data, 'all')
    expect(sorted).toEqual([
      'next',
      'zzzz',
      'hest',
      'alpha',
      '12345',
      ' dsd',
      'beta',
      '_dsd',
      'a123',
    ])
  })

  it('multi sort - unorded', () => {
    let sorted = sortLines(0, data, 'all')
    sorted = sortLines(1, data, 'all')
    sorted = sortLines(2, data, 'all')
    sorted = sortLines(3, data, 'all')
    sorted = sortLines(4, data, 'all')
    sorted = sortLines(0, data, 'all')

    expect(sorted).toEqual([
      'hest',
      'next',
      'alpha',
      '12345',
      'beta',
      'zzzz',
      'a123',
      '_dsd',
      ' dsd',
    ])
  })

  it('multi sort - sorted', () => {
    let sorted1a = sortLines(1, data, 'all')
    let sorted2 = sortLines(2, data, 'all')
    let sorted1b = sortLines(1, data, 'all')


    let sorted1expected = [' dsd', '_dsd', '12345', 'a123', 'alpha', 'beta', 'hest', 'next', 'zzzz'];
    expect(sorted1a).toEqual(sorted1expected)
    expect(sorted1b).toEqual(sorted1expected)
    expect(sorted1a).not.toBe(sorted1b)
    expect(sorted1a).toEqual(sorted1b)

    expect(sorted2).toEqual([
      'zzzz',
      'next',
      'hest',
      'beta',
      'alpha',
      'a123',
      '12345',
      '_dsd',
      ' dsd',
    ])
  })
})


describe('filter liens', () => {
  it('should return all', () => {
    expect(filterLines(data, 'all')).toEqual(['hest', 'next', 'alpha', '12345', 'beta', 'zzzz', 'a123', '_dsd', ' dsd'])
    expect(filterLines(data, 'invalid')).toEqual(['beta', 'a123', '_dsd'])
    expect(filterLines(data, 'valid')).toEqual(['zzzz', 'next'])
    expect(filterLines(data, 'expiring')).toEqual(['hest', 'alpha', '12345',]) })
})
