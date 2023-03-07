# Instrucciones

## Instalación

Inicialización de git
```sh
$ git init
```
Añadimos el repositorio remoto
```sh
$ git remote add origin git@bitbucket.org:e-learningTeam/ncampus-qa.git
```
Descargamos solo la rama de master para hacer branching
```sh
$ git pull origin master
```
Realizamos el branching
```sh
$ git branch tests/feature-name
```
Nos movemos a esa rama
```sh
$ git checkout tests/feature-name
```
Instalamos las dependencias de node
```sh
$ npm install
```



y a programar!



## Merge Strategy
Usaremos una estrategia de Pull Request contra master donde los reviewers realizarán su pertinente revisión.

Para iniciar esta revisión, deberá pasar todos los tests ejecutados en la pipeline. 

- No está permitido reescribir la historia de git.
- No está permitido mergear directamente sobre master.


## Branches
- **master** : Rama donde la pipeline ejecutará los tests
- **tests/*** : Ramas de desarrollo de tests
- **ci/*** : Rama de CI

# Comandos

