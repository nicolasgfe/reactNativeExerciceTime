import { useNavigation } from "@react-navigation/native";
import { AddIcon, Fab, View, useTheme } from "native-base"
import { AppNavigatorProps } from "../../navigation/app/interface";
import { Container } from "./styles";

const Home = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<AppNavigatorProps>();

  const openRegister = () => {
    navigation.navigate("Register");
  };

  return(
    <Container>
      <Fab 
        icon={<AddIcon />} 
        backgroundColor={colors.secondary[600]}
        onPress={openRegister}
        renderInPortal={false}
      />
    </Container>
  )
}
export {
  Home,
}