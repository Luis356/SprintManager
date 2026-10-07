async function enviarParaPython(tab) {
    try {
        await fetch("http://127.0.0.1:8765/aba", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: tab.title,
                url: tab.url
            })
        });
    } catch (error) {
        console.error("Erro ao enviar para o Python:", error);
    }
}


async function informarAbaAtiva(tabId) {
    try {
        const tab = await chrome.tabs.get(tabId);

        console.log("Título:", tab.title);
        console.log("URL:", tab.url);

        await enviarParaPython(tab);

    } catch (error) {
        console.error("Erro ao consultar aba:", error);
    }
}


chrome.tabs.onActivated.addListener((activeInfo) => {
    informarAbaAtiva(activeInfo.tabId);
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.active) {
        enviarParaPython(tab);
    }
});