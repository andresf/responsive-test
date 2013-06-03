class Element
  include Mongoid::Document

  field :size
  field :hints, type: Array, default: []
  field :background_url
  field :css_class #Temp for prototype purposes

  embedded_in :parent, polymorphic: true
end
