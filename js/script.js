function toggleDropdown(id) {
      document.getElementById(id).classList.toggle("show");
    
    }       

    // Fecha o menu se clicar fora
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    // dropdown orçamento

    function atualizarOpcoes() {
  const tipo = document.getElementById("tipo").value;
  const modelo = document.getElementById("modelo");

  // Limpa o segundo select
  modelo.innerHTML = "";

  let opcoes = [];

  if (tipo === "calha") {
    opcoes = ["Platibanda", "Colonial", "Quadrada", "Moldura"];
  } else if (tipo === "rufo") {
    opcoes = ["Liso", "Encaixe", "Pingadeira"];
  } else if (tipo === "coifa") {
    opcoes = ["Inox", "Alumínio", "Galvanizado"];
  } else if (tipo === "telha") {
    opcoes = ["Cerâmica", "Metálica", "Fibrocimento"];
  }

  if (opcoes.length > 0) {
    opcoes.forEach(function(tipo) {
      const option = document.createElement("option");
      option.value = tipo.toLowerCase();
      option.text = tipo;
      modelo.appendChild(option);
    });
  } else {
    const option = document.createElement("option");
    option.text = "-- Selecione o tipo primeiro --";
    modelo.appendChild(option);
  }
}                                                                                                                                                                                                                                                                                                                                                                                