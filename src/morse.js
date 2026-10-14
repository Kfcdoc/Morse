export const MORSE = {
      A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
        G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
          M: "--", N: "-.", "Ñ": "--.--", O: "---", P: ".--.", Q: "--.-",
            R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--",
              X: "-..-", Y: "-.--", Z: "--..",
                0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
                  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
                  };

                  const INVERSO = Object.fromEntries(
                    Object.entries(MORSE).map(([letra, codigo]) => [codigo, letra])
                    );

                    const limpiarCaracter = (c) =>
                      c === "Ñ" ? c : c.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                      export const textoAMorse = (texto) => {
                        const palabras = texto.trim().toUpperCase().split(/\s+/);
                          return palabras
                              .map((palabra) =>
                                    [...palabra]
                                            .map((c) => {
                                                      const letra = limpiarCaracter(c);
                                                                if (!MORSE[letra]) throw new Error(`Carácter no válido: "${c}"`);
                                                                          return MORSE[letra];
                                                                                  })
                                                                                          .join(" ")
                                                                                              )
                                                                                                  .join(" / ");
                                                                                                  };

                                                                                              export const morseATexto = (morse) => {
                                                                                                    const limpio = morse.trim().replace(/_/g, "-");
                                                                                                      if (!/^[.\-/\s]+$/.test(limpio)) {
                                                                                                          throw new Error("Solo se permiten puntos (.), rayas (-) y diagonales (/)");
                                                                                                            }
                                                                                                              return limpio
                                                                                                                  .split(/\s*\/\s*/)
                                                                                                                      .map((palabra) =>
                                                                                                                            palabra
                                                                                                                                    .trim()
                                                                                                                                            .split(/\s+/)
                                                                                                                                                    .map((codigo) => {
                                                                                                                                                              if (!INVERSO[codigo]) throw new Error(`Código no válido: "${codigo}"`);
                                                                                                                                                                        return INVERSO[codigo];
                                                                                                                                                                                })
                                                                                                                                                                                        .join("")
                                                                                                                                                                                            )
                                                                                                                                                                                                .join(" ");
                                                                                                                                                                                                
}
                                                                                                            
                                                        