// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_c378cml";
//     const templateID = "ttemplate_demydhl";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        var params = {
            from_name: name,
            from_email: email,
            message_html: message
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Your message has been sent successfully!');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, function(error) {
                console.error('Email sending failed:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    } else {
        alert('Please fill in all fields.');
    }
}
