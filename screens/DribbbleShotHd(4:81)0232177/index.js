import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e49/eac6/263a08c138954e7ddf67c9c510dfc03a"
        }}
        style={styles.ImageBackground_4_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6099/7579/5887599327853c74610ab19bee2b6900"
        }}
        style={styles.ImageBackground_4_87}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e49/eac6/263a08c138954e7ddf67c9c510dfc03a"
        }}
        style={styles.ImageBackground_4_88}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e4/fc47/2705a5572b296bedc81e0e2b93d056cf"
        }}
        style={styles.ImageBackground_4_89}
      />
      <View style={styles.View_4_90}>
        <View style={styles.View_4_91}>
          <View style={styles.View_4_92}>
            <View style={styles.View_4_93} />
            <View style={styles.View_4_94}>
              <View style={styles.View_4_95} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d365/85b1/ea7d18aacb33da092761a63d3fca42e6"
                }}
                style={styles.ImageBackground_4_96}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4_97}>
          <View style={styles.View_4_98}>
            <View style={styles.View_4_99} />
            <View style={styles.View_4_100} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d301/0354/1a5af183cd9ab8420fbb23df58e8693f"
              }}
              style={styles.ImageBackground_4_101}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_4_86: {
    width: wp("71.375%"),
    minWidth: wp("71.375%"),
    height: hp("156.01092896174865%"),
    minHeight: hp("156.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.0625%"),
    top: hp("-60.245901639344254%")
  },
  ImageBackground_4_87: {
    width: wp("87.41616821289062%"),
    minWidth: wp("87.41616821289062%"),
    height: hp("191.0735917221653%"),
    minHeight: hp("191.0735917221653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.07024383544921%"),
    top: hp("45.57992070099044%")
  },
  ImageBackground_4_88: {
    width: wp("71.375%"),
    minWidth: wp("71.375%"),
    height: hp("156.01092896174865%"),
    minHeight: hp("156.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.6875%"),
    top: hp("68.71584699453553%")
  },
  ImageBackground_4_89: {
    width: wp("87.41616821289062%"),
    minWidth: wp("87.41616821289062%"),
    height: hp("191.0735917221653%"),
    minHeight: hp("191.0735917221653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.125007390975952%"),
    top: hp("-45.08196721311475%")
  },
  View_4_90: {
    width: wp("65.5%"),
    minWidth: wp("65.5%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.25%"),
    top: hp("10.382513661202186%")
  },
  View_4_91: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.25%"),
    top: hp("0%")
  },
  View_4_92: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_93: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 20, 33, 1)",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  View_4_94: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_95: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 20, 33, 1)",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  ImageBackground_4_96: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_97: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_98: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_99: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 20, 33, 1)",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  View_4_100: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 20, 33, 1)",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  ImageBackground_4_101: {
    width: wp("30.25%"),
    minWidth: wp("30.25%"),
    height: hp("143.17231725473874%"),
    minHeight: hp("143.17231725473874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2: { height: 1200 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
