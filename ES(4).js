const arr2= [
  "rizal",
  "prabumulih",
  ["smk negeri prabumulih", "pramujaya", 'sukajadi']''
];

const[nama,  asal, ...rest] = arr2

console.log(nama);
console.log(asal);
console.log(rest);
