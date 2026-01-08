# Contact Form Setup Instructions

## 📧 Email Configuration

The contact form sends emails to: **mahagnanis@gmail.com**

## 🔑 Getting Your Web3Forms API Key

### Step 1: Create Account
1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Sign up with your email (use **mahagnanis@gmail.com** or any email)
4. Verify your email address

### Step 2: Get API Key
1. After login, you'll see your **Access Key** on the dashboard
2. Copy the access key (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Step 3: Configure Environment Variable
1. Open `.env.local` file in the project root
2. Replace the empty value with your API key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-actual-key-here
   ```
3. Save the file
4. Restart the dev server: `npm run dev`

## 🧪 Testing the Form

### Local Testing:
1. Visit `http://localhost:3000`
2. Scroll to the contact form section
3. Fill in all required fields:
   - Name (min 2 characters)
   - Email (valid email format)
   - Subject (min 5 characters)
   - Message (min 10 characters)
4. Click "Request Free Demo"
5. You should see a green success toast
6. Check **mahagnanis@gmail.com** inbox (check spam folder too)

### What the Email Contains:
- **From:** The user's email address
- **Subject:** [Mahagnani Website] {user's subject}
- **Body:** User's message with their name and email

## ✅ Verification Checklist

- [ ] Web3Forms account created
- [ ] Email verified
- [ ] API key copied
- [ ] `.env.local` updated with API key
- [ ] Dev server restarted
- [ ] Form submission successful
- [ ] Email received at mahagnanis@gmail.com
- [ ] Email link `mailto:mahagnanis@gmail.com` works
- [ ] Location link opens Google Maps (Hyderabad)

## 🔒 Security Notes

- ✅ `NEXT_PUBLIC_*` variables are safe to expose in client-side code
- ✅ `.env.local` is in `.gitignore` (won't be committed)
- ✅ Web3Forms has built-in rate limiting (50 submissions/hour by default)
- ✅ Form validation prevents malicious input

## 📊 Web3Forms Features (Free Plan)

- ✅ **Unlimited** form submissions
- ✅ Email notifications to mahagnanis@gmail.com
- ✅ Submission dashboard at web3forms.com
- ✅ Spam filtering included
- ✅ Email templates customizable
- ⚠️ Includes "Powered by Web3Forms" in emails (can remove with paid plan)

## 🐛 Troubleshooting

### Form doesn't submit:
1. Check browser console for errors
2. Verify API key is correct in `.env.local`
3. Ensure dev server was restarted after adding API key
4. Check Web3Forms dashboard for submission logs

### Email not received:
1. Check spam/junk folder in mahagnanis@gmail.com
2. Log into Web3Forms dashboard to see if submission recorded
3. Verify "to_email" is set to "mahagnanis@gmail.com" in code
4. Wait a few minutes (can take 1-5 minutes to arrive)

### Validation errors showing:
- This is expected! Validation works correctly
- Fill all fields according to requirements
- Look for red error messages under each field

## 🎯 Alternative Email Services (If Needed)

If Web3Forms doesn't work, alternatives:

1. **Formspree** - 50 forms/month free
2. **EmailJS** - 200 emails/month free  
3. **Resend** - 100 emails/day free (requires backend)

## 📞 Support

If you need help setting up:
1. Check Web3Forms documentation: https://docs.web3forms.com
2. Email Web3Forms support: support@web3forms.com
3. The form code is in: `components/home/contact-cta.tsx`

---

**Last Updated:** January 2026  
**Contact Email:** mahagnanis@gmail.com  
**Location:** Hyderabad, Telangana, India
