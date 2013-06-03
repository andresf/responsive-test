module Representers
  module Element
    include Roar::Representer::JSON

    property :size
    property :hints
    property :background_url, getter: proc { self['background_url'] }
    property :css_class, getter: proc { self['css_class'] }
    property :type, getter: proc { self['_type'] }

    #Specific properties
    property :url, getter: proc { self['url'] }
    property :text, getter: proc { self['text'] }
    property :logo_url, getter: proc { self['logo_url'] }
    property :tag, getter: proc { self['tag'] }
    property :content, getter: proc { self['content'] }
    property :markdown, getter: proc { self['markdown'] }

    collection :elements, {
      :class  => Element,
      :extend => Representers::Element,
      :getter => proc { self.respond_to?(:elements) ? self.elements : nil }
    }
  end
end
