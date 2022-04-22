const getCookieObject = () => {
  return document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    let tried = null;
    try {
      tried = JSON.parse(decodeURIComponent(value));
    } catch (e) {
      console.error(e);
    }
    prev[name] = tried || value;
    return prev;
  }, {});
};

const getCookieValue = (name) => {
  const cookieObject = getCookieObject();
  return cookieObject && cookieObject[name];
};

const getCookieConsentList = () => {
  const consentCookie = getCookieValue('s_cmp');
  return consentCookie && consentCookie.CookieConsent && consentCookie.CookieConsent.split(/, ?/);
};

export { getCookieConsentList, getCookieValue };
