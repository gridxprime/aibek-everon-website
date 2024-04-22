import React from 'react'

function Contacts() {
  return (
    <>
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Bishkek, Kyrgyzstan</p>
                        <p>Chyngyz Aitmatov avenue 299/1</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+996 012 45 67 89">+996 012 45 67 89</a></p>
                        <p><a href="tel:+996 900 520 000">+996 900 520 000</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:kenrosenberg@gmail.com">aibek@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </>
  )
}

export default Contacts