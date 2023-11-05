const compress = (a, b = true) => {
  //TODO: implementați funcția
  // TODO: implement the function

  // Verificare tipuri de date pt parametrii functiei
  if (
    typeof b !== "boolean" ||
    typeof a !== "string" ||
    !a instanceof String
  ) {
    throw new Error("InvalidType");
  }

  // Verificare empty string
  if (a.length === 0) {
    return "";
  }

  // Compresie
  if (b) {
    let compressed = "";
    let count = 1;

    for (let i = 1; i < a.length; i++) {
      if (a[i] === a[i - 1]) {
        count++;
      } else {
        compressed += `${a[i - 1]}${count}`;
        count = 1;
      }
    }

    compressed += `${a[a.length - 1]}${count}`;
    return compressed;
    // Decompresie
  } else {
    let decompressed = "";
    let count;

    for (let i = 1; i < a.length; i += 2) {
      // Pe pozitiile pare se afla litere, iar pe cele impare se afla numere
      count = parseInt(a[i]);
      decompressed += a[i - 1].repeat(count);
    }

    return decompressed;
  }
};

module.exports = compress;
