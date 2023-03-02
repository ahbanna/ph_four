const loadCountry = () => {
  const URL = "https://restcountries.com/v3.1/all";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showCounty(data.slice(0, 8)))
    .catch((error) => console.log(error));
};
const showCounty = (countries) => {
  const allCountry = document.getElementById("all-country");
  for (const county of countries) {
    // console.log(county);
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${county.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${county.name.common}</h5>
          <p>Capital: ${county.capital}</p>
          <button onclick="countryDetails('${county.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
        </div>
    </div>
    `;
    allCountry.appendChild(countryDiv);
  }
};

const countryDetails = (id) => {
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data));
};
const showCountryDetails = (country) => {
  console.log(country);
  document.getElementById("country-name").innerText = country[0].name.common;
  const modalBody = document.getElementById("single-country-modal-body");
  modalBody.innerHTML = `
  <p> Population: ${country[0].population}  <p>
  `;
};

// See all country
const seeAllCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCounty(data));
};

// call the function
loadCountry();
