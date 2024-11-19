"use strict";
async function request(url, options) {
    const resp = await fetch(url, options);
    if (!resp.ok)
        throw new Error(`HTTP Error: ${resp.status}`);
    return await resp.json();
}
(async () => {
    const url = 'https://post.api';
    const body = { title: 'new title' };
    const id = 21;
    try {
        const data = await request(`${url}/${id}`, {
            method: 'POST',
            body: JSON.stringify(body)
        });
        console.log(data); // number | null
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        console.error(err);
    }
    ;
})();
//# sourceMappingURL=app.js.map