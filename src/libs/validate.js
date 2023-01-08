import * as yup from "yup";

export const expressions = {
  letters: /^[a-zA-Z\s]{4,25}$/, // Letras y espacios
  numbers: /^[0-9]{1,3}(\.[0-9]{1,3})?$/, // 3 numeros y 3 decimales
  numbersInt: /^[0-9]{1,3}$/, // 3 numeros enteros
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  // url: /^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/, // URL
  
  // urlImg: /^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/, // URL
};

export const validate = (type) => {
  if (type === "letters") {
    return yup.string()
      .trim()
      .matches(expressions.letters, "Enter only 4 to 25 letters")
      .required();
  }
  if (type === "numbers") {
    return yup.string()
      .trim()
      .matches(expressions.numbers, "Enter only 3 numbers and 3 decimals")
      .required();
  }
  if (type === "numbersInt") {
    return yup.string()
      .trim()
      .matches(expressions.numbersInt, "Enter only 3 positive numbers")
      .required();
  }
  if (type === "url") {
    return yup.string()
      .trim()
      .matches(expressions.url, "Enter a valid URL")
      .required();
  }
};

export const schema = yup
  .object({
    name: validate("letters"),
    img: validate("url"),
    ability: validate("letters"),
    height: validate("numbers"),
    weight: validate("numbers"),
    hp: validate("numbersInt"),
    atk: validate("numbersInt"),
    def: validate("numbersInt"),
    spatk: validate("numbersInt"),
    spdef: validate("numbersInt"),
    spd: validate("numbersInt"),
    // types: yup
    //   .string()
    //   .required()
    //   .oneOf([
    //     "Normal",
    //     "Fire",
    //     "Water",
    //     "Grass",
    //     "Electric",
    //     "Ice",
    //     "Fighting",
    //     "Poison",
    //     "Ground",
    //     "Flying",
    //     "Psychic",
    //     "Bug",
    //     "Rock",
    //     "Ghost",
    //     "Dragon",
    //     "Dark",
    //     "Steel",
    //     "Fairy",
    //   ])
    //   .label("Selected Type"),
  })
  .required();