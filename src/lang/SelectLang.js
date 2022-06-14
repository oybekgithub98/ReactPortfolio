import i18next from "i18next";
import React from "react";

function SelectLang() {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng.target.value);
    console.log(i18next.language);
  };
  return (
    <>
      <div>
        <select defaultValue={i18next.language} onChange={changeLanguage}>
          <option value="uz">uz</option>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
    </>
  );
}

export default SelectLang;