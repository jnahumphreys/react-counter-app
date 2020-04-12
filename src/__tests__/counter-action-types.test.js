import { counterActionTypes } from "../store/counter-action-types"

describe("counterActionTypes", () => {
  it("should match snapshot", () => {
    expect(counterActionTypes).toMatchSnapshot()
  })
})