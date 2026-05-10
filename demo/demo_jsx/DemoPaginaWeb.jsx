import { useState } from "react";
import { PaginaWeb } from "../../src/pagine_web/PaginaWeb";

export default function DemoPaginaWeb() {
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

  const getCampiRicercaClienti = (item, handleOnChange, handleOnClick, handleOnBlur) => {
    return {
      header: "Ricerca clienti",  
      label: ["Nome", "Cognome"], 
      type: [null, null],  
      step: [null, null], 
      min: [null, null], 
      name: ["nome", "cognome"], 
      id: ["ricerca_nome", "ricerca_cognome"], 
      value: [item.nome, item.cognome], 
      placeholder: ["Nome", "Cognome"], 
      onChange: handleOnChange, 
      onClick: handleOnClick, 
      onBlur: handleOnBlur
    };
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
      <h1>Pagina web</h1>
      {parametri.map((p,i) => {
        return(
          <PaginaWeb
            componenti={
              {
                // Items
                tipoItem: "cliente",
                items: items,
                setItems: null,
                servizi: null,
                // Handle operations
                handleBlurItem: null,
                operazioneModifica: p[0],
                operazioneElimina: p[1], 
                handleInsert: null,
                handleSearch: null,
                handleEdit: null,
                handleDelete: null,
                // Campi
                campiRicercaItems: getCampiRicercaClienti(cliente, null, null, null),
                campiItemEsistente: getCampiCliente,
                // Indici
                indiciRicercaItems: [1,2],
                // Selects
                selectOperation: null,
                selectedIdsModifica: [],
                selectedIdsEliminazione: [],
              }
            }
            elementi={["search"]}
            vistaItem={p[2]}
            vistaForm={"card"}
          />
        );
      })}
    </>
  );
}









