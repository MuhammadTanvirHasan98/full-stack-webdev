

const numbers = [3, 2, 1, 5, 15, 7, 5];

const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log('Has Even Number:', hasEvenNumber); // true


const currentUserRole = ['user', 'editor', 'user'];
const featureAccessRoles = ['admin', 'manager'];

const hasAccess = currentUserRole.some(role => featureAccessRoles.includes(role));
console.log('Has Access to Feature:', hasAccess); // false