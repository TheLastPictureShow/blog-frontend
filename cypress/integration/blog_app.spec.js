describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "Brian",
      username: "brian456",
      password: "yadayadayada",
    };
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("Login form is displayed by default", function () {
    cy.get("form").should("have.class", "login");
  });

  describe("When logged in..", function () {
    beforeEach(function () {
      cy.login({ username: "brian456", password: "yadayadayada" });
    });

    it("..a blog can be created", function () {
      cy.createBlog({
        title: "Wizards",
        author: "Rowling",
        url: "www.hp.com",
        likes: 0,
      });
    });

    describe("..and a blog exists", function () {
      beforeEach(function () {
        cy.createBlog({
          title: "Enchanters",
          author: "Le Guin",
          url: "www.lg.com",
          likes: 0,
        });
      });

      it("..can be liked", function () {});
    });
  });

  describe("Login..", function () {
    beforeEach(function () {
      cy.visit("http://localhost:3000");
    });

    it("..succeeds with correct credentials", function () {
      cy.contains("login").click();
      cy.get("#username").type("brian456");
      cy.get("#password").type("yadayadayada");
      cy.get("#login-button").click();
      cy.contains("Brian has logged in");
    });

    it("..fails with wrong credentials", function () {
      cy.contains("login").click();
      cy.get("#username").type("brian456");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();

      cy.get("html").should("not.contain", "Brian has logged in");
    });
  });
});

// // ...
// // ...
// // ...
// // ...
