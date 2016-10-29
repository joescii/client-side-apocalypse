---

Declarative templates, boundaries between static and dynamic, Realtime view updates, with err'thing rendered on the backend

Using the coolest buzzwords like websockets and elixir!

---

## Hello. I’m Dan McGuire
===
#### work:                    Metabahn
#### favorite sound:          Microwave buzz
#### favorite color:          Razzmatazz
#### what I did last friday:  none of your business
#### lifegoals:  become a meme on reddit

---

![](/Users/tuelz/Desktop/Screen\ Shot\ 2016-10-14\ at\ 10.02.33\ PM.png)

---

#problems

- integration testing is harder and slower when spinning up a headless browser

- view layer is pretty all or nothing during development (poor incremental development)

    1. two api/controller layers, routing data on both sides
    2. maybe you mock data during dev, but maybe it's harder to mock non-presented data

- separating presentation of dynamic data and static templates is almost non-existent today

---

#more problems

- client technology fatigue is a real thing

- client side complexity is growing (show the image)

- consistent behaviors on the web are being broken

    1. sometimes URLs don't point to resources
    2. sometimes CDNs fail and the page is unusable

- memory leaks everywhere in javascript

---

![inline fill](/Users/tuelz/Downloads/complexity.png)
### credits to @sstephenson

---

## how we got here
===

#### Users want quick, robust reactions to their actions

#### first answer: *Jquery with ajax*

#### Then developers kept on making spaghetti: *frameworks*

#### Then front end rendering was too slow:  *js on the backend (node)*

#### Then all the logic somehow ended up on the front-end and we needed access: *graphql*

---

#solutions

---

pakyow VTP
===
The View Transformation Protocol is a way to represent view rendering as a set of instructions that can later be applied to the view template. Pakyow implements this protocol on the backend for initial rendering and in Ring for client-side rendering.

---

VTP for me can be broken into two parts.

1. Separating the dynamic from the static
2. finding betters ways to update the dyamic for clients

---

Introducting ratchet

---

#### Current templating formats
```html
<ul>
  <%= @users.each do |user| %>
    <li> “#{user.name}” </li>
  <% end %>
</ul>
```

#### How I want things to be when I’m building 2d boxes
```html
<ul>
  <li> Some test user data </li>
  <li> another test user so I can see how two look </li>
</ul>
```

---

Ratchet
===
plain ole HTML

```html
<ul>
  <li data-prop=“user”></li>
</ul>
```

Just some function that evaluates to our stuff.

```elixir
def data do
  %{user: formatted_users()}
end

defprivate formatted_users do
  users = BackendThing.go_get_me_my_users
  Formater.uppercase_because_reasons(users)
end
```

---

cool stuff
===
1. overwriting prototype data
2. elixir specific, but iodata and template compilation is cool
3. composable functions to build data strucutres
4. simple api

---

###Next problem!
===

#### recap on heavy client side for updates

---

solution?
===

texas

- it’s basically just boilerplate JS writer right now

- think of texas as just a convenient piece of middleware

---

- lets spend a slide walking through the lifecycle of a request/response in texas

- lets talk about the similarities and differences of http vs websocket with this setup

---

Important ideas
===

- writing code is error prone, auto generated code is awesome

- http development cycle for the feature

- websockets on top

- progressive enhancement

---

` Progressive enhancement is a strategy for web design that emphasizes accessibility, semantic HTML markup, and external stylesheet and scripting technologies. Progressive enhancement uses web technologies in a layered fashion that allows everyone to access the basic content and functionality of a web page, using any browser or Internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth.
`

---

###compare
===
#### front end routing and templating alongside backend routing and data fetching

### vs

#### writing some html with a form to POST some data to that same endpoint that accepts http requests that you've probably written 5 brazillion times with the backend data fetching

---

![](/Users/tuelz/Desktop/low_data.gif)

---

![](/Users/tuelz/Desktop/high_data.gif)

---

##future?
===

how can we make texas more smooth than butter?

- changesets
 -- full state on backend with cached client representations
 -- some data changeset

---

Questions?

Feel free to get off topic (whatever that topic was).

I like talking about elixir and/or phoenix too.
