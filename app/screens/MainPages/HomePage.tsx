import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Dimensions, ImageStyle, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { Button, Icon, Text } from "../../components";
import { AddImage } from "../../components/AddImage";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import {LinearGradient} from "expo-linear-gradient"
interface HomePageProps extends AppStackScreenProps<"HomePage">{}

export const HomePage: FC<HomePageProps> = observer(function HomePage({navigation}) {
    const $imageStyle: ImageStyle = {
        width: Dimensions.get("window").width - 48,
        height: Dimensions.get("window").height * .6,
        margin: 0,
    }
    return (
        <SafeAreaView style={$screenContentContainer}>
            <View style={$container}>
                <View style={$headerContainer}>
                    <AddImage size={45} avatar={true} containerStyle={$avatarContainerStyle} />
                    <View style={$headerInfo}>
                        <Text tx="homePage.goodMorning" size={"sm"} style={$upTitle} />
                        <Text weight="semiBold" tx="userName.name" size="lg" style={$userName} />
                    </View>
                    <View style={$headerButtons}>
                        <Icon icon={"bell"} />
                        <Icon icon={"setting"} />
                    </View>
                </View>
                <View style={$userImage}>
                    <AddImage
                        imageStyle={$imageStyle}
                        source={{uri: "https://images.unsplash.com/photo-1667847988796-74c9067756e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}}
                        imagePick={true}
                    />
                    <LinearGradient
                        style={$linearGradient}
                        colors={['transparent', colors.palette.primary300]}>
                        <View style={$linearText}>
                            <Text size="xl" weight="bold" style={$linearTextNameStyle} text="Feride, 24" />
                            <View style={$location}>
                                <Icon size={24} icon="location" />
                                <Text style={$locationText} size="sm" text="LOS ANGELES • 20" />
                                <Text style={$locationText} tx="homePage.away" />
                            </View>
                            <View style={$active}>
                                <Icon icon="dot" />
                                <Text style={$locationText} weight={'semiBold'} size="xs" tx="common.activeNow" />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                <View style={$imageBtns}>
                    <Button
                        square
                        size={50}
                        bgColor={colors.palette.neutral100}
                        radius={10}
                        icon="arrowSwap" />
                    <Button
                        square
                        size={60}
                        bgColor={colors.palette.neutral100}
                        radius={10}
                        icon="cancel" />
                    <Button
                        square
                        size={60}
                        bgColor={colors.palette.neutral100}
                        radius={10}
                        icon="heart" />
                    <Button
                        square
                        size={50}
                        bgColor={colors.palette.neutral100}
                        radius={10}
                        icon="star" />
                </View>
            </View>
        </SafeAreaView>
    )
})

const $screenContentContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
    height: '100%',
}
const $container: ViewStyle = {
    paddingHorizontal: spacing.large,
    height: '100%'
}
const $avatarContainerStyle: ViewStyle = {
    alignItems: 'center',
    marginVertical: 30
}
const $headerContainer: ViewStyle = {
    alignItems: 'center',
    flexDirection: 'row'
}
const $upTitle: TextStyle = {
    color: colors.palette.neutral600,
}
const $userName: TextStyle = {
    lineHeight: 24
}
const $headerButtons: ViewStyle = {
    width: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 'auto'
}
const $headerInfo: ViewStyle = {
    marginLeft: spacing.small,
}
const $userImage: ViewStyle = {
    position: 'relative',
}
const $linearGradient: ViewStyle = {
    height: 200,
    width: '100%',
    bottom: 0,
    borderRadius: 20,
    position: 'absolute'
}
const $linearText: ViewStyle = {
    position: 'absolute',
    bottom: 20,
    left: 20
}
const $linearTextNameStyle: TextStyle = {
    color: colors.palette.accent100
}
const $location: ViewStyle = {
    flexDirection: 'row'
}
const $locationText: TextStyle = {
    color: colors.palette.accent100,
    marginLeft: 5
}
const $active: ViewStyle = {
    paddingRight: 25,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
    borderColor: colors.palette.primary600,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
}
const $imageBtns: ViewStyle = {
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
}