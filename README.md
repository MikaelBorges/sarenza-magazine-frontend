
## Installation

/!\ Mettre à jour le .env (dupliquer le .env.example)

``` sh
STRAPI_SERVICE_HOST=localhost
STRAPI_SERVICE_PORT=9337 # Le bon numéro de port
STRAPI_SERVICE_SCHEME=http
IS_MOBILE=true/false # Pour changer de mode (dev only)
```

## Dependencies 

### Globales 

```sh
# In order to build a clean husky install :
# Go to .git containing folder
$ yarn add husky@next
$ npx husky install

# In this solution, go to root folder (where is the .git folder)
$ yarn
```

```sh
# Create/Update l'app [magazine-dev]
helm upgrade -i magazine ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-tiller --namespace digitalexperience
# helm upgrade --recreate-pods -i magazine-dev ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-dev-tiller --namespace digitalexperience-dev


kubectl get po -n digitalexperience-dev
kubectl logs -f -n digitalexperience-dev -p magazine-dev-sarenza-digitalexperience-magazine-cbf7d95c9-t9h4x -c sarenza-digitalexperience-magazine

```


## production

```yaml
env: 
- name: STRAPI_SERVICE_HOST
    value: "strapi-sarenza-digitalexperience-cms-strapi"
- name: STRAPI_SERVICE_PORT
    value: "80"
- name: STRAPI_SERVICE_SCHEME
    value: "http"
```

## development

```yaml
env: 
- name: STRAPI_SERVICE_HOST
    value: "strapi-dev-sarenza-digitalexperience-cms-strapi"
- name: STRAPI_SERVICE_PORT
    value: "80"
- name: STRAPI_SERVICE_SCHEME
    value: "http"
```