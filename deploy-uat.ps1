$version=Read-Host "Please enter a target version"

$replicaCount=2

Write-Host $version
$Env:VERSION = $version

docker-compose build

az acr login -n srzlab
docker-compose push

gcloud container clusters get-credentials srz-gke-hp-99aad13f --zone europe-west1-b --project srz-prj-a5a67395

# --recreate-pods to force update pods
helm upgrade -i --set replicaCount=$replicaCount --set image.tag=$version --wait magazine ./helm/sarenza-digitalexperience-magazine --tiller-namespace digitalexperience-uat-tiller --namespace digitalexperience-uat
