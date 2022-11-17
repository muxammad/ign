import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AppStackScreenProps } from "../../navigators";

interface ProfilePageProps extends AppStackScreenProps<"ProfilePage">{}

export const ProfilePage: FC<ProfilePageProps> = observer(function ProfilePage({navigation}) {
    return (
        <SafeAreaView>
            <Text>
                ProfilePage
            </Text>
        </SafeAreaView>
    )
})