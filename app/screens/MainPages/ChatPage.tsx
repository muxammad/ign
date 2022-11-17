import { Divider } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { FlatList, ImageStyle, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { Icon, Text } from "../../components";
import { AddImage } from "../../components/AddImage";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";

interface ChatPageProps extends AppStackScreenProps<"ChatPage">{}

export const ChatPage: FC<ChatPageProps> = observer(function ChatPage({navigation}) {
    const users = [
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
        {userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'},
    ]
    const _activeUsers = () => (
        <View style={$activeUserItem}>
            <AddImage
                avatar
                size={65}
            />
        </View>
    )
    return (
        <SafeAreaView style={$screenContentContainer}>
            <View style={$container}>
                <View style={$headerContainer}>
                    <View>
                        <Text tx="chatPage.chats" weight="bold" size={"xl"} style={$upTitle} />
                    </View>
                    <View style={$headerButtons}>
                        <Icon icon={"search"} />
                        <Icon icon={"setting"} />
                    </View>
                </View>
                <View style={$containerTitle}>
                    <Text tx="chatPage.nowActive" weight="semiBold" size={"lg"} style={$upTitle} />
                </View>
            </View>
            <View>
                <FlatList
                    style={$activeListStyle}
                    data={users}
                    renderItem={_activeUsers}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={$container}>
                <Divider style={$activeDevider} width={1} />
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
const $containerTitle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}
const $activeUserItem: ImageStyle = {
    marginRight: spacing.small
}
const $activeListStyle: ViewStyle = {
    paddingLeft: spacing.large,
    marginTop: spacing.medium
}
const $activeDevider: ViewStyle = {
    marginTop: spacing.large
}