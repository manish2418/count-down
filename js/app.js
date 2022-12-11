const endDate ="19 December 2022 12:30 PM"
document.getElementById("end-date").innerText = endDate;
const inputs=document.querySelectorAll("input")



function clock(){
    const end=new Date(endDate);
    const now =new Date()
    const diff=(end-now)/1000;
 
    if(diff<0) return; //negative me number na aaye.
    inputs[0].value=(Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=Math.floor(diff)%60;
    //convert into days
}

clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)