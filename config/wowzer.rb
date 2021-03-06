# encoding: UTF-8
page = Page.create(title: 'Wowzer')
page.container =
  (canvas = Container.new)

canvas.elements.create({ logo_url: 'img/logo.png', size: '1x4' }, Header)

canvas.elements << (intro = Container.new(size: '2x4'))
intro.elements.create({ size: '2x2', url: 'img/office.png' }, Image)
intro.elements.create({ size: '2x2', markdown:
  "<h1>Don't find just a job, find your dream job</h1>
<p><strong>\ˈdrēm jäb\</strong><p/><p>A job in a place that inspires you, a place where you can contribute your talent to a shared mission.</p>" }, Text)
intro.save!

canvas.elements.create({ size: '1x4', markdown:
                         "<h2>Values & Work Environment</h2>" }, Text)

canvas.elements << (photos = Container.new(size: '2x4'))
photos.elements.create({ size: '1x1', url: 'img/pic1.png' }, Image)
photos.elements.create({ size: '1x1', markdown: 'Love what you do', css_class: 'values' }, Text)
photos.elements.create({ size: '1x1', url: 'img/pic2.png' }, Image)
photos.elements.create({ size: '1x1', markdown: 'Create impact', css_class: 'values' }, Text)
photos.elements.create({ size: '1x1', markdown: 'Have fun', css_class: 'values' }, Text)
photos.elements.create({ size: '1x1', url: 'img/pic3.png' }, Image)
photos.elements.create({ size: '1x1', markdown: 'Try new things', css_class: 'values' }, Text)
photos.elements.create({ size: '1x1', url: 'img/pic4.png' }, Image)
photos.save!

canvas.elements.create({ size: '1x4', markdown:
  "<h2>Join Us</h2>
<p>We are a young and fast growing Silicon Valley-based tech startup. We are currently looking for the best engineering and design talent that would like to be part of our development team in Guadalajara, Mexico.</p>

<p>As a team member, you will help us design, develop, test and deliver our video recruitment experience. We only want the best professionals who are passionate about technology and committed to build great products.</p>

<p>Take the challenge and help millions of people find their dream jobs!</p>" }, Text)

canvas.elements.create({ size: '1x4', url: 'http://wowzer.com', text: 'Apply Now' }, Button)

canvas.save!
page.save!
