let calendar = {
  1: {
	audio: "Michelle Rodriguez" ,
	microfonos: ["Jonathan Uribe", "David Marques"],
	vigilancia: ["Boscolo Vides", "Daniel Marte"],
	acomodadores: {
		miercoles: ["Santos Soriano", "Alexis de la Cruz", "Aureliano Garcia"],
		domingo: ["Axel Morales", "Pablo Garcia", "Jeremy Garcia"],
	}
},

2: {
	audio: "Jorge Perez" ,
	microfonos: ["Obed Perez", "Jonathan Suarez"],
	vigilancia: ["Andres Collado", "Javier Ortiz"],
	acomodadores: {
		miercoles: ["Isacar Rodriguez", "Joaquin Arias", "Robert Paez"],
		domingo: ["Leandro Morales", "Kevin Peña", "Jose Urbaez"],
	}
},

3: {
	audio: "David Marques",
	microfonos: ["Isaac De Los Santos", "Alvaro Peña"],
	vigilancia: ["Daniel Marte", "Joel Matos"],
	acomodadores: {
		miercoles: ["Cecilio De Los Santos", "Jonathan Uribe", "Humberto De Los Santos"],
		domingo: ["Boscolo Vides", "Joan Herrera", "Gedalias Lopez"],
	}
},

4: {
	audio: "Axel Morales",
	microfonos: ["Alexis de la Cruz", "Jeronimo Peña"],
	vigilancia: ["Jonathan Suarez", "Javier Ortiz"],
	acomodadores: {
		miercoles: ["Michelle Rodriguez", "Santos Soriano", "Jeremy Garcia"],
		domingo: ["Andres Collado", "Ricardo Agüero", "Aureliano Garcia"],
	}
},

  };

let meses = {
  actual: {
    mes: "Diciembre",
    dias: 31,
  },
  siguiente: {
    mes: "Enero",
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
