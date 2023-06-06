import { Divider } from "native-base"
import { ListItens, TextItem } from "../styles"
import React from "react"
import { FitnessEntryDto } from "../../../domain";

// não consegui fazer uma forma para descontruir o objeto 
//'item: FitnessEntryDto', então tiver que fazer uma forma 
// de apresentar as informações acessar o objeto 'item.item.{propriedade}'
const ListItensExercices = (item: any) => {
  return (
    <>
      <ListItens >
        <Divider />
        <TextItem>
          {/* {item.item.date} */}
        </TextItem>
        <TextItem>
          Tempo de exercicio: &nbsp;
          {item.item.exerciseTime}
        </TextItem>
        <TextItem>
          Humor: &nbsp;
          {item.item.mood}
        </TextItem>
        <TextItem>
          Consumo de agua: &nbsp;
          {item.item.waterConsumption}
        </TextItem>
        <TextItem>
          Peso: &nbsp;
          {item.item.weight}
        </TextItem>
        <Divider />
      </ListItens>
    </>
  )
}

export {
  ListItensExercices
}