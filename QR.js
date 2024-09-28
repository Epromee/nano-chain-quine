function encode(s) {
    s = s.replaceAll("\\", "\\\\")
    s = s.replaceAll("\n", "\\n")
    s = s.replaceAll('"', '\\"')
    s = s.replaceAll("'", "\\'")
    return s
}

function encode2(s) {
    s = s.replaceAll("\\", "\\\\")
    s = s.replaceAll("$", "\\$")
    s = s.replaceAll("`", "\\`")
    return s
}

function make_python_program_that_prints(x) {
    return `print("${encode(x)}")`
}

function make_cpp_program_that_prints(x) {
    return `#include <iostream>
int main() {
    std::cout << "${encode(x)}";
    return 0;
}`
}

function make_java_program_that_prints(x) {
    return `public class QR {
    public static void main(String[] args) {
        System.out.println("${encode(x)}"); 
    }
}`
}

var TEMPLATE = `function encode(s) {
    s = s.replaceAll("\\\\", "\\\\\\\\")
    s = s.replaceAll("\\n", "\\\\n")
    s = s.replaceAll('"', '\\\\"')
    s = s.replaceAll("'", "\\\\'")
    return s
}

function encode2(s) {
    s = s.replaceAll("\\\\", "\\\\\\\\")
    s = s.replaceAll("\$", "\\\\\$")
    s = s.replaceAll("\`", "\\\\\`")
    return s
}

function make_python_program_that_prints(x) {
    return \`print("\${encode(x)}")\`
}

function make_cpp_program_that_prints(x) {
    return \`#include <iostream>
int main() {
    std::cout << "\${encode(x)}";
    return 0;
}\`
}

function make_java_program_that_prints(x) {
    return \`public class QR {
    public static void main(String[] args) {
        System.out.println("\${encode(x)}"); 
    }
}\`
}

var TEMPLATE = \`SUBSTITUTE_HERE\`

var bar = "HERE"
var foo = "SUBSTITUTE_"
var key = foo + bar

TEMPLATE = TEMPLATE.replace(key, encode2(TEMPLATE))

var s = make_java_program_that_prints(TEMPLATE)
s = make_cpp_program_that_prints(s)
s = make_python_program_that_prints(s)
console.log(s)`

var bar = "HERE"
var foo = "SUBSTITUTE_"
var key = foo + bar

TEMPLATE = TEMPLATE.replace(key, encode2(TEMPLATE))

var s = make_java_program_that_prints(TEMPLATE)
s = make_cpp_program_that_prints(s)
s = make_python_program_that_prints(s)
console.log(s)
