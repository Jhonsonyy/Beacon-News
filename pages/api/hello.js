// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs, { readFileSync } from "fs"
import path from "path"
export default function handler(req, res) {
  const slug = req.query.slug;
  console.log("slug is found on server", slug)
  const foundedArticle = {};
  const articlesPath = path.join(process.cwd(), 'pages/api/articles')
  const Articles = fs.readdirSync(articlesPath);
  if(slug){
    Articles.find((article)=> {
      const articlesLoc = path.join(articlesPath, article)
      const articleFile = fs.readFileSync(articlesLoc, 'utf-8');
      if(JSON.parse(articleFile).slug === slug){
        res.status(200).json(JSON.parse(articleFile));
        return true
      }
      else{
        return false
      }
    })
  }
  else{
    const NewArr = Articles.map((article)=> {
      const articlesLoc =  path.join(articlesPath, article)
      const articleFile =  fs.readFileSync(articlesLoc, 'utf-8');
        return JSON.parse(articleFile)
      })
      res.status(200).json(NewArr);

  }

    
}
