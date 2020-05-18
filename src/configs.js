import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  backgroundColorCenter: {
    label: "Background Color (Center)",
    type: ElementPropTypes.color,
  },
  backgroundColorOutside: {
    label: "Background Color (Outside)",
    type: ElementPropTypes.color,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  borderColor: {
    label: "Border Color",
    type: ElementPropTypes.color,
  },
  borderRadius: {
    label: "Border Radius (px)",
    type: ElementPropTypes.slider,
  },
  boxShadow: {
    label: "Box Shadow (on/off)",
    type: ElementPropTypes.bool,
  },
  section3: {
    type: ElementPropTypes.sectionHeader,
  },
  headingFlexBoxPercentSlider: {
    label: "Heading Flexbox Percentage on Large Screens",
    type: ElementPropTypes.slider,
  },
  paddingLeftRightSlider: {
    label: "Padding Left & Right (0-16rem)",
    type: ElementPropTypes.slider,
  },
  paddingTopBottomSlider: {
    label: "Padding Top & Bottom (0-16rem)",
    type: ElementPropTypes.slider,
  },
  section4: {
    type: ElementPropTypes.sectionHeader,
  },
  heading: {
    label: "Heading Text",
    type: ElementPropTypes.oneOf([
      "LIMITED TIME ONLY",
      "SALE ENDING SOON",
      "LIMITED QUANTITIES",
      "ACT FAST! NEW MARKDOWNS",
      "PREVIEW THE SALE",
      "(Turn off heading)",
    ]),
  },
  text: {
    label: "Subheading Text",
    type: ElementPropTypes.string,
  },
  color: {
    label: "Font Color",
    type: ElementPropTypes.color,
  },
  fontSize: {
    label: "Font Size (px)",
    type: ElementPropTypes.number,
  },
}

// Set up default configuration for dateRange picker (Sales Dates)
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)
export const defaultConfig = {
  section1: "Background Gradient",
  backgroundColorCenter: "rgba(0,0,0,1)",
  backgroundColorOutside: "rgba(100,100,100,1)",
  section2: "Border Styles",
  borderColor: "rgba(255,209,220)",
  borderWidthSlider: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: "px",
    min: 0,
    max: 10,
    stepSize: 1,
    selectedValue: 3,
    vertical: false,
  },
  borderRadiusSlider: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: "px",
    min: 0,
    max: 50,
    stepSize: 5,
    selectedValue: 30,
    vertical: false,
  },
  boxShadow: true,
  section3: "Box Spacing Options",
  headingFlexBoxPercentSlider: {
    labelPrefix: "w-",
    labelStepSize: 10,
    labelSuffix: "-l",
    min: 0,
    max: 100,
    stepSize: 10,
    selectedValue: 40,
    vertical: false,
  },
  paddingLeftRightSlider: {
    labelPrefix: "ph",
    labelStepSize: 1,
    labelSuffix: "",
    min: 0,
    max: 7,
    stepSize: 1,
    selectedValue: 5,
    vertical: false,
  },
  paddingTopBottomSlider: {
    labelPrefix: "pv",
    labelStepSize: 1,
    labelSuffix: "",
    min: 0,
    max: 7,
    stepSize: 1,
    selectedValue: 2,
    vertical: false,
  },

  section4: "Sale Banner Text",
  heading: "LIMITED TIME ONLY",
  text: "50% Off Sale Items",
  fontColor: "rgba(255,255,255,1)",
  fontSize: 2.5,
}
