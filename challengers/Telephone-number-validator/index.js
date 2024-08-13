function telephoneCheck (str) {
  // Use uma expressão regular para verificar o formato do número de telefone
  var phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Testa se a string atende ao padrão
  return phoneRegex.test(str);
}

telephoneCheck('72 98424-1243');