// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
const serializedATN = [4,1,15,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,4,2,35,8,2,11,2,12,2,36,1,2,3,2,40,8,
2,1,2,1,2,1,3,1,3,1,3,1,3,4,3,48,8,3,11,3,12,3,49,1,4,1,4,1,4,4,4,55,8,4,
11,4,12,4,56,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,3,7,72,
8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,74,0,19,1,0,0,0,2,26,1,0,
0,0,4,28,1,0,0,0,6,43,1,0,0,0,8,51,1,0,0,0,10,58,1,0,0,0,12,63,1,0,0,0,14,
71,1,0,0,0,16,73,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,27,3,4,2,0,24,27,3,10,5,0,25,27,3,
12,6,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,1,
0,0,29,30,5,7,0,0,30,31,5,13,0,0,31,32,5,8,0,0,32,34,5,9,0,0,33,35,3,6,3,
0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,
38,40,3,8,4,0,39,38,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,10,0,0,42,
5,1,0,0,0,43,44,5,2,0,0,44,45,3,14,7,0,45,47,5,11,0,0,46,48,3,2,1,0,47,46,
1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,7,1,0,0,0,51,52,5,3,
0,0,52,54,5,11,0,0,53,55,3,2,1,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,0,
0,56,57,1,0,0,0,57,9,1,0,0,0,58,59,5,13,0,0,59,60,5,5,0,0,60,61,3,14,7,0,
61,62,5,6,0,0,62,11,1,0,0,0,63,64,5,4,0,0,64,65,5,7,0,0,65,66,3,16,8,0,66,
67,5,8,0,0,67,68,5,6,0,0,68,13,1,0,0,0,69,72,5,14,0,0,70,72,3,16,8,0,71,
69,1,0,0,0,71,70,1,0,0,0,72,15,1,0,0,0,73,74,5,12,0,0,74,17,1,0,0,0,7,21,
26,36,39,49,56,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'output'", 
                            "'='", "';'", "'('", "')'", "'{'", "'}'", "':'" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", 
                             "ASSIGN", "SEMI", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "COLON", "TEXT", "IDENTIFIER", "NUMBER", 
                             "WS" ];
    static ruleNames = [ "prog", "simpleStatement", "switchStatement", "caseSection", 
                         "defaultSection", "assignmentStatement", "outputStatement", 
                         "constant", "textLiteral" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.simpleStatement();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_simpleStatement);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.switchStatement();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.assignmentStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(SimpleLangParser.SWITCH);
	        this.state = 29;
	        this.match(SimpleLangParser.LPAREN);
	        this.state = 30;
	        this.match(SimpleLangParser.IDENTIFIER);
	        this.state = 31;
	        this.match(SimpleLangParser.RPAREN);
	        this.state = 32;
	        this.match(SimpleLangParser.LBRACE);
	        this.state = 34; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 33;
	            this.caseSection();
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 38;
	            this.defaultSection();
	        }

	        this.state = 41;
	        this.match(SimpleLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseSection() {
	    let localctx = new CaseSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_caseSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(SimpleLangParser.CASE);
	        this.state = 44;
	        this.constant();
	        this.state = 45;
	        this.match(SimpleLangParser.COLON);
	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this.simpleStatement();
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultSection() {
	    let localctx = new DefaultSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_defaultSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(SimpleLangParser.DEFAULT);
	        this.state = 52;
	        this.match(SimpleLangParser.COLON);
	        this.state = 54; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            this.simpleStatement();
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(SimpleLangParser.IDENTIFIER);
	        this.state = 59;
	        this.match(SimpleLangParser.ASSIGN);
	        this.state = 60;
	        this.constant();
	        this.state = 61;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(SimpleLangParser.OUTPUT);
	        this.state = 64;
	        this.match(SimpleLangParser.LPAREN);
	        this.state = 65;
	        this.textLiteral();
	        this.state = 66;
	        this.match(SimpleLangParser.RPAREN);
	        this.state = 67;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_constant);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(SimpleLangParser.NUMBER);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.textLiteral();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	textLiteral() {
	    let localctx = new TextLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SimpleLangParser.RULE_textLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(SimpleLangParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.SWITCH = 1;
SimpleLangParser.CASE = 2;
SimpleLangParser.DEFAULT = 3;
SimpleLangParser.OUTPUT = 4;
SimpleLangParser.ASSIGN = 5;
SimpleLangParser.SEMI = 6;
SimpleLangParser.LPAREN = 7;
SimpleLangParser.RPAREN = 8;
SimpleLangParser.LBRACE = 9;
SimpleLangParser.RBRACE = 10;
SimpleLangParser.COLON = 11;
SimpleLangParser.TEXT = 12;
SimpleLangParser.IDENTIFIER = 13;
SimpleLangParser.NUMBER = 14;
SimpleLangParser.WS = 15;

SimpleLangParser.RULE_prog = 0;
SimpleLangParser.RULE_simpleStatement = 1;
SimpleLangParser.RULE_switchStatement = 2;
SimpleLangParser.RULE_caseSection = 3;
SimpleLangParser.RULE_defaultSection = 4;
SimpleLangParser.RULE_assignmentStatement = 5;
SimpleLangParser.RULE_outputStatement = 6;
SimpleLangParser.RULE_constant = 7;
SimpleLangParser.RULE_textLiteral = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_prog;
    }

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProg(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_simpleStatement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_switchStatement;
    }

	SWITCH() {
	    return this.getToken(SimpleLangParser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleLangParser.LPAREN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(SimpleLangParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(SimpleLangParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(SimpleLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(SimpleLangParser.RBRACE, 0);
	};

	caseSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSectionContext);
	    } else {
	        return this.getTypedRuleContext(CaseSectionContext,i);
	    }
	};

	defaultSection() {
	    return this.getTypedRuleContext(DefaultSectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSwitchStatement(this);
		}
	}


}



class CaseSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_caseSection;
    }

	CASE() {
	    return this.getToken(SimpleLangParser.CASE, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	COLON() {
	    return this.getToken(SimpleLangParser.COLON, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCaseSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCaseSection(this);
		}
	}


}



class DefaultSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_defaultSection;
    }

	DEFAULT() {
	    return this.getToken(SimpleLangParser.DEFAULT, 0);
	};

	COLON() {
	    return this.getToken(SimpleLangParser.COLON, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterDefaultSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitDefaultSection(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(SimpleLangParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(SimpleLangParser.ASSIGN, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_outputStatement;
    }

	OUTPUT() {
	    return this.getToken(SimpleLangParser.OUTPUT, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleLangParser.LPAREN, 0);
	};

	textLiteral() {
	    return this.getTypedRuleContext(TextLiteralContext,0);
	};

	RPAREN() {
	    return this.getToken(SimpleLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitOutputStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_constant;
    }

	NUMBER() {
	    return this.getToken(SimpleLangParser.NUMBER, 0);
	};

	textLiteral() {
	    return this.getTypedRuleContext(TextLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitConstant(this);
		}
	}


}



class TextLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_textLiteral;
    }

	TEXT() {
	    return this.getToken(SimpleLangParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTextLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTextLiteral(this);
		}
	}


}




SimpleLangParser.ProgContext = ProgContext; 
SimpleLangParser.SimpleStatementContext = SimpleStatementContext; 
SimpleLangParser.SwitchStatementContext = SwitchStatementContext; 
SimpleLangParser.CaseSectionContext = CaseSectionContext; 
SimpleLangParser.DefaultSectionContext = DefaultSectionContext; 
SimpleLangParser.AssignmentStatementContext = AssignmentStatementContext; 
SimpleLangParser.OutputStatementContext = OutputStatementContext; 
SimpleLangParser.ConstantContext = ConstantContext; 
SimpleLangParser.TextLiteralContext = TextLiteralContext; 
