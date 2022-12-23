## How to run the app

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes 

### Done/ Done-ish:
1. Home page
2. Routing,
3. Loging
4. Posting new tweets
5. Delete tweets
6. API is done for the most part (except some PUT routes). I'm relatively happy with the API, considering the short time frame I had to work on it.

### Broken / Bad / Missing:
1. JWT token middleware. I tried to overcomplicate it using the NextJS internal server and that ended up biting me in the back side. Next time I'd render everything on the client side and use a session based Auth system (server side).
2) Bugs galore. I didn't sleep at all last night, so I'm sure the code is riddled with bugs. Apologies if something doesn't work or make anysense.
3) The UI is rough
4) Several features missing. Unfortunatley, I bit off more than I could chew by choosing do a twitter clone in the time frame I had. I should have done a simple blog or something, and showed a small amount of high quality code.
5) No tests, because no time
6) No reply functionality on front end. Will implement over the break






