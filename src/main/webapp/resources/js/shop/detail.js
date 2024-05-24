const deleteBtn = document.getElementById("deleteBtn");
const delBtnFrm = document.getElementById("delBtnFrm");
const updateBtn = document.getElementById("updateBtn");
const updBtnFrm = document.getElementById("updBtnFrm");
const adCartBtn = document.getElementById("adCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");
const kakaopBtn = document.getElementById("kakaopBtn");
let itemPrice = document.getElementById("item_Price")

let icon = '<i class="fa-solid fa-coins"></i>'
let memCoin = document.getElementById("memCoin");
parseInt(memCoin.value).toLocaleString('ko-KR');    
itemPrice.innerHTML=icon+parseInt(memCoin.value).toLocaleString('ko-KR');



//kakaopay

kakaopBtn?.addEventListener("click",(e)=>{

    let formdata = new FormData;
    let name = document.getElementById("item_Name").innerHTML;
    let price = document.getElementById("memCoin").innerHTML;
    let item_Num = document.getElementById("item_Num").value;
    formdata.append("item_Name",name);
    formdata.append("item_Price",price);
    formdata.append("item_Num",item_Num);
    
    confirm("확인을 누르시면 결제창으로 이동합니다.")

    fetch("/purchase/kakaopay",{
        method:"post",
        body: formdata
    })
    .then(result=>result.text())
    .then(result=>{
       let a = result;
       console.log(a);
       window.open(a);
    })
    

})



//addcart

if(adCartBtn!=null){
    adCartBtn.addEventListener("click",(e)=>{
     
       let item_Num = document.getElementById("item_Num").value;
       
       console.log(item_Num+" checkskadfj");
       fetch("./addCart?item_Num="+item_Num, {
         method:"get"})
       .then(r => r.text())
       .then(r =>{
        console.log(r);
        if(r<1){
            alert("실패");
            return false;
        }

        if(!confirm("장바구니로 이동하시겠습니까?")){            
            return false;             
        }
        location.href="/cart/list"
       })

    })
}

if(buyNowBtn!=null){

    buyNowBtn.addEventListener("click",(e)=>{

     let item_Num = document.getElementById("item_Num").value;
     console.log(item_Num);
     fetch("/purchase/buy", {
        method:"POST",
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        },       
        body:"item_Num="+item_Num
     })
     .then(result=> result.text())    
     .then(result=>{       
         console.log(result);
        switch(result){

            case "1":
                alert("구매완료");
                location.href="/shop/list"
                break;   
                
            case "2": 
                alert("캐쉬템임");
                break;        
                
            case "3": 
                alert("코인이 부족합니다");
                break;    
                
            case "4": 
                alert("4번")
                if(confirm("로그인 하시겠습니까?")){
                location.href="/member/login";
                 break; 
        	    }     break; 
                 
            default :    
                alert("asdasd");
       
        };

        

        // if(result == 4){
        //     if(confirm("로그인 하시겠습니까?")){
        //         location.href="/member/login";
        //         return true;   
        //     }   
        // }       
        // if(result == 3){

        //     alert("코인이 부족합니다");
        //     return false;     
        // }
        // if(result==2){

        //     alert("캐쉬템임");
        // }
        // if(result==1){

        //     if(confirm(구매성공)){
        //         location.href="/shop/list"
        //         return true;   
        //     }
        // }
        // if(result==0){

        //     alert("구매실패");
        //     return false;   
        // }

        
     })

    })
}


// if(adCartBtn!=null){
//     adCartBtn.addEventListener("click",(e)=>{
//         let item_Num = document.getElementById("item_Num").value;
//         console.log(item_Num);
//         delBtnFrm.setAttribute("action", "./addCart?item_num="+item_Num);       
//         e.preventDefault(e);
//         delBtnFrm.submit();   
        
        
//         if(!confirm("장바구니로 이동할까요?")){
//             return false;
//         }    
//         location.href="/cart/list"


//     })
// }

// delete

if(deleteBtn!=null){
    deleteBtn.addEventListener("click",(e)=>{
        e.preventDefault();
    
        if(!confirm("'확인'누르시면 삭제됩니다.")){
            return false;
        };
        
        console.log("delete")   
        delBtnFrm.submit();
    })
}


//update

if(updateBtn!=null){

    updateBtn.addEventListener("click",(e)=>{
        console.log(e)
        
        console.log("update")   
        if(!confirm("수정페이지로 이동합니다.")){
            return false;
        };
        let item_Num = document.getElementById("item_Num").value;
        location.href="./update?item_Num="+item_Num;
    })
}
