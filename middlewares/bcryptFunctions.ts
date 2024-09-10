import bcrypt from "bcryptjs";

//password hash function
const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw new Error("Error hashing password.");
  }
};

//decode assword function
const decodePassword = async (
  password: string,
  savedPassword: string
): Promise<boolean> => {
  try {
    await bcrypt.compare(password, savedPassword);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
export { hashPassword, decodePassword };
