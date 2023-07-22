const productos = [
  {
    Nombre: "Classic Cheeseburger",
    id: 1,
    precio: 10.99,
    stock: 25,
    descripcion:
      "Una hamburguesa clásica con carne jugosa, queso cheddar derretido, lechuga, tomate y salsa especial. Todo servido en un suave pan de hamburguesa",
    categoria: "Tradicional",

    Nombre: "BBQ Bacon Burger",
    id: 2,
    precio: 12.49,
    stock: 18,
    descripcion:
      "Una deliciosa hamburguesa a la parrilla con salsa barbacoa, tocino crujiente, cebolla caramelizada y queso suizo, servida en un pan brioche",
    categoria: "Especialidades de la casa",

    Nombre: "Veggie Delight Burger",
    id: 3,
    precio: 9.99,
    stock: 12,
    descripcion:
      "Una hamburguesa vegetariana hecha con una mezcla de garbanzos, espinacas y especias, acompañada de lechuga, tomate, pepinillos y mayonesa vegana, servida en un pan integral",
    categoria: "Vegetariana",

    Nombre: "Spicy Jalapeño Burger",
    id: 4,
    precio: 11.95,
    stock: 20,
    descripcion:
      "Una hamburguesa picante con carne sazonada, jalapeños en rodajas, pimientos asados, queso pepper jack y mayonesa de chipotle, todo en un pan de pretzel",
    categoria: "Picante",

    Nombre: "Mushroom Swiss Burger",
    id: 5,
    precio: 11.25,
    stock: 15,
    descripcion:
      "Una hamburguesa gourmet con carne de res, champiñones salteados, cebollas caramelizadas, queso suizo y una deliciosa salsa de mostaza y miel, servida en un pan de semillas de amapola",
    categoria: "Gourmet",

    Nombre: "Hawaiian Teriyaki Burger",
    id: 6,
    precio: 13.99,
    stock: 10,
    descripcion:
      "Una exótica hamburguesa con una mezcla de carne de cerdo y ternera, cubierta con piña a la parrilla, cebolla roja, queso provolone y una deliciosa salsa teriyaki, todo servido en un pan de hamburguesa de maíz",
    categoria: "Fusión",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = productos.find(
      (item) => item.id === Number(idURL)
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}

export function getCategoryData(categoryURL) {
  return new Promise((resolve, reject) => {
    const categoryRequested = productos.filter((item) => {
      return item.category.toLowerCase() === categoryURL.toLowerCase();
    });

    setTimeout(() => {
      resolve(categoryRequested);
    }, 2000);
  });
}

export default getData;
