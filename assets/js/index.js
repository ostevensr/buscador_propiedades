const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

let resultados = document.getElementById("resultados");

let buscar = document.getElementById("buscar");

buscar.addEventListener("click", (event) => {

  let cuartos = Number(document.getElementById("cuartos").value);
  let metros_min = Number(document.getElementById("min_metros").value);
  let metros_max = Number(document.getElementById("max_metros").value);

  const propiedadesFiltradas = []

  // console.log(cuartos)
  // console.log(metros_min)
  // console.log(metros_max)

  if (metros_max < metros_min) {

    return alert("Metros máximo deben ser superior a mínimos")
    
  } else {

  if (cuartos === 0 || metros_min === 0 || metros_max === 0) {
    return alert("Completar todos los campos para realizar la búsqueda")
  } else {

    for (let propiedad of propiedadesJSON) {

      if (propiedad["rooms"] == cuartos && propiedad["m"] >= metros_min && propiedad['m'] <= metros_max) {

        propiedadesFiltradas.push(propiedad)

      }
    }

    let resultados_num = propiedadesFiltradas.length

    resultados.innerHTML = `${resultados_num}`

    let templateResultados = ''

    for (let prop of propiedadesFiltradas) {

      templateResultados += `
        <div class="propiedad">
          <div class="img" style="background-image: url('${prop["src"]}')">
          </div>
          <section>
            <h5>${prop["name"]}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: ${prop["rooms"]}</p>
              <p>Metros: ${prop["m"]}</p>
            </div>
          <p class="my-3">${prop["description"]}</p>
          <button class="btn btn-info ">Ver más</button>
          </section>
        </div >
        `
    }

    let gridResultados = document.getElementById("grid-resultados");

    gridResultados.innerHTML = templateResultados

  }
}
}
);

let recargar = document.getElementById("limpiar");

recargar.addEventListener("click", (event) => {

  window.location.reload()

}
)
;