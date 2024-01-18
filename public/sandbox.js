"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
logDetails('17', 'testing');
greet({
    name: 'martin',
    uid: 17
});
