const createWizard = () => {
    return {
      name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS),
    };
  };

  const Wizard = function (name, coatColor, eyesColor) {
    this.name = name;
    this.coatColor = coatColor;
    this.eyesColor = eyesColor;
  };
  
  const someWizard = new Wizard(
    `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
    getRandomArrayElement(COAT_COLORS),
    getRandomArrayElement(EYES_COLORS),
  );

  console.log(someWizard instanceof Wizard); // true
console.log({} instanceof Wizard); // false
