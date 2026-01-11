import { discount, renderProducts } from "./render";
import "./style.css";

document.querySelector("#app").innerHTML = `
<div>
<h1>Список товаров</h1>
<ul id="list"></ul>
<span>Ваша скидка состовляет ${discount} %</span>
</div>
`;

renderProducts()
