import MetricsListPage from "../../support/page_objects/metrics";

describe("Metrics list page", () => {
    let metricsListPage = new MetricsListPage();

    beforeEach("The user access to the metrics list page", () => {
        metricsListPage.visit();
        cy.url().should("eq", `${Cypress.env("base_url")}/metrics`);
    });

    it("should allow the user to see the metrics and the add new metric button", () => {
        metricsListPage.metricsTable.should("exist");
        metricsListPage.addNewMetricButton.should("exist");
    });
});