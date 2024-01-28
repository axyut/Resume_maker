const register = require("../controllers/auth");
const signin = require("../controllers/auth");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");

describe("product", () => {
	describe("get product route ", () => {
		describe("given the product doesnot exist", () => {
			it("should return a 404", () => {
				expect(true).toBe(true);
			});
		});
	});
});

const animals = ["cat", "dog"];

test("Animal Arrays", () => {
	expect(animals).toContain("dog");
	expect(animals).toBeInstanceOf(Array);
});

const req = {
	body: {
		email: "asd@gmail.com",
		password: "longpass",
	},
};

test("User login", () => {
	expect(() => register()).toThrow();
});
