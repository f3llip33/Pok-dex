const btnStatus = document.querySelectorAll(".btnStatus");
const type = document.querySelectorAll(".type");

const tipos = "Grama";
const tipos2 = "Venenoso";

btnStatus.forEach((botao, index) => {

    botao.addEventListener("click", () => {

        if (type[index].textContent === "") {

            type[index].textContent = `Tipo: ${tipos + tipos2}`;

            type[index].style.color = "white";
            type[index].style.padding = "10px";
            type[index].style.borderRadius = "8px";
            type[index].style.backgroundColor = "lawngreen";

        } else {

            type[index].textContent = "";
            type[index].style.padding = "0px";

        }

    });

});