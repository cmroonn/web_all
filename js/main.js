'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.querySelector(".overlay");

    {
        const bonusButton = document.getElementById("bonus");
        const bonusGift = document.querySelector(".bonus-hidden");

        bonusButton.addEventListener("mouseover", () => {
            bonusGift.classList.add("show");
        });

        bonusButton.addEventListener("mouseout", () => {
            bonusGift.classList.remove("show");
        });

        bonusButton.addEventListener("click", e => {
            e.preventDefault();
        });
    }

    // Sign up popup settings 
    {
        const button = document.querySelectorAll(".content__main-btn");
        const popup = document.querySelector(".signup-popup");
        const nextButton = document.getElementById("signUpChannelConfirm");
        const channelsWindow = document.getElementById("signUpChannel");
        const formWindow = document.getElementById("signUpForm");
        const close = document.querySelector(".signup-popup .close-popup");
        const socials = document.querySelectorAll(".social");
        const input = document.querySelectorAll(".signup-popup__input");
        const label = document.querySelectorAll(".signup-popup__input label");
        const thanksPopup = document.querySelector(".success-popup");
        const specialPopup = document.querySelector(".special-popup");

        button.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                overlay.classList.add("show");
                popup.classList.add("show");
                specialPopup.classList.remove("show");
            });
        });

        nextButton.addEventListener("click", e => {
            channelsWindow.classList.remove("show");
            formWindow.classList.add("show");
        });

        close.addEventListener("click", e => {
            popup.classList.remove("show");
            overlay.classList.remove("show");
        });

        socials.forEach(element => {
            element.addEventListener("click", () => {
                socials.forEach(el => {
                    el.querySelector(".social-active").classList.remove("show");
                    el.querySelector(".social-inactive").classList.add("show");
                });

                element.querySelector(".social-inactive").classList.remove("show");
                element.querySelector(".social-active").classList.add("show");
                nextButton.removeAttribute("disabled");
            });
        });

        input.forEach(el => {
            el.addEventListener("click", () => {
                input.forEach(elem => {
                    elem.classList.remove("active");
                });

                el.classList.add("active");
                console.log(el.children[0].focus);
            });
        });
    }

    // Success popup Settings
    {
        const close = document.querySelector(".success-popup .close-popup");
        const popup = document.querySelector(".success-popup");

        close.addEventListener("click", e => {
            popup.classList.remove("show");
            overlay.classList.remove("show");
        });
    }

    // Special popup Settings 

    {
        const popup = document.querySelector(".special-popup");
        const count = document.getElementById("counter");
        const close = document.querySelector(".special-popup .close-popup");

        function counter(time) {
            count.innerHTML = time;
            function getCount() {
                time -= 1;
                count.innerHTML = time;

                if (time === 0) {
                    popup.classList.remove("show");
                    overlay.classList.remove("show");
                }
            }
            return getCount;
        };

        let startCounter = counter(60);

        const popupOpen = () => {
            popup.classList.add("show");
            overlay.classList.add("show");
            setInterval(startCounter, 1000);
        };

        setTimeout(popupOpen, 6000);

        close.addEventListener("click", e => {
            popup.classList.remove("show");
            overlay.classList.remove("show");
        });
    }

    // Dialogs settings 

    {
        const dialogs = document.querySelectorAll(".point-dialog");
        const points = document.querySelectorAll(".point");

        points.forEach(el => {
            el.addEventListener("mouseover", () => {
                dialogs.forEach(dialog => {
                    dialog.classList.remove("show");
                    if (dialog.getAttribute("data-key") === el.getAttribute("data-key")) {
                        dialog.classList.add("show");
                    }
                });
            });

            el.addEventListener("mouseout", () => {
                dialogs.forEach(dialog => {
                    dialog.classList.remove("show");
                });
            });
        });
    }

    {
        const hoverElem = document.querySelector(".content__info-name");
        const hidden = document.querySelector(".content__info-hidden");

        hoverElem.addEventListener("mouseover", () => {
            hidden.classList.add("show");
        });

        hoverElem.addEventListener("mouseout", () => {
            hidden.classList.remove("show");
        });
    }

    // Form settings 

    {
        var phoneMask = IMask(document.getElementById('phone-mask'), {
            mask: '+{7}(000)000-00-00'
        });
    }
});