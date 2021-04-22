### Perguntas de Javascript

1. Explique com suas palavras a diferença entre a utilização de var, const e let?

> **Resposta:**
>
> - `var` é usado para declarar uma variável e pode ser re-declarado, porém ela não leva em consideração o escopo em que está sendo executado.
> - `const` não pode ser re-declarado naquele escopo que está sendo executado e também não possível alterar o valor atribuído.
> - `let` também não pode ser re-declarado naquele escopo, porém pode ser alterado o valor.

---

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

- [ ] Funções normais não guardam escopo
- [x] Funções normais guardam escopo
- [ ] Arrow function são mais rápidas
- [ ] Arrow function podem ser instanciadas
- [x] Arrow function não guardam escopo

---

3. qual o valor da constante name após a execução da função?

```javascript
content = {
  name: "John",
  getName: function () {
    this.name = "James";
    return this.name;
  },
};

userData = {
  name: "Luke",
  getName: content.getName,
};
this.name = "Walter";
const name = userData.getName();
```

- [ ] John
- [ ] Luke
- [x] James
- [ ] Walter

---

4. Qual o retorno da função event.getTitle()

```javascript
function Event(name, day) {
  this.date = day;
  this.name = name;

  this.getName = function () {
    return this.name;
  };
  this.getDate = function () {
    return this.date;
  };
}

const event = new Event("04/02/2019", "Event Test");

Event.prototype.getTitle = function () {
  return `The event ${this.name} will take place on ${this.date} `;
};
event.getTitle();
```

- [x] The event 04/02/2019 will take place on Event Test
- [ ] The event undefined will take place on undefined
- [ ] Uncaught TypeError
- [ ] The event null will take place on null

---

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

> **Resposta:**
>
> - Existem várias formas de se selecionar um elemento na árvore de elementos:
>
> ```javascript
> // selecionar elemento pelo ID
> const id = document.getElementById("id");
> // selecionar por classe
> const classe = document.getElementsByClassName("classe");
> // por tag
> const tag = document.getElementsByTagName("tag");
> // selecionar da mesma maneira que é utilizada no CSS
> let idCss = document.querySelector("#id");
> let classesCss = document.querySelectorAll(".classes");
> ```
>
> Todas as maneiras retornam os elementos, quando usamos os `getElementsBy..` é retornado um array do tipo `HTMLCollection`, e quando usamos `querySelectorAll` retorna um array do `NodeList`. Além disso, seletores como os de CSS são mais simples de serem utilizados.

---

6. Como inserir um evento em determinado elemento?

> **Resposta:**
> Abaixo um exemplo para adicionar um evento de _click_ à um botão, utilizando a função `addEventListener`.
>
> ```javascript
> const button = document.querySelector("button");
> const logA = () => console.log("A");
> button.addEventListener("click", logA);
> ```

---

7. Como remover um evento em determinado elemento?

> **Resposta:**
> Considerando que um elemento definido como `button` que executa a função `logA` no momento do `click`, é possível remover, utilizando a função `removeEventListener`.
>
> ```javascript
> button.removeEventListener("click", logA);
> ```

---

8. Descreva com suas palavras o que é event bubbling?

> **Resposta:** > _Event bubbling_ é quando usuário interage apartir de um elemento HTML filho e é propagado o evento para seus ancestrais, por exemplo pai e avô, sem ter interagido com eles, como se fossem bolhas subindo.

---

9. Descreva qual a diferença nos métodos de declaração de objetos?

> **Resposta:**
>
> ```javascript
> const object = {};
> ```
>
> - Cria um objeto vazio utilizando a notação literal
>
> ---
>
> ```javascript
> const object = new Object();
> ```
>
> - Cria um objeto vazio utilizando o construtor.
>
> ---
>
> ```javascript
> const object = Object.create();
> ```
>
> - Cria um novo objeto, utilizando o método create, que pode ser passado como parâmetro um protótipo de outro objeto existente, criando este novo objeto como baseado no existente.

