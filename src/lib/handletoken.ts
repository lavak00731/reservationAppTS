import jwt from 'jsonwebtoken';

export const generateToken = (userId: Object) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
}

export const validateToken = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  return decoded;
}