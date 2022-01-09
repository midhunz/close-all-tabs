const closeAllTabs = ()=>{
    chrome.tabs.create({}, function (newTab) {
        let querying = chrome.tabs.query({}, function (tabs) {
            for (let tab of tabs) {
                if (tab.id !== newTab.id) chrome.tabs.remove(tab.id);
            }
        });
    });
}

// toolbar button event listener
chrome.action.onClicked.addListener(function (thisTab) {
    closeAllTabs();
});

// it will listen key board shortcut
chrome.commands.onCommand.addListener((command) => {
    closeAllTabs();
});