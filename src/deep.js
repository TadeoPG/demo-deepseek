// Please install OpenAI SDK first: `npm install openai`

import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-06f74b93ec39436694cf75b735196cb0",
});

export const createCompletion = async (message) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a knowledgeable health coach." },
        { role: "user", content: message },
      ],
      model: "deepseek-chat",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error("Completion failed: " + error.message);
  }
};

export const createStreamingCompletion = async (message) => {
  try {
    const stream = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a knowledgeable health coach." },
        { role: "user", content: message },
      ],
      model: "deepseek-chat",
      stream: true,
    });

    return stream;
  } catch (error) {
    throw new Error("Completion failed: " + error.message);
  }
};

main();
const https = require('follow-redirects').https;
const fs = require('fs');

let options = {
  'method': 'POST',
  'hostname': 'api.deepseek.com',
  'path': '/chat/completions',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer sk-06f74b93ec39436694cf75b735196cb0'
  },
  'maxRedirects': 20
};

const req = https.request(options, (res) => {
  let chunks = [];

  res.on("data", (chunk) => {
    chunks.push(chunk);
  });

  res.on("end", (chunk) => {
    let body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", (error) => {
    console.error(error);
  });
});


module.exports = openai;

// pront que se le envia mediante peticion
      //   { 
      //   "model" : "deepseek-chat" , 
      //   "messages" : [ 
      //     { "role" : "system" , "content" : "Eres un asistente útil." }, 
      //     { "role" : "user" , "content" : "Dime las caracteristicas de el producto Teclado para llenar en su base de datos, las columnas categoria, descripcion, color y precio" } 
      //   ], 
      //   "stream" : false
      //  }




// let postData = JSON.stringify({
//   "messages": [
//     {
//       "content": "You are a helpful assistant",
//       "role": "system"
//     },
//     {
//       "content": "Hi",
//       "role": "user"
//     }
//   ],
//   "model": "deepseek-chat",
//   "frequency_penalty": 0,
//   "max_tokens": 2048,
//   "presence_penalty": 0,
//   "response_format": {
//     "type": "text"
//   },
//   "stop": null,
//   "stream": false,
//   "stream_options": null,
//   "temperature": 1,
//   "top_p": 1,
//   "tools": null,
//   "tool_choice": "none",
//   "logprobs": false,
//   "top_logprobs": null
// });

// req.write(postData);

// req.end();