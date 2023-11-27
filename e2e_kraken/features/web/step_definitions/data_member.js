
const { faker } = require("@faker-js/faker");
const data = () => {
    const fname = faker.person.firstName();
    const lname = faker.person.lastName();
    const name = fname +' '+ lname;
    const email = fname.charAt(0)+lname+'@'+faker.internet.domainName(); 
    const emailinvalida = fname.charAt(0)+'@'+lname+'@'+faker.internet.domainName(); 
    const emailinvalidp = '.'+fname.charAt(0)+lname+'@'+faker.internet.domainName(); 
    const emailinvalids = fname.charAt(0)+' '+lname+'@'+faker.internet.domainName(); 
    const emailinvalidl = faker.string.alpha(198-email.length)+email;
    const nameinvalid = faker.string.alpha(192);
    const note = faker.lorem.sentence(20);
    const noteinvalid = faker.lorem.sentence(200);
    const prueba = email.length -71;
    return {
        name,
        email,
        emailinvalida,
        emailinvalidp,
        emailinvalids,
        emailinvalidl,
        nameinvalid,
        note,
        noteinvalid,
        prueba
    };
}

module.exports = {
    data
}