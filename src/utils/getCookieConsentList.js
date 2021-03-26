const getCookieConsentList = () => {
  function getCookie(nameOfCookie) {
    let regExpCookie = new RegExp('(; )', 'g');
    if (document.cookie.length == 0) return null;
    let cookiesSplitedList = document.cookie.split(regExpCookie);
    for (let i = 0; i < cookiesSplitedList.length; i++) {
      let regInfo = new RegExp('=', 'g');
      let propertiesList = cookiesSplitedList[i].split(regInfo);
   
      if (propertiesList[0] == nameOfCookie) {
        return decodeURIComponent(propertiesList[1]);
      }
    }
    return null;
  }

  let cookieObject = getCookie('s_cmp');

  function getFinalObject(cookieObject) {
    let cookieObjectParsed = JSON.parse(cookieObject);
    let cookieConsentList = cookieObjectParsed.CookieConsent.split(/, ?/);

    return cookieConsentList;
  }

  if (cookieObject != null) {
    let resultCookieList = getFinalObject(cookieObject);
    return resultCookieList;
  }
};

export default getCookieConsentList;

