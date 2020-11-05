docker-compose build --force-rm --no-cache
az acr login -n srzlab
docker-compose push
helm upgrade --recreate-pods -i magazine ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-tiller --namespace digitalexperience