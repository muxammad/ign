import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  arrowLeft: require("../../assets/icons/arrow-left.png"),
  seacrh: require("../../assets/icons/search.png"),
  lock: require("../../assets/icons/lock.png"),
  profile: require("../../assets/icons/profile.png"),
  facebook: require("../../assets/icons/facebook.png"), 
  google: require("../../assets/icons/google.png"),
  radioCheck: require("../../assets/icons/radioCheck.png"),
  check: require("../../assets/icons/check.png"),
  login: require("../../assets/icons/login.png"),
  sms: require("../../assets/icons/sms.png"),
  eye: require("../../assets/icons/eye.png"),
  add: require("../../assets/icons/add.png"),
  heart: require("../../assets/icons/heart.png"),
  bag: require("../../assets/icons/bag.png"),
  people: require("../../assets/icons/people.png"),
  presentionChart: require("../../assets/icons/presention-chart.png"),
  home: require("../../assets/icons/home.png"),
  map: require("../../assets/icons/map.png"),
  lovely: require("../../assets/icons/lovely.png"),
  bell: require("../../assets/icons/bell.png"),
  setting: require("../../assets/icons/setting.png"),
  call: require("../../assets/icons/call.png"),
  location: require("../../assets/icons/location.png"),
  dot: require("../../assets/icons/dot.png"),
  star: require("../../assets/icons/star.png"),
  cancel: require("../../assets/icons/cancel.png"),
  arrowSwap: require("../../assets/icons/arrow-swap.png"),
  search: require("../../assets/icons/search.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
