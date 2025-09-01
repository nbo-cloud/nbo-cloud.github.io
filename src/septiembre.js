let calendar = {
  1: {
    audio: "Jorge Perez",
    microfonos: ["Javier Ortiz", "Michelle Rodriguez"],
    vigilancia: ["Jonathan Suarez", "Axel Morales"],
    acomodadores: {
      miercoles: ["Santos Soriano", "Joaquin Arias", "Isaac De Los Santos"],
      domingo: ["Secilio De Los Santos", "Joan Herrera", "Axel Morales"],
    },
  },

  2: {
    audio: "Robert Paez",
    microfonos: ["Alvaro Peña", "Jose Miguel Urbaez"],
    vigilancia: ["Alexis De La Cruz", "Joel Matos"],
    acomodadores: {
      miercoles: [
        "Ricardo Aguero",
        "Aureliano Garcia",
        "Humberto De Los Santos",
      ],
      domingo: ["Daniel Marte", "Kevin Peña", "Ricardo Aguero"],
    },
  },

  3: {
    audio: "Jonathan Suarez",
    microfonos: ["Jeronimo Peña", "Joan Herrera"],
    vigilancia: ["Javier Ortiz", "Leandro Morales"],
    acomodadores: {
      miercoles: ["Jorge Perez", "Jeremy Garcia", "Secilio De Los Santos"],
      domingo: ["Axel Morales", "Aureliano Garcia", "Issac De Los Santos"],
    },
  },

  4: {
    audio: "Michelle Rodriguez",
    microfonos: ["Obed Perez", "Ricardo Aguero"],
    vigilancia: ["Robert Paez", "Pablo Garcia"],
    acomodadores: {
      miercoles: ["Joel Matos", "Jeremy Garcia", "Daniel Marte"],
      domingo: ["Humberto De Los Santos", "Kevin Peña", "Joel Matos"],
    },
  },

  };

let meses = {
  actual: {
    mes: "SEPTIEMBRE",
    dias: 30,
  },
  siguiente: {
    mes: "OCTUBRE",
    dias: 31,
  },
};

let lunes = 1;
let domingo = 7;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("title").innerHTML += `${meses.actual.mes}`;

  for (let val in calendar) {
    document.getElementById("center").innerHTML += `
<section id="sec-${val}">
      <div class="date-frame">
        <h2 class="date" id="date-${val}"></h2>
      </div>
      
      <div class="place">
        <div class="assignment">
          <div class="assig one">
            <h3>Audio/Video</h3>
          </div>
          <div class="names" id="audio-${val}">
          <p>${calendar[val].audio}</p>
          </div>
        </div>
        
        <div class="assignment">
          <div class="assig two">
            <h3>Micrófonos</h3>
          </div>
          <div class="names" id="mic-${val}">
            ${calendar[val].microfonos.map((value) => `<p>${value}</p>`).join("")}
          </div>
        </div>
        
        <div class="assignment">
          <div class="assig three">
            <h3>Vigilancia</h3>
          </div>
          <div class="names" id="vig-${val}">
            ${calendar[val].vigilancia.map((value) => `<p>${value}</p>`).join("")}
          </div>
        </div>
        
        <div class="assignment">
          <div class="assig four">
            <h3>Acomodadores
Miércoles</h3>
          </div>
          <div class="names wednesday">
            <div class="floor up">
              <p id="acom-uno-${val}">${calendar[val].acomodadores.miercoles[0]}</p>
              <p id="acom-dos-${val}">${calendar[val].acomodadores.miercoles[1]}</p>
            </div>
            <div class="floor down">
              <p id="acom-tres-${val}">${calendar[val].acomodadores.miercoles[2]}</p>
            </div>
          </div>
        </div>
        
        <div class="assignment">
          <div class="assig five">
            <h3>Acomodadores
Domingo</h3>
          </div>
          <div class="names sunday">
            <div class="floor up">
              <p id="acomd-uno-${val}">${calendar[val].acomodadores.domingo[0]}</p>
              <p id="acomd-dos-${val}">${calendar[val].acomodadores.domingo[1]}</p>
            </div>
            <div class="floor down">
              <p id="acomd-tres-${val}">${calendar[val].acomodadores.domingo[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
`;
    if (lunes > domingo) {
      document.getElementById(`date-${val}`).innerHTML =
        `SEMANA DEL ${lunes} DE ${meses.anterior.mes} AL ${domingo} DE ${meses.actual.mes}`;
      lunes = domingo + 1;
      domingo = lunes + 6;
    } else if (domingo <= meses.actual.dias) {
      document.getElementById(`date-${val}`).innerHTML =
        `SEMANA DEL ${lunes} AL ${domingo} DE ${meses.actual.mes}`;
      lunes += 7;
      domingo += 7;
    } else {
      document.getElementById(`date-${val}`).innerHTML =
        `SEMANA DEL ${lunes} DE ${meses.actual.mes} AL ${domingo - meses.actual.dias} DE ${meses.siguiente.mes}`;
      lunes = domingo - meses.actual.dias + 1;
    }
  }
});
