var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
// Type checks
	describe('is.arguments', function () {
		it('should return true if passed parameter type is arguments', function () {
			var getArguments = function () {
			return arguments;
		};
		var arguments = getArguments('test');
		expect(is.arguments(arguments)).to.be.true;
		});
		it("should return false if passed parameter type is not arguments", function () {
			var notArguments = ['test'];
			expect(is.arguments(notArguments)).to.be.false;
		});
	});
  
	describe('is.array',function(){
		it('should return true if passed parameter type is array',function(){
			expect(is.array(['value1','value2'])).to.be.true;
		});
		it("should return false if passed parameter type is not array", function () {
			var notArguments = 'test';
		expect(is.array(notArguments)).to.be.false;
		});
	});
	
	describe('is.boolean',function(){
		it('should return true if passed parameter type is boolean',function(){
			expect(is.boolean(true)).to.be.true;
			expect(is.boolean(false)).to.be.true;
		});
		it("should return false if passed parameter type is not boolean", function () {
			var notArguments = ['test'];
		expect(is.boolean(notArguments)).to.be.false;
		});
	});
	
	describe('is.date',function(){
		it('should return true if passed parameter type is date',function(){
			var date = new Date("1995-12-17T03:24:00");
			expect(is.date(date)).to.be.true;
		});
		it("should return false if passed parameter type is not date", function () {
			var notArguments = 'test';
		expect(is.date(notArguments)).to.be.false;
		});
	});
	
	describe('is.error',function(){
		it('should return true if passed parameter type is error',function(){
			try {
				throw new Error("Ouups !");
			} catch (e) {
				expect(is.error(e)).to.be.true;
			}
			
		});
		it("should return false if passed parameter type is not error", function () {
			var notArguments = 'test';
		expect(is.error(notArguments)).to.be.false;
		});
	});
	
	describe('is.function',function(){
		it('should return true if passed parameter type is function',function(){
			function test(test){return test};
			expect(is.function(test)).to.be.true;
		});
		it("should return false if passed parameter type is not function", function () {
			var notArguments = 'test';
		expect(is.function(notArguments)).to.be.false;
		});
	});
	
	describe('is.nan',function(){
		it('should return true if passed parameter type is NaN',function(){
			var argumdents = NaN;
			expect(is.nan(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not NaN", function () {
			var notArguments = 'test';
		expect(is.nan(notArguments)).to.be.false;
		});
	});
	
	describe('is.null',function(){
		it('should return true if passed parameter type is null',function(){
			var argumdents = null;
			expect(is.null(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not null", function () {
			var notArguments = 'test';
		expect(is.null(notArguments)).to.be.false;
		});
	});
	
	describe('is.number',function(){
		it('should return true if passed parameter type is number',function(){
			var argumdents = 1;
			expect(is.number(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not number", function () {
			var notArguments = 'test';
		expect(is.number(notArguments)).to.be.false;
		});
	});
	
	describe('is.object',function(){
		it('should return true if passed parameter type is object',function(){
			var argumdents = {nom:"a"};
			expect(is.object(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not object", function () {
			var notArguments = 'test';
		expect(is.object(notArguments)).to.be.false;
		});
	});
	
	describe('is.json',function(){
		it('should return true if passed parameter type is json',function(){
			var argumdents = {nom:"a"};
			expect(is.json(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not json", function () {
			var notArguments = 'test';
		expect(is.json(notArguments)).to.be.false;
		});
	});
	
	describe('is.regexp',function(){
		it('should return true if passed parameter type is regexp',function(){
			var argumdents = /\w+/;
			expect(is.regexp(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not regexp", function () {
			var notArguments = 'test';
		expect(is.regexp(notArguments)).to.be.false;
		});
	});
	
	describe('is.sameType',function(){
		it('should return true if passed parameter type is sameType',function(){
			var argumdents =1;
			var argumdents2 =2;
			expect(is.sameType(argumdents,argumdents2)).to.be.true;
		});
		it("should return false if passed parameter type is not sameType", function () {
			var notArguments = 'test';
			var argumdents =1;
		expect(is.sameType(notArguments, argumdents)).to.be.false;
		});
	});

	describe('is.string',function(){
		it('should return true if passed parameter type is string',function(){
			var argumdents = 'test';
			expect(is.string(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not string", function () {
			var notArguments = 12;
		expect(is.string(notArguments)).to.be.false;
		});
	});
	
		describe('is.char',function(){
		it('should return true if passed parameter type is char',function(){
			var argumdents = 't';
			expect(is.char(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not char", function () {
			var notArguments = 'test';
		expect(is.char(notArguments)).to.be.false;
		});
	});
	
	describe('is.undefined',function(){
		it('should return true if passed parameter type is undefined',function(){
			var argumdents = void 0;
			expect(is.undefined(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not undefined", function () {
			var notArguments = 'test';
		expect(is.undefined(notArguments)).to.be.false;
		});
	});
// Presence checks	
	describe('is.empty',function(){
		it('should return true if passed parameter type is empty',function(){
			var argumdents = '';
			expect(is.empty(argumdents)).to.be.true;
			var argumdents2 = [];
			expect(is.empty(argumdents2)).to.be.true;
			var argumdents3 = {};
			expect(is.empty(argumdents3)).to.be.true;
		});
		it("should return false if passed parameter type is not empty", function () {
			var notArguments = 'test';
		expect(is.empty(notArguments)).to.be.false;
		});
	});

describe('is.existy',function(){
		it('should return true if passed parameter type is existy',function(){
			var argumdents = 'test';
			expect(is.existy(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not existy", function () {
			var notArguments = null;
			expect(is.existy(notArguments)).to.be.false;
			var notArguments2 = undefined;
			expect(is.existy(notArguments2)).to.be.false;
		});
	});
	
	describe('is.truthy',function(){
		it('should return true if passed parameter type is truthy',function(){
			var argumdents = {nom:"a"};
			expect(is.truthy(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not truthy", function () {
			var notArguments = null;
			expect(is.existy(notArguments)).to.be.false;
		});
	});
	
	describe('is.falsy',function(){
		it('should return true if passed parameter type is falsy',function(){
			var argumdents = NaN;
			expect(is.falsy(argumdents)).to.be.true;
			var argumdents2 = false;
			expect(is.falsy(argumdents2)).to.be.true;
			var argumdents3 = null;
			expect(is.falsy(argumdents3)).to.be.true;
		});
		it("should return false if passed parameter type is not falsy", function () {
			var notArguments = 'test';
		expect(is.falsy(notArguments)).to.be.false;
		});
	});
	
	describe('is.space',function(){
		it('should return true if passed parameter type is space',function(){
			var argumdents =' ';
			expect(is.space(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not space", function () {
			var notArguments = 'test';
		expect(is.space(notArguments)).to.be.false;
		});
	});
// Arithmetic checks	
	describe('is.equal',function(){
		it('should return true if passed parameter type is equal',function(){
			var argumdents ='a';
			var argumdents2 ='a';
			expect(is.equal(argumdents,argumdents2)).to.be.true;
			var argumdents =12;
			var argumdents2 =12;
			expect(is.equal(argumdents,argumdents2)).to.be.true;
			var argumdents =true;
			var argumdents2 =true;
			expect(is.equal(argumdents,argumdents2)).to.be.true;
			
		});
		it("should return false if passed parameter type is not equal", function () {
			var notArguments = 'test';
			var notArguments2 = 'test2';
			expect(is.equal(notArguments,notArguments2)).to.be.false;
			var notArguments = 10;
			var notArguments2 = 12;
			expect(is.equal(notArguments,notArguments2)).to.be.false;
			var notArguments = true;
			var notArguments2 = false;
			expect(is.equal(notArguments,notArguments2)).to.be.false;
		});
	});
	
	describe('is.even',function(){
		it('should return true if passed parameter type is even',function(){
			var argumdents = 24;
			expect(is.even(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not even", function () {
			var notArguments = 11;
			expect(is.even(notArguments)).to.be.false;
		});
	});
	
	describe('is.odd',function(){
		it('should return true if passed parameter type is odd',function(){
			var argumdents = 11;
			expect(is.odd(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not odd", function () {
			var notArguments = 10;
			expect(is.odd(notArguments)).to.be.false;
		});
	});
	
	describe('is.positive',function(){
		it('should return true if passed parameter type is positive',function(){
			var argumdents = 24;
			expect(is.positive(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not positive", function () {
			var notArguments = -11;
			expect(is.positive(notArguments)).to.be.false;
		});
	});
	
	describe('is.negative',function(){
		it('should return true if passed parameter type is negative',function(){
			var argumdents = -24;
			expect(is.negative(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not negative", function () {
			var notArguments = 11;
			expect(is.negative(notArguments)).to.be.false;
		});
	});
	
	describe('is.above',function(){
		it('should return true if passed parameter type is above',function(){
			var argumdents = 24;
			expect(is.above(argumdents,12)).to.be.true;
		});
		it("should return false if passed parameter type is not above", function () {
			var notArguments = 11;
			expect(is.above(notArguments,12)).to.be.false;
						var notArguments = 'test';
			expect(is.above(notArguments,12)).to.be.false;
		});
	});
	
	describe('is.under',function(){
		it('should return true if passed parameter type is under',function(){
			var argumdents = 24;
			expect(is.under(argumdents,30)).to.be.true;
		});
		it("should return false if passed parameter type is not under", function () {
			var notArguments = 11;
			expect(is.under(notArguments,5)).to.be.false;
			var notArguments = 'test';
			expect(is.under(notArguments,30)).to.be.false;
		});
	});
	
	describe('is.within',function(){
		it('should return true if passed parameter type is within',function(){
			var argumdents = 24;
			expect(is.within(argumdents,10,30)).to.be.true;
		});
		it("should return false if passed parameter type is not within", function () {
			var notArguments = 11;
			expect(is.within(notArguments,5,7)).to.be.false;
			var notArguments = 11;
			expect(is.within(notArguments,15,17)).to.be.false;
		});
	});
	
	describe('is.decimal',function(){
		it('should return true if passed parameter type is decimal',function(){
			var argumdents = 24.12;
			expect(is.decimal(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not decimal", function () {
			var notArguments = 11;
			expect(is.decimal(notArguments)).to.be.false;
			var notArguments = 'test';
			expect(is.decimal(notArguments)).to.be.false;
		});
	});
	
	describe('is.integer',function(){
		it('should return true if passed parameter type is integer',function(){
			var argumdents = 24;
			expect(is.integer(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not integer", function () {
			var notArguments = 11.12;
			expect(is.integer(notArguments)).to.be.false;
			var notArguments = 'test';
			expect(is.integer(notArguments)).to.be.false;
		});
	});
	
	describe('is.finite',function(){
		it('should return true if passed parameter type is finite',function(){
			var argumdents = 24;
			expect(is.finite(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not finite", function () {
			var notArguments = -Infinity;
			expect(is.finite(notArguments)).to.be.false;
			var notArguments = NaN;
			expect(is.finite(notArguments)).to.be.false;
		});
	});
// Regexp checks
// String checks	
	describe('is.include',function(){
		it('should return true if passed parameter type is include',function(){
			var argumdents = 'test';
			expect(is.include(argumdents,'st')).to.be.true;
		});
		it("should return false if passed parameter type is not include", function () {
			var notArguments = 'test';
			expect(is.include(notArguments,'a')).to.be.false;
		});
	});
	
	describe('is.upperCase',function(){
		it('should return true if passed parameter type is upperCase',function(){
			var argumdents = 'TEST';
			expect(is.upperCase(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not upperCase", function () {
			var notArguments = 'test';
			expect(is.upperCase(notArguments)).to.be.false;
		});
	});
	
	describe('is.lowerCase',function(){
		it('should return true if passed parameter type is lowerCase',function(){
			var argumdents = 'test';
			expect(is.lowerCase(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not lowerCase", function () {
			var notArguments = 'Test';
			expect(is.lowerCase(notArguments)).to.be.false;
		});
	});
	
	describe('is.startWith',function(){
		it('should return true if passed parameter type is startWith',function(){
			var argumdents = 'test';
			expect(is.startWith(argumdents,'t')).to.be.true;
		});
		it("should return false if passed parameter type is not startWith", function () {
			var notArguments = 'test';
			expect(is.startWith(notArguments,'a')).to.be.false;
		});
	});
	
	describe('is.endWith',function(){
		it('should return true if passed parameter type is endWith',function(){
			var argumdents = 'sdfghj';
			expect(is.endWith(argumdents,'j')).to.be.true;
		});
		it("should return false if passed parameter type is not endWith", function () {
			var notArguments = 'test';
			expect(is.endWith(notArguments,'e')).to.be.false;
		});
	});
	
	describe('is.capitalized',function(){
		it('should return true if passed parameter type is capitalized',function(){
			var argumdents = 'TEST TEST';
			expect(is.capitalized(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not capitalized", function () {
			var notArguments = 'Test test';
			expect(is.capitalized(notArguments)).to.be.false;
		});
	});
	
	describe('is.palindrome',function(){
		it('should return true if passed parameter type is palindrome',function(){
			var argumdents = 'kayak';
			expect(is.palindrome(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not palindrome", function () {
			var notArguments = 'test';
			expect(is.palindrome(notArguments)).to.be.false;
		});
	});
// Time checks	
	describe('is.today',function(){
		it('should return true if passed parameter type is today',function(){
			var argumdents = now.toDateString();
			expect(is.today(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not today", function () {
			var notArguments = 'test';
			expect(is.today(notArguments)).to.be.false;
		});
	});
	
	describe('is.yesterday',function(){
		it('should return true if passed parameter type is yesterday',function(){
			var argumdents = now.toDateString()-1;
			expect(is.yesterday(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not yesterday", function () {
			var notArguments = 'test';
			expect(is.yesterday(notArguments)).to.be.false;
		});
	});
	
	describe('is.tomorrow',function(){
		it('should return true if passed parameter type is tomorrow',function(){
			var argumdents = now.toDateString()+1;
			expect(is.tomorrow(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not tomorrow", function () {
			var notArguments = 'test';
			expect(is.tomorrow(notArguments)).to.be.false;
		});
	});
	
	describe('is.past',function(){
		it('should return true if passed parameter type is past',function(){
			var argumdents = now.toDateString()-5;
			expect(is.past(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not past", function () {
			var notArguments = 'test';
			expect(is.past(notArguments)).to.be.false;
		});
	});
	
		describe('is.future',function(){
		it('should return true if passed parameter type is future',function(){
			var argumdents = now.toDateString()+5;
			expect(is.future(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not future", function () {
			var notArguments = 'test';
			expect(is.future(notArguments)).to.be.false;
		});
	});
	
	
	
});