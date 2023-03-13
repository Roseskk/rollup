import  '../index.css'

function createPage () {
    const title = document.createElement('h1')
    title.textContent = 'I love JavaScript'

    const image = document.createElement('img')
    image.className = 'image'
    image.src = '../assets/logo.png'

    document.body.append(image)
    document.body.append(title)
}

createPage()
