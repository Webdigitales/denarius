# webdigitales docker install for drupal 8 project 


## Prerequisites

### Install Docker

https://www.docker.com/get-started

### Install Docker Compose

https://docs.docker.com/compose/install/

## Installation

Create project via composer

```bash
composer create-project webdigitales/wdi_docker_drupal:dev-master some-dir --no-interaction --no-install
```
where `some-dir` is your project directory. 
More info about this command : https://getcomposer.org/doc/03-cli.md#create-project<br>
Project settings environment in `.env` file <br>
Docker override for your local development in `docker-compose.override.yml` file

Run Docker

```bash
"docker-compose up -d" to run in background or "docker-compose up" to run in terminal tab
```

Run Composer install in your docker container

```bash
docker-compose exec -u application php_apache composer install 
```

Run command drupal:site-setup in your docker container execute tasks in runner.yml.dist

```bash
docker-compose exec -u application php_apache ./vendor/bin/run drupal:site-setup
```


Create drupal 8 website in your docker container

```bash
docker-compose exec -u application php_apache ./vendor/bin/run drupal:site-install
```

The development site web root should be in the `web` directory.<br>
The site should be available at [http://127.0.0.1:8080/](http://127.0.0.1:8080/).<br>
The PhpMyadmin should be available at [http://127.0.0.1:8181/](http://127.0.0.1:8181/)

## Git

Create your project on [Webdigitales github repo](https://github.com/Webdigitales?tab=repositories)

Then follow these instructions

```bash
git init
git add -A
git commit -m "Your first commit message"
git remote add origin git@github.com:Webdigitales/YOUR_REPO_NAME.git
git push -u origin master
```
Change `YOUR_REPO_NAME` by your project name your used when created you repo on github

## PHP versions

You can change the version of PHP by editing the file `docker/apache/Dockerfile` and changing the line

```dockerfile
FROM webdevops/php-apache-dev:7.1
```

into

```dockerfile
FROM webdevops/php-apache-dev:tag
```

Docker image `tags` available in [Dockerfile Documentation](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-apache-dev.html)
