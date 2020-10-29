```sh
# Create/Update l'app [magazine-dev]
helm upgrade -i magazine ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-tiller --namespace digitalexperience
```


## production
```yaml
env: 
    - name: STRAPI_SERVICE_URL
        value: strapi-sarenza-digitalexperience-cms-strapi
    - name: STRAPI_SERVICE_PORT
        value: "80"
```

## development

```yaml
env: 
    - name: STRAPI_SERVICE_URL
        value: strapi-dev-sarenza-digitalexperience-cms-strapi
    - name: STRAPI_SERVICE_PORT
        value: "80"
```