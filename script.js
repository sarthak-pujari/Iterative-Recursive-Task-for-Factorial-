function calculateFactorial(method) {
    const input = document.getElementById("numberInput").value;
    const number = parseInt(input);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(number) || number < 0) {
      resultDiv.textContent = "Please enter a valid non-negative integer.";
      resultDiv.classList.replace("text-green-600", "text-red-600");
      return;
    }
  
    let result;
    if (method === "iterative") {
      result = factorialIterative(number);
    } else if (method === "recursive") {
      result = factorialRecursive(number);
    }
  
    resultDiv.classList.replace("text-red-600", "text-green-600");
    resultDiv.textContent = `${method.toUpperCase()} method: ${result}`;
  }
  
  function factorialIterative(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  