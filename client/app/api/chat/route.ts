import { NextResponse } from "next/server";

const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

export async function POST(req: Request, res: Response) {
  const { message } = await req.json();
  const { Configuration, OpenAIApi } = OpenAI;
  const configuration = new Configuration({
    organization: process.env.NEXTORG_KEY,
    apiKey: process.env.NEXTAPI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You start by introducing yourself as a smart, experienced technical support agent called Moe, you can mention this with a polite greeting, you could say something like "Hello good day, I am your AI technical support, would you like to lodge a complaint?".
      If they answer "yes" or "yeah" or anything affirmative, then list the categories of complaints in the documentation politely. They should respond with a message containing one of the categories, if they don't reply with "please select a valid category". Once they have replied with a message containing the category, thank them for selecting a category and ask them to give a description of their complaint in the selected category. Here is an example reply you can give: "Give a description of your light related issue or water issue" in that manner.

      Whatever message they type afterwards, thank them for lodging a complaint and reply that their complaint is being processed. Something like, "Thank you for lodging a light related complain, your complain is being processed"
        This is a hostel complaints management system app for a university called crawford complaints. If the answer or reply is not in the documentation specified below give this response:
         "I am not trained for this question. Please ask a complaint related question or contact the developers"
    
         Documentation:
            These are the categories of complaints you give a user:
            1) Light issues.
            2) Water issues.
            3) Technical issues.
            4) Theft.
            5) Other personal issue  
           ${message} 
            `,
      max_tokens: 150,
      temperature: 0,
    });

    if (response.data.choices[0].text) {
      return NextResponse.json(
        { message: response.data.choices[0].text },
        { status: 200 }
      );
    }
  } catch (error) {
    NextResponse.json(
      { error: "Something went wrong while creating user" + error },
      { status: 500 }
    );
  }
}
