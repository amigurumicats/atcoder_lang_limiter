let lang_candidate = [
  "C (GCC 9.2.1)",
  "C (Clang 10.0.0)",
  "C++ (GCC 9.2.1)",
  "C++ (Clang 10.0.0)",
  "Java (OpenJDK 11.0.6)",
  "Python (3.8.2)",
  "Bash (5.0.11)",
  "bc (1.07.1)",
  "Awk (GNU Awk 4.1.4)",
  "C# (.NET Core 3.1.201)",
  "C# (Mono-mcs 6.8.0.105)",
  "C# (Mono-csc 3.5.0)",
  "Clojure (1.10.1.536)",
  "Crystal (0.33.0)",
  "D (DMD 2.091.0)",
  "D (GDC 9.2.1)",
  "D (LDC 1.20.1)",
  "Dart (2.7.2)",
  "dc (1.4.1)",
  "Erlang (22.3)",
  "Elixir (1.10.2)",
  "F# (.NET Core 3.1.201)",
  "F# (Mono 10.2.3)",
  "Forth (gforth 0.7.3)",
  "Fortran(GNU Fortran 9.2.1)",
  "Go (1.14.1)",
  "Haskell (GHC 8.8.3)",
  "Haxe (4.0.3); js",
  "Haxe (4.0.3); Java",
  "JavaScript (Node.js 12.16.1)",
  "Julia (1.4.0)",
  "Kotlin (1.3.71)",
  "Lua (Lua 5.3.5)",
  "Lua (LuaJIT 2.1.0)",
  "Dash (0.5.8)",
  "Nim (1.0.6)",
  "Objective-C (Clang 10.0.0)",
  "Common Lisp (SBCL 2.0.3)",
  "OCaml (4.10.0)",
  "Octave (5.2.0)",
  "Pascal (FPC 3.0.4)",
  "Perl (5.26.1)",
  "Raku (Rakudo 2020.02.1)",
  "PHP (7.4.4)",
  "Prolog (SWI-Prolog 8.0.3)",
  "PyPy2 (7.3.0)",
  "PyPy3 (7.3.0)",
  "Racket (7.6)",
  "Ruby (2.7.1)",
  "Rust (1.42.0)",
  "Scala (2.13.1)",
  "Java (OpenJDK 1.8.0)",
  "Scheme (Gauche 0.9.9)",
  "Standard ML (MLton 20130715)",
  "Swift (5.2.1)",
  "Text (cat 8.28)",
  "TypeScript (3.8)",
  "Visual Basic (.NET Core 3.1.101)",
  "Zsh (5.4.2)",
  "Ada2012 (GNAT 9.2.1)",
  "Unlambda (2.0.0)",
  "Cython (0.29.16)",
  "Sed (4.4)",
  "Vim (8.2.0460)",
  "COBOL - Fixed (OpenCOBOL 1.1.0)",
  "COBOL - Free (OpenCOBOL 1.1.0)",
  "Brainfuck (bf 20041219)"
]

chrome.storage.local.get(["disables"], function(data){
  let disables = data.disables;
  if(disables == undefined) disables = [];

  let form = document.getElementById("form_lang");
  for(let lang of lang_candidate){
    let one_label = document.createElement("label");
    let one_input = document.createElement("input");
    one_input.type = "checkbox";
    one_input.name = "lang";
    one_input.checked = !disables.includes(lang)
    one_input.onchange = function(){
      chrome.storage.local.set({"disables": getDisables()}, ((data) => {}));
    }
    one_label.appendChild(one_input);
    let one_text = document.createElement("span");
    one_text.textContent = lang;
    one_label.appendChild(one_text);
    form.appendChild(one_label);
  }
});


function getDisables(){
  let result = [];
  let form_lang = document.form_lang.lang;
  for(lang of form_lang){
    if(!lang.checked){
      result.push(lang.labels[0].textContent);
    }
  }
  return result
}
