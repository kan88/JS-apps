Модуль должен описывать и давать понимание, какие у него есть зависимости. 
Например, модуль может зависеть от других модулей.

// Файл сain.js
import {name} from './mother.js';

`My mother is ${name}`; // My mother is Eve
Модуль сain.js зависит от модуля mother.js, а конкретно от переменной name,
 полученной из этого модуля.

Про синтаксис import и export сейчас нужно знать лишь то, что они есть, 
что import — это импорт, а export — экспорт в прямых своих значениях. О всех остальных нюансах мы поговорим далее.

Модуль должен описывать интерфейс — методы и свойства — которые он может предоставить другим модулям. Чтобы предыдущий пример работал, нам нужно показать, что у модуля mother.js в интерфейсе есть свойство name, которое могут использовать другие модули.

// Файл mother.js
const name = 'Eve';

export {name};

// Файл mother.js
const motherName = 'Eve';

export {motherName};
// Файл father.js
const fatherName = 'Adam';

export {fatherName};
// Файл сain.js
import {motherName} from './mother.js';
import {fatherName} from './father.js';

`My mother is ${motherName}`; // My mother is Eve
`My father is ${fatherName}`; // My father is Adam
Чтобы браузер считал JS-файл модулем, его нужно подключить как модуль:

<script type="module" src="сain.js"></script>