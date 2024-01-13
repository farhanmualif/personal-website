import { NextApiRequest } from "next";


export function GET(request: NextApiRequest){
  
}

export function POST(request: NextApiRequest) {
  const formData = request.body();
  console.log(formData);
}
