```javascript
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-enquiry-form]');

  if (!form) return;

  const typeSelect = form.querySelector('[name="enquiryType"]');
  const file = form.querySelector('[name="cv"]');
  const success = form.querySelector('.success');
  const submitButton = form.querySelector('button[type="submit"]');

  const params = new URLSearchParams(window.location.search);

  if (params.get('type')) {
    typeSelect.value = params.get('type');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    form.querySelectorAll('.error').forEach((item) => {
      item.textContent = '';
    });

    success.classList.remove('show');

    let valid = true;

    /*
     * Required-field validation
     */
    form.querySelectorAll('[required]').forEach((field) => {
      if (!field.value.trim()) {
        showError(field, 'This field is required.');
        valid = false;
      } else {
        field.removeAttribute('aria-invalid');
      }
    });


    /*
     * Email validation
     */
    const email = form.querySelector('[name="email"]');

    if (
      email.value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    ) {
      showError(
        email,
        'Please enter a valid email address.'
      );

      valid = false;
    }


    /*
     * Phone validation
     */
    const phone = form.querySelector('[name="phone"]');

    if (
      phone.value &&
      !/^[+\d\s().-]{7,}$/.test(phone.value)
    ) {
      showError(
        phone,
        'Please enter a valid phone number.'
      );

      valid = false;
    }


    /*
     * CV validation
     *
     * Maximum size: 5 MB
     * Allowed: PDF, DOC, DOCX
     */
    if (file && file.files[0]) {
      const selectedFile = file.files[0];

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (
        !allowedTypes.includes(selectedFile.type) ||
        selectedFile.size > 5 * 1024 * 1024
      ) {
        showError(
          file,
          'Please upload a PDF, DOC or DOCX file up to 5 MB.'
        );

        valid = false;
      }
    }


    /*
     * Stop if validation failed
     */
    if (!valid) {
      return;
    }


    /*
     * Prevent multiple submissions
     */
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.innerHTML;
      submitButton.innerHTML = 'Sending...';
    }


    try {

      /*
       * Send the enquiry to Formspree
       */
      const response = await fetch(
        'https://formspree.io/f/xdeaaaow',
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        }
      );


      /*
       * Successful submission
       */
      if (response.ok) {

        success.textContent =
          'Thank you for contacting International Recruitment Solutions. Your enquiry has been sent successfully. Our team will contact you shortly.';

        success.classList.add('show');

        form.reset();

        typeSelect.value =
          params.get('type') || '';

        form.querySelectorAll('[aria-invalid]').forEach((field) => {
          field.removeAttribute('aria-invalid');
        });

      } else {

        /*
         * Formspree returned an error
         */
        let errorMessage =
          'We could not send your enquiry. Please try again or contact us directly.';

        try {
          const data = await response.json();

          if (data.errors && data.errors.length > 0) {
            errorMessage = data.errors
              .map((error) => error.message)
              .join(' ');
          }
        } catch (error) {
          // Keep the default error message.
        }

        alert(errorMessage);
      }

    } catch (error) {

      /*
       * Network/server error
       */
      alert(
        'There was a problem sending your enquiry. Please check your internet connection and try again.'
      );

    } finally {

      /*
       * Restore the button
       */
      if (submitButton) {
        submitButton.disabled = false;

        if (submitButton.dataset.originalText) {
          submitButton.innerHTML =
            submitButton.dataset.originalText;
        }
      }

    }

  });


  /*
   * Display validation error
   */
  function showError(field, message) {

    const fieldContainer =
      field.closest('.field');

    const error =
      fieldContainer
        ? fieldContainer.querySelector('.error')
        : null;

    if (error) {
      error.textContent = message;
    }

    field.setAttribute(
      'aria-invalid',
      'true'
    );

  }

});
```
