// ==UserScript==
// @name         JIRA project search
// @namespace    http://concept-design.de/
// @version      0.1
// @description  Focus on project search on JIRA all projects page load.
// @author       Daniel Mann
// @match        https://jira.concept-design.de/secure/BrowseProjects.jspa?selectedCategory=all&selectedProjectType=all
// @grant        none
// ==/UserScript==

(function() {
    $('#project-filter-text').focus()
})();