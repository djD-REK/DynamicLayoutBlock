import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const {
    joinClasses,
    heading,
    text,
    headingFlexBoxPercentSlider,
    paddingLeftRightSlider,
    paddingTopBottomSlider,
  } = props

  // Extract the Atomic CSS classes for the spacing options
  const headingFlexBoxPercent = headingFlexBoxPercentSlider.selectedValue // e.g. 40 for w-40-l
  const textFlexBoxPercent = 100 - headingFlexBoxPercent
  const paddingLeftRight = paddingLeftRightSlider.selectedValue // e.g. 5 for ph5
  const paddingTopBottom = paddingTopBottomSlider.selectedValue // e.g. 2 for pv2
  console.log(headingFlexBoxPercent, textFlexBoxPercent)

  return (
    <div className="flex flex-wrap items-center self-center justify-center tc">
      {heading !== "(Turn off heading)" && (
        <div
          className={`w-100 w-${headingFlexBoxPercent}-l ph${paddingLeftRight} pv${paddingTopBottom}`}
        >
          <h1
            className={joinClasses(
              `ph${paddingLeftRight} pv${paddingTopBottom}`,
              css(classes.banner)
            )}
          >
            {heading}
          </h1>
        </div>
      )}
      <div
        className={`w-100 w-${textFlexBoxPercent}-l ph${paddingLeftRight} pv${paddingTopBottom}`}
      >
        <h2
          className={joinClasses(
            `ph${paddingLeftRight} pv${paddingTopBottom}`,
            css(classes.banner)
          )}
        >
          {text}
        </h2>
      </div>
    </div>
  )
}

Block.defaultProps = defaultConfig

export default Block
