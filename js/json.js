//JavaScript Object Notation or, JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


const shop = { 
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);// you can't acces property in stringified situation
//if you want to access object property you need to pass stringified
const converted = JSON.parse(shopStringified);
console.log(converted.owner);