import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Statistics from '../../app/components/Statistics'

describe("Statistics", () => {
  const stats = {
    min: 10,
    max: 20,
    average: 15
  }

  const wrapper = mount(<Statistics min={stats.min} max={stats.max} average={stats.average} />)
  const statDivs = wrapper.find('.stat')

  it("should have three values", () => {
    expect(wrapper.find('.value').length).to.equal(3)
  })

  it("labels should match values", () => {
    statDivs.forEach((statDiv) => {
      let label = statDiv.find('.label').text().trim().replace(':', '')
      let value = statDiv.find('.value').text()
      expect(`${stats[label]}`).to.equal(value)
    })
  })

})
