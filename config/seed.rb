page = Page.create(title: 'Test Page')
page.container = 
  (canvas = Container.new)

canvas.elements.create({ logo_url: 'logo.png', text: 'Title', size: '1x4' }, Header)

canvas.elements <<
  (intro = Container.new(background_url: 'intro.png', size: '3x4'))
intro.elements.create({ size: '1x4' }, Filler)
intro.elements.create({ tag: 'h1', content: "This is such an awesome introduction, you wouldn't believe it. In fact, you're seeing it, and you still don't believe it.", size: '1x4' }, Text)
intro.elements.create({ size: '1x4' }, Filler)
intro.save!

canvas.elements.create({ size: '2x2', url: 'image.png' }, Image)
canvas.elements.create({ size: '2x2', url: 'video.mpeg' }, Video)
canvas.elements.create({ size: '1x4', url: 'http://wowzer.com', text: 'Click me!' }, Button)

canvas.save!
page.save!
