|FR id|TC id|Опис кроків тестового сценарію|Опис очікуваних результатів|
|:-:|:-:|:-|:-:|
|FR2.1|TC1.1|Початкові умови: відсутні <br> Кроки сценарію: <br> 1) name = "Проект1" <br> 2) description = "Це опис проекту 1"|Результат = 1|
|FR2.1|TC1.2|Початкові умови: відсутні <br> Кроки сценарію: <br> 1) name = "Дуже довга назва проекту, яка перевищує 100 символів..." <br> 2) description = "Це занадто довгий опис проекту, який перевищує 1000 символів і не підходить..."|Результат = -1|
|FR2.1|TC1.3|Початкові умови: відсутні <br> Кроки сценарію: <br> 1) name = "Дуже довга назва проекту, яка перевищує 100 символів..." <br> 2) description = "Це дуже занадто опис проекту, який перевищує 1000 символів і не підходить ..."|Результат = -1|
|FR2.1|TC1.4|Початкові умови: відсутні <br> Кроки сценарію: <br> 1) name =  "Проект 1" <br> 2) description = "Це занадто довгий опис проекту, який перевищує 1000 символів і не підходить..."|Результат = -2|