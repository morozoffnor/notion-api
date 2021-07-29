import { Client } from "@notionhq/client"
// import { readFileSync } from "fs";

//const { config } = JSON.parse(readFileSync('config.json'));

import { default as config } from "./config.js"

const notion = new Client({ auth: config.api_key })

const databaseId = config.db

async function addItem(text) {
  try {
    await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties: {
            'Grocery item': {
              type: 'title',
              title: [
                {
                  type: 'text',
                  text: {
                    content: 'Tomatoes',
                  },
                },
              ],
            },
            Price: {
              type: 'number',
              number: 1.49,
            },
            'Last ordered': {
              type: 'date',
              date: {
                start: '2021-05-11',
              },
            },
          },
        
      },
    })
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")