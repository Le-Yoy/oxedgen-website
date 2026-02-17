/**
 * Airtable Integration
 * Handles form submissions to Airtable base
 *
 * Setup Instructions:
 * 1. Create an Airtable account at airtable.com
 * 2. Create a new base called "OXEDGEN Leads"
 * 3. Create a table with the following fields:
 *    - Name (Single line text)
 *    - Email (Email)
 *    - Company (Single line text)
 *    - Phone (Phone number)
 *    - Message (Long text)
 *    - Created (Created time) - auto-generated
 * 4. Get your API key from airtable.com/account
 * 5. Get your Base ID from the API documentation
 * 6. Add credentials to .env.local file
 */

interface FormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export async function submitToAirtable(data: FormData) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  if (!apiKey || !baseId) {
    throw new Error('Airtable credentials not configured. Please check .env.local file.');
  }

  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Name: data.name,
        Email: data.email,
        Company: data.company,
        Phone: data.phone || '',
        Message: data.message,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to submit to Airtable');
  }

  return await response.json();
}

// Rate limiting helper (optional - implement later for security)
// export function checkRateLimit(ip: string): boolean {
//   // TODO: Implement rate limiting logic
//   // Could use Redis, in-memory store, or database
//   return true;
// }

// Input validation and sanitization
export function validateFormData(data: FormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Invalid email address');
  }

  // Company validation
  if (!data.company || data.company.trim().length < 2) {
    errors.push('Company name must be at least 2 characters');
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  // Phone validation (optional field)
  if (data.phone && data.phone.trim().length > 0) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push('Invalid phone number format');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
