** Desafio Mulher Chinesa com Menor Salário **

After defining these three functions, the code uses the axios library to make a GET request to a URL. When the request resolves, the function is called and the response data is stored in the funcionarios variable.

Then, the code filters the funcionarios array to find only those elements that satisfy two conditions: they are from China and they are female. This is done by chaining the filter method twice, first with the chineses arrow function and then with the mulheres arrow function.

Finally, the reduce method is called on the filtered array to find the menorSalario (lowest salary) of the female Chinese employees. The result is printed to the console using console.log().

