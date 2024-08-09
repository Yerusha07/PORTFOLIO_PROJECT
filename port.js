function redirectToEmail() {
    var emailAddress = 'kandulayerusha23@gmail.com';  // Replace with the email address you want to redirect to
    var subject = 'Subject';  // Optional: Replace with the subject for the email

    var mailtoUrl = 'mailto:' + encodeURIComponent(emailAddress);
    if (subject) {
      mailtoUrl += '?subject=' + encodeURIComponent(subject);
    }

    // Redirect to the email client
    window.location.href = mailtoUrl;
  }

