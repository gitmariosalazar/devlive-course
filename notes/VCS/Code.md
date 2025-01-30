# Commit
## devlive-course
Este proyecto documenta comandos utilizados en el flujo de trabajo de Git y PowerShell. A continuación, una breve descripción de cada comando ejecutado:

### Comandos usados

1. **`echo "# devlive-course" >> README.md`**  
   Crea un archivo `README.md` y añade el título del proyecto.

2. **`git status`**  
   Muestra el estado del repositorio, como archivos modificados, añadidos, o listos para commit.

3. **`git add .\notes\`**  
   Añade todos los archivos dentro de la carpeta `notes` al área de preparación (staging area).

4. **`git commit -m "feat(notes): Add notes folder - Agile Methodology, DEV Environment - Version Control System"`**  
   Crea un commit con un mensaje detallado sobre los cambios realizados.

5. **`git branch notes`**  
   Crea una nueva rama llamada `notes`.

6. **`git checkout notes`**  
   Cambia a la rama `notes`.

7. **`git push -uf origin notes`**  
   Sube la rama `notes` al repositorio remoto y la establece como rama de seguimiento.

8. **`git checkout -b develop`**  
   Crea una nueva rama `develop` y cambia a ella.

9. **`git checkout -b version-control-system`**  
   Crea una rama `version-control-system` y cambia a ella.

10. **`git branch -a`**  
    Lista todas las ramas locales y remotas del repositorio.

11. **`git branch`**  
    Muestra solo las ramas locales.

12. **`git checkout -b bitcoin-doc`**  
    Crea y cambia a una nueva rama llamada `bitcoin-doc`.

13. **`git add .\modules\version-control-system\bitcoin-doc\index.txt`**  
    Añade un archivo específico al área de preparación.

14. **`git commit -m "feat(bitcoin-doc): add document title"`**  
    Realiza un commit con un mensaje que describe la adición del título del documento.

15. **`git commit -m "feat(bitcoin-doc): add an intro to the document"`**  
    Commit que describe la adición de una introducción al documento.

16. **`git commit -m "feat(bitcoin-doc): add an body to the document"`**  
    Commit que describe la adición del cuerpo del documento.

17. **`git commit -m "feat(bitcoin-doc): add a conclusion to the document"`**  
    Commit que describe la adición de una conclusión al documento.

18. **`git log`**  
    Muestra el historial de commits del repositorio.
    
19. **`git reset --soft HEAD~1`**  
    Revierte el último commit manteniendo los cambios en el área de preparación.

20. **`git reset --hard HEAD~1`**  
    Elimina el último commit y todos los cambios realizados.

Cada comando documentado refleja pasos importantes para gestionar ramas, commits y el flujo de trabajo en Git y PowerShell.

---

--- 
### Conflicts
1. **`git log`** Muestra el historial de commits del repositorio. 
2. **`git checkout 46e1bd264a4ebb601e5ce6420fd00a0955213737`** Cambia el estado del repositorio a un commit específico identificado por su hash. 
3. **`git checkout bitcoin-doc`** Cambia a la rama `bitcoin-doc`. 
4. **`git checkout -b intro`** Crea una nueva rama llamada `intro` y cambia a ella.
5. **`git branch -D intro`** Elimina la rama `intro` de forma forzada. 
6. **`git checkout version-control-system`** Cambia a la rama `version-control-system`. 
7. **`git merge bitcoin-doc`** Fusiona la rama `bitcoin-doc` en la rama actual. 
8. **`git merge --abort`** Cancela un proceso de fusión en curso, revirtiendo el estado del repositorio. 
9. **`git add .\modules\version-control-system\bitcoin-doc\index.txt`** Añade un archivo específico al área de preparación (staging). 
10. **`git commit -m "Remove text"`** Realiza un commit describiendo la eliminación de texto. 
11. **`git commit -m "Add new text line"`** Realiza un commit describiendo la adición de una nueva línea de texto. 
12. **`git reset --hard HEAD~3`** Revierte los últimos tres commits eliminando los cambios realizados. 
13. **`git reset --hard HEAD~1`** Revierte el último commit eliminando los cambios realizados. 
#### Notas 
- Los comandos de `merge` son esenciales para integrar cambios entre ramas. - El uso de `reset` puede ser riesgoso, ya que elimina de forma permanente los cambios. Asegúrate de entender su impacto antes de ejecutarlo.
---

### Rebase
