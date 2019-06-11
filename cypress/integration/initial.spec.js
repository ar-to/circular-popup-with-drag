describe("Load Dev Website via Webpack", function() {
  it("Visits localhost:8080", function() {
    cy.visit("http://localhost:8080/");
  });
});

describe("Test static menu", function() {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("menu element exists and its a semantic nav element", () => {
    cy.document().then((doc) => {
      let menu = doc.querySelector('#menu');
      expect(menu).to.not.be.null;
      expect(menu.tagName).to.be.eql('NAV');
    })
  });
  it("test first layer hover", () => {
    cy.get('#menu ul.dropdown').invoke('show')
    cy.get('#menu ul.dropdown').should('be.visible')
  });
  it("test second layer hover", () => {
    cy.get('#menu ul.dropdown li:nth-child(2)').contains('Two').invoke('show')
    cy.get('#menu ul.dropdown li#menu__2nd-link').invoke('show')
  });
});

describe("Test drag menu", function() {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("menu element exists and its a semantic nav element", () => {
    cy.document().then((doc) => {
      let menu = doc.querySelector('#menu');
      expect(menu).to.not.be.null;
      expect(menu.tagName).to.be.eql('NAV');
    })
  });
  it("Check mousedown for e.currentTarget", () => {
    function dragStart(e) {
      var target = document.createElement("nav");
      target.setAttribute("class", "test");
      target.setAttribute("style", "cursor: pointer;");
      e.currentTarget = target;
      if (e.currentTarget === target) {
        expect(target).to.equal(target);
      }
    }
    cy.get("#menu").then($button => {
      $button.on("mousedown", dragStart);
    });
    cy.get("#menu").trigger("mousedown");
  });
});
