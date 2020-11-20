# docker-compose build --force-rm --no-cache
# az acr login -n srzlab
# docker-compose push
# gcloud container clusters get-credentials srz-gke-hp-99aad13f --zone europe-west1-b --project srz-prj-a5a67395
# helm upgrade --recreate-pods -i magazine-dev ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-dev-tiller --namespace digitalexperience-dev
gcloud container clusters get-credentials srz-gke-prd-36d82766 --zone europe-west1-b --project srz-prj-ec4f7b6b
helm upgrade --recreate-pods -i magazine ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-tiller --namespace digitalexperience