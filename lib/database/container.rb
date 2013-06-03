class Container < Element
  embeds_many :elements, as: :parent
end
