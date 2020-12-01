var XLSX = require("xlsx");

const ExcelAJSON = (route) => {

  console.log(route)
  
  if(route != undefined){  

  const excel = XLSX.readFile(
    __dirname + "/" + route
  );
  console.log(excel)
  var nombreHoja = excel.SheetNames; // regresa un array
  console.log(nombreHoja[0])
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
  console.log(datos)
  console.log(datos.length)


  const jDatos = [];
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    jDatos.push({
      ...dato,
      id: i
    });
  }
  console.log(jDatos);
  // console.log(datos);
  return jDatos
} 
// ExcelAJSON();


}

// exports { ExcelAJSON }
module.exports = { ExcelAJSON }