docker-compose build --force-rm --no-cache
az acr login -n srzlab
docker-compose push
gcloud container clusters get-credentials srz-gke-hp-99aad13f --zone europe-west1-b --project srz-prj-a5a67395
helm upgrade --recreate-pods -i magazine-dev ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-dev-tiller --namespace digitalexperience-dev