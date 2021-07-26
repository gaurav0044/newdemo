    import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/login";
const Stack = createStackNavigator();
function AuthNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitleAlign:"center"
                }}
            />
        </Stack.Navigator>
    )
}
export default AuthNavigation;