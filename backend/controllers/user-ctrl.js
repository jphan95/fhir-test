const user = require('../models/user')

createUser = (req, res) => {
  const body = req.body;

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a user',
      })
  }

  console.log(body)
  const u = new user(body)
  
  console.log(u)

  if (!u) {
      return res.status(400).json({ success: false, error: err })
  }

  u
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: user._id,
              message: 'user created!',
              user: u
          })
      })
      .catch(error => {
        console.log(error)
          return res.status(400).json({
              error,
              message: 'user not created!',
          })
      })
}

getUser = async (req, res) => {
  const { ehr_id } = req.params;
    await user.find({ehr_id}, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
          console.log(data)
            return res
                .status(404)
                .json({ success: false, error: `user not found` })
        }
        return res.status(200).json({ success: true, data })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUser
}