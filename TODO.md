# Picnic Finder: Todo list

## 1. Firebase setup
- [ ] Add a **Web app** in Firebase Console (Project settings > Your apps) and paste its config into `src/firebase.js`
- [ ] Build > Authentication > Sign-in method > enable **Email/Password**
- [ ] Build > Authentication > Users > **Add user** (your admin email + password)
- [ ] Build > Realtime Database > Rules > paste `database.rules.json` > Publish
- [ ] In Realtime Database data, add `admins` > `<your user UID>` = `true`
- [ ] Google Cloud Console > Credentials: restrict the web API key to your GitHub Pages domain

## 2. Termux
- [ ] `pkg update && pkg upgrade`
- [ ] `pkg install nodejs git unzip`
- [ ] Unzip the project, `cd picnic-finder`, `npm install`
- [ ] `npm run dev` and open http://localhost:5173

## 3. Test as a visitor (no login)
- [ ] List loads
- [ ] Entry fee filter: All / Free / Paid
- [ ] Place filter: Park / Swimming pool / Forest
- [ ] Tap a place: card opens with description and address
- [ ] Map button opens the map app
- [ ] Owner-name button starts a call
- [ ] WhatsApp and Facebook buttons open
- [ ] Tags are hidden until "Show tags" is tapped

## 4. Test as admin (`/#/admin`)
- [ ] Wrong password shows an error
- [ ] Sign in works, non-admin account is blocked
- [ ] Add place
- [ ] Edit place
- [ ] Delete place
- [ ] Add, rename and delete a place type
- [ ] Sign out

## 5. Deploy to GitHub
- [ ] Create a GitHub repo
- [ ] `git init && git add . && git commit -m "Picnic Finder"`
- [ ] `git branch -M main && git remote add origin https://github.com/USER/REPO.git`
- [ ] `git push -u origin main` (use a Personal Access Token as the password)
- [ ] `npm run deploy` (publishes `dist` to the `gh-pages` branch)
- [ ] Repo Settings > Pages > Source: branch `gh-pages`, folder `/ (root)`
- [ ] Open https://USER.github.io/REPO/

## 6. Later ideas
- [ ] Photos per place (Firebase Storage)
- [ ] "Near me" sort using GPS
- [ ] Filter by tag on the public list
