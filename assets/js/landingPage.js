const StripperInfo = document.querySelector('#emailCollect');
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


    StripperInfo.appendChild(li);
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
//END OF DATA COLLECT

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        '' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-NKDMSK6');



$(document).ready(function () {


    var slider2 = document.getElementById('sliderRefine');

    noUiSlider.create(slider2, {
        start: [42, 880],
        connect: true,
        range: {
            'min': [30],
            'max': [900]
        }
    });

    var limitFieldMin = document.getElementById('price-left');
    var limitFieldMax = document.getElementById('price-right');

    slider2.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            limitFieldMax.innerHTML = $('#price-right').data('currency') + Math.round(values[handle]);
        } else {
            limitFieldMin.innerHTML = $('#price-left').data('currency') + Math.round(values[handle]);
        }
    })
     //  Activate the Tooltips
     $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

     //    Activate bootstrap-select
     if ($(".selectpicker").length != 0) {
         $(".selectpicker").selectpicker({
             iconBase: "now-ui-icons",
             tickIcon: "ui-1_check"
         });
     };

 
});