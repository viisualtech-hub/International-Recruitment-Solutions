document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-enquiry-form]'); if (!form) return;
  const typeSelect = form.querySelector('[name="enquiryType"]'); const file = form.querySelector('[name="cv"]'); const success = form.querySelector('.success');
  const params = new URLSearchParams(window.location.search); if (params.get('type')) typeSelect.value = params.get('type');
  form.addEventListener('submit', event => {
    event.preventDefault(); form.querySelectorAll('.error').forEach(item => item.textContent = ''); success.classList.remove('show'); let valid = true;
    form.querySelectorAll('[required]').forEach(field => { if (!field.value.trim()) { showError(field, 'This field is required.'); valid = false; } });
    const email = form.querySelector('[name="email"]'); if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showError(email, 'Please enter a valid email address.'); valid = false; }
    const phone = form.querySelector('[name="phone"]'); if (phone.value && !/^[+\d\s().-]{7,}$/.test(phone.value)) { showError(phone, 'Please enter a valid phone number.'); valid = false; }
    if (file.files[0]) { const allowed = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']; if (!allowed.includes(file.files[0].type) || file.files[0].size > 5 * 1024 * 1024) { showError(file, 'Please upload a PDF, DOC or DOCX file up to 5 MB.'); valid = false; } }
    if (!valid) return;
    success.classList.add('show'); form.reset(); typeSelect.value = params.get('type') || '';
  });
  function showError(field, message) { const error = field.closest('.field').querySelector('.error'); if (error) error.textContent = message; field.setAttribute('aria-invalid','true'); }
});
