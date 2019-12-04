import React from "react"
import { Header } from "./Header"
import { create } from "react-test-renderer"

describe("Header", () => {
  it("matches snapshot", () => {
    const tree = create(<Header />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
