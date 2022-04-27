const API_URL = "http://localhost:3000/products";

async function fetchData() {
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  return responseJson;
}

function populateProduct(products) {
  const productSection = document.querySelector(".categories__list");
  productSection.insertAdjacentHTML(
    "beforeend",
    `
            <li>
             <figure>
                <img src="img/img_2.png" alt="foto de uma mulher usando camiseta" referrerpolicy="no-referrer">
                <figcaption>camiseta mescla</figcaption>
              </figure>
              <span class="price">R$ 28,00</span>
              <span class="parcel">até 3x de R$9,33</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_3.png" alt="foto de uma mulher usando blusa listrada com mangas cumpridas e uma saia de couro" referrerpolicy="no-referrer">
                <figcaption>saia em couro</figcaption>
              </figure>
              <span class="price">R$ 398,00</span>
              <span class="parcel">até 10x de R$39,80</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_4.png" alt="foto de uma mulher usando blusa, casaco listrado e saia de couro" referrerpolicy="no-referrer">
                <figcaption>cardigan tigre</figcaption>
              </figure>
              <span class="price">R$ 398,00</span>
              <span class="parcel">até 10x de R$39,80</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_5.png" alt="foto de uma mulher usando camiseta com decote v" referrerpolicy="no-referrer">
                <figcaption>cardigan off white</figcaption>
              </figure>
              <span class="price">R$ 99,90</span>
              <span class="parcel">até 3x de R$33,30</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_6.png" alt="foto de uma mulher usando um body bore com estampa que simula a pele de um leopardo" referrerpolicy="no-referrer">
                <figcaption>body leopardo</figcaption>
              </figure>
              <span class="price">R$ 129,90</span>
              <span class="parcel">até 3x de R$43,43</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_7.png" alt="foto de uma mulher usando um casaco peludo" referrerpolicy="no-referrer">
                <figcaption>casaco pelos</figcaption>
              </figure>
              <span class="price">R$ 398,00</span>
              <span class="parcel">até 10x de R$39,80</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_8.png" alt="foto de uma mulher usando camiseta listrada com 4 cores verticais" referrerpolicy="no-referrer">
                <figcaption>cropped stripes</figcaption>
              </figure>
              <span class="price">R$ 120,00</span>
              <span class="parcel">até 3x de R$40,00</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_9.png" alt="foto de uma mulher usando camisa transparente" referrerpolicy="no-referrer">
                <figcaption>camisa transparente</figcaption>
              </figure>
              <span class="price">R$ 398,00</span>
              <span class="parcel">até 10x de R$39,80</span>
              <button>Comprar</button>
            </li>
            <li>
              <figure>
                <img src="img/img_10.png" alt="foto de uma mulher usando uma blusa , uma pochete e uma calça jeans" referrerpolicy="no-referrer">
                <figcaption>cardigan tigre</figcaption>
              </figure>
              <span class="price">R$ 398,00</span>
              <span class="parcel">até 10x de R$39,80</span>
              <button>Comprar</button>
            </li>
    `
  );
}

async function main() {
  const data = await fetchData();
  populateProduct(data.products);

}

main();