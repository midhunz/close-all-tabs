// toolbar button event listener
chrome.action.onClicked.addListener(function (thisTab) {
    chrome.tabs.create({}, function (newTab) {
        let querying = chrome.tabs.query({}, function (tabs) {

            for (let tab of tabs) {
                if (tab.id !== newTab.id) chrome.tabs.remove(tab.id);
            }

        });
    });
});