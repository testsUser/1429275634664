describe("services.ApiResponse", function ()
{
    var transformer, response;

    beforeEach(function ()
    {
        module('app.services');
        inject(function ($injector)
        {
            transformer = $injector.get('services.ApiResponse');
        });
    });

    it("Should return an empty array when it receives an empty array", function ()
    {
        expect(transformer('[]')).toEqual([]);
    });

    it("Should parse the response to 2 items with login, type, url, avatarUrl defined", function ()
    {
        expect(transformer(response)).toEqual([
            { login: 'mojombo', type: 'User', url: 'https://api.github.com/users/mojombo', avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=3' },
            { login: 'defunkt', type: 'User', url: 'https://api.github.com/users/defunkt', avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=3' }
        ]);
    });

    //Response Fixture
    beforeEach(function ()
    {
        response = JSON.stringify([
            {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "type": "User",
                "site_admin": false
            },
            {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": true
            }
        ]);
    });
});