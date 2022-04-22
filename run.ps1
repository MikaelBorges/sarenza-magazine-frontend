yarn --cwd src build
$env:STRAPI_SERVICE_HOST='localhost'
$env:STRAPI_SERVICE_PORT='1337'
$env:STRAPI_SERVICE_SCHEME='http' 
yarn --cwd src start -p 80