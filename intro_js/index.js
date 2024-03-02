/***********************************************************************/ 
/* Bloco 2 */ 
/***********************************************************************/

// //declarando constantes
// const nome = "Jose"
// const idade = 27
// console.log( nome, idade )

// //aspas podem ser simples ou duplas
// const sexo = "M"
// const endereco_residencial = 'Rua K, 12'
// const endereco_comercial = "Rua Olho D'Agua, 12"
// console.log( sexo, endereco_residencial, endereco_comercial )

// //declarando variaveis
// //let: variável local com escopo de bloco. nota: escopo é a visibilidade da variável dentro cdo código. Variáveis declaradas com let são criadas na Stack
// let a = 2
// let b = 'abc'
// console.log( a, b )
// //var: seu escopo é a função em que foi declarada ou é global. nota: escopo é a visibilidade da variável dentro cdo código. Variáveis declaradas com var são criadas na RAM (Heap)
// var c = 2 + 3
// var d = "abcd"
// console.log( c, d )


/***********************************************************************/ 
/* Bloco 2 */ 
/***********************************************************************/

// var linguagem = "Javascript"
// console.log( "Aprendendo" + linguagem )
// //pode ser redeclarada
// linguagem = "Java"
// console.log( "Aprendendo" + linguagem )

// var idade = 18

// //construção de interpolação
// console.log( `Oi, ${nome}` ) //a variável é criada, ou seja, passa a existir na memória RAM (Heap), mas não tem valor atribuído, por isso exibe undefined.
// if( idade >= 18 ){
//     var nome = "Joao"
//     console.log( `Parabéns, ${nome}. Você pode dirigir.` )
// }
// console.log(`Até mais, ${nome}`) //a variavel foi içada, do inglês hoist, para fora do bloco no qual foi criada

/***********************************************************************/ 
/* Bloco 3 */ 
/***********************************************************************/
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2 //o interpretador JS faz a coersão implícita, isto é, converte o numero em string
// console.log( n3 )

// const n4 = n1 + Number(n2) //coersão explícita, então a soma acontece
// console.log( n4 )

/***********************************************************************/ 
/* Bloco 4 */ 
/***********************************************************************/
// console.log( 1 == 1 )
// console.log( 1 == '1' ) //Faz coersão implícita
// console.log( 1 === 1 )
// console.log( 1 === '1' ) //Não faz coersão implícita
// console.log( true == 1 )
// console.log( true == 2 )
// console.log( false == 0 )
// console.log( false == 5 )
// console.log( false == -1 )
// console.log( true + true )
// console.log( 1 == [1] )
// console.log( null == null )
// console.log( null == undefined )
// console.log( [] == false )
// console.log( [] == [] )

/***********************************************************************/ 
/* Bloco 5 */ 
/***********************************************************************/
v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = 'abc'
console.log( "length: " + v1.length )
console.log( v1[0] )
console.log( v1[1] )
console.log( v1[2] )
console.log( v1[3] )
console.log( v1[4] )
console.log( v1[5] )
console.log( v1[6] )
console.log( v1[7] )
console.log( v1[8] )
console.log( v1[9] )
console.log( v1[10] )

v2 = [ 2, "abc", true ]
console.log( v2 )
for( let i = 0; i < v2.length; i++ ){
    console.log( v2[i] )
}
