const url = "data.json";
var barsContainer = document.querySelector(".main_body-bars");

var barsHtml = "";

fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        let amountArray = [];
        data.forEach(element => {
            amountArray.push(element.amount);
        });
        let maxAmount = Math.max(...amountArray);
        data.forEach(element => {
            if(element.amount === maxAmount){
                barsHtml+= "<div class='maxAmount'"
            }else{
                barsHtml+= "<div"
            }
            let heightGrow=(element.amount)/maxAmount;
            barsHtml+= " id='bar-"+element.day+"'><div class='bar' style='flex-grow:"+heightGrow+"'><div class='label'>$"+element.amount+"</div></div><p>"+element.day+"</p></div>";
        });
        barsContainer.innerHTML = barsHtml;
    });

window.onload = function() {
    var bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        bar.addEventListener("mouseover", function () {
            if (bar.parentElement.classList.contains("maxAmount")) {
                bar.style.backgroundColor = "var(--Cyan-opacity)";
            } else {
                bar.style.backgroundColor = "var(--Soft-red-opacity)";
            }
            this.classList.add("active");
            this.children[0].classList.add("show");
        }),
        bar.addEventListener("mouseout", function () {
            if (bar.parentElement.classList.contains("maxAmount")) {
                bar.style.backgroundColor = "var(--Cyan)";
            } else {
                bar.style.backgroundColor = "var(--Soft-red)";
            }
            this.classList.remove("active");
            this.children[0].classList.remove("show");
        })
    })
}