import { useState } from "react";
import { Items } from "../../src/Items";

export default function DemoItems() {
  const cliente = {
    nome: "Mario", 
    cognome: "Rossi", 
  }

  const [items, setItems] = useState([cliente]);

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

  const parametri = [
    [null, null, "card"], 
    [() => alert("Pulsante modifica."), null, "card"], 
    [null, () => alert("Pulsante elimina."), "card"], 
    [() => alert("Pulsante modifica."), () => alert("Pulsante elimina."), "card"], 
    [null, null, "row"], 
    [() => alert("Pulsante modifica."), null, "row"], 
    [null, () => alert("Pulsante elimina."), "row"], 
    [() => alert("Pulsante modifica."), () => alert("Pulsante elimina."), "row"]
  ];

  return(
    <>
      <h1>ITEMS</h1>
      {parametri.map((p,i) => {
        return (
          <Items 
            key={i}
            tipoItem={"Cliente"} 
            items={items} 
            setItems={setItems}
            operazioneModifica={p[0]} 
            operazioneElimina={p[1]}
            campi={getCampiCliente}
            handleBlurItem={null}
            tipoForm={"card"}
            vistaItem={p[2]}
          />
        );
      })}
    </>
  );
}









