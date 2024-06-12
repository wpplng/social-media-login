describe('User management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should register a new user successfully', () => {
    cy.get('#register-username').type('newuser');
    cy.get('#register-password').type('password123');
    cy.get('#register-button').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('User registered successfully');
    });
  });

  it('should login an existing user successfully', () => {
    cy.get('#login-username').type('newuser');
    cy.get('#login-password').type('password123');
    cy.get('#login-button').click();

    cy.url().should('include', '/dashboard');
  });

  it('should change the password successfully', () => {
    cy.visit('http://localhost:8080/dashboard');
    cy.get('#change-password').type('newpassword123');
    cy.get('#change-password-button').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Password changed successfully');
    });
  });
});