---

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

> **Resposta:**
> Ambos fazem requisições para o servidor de forma assíncrona, porém, o fetch é menos verboso e muito mais simples de entender. Deve ser levado em consideração a compatibilidade, por ser uma nova especificação, alguns navegadores não tem suporte, mas os mais atuais e mais utilizados já dão o suporte.

---

11. O que são Promises ? Como podemos declarar uma promise em javascript ?

> **Resposta:**
>
> _Promises_ são utilizadas para representar a conclusão de operações assíncronas. Nós definimos uma Promise, e vamos executar tal operação somente quando ela for concluída. Uma de suas vantagens é que podem ser encadeadas.
>
> Uma Promise pode ter três estados:
>
> 1. _Pendente_: Ela ainda não foi executada e está pendente.
> 2. _Realizada_: A promise foi executada e foi aceita.
> 3. _Rejeitada_: A promise foi rejeitada por algum motivo.
>
> Exemplo:
>
> ```javascript
> const calculaMedia = (...notas) => new Promise((resolve, > reject) => {
>     const soma = notas.reduce((total, valor) => total + valor);
>     const qtdNotas = notas.length
>
>      setTimeout(() => { // simulando uma requisição que demora 1 segundo.
>        if (soma === 0) {
>            resolve(0);
>            return;
>        }
>
>        resolve(soma / qtdNotas);
>    }, 1000)
> });
>
>  const verificaSePassou = (media) => new Promise((resolve, reject) => {
>    if (media >= 70) resolve(`Passou! Média: ${media}`)
>    else reject(`Reprovado. Média: ${media}`)
> })
>
> calculaMedia(90, 100, 90, 65)
>    .then(verificaSePassou)
>    .then(console.log)
>    .catch(console.error) // Retorna Passou! Média: 86.25
> ```

---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

> **Resposta:**
>
> - `array.forEach`: executa uma dada função em cada elemento de um array.
>   Exemplo:
>
> ```javascript
> const logArrayElements = (element, index, array) => {
>   console.log("a[" + index + "] = " + element);
> };
> [1, 10, 32].forEach(logArrayElements);
> // Resultado:
> // a[0] = 1
> // a[1] = 10
> // a[2] = 32
> ```
>
> ---
>
> - `array.some`: verifica se algum dos elementos iterados pelo array passa no teste implementado. Retornando um booleano `true` ou `false`.
>   Exemplo:
>
> ```javascript
> const valorZero = (element) => element === 0;
>
> [1, 10, 32].some(valorZero); // Retorna: false
> [30, 2, 0].some(valorZero); // Retorna: true
> ```
>
> ---
>
> - `array.find`: retorna o primeiro elemento encontrado na função passada como teste. Caso não econtre, retorna `undefined`.
>   Exemplo:
>
> ```javascript
> const numeroMaiorQueDez = (element) => element > 10;
>
> [1, 10, 32, 55].find(numeroMaiorQueDez); // Retorna: 32
> ```
>
> ---

---

13. Quando utilizar map, reduce ou filter ?

> **Resposta:**
>
> - `map`: utilizado quando você precisa modificar o array de elementos. O map retorna um novo array modificado. Cada retorno passado na função é o novo valor do elemento iterado.
>
> ```javascript
> const double = [1, 2, 3, 4].map((n) => n * 2); // retorna um array contendo o dobro de cada número.
> ```
>
> ---
>
> - `filter`: utilizado quando você quer filtrar um determinado array, passando uma função como parâmetro que deve retornar um booleano, dizendo se for true, incluirá o elemento no novo array, caso false, não incluirá no array.
>
> ```javascript
> const even = [1, 2, 3, 4].filter((n) => n % 2 == 0); //retorna array de somente números pares
> ```
>
> ---
>
> - `reduce`: A partir de um array inicial, executa uma função reducer, nesse array definidas por você, retornando apenas um valor único no final. Pode retornar qualquer valor de qualquer tipo.
>
> ```javascript
> const total = [1, 2, 3, 4].reduce((acc, curr) => curr + acc);
> ```
>
> - Retorna a somatória dos elementos. somando o valor atual + valor acumulado. O valor acumulado (`acc`) nesse caso iniciará com a primeira posição do array (1), e na primeira iteração somará com 2, que resultará em 3, que somará com 3, na segunda iteração, e assim por diante. É possível passar um valor inicial também no segundo parâmetro do reduce.

