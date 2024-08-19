
// export default function handler(req, res) {
//    if(req.method === "GET"){
//     res.status(200).json({message:'get request successfull'})
//    }
//    else if(req.method === "POST"){
//     res.status(200).json({message:"post request successfull"})
//    }
//    else {
//     req.status(200).json({message:"METHOD NOT ALLOWED"})
//    }
// }
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  // Authenticate user
  const { email, password } = req.body;

  if (email === 'example@example.com' && password === 'password') {
    const token = jwt.sign({ email }, 'secret_key');
    res.status(200).json({ message: 'Authentication successful', token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
}
