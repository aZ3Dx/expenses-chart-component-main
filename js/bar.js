const url = "data.json";
var barsContainer = document.querySelector(".main_body-bars");

var barsHtml = "";+

fetch(url)
    .then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
    })
    .then((data) => {
        let amountArray = [];
        data.forEach(element => {
            amountArray.push(element.amount);
        });
        let maxAmount = Math.max(...amountArray);
        console.log(maxAmount);
        data.forEach(element => {
            if(element.amount === maxAmount){
                barsHtml+= "<div class='maxAmount'"
            }else{
                barsHtml+= "<div"
            }
            let height=(element.amount*100)/maxAmount;
            console.log(parseFloat(height).toFixed(2));
            barsHtml+= " id='bar-"+element.day+"'><div ></div><p>"+element.day+"</p></div>";
        });
        barsContainer.innerHTML = barsHtml;
    })

    // ESTE SERIA MI ERROR QUE QUIERO VER