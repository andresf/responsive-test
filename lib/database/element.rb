class Element
  include Mongoid::Document

  field :size
  field :hints, type: Array
  field :background_url
end
