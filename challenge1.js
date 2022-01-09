/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
*/
function printName()
{
    console.log("Abdulmohsen Alnouh")
}
printName ();
 

/* Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear){
let age = 2022 - birthYear;
console.log(age)
}
printAge (1987);

/*
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language)
{

    if (language === "en"){
    return ("Hello",name);
    }
    
    else if (language === "es"){
    return ("Hola",name);
    }

    else if (language ==="fr"){
    return ("Bonjour", name);
    }
    
    else if (language ==="tr"){
     return ("Marhaba",name);
    }
    console.log (printHello("Abdulmohsen","en"));

}




/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax (n1,n2)
{
    if (n1>n2)
    {
    console.log (n1);
    } 
    else 
    {
    console.log (n2);
    }
}
    printMax(5,4);
