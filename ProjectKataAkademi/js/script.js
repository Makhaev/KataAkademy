document.addEventListener("DOMContentLoaded", () => {

  const encodeButton = document.querySelector(".button-modal:not(.clipboard)");
  const copyButton = document.querySelector(".button-modal.clipboard");

  
  const inputTextArea = document.querySelector(".enter");
  const outputTextArea = document.querySelector(".exit");

 
  inputTextArea.addEventListener("input", () => {
    
    inputTextArea.value = inputTextArea.value.replace(/[^A-Z]/g, "");
  });

  
  encodeButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    
    const inputText = inputTextArea.value;

   
    const encodedText = encodeString(inputText);

    outputTextArea.value = encodedText;
  });

  
  copyButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const resultText = outputTextArea.value;

    
    navigator.clipboard
      .writeText(resultText)
      .then(() => {
        
        alert("Текст скопирован в буфер обмена!");
      })
      .catch((err) => {
       
        console.error("Ошибка при копировании: ", err);
      });
  });

  function encodeString(str) {
    if (!str) return "";
    let encodedStr = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === str[i + 1]) {
        count++;
      } else {
       
        encodedStr += (count > 1 ? count : "") + str[i];
        count = 1; 
      }
    }

    return encodedStr;
  }
});
