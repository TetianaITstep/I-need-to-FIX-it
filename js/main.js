import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js";
import { ua } from "./js/ua.js";
import { en } from "./js/en.js";

const {
  btn: { btn_ua, btn_en, btn_fr },
  elements: {
    banner_info,
    button_info_1,
    button_info_2,
    best_food_text,
    best_food_descr_text,
    best_food_discover,
  },
} = refs;

function changeLanguage(lang) {
  banner_info.textContent = lang.banner_info;
  button_info_1.textContent = lang.button_info_1;
  button_info_2.textContent = lang.button_info_2;
  best_food_text.textContent = lang.best_food_text;
  best_food_descr_text.textContent = lang.best_food_descr_text;
  best_food_discover.textContent = lang.best_food_discover;
}

const button = { btn_en, btn_ua, btn_fr };
const languages = { en, fr, ua };

Object.keys(refs.btn).forEach((key) => {
  button[key].addEventListener("click", (e) => {
    const langCode = key.split("_")[1];
    changeLanguage(languages[langCode]);

    Object.keys(button).forEach((btnKey) => {
      button[btnKey].classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
