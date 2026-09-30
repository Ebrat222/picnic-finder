# Picnic Finder

React (Vite) + Firebase Realtime Database + Firebase Auth. Public visitors browse places without logging in. Admins sign in at `/#/admin` to add, edit and delete everything.

Follow `TODO.md` step by step.

## Data layout

```
places/{id}      title, description, category, fee ("free"|"paid"), feeAmount,
                 address, mapCode, contacts[{name, phone}], whatsapp, facebook,
                 tags[], createdAt, updatedAt
categories/{id}  name, createdAt        (place types: Park, Swimming pool, Forest...)
admins/{uid}     true                   (added by hand in the console)
```

Anyone can read `places` and `categories`. Only users listed under `admins` can write. The rules in `database.rules.json` enforce this on the server, so hiding the admin page is not what protects your data.

## If `npm install` or `vite` fails in Termux
Update Node (`pkg upgrade nodejs`) and retry. If esbuild still complains, run `pkg install esbuild` and `npm rebuild esbuild`.
