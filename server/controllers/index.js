export const welcomeUser = async (req, res) => {
  try {
    res.status(200).json('Welcome to cryptic api');
  } catch (error) {
    res.status(400).json(error);
  }
};
