import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AppStackScreenProps } from "../../navigators";

interface MapPageProps extends AppStackScreenProps<"MapPage">{}

export const MapPage: FC<MapPageProps> = observer(function MapPage({navigation}) {
    return (
        <SafeAreaView>
            <Text>
                MapPage
            </Text>
        </SafeAreaView>
    )
})