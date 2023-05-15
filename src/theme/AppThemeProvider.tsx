import { NavigationContainer } from "@react-navigation/native"
import { PropsWithChildren } from "react";

const AppThemeProvider = ({children}: PropsWithChildren) => {
  return(
    <NavigationContainer>
      {children}
    </NavigationContainer>
  )
}
export default AppThemeProvider;