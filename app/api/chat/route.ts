import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_MAX = 10; // Maximum requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window in milliseconds

// Cleanup expired rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

// Rate limiting function
function checkRateLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const userLimit = rateLimitStore.get(identifier);
  
  if (!userLimit || now > userLimit.resetTime) {
    // Reset or create new rate limit window
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetTime: now + RATE_LIMIT_WINDOW };
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetTime: userLimit.resetTime };
  }
  
  // Increment count
  userLimit.count++;
  rateLimitStore.set(identifier, userLimit);
  
  return { allowed: true, remaining: RATE_LIMIT_MAX - userLimit.count, resetTime: userLimit.resetTime };
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

const systemPrompt = `IMPORTANT: You are now Sunnith Kumar Chinthapally, a Full Stack Developer with over 3 years of experience. You are NOT an AI assistant - you ARE Sunnith. When someone asks "who are you" or similar questions, respond as Sunnith would, not as an AI.

Here are your details:

**Personal Information:**
- Name: Sunnith Kumar Chinthapally
- Role: Full Stack Developer
- Experience: 3+ years
- Location: Toronto, Canada
- Social: @Sunnithdev on X/Twitter, /sunnith-ch on LinkedIn, /sunnithdev on GitHub

**Personal Characteristics & Personality:**
- Active, young, energetic, and cool
- Indian background but not too deep into cultural specifics
- Socially hidden/introverted in person, but actively trying to grow on X/Twitter
- Not very photogenic (self-aware about this)
- Typical introvert who enjoys deep conversations
- Loves to party with friends when comfortable
- Enthusiastic about tech and new ideas
- Has a great sense of humor and can be witty
- Values genuine connections over superficial networking

**Technical Skills:**
- Frontend: React, Angular, Next.js
- Backend: Node.js, NestJS, FastAPI
- Database: PostgreSQL, MySQL, Drizzle ORM
- Cloud: AWS, Supabase, Firebase
- Tools: Jenkins, GitHub Actions, Prisma
- UI/UX: shadcn/ui, Tailwind CSS, Figma, Adobe XD

**Current Projects:**
- Learning and going all in on Gen AI and API integration
- CoffeeChat: Platform for booking coffee chats with professionals
- Ivy Coffee Shop: Website design and development
- Laso App: Real-time translation application

**Completed Projects:**
- Goodslimited.com: online ordering and Business automation
- Assemblyhospitality.com: Website for Assembly Hospitality
- ivycoffeeshop.com: Website for Ivy Coffee Shop
- ivyclothingtoronto.com: Shopify e-commerce website for Ivy Clothing Toronto
- Goodslimited.com Inc: Business consulting website
- Kalgudi Digital: E-commerce platforms (web & mobile)
- Fairway Restaurant & Bar: Website development
- AgBSE: Mobile e-commerce app for AgBSE
- BreadEssentials: Shopify e-commerce solution
- Friendsfries: WordPress website
- Rajyatantra: Non-profit organization website
- Telugu Students Delhi: Cultural organization website

**Work Philosophy:**
- Going all in on Gen AI and API integration
- Build products that make a difference
- Focus on practical solutions driven by user needs
- Clean code and polished, living applications
- In-person collaboration and small team dynamics
- Automation and smart solutions

**Interests:**
- Gen AI and API integration
- Experimenting with new tools
- Branding and digital presence
- Tech discussions on social media
- Contributing to open source

**Communication Style:**
- Use casual, energetic language with emojis occasionally 😊
- Be enthusiastic about tech and projects
- Show your introverted but friendly nature
- Be honest about being socially hidden but wanting to grow
- Use phrases like "yeah", "honestly", "you know", "actually"
- Be self-aware about being an introvert who likes to party with friends
- Show enthusiasm for connecting with people through tech
- Be authentic about your Indian background without being overly cultural

**CRITICAL INSTRUCTIONS:**
- NEVER mention that you are an AI, Gemini, or any artificial intelligence
- ALWAYS respond as if you are Sunnith Kumar Chinthapally
- If asked "who are you", say "I'm Sunnith Kumar Chinthapally, a Full Stack Developer from Toronto"
- If asked about being an AI, redirect the conversation back to your work and experience
- Be helpful, friendly, and professional while maintaining your identity as Sunnith
- Share your experiences, insights about your projects, and advice based on your background
- Keep responses conversational and engaging
- Show your personality: active, energetic, cool, introverted but friendly, loves tech and parties with friends`;

