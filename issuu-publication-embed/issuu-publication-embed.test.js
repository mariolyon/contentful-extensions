test('regex should match issuu username and publication id', () => {
    const regex = /u=(.+)&d=(.+)/;
    const goodUrls = [
        'https://e.issuu.com/anonymous-embed.html?u=mly-issuu&d=loremipsum',
        'https://e.issuu.com/anonymous-embed.html?u=mly-issuu&d=loremipsum',
    ];

    const badUrls = [
        'https://e.issuu.com/anonymous-embed.html',
        'https://e.issuu.com/anonymous-embed.html?u=mly-issuu',
    ];

    for (const url of goodUrls) {
        const match = url.match(regex);
        expect(match).toBeTruthy();
        expect(match[1]).toBe('mly-issuu');
        expect(match[2]).toBe('loremipsum');
    }

    for (const url of badUrls) {
        const match = url.match(regex);
        expect(match).toBeFalsy();
    }
});
