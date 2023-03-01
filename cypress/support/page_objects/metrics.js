class ListMetricsPage {
    constructor() {
        this.url = `${Cypress.env("base_url")}/metrics`;
    }

    visit() {
        cy.visit(this.url);
    }

    get metricsTable() {
        return cy.get("[data-test=\"ListMetrics__Table\"]");
    }

    get addNewMetricButton() {
        return cy.get("[data-test=\"ListMetrics__Button__AddNew\"]");
    }
}

export default ListMetricsPage;
