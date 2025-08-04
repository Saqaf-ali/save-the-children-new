
let iconsHeader = [
  { name: "search", iconTag: "fas fa-search", link: "/" },
  { name: "langue", iconTag: "fa-solid fa-globe", link: "/" },
  { name: "them", iconTag: "fa-solid fa-circle-half-stroke", link: "" },
  { name: "dashboard", iconTag: "fas fa-user", link: "/dashboard" },
];
localStorage.setItem("iconsHeader", JSON.stringify(iconsHeader));

console.log("header icons saved to local storage");
console.log( JSON.parse(localStorage.getItem("iconsHeader")));


