const checkCookies = () => {
  function getCookie(nameOfCookie) {
    let regExpCookie = new RegExp('(; )', 'g');
    if (document.cookie.length == 0) return null;
    let cookies = document.cookie.split(regExpCookie);
    for (let i = 0; i < cookies.length; i++) {
      let regInfo = new RegExp('=', 'g');
      let infos = cookies[i].split(regInfo);
      if (infos[0] == nameOfCookie) {
        return decodeURIComponent(infos[1]);
      }
    }
    return null;
  }

  let CookieValue = getCookie('s_cmp');

  function validate(CookieValue) {
    let CookieParse = JSON.parse(CookieValue);
    let CookieValidate = CookieParse.CookieConsent.split(/, ?/);

    return CookieValidate;
  }

  if (CookieValue != null) {
    let result = validate(CookieValue);

    return result;
  }
};

export default checkCookies;

