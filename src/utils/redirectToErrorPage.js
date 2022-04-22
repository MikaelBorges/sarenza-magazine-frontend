import constant from 'utils/constant';

export function redirectToErrorPage(res) {
  res.statusCode = 301;
  res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
  return { props: {} };
}
