grammar SimpleLang;

prog: simpleStatement+;

simpleStatement
    : switchStatement
    | assignmentStatement
    | outputStatement
    ;

switchStatement
    : SWITCH LPAREN IDENTIFIER RPAREN LBRACE caseSection+ defaultSection? RBRACE
    ;

caseSection
    : CASE constant COLON simpleStatement+
    ;

defaultSection
    : DEFAULT COLON simpleStatement+
    ;

assignmentStatement
    : IDENTIFIER ASSIGN constant SEMI
    ;

outputStatement
    : OUTPUT LPAREN textLiteral RPAREN SEMI
    ;

constant
    : NUMBER
    | textLiteral
    ;

textLiteral
    : TEXT
    ;

// Tokens
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
OUTPUT: 'output';
ASSIGN: '=';
SEMI: ';';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
TEXT: '"' (ESC | ~["\\\r\n])* '"';
fragment ESC: '\\' [btnfr"\\];
IDENTIFIER: LETTER (LETTER | DIGIT | '_')*;
NUMBER: DIGIT+;
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];
WS: [ \t\r\n]+ -> skip;