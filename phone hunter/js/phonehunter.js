// const loadPhone = async () => {
//   const URL = "https://openapi.programming-hero.com/api/phones?search=iphone";
//   const res = await fetch(URL);
//   const data = await res.json();
//   showAllPhone(data.data);
// };

const loadPhone = (searchText) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showAllPhone(data.data))
    .catch((error) => console.log(error));
};

const showAllPhone = (phones) => {
  const allPhones = document.getElementById("all-phones");

  // remove previous phones when search new phones
  allPhones.innerHTML = "";
  //

  // display 10 phones only when we have more than 8 phones
  const showAll = document.getElementById("show-all");
  if (phones.length > 8) {
    phones = phones.slice(0, 8);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  //

  //Not found message
  const notFound = document.getElementById("not-found");
  if (phones.length === 0) {
    notFound.classList.remove("d-none");
  } else {
    notFound.classList.add("d-none");
  }
  //
  for (const phone of phones) {
    // console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
      <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h6> Brand: ${phone.brand} </h6>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
          
          
          
          
          <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Primary</button>








        </div>
      </div>
    `;
    allPhones.appendChild(phoneDiv);
  }
  // ‍Stop spinner
  loadSpinner(false);
  //
};

// Search
document.getElementById("btn-search").addEventListener("click", function () {
  //show spinner
  loadSpinner(true); //

  const searchField = document.getElementById("search-field").value;
  loadPhone(searchField);
});
//

// Enter key
const elem = document.getElementById("search-field");
elem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    loadSpinner(true);
    const searchField = document.getElementById("search-field").value;
    loadPhone(searchField);
  }
});

// Spinner function
const loadSpinner = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};
//

// Show all Button
document
  .getElementById("btn-show-all")
  .addEventListener("click", function () {});

// Phone details
const phoneDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhoneDetails(data));
};
const showPhoneDetails = (phone) => {
  console.log(phone);
  console.log(phone.data.brand);
  console.log(phone.data.mainFeatures.displaySize);

  document.getElementById("phoneDetailModalLabel").innerText = phone.data.name;
  const phoneDetailModalBody = (document.getElementById(
    "phone-details-modal-body"
  ).innerHTML = `
   <p> Release Date: ${phone.data.releaseDate} </p>
   <p> Display: ${phone.data.mainFeatures.displaySize} </p>
   <p> Storage: ${phone.data.mainFeatures.storage} </p>
   <p> Others: ${phone.data.others.WLAN} </p>
  
  `);
};
// loadPhone();
