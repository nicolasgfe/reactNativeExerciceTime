import { NativeBaseProvider, extendTheme } from "native-base";
import { PropsWithChildren } from "react";
import React from "react"

const AppThemeProvider = ({children}: PropsWithChildren) => {
  const { colors } = extendTheme({});

  const appTheme = extendTheme({
    colors: {
      primary: colors.orange,
      secondery: colors.pink
    }
  })
  return(
    <NativeBaseProvider theme={appTheme}>
      {children}
    </NativeBaseProvider>
  )
}
export default AppThemeProvider;