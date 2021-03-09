const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabPanel"]`));

function buttonHandler(e) {

    tabPanels.forEach(panel => {
        panel.hidden = true;
        e.currentTarget.hidden = false;
    })

    tabButtons.forEach(button => {
        button.setAttribute("aria-selected", false);
    })

    e.currentTarget.setAttribute("aria-selected", true);

    const { id } = e.currentTarget;
    const activeTab = tabPanels.find(panel => panel.getAttribute("aria-labelledby") === id);
    activeTab.hidden = false;
}


tabButtons.forEach(button => button.addEventListener("click", buttonHandler));