let calendar = {
1: {
	audio: "Robert Paez",
	microfonos: ["Boscolo Vides", "Alvaro Peña"],
	vigilancia: ["Pablo Garcia", "Javier Ortiz"],
	acomodadores: {
		miercoles: ["Jonathan Uribe", "Isacar Rodriguez", "Leandro Morales"],
		domingo: ["Joel Matos", "Kevin Peña", "Joan Herrera"],
	}
},

2: {
	audio: "Michelle Rodriguez",
	microfonos: ["Alvaro Peña", "Kevin Peña"],
	vigilancia: ["Cecilio De Los Santos", "Alexis de la Cruz"],
	acomodadores: {
		miercoles: ["Daniel Marte", "Jose Urbaez", "Gedalias Lope
z"],
		domingo: ["Joel Matos", "Joan Herrera", "Pablo Garcia"],
	}
},

3: {
	audio: "Javier Ortiz",
	microfonos: ["Jeronimo Peña", "Jeremy Garcia"],
	vigilancia: ["Jonathan Uribe", "Robert Paez"],
	acomodadores: {
		miercoles: ["Humberto De Los Santos", "Isacar Rodriguez",
 "Ricardo Agüero"],
		domingo: ["Aureliano Garcia", "Santos Soriano", "Jonathan Suarez"],
	}
},

4: {
	audio: "Jorge Perez",
	microfonos: ["Obed Perez", "David Marques"],
	vigilancia: ["Jose Urbaez", "Boscolo Vides"],
	acomodadores: {
		miercoles: ["Gedalias Lopez", "Joan Herrera", "Daniel Mar
te"],
		domingo: ["Leandro Morales", "Kevin Peña", "Joaquin Arias"],
	}
},

5: {
	audio: "Robert Paez",
	microfonos: ["Boscolo Vides", "Aureliano Garcia"],
	vigilancia: ["Joaquin Arias", "Humberto De Los Santos"],
	acomodadores: {
		miercoles: ["Jonathan Uribe", "Isaac De Los Santos", "Jor
ge Perez"],
		domingo: ["Santos Soriano", "Isacar Rodriguez", "Jonathan Suarez"],
	}
},
  };

let meses = {
  actual: {
    mes: "Enero",
    dias: 31,
  },
  siguiente: {
    mes: "FEBRERO",
    dias: 28,
  },
};

let lunes = 29;
let domingo = 4;

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
