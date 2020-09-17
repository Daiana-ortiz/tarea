// 1) Extraer el total de ingresos
// 2) Extraer el total de egresos (o extracciones)
// 3) Extraer un saldo final (a ver si llegamos a fin de mes)
// TRATAR DE NO COPIARSE DE NINGUN LADO :')

const movimientos = [
    {
      tipo: "ingreso",
      monto: 5000,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 1000,
    },
  
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 2000,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
  ];
  
const ingreso = movimientos.reduce((acu, item) => (typeof item.monto == "number" && item.tipo === "ingreso" ? acu + item.monto : acu),0)
const egreso = movimientos.reduce((acu, item) => (typeof item.monto == "number" && item.tipo === "extraccion" ? acu + item.monto : acu),0)
const saldo = ingreso - egreso

console.log("Los ingresos de su cuenta son " + ingreso);
console.log("Las extracciones de su cuenta son " + egreso);
console.log("El saldo de la cuenta es " + saldo);
   
   
  
  