# 🚀 How to Deploy Riya Chatbot — Step-by-Step Guide
### (No technical knowledge needed — takes less than 15 minutes)

---

## WHAT YOU NEED BEFORE STARTING
- A laptop or desktop computer (not mobile)
- Internet connection
- An email ID (Gmail works perfectly)
- The project folder: `rbu-riya-chatbot` (this folder you downloaded)

---

## PART 1 — Create a Free GitHub Account
*(GitHub is where your chatbot code will be stored)*

1. Open your browser and go to: **https://github.com**
2. Click **"Sign up"** (top right corner)
3. Enter your email, create a password, choose a username
4. Verify your email and complete sign up
5. You now have a free GitHub account ✅

---

## PART 2 — Upload Your Chatbot to GitHub

1. After logging in to GitHub, click the **"+"** icon (top right) → **"New repository"**
2. Name it: **rbu-riya-chatbot**
3. Keep it **Public**
4. Click **"Create repository"**
5. On the next page, click **"uploading an existing file"** (you'll see this link)
6. **Drag and drop** all files from your `rbu-riya-chatbot` folder into the browser window
   - Make sure you upload ALL files including the `src` and `public` folders
7. Scroll down, click **"Commit changes"** (green button)
8. Your code is now on GitHub ✅

---

## PART 3 — Deploy on Vercel (This Makes It Live on the Internet)

1. Go to: **https://vercel.com**
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Allow Vercel to access your GitHub (click Authorize)
4. You'll land on the Vercel dashboard
5. Click **"Add New Project"**
6. You'll see your `rbu-riya-chatbot` repository — click **"Import"**
7. On the next screen, just click **"Deploy"** (no changes needed)
8. Wait 2–3 minutes — Vercel will build and deploy automatically
9. 🎉 You'll see **"Congratulations!"** and a link like:
   `https://rbu-riya-chatbot.vercel.app`

---

## PART 4 — Add Your Anthropic API Key (IMPORTANT!)

The chatbot needs an API key to work. Here's how to get and add it:

### Get Your API Key:
1. Go to: **https://console.anthropic.com**
2. Sign up with your email (free account)
3. Go to **"API Keys"** in the left menu
4. Click **"Create Key"** → Copy the key (it starts with `sk-ant-...`)
5. **Save this key somewhere safe** — you'll only see it once!

### Add the Key to Vercel:
1. Go back to your Vercel dashboard
2. Click on your `rbu-riya-chatbot` project
3. Click **"Settings"** tab (top menu)
4. Click **"Environment Variables"** (left sidebar)
5. Add a new variable:
   - **Name:** `REACT_APP_ANTHROPIC_KEY`
   - **Value:** Paste your API key here
6. Click **"Save"**
7. Go to **"Deployments"** tab → Click **"Redeploy"** on the latest deployment

---

## PART 5 — Add to Instagram Bio

1. Copy your chatbot link (e.g., `https://rbu-riya-chatbot.vercel.app`)
2. Open Instagram on your phone
3. Go to your profile → Tap **"Edit Profile"**
4. In the **"Website"** field, paste your chatbot link
5. Tap **"Done"** / **"Save"**

### What to Write in Your Instagram Bio:
```
🎓 Rayat Bahra University, Mohali
💻 BTech-CSE | BCA | Powered by Sunstone
🤖 Chat with Riya — Our AI Counselor 👇
```

### What to Write in Posts & Reels:
```
Confused between BTech-CSE and BCA?
Chat with Riya — our AI admission counselor!
Available 24/7. Link in bio 👆🎓
```

---

## YOUR CHATBOT IS NOW LIVE! 🎉

Students from HP, Punjab, J&K, and Chandigarh can now:
- Chat with Riya anytime, 24/7
- Get answers about BTech-CSE and BCA
- Learn about fees, placements, Sunstone benefits
- Leave their Name, WhatsApp & Email (your leads!)
- Refer friends through the referral form

---

## NEED HELP?

If you get stuck at any step, take a screenshot and share it.
We can solve any issue together!

---

*Built for Rayat Bahra University, Mohali | Powered by Sunstone*
