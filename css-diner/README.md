### Respuestas
1. plate
2. bento
3. \#fancy
4. plate apple
5. \#fancy pickle
6. .small
7. orange.small
8. bento orange.small
9. plate, bento
10. \*
11. plate \*
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate apple:only-child, plate pickle:only-child
17. .small:last-child
18. plate:nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type
21. plate:nth-of-type(even)
22. plate:nth-of-type(2n+3)
23. plate apple:only-of-type
24. orange:last-of-type, apple:last-of-type
25. bento:empty
26. apple:not(.small)
27. \*[for]
28. plate[for]
29. bento[for="Vitaly"]
30. \*[for^="Sa"]
31. \*[for$="ato"]
32. bento[for*="obb"]


### Etiquetas utilizadas
* Type Selector
* ID Selector
* Descendant Selector
* Class Selector
* The Universal Selector
* Adjacent Sibling Selector
* General Sibling Selector
* Child Selector
* First Child Pseudo-selector
* Only Child Pseudo-selector
* Last Child Pseudo-selector
* Nth Child Pseudo-selector
* Nth Last Child Selector
* First of Type Selector
* Nth of Type Selector
* Nth-of-type Selector with Formula
* Only of Type Selector
* Last of Type Selector
* Empty Selector
* Negation Pseudo-class
* Attribute Selector
* Attribute Value Selector
* Attribute Starts With Selector
* Attribute Ends With Selector
* Attribute Wildcard Selector

### Especificidad en CSS y cómo se calcula
La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad está basada en las reglas de coincidencia que están compuestas por diferentes tipos de selectores CSS.

#####Tipos de selectores
La siguiente lista de tipos de selectores incrementa en función de la especificidad:

(0) Selectores de tipo y pseudo-elementos.
(1) Selectores de clase, selectores de atributos (y pseudo-clases.
(2) Selectores de ID.

El selector universal (*), los combinadores (+, >, ~, ' ', || (en-US)) y la pseudo-clase de negación (:not()) no tienen efecto sobre la especificidad. (Sin embargo, los selectores declarados dentro de :not() si lo tienen.)

Cuando se emplea **!important** en una declaración de estilo, esta declaración sobrescribe a cualquier otra, pero es mala práctica.
