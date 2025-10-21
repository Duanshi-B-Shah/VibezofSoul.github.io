# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Tarot Form Submissions"
4. In the first row, add these headers:
   - A1: Name
   - B1: Phone
   - C1: Service
   - D1: Message
   - E1: Timestamp

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add the data to the sheet
    sheet.appendRow([
      data.name,
      data.phone,
      data.service,
      data.message,
      data.timestamp
    ]);
    
    // Send WhatsApp notification (optional - see WHATSAPP_NOTIFICATIONS_SETUP.md)
    // sendWhatsAppNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({result: 'GET method not supported'}))
    .setMimeType(ContentService.MimeType.JSON);
}

// WhatsApp notification function (uncomment and configure to enable)
/*
function sendWhatsAppNotification(data) {
  // Twilio credentials - UPDATE THESE WITH YOUR ACTUAL VALUES
  const TWILIO_ACCOUNT_SID = 'ACxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID
  const TWILIO_AUTH_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxx';  // Your Auth Token
  const TWILIO_WHATSAPP_FROM = 'whatsapp:+14155238886';  // Twilio sandbox number
  const YOUR_WHATSAPP_NUMBER = 'whatsapp:+919876543210'; // Your WhatsApp number (with country code)
  
  // Create message
  const message = `🔮 NEW TAROT INQUIRY 🔮

👤 Name: ${data.name}
📱 Phone: ${data.phone}
🎯 Service: ${data.service}
💬 Message: ${data.message}
⏰ Time: ${new Date(data.timestamp).toLocaleString()}

Reply to this customer soon! ✨`;

  // Twilio API endpoint
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  
  // Prepare request
  const payload = {
    'From': TWILIO_WHATSAPP_FROM,
    'To': YOUR_WHATSAPP_NUMBER,
    'Body': message
  };
  
  const options = {
    'method': 'POST',
    'headers': {
      'Authorization': 'Basic ' + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN)
    },
    'payload': payload
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    console.log('WhatsApp sent successfully:', response.getContentText());
  } catch (error) {
    console.error('WhatsApp sending failed:', error);
  }
}
*/
```

## Step 3: Deploy the Script
1. Click **Deploy > New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## Step 4: Update Your Website
1. Open `script.js`
2. Find line with `const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script URL
4. Find line with `const GOOGLE_SHEETS_VIEW_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit#gid=0';`
5. Replace `YOUR_SHEET_ID` with your Google Sheets document ID (found in the URL of your sheet)

## Step 5: Get Your Google Sheets ID
1. Open your Google Sheets document
2. Look at the URL in your browser
3. The Sheet ID is the long string between `/d/` and `/edit`
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - Sheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
4. Copy this ID and replace `YOUR_SHEET_ID` in the script

## Step 6: Test the Integration
1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - the data should appear in a new row
4. Test the admin panel - click "Open Google Sheets" button

## Admin Access Credentials
Current admin credentials (change these in script.js):
- **Username**: admin
- **Password**: mystic2024

To change credentials:
1. Open `script.js`
2. Find the `verifyAdmin()` function
3. Update `ADMIN_USERNAME` and `ADMIN_PASSWORD` variables

## Security Notes
- The Google Apps Script runs with your permissions
- Only you can see the spreadsheet data
- The web app URL is public but doesn't expose sensitive data
- Change the admin credentials from the defaults
- Consider using environment variables for production

## Troubleshooting
- If submissions don't appear, check the Apps Script execution log
- Make sure the sheet has the correct headers
- Verify the web app URL is correct
- Check browser console for any errors

## Data Structure
Each form submission creates a row with:
- Name: Customer's full name
- Phone: Country code + 10-digit number
- Service: Selected service type
- Message: Customer's message
- Timestamp: When the form was submitted

The data is automatically saved to both Google Sheets and local storage as backup.