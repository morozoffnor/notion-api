import { Client } from "@notionhq/client"
import { default as config } from "./config.js"

const notion = new Client({ auth: config.api_key })

const databaseId = config.db

export async function addItem(text) {
  try {
    await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties: {
            'Link': {
              type: 'title',
              title: [
                {
                  type: 'text',
                  text: {
                    content: text,
                  },
                },
              ],
            },
          },
        
      },
    })
    console.log(`Entry added. Content: '${text}'`)
  } catch (error) {
    console.error(error.body)
  }
}

