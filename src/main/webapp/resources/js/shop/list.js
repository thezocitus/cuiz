const searchBtn = document.getElementById("searchBtn");
const searchfrm = document.getElementById("searchfrm");
const search = document.getElementById("search2");

let formun = document.getElementById("formun");
let temp = "kind0"; 

console.log(search)
search.addEventListener("click" , (e)=>{
    e.preventDefault();
    const queryString = new URLSearchParams(new FormData(searchfrm)).toString();
    console.log(queryString);

  fetch("api/list?kind="+temp+"&"+queryString)
    .then(result=>result.json())
    .then(result=>frm(result))


})




searchBtn.addEventListener("click" ,(e)=>{


    temp = e.target.value;
    fetch("api/list?kind="+e.target.value)
    .then(result=>result.json())
    .then(result=>frm(result))

});


function frm(result){
    let html ="";
    formun.innerHTML=html;
    console.log(result)
        for(let list of result){

        html +=
           `
           <div class="col-lg-3 col-sm-6">
           <div class="item" style="height: 200px">
           <a href="detail?item_Num=${list.item_Num}">
           <img src="data:image/jpeg;base64,${list.item_Photo_to_String}" alt="" style="overflow:hidden; margin:0 auto; ">
           </a>
           <a href="detail?item_Num=${list.item_Num}">
           <h4>${list.item_Name}<br><span>${list.item_Price}</span></h4>
           </a>
           <ul>
           <li><i class="fa fa-star"></i> 4.8</li>
           <li><i class="fa fa-download"></i> 2.3M</li>
           </ul>    
           </div>
           </div>
          `    
        

        }
        formun.innerHTML=html;
}

  