### Message correct
```bash
git commit -m "type(scope): message description"
```

### Type
Indicate what the change is about.
#### feat
El tipo feat se utiliza para especificar una nueva funcionalidad que ha sido agregada
```bash
git commit -m "feat(auth): Add register form to website"
```
#### fix
El tipo fix se utiliza para corregir un error en la base de codigo.
```bash
git commit -m "fix(auth): Fix the register form to website"
```
#### docs
El tipo docs se utiliza para especificar cambios unicamente relacionados con la documentacion
```bash
git commit -m "docs(auth): Correct spelling of header in the register form"
```
#### style
El tipo style se utiliza para cambios que no afectan el significado del codigo, como espacios en blanco, formato del documento, falta de punto y coma, etc
```bash
git commit -m "style(auth): Change background color in the login form"
```
#### refactor
El tipo refactor se utiliza para identificar cambios de desarrollo relacionados con la modificacion de la base de codigo, que no agrega caracteristicas ni corrigen un error.
Ejemplo: Eliminar codigo redundante, simplificar el codigo, cambiar el nombre de variables etc
```bash
git commit -m "refactor(auth): Rename login validation variables to make code easy to read."
```
#### perf (Rendimiento)
El tipo perf se utiliza para identificar cambios en la produccion relacionados con mejoras de rendimiento compatibles con versiones anteriores
```bash
git commit -m "perf(docs-infra): Avoid unnecessary I/O in ng-packages-installer"
```
#### test
El tipo test se utiliza para especificar cambios unicamente relacionados con las pruebas, como refactorizacion de pruebas existentes o la incorporacion de pruebas nuevas.
```bash
git commit -m "test(compiler-CLI): Add test for missing-translation parameter"
```
#### build
El tipo build se utiliza para identificr los cambios relacionados con el sistema de compilacion (que involucran scripts, configuraciones o herramientas) y dependencias de los paquetes
```bash
git commit -m "build(docs-infra): Upgrade webpack-CLI to 3.1.2"
```
#### ci (Continue Integration)
El tipo ci se utiliza para identificar los cambios relacionados con el sistema de implementacion e integracion continua, que involucran scripts, configuraciones o herraminetas
```bash
git commit -m "ci(auth): Update upload-server to run on node.js v10"
```
#### chore (Task)
El tipo chore se utiliza para incluir todo tipo de confirmaciones, por ejemplo si estas implementando una sola caracteristica y tiene sentido dividir el trabajo en varias confirmaciones, deberias de marcar una confirmacion como una **caracteristica** y el resto como una **tarea**.
```bash
git commit -m "chore(core): Add webpackage"
```
#### revert
El tipo docs se utiliza para especificar que regresamos a una confirmacion anterior
```bash
git commit -m "revert(auth): Revert changes in login due to a broken functional ability"
```

### Scope
Que parte del proyecto en el que estamos trabajando 
### Description 
verb is present (always)