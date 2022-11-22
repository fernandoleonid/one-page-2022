function goToInstagram() {
  let instagram = document.getElementById("instagram");
  instagram.setAttribute(
    onclick,
    (window.location = "https://www.instagram.com")
  );
}

function goToFacebook() {
  let facebook = document.getElementById("facebook");
  facebook.setAttribute(
    onclick,
    (window.location = "https://www.facebook.com")
  );
}

function goToTwitter() {
  let twitter = document.getElementById("twitter");
  twitter.setAttribute(onclick, (window.location = "https://www.twitter.com"));
}

function goToLinkedin() {
  let linkedin = document.getElementById("linkedin");
  linkedin.setAttribute(
    onclick,
    (window.location = "https://www.linkedin.com")
  );
}
