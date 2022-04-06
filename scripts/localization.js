i18next
    .use(i18nextHttpBackend)
    .init({
        fallbackLng: "en",
        backend: {
            loadPath: "/res/lang/{{lng}}.json"
        }
    }, (err, t) => {
        updateContent();
    });