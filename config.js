let lang_candidate = [
  "Bash (GNU bash v4.3.11)",
  "C (GCC 5.4.1)",
  "C++14 (GCC 5.4.1)",
  "C (Clang 3.8.0)",
  "C++14 (Clang 3.8.0)",
  "C# (Mono 4.6.2.0)",
  "Clojure (1.8.0)",
  "Common Lisp (SBCL 1.1.14)",
  "D (DMD64 v2.070.1)",
  "D (LDC 0.17.0)",
  "D (GDC 4.9.4)",
  "Fortran (gfortran v4.8.4)",
  "Go (1.6)",
  "Haskell (GHC 7.10.3)",
  "Java7 (OpenJDK 1.7.0)",
  "Java8 (OpenJDK 1.8.0)",
  "JavaScript (node.js v5.12)",
  "OCaml (4.02.3)",
  "Pascal (FPC 2.6.2)",
  "Perl (v5.18.2)",
  "PHP (5.6.30)",
  "Python2 (2.7.6)",
  "Python3 (3.4.3)",
  "Ruby (2.3.3)",
  "Scala (2.11.7)",
  "Scheme (Gauche 0.9.3.3)",
  "Text (cat)",
  "Visual Basic (Mono 4.0.1)",
  "C++ (GCC 5.4.1)",
  "C++ (Clang 3.8.0)",
  "Objective-C (GCC 5.3.0)",
  "Objective-C (Clang3.8.0)",
  "Swift (swift-2.2-RELEASE)",
  "Rust (1.15.1)",
  "Sed (GNU sed 4.2.2)",
  "Awk (mawk 1.3.3)",
  "Brainfuck (bf 20041219)",
  "Standard ML (MLton 20100608)",
  "PyPy2 (5.6.0)",
  "PyPy3 (2.4.0)",
  "Crystal (0.20.5)",
  "F# (Mono 4.0)",
  "Unlambda (0.1.3)",
  "Lua (5.3.2)",
  "LuaJIT (2.0.4)",
  "MoonScript (0.5.0)",
  "Ceylon (1.2.1)",
  "Julia (0.5.0)",
  "Octave (4.0.2)",
  "Nim (0.13.0)",
  "TypeScript (2.1.6)",
  "Perl6 (rakudo-star 2016.01)",
  "Kotlin (1.0.0)",
  "PHP7 (7.0.15)",
  "COBOL - Fixed (OpenCOBOL 1.1.0)",
  "COBOL - Free (OpenCOBOL 1.1.0)",
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
