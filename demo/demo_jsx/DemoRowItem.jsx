import { useState } from "react";
//import { CardInformazioni, CardItemEsistente } from "../../src/card_item/CardItem";
import { RowItemEsistente } from "../../src/row_item/RowItem";

export default function DemoRowItem() {
  const cliente = {
    nome: "Mario", 
    cognome: "Rossi", 
  }

  const getCampiCliente = (item, handleOnChange, handleOnClick, handleOnBlur)  => {
    const [errori, setErrori] = useState({
      errore_nome: "", 
      errore_cognome: "", 
    });

    return {
      header: "Cliente", 
      label: [null, null], 
      tipoSelezione: 0,  
      type: ["text", "text"],  
      step: [null, null], 
      min: [null, null], 
      name: ["nome", "cognome"], 
      id: ["nome", "cognome"], 
      value: [item.nome, item.cognome], 
      placeholder: ["Nome", "Cognome"], 
      errore: [errori.errore_nome, errori.errore_cognome], 
      valoreModificabile: [true, true], 
      options: [null, null], 
      onChange: handleOnChange, 
      onClick: handleOnClick, 
      onBlur: handleOnBlur
    }
  };


  return(
    <>
      <h1>ROW ITEM ESISTENTE</h1>
      <RowItemEsistente 
        item={cliente}
        campi={getCampiCliente(cliente, null, null, null)}
        indici={[1,2]}
        operazioneModifica={null}
        operazioneElimina={null}
        handleBlurItem={null}
      />
    </>
  );
}









