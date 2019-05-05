window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"), // �������������
        info = document.querySelector(".info-header"), // ������������ div, ���������� ������ �����
        tabContent = document.querySelectorAll(".info-tabcontent"); // �������, ������� ������ ��������

    function hideTabContent(a) { // �������, ������� �������� �������
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show"); // ������� ����� show
            tabContent[i].classList.add("hide"); // ��������� ����� hide
        }
    }

    hideTabContent(1); // ���������� ������� �������� �������, �.�. ������ �������� ���� ���� � ���������

    function showTabContent(b) { // �������, ������� ���������� �������
        if(tabContent[b].classList.contains("hide")) { // ��������, ����� �� ������ �������
            tabContent[b].classList.remove("hide"); // ������� ����� hide
            tabContent[b].classList.add("show"); // ��������� ����� show
        }
    }

    info.addEventListener("click", function(event) { // �������, ����������� ���������� �����, ���������� ������������� �������
        let target = event.target; // � ���������� ������������� �������, �� ������� ��������� ������� click 

        if(target && target.classList.contains("info-header-tab")) { // ������ ���������� ������ �������������
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