---

14. Qual o método do Array é mais indicado para remover elementos ?

> **Resposta:**
> Existem várias maneiras de remover elementos de array, a maneira mais simples de remover é utilizando o splice.
>
> ```javascript
> const removeIndex = 1;
> const array = ["a", "b", "c"];
> array.splice(removeIndex, 1); // retorna 'b' e remove do array
> ```
>
> Lembrando que ele modifica o array original, para remover o elemento sem modificar o array, é possível utilizar: filter, reduce, slice. Que retornam um novo array sem o elemento, não alterando o original.

---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

> **Resposta:**
>
> `replace`: utilizado para substituir os valores encontrados em uma string.
>
> Exemplo: `("Minha cor favorita é verde.").replace('verde', 'azul')`. Retornando: 'Minha cor favorita é azul.'
>
> ---
>
> `toLowerCase`: utilizado transformar caracteres maiúsculos em minúsculos em uma string.
>
> Exemplo: `("Minha COR favorita é VERDE.").toLowerCase()`. Retornando: 'minha cor favorita é verde.'
>
> ---
>
> `split`: retorna um array separado por um delimitador passado como parâmetro.
>
> Exemplo: `("a,b,c,d,e").split(',')`.
>
> Retornando: `Array ['a','b','c','d','e']`
>
> ---
>
> `includes`: verifica se na string inclui aquele determinado termo passado por parâmetro, retornar um booleano (true ou false)
>
> Exemplo: `("Minha cor favorita é verde.").includes('verde')`.
>
> Retornando: `true`
>
> ---

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage

> **Resposta:**
>
> `localStorage/SessionStorage` é uma propriedade que permite armazenar um valor para o domínio que está utilizando. A única diferença entre os dois é que o SessionStorage é apagado quando expira sessão da página (quando fecha a janela/aba).
>
> Exemplos:
>
> ```javascript
> localStorage.setItem("value", "my value");
> ```
>
> E para resgatar o valor:
>
> ```javascript
> localStorage.getItem("value"); // 'my value'
> ```

---

17. Qual a melhor forma para definir um cookie utilizando javascript ?

> **Resposta:**
> A vantagem do cookie é que, é possível definir uma data de expiração, fazendo com que aquele dado armazenado seja removido quando atingir aquela data definida.
>
> Porém sua implementação é um pouco complexa, por ter que trabalhar com string, por isso, uma boa prática, até pra facilitar, é criar uma função onde é passado o nome, valor.
>
> Exemplo:
>
> ```javascript
> const createCookie = (name, value) {
>   const date = new Date(2021, 10, 1).toGMTString();
>   document.cookie = `${name}=${value}; expires=${date}; path=/`;
> }
>
> createCookie('nome', 'Gabriel');
> createCookie('sobrenome', 'Paganini');
> ```

---

18. Quais os tipos de Loops existentes em javascript ?

> **Resposta:**
>
> - for
> - while
> - do while
> - for...in
> - for...of

---

19. Descreva com suas palavras o que é hoisting ?

> **Resposta:**
> É quando uma variável declarada com o `var`, sem valor atribuído é "içada" para cima (no início do código), fazendo com que o código no momento da execução não dê erro, mesmo sem ter declarado antes, pois não é procedural.

---

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

- [x] window
- [ ] global
- [ ] undefined
- [ ] null

---

21. Quando eu posso utilizar o "Use-strict" no meu código ?

- [x] No ínicio do meu código
- [ ] No inicio do block if
- [ ] No inicio de um loop
- [x] no inicio de uma função
