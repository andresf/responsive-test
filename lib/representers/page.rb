module Representers
  module Page
    include Roar::Representer::JSON

    property :title
    property :container, {
      :class  => Element,
      :extend => Representers::Element,
      :as     => :elements
    }
  end
end
