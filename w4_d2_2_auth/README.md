# Authentication

| Objectives |
| :--- |
| Review the request and response cycle and the stateless web. |
| Use Express to add sessions to your application. |
| Implement basic authentication in your application. |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Stateless web, sessions, authentication | Node, Express, Postman | Challenges |

### Motivation (Why?)

Every HTTP request/response stands on its own. Because the request is the only context the client needs understand the response, the HTTP protocol is said to be *stateless*.

Sometimes we need state to persist across requests; this is where sessions come in. One example is a shopping cart. Without sessions, your shopping cart would be empty as soon as you navigated to the next page!

User authentication is another common example. When a user logs in, we'd like them to stay logged in until they log out or their session expires.

User/password combinations are a common way of authenticating. They are relatively insecure but provide sufficient security for most web applications. Thumb prints, driver's license, etc. are other ways we authenticate ourselves in the physical world.

### Analogy (What?)

Imagine you're in the habit of having deep conversations with a close friend every Sunday night. Every time you speak, you're able to pick up right where you left off. You're able to do this because you both have the context provided by previous conversations. The context you both share is analogous to a session.

Without sessions, each request/response is self contained. It would be as though you and your friend both had Alzheimer's.

### Key Snippets

## Challenges

### Docs & Resources

### Basic Challenges

### Stretch Challenges
