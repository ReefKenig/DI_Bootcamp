function getUsers(){
  fetch('http://localhost:5000/api/products')
  .then(res=>{
    if(res.status == 404){

    }
    res.json()
  })
  .then(data=>{
    render(data);
  })
}
getUsers();


function render(arr){
  const root = document.getElementById('root');
  root.innerHTML = '';
  arr.forEach((item, i) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = item.name
    div.appendChild(h2)
    const h4 = document.createElement('h4');
    h4.innerText = item.price
    div.appendChild(h4)
    root.appendChild(div)
  });
}
