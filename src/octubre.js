let calendar = {
  1: {
    audio: "Jeremy Garcia",
    microfonos: ["Aureliano Garcia", "Alexis De la Cruz"],
    vigilancia: ["Joaquin Arias", "Jose Miguel Urbaez"],
    acomodadores: {
      miercoles: ["Andres Collado", "Secilio De Los Santos", "Pablo Garcia"],
      domingo: ["Pablo Garcia", "Leandro Morales", "Andres Collado"],
    },
  },

  2: {
    audio: "Javier Ortiz",
    microfonos: ["Jorge Perez", "Joel Matos"],
    vigilancia: ["Aureliano Garcia", "Robert Paez"],
    acomodadores: {
      miercoles: ["Jonathan Suarez", "Leandro Morales", "Isaac De Los Santos"],
      domingo: ["Secilio De Los Santos", "Joan Herrera", "Jonathan Suarez"],
    },
  },

  3: {
    audio: "Axel Morales",
    microfonos: ["Alvaro Peña", "Isaac De Los Santos"],
    vigilancia: ["Andres Collado", "Ricardo Aguero"],
    acomodadores: {
      miercoles: ["Jose Miguel Urbaez", "Kevin Peña", "Santos Soriano"],
      domingo: ["Kevin Peña", "Humberto De Los Santos", "Jose Miguel Urbaez"],
    },
  },

  4: {
    audio: "Michelle Rodriguez",
    microfonos: ["Jeronimo Peña", "Jeremy Garcia"],
    vigilancia: ["Daniel Marte", "Secilio De Los Santos"],
    acomodadores: {
      miercoles: ["Robert Paez", "Javier Ortiz", "Alexis De la Cruz"],
      domingo: ["Joel Matos", "Alexis De la Cruz", "Robert Paez"],
    },
  },
};

let meses = {
  anterior: {
    mes: "SEPTIEMBRE",
  },
  actual: {
    mes: "OCTUBRE",
    dias: 31,
  },
  siguiente: {
    mes: "NOVIEMBRE",
  },
};

let lunes = 6;
let domingo = 12;

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
