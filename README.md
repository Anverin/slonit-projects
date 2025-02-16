# slonit-projects

### _Инициализация гит в папке:_
**git init**

### _Добавление в отслеживание и фиксация изменений:_
- **`git status`**
- **`git add .`**
- **`git commit -m "first commit"`**

### _Связывание локального и удаленного репозитория:_
- **`git remote add origin адрес_репозитория`**
- **`git push -u origin master`**


### _Взять код из удаленного репозитория:_
**`git pull`**

### _Вывести содержимое файла:_
**`cat папка/файл`**

### _Настройки гита:_
***--system*** (C:\ProgramData\Git\config)  
***--global*** - для текущего пользователя (C:\Users\<USERNAME>\.gitconfig)  
***--local*** (default) - для проекта <project>/.git/config)  

### _Смена текстового редактора гита:_
**`git config --global core.editor название_редактора`**

##### _[Примеры текстовых редакторов](https://git-scm.com/book/ru/v2/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-C:-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F)_

### _Алиасы для команд_
**`git config --global alias.СВОЙ_АЛИАС "первоначальная команда"`**

_В алиас можно записать сразу несколько команд:_
**`git config --global alias.ALIAS '!git ...; git ...'`**

**`git config -h`** - выведет все доступные команды

**`git help config`** - помощь по команде + настройки конфигурации

### _Листалка (LESS)_  
внизу после : можно ввести интересующую команду (выполнить поиск)  
- **/** - поиск по строке или регулярному выражению  
- **n** - поиск вперед  
- **Shift + n** - поиск назад  
- **q** - выход из листалки  

### _При сохранении коммита через текстовый редактор:_
- комментарий - в верхней строке (<= 50 символов, без точки в конце!),
дальше при необходимости можно отбить пустую и добавить строки с пояснениями, каждую начиная с *

_Коммиту можно изменить автора и авторскую дату:_
**`git commit --author="Имя Фамилия <почта>" --date="..."`**
Но имя сделавшего коммит (коммиттера) и дата создания не изменятся, будут также отображаться.  
Можно также изменить коммиттера: committer вместо author.  

**Поскольку гит не видит пустые папки, при необходимости и отслеживания в них нужно добавлять нулевые файлы .gitkeep**  

**То, что не нужно отслеживать, должно упоминаться в .gitignore в корне проекта.**

### _Добавить в отслеживание что-то игнорируемое (например, файл из игнорируемой папки):_
**`git add -f папка/файл`**

_Флаг **-p** позволяет выбрать, коммитить ли отдельные изменения в файле._

**`git add -p index.html`** - гит предложит варианты по каждой измененной строке

**`git commit -a`** - вносит в отслеживание изменения файлов, которые уже отслеживаются.
_Если файлы уже отслеживаются, изменения в них можно закоммитить одной командой:_
**`git commit -am "комментарий"`**

**`git commit -m 'комментарий' .gitignore`** - коммит с указанием конкретного пути к конкретному файлу (только уже отслеживаемому)

_Можно сделать алиас на добавление в отслеживание + сразу коммит:_
**`git config --global alias.commitall '!git add .; git commit'`**

**`git add -A`** - добавляет в отслеживание файлы не только в текущей директории, а во всем проекте, откуда бы эта команда не была вызвана

### Чтобы удалить отслеживаемый файл:
- удалить его
- **`git add удаленный_файл`** (как бы добавить в отслеживание факт его удаления)
- **`git commit -m Cleanup`** - окончательно зафиксировать изменения

_Одновременно удаляют + добавляют этот факт в отслеживание команды:_
**`git rm файл`**
**`git rm -r папка`**
С флагом **--cashed** - удаление из отслеживания, но оставление физически в рабочем каталоге.

_Если в файле есть незакоммиченные изменения, попытка его удаления приведет к ошибке. Чтобы его все-таки удалить, нужна команда:_
**`git rm -f файл`**

_Переименованный файл гит поначалу не узнает, выведет информацию, что старый удален, а новый создан. При добавлении в отслеживание гит поймет, что файлы идентичны, и выведет информацию, что файл был переименован. После этого можно будет коммитить.
В одно действие произвести это можно командой_  
**`git mv старое_название новое_название`**

### Удаление:
**`git rm <path>`**  

_Флаги для удаления:_
- **-r** - удаление папок  
- **-f** - удаление файлов с незакоммиченными изменениями  
- **--cached** - удаление только из отслеживания, оставляя в рабочей директории  
