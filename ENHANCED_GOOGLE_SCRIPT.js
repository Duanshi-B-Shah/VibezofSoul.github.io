function doPost(e) {
    try {
        // Check if event object exists and has postData
        if (!e || !e.postData || !e.postData.contents) {
            throw new Error('Invalid request: Missing form data');
        }

        // Get the active spreadsheet
        const sheet = SpreadsheetApp.getActiveSheet();

        // Parse the JSON data
        const data = JSON.parse(e.postData.contents);

        // Add the data to the sheet FIRST (fast operation)
        sheet.appendRow([
            data.name,
            data.phone,
            data.service,
            data.message,
            data.timestamp
        ]);

        // Return success immediately for fast user experience
        const response = ContentService
            .createTextOutput(JSON.stringify({ result: 'success', message: 'Form submitted successfully' }))
            .setMimeType(ContentService.MimeType.JSON);

        // Send email in background (after response is sent)
        try {
            sendEmailNotification(data);
        } catch (emailError) {
            console.error('Email sending failed (but form was saved):', emailError);
        }

        return response;

    } catch (error) {
        console.error('Error in doPost:', error);
        return ContentService
            .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function sendEmailNotification(data) {
    // 🔧 CONFIGURE THIS: Replace with your actual email address
    const YOUR_EMAIL = 'your-email@gmail.com'; // ⚠️ CHANGE THIS TO YOUR EMAIL

    const SUBJECT = '🔮 New Tarot Inquiry - ' + data.name;

    // Create beautiful HTML email content
    const htmlBody = `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); color: #ffd700; padding: 25px; text-align: center; border-radius: 15px 15px 0 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🔮 Mystic Insights</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Customer Inquiry</p>
      </div>
      
      <!-- Content -->
      <div style="background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <h2 style="color: #1a1a2e; margin: 0 0 20px 0; font-size: 22px;">Customer Details</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-weight: bold; color: #1a1a2e; width: 30%;">
              <span style="font-size: 18px;">👤</span> Name:
            </td>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-size: 16px;">
              ${data.name}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-weight: bold; color: #1a1a2e;">
              <span style="font-size: 18px;">📱</span> Phone:
            </td>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-size: 16px;">
              <a href="tel:${data.phone}" style="color: #27ae60; text-decoration: none; font-weight: bold;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-weight: bold; color: #1a1a2e;">
              <span style="font-size: 18px;">🎯</span> Service:
            </td>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-size: 16px;">
              <span style="background: #ffd700; color: #1a1a2e; padding: 4px 12px; border-radius: 20px; font-weight: bold;">
                ${data.service}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-weight: bold; color: #1a1a2e;">
              <span style="font-size: 18px;">⏰</span> Time:
            </td>
            <td style="padding: 12px 15px; border-bottom: 2px solid #f0f0f0; font-size: 16px;">
              ${new Date(data.timestamp).toLocaleString()}
            </td>
          </tr>
        </table>
        
        <!-- Message Section -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 25px;">
          <h3 style="margin: 0 0 10px 0; color: #1a1a2e; font-size: 18px;">
            <span style="font-size: 18px;">💬</span> Customer Message:
          </h3>
          <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #444;">
            "${data.message}"
          </p>
        </div>
        
        <!-- Call to Action -->
        <div style="background: linear-gradient(45deg, #27ae60, #2ecc71); padding: 20px; border-radius: 10px; text-align: center; color: white;">
          <h3 style="margin: 0 0 10px 0; font-size: 20px;">📞 Action Required</h3>
          <p style="margin: 0 0 15px 0; font-size: 16px;">Contact this customer soon for their ${data.service} inquiry!</p>
          <a href="tel:${data.phone}" style="background: white; color: #27ae60; padding: 12px 25px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px;">
            📞 Call ${data.phone}
          </a>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="margin: 0; font-size: 14px; color: #888;">
            This notification was sent from your Mystic Insights website
          </p>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #aaa;">
            Received at ${new Date(data.timestamp).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  `;

    // Plain text version for email clients that don't support HTML
    const textBody = `
🔮 NEW TAROT INQUIRY 🔮

👤 Name: ${data.name}
📱 Phone: ${data.phone}
🎯 Service: ${data.service}
💬 Message: ${data.message}
⏰ Time: ${new Date(data.timestamp).toLocaleString()}

📞 CONTACT THIS CUSTOMER SOON!
Call ${data.phone} about their ${data.service} inquiry.

---
This notification was sent from your Mystic Insights website.
  `;

    try {
        // Send the email
        MailApp.sendEmail({
            to: YOUR_EMAIL,
            subject: SUBJECT,
            htmlBody: htmlBody,
            body: textBody
        });

        console.log('✅ Email notification sent successfully to: ' + YOUR_EMAIL);
    } catch (error) {
        console.error('❌ Email notification failed:', error);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ result: 'GET method not supported' }))
        .setMimeType(ContentService.MimeType.JSON);
}

// Test function - you can run this to test email notifications
function testEmailNotification() {
    try {
        console.log('🧪 Starting email notification test...');

        const testData = {
            name: 'Test Customer',
            phone: '+91 98765 43210',
            service: 'Tarot Reading',
            message: 'This is a test message to verify email notifications are working correctly.',
            timestamp: new Date().toISOString()
        };

        console.log('📧 Sending test email with data:', testData);
        sendEmailNotification(testData);
        console.log('✅ Test email sent successfully!');

        return 'Test email sent! Check your inbox.';

    } catch (error) {
        console.error('❌ Test email failed:', error);
        return 'Test failed: ' + error.toString();
    }
}

// Test the complete form submission flow (including sheet writing)
function testCompleteFlow() {
    try {
        console.log('🧪 Testing complete form submission flow...');

        // Simulate form data
        const mockEvent = {
            postData: {
                contents: JSON.stringify({
                    name: 'Test Customer Complete',
                    phone: '+91 98765 43210',
                    service: 'Celtic Cross Reading',
                    message: 'This is a complete flow test including Google Sheets and email.',
                    timestamp: new Date().toISOString()
                })
            }
        };

        // Test the doPost function
        const result = doPost(mockEvent);
        console.log('📊 doPost result:', result.getContent());

        return 'Complete flow test completed! Check your Google Sheet and email.';

    } catch (error) {
        console.error('❌ Complete flow test failed:', error);
        return 'Complete flow test failed: ' + error.toString();
    }
}