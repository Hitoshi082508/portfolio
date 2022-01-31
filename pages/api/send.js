export default function handler(req, res) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: 'hitoshi082508@gmail.com',
      from: 'hitoshi082508@gmail.com',
      subject: 'お問合せありがとうございました。',
      text: 'お問合せありがとうございました。ご返信致しますのでしばらくお待ちください。',
      html: `<p>名前:${req.body.name}</p><br /><p>電話:${req.body.tel}</p><br /><p>メールアドレス:${req.body.email}</p><br /><p>内容:${req.body.text}</p>`,
    }

    ;(async () => {
      try {
        await sgMail.send(msg)
      } catch (error) {
        console.error(error)
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })()
  }

  res.status(200)
}
