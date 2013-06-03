class Page
  include Mongoid::Document

  embeds_one :container
end
