# International Recruitment Solutions

A no-dependency HTML5, CSS3 and vanilla JavaScript website for International Recruitment Solutions (Pty) Ltd.

## Run locally

Open `index.html` directly in a browser, or use the VS Code Live Server extension. No build step or package installation is required.

## Images

The supplied logo is stored at `assets/logo/company-logo.png` and is used in the header and footer. Uploaded photographs live in `assets/hero/`, `assets/services/` and `assets/training/`. Image paths are centralized in `js/image-manager.js`; edit `SITE_IMAGES` to replace, add or reorder images. Missing files intentionally display an upload placeholder.

## Forms and privacy

The enquiry form validates in the browser only and shows a local success state. It does not send email, permanently store CVs or upload data. A secure server-side endpoint should later receive the form payload, validate it again, send to `admin@interecruitment.co.za`, and store CVs using an appropriate access-controlled service. Do not put private API keys in frontend JavaScript.
