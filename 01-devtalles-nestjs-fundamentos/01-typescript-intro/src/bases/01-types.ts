export const name = "Jared";

export const age: number = 23;

export const isValid: boolean = true;

export const templateString = `Esto es un string
muiltilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones: ${1 + 1}
números: ${age}
booleanos: ${isValid}`;

console.log(templateString);
