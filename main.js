window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"), // переключатели
        info = document.querySelector(".info-header"), // родительский div, содержащий пункты табов
        tabContent = document.querySelectorAll(".info-tabcontent"); // контент, который должен меняться

    function hideTabContent(a) { // функция, которая скрывает контент
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show"); // удаляем класс show
            tabContent[i].classList.add("hide"); // добавляем класс hide
        }
    }

    hideTabContent(1); // параметром функции передаем единицу, т.к. должен остаться один блок с контентом

    function showTabContent(b) { // функция, которая показывает контент
        if(tabContent[b].classList.contains("hide")) { // проверка, скрыт ли нужный контент
            tabContent[b].classList.remove("hide"); // удаляем класс hide
            tabContent[b].classList.add("show"); // добавляем класс show
        }
    }

    info.addEventListener("click", function(event) { // функция, реализующая функционал табов, использует делегирование событий
        let target = event.target; // в переменную присваивается элемент, на котором сработало событие click 

        if(target && target.classList.contains("info-header-tab")) { // должны отработать только переключатели
            for(let i = 0; i < tab.length; i++) {  
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});