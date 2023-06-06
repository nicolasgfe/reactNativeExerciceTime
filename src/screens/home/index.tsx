import { useNavigation } from "@react-navigation/native";
import { AddIcon, Fab, FlatList, useTheme } from "native-base"
import { AppNavigatorProps } from "../../navigation/app/interface";
import { Container } from "./styles";
import { UseListExercices } from "./hooks/UseListExercice";
import React from 'react'
import { ListItensExercices } from "./components/ListItensExercices";

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorProps>();

  const { data } = UseListExercices();

  const openRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <>
      <Container >
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItensExercices item={item} />}
          keyExtractor={item => item.id}
        />

        <Fab
          icon={<AddIcon />}
          backgroundColor={colors.secondary[600]}
          onPress={openRegister}
          renderInPortal={false}
        />
      </Container>
    </>
  )
}
export {
  Home,
}





// return
//       <FlatList data={data} renderItem={({
//       item
//     }) => <Box borderBottomWidth="1" _dark={{
//       borderColor: "muted.50"
//     }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
//             <HStack space={[2, 3]} justifyContent="space-between">
//               <Avatar size="48px" source={{
//           uri: item.avatarUrl
//         }} />
//               <VStack>
//                 <Text _dark={{
//             color: "warmGray.50"
//           }} color="coolGray.800" bold>
//                   {item.fullName}
//                 </Text>
//                 <Text color="coolGray.600" _dark={{
//             color: "warmGray.200"
//           }}>
//                   {item.recentText}
//                 </Text>
//               </VStack>
//               <Spacer />
//               <Text fontSize="xs" _dark={{
//           color: "warmGray.50"
//         }} color="coolGray.800" alignSelf="flex-start">
//                 {item.timeStamp}
//               </Text>
//             </HStack>
//           </Box>} keyExtractor={item => item.id} />
//     </Box>;