import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Dimensions, FlatList, ImageStyle, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { Icon, Text } from "../../components";
import { AddImage } from "../../components/AddImage";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";

interface LovelyPageProps extends AppStackScreenProps<"LovelyPage">{}

export const LovelyPage: FC<LovelyPageProps> = observer(function LovelyPage({navigation}) {
    const newMatch = [
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1668650870010-0a81e62a54cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
    ]
    const yourMatch = [
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1668661628231-d630edd8ad95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1668342482782-582a821eaa59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
        {
            userName: "Fereide",
            userImage: "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            year: 24,
            job: 'Model'
        },
    ]
    const _renderItem = ({item}) => (
        <View style={$userImage}>
            <AddImage
                imageStyle={$imageStyle}
                source={{uri: item.userImage}}
                imagePick={true}
            />
            <LinearGradient
                style={$linearGradient}
                colors={['transparent', colors.palette.primary300]}>
                <View style={$linearText}>
                    <Text size="xl" weight="bold" style={$linearTextNameStyle} text="Feride, 24" />
                    <View style={$location}>
                        <Text style={$locationText} text={item.userName} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
    const _renderYourMatch = ({item}) => (
        <View style={$userImage}>
            <AddImage
                imageStyle={$renderYourMatchImageStyle}
                source={{uri: item.userImage}}
                imagePick={true}
            />
            <View style={$yourMatchText}>
                <Text size="xl" weight="bold" style={$yourMatchTextNameStyle} text="Feride, 24" />
                <View style={$location}>
                    <Text style={$yourMathLocationText} text={item.userName} />
                </View>
            </View>
        </View>
    )
    return (
        <SafeAreaView style={$screenContentContainer}>
            <View style={$container}>
                <View style={$headerContainer}>
                    <View>
                        <Text tx="lovelyPage.match" weight="bold" size={"xl"} style={$upTitle} />
                    </View>
                    <View style={$headerButtons}>
                        <Icon icon={"search"} />
                        <Icon icon={"setting"} />
                    </View>
                </View>
                <View style={$containerTitle}>
                    <Text tx="lovelyPage.newMatch" weight="semiBold" size={"lg"} style={$upTitle} />
                    <Text tx="lovelyPage.seeAll" size="sm" style={$seeAll} />
                </View>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={$listStyle}
                    data={newMatch}
                    keyExtractor={item => item.userImage}
                    renderItem={({item}) => _renderItem({item})}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </View>
            <View style={$container}>
                <View style={$containerTitle}>
                    <Text tx="lovelyPage.yourMatch" weight="semiBold" size={"lg"} style={$upTitle} />
                    <Text tx="lovelyPage.seeAll" size="sm" style={$seeAll} />
                </View>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={$listStyle}
                    data={yourMatch}
                    keyExtractor={item => item.userImage}
                    renderItem={({item}) => _renderYourMatch({item})}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
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
}
const $headerContainer: ViewStyle = {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 30
}
const $upTitle: TextStyle = {
    color: colors.palette.neutral700,
}
const $headerButtons: ViewStyle = {
    width: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 'auto'
}
const $seeAll: TextStyle = {
    color: colors.palette.primary600
}
const $containerTitle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}
const $userImage: ViewStyle = {
    position: 'relative',
    marginRight: 20,
}
const $imageStyle: ImageStyle = {
    width: Dimensions.get("window").width * .7 - 48,
    height: Dimensions.get("window").height * .28,
    margin: 0,
}
const $renderYourMatchImageStyle: ImageStyle = {
    width: Dimensions.get("window").width * .7 - 48,
    height: Dimensions.get("window").height * .18,
    margin: 0,

}
const $linearGradient: ViewStyle = {
    height: 100,
    width: Dimensions.get("window").width * .7 - 48,
    bottom: 0,
    borderRadius: 20,
    position: 'absolute'
}
const $linearText: ViewStyle = {
    position: 'absolute',
    bottom: 20,
    left: 20
}
const $yourMatchText: ViewStyle = {
    position: 'absolute',
    bottom: 20,
}
const $linearTextNameStyle: TextStyle = {
    color: colors.palette.accent100
}
const $yourMatchTextNameStyle: TextStyle = {
    color: colors.palette.neutral700
}
const $location: ViewStyle = {
    flexDirection: 'row'
}
const $locationText: TextStyle = {
    color: colors.palette.accent100,
}
const $yourMathLocationText: TextStyle = {
    color: colors.palette.neutral700,
}
const $listStyle: ViewStyle = {
    height: Dimensions.get("window").height * .28,
    marginLeft: spacing.medium,
    marginTop: spacing.medium,
    marginBottom: spacing.large
}