import products from "./data.json";
export const discount = 15;

export function renderProducts(){

 const list = document.querySelector("#list");
 list.innerHTML = '';

  products.forEach(element => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${element.name}</span>
                <p>Цена со скидкой: ${element.price -(element.price * discount / 100) } ${element.currency}</p>`;
  list.appendChild(li);
});
}


