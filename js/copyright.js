const copyright = document.querySelector(".copyright");
const date = new Date();
const year = date.getFullYear();
copyright.innerHTML = `
<p>© Copyright ${year} 4:20 shop. All Rights reserved. Условия пользования сайтом</p>
`;
