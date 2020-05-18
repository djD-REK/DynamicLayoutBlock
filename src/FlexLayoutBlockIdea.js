import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { joinClasses, heading, text } = props

  return (
    <div className={joinClasses("flex flex-wrap", css(classes.banner))}>
      <h1 className="w-100 w-60-l tc">{heading}</h1>
      <h2 className="w-100 w-40-l tc">{text}</h2>
    </div>
  )
}

Block.defaultProps = defaultConfig

export default Block
