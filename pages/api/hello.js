// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs, { readFileSync } from "fs"
import path from "path"
export default function handler(req, res) {
  const articlePath = path.join(process.cwd(), 'pages/api/articles')
  const Articles = fs.readdirSync(articlePath);

    const NewArr = Articles.map((article)=> {
      const articleLoc =  path.join(articlePath, article)
      const articleFile =  fs.readFileSync(articleLoc, 'utf-8');
      return JSON.parse(articleFile)
  
    })
  
  res.status(200).json(NewArr);
}
