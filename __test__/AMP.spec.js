import React from "react"
import { mount } from "enzyme"
import {
  mockUtils as utils,
  joinClasses,
} from "@volusion/element-block-utils/test-utils"
import { block as Block, defaultConfig } from "../src"

let props
describe("The Block", () => {
  beforeEach(() => {
    props = {
      data: {},
      utils: { ...utils, isAmpRequest: true },
      joinClasses,
      queryParams: {},
    }
  })
  it("renders without errors", () => {
    mount(<Block {...props} />)
  })
  describe("when there is no custom data", () => {
    it("should render the block with the default content", () => {
      const wrapper = mount(<Block {...props} />)
      expect(wrapper.text()).toBe(defaultConfig.heading + defaultConfig.text)
    })
  })
  describe("when given custom data", () => {
    it("should render the block using the custom data", () => {
      const customHeading = "Custom Block Heading"
      const customText = "Custom Block Text"
      const wrapper = mount(
        <Block {...props} heading={customHeading} text={customText} />
      )
      expect(wrapper.text()).toBe(customHeading + customText)
    })
    it("should render only the text when heading is off", () => {
      const customHeading = "(Turn off heading)"
      const customText = "Custom Block Text"
      const wrapper = mount(
        <Block {...props} heading={customHeading} text={customText} />
      )
      expect(wrapper.text()).toBe(customText)
    })
  })
})
