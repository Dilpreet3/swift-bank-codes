export const countries = [
  'albania', 'algeria', 'andorra', 'angola', 'anguilla', 'antiguaAndBarbuda', 'argentina', 'armenia', 'aruba', 'australia', 
  'austria', 'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belgium', 'belize', 'benin', 'bermuda', 'bhutan', 
  'bolivia', 'bonaire', 'bosniaAndHerzegovina', 'botswana', 'brazil', 'brunei', 'bulgaria', 'burkinaFaso', 'cambodia', 'cameroon', 
  'canada', 'capeVerde', 'caymanIslands', 'chile', 'china', 'colombia', 'comoros', 'cookIslands', 'costaRica', 'coteDivoire', 'croatia', 
  'curacao', 'cyprus', 'czechRepublic', 'denmark', 'djibouti', 'dominica', 'dominicanRepublic', 'ecuador', 'egypt', 'elSalvador', 
  'equatorialGuinea', 'estonia', 'ethiopia', 'falklandIslands', 'faroeIslands', 'fiji', 'finland', 'france', 'frenchPolynesia', 'gabon', 
  'gambia', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'greenland', 'grenada', 'guadeloupe', 'guam', 'guatemala', 'guernsey', 
  'guinea', 'guineaBissau', 'guyana', 'haiti', 'honduras', 'hongKong', 'hungary', 'iceland', 'india', 'indonesia', 'ireland', 'isleOfMan', 
  'israel', 'italy', 'jamaica', 'japan', 'jersey', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 
  'latvia', 'lebanon', 'lesotho', 'liberia', 'liechtenstein', 'lithuania', 'luxembourg', 'macao', 'macedonia', 'madagascar', 'malawi', 
  'malaysia', 'maldives', 'mali', 'malta', 'marshallIslands', 'martinique', 'mauritania', 'mauritius', 'mayotte', 'mexico', 'moldova', 
  'monaco', 'mongolia', 'montenegro', 'montserrat', 'morocco', 'mozambique', 'namibia', 'nepal', 'netherlands', 'newCaledonia', 'newZealand', 
  'nicaragua', 'niger', 'nigeria', 'norway', 'oman', 'pakistan', 'palau', 'palestine', 'panama', 'papuaNewGuinea', 'paraguay', 'peru', 
  'philippines', 'poland', 'portugal', 'puertoRico', 'qatar', 'reunion', 'romania', 'rwanda', 'saintHelena', 'saintKittsAndNevis', 
  'saintLucia', 'samoa', 'sanMarino', 'saoTomeAndPrincipe', 'saudiArabia', 'senegal', 'serbia', 'seychelles', 'sierraLeone', 'singapore', 
  'sintMaarten', 'slovakia', 'slovenia', 'solomonIslands', 'southAfrica', 'southKorea', 'spain', 'sriLanka', 'stVincentAndGrenadines', 
  'suriname', 'swaziland', 'sweden', 'switzerland', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'timorLeste', 'togo', 'tonga', 
  'trinidadAndTobago', 'tunisia', 'turkey', 'turkmenistan', 'turksAndCaicosIslands', 'tuvalu', 'uganda', 'ukraine', 'unitedArabEmirates', 
  'unitedKingdom', 'unitedStates', 'uruguay', 'uzbekistan', 'vanuatu', 'vaticanCity', 'vietnam', 'virginIslandsUk', 'wallisAndFutunaIslands', 
  'zambia', 'zimbabwe'
];

const countriesObject = countries.reduce((acc, country) => {
  acc[country] = require(`./swiftCodes/${country}`);
  return acc;
}, {});

// Exportar el objeto
module.exports = countriesObject;