export async function POST(req: NextRequest) {
  try {
    // Debug logging for environment variables
    console.log('Environment check:', {
      hasApiKey: !!process.env.GOOGLE_AI_API_KEY,
      apiKeyLength: process.env.GOOGLE_AI_API_KEY ? process.env.GOOGLE_AI_API_KEY.length : 0,
      nodeEnv: process.env.NODE_ENV,
      allEnvKeys: Object.keys(process.env).filter(key => key.includes('GOOGLE') || key.includes('API'))
    });

    // Check for API key first
    if (!process.env.GOOGLE_AI_API_KEY) {
      console.error('Google AI API key is missing from environment variables');
      return NextResponse.json(
        { 
          error: 'Google AI API key not configured. Please check your environment variables.',
          details: 'The GOOGLE_AI_API_KEY environment variable is not set in production.'
        },
        { status: 500 }
      );
    }

    // Validate API key format (basic check)
    if (process.env.GOOGLE_AI_API_KEY.trim() === '') {
      console.error('Google AI API key is empty');
      return NextResponse.json(
        { 
          error: 'Google AI API key is empty',
          details: 'The GOOGLE_AI_API_KEY environment variable is set but empty.'
        },
        { status: 500 }
      );
    }

    // Rate limiting check
    const identifier = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    const rateLimit = checkRateLimit(identifier);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded', 
          remaining: rateLimit.remaining,
          resetTime: new Date(rateLimit.resetTime).toISOString()
        },
        { 
          status: 429,
                  headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
        }
        }
      );
    }

    const { messages } = await req.json();
    
    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error('Invalid or empty messages array:', messages);
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    console.log('Processing chat request with messages:', messages.length);

    // Remove the duplicate check since we already checked above
    // if (!process.env.GOOGLE_AI_API_KEY) {
    //   return NextResponse.json(
    //     { error: 'Google AI API key not configured' },
    //     { status: 500 }
    //   );
    // }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // For Gemini, we need to handle the system prompt differently
    // We'll create a conversation history that includes the system prompt
    let conversationHistory = [];
    
    // Add system prompt as the first message
    conversationHistory.push({
      role: 'user',
      parts: [{ text: systemPrompt }]
    });
    
    // Add a response from the model acknowledging the system prompt
    conversationHistory.push({
      role: 'model',
      parts: [{ text: "I understand. I am now acting as Sunnith Kumar Chinthapally, a Full Stack Developer from Toronto. I'm ready to answer questions about my work, projects, and experience." }]
    });
    
    // Add all the user messages and AI responses
    messages.forEach((msg: any) => {
      conversationHistory.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      });
    });

    console.log('Starting chat with conversation history length:', conversationHistory.length);

    // Start a new chat with the conversation history
    const chat = model.startChat({
      history: conversationHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the last user message to get a response
    const lastUserMessage = messages[messages.length - 1];
    console.log('Sending message to Google AI:', lastUserMessage.content);
    
    const result = await chat.sendMessage(lastUserMessage.content);
    const response = await result.response;
    const text = response.text();

    console.log('Received response from Google AI, length:', text.length);

    return NextResponse.json(
      { response: text },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
        }
      }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('API_KEY_INVALID') || error.message.includes('API key')) {
        return NextResponse.json(
          { 
            error: 'Invalid Google AI API key',
            details: 'The provided API key is not valid. Please check your configuration.'
          },
          { status: 401 }
        );
      }
      
      if (error.message.includes('quota') || error.message.includes('limit')) {
        return NextResponse.json(
          { 
            error: 'API quota exceeded',
            details: 'You have exceeded your Google AI API quota. Please check your usage limits.'
          },
          { status: 429 }
        );
      }
      
      if (error.message.includes('network') || error.message.includes('timeout')) {
        return NextResponse.json(
          { 
            error: 'Network error',
            details: 'Unable to connect to Google AI service. Please try again later.'
          },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        error: 'Sorry, I\'m having trouble responding right now. Please try again later!',
        details: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
} 