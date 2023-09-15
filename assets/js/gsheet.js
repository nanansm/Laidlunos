


const scriptURL = 'https://script.google.com/macros/s/AKfycbzETkUHS-sFdfoEJOVaHQJjofaTOnG_EonkX1in4A9FtFiHAD9razP2EXUuxjY969GF/exec'

const form = document.forms['lp-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Terima Kasih" ))
  //.then(() => { window.location.reload(); })
  .catch(error => console.error('Masukan Data Kamu dulu yah!', error.message)) })


function towa()
{
   window.location.href="https://api.whatsapp.com/send?phone=6281122332060&text=Halo%20Laidlunos,%20aku%20mau%20claim%20Discount%20Produk%20Simple%20Flek%20Bundle%20yah!";
    
}


//function gotowhatsapp() {

  //  var name = document.getElementById("name").value;
  //  var phone = document.getElementById("phone").value;
  //  var email = document.getElementById("email").value;
  //  var service = document.getElementById("service").value;

  //  var url = "https://wa.me/628112131496?text="
  //     + "Name: " + name + "%0a"
  //    + "Phone: " + phone + "%0a"
  //   + "Email: " + email + "%0a"
  //  + "Service: " + service;

    // window.open(url, '_blank').focus(); }
