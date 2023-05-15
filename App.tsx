import { AppNavigator } from "./src/navigation/app";
import AppThemeProvider from "./src/theme/AppThemeProvider";

const App = () => {
  return(
    <AppThemeProvider>
      <AppNavigator/>
    </AppThemeProvider>
  )
}
export default App;