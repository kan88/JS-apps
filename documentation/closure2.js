// 1. нам нужна функция которая будет подставлять www и .ru

const getDomain = function(a, b) {
    return function(name) {
        return a + name + b
    }
} 

const ruDomain = getDomain('www.', '.ru');
const comDomain = getDomain('www.', '.com');

console.log(ruDomain('belka'));
console.log(comDomain('belka'));


