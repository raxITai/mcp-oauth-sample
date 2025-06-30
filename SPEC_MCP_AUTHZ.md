# Authorization

<div id="enable-section-numbers" />

<Info>**Protocol Revision**: 2025-06-18</Info>

## Introduction

### Purpose and Scope

The Model Context Protocol provides authorization capabilities at the transport level,
enabling MCP clients to make requests to restricted MCP servers on behalf of resource
owners. This specification defines the authorization flow for HTTP-based transports.

### Protocol Requirements

Authorization is **OPTIONAL** for MCP implementations. When supported:

* Implementations using an HTTP-based transport **SHOULD** conform to this specification.
* Implementations using an STDIO transport **SHOULD NOT** follow this specification, and
  instead retrieve credentials from the environment.
* Implementations using alternative transports **MUST** follow established security best
  practices for their protocol.

### Standards Compliance

This authorization mechanism is based on established specifications listed below, but
implements a selected subset of their features to ensure security and interoperability
while maintaining simplicity:

* OAuth 2.1 IETF DRAFT ([draft-ietf-oauth-v2-1-12](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12))
* OAuth 2.0 Authorization Server Metadata
  ([RFC8414](https://datatracker.ietf.org/doc/html/rfc8414))
* OAuth 2.0 Dynamic Client Registration Protocol
  ([RFC7591](https://datatracker.ietf.org/doc/html/rfc7591))
* OAuth 2.0 Protected Resource Metadata ([RFC9728](https://datatracker.ietf.org/doc/html/rfc9728))

## Authorization Flow

### Roles

A protected *MCP server* acts as an [OAuth 2.1 resource server](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-12.html#name-roles),
capable of accepting and responding to protected resource requests using access tokens.

An *MCP client* acts as an [OAuth 2.1 client](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-12.html#name-roles),
making protected resource requests on behalf of a resource owner.

The *authorization server* is responsible for interacting with the user (if necessary) and issuing access tokens for use at the MCP server.
The implementation details of the authorization server are beyond the scope of this specification. It may be hosted with the
resource server or a separate entity. The [Authorization Server Discovery section](#authorization-server-discovery)
specifies how an MCP server indicates the location of its corresponding authorization server to a client.

### Overview

1. Authorization servers **MUST** implement OAuth 2.1 with appropriate security
   measures for both confidential and public clients.

2. Authorization servers and MCP clients **SHOULD** support the OAuth 2.0 Dynamic Client Registration
   Protocol ([RFC7591](https://datatracker.ietf.org/doc/html/rfc7591)).

3. MCP servers **MUST** implement OAuth 2.0 Protected Resource Metadata ([RFC9728](https://datatracker.ietf.org/doc/html/rfc9728)).
   MCP clients **MUST** use OAuth 2.0 Protected Resource Metadata for authorization server discovery.

4. Authorization servers **MUST** provide OAuth 2.0 Authorization
   Server Metadata ([RFC8414](https://datatracker.ietf.org/doc/html/rfc8414)).
   MCP clients **MUST** use the OAuth 2.0 Authorization Server Metadata.

### Authorization Server Discovery

This section describes the mechanisms by which MCP servers advertise their associated
authorization servers to MCP clients, as well as the discovery process through which MCP
clients can determine authorization server endpoints and supported capabilities.

#### Authorization Server Location

MCP servers **MUST** implement the OAuth 2.0 Protected Resource Metadata ([RFC9728](https://datatracker.ietf.org/doc/html/rfc9728))
specification to indicate the locations of authorization servers. The Protected Resource Metadata document returned by the MCP server **MUST** include
the `authorization_servers` field containing at least one authorization server.

The specific use of `authorization_servers` is beyond the scope of this specification; implementers should consult
OAuth 2.0 Protected Resource Metadata ([RFC9728](https://datatracker.ietf.org/doc/html/rfc9728)) for
guidance on implementation details.

Implementors should note that Protected Resource Metadata documents can define multiple authorization servers. The responsibility for selecting which authorization server to use lies with the MCP client, following the guidelines specified in
[RFC9728 Section 7.6 "Authorization Servers"](https://datatracker.ietf.org/doc/html/rfc9728#name-authorization-servers).

MCP servers **MUST** use the HTTP header `WWW-Authenticate` when returning a *401 Unauthorized* to indicate the location of the resource server metadata URL
as described in [RFC9728 Section 5.1 "WWW-Authenticate Response"](https://datatracker.ietf.org/doc/html/rfc9728#name-www-authenticate-response).

MCP clients **MUST** be able to parse `WWW-Authenticate` headers and respond appropriately to `HTTP 401 Unauthorized` responses from the MCP server.

#### Server Metadata Discovery

MCP clients **MUST** follow the OAuth 2.0 Authorization Server Metadata [RFC8414](https://datatracker.ietf.org/doc/html/rfc8414)
specification to obtain the information required to interact with the authorization server.

#### Sequence Diagram

The following diagram outlines an example flow:

```mermaid
sequenceDiagram
    participant C as Client
    participant M as MCP Server (Resource Server)
    participant A as Authorization Server

    C->>M: MCP request without token
    M-->>C: HTTP 401 Unauthorized with WWW-Authenticate header
    Note over C: Extract resource_metadata<br />from WWW-Authenticate

    C->>M: GET /.well-known/oauth-protected-resource
    M-->>C: Resource metadata with authorization server URL
    Note over C: Validate RS metadata,<br />build AS metadata URL

    C->>A: GET /.well-known/oauth-authorization-server
    A-->>C: Authorization server metadata

    Note over C,A: OAuth 2.1 authorization flow happens here

    C->>A: Token request
    A-->>C: Access token

    C->>M: MCP request with access token
    M-->>C: MCP response
    Note over C,M: MCP communication continues with valid token
```

### Dynamic Client Registration

MCP clients and authorization servers **SHOULD** support the
OAuth 2.0 Dynamic Client Registration Protocol [RFC7591](https://datatracker.ietf.org/doc/html/rfc7591)
to allow MCP clients to obtain OAuth client IDs without user interaction. This provides a
standardized way for clients to automatically register with new authorization servers, which is crucial
for MCP because:

* Clients may not know all possible MCP servers and their authorization servers in advance.
* Manual registration would create friction for users.
* It enables seamless connection to new MCP servers and their authorization servers.
* Authorization servers can implement their own registration policies.

Any authorization servers that *do not* support Dynamic Client Registration need to provide
alternative ways to obtain a client ID (and, if applicable, client credentials). For one of
these authorization servers, MCP clients will have to either:

1. Hardcode a client ID (and, if applicable, client credentials) specifically for the MCP client to use when
   interacting with that authorization server, or
2. Present a UI to users that allows them to enter these details, after registering an
   OAuth client themselves (e.g., through a configuration interface hosted by the
   server).

### Authorization Flow Steps

The complete Authorization flow proceeds as follows:

```mermaid
sequenceDiagram
    participant B as User-Agent (Browser)
    participant C as Client
    participant M as MCP Server (Resource Server)
    participant A as Authorization Server

    C->>M: MCP request without token
    M->>C: HTTP 401 Unauthorized with WWW-Authenticate header
    Note over C: Extract resource_metadata URL from WWW-Authenticate

    C->>M: Request Protected Resource Metadata
    M->>C: Return metadata

    Note over C: Parse metadata and extract authorization server(s)<br/>Client determines AS to use

    C->>A: GET /.well-known/oauth-authorization-server
    A->>C: Authorization server metadata response

    alt Dynamic client registration
        C->>A: POST /register
        A->>C: Client Credentials
    end

    Note over C: Generate PKCE parameters<br/>Include resource parameter
    C->>B: Open browser with authorization URL + code_challenge + resource
    B->>A: Authorization request with resource parameter
    Note over A: User authorizes
    A->>B: Redirect to callback with authorization code
    B->>C: Authorization code callback
    C->>A: Token request + code_verifier + resource
    A->>C: Access token (+ refresh token)
    C->>M: MCP request with access token
    M-->>C: MCP response
    Note over C,M: MCP communication continues with valid token
```

#### Resource Parameter Implementation

MCP clients **MUST** implement Resource Indicators for OAuth 2.0 as defined in [RFC 8707](https://www.rfc-editor.org/rfc/rfc8707.html)
to explicitly specify the target resource for which the token is being requested. The `resource` parameter:

1. **MUST** be included in both authorization requests and token requests.
2. **MUST** identify the MCP server that the client intends to use the token with.
3. **MUST** use the canonical URI of the MCP server as defined in [RFC 8707 Section 2](https://www.rfc-editor.org/rfc/rfc8707.html#name-access-token-request).

##### Canonical Server URI

For the purposes of this specification, the canonical URI of an MCP server is defined as the resource identifier as specified in
[RFC 8707 Section 2](https://www.rfc-editor.org/rfc/rfc8707.html#section-2) and aligns with the `resource` parameter in
[RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728).

MCP clients **SHOULD** provide the most specific URI that they can for the MCP server they intend to access, following the guidance in [RFC 8707](https://www.rfc-editor.org/rfc/rfc8707). While the canonical form uses lowercase scheme and host components, implementations **SHOULD** accept uppercase scheme and host components for robustness and interoperability.

Examples of valid canonical URIs:

* `https://mcp.example.com/mcp`
* `https://mcp.example.com`
* `https://mcp.example.com:8443`
* `https://mcp.example.com/server/mcp` (when path component is necessary to identify individual MCP server)

Examples of invalid canonical URIs:

* `mcp.example.com` (missing scheme)
* `https://mcp.example.com#fragment` (contains fragment)

> **Note:** While both `https://mcp.example.com/` (with trailing slash) and `https://mcp.example.com` (without trailing slash) are technically valid absolute URIs according to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986), implementations **SHOULD** consistently use the form without the trailing slash for better interoperability unless the trailing slash is semantically significant for the specific resource.

For example, if accessing an MCP server at `https://mcp.example.com`, the authorization request would include:

```
&resource=https%3A%2F%2Fmcp.example.com
```

MCP clients **MUST** send this parameter regardless of whether authorization servers support it.

### Access Token Usage

#### Token Requirements

Access token handling when making requests to MCP servers **MUST** conform to the requirements defined in
[OAuth 2.1 Section 5 "Resource Requests"](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5).
Specifically:

1. MCP client **MUST** use the Authorization request header field defined in
   [OAuth 2.1 Section 5.1.1](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.1.1):

```
Authorization: Bearer <access-token>
```

Note that authorization **MUST** be included in every HTTP request from client to server,
even if they are part of the same logical session.

2. Access tokens **MUST NOT** be included in the URI query string

Example request:

```http
GET /mcp HTTP/1.1
Host: mcp.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

#### Token Handling

MCP servers, acting in their role as an OAuth 2.1 resource server, **MUST** validate access tokens as described in
[OAuth 2.1 Section 5.2](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.2).
MCP servers **MUST** validate that access tokens were issued specifically for them as the intended audience,
according to [RFC 8707 Section 2](https://www.rfc-editor.org/rfc/rfc8707.html#section-2).
If validation fails, servers **MUST** respond according to
[OAuth 2.1 Section 5.3](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.3)
error handling requirements. Invalid or expired tokens **MUST** receive a HTTP 401
response.

MCP clients **MUST NOT** send tokens to the MCP server other than ones issued by the MCP server's authorization server.

Authorization servers **MUST** only accept tokens that are valid for use with their
own resources.

MCP servers **MUST NOT** accept or transit any other tokens.

### Error Handling

Servers **MUST** return appropriate HTTP status codes for authorization errors:

| Status Code | Description  | Usage                                      |
| ----------- | ------------ | ------------------------------------------ |
| 401         | Unauthorized | Authorization required or token invalid    |
| 403         | Forbidden    | Invalid scopes or insufficient permissions |
| 400         | Bad Request  | Malformed authorization request            |

## Security Considerations

Implementations **MUST** follow OAuth 2.1 security best practices as laid out in [OAuth 2.1 Section 7. "Security Considerations"](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#name-security-considerations).

### Token Audience Binding and Validation

[RFC 8707](https://www.rfc-editor.org/rfc/rfc8707.html) Resource Indicators provide critical security benefits by binding tokens to their intended
audiences **when the Authorization Server supports the capability**. To enable current and future adoption:

* MCP clients **MUST** include the `resource` parameter in authorization and token requests as specified in the [Resource Parameter Implementation](#resource-parameter-implementation) section
* MCP servers **MUST** validate that tokens presented to them were specifically issued for their use

The [Security Best Practices document](/specification/draft/basic/security_best_practices#token-passthrough)
outlines why token audience validation is crucial and why token passthrough is explicitly forbidden.

### Token Theft

Attackers who obtain tokens stored by the client, or tokens cached or logged on the server can access protected resources with
requests that appear legitimate to resource servers.

Clients and servers **MUST** implement secure token storage and follow OAuth best practices,
as outlined in [OAuth 2.1, Section 7.1](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-7.1).

Authorization servers **SHOULD** issue short-lived access tokens to reduce the impact of leaked tokens.
For public clients, authorization servers **MUST** rotate refresh tokens as described in [OAuth 2.1 Section 4.3.1 "Refresh Token Grant"](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-4.3.1).

### Communication Security

Implementations **MUST** follow [OAuth 2.1 Section 1.5 "Communication Security"](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-1.5).

Specifically:

1. All authorization server endpoints **MUST** be served over HTTPS.
2. All redirect URIs **MUST** be either `localhost` or use HTTPS.

### Authorization Code Protection

An attacker who has gained access to an authorization code contained in an authorization response can try to redeem the authorization code for an access token or otherwise make use of the authorization code.
(Further described in [OAuth 2.1 Section 7.5](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-7.5))

To mitigate this, MCP clients **MUST** implement PKCE according to [OAuth 2.1 Section 7.5.2](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-7.5.2).
PKCE helps prevent authorization code interception and injection attacks by requiring clients to create a secret verifier-challenge pair, ensuring that only the original requestor can exchange an authorization code for tokens.

### Open Redirection

An attacker may craft malicious redirect URIs to direct users to phishing sites.

MCP clients **MUST** have redirect URIs registered with the authorization server.

Authorization servers **MUST** validate exact redirect URIs against pre-registered values to prevent redirection attacks.

MCP clients **SHOULD** use and verify state parameters in the authorization code flow
and discard any results that do not include or have a mismatch with the original state.

Authorization servers **MUST** take precautions to prevent redirecting user agents to untrusted URI's, following suggestions laid out in [OAuth 2.1 Section 7.12.2](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-7.12.2)

Authorization servers **SHOULD** only automatically redirect the user agent if it trusts the redirection URI. If the URI is not trusted, the authorization server MAY inform the user and rely on the user to make the correct decision.

### Confused Deputy Problem

Attackers can exploit MCP servers acting as intermediaries to third-party APIs, leading to [confused deputy vulnerabilities](/specification/2025-06-18/basic/security_best_practices#confused-deputy-problem).
By using stolen authorization codes, they can obtain access tokens without user consent.

MCP proxy servers using static client IDs **MUST** obtain user consent for each dynamically
registered client before forwarding to third-party authorization servers (which may require additional consent).

### Access Token Privilege Restriction

An attacker can gain unauthorized access or otherwise compromise a MCP server if the server accepts tokens issued for other resources.

This vulnerability has two critical dimensions:

1. **Audience validation failures.** When an MCP server doesn't verify that tokens were specifically intended for it (for example, via the audience claim, as mentioned in [RFC9068](https://www.rfc-editor.org/rfc/rfc9068.html)), it may accept tokens originally issued for other services. This breaks a fundamental OAuth security boundary, allowing attackers to reuse legitimate tokens across different services than intended.
2. **Token passthrough.** If the MCP server not only accepts tokens with incorrect audiences but also forwards these unmodified tokens to downstream services, it can potentially cause the ["confused deputy" problem](#confused-deputy-problem), where the downstream API may incorrectly trust the token as if it came from the MCP server or assume the token was validated by the upstream API. See the [Token Passthrough section](/specification/2025-06-18/basic/security_best_practices#token-passthrough) of the Security Best Practices guide for additional details.

MCP servers **MUST** validate access tokens before processing the request, ensuring the access token is issued specifically for the MCP server, and take all necessary steps to ensure no data is returned to unauthorized parties.

A MCP server **MUST** follow the guidelines in [OAuth 2.1 - Section 5.2](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-12.html#section-5.2) to validate inbound tokens.

MCP servers **MUST** only accept tokens specifically intended for themselves and **MUST** reject tokens that do not include them in the audience claim or otherwise verify that they are the intended recipient of the token. See the [Security Best Practices Token Passthrough section](/specification/2025-06-18/basic/security_best_practices#token-passthrough) for details.

If the MCP server makes requests to upstream APIs, it may act as an OAuth client to them. The access token used at the upstream API is a seperate token, issued by the upstream authorization server. The MCP server **MUST NOT** pass through the token it received from the MCP client.

MCP clients **MUST** implement and use the `resource` parameter as defined in [RFC 8707 - Resource Indicators for OAuth 2.0](https://www.rfc-editor.org/rfc/rfc8707.html)
to explicitly specify the target resource for which the token is being requested. This requirement aligns with the recommendation in
[RFC 9728 Section 7.4](https://datatracker.ietf.org/doc/html/rfc9728#section-7.4). This ensures that access tokens are bound to their intended resources and
cannot be misused across different services.


OTHER HELPDUL ARTICLES 

Aaron Parecki
ArticlesNotesPhotos
Let's fix OAuth in MCP
April 3, 2025
Update: The changes described in this blog post have been incorporated into the 2025-06-18 version of the MCP spec!
Let's not overthink auth in MCP.

Yes, the MCP server is going to need its own auth server. But it's not as bad as it sounds. Let me explain.

First let's get a few pieces of terminology straight.

The confusion that's happening in the discussions I've seen so far is because the spec and diagrams show that the MCP server itself is handing authorization. That's not necessary.

oauth roles

In OAuth, we talk about the "authorization server" and "resource server" as distinct roles. I like to think of the authorization server as the "token factory", that's the thing that makes the access tokens. The resource server (usually an API) needs to be able to validate the tokens created by the authorization server.

combined AS and RS

It's possible to build a single server that is both a resource server and authorization server, and in fact many OAuth systems are built that way, especially large consumer services.

separate AS and RS

But nothing about the spec requires that the two roles are combined, it's also possible to run these as two totally unrelated services.

This flexibility that's been baked into OAuth for over a decade is what has led to the rapid adoption, as well the proliferation of open source and commercial products that provide an OAuth authorization server as a service.

So how does this relate to MCP?

I can annotate the flow from the Model Context Protocol spec to show the parts where the client talks to the MCP Resource Server separately from where the client talks to the MCP Authorization Server.

MCP Flow showing AS and RS highlighted

Here is the updated sequence diagram showing communication with each role separately.

New MCP diagram showing separate AS and RS

Why is it important to call out this change?

I've seen a few conversations in various places about how requiring the MCP Server to be both an authorization server and resource server is too much of a burden. But actually, very little needs to change about the spec to enable this separation of concerns that OAuth already provides.

I've also seen various suggestions of other ways to separate the authorization server from the MCP server, like delegating to an enterprise IdP and having the MCP server validate access tokens issued by the IdP. These other options also conflate the OAuth roles in an awkward way and would result in some undesirable properties or relationships between the various parties involved.

So what needs to change in the MCP spec to enable this?

Discovery
The main thing currently forcing the MCP Server to be both the authorization server and resource server is how the client does discovery.

One design goal of MCP is to enable a client to bootstrap everything it needs based on only the server URL provided. I think this is a great design goal, and luckily is something that can be achieved even when separating the roles in the way I've described.

The MCP spec currently says that clients are expected to fetch the OAuth Server Metadata (RFC8414) file from the MCP Server base URL, resulting in a URL such as:

https://example.com/.well-known/oauth-authorization-server

This ends up meaning the MCP Resource Server must also be an Authorization Server, which leads to the complications the community has encountered so far. The good news is there is an OAuth spec we can apply here instead: Protected Resource Metadata.

Protected Resource Metadata
The Protected Resource Metadata spec is used by a Resource Server to advertise metadata about itself, including which Authorization Server can be used with it. This spec is both new and old. It was started in 2016, but was never adopted by the OAuth working group until 2023, after I had presented at an IETF meeting about the need for clients to be able to bootstrap OAuth flows given an OAuth resource server. The spec is now awaiting publication as an RFC, and should get its RFC number in a couple months. (Update: This became RFC 9728 on April 23, 2025!)

Applying this to the MCP server would result in a sequence like the following:

New discovery flow for MCP

The MCP Client fetches the Resource Server Metadata file by appending /.well-known/oauth-protected-resource to the MCP Server base URL.
The MCP Client finds the authorization_servers property in the JSON response, and builds the Authorization Server Metadata URL by appending /.well-known/oauth-authorization-server
The MCP Client fetches the Authorization Server Metadata to find the endpoints it needs for the OAuth flow, the authorization endpoint and token endpoint
The MCP Client initiates an OAuth flow and continues as normal

Note: The Protected Resource Metadata spec also supports the Resource Server returning WWW-Authenticate with a link to the resource metadata URL if you want to avoid the requirement that MCP Servers host their metadata URLs at the .well-known endpoint, it just requires an extra HTTP request to support this.

Access Token Validation
Two things to keep in mind about how the MCP Server validates access tokens with this new separation of concerns.

If you do build the MCP Authorization Server and Resource Server as part of the same system, you don't need to do anything special to validate the access tokens the Authorization Server issues. You probably already have some sort of infrastructure in place for your normal API to validate tokens issued by your Authorization Server, so nothing changes there.

If you are using an external Authorization Server, whether that's an open source product or a commercial hosted service, that product will have its own docs for how you can validate the tokens it creates. There's a good chance it already supports the standardized JWT Access Tokens described in RFC 9068, in which case you can use off-the-shelf JWT validation middleware for common frameworks.

In either case, the critical design goal here is that the MCP Authorization Server issues access tokens that only ever need to be validated by the MCP Resource Server. This is in line with the security recommendations in Section 2.3 of RFC 9700, in particular that "access tokens SHOULD be audience-restricted to a specific resource server". In other words, it would be a bad idea for the MCP Client to be issued an access token that works with both the MCP Resource Server and the service's REST API.

Why Require the MCP Server to have an Authorization Server in the first place?
Another argument I've seen is that MCP Server developers shouldn't have to build any OAuth infrastructure at all, instead they should be able to delegate all the OAuth bits to an external service.

In principle, I agree. Getting API access and authorization right is tricky, that's why there are entire companies dedicated to solving the problem.

The architecture laid out above enables this exact separation of concerns. The difference between this architecture and some of the other proposals I've seen is that this cleanly separates the security boundaries so that there are minimal dependencies among the parties involved.

But, one thing I haven't seen mentioned in the discussions is that there actually is no requirement than an OAuth Authorization Server provide any UI itself.

An Authorization Server with no UI?
While it is desirable from a security perspective that the MCP Resource Server has a corresponding Authorization Server that issues access tokens for it, that Authorization Server doesn't actually need to have any UI or even any concept of user login or accounts. You can actually build an Authorization Server that delegates all user account management to an external service. You can see an example of this in PayPal's MCP server they recently launched.

PayPal's traditional API already supports OAuth, the authorization and token endpoints are:

https://www.paypal.com/signin/authorize
https://api-m.paypal.com/v1/oauth2/token
When PayPal built their MCP server, they launched it at https://mcp.paypal.com. If you fetch the metadata for the MCP Server, you'll find the two OAuth endpoints for the MCP Authorization Server:

https://mcp.paypal.com/authorize
https://mcp.paypal.com/token
When the MCP Client redirects the user to the authorization endpoint, the MCP server itself doesn't provide any UI. Instead, it immediately redirects the user to the real PayPal authorization endpoint which then prompts the user to log in and authorize the client.

Roles with backend API and Authorization Servers

This points to yet another benefit of architecting the MCP Authorization Server and Resource Server this way. It enables implementers to delegate the actual user management to their existing OAuth server with no changes needed to the MCP Client. The MCP Client isn't even aware that this extra redirect step was inserted in the middle. As far as the MCP Client is concerned, it has been talking to only the MCP Authorization Server. It just so happens that the MCP Authorization Server has sent the user elsewhere to actually log in.

Dynamic Client Registration
There's one more point I want to make about why having a dedicated MCP Authorization Server is helpful architecturally.

The MCP spec strongly recommends that MCP Servers (authorization servers) support Dynamic Client Registration. If MCP is successful, there will be a large number of MCP Clients talking to a large number of MCP Servers, and the user is the one deciding which combinations of clients and servers to use. This means it is not scalable to require that every MCP Client developer register their client with every MCP Server.

This is similar to the idea of using an email client with the user's chosen email server. Obviously Mozilla can't register Thunderbird with every email server out there. Instead, there needs to be a way to dynamically establish a client's identity with the OAuth server at runtime. Dynamic Client Registration is one option for how to do that.

The problem is most commercial APIs are not going to enable Dynamic Client Registration on their production servers. For example, in order to get client credentials to use the Google APIs, you need to register as a developer and then register an OAuth client after logging in. Dynamic Client Registration would allow a client to register itself without the link to the developer's account. That would mean there is no paper trail for who the client was developed by. The Dynamic Client Registration endpoint can't require authentication by definition, so is a public endpoint that can create clients, which as you can imagine opens up some potential security issues.

I do, however, think it would be reasonable to expect production services to enable Dynamic Client Registration only on the MCP's Authorization Server. This way the dynamically-registered clients wouldn't be able to use the regular REST API, but would only be able to interact with the MCP API.

Mastodon and BlueSky also have a similar problem of needing clients to show up at arbitrary authorization servers without prior coordination between the client developer and authorization server operator. I call this the "OAuth for the Open Web" problem. Mastodon used Dynamic Client Registration as their solution, and has since documented some of the issues that this creates, linked here and here.

BlueSky decided to take a different approach and instead uses an https URL as a client identifier, bypassing the need for a client registration step entirely. This has the added bonus of having at least some level of confidence of the client identity because the client identity is hosted at a domain. It would be a perfectly viable approach to use this method for MCP as well. There is a discussion on that within MCP here. This is an ongoing topic within the OAuth working group, I have a couple of drafts in progress to formalize this pattern, Client ID Metadata Document and Client ID Scheme.

Enterprise IdP Integration
Lastly, I want to touch on the idea of enabling users to log in to MCP Servers with their enterprise IdP.

When an enterprise company purchases software, they expect to be able to tie it in to their single-sign-on solution. For example, when I log in to work Slack, I enter my work email and Slack redirects me to my work IdP where I log in. This way employees don't need to have passwords with every app they use in the enterprise, they can log in to everything with the same enterprise account, and all the apps can be protected with multi-factor authentication through the IdP. This also gives the company control over which users can access which apps, as well as a way to revoke a user's access at any time.

So how does this relate to MCP?

Well, plenty of people are already trying to figure out how to let their employees safely use AI tools within the enterprise. So we need a way to let employees use their enterprise IdP to log in and authorize MCP Clients to access MCP Servers.

If you're building an MCP Server in front of an existing application that already supports enterprise Single Sign-On, then you don't need to do anything differently in the MCP Client or Server and you already have support for this. When the MCP Client redirects to the MCP Authorization Server, the MCP Authorization Server redirects to the main Authorization Server, which would then prompt the user for their company email/domain and redirect to the enterprise IdP to log in.

This brings me to yet another thing I've been seeing conflated in the discussions: user login and user authorization.

OAuth is an authorization delegation protocol. OAuth doesn't actually say anything about how users authenticate at the OAuth server, it only talks about how the user can authorize access to an application. This is actually a really great thing, because it means we can get super creative with how users authenticate.

User logs in and authorizes

Remember the yellow box "User logs in and authorizes" from the original sequence diagram? These are actually two totally distinct steps. The OAuth authorization server is responsible for getting the user to log in somehow, but there's no requirement that how the user logs in is with a username/password. This is where we can insert a single-sign-on flow to an enterprise IdP, or really anything you can imagine.

So think of this as two separate boxes: "user logs in", and "user authorizes". Then, we can replace the "user logs in" box with an entirely new OpenID Connect flow out to the enterprise IdP to log the user in, and after they are logged in they can authorize the client.

User logs in with OIDC

I'll spare you the complete expanded sequence diagram, since it looks a lot more complicated than it actually is. But I again want to stress that this is nothing new, this is already how things are commonly done today.

This all just becomes cleaner to understand when you separate the MCP Authorization Server from the MCP Resource Server.

We can push all the complexity of user login, token minting, and more onto the MCP Authorization Server, keeping the MCP Resource Server free to do the much simpler task of validating access tokens and serving resources.

Future Improvements of Enterprise IdP Integration
There are two things I want to call out about how enterprise IdP integration could be improved. Both of these are entire topics on their own, so I will only touch on the problems and link out to other places where work is happening to solve them.

There are two points of friction with the current state of enterprise login for SaaS apps.

IdP discovery
User consent
IdP Discovery
When a user logs in to a SaaS app, they need to tell the app how to find their enterprise IdP. This is commonly done by either asking the user to enter their work email, or asking the user to enter their tenant URL at the service.

Sign in with SSO

Neither of these is really a great user experience. It would be a lot better if the browser already knew which enterprise IdP the user should be sent to. This is one of my goals with the work happening in FedCM. With this new browser API, the browser can mediate the login, telling the SaaS app which enterprise IdP to use automatically only needing the user to click their account icon rather than type anything in.

User Consent
Another point of friction in the enterprise happens when a user starts connecting multiple applications to each other within the company. For example, if you drop in a Google Docs link into Slack, Slack will prompt you to connect your Google account to preview the link. Multiply this by N number of applications that can preview links, and M number of applications you might drop links to, and you end up sending the user through a huge number of OAuth consent flows.

The problem is only made worse with the explosion of AI tools. Every AI tool will need access to data in every other application in the enterprise. That is a lot of OAuth consent flows for the user to manage. Plus, the user shouldn't really be the one granting consent for Slack to access the company Google Docs account anyway. That consent should ideally be managed by the enterprise IT admin.

What we actually need is a way to enable the IT admin to grant consent for apps to talk to each other company-wide, removing the need for users to be sent through an OAuth flow at all.

This is the basis of another OAuth spec I've been working on, the Identity Assertion Authorization Grant.

The same problem applies to MCP Servers, and with the separation of concerns laid out above, it becomes straightforward to add this extension to move the consent to the enterprise and streamline the user experience.

Get in touch!

If these sound like interesting problems, please get in touch! You can find me on LinkedIn or reach me via email at aaron@parecki.com.

Thu, Apr 3, 2025 4:39pm -07:00  #oauth #mcp #modelcontextprotocol #ai #llm
Have you written a response to this? Let me know the URL:
 
Posted in /articles using quill.p3k.io

Hi, I'm Aaron, Director of Identity Standards at Okta, and co-founder of IndieWebCamp. I maintain oauth.net, write and consult about OAuth, and participate in the OAuth Working Group at the IETF. I also help people learn about video production and livestreaming. (detailed bio)

I've been tracking my location since 2008 and I wrote 100 songs in 100 days. I've spoken at conferences around the world about owning your data, OAuth, quantified self, and explained why R is a vowel. Read more.

 Director of Identity Standards at Okta
 IndieWebCamp Founder
 OAuth WG Editor
 OpenID Board Member

🎥 YouTube Tutorials and Reviews
🏠 We're building a triplex!
⭐️ Life Stack
⚙️ Home Automation
Search...
All
Articles
Bookmarks
Notes
Photos
Replies
Reviews
Trips
Videos
Contact
© 1999-2025 by Aaron Parecki. Powered by p3k. This site supports Webmention.
Except where otherwise noted, text content on this site is licensed under a Creative Commons Attribution 3.0 License.
IndieWebCamp Microformats Webmention W3C HTML5 Creative Commons