# Modelos
Este documento define los modelos de datos de la aplicación.

Se debe implementar un componente de UI para cada tipo (kind) de ejercicio,
el componente define la forma del ejercicio obteniendo las opciones a mostrar
desde la colección de opciones en el modelo.

Cada componente leerá un tipo de modelo específico, la colección de opciones 
debe permitir recibir múltiples tipos de modelos.


```
// Clase base para modelos de opciones implementando opciones comunes
<<class>> OptionBase
+ Text : string
+ AudioFile : string
+ PictureFile : string

// Modela un objeto que el niño puede clickear para dar una respuesta
<<class>> ChooseOption : OptionBase
+ ShowText : bool
+ IsRightAnwer : bool

// Modela un objeto en el cual el niño debe seleccionar una palabra
<<class>> WordOption : OptionBase
+ Word : string // palabra a seleccionar

// Modela un objeto en el cual el niño debe juntar una palabra con una imagen
<<class>> MarchPicOption : OptionBase
+ PictureFileA : string
+ PictureFileB : string
+ Answer : string { 'a' | 'b' }

// Modela un objeto en el cual el niño debe escribir una o más palabras escondidas
<<class>> HiddenWordOption : OptionBase
+ Words : string[]

// Modela un objeto en el cual el níño debe juntar dos palabras
<<class>> MatchOption : OptionBase
+ Answer : string

// Modela un objeto en el cual el niño debe completar una oración
<<class>> SentenceCompletion : OptionBase
+ Sentence : string  // la oración tendrá un tag de reemplazo donde va la respuesta.
+ Hints : string[]
+ Answer : string

// Modela un objeto en el cual el niño debe seleccionar sílabas
<<class>> SyllableOption : OptionBase
+ Syllables : string[]
+ Methos : string { 'SelectFirst', 'SelectLast', 'Write' }
+ Answer : string

// Modela un objeto en el cual el niño debe escribir una respuesta
<<class>> WriteOption : OptionBase
+ Answer : string

// Permite agrupar opciones a mostrar separadamente
<<class>> OptionGroup
+ Text : string
+ Options : any[]


// Modela un ejecicio con múltiples opciones válidas
// dependiendo del 'kind' hará una cosa u otra

<<class>> Exercice
+ Statement : string // enunciado
+ Kind : string { see kind values }
+ Icon : string
+ AudioFile : string?
+ PictureFile : string?
+ InvalidOptionMessage : string
+ ValidOptionMessage :string
+ OptionGroups : OptionGroup[]

Kind values:
'choose', 
'chooseWord', 
'writeWord', 
'matchPic', 
'hiddenWords', 
'matchWords', 
'matchGroup', 
'sentenceCompletion',
'chooseSyllable',
'writeOption'

```