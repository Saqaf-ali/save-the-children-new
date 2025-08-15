
let iconsHeader = [
  // { name: "search", iconTag: "fas fa-search", link: "/" },
  { name: "langue", iconTag: "fa-solid fa-globe", link: "/" },
  // login icon
{ name: "login", iconTag: "fas fa-user", link: "/login" },


  // { name: "them", iconTag: "fa-solid fa-circle-half-stroke", link: "" },
  { name: "dashboard", iconTag: "fas fa-cog", link: "/dashboard" },
];
localStorage.setItem("iconsHeader", JSON.stringify(iconsHeader));

console.log("header icons saved to local storage");
console.log( JSON.parse(localStorage.getItem("iconsHeader")));
// artist
// fas fa-cog