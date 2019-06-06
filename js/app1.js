const emailCollectOne = document.querySelector('#emailCollect');
const form1 = document.querySelector('#formONE')
// const form2 = document.querySelector('#emailCollectSeller')


function renderEmail(doc){
    let li = document.createElement('li');
    let Name = document.createElement('span');
    let phoneNumber = document.createElement('span');
    let Address = document.createElement('span');
    let over18 = document.createElement('span');
    let stripperL = document.createElement('span');
    let email = document.createElement('span');
   
  

    li.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    phoneNumber.textContent = doc.data().phoneNumber;
    Address.textContent = doc.data().Address;
    over18.textContent = doc.data().over18;
    stripperL.textContent = doc.data().stripperL;
    email.textContent = doc.data().email;



    // li.appendChild(emailBuyer);
    // li.appendChild(emailSeller);


    emailCollectOne.appendChild(li);
}
    // getting data
db.collection('FormInfo').get().then(snapshot => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        renderEmail(doc);
    });
});

// saving data
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('FormInfo').add({
        Name: form1.Name.value,
        phoneNumber: form1.phoneNumber.value,
        Address: form1.Address.value,
        over18: form1.over18.value,
        stripperL: form1.stripperL.value,
        email: form1.email.value,

    });
    form1.Name.value = '';
    form1.phoneNumber.value = '';
    form1.Address.value = '';
    form1.over18.value = '';
    form1.stripperL.value = '';
    form1.email.value = '';

});

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('FormInfo').add({
        emailSeller: form2.emailSeller.value
    });
    form2.emailSeller.value = '';

});