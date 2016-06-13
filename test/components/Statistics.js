import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Statistics from '../../app/components/Statistics'

describe("Statistics", () => {
  const min = 10
  const max = 20
  const average = 15

  it("should have three values", () => {
    expect(mount(<Statistics min={min} max={max} average={average} />).find('.value').length).to.equal(3)
  })

  it("should show the minimum value", () => {
    expect(mount(<Statistics min={min} max={max} average={average} />).find('.value').at(0).text()).to.equal(`${min}`)
  })

  it("should show the maximum value", () => {
    expect(mount(<Statistics min={min} max={max} average={average} />).find('.value').at(1).text()).to.equal(`${max}`)
  })

  it("should show the average value", () => {
    expect(mount(<Statistics min={min} max={max} average={average} />).find('.value').at(2).text()).to.equal(`${average}`)
  })

})
