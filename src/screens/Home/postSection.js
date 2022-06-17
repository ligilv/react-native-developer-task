import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomText from "../../components/customText";
import { colors } from "../../constants/colors";
import Card from "../../components/card";
import OnboardInput from "../../components/onboardInput";
import { comment } from "../../assets";
import { mockdata } from "./data";
import CustomButton from "../../components/customButton";
const PostSection = () => {
  return (
    <View>
      {/* user posts starts here */}
      {mockdata.map((item) => {
        return (
          <Card key={item.key} style={styles.cardStyle}>
            <View style={styles.headerView}>
              <Image
                source={item.profilePic}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ flex: 1, paddingLeft: 12 }}>
                <CustomText style={{ fontSize: 16, color: colors.white }}>
                  {item.userName}
                </CustomText>
                <CustomText style={styles.customText}>
                  {item.totalTime} {item.edited ? "." : null}
                  {item.edited ? "Edited" : null}
                </CustomText>
              </View>
              <TouchableOpacity>
                <CustomText style={{ fontSize: 20, fontWeight: "700" }}>
                  ...
                </CustomText>
              </TouchableOpacity>
            </View>
            <Card
              style={{
                backgroundColor: colors.black,
                flexDirection: "row",
                paddingHorizontal: 12,
                marginTop: 20,
              }}
            >
              <View style={styles.contentContainer}>
                <Text>{item.emoji}</Text>
              </View>
              <CustomText style={styles.postText}>{item.post}</CustomText>
            </Card>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <Image source={comment} />
              <CustomText
                style={{ color: colors.greyTextColor, paddingLeft: 10 }}
              >
                {item.totalComments} comments
              </CustomText>
            </View>
          </Card>
        );
      })}
    </View>
  );
};

export default PostSection;

const styles = StyleSheet.create({
  cardStyle: {
    paddingTop: 24,
    paddingHorizontal: 12,
    paddingBottom: 24,
    marginTop: 16,
  },
  headerView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  customText: {
    fontSize: 14,
    color: colors.greyTextColor,
    marginTop: 4,
  },
  contentContainer: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: colors.primaryBg,
    justifyContent: "center",
    alignItems: "center",
  },
  postText: {
    flexWrap: "wrap",
    flex: 1,
    paddingHorizontal: 12,
    color: colors.greyTextColor,
  },
});
