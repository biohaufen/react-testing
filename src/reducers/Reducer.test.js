import reducer, { FAKE_TYPE } from './Reducer'
import deepFreeze from 'deep-freeze'

describe('people reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      things: []
    })
  })

  it('should handle FAKE_TYPE', () => {
    const currentState = {
        things: [{name: 'acme'}]
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: FAKE_TYPE,
        thing: {name: 'widget'}
      })
    ).toEqual({
        things: [
          {name: 'acme'},
          {name: 'widget'}
        ]
      })
  })
})