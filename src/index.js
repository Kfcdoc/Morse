import { textoAMorse, morseATexto } from "./morse.js";

const modo = document.getElementById("modo");
const etiqueta = document.getElementById("etiquetaEntrada");
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const error = document.getElementById("error");

let aMorse = true;

const traducir = () => {
  error.textContent = "";
    salida.value = "";
      if (entrada.value.trim() === "") {
          error.textContent = "Escribe algo para traducir";
              return;
                }
                  try {
                      salida.value = aMorse
                            ? textoAMorse(entrada.value)
                                  : morseATexto(entrada.value);
                                    } catch (e) {
                                        error.textContent = e.message;
                                          }
                                          };

                                          modo.addEventListener("click", () => {
                                            aMorse = !aMorse;
                                              modo.textContent = aMorse ? "Texto → Morse" : "Morse → Texto";
                                                etiqueta.textContent = aMorse ? "Escribe tu texto:" : "Escribe tu código morse:";
                                                  entrada.placeholder = aMorse ? "Hola mundo" : ".... --- .-.. .- / -- ..- -. -.. ---";
                                                    entrada.value = "";
                                                      salida.value = "";
                                                        error.textContent = "";
                                                        });

                                                        document.getElementById("traducir").addEventListener("click", traducir);

                                                        document.getElementById("copiar").addEventListener("click", () => {
                                                          if (salida.value) navigator.clipboard.writeText(salida.value);
                                                          });

                                                          document.getElementById("limpiar").addEventListener("click", () => {
                                                            entrada.value = "";
                                                              salida.value = "";
                                                                error.textContent = "";
                                                                });a