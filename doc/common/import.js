Переименованный экспорт и импорт
Бывают случаи, когда в одном модуле экспортируется переменная, которая уже существует в другом:

// Файл сain.js
import {name} from './mother.js';
import {name} from './father.js';

const name = 'Сain';

// Три переменных "name"? Не может быть!
Объявлена переменная в модуле или импортирована — неважно. Имя занято. Да, можно, конечно, изменить название в экспортирующем модуле. Но, во-первых, это не гибкое решение, во-вторых, если модуль чужой, там ничего поменять не получится.

На эти случаи в спецификации есть решение. Импортируемые переменные можно переименовывать:

// Файл сain.js
import {name as motherName} from './mother.js';
import {name as fatherName} from './father.js';

const name = 'Сain';

`My mother is ${motherName}`; // My mother is Eve
`My father is ${fatherName}`; // My father is Adam
`My name is ${name}`; // My name is Сain
Таким же образом можно переименовать переменную при экспорте. Случай более редкий, но такая возможность есть:

// Файл mother.js
const name = 'Eve';

export {name as motherName};
// Файл сain.js
import {motherName} from './mother.js';