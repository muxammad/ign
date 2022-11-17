/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme, ViewStyle } from "react-native"
import { Icon } from "../components"
import Config from "../config"
import { useStores } from "../models"
import { WelcomeScreen } from "../screens"
import { LoginScreen } from "../screens/Auth/LoginScreen"
import { LoginWithScreen } from "../screens/Auth/LoginWithScreen"
import { RegisterScreen } from "../screens/Auth/Register"
import { ChooseCountryScreen } from "../screens/Settings/ChooseCountryScreen"
import { FillYourProfileScreen } from "../screens/Settings/FillYourProfileScreen"
import { AddYourBestPhotos } from "../screens/Settings/AddBestPhotos"
import { InterestsScreen } from "../screens/Settings/InterestsScreen"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { SelectYourIdeal } from "../screens/Settings/SelectYourIdealScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomePage } from "../screens/MainPages/HomePage"
import { colors } from "../theme"
import { MapPage } from "../screens/MainPages/MapPage"
import { LovelyPage } from "../screens/MainPages/LovelyPage"
import { ChatPage } from "../screens/MainPages/ChatPage"
import { ProfilePage } from "../screens/MainPages/ProfilePage"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  AuthScreens: undefined
  Welcome: undefined
  Login: undefined
  LoginWith: undefined
  Register: undefined
  ChooseCountry: undefined
  Interests: undefined
  FillYourProfile: undefined
  AddYourBestPhotos: undefined
  SelectYourIdeal: undefined
  ChatPage: undefined
  HomePage: undefined
  LovelyPage: undefined
  MapPage: undefined
  ProfilePage: undefined
  MainPages: undefined
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

const $backImage = {marginLeft: 20}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()
const Auth = createStackNavigator<AppStackParamList>()
const Main = createBottomTabNavigator <AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  function MainPages() {
    return (
      <Main.Navigator screenOptions={{tabBarStyle: $tabBarStyle}}>
        <Main.Group screenOptions={{
          title: ''
        }}>
          <Main.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => <Icon size={32} icon="home" color={focused ? colors.palette.primary600 : colors.palette.neutral600} /> 
            }}
          />
        </Main.Group>
        <Main.Group screenOptions={{
          title: ''
        }}>
          <Main.Screen
            name="MapPage"
            component={MapPage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => <Icon size={32} icon="map" color={focused ? colors.palette.primary600 : colors.palette.neutral600} /> 
            }}
          />
        </Main.Group>
        <Main.Group screenOptions={{
          title: ''
        }}>
          <Main.Screen
            name="LovelyPage"
            component={LovelyPage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => <Icon size={32} icon="lovely" color={focused ? colors.palette.primary600 : colors.palette.neutral600} /> 
            }}
          />
        </Main.Group>
        <Main.Group screenOptions={{
          title: ''
        }}>
          <Main.Screen
            name="ChatPage"
            component={ChatPage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => <Icon size={32} icon="sms" color={focused ? colors.palette.primary600 : colors.palette.neutral600} /> 
            }}
          />
        </Main.Group>
        <Main.Group screenOptions={{
          title: ''
        }}>
          <Main.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => <Icon size={32} icon="profile" color={focused ? colors.palette.primary600 : colors.palette.neutral600} /> 
            }}
          />
        </Main.Group>
      </Main.Navigator>
    )
  }

  const $tabBarStyle: ViewStyle = {
    paddingVertical: 20
  }

  // function AuthScreens() {
  //   return(
  //     <Auth.Navigator
  //       initialRouteName={isAuthenticated ? "Welcome" : "Login"}
  //     >
  //       <Auth.Screen name="Register" options={{
  //         headerShown: false,
  //       }} component={RegisterScreen} />
  //       <Auth.Screen 
  //         name="ChooseCountry"
  //         component={ChooseCountryScreen}
  //         options={{
  //           headerShadowVisible: false,
  //           headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
  //           headerTitle: '',
  //           headerBackTitleVisible: false
  //         }}
  //       />
  //       <Auth.Screen 
  //         name="Interests"
  //         component={InterestsScreen}
  //         options={{
  //           headerShadowVisible: false,
  //           headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
  //           headerTitle: '',
  //           headerBackTitleVisible: false
  //         }}
  //       />
  //       <Auth.Screen 
  //         name="FillYourProfile"
  //         component={FillYourProfileScreen}
  //         options={{
  //           headerShadowVisible: false,
  //           headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
  //           headerTitle: '',
  //           headerBackTitleVisible: false
  //         }}
  //       />
  //       <Auth.Screen 
  //         name="AddYourBestPhotos"
  //         component={AddYourBestPhotos}
  //         options={{
  //           headerShadowVisible: false,
  //           headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
  //           headerTitle: '',
  //           headerBackTitleVisible: false
  //         }}
  //       />
  //       <Auth.Screen 
  //         name="SelectYourIdeal"
  //         component={SelectYourIdeal}
  //         options={{
  //           headerShadowVisible: false,
  //           headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
  //           headerTitle: '',
  //           headerBackTitleVisible: false
  //         }}
  //       />
  //       {isAuthenticated ? (
  //       <Auth.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
  //       ) : (
  //         <>
  //           <Auth.Screen name="Login" component={LoginScreen} />
  //         </>
  //       )}
  //       <Auth.Screen name="LoginWith" component={LoginWithScreen} />
  //     </Auth.Navigator>
  //   )
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false
      }}
    >
      {/* <Stack.Screen name="AuthScreens" component={AuthScreens} /> */}
      {/* * 🔥 Your screens go here */}
      <Stack.Screen name="MainPages" component={MainPages} />
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
