# Aeternum Analytics — Modern Static Website

This is a custom, responsive Aeternum Analytics website built with plain HTML, CSS and JavaScript. No paid AI website builder is required.

## Included
- Premium dark/light analytics aesthetic
- Responsive desktop/tablet/mobile layouts
- Existing Aeternum logo assets
- Interactive capability modals
- Interactive data intelligence tabs
- Interactive industry selector
- Animated process timeline / scroll reveals
- 30-Day Pilot section
- Insight/editorial section
- Consultation form
- WhatsApp and LinkedIn placeholders
- SEO metadata + favicon

## Consultation form → email
The form uses FormSubmit's free form endpoint so a static site can forward submissions to:
`aeternumanalytics.in@gmail.com`

FormSubmit's official documentation says you can point an HTML form at its endpoint, submit once to trigger an email confirmation, and then submissions are forwarded to your mailbox. It also supports `_replyto` and custom `_subject` fields. See: https://formsubmit.co/ and https://formsubmit.co/documentation

IMPORTANT: On the first live submission, check the Aeternum Gmail inbox (and spam) for FormSubmit's activation/confirmation email and confirm the form. Until the form is confirmed, FormSubmit holds submissions for activation.

## Add WhatsApp / LinkedIn later
Open `script.js` and update:

```js
const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/91XXXXXXXXXX",
  linkedin: "https://www.linkedin.com/company/your-company/"
};
```

Use the exact WhatsApp and LinkedIn URLs for the accounts you actually create. Leave them blank until then.

## GitHub Pages deployment
1. Open your GitHub repository.
2. Upload all files from this folder, preserving the `assets/` folder.
3. Commit to `main`.
4. Go to **Settings → Pages**.
5. Choose **Deploy from a branch**.
6. Select `main` and folder `/ (root)`.
7. Save. GitHub will provide the site URL.

## Custom domain later
A custom domain can be added later through GitHub Pages settings. The current website does not require a paid hosting plan to be deployed as a static site.
