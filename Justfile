build-prod: 
    docker build -t instahomes-landing-prod-ci -f Dockerfile.prod .

build-dev: 
    docker build -t instahomes-landing-old -f Dockerfile .
