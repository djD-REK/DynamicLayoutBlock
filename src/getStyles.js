export const getStyles = (blockConfig) => {
  const {
    backgroundColorCenter,
    backgroundColorOutside,
    borderColor,
    borderWidthSlider,
    borderRadiusSlider,
    boxShadow,
    fontColor,
    fontSize,
  } = blockConfig
  const borderRadius = borderRadiusSlider.selectedValue
  const borderWidth = borderWidthSlider.selectedValue

  const returnObject = {
    banner: {
      background: `radial-gradient(circle, ${backgroundColorCenter} 0%, ${backgroundColorOutside} 100%)`,
      borderColor: borderColor,
      borderRadius: `${borderRadius}px`,
      borderStyle: "solid",
      borderWidth: `${borderWidth}px`,
      color: fontColor,
      fontSize: `${fontSize}rem`,
    },
  }
  if (boxShadow) {
    returnObject.banner.boxShadow = "3px 6px #888888"
  }

  return returnObject
}
