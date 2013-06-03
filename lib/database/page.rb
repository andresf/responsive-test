class Page
  include Mongoid::Document

  field :title
  embeds_one :container, as: :parent
end
