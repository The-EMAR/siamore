console.log('js checkout');

// Accordion 

const customCheckout = document.querySelector('.custom-checkout');

if (customCheckout) {
  let accordions = customCheckout.querySelector('.accordions');

  if (accordions) {
    let getAccordions = accordions.querySelectorAll('.accordion__head');

    // Init 
    getAccordions.forEach( (loop, index) =>{     
      if (index == 0) {
        loop.parentElement.classList.add('is-open');
      } else {
        loop.parentElement.classList.add('is-hide');
        loop.parentElement.classList.remove('is-open');
      }
    });

    if (getAccordions.length > 0) {
      getAccordions.forEach(el => {
        let itemAccordion = el;

        itemAccordion.addEventListener('click',()=>{
          if (itemAccordion.classList.contains('is-open')) {

            getAccordions.forEach( (loop, index) =>{
              loop.parentElement.classList.add('is-hide');              
              loop.parentElement.classList.remove('is-open');              
            });

            itemAccordion.parentElement.classList.add('is-hide');
            itemAccordion.parentElement.classList.remove('is-open');
          } else {

            getAccordions.forEach( (loop, index) =>{
              loop.parentElement.classList.add('is-hide');              
              loop.parentElement.classList.remove('is-open');              
            });

            itemAccordion.parentElement.classList.remove('is-hide');
            itemAccordion.parentElement.classList.add('is-open');
          }
        });
      });
    }
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // Function to check if a query parameter exists in the current URL
  function hasQueryParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(paramName);
  }

  // Check if the 'contact_posted' query parameter is true in the current URL
  const isContactPosted = hasQueryParam('contact_posted') && window.location.search.includes('contact_posted=true');

  // Now you can use the 'isContactPosted' variable to determine if the parameter is present and true
  if (isContactPosted) {
    // layerOffer.classList.remove('is-active');
    // layerSubmit.classList.remove('is-active');
    // mainBody.classList.add('has-overflow');
    // mainHtml.classList.add('has-overflow');

    window.location.href="https://siamore.net/pages/ty-page";
  } else {
    // console.log('The form was not successfully posted.');
  }
});