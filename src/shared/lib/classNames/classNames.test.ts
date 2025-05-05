import classNames from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional params', () => {
        const expected = 'someClass one two three'
        expect(classNames('someClass', {}, ['one', 'two', 'three'])).toBe(
            expected,
        )
    })

    test('with mods', () => {
        const expected = 'someClass one two three hovered underlined'
        expect(
            classNames('someClass', { hovered: true, underlined: true }, [
                'one',
                'two',
                'three',
            ]),
        ).toBe(expected)
    })

    test('with mods false', () => {
        const expected = 'someClass one two three hovered'
        expect(
            classNames('someClass', { hovered: true, underlined: false }, [
                'one',
                'two',
                'three',
            ]),
        ).toBe(expected)
    })

    test('with mods undefined', () => {
        const expected = 'someClass one two three hovered'
        expect(
            classNames('someClass', { hovered: true, underlined: undefined }, [
                'one',
                'two',
                'three',
            ]),
        ).toBe(expected)
    })
})
