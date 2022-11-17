import React, {FC, useState} from "react"
import { observer } from "mobx-react-lite";
import { Dimensions, FlatList, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import { Button, Icon, iconRegistry, Text, Toggle } from "../../components";
import { Divider } from "@rneui/themed";

interface SelectYourIdealScreenProps extends AppStackScreenProps<"SelectYourIdeal">{}

export const SelectYourIdeal: FC<SelectYourIdealScreenProps> = observer(function SelectYourIdeal({navigation}) {

    const buttons = [
        {
            icon: 'heart'
        },
        {
            icon: 'bag'
        },
        {
            icon: 'people'
        },
        {
            icon: 'presentionChart'
        }
    ]
    const _renderItem = ({item}) => (
        <View style={$listItem} >
            <Toggle
                inputOuterStyle={$inputOuterStyle}
                variant={'checkboxWithText'}
                icon={item.icon}
            />
        </View>

    )
    return(
        <SafeAreaView style={$screenContentContainer} >
            <View style={$container}>
                <Text size="xl" weight="bold" tx={"selectYourIdeal.title"} />
                <Text style={$interestsSubtitle} size="md" weight="normal" tx={"selectYourIdeal.subTitle"} />
                <FlatList
                    data={buttons}
                    keyExtractor={(item) => item.icon}
                    renderItem={({item}) => _renderItem({item})}
                    numColumns={2}
                />
                <Divider width={1} color={colors.transparent} />
                <Button preset="default" tx={"common.nextPage"} onPress={() => navigation.navigate("HomePage")} />
            </View>
        </SafeAreaView>
    )
})

const $screenContentContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
}
const $container: ViewStyle = {
    paddingHorizontal: spacing.large,
    backgroundColor: colors.palette.neutral100,
    height: '100%'
}
const $avatarContainerStyle: ViewStyle = {
    alignItems: 'center',
    marginVertical: 30
}
const $textField: ViewStyle = {
    marginBottom: spacing.medium,
}
const $interestsSubtitle: TextStyle = {
    marginVertical: spacing.medium
}
const $listItem: ViewStyle = {
    width: Dimensions.get("screen").width / 2 - 32,
    marginVertical: 5,
    marginHorizontal: 5,
}
const $inputOuterStyle: ViewStyle = {
    height: Dimensions.get("screen").height * .25
